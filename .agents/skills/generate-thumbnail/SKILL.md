---
name: generate-thumbnail
description: >
  Generates flat perspective (rectilinear) 2D thumbnails from equirectangular panorama images.
  Supports generating for a single scene with custom yaw/pitch, a specific branch, or all scenes.
  Use when adding new scenes, adjusting thumbnail angles, or regenerating thumbnails after changes.
---

# Generate Thumbnail Skill

## Purpose

Extracts a flat, perspective-correct (rectilinear) 2D image from an equirectangular panorama
at a specified yaw/pitch direction. This converts the distorted 360° panorama into a normal-looking
photograph suitable for use as a thumbnail in the PSV gallery strip.

## When to Use

- After adding a new scene and placing its panorama image
- When adjusting a scene's `defaultYaw`/`defaultPitch` and needing the thumbnail to match
- When the user says "regenerate thumbnails" or "update thumbnail for scene X"
- When the user says "generate a thumbnail looking at 90 degrees"
- After batch-adding scenes with the `generate-scene-batch` skill

## Script Location

```
scripts/generate-thumbnails.py
```

Requirements: `Pillow`, `NumPy` (both already installed in the project environment).

## Usage Modes

### Mode 1: Single Branch (Most Common)

Generate thumbnails for all scenes in a specific branch and update their scene data files:

```powershell
python scripts/generate-thumbnails.py --branch {branch} --update-scenes
```

**Example:**
```powershell
python scripts/generate-thumbnails.py --branch bt --update-scenes
```

This will:
1. Parse all scene data files in `locations/{branch}/`
2. For each scene, extract a rectilinear crop at its `defaultYaw`/`defaultPitch`
3. Save to `images/{branch}/{section}/thumbs/{scene-id}.jpg`
4. Update the `thumbnail:` fields in the scene data files

### Mode 2: All Branches

Generate thumbnails for all scenes across all branches:

```powershell
python scripts/generate-thumbnails.py --update-scenes
```

### Mode 3: Dry Run (Preview)

See what would be generated without creating any files:

```powershell
python scripts/generate-thumbnails.py --dry-run
python scripts/generate-thumbnails.py --branch jw --dry-run
```

### Mode 4: Single Scene with Custom Yaw/Pitch (Manual)

For a single scene where you need a specific look direction different from the scene's default,
use the Python script directly in a one-off command:

```powershell
python -c "
import sys; sys.path.insert(0, 'scripts')
from pathlib import Path
import numpy as np
from PIL import Image
from importlib import import_module

# Import the reprojection function
spec = __import__('importlib').util.spec_from_file_location('gt', 'scripts/generate-thumbnails.py')
gt = __import__('importlib').util.module_from_spec(spec)
spec.loader.exec_module(gt)

# Generate thumbnail with custom yaw/pitch
panorama = Path('images/{branch}/{section}/{scene-id}.jpg')
thumb = Path('images/{branch}/{section}/thumbs/{scene-id}.jpg')
gt.generate_thumbnail(panorama.resolve(), thumb.resolve(), yaw_rad={yaw_radians}, pitch_rad={pitch_radians})
print('Done!')
"
```

**Angle conversion**: To convert degrees to radians, use `math.radians(degrees)`.
- 0 degrees = 0.0 radians
- 90 degrees = 1.5708 radians
- 180 degrees = 3.1416 radians
- -10 degrees = -0.1745 radians

## Output Specification

| Property | Value |
|---|---|
| Output size | 400 x 300 px (4:3 aspect ratio) |
| Horizontal FOV | 90 degrees (natural perspective, ~24mm lens) |
| Quality | JPEG 80% |
| Output path | `images/{branch}/{section}/thumbs/{scene-id}.jpg` |
| Look direction | Scene's `defaultYaw` / `defaultPitch` (or custom) |

## How the Reprojection Works

The script performs equirectangular-to-rectilinear reprojection:

1. For each pixel `(x, y)` in the output thumbnail, compute the corresponding 3D ray direction
2. Rotate the ray by the target yaw (horizontal) and pitch (vertical)
3. Convert the rotated ray to equirectangular coordinates (longitude, latitude)
4. Sample the source panorama at those coordinates using bilinear interpolation

This produces a flat, undistorted perspective view — like a photo taken with a normal camera
standing at that spot and looking in the specified direction.

## Scene Data Field

The scene's `thumbnail` field must always reference the `thumbs/` subfolder path:

```javascript
// CORRECT
thumbnail: './images/bt/ext-outside/thumbs/bt-ext-outside-1.jpg',

// WRONG - never point thumbnail to the raw panorama
thumbnail: './images/bt/ext-outside/bt-ext-outside-1.jpg',
```

## Troubleshooting

| Issue | Solution |
|---|---|
| `[WARN] Panorama not found` | Place the panorama image file first, then run the script |
| `[SKIP] Skipping placeholder` | Expected for stub branches (bm, gt, ppaj, ppk) — no action needed |
| Thumbnail looks wrong angle | Adjust the scene's `defaultYaw`/`defaultPitch` in the scene data, then re-run |
| Need a different FOV | Edit `HFOV_DEG` constant in `scripts/generate-thumbnails.py` (default: 90) |

## Integration with Other Skills

- **`add-scene`**: Step 6 requires running this skill after placing the panorama
- **`generate-scene-batch`**: Post-generation checklist step 3 requires running this skill
- **`scaffold-branch`**: Run this skill after placing panorama images in the new branch directories
