#!/usr/bin/env python3
"""
generate-thumbnails.py
======================
Generates flat, perspective-correct (rectilinear) thumbnail images from
equirectangular panorama files used in the PPAPP 360° Virtual Tour.

For each scene defined in the location JS files, this script:
1. Reads the full equirectangular panorama image.
2. Extracts a rectilinear (flat perspective) crop at the scene's default
   yaw/pitch direction using equirectangular → rectilinear re-projection.
3. Saves the result as a small JPEG thumbnail in a `thumbs/` subfolder.
4. Optionally updates the scene data JS files to reference the new thumbnails.

Usage:
    python scripts/generate-thumbnails.py                  # Generate only
    python scripts/generate-thumbnails.py --update-scenes   # Generate + update JS files

Requirements:
    pip install Pillow numpy
"""

import argparse
import math
import os
import re
import sys
from pathlib import Path

import numpy as np
from PIL import Image

# ── Configuration ──────────────────────────────────────────────────────
THUMB_WIDTH = 400       # Output thumbnail width in pixels
THUMB_HEIGHT = 300      # Output thumbnail height in pixels
THUMB_QUALITY = 80      # JPEG quality (0-100)
HFOV_DEG = 90.0         # Horizontal field of view in degrees (~24mm lens)
PROJECT_ROOT = Path(__file__).resolve().parent.parent
LOCATIONS_DIR = PROJECT_ROOT / 'locations'
IMAGES_DIR = PROJECT_ROOT / 'images'


# ── Scene Data Parser ──────────────────────────────────────────────────

def parse_scenes_from_js(filepath: Path) -> list[dict]:
    """
    Parse a scene data JS file and extract scene objects.

    Extracts the following fields from each scene object using regex:
    - id, panorama, thumbnail, defaultYaw, defaultPitch

    Args:
        filepath: Path to the JS scene data file.

    Returns:
        List of dicts with keys: id, panorama, thumbnail, defaultYaw, defaultPitch
    """
    text = filepath.read_text(encoding='utf-8')

    scenes = []
    # Split on scene object boundaries — each scene starts with `id:`
    # We use a regex that captures each { ... } block containing an `id:` field
    scene_blocks = re.findall(
        r'\{[^{}]*?id:\s*[\'"]([^"\']+)[\'"][^{}]*?\}',
        text,
        re.DOTALL,
    )

    # Since the above may be too greedy/restrictive with nested braces,
    # let's use a field-by-field approach instead
    scenes = []

    # Find all id fields and their positions
    id_matches = list(re.finditer(r"id:\s*['\"]([^'\"]+)['\"]", text))

    for i, id_match in enumerate(id_matches):
        scene_id = id_match.group(1)

        # Define the region of text for this scene (until the next id or end)
        start = id_match.start()
        end = id_matches[i + 1].start() if i + 1 < len(id_matches) else len(text)
        block = text[start:end]

        # Extract fields from this block
        panorama_m = re.search(r"panorama:\s*['\"]([^'\"]+)['\"]", block)
        thumbnail_m = re.search(r"thumbnail:\s*['\"]([^'\"]+)['\"]", block)
        yaw_m = re.search(r"defaultYaw:\s*['\"]([^'\"]+)['\"]", block)
        pitch_m = re.search(r"defaultPitch:\s*['\"]([^'\"]+)['\"]", block)

        if panorama_m and thumbnail_m:
            scenes.append({
                'id': scene_id,
                'panorama': panorama_m.group(1),
                'thumbnail': thumbnail_m.group(1),
                'defaultYaw': yaw_m.group(1) if yaw_m else '0deg',
                'defaultPitch': pitch_m.group(1) if pitch_m else '0deg',
            })

    return scenes


def find_all_scene_files() -> list[Path]:
    """
    Find all scene data JS files in the locations directory.
    Excludes index.js files (which are aggregators, not scene data).

    Returns:
        Sorted list of Path objects to scene data JS files.
    """
    files = []
    for js_file in LOCATIONS_DIR.rglob('*.js'):
        if js_file.name == 'index.js':
            continue
        files.append(js_file)
    return sorted(files)


def parse_angle(angle_str: str) -> float:
    """
    Parse an angle string like '90deg' or '0deg' into radians.

    Args:
        angle_str: Angle string with 'deg' suffix.

    Returns:
        Angle in radians.
    """
    deg = float(angle_str.replace('deg', ''))
    return math.radians(deg)


# ── Equirectangular → Rectilinear Re-projection ───────────────────────

def equirect_to_rectilinear(
    equirect: np.ndarray,
    yaw: float,
    pitch: float,
    hfov: float = math.radians(HFOV_DEG),
    out_width: int = THUMB_WIDTH,
    out_height: int = THUMB_HEIGHT,
) -> np.ndarray:
    """
    Extract a flat, perspective-correct (rectilinear) image from an
    equirectangular panorama at a given look direction.

    The math:
    1. For each pixel in the output image, compute the corresponding
       3D ray direction on the unit sphere.
    2. Rotate that ray by the target yaw and pitch.
    3. Convert the rotated ray back to equirectangular (longitude, latitude)
       coordinates.
    4. Sample the source panorama at those coordinates using bilinear
       interpolation.

    Args:
        equirect: Source equirectangular image as numpy array (H, W, 3).
        yaw:      Target yaw (horizontal look angle) in radians.
                  0 = center of panorama, positive = right.
        pitch:    Target pitch (vertical look angle) in radians.
                  0 = horizon, positive = up.
        hfov:     Horizontal field of view of the output image in radians.
        out_width:  Output image width in pixels.
        out_height: Output image height in pixels.

    Returns:
        Rectilinear image as numpy array (out_height, out_width, 3).
    """
    eq_h, eq_w = equirect.shape[:2]

    # Compute vertical FOV from horizontal FOV and aspect ratio
    aspect = out_width / out_height
    vfov = 2.0 * math.atan(math.tan(hfov / 2.0) / aspect)

    # Create a grid of pixel coordinates in the output image
    # Normalized to [-1, 1] range
    u = np.linspace(-1.0, 1.0, out_width, dtype=np.float64)
    v = np.linspace(1.0, -1.0, out_height, dtype=np.float64)  # Top=+1 (up), Bottom=-1 (down)
    uu, vv = np.meshgrid(u, v)

    # Convert pixel coordinates to 3D ray directions (camera space)
    # Camera looks along +Z, X is right, Y is up
    x = uu * math.tan(hfov / 2.0)
    y = vv * math.tan(vfov / 2.0)
    z = np.ones_like(x)

    # Normalize to unit vectors
    norm = np.sqrt(x**2 + y**2 + z**2)
    x /= norm
    y /= norm
    z /= norm

    # In Photo Sphere Viewer, positive pitch is looking UP.
    # To rotate the rays UP (+Y direction), we need to negate the pitch angle for this rotation matrix.
    pitch = -pitch

    # Rotation matrices for yaw (around Y axis) and pitch (around X axis)
    # Yaw: rotate around Y (vertical axis)
    cos_yaw = math.cos(yaw)
    sin_yaw = math.sin(yaw)
    # Pitch: rotate around X (horizontal axis)
    cos_pitch = math.cos(pitch)
    sin_pitch = math.sin(pitch)

    # Apply pitch first (rotate around X axis)
    x1 = x
    y1 = y * cos_pitch - z * sin_pitch
    z1 = y * sin_pitch + z * cos_pitch

    # Then apply yaw (rotate around Y axis)
    x2 = x1 * cos_yaw + z1 * sin_yaw
    y2 = y1
    z2 = -x1 * sin_yaw + z1 * cos_yaw

    # Convert 3D ray directions to equirectangular coordinates
    # longitude (theta) = atan2(x, z), range [-pi, pi]
    # latitude (phi) = asin(y), range [-pi/2, pi/2]
    lon = np.arctan2(x2, z2)  # Horizontal angle
    lat = np.arcsin(np.clip(y2, -1.0, 1.0))  # Vertical angle

    # Map to pixel coordinates in the equirectangular image
    # lon: [-pi, pi] → [0, eq_w-1]
    # lat: [-pi/2, pi/2] → [0, eq_h-1]  (top = +pi/2, bottom = -pi/2)
    px = (lon / (2.0 * math.pi) + 0.5) * (eq_w - 1)
    py = (0.5 - lat / math.pi) * (eq_h - 1)

    # Bilinear interpolation
    px0 = np.floor(px).astype(np.int32)
    py0 = np.floor(py).astype(np.int32)
    px1 = px0 + 1
    py1 = py0 + 1

    # Fractional parts
    fx = (px - px0).astype(np.float32)
    fy = (py - py0).astype(np.float32)

    # Wrap horizontally, clamp vertically
    px0 = px0 % eq_w
    px1 = px1 % eq_w
    py0 = np.clip(py0, 0, eq_h - 1)
    py1 = np.clip(py1, 0, eq_h - 1)

    # Sample the four surrounding pixels
    equirect_f = equirect.astype(np.float32)
    c00 = equirect_f[py0, px0]
    c10 = equirect_f[py0, px1]
    c01 = equirect_f[py1, px0]
    c11 = equirect_f[py1, px1]

    # Bilinear blend
    fx = fx[..., np.newaxis]
    fy = fy[..., np.newaxis]
    result = (
        c00 * (1 - fx) * (1 - fy) +
        c10 * fx * (1 - fy) +
        c01 * (1 - fx) * fy +
        c11 * fx * fy
    )

    return np.clip(result, 0, 255).astype(np.uint8)


# ── Thumbnail Generation ──────────────────────────────────────────────

def compute_thumb_path(panorama_rel: str) -> str:
    """
    Given a panorama relative path like './images/bt/ext-outside/bt-ext-outside-1.jpg',
    compute the thumbnail output path by inserting a 'thumbs/' subdirectory.

    Args:
        panorama_rel: Relative path to the panorama image.

    Returns:
        Relative path to the thumbnail image (for use in scene data).
    """
    # Remove the leading './' if present
    clean = panorama_rel.lstrip('./')
    parts = Path(clean)
    # Insert 'thumbs' before the filename
    thumb_path = parts.parent / 'thumbs' / parts.name
    return './' + str(thumb_path).replace('\\', '/')


def generate_thumbnail(
    panorama_path: Path,
    thumb_path: Path,
    yaw_rad: float,
    pitch_rad: float,
) -> bool:
    """
    Generate a single rectilinear thumbnail from an equirectangular panorama.

    Args:
        panorama_path: Absolute path to the source panorama image.
        thumb_path:    Absolute path for the output thumbnail.
        yaw_rad:       Look direction yaw in radians.
        pitch_rad:     Look direction pitch in radians.

    Returns:
        True if successful, False otherwise.
    """
    try:
        # Load the equirectangular panorama
        with Image.open(panorama_path) as img:
            equirect = np.array(img.convert('RGB'))

        # Perform the re-projection
        rectilinear = equirect_to_rectilinear(
            equirect,
            yaw=yaw_rad,
            pitch=pitch_rad,
        )

        # Save the thumbnail
        os.makedirs(thumb_path.parent, exist_ok=True)
        thumb_img = Image.fromarray(rectilinear)
        thumb_img.save(str(thumb_path), 'JPEG', quality=THUMB_QUALITY)

        return True

    except FileNotFoundError:
        print(f'  [WARN] Panorama not found: {panorama_path}')
        return False
    except Exception as e:
        print(f'  [ERR] Error processing {panorama_path}: {e}')
        return False


# ── Scene Data Updater ─────────────────────────────────────────────────

def update_scene_file(filepath: Path, updates: dict[str, str]) -> int:
    """
    Update the thumbnail paths in a scene data JS file.

    Args:
        filepath: Path to the JS scene data file.
        updates:  Dict mapping scene IDs to new thumbnail paths.

    Returns:
        Number of replacements made.
    """
    text = filepath.read_text(encoding='utf-8')
    count = 0

    for scene_id, new_thumb in updates.items():
        # Find the scene block and update its thumbnail field
        # We look for the pattern: id: 'scene_id', ... thumbnail: '...'
        # and replace the thumbnail value

        # Strategy: find the id declaration, then the next thumbnail line
        pattern = (
            r"(id:\s*['\"]"
            + re.escape(scene_id)
            + r"['\"]"
            + r".*?)"  # everything between id and thumbnail
            + r"(thumbnail:\s*['\"])([^'\"]+)(['\"])"
        )

        def replacer(m):
            return m.group(1) + m.group(2) + new_thumb + m.group(4)

        new_text, n = re.subn(pattern, replacer, text, count=1, flags=re.DOTALL)
        if n > 0:
            text = new_text
            count += n

    if count > 0:
        filepath.write_text(text, encoding='utf-8')

    return count


# ── Main ───────────────────────────────────────────────────────────────

def main():
    parser = argparse.ArgumentParser(
        description='Generate flat perspective thumbnails from equirectangular panoramas.'
    )
    parser.add_argument(
        '--update-scenes',
        action='store_true',
        help='Also update the scene data JS files with new thumbnail paths.',
    )
    parser.add_argument(
        '--branch',
        type=str,
        default=None,
        help='Process only a specific branch (e.g., "bt", "jw").',
    )
    parser.add_argument(
        '--scene',
        type=str,
        default=None,
        help='Process only a specific scene ID.',
    )
    parser.add_argument(
        '--yaw',
        type=float,
        default=None,
        help='Override yaw in degrees.',
    )
    parser.add_argument(
        '--pitch',
        type=float,
        default=None,
        help='Override pitch in degrees.',
    )
    parser.add_argument(
        '--dry-run',
        action='store_true',
        help='Show what would be done without generating files.',
    )
    args = parser.parse_args()

    print('=' * 60)
    print('PPAPP 360 Virtual Tour -- Thumbnail Generator')
    print('=' * 60)
    print(f'Project root:  {PROJECT_ROOT}')
    print(f'Output size:   {THUMB_WIDTH}x{THUMB_HEIGHT} px')
    print(f'JPEG quality:  {THUMB_QUALITY}%')
    print(f'FOV:           {HFOV_DEG} deg')
    print()

    # 1. Find and parse all scene data files
    scene_files = find_all_scene_files()

    if args.branch:
        scene_files = [f for f in scene_files if f.parent.name == args.branch]
        print(f'Filtering to branch: {args.branch}')

    all_scenes = []
    for sf in scene_files:
        scenes = parse_scenes_from_js(sf)
        for s in scenes:
            s['_source_file'] = sf
        all_scenes.extend(scenes)

    if args.scene:
        all_scenes = [s for s in all_scenes if s['id'] == args.scene]
        print(f'Filtering to scene: {args.scene}')

    print(f'Found {len(all_scenes)} scenes across {len(scene_files)} files.')
    print()

    # 2. Generate thumbnails
    generated = 0
    skipped = 0
    failed = 0
    file_updates: dict[Path, dict[str, str]] = {}  # filepath -> {scene_id -> new_thumb_path}

    for scene in all_scenes:
        scene_id = scene['id']
        panorama_rel = scene['panorama']
        
        yaw_rad = math.radians(args.yaw) if args.yaw is not None else parse_angle(scene['defaultYaw'])
        pitch_rad = math.radians(args.pitch) if args.pitch is not None else parse_angle(scene['defaultPitch'])

        # Resolve absolute panorama path
        panorama_abs = (PROJECT_ROOT / panorama_rel.lstrip('./')).resolve()

        # Skip placeholder images
        if 'placeholder' in panorama_rel.lower() or 'shared' in panorama_rel.lower():
            print(f'  [SKIP] {scene_id}: Skipping placeholder image')
            skipped += 1
            continue

        # Compute thumbnail paths
        thumb_rel = compute_thumb_path(panorama_rel)
        thumb_abs = (PROJECT_ROOT / thumb_rel.lstrip('./')).resolve()

        if args.dry_run:
            print(f'  [>] {scene_id}')
            print(f'    Source:    {panorama_abs}')
            print(f'    Thumb:     {thumb_abs}')
            print(f'    Yaw/Pitch: {math.degrees(yaw_rad):.1f} / {math.degrees(pitch_rad):.1f}')
            generated += 1
            continue

        # Generate the thumbnail
        print(f'  [>] {scene_id} ... ', end='', flush=True)
        success = generate_thumbnail(panorama_abs, thumb_abs, yaw_rad, pitch_rad)

        if success:
            generated += 1
            thumb_size = thumb_abs.stat().st_size / 1024
            print(f'OK ({thumb_size:.0f} KB)')

            # Record the update for the scene data file
            source_file = scene['_source_file']
            if source_file not in file_updates:
                file_updates[source_file] = {}
            file_updates[source_file][scene_id] = thumb_rel
        else:
            failed += 1

    print()
    print(f'Results: {generated} generated, {skipped} skipped, {failed} failed')

    # 3. Update scene data files if requested
    if args.update_scenes and not args.dry_run and file_updates:
        print()
        print('Updating scene data files...')
        total_updates = 0
        for filepath, updates in file_updates.items():
            n = update_scene_file(filepath, updates)
            rel = filepath.relative_to(PROJECT_ROOT)
            print(f'  [OK] {rel}: {n} thumbnail path(s) updated')
            total_updates += n
        print(f'Total: {total_updates} scene(s) updated.')

    elif args.update_scenes and args.dry_run:
        print()
        print('(Dry run -- no scene files updated)')

    print()
    print('Done!')


if __name__ == '__main__':
    main()
