# PPAPP 360° Virtual Tour — Project Standards

## Project Overview

This is a 360° Virtual Tour web application for the Perbadanan Perpustakaan Awam Pulau Pinang (PPAPP).
It uses Photo Sphere Viewer (PSV) with ES Modules via `importmap` (no build tool).
Deployment targets both IIS and Apache (keep both `web.config` and `.htaccess`).

## Directory Structure

```
PPAPP-360-Virtual-Tour/
├── index.html              # Entry point
├── main.js                 # App bootstrap & viewer init only
├── style.css               # Global styles with CSS custom properties
├── js/                     # JavaScript modules (kebab-case filenames)
│   ├── marker-templates.js
│   ├── coordinate-logger.js
│   ├── location-selector.js
│   └── (future modules: loading-screen.js, floor-selector.js, minimap.js, search.js, info-panel.js, audio-controller.js)
├── locations/              # Scene data (1 file per branch, short codes)
│   ├── pusat.js, bt.js, jw.js, bm.js, ppaj.js, gt.js, ppk.js
├── images/{branch}/        # Per-branch subdirectories (images/pusat/, images/bt/, etc.)
├── images/shared/          # Shared assets (placeholder.jpg, logos, icons)
├── audio/narration/        # Per-scene narration clips
├── audio/ambient/          # Background ambient sounds
├── assets/floor-plans/     # Minimap/floor plan images
```

## Naming Conventions

| Type | Convention | Example |
|---|---|---|
| Location JS files | Short code | `pusat.js`, `bt.js`, `ppaj.js` |
| JS modules | `kebab-case` | `marker-templates.js` |
| Panorama images | `{branch}-{floor}-{description}.jpg` | `pusat-f1-entrance.jpg` |
| Scene IDs | `{branch}-{floor}-{description}` | `pusat-f1-entrance` |
| Marker IDs | `{sceneId}-{type}-{N}` | `pusat-f1-entrance-info-1` |
| CSS classes | `kebab-case` | `location-selector-container` |
| CSS state classes | `is-{state}` | `is-active`, `is-hidden` |
| DOM IDs | `kebab-case` | `location-select` |

### Branch Code Reference

| Code | Full Name |
|---|---|
| `pusat` | PUSAT – Seberang Jaya (HQ) |
| `bt` | Cawangan Daerah Seberang Perai Utara |
| `jw` | Cawangan Daerah Seberang Perai Selatan |
| `bm` | Cawangan Daerah Seberang Perai Tengah |
| `ppaj` | PP AEON Jusco Alma |
| `gt` | Cawangan Daerah Timur Laut |
| `ppk` | PP Lounge@Komtar |

## Scene Data Template

All location files must use this consistent pattern:

```js
export default [
  {
    id: '{branch}-{floor}-{description}',
    name: '{Floor} – {Area Name}',
    caption: '{BRANCH} – {Floor} – {Area Name}',
    panorama: './images/{branch}/{section}/{branch}-{section}-{N}.jpg',
    thumbnail: './images/{branch}/{section}/thumbs/{branch}-{section}-{N}.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [],
    markers: [],
    data: {
      floor: '{floor}',
      tags: ['keyword1', 'keyword2'],
    },
  },
];
```

- Use `createInfoMarker()`, `createAudioMarker()`, etc. from `js/marker-templates.js` for marker HTML.
- Always include the `data` metadata field with `floor` and `tags` properties.
- Angle values must use degree strings: `'80deg'`, `'-5deg'`.
- **Thumbnails MUST point to the `thumbs/` subfolder**, never to the raw panorama file.

## JavaScript Code Style

- ES Modules only (`import`/`export`), no CommonJS.
- `camelCase` for variables/functions, `UPPER_SNAKE_CASE` for constants.
- Single quotes, always use semicolons.
- Section headers use `// ── Title ──────` banner style.
- Imports grouped: third-party → local modules → location data.
- `main.js` should stay slim — extract logic into `js/` modules.

## CSS Standards

- All colors, spacing, and transitions defined as CSS custom properties in `:root`.
- Use `var(--color-accent-blue)` etc. instead of hardcoded hex values.
- Floating UI panels use the `.glass-panel` class for consistent glassmorphism.
- Design theme: Dark Moody Blue/Grey palette.

## Image Standards

- Format: `.jpg` for panoramas (quality 80-85%, target < 10 MB).
- Resolution: minimum 4096×2048, recommended 8192×4096.
- Aspect ratio: always 2:1 (equirectangular projection).
- Store in per-branch subdirectories: `images/{branch}/{section}/`.

## Thumbnail Standards

- **MANDATORY**: Every scene MUST have a flat perspective (rectilinear) thumbnail. Never use the raw equirectangular panorama as a thumbnail.
- **When adding a new scene**, always generate its 2D thumbnail immediately after placing the panorama image. Use the `generate-thumbnail` skill or run the script directly:
  ```bash
  python scripts/generate-thumbnails.py --branch {branch} --update-scenes
  ```
- Thumbnails are stored in `images/{branch}/{section}/thumbs/{scene-id}.jpg`.
- Thumbnail specs: 400×300 px, JPEG 80% quality, 90° horizontal FOV.
- The thumbnail captures the scene's `defaultYaw`/`defaultPitch` view direction.
- The `thumbnail:` field in scene data MUST point to the `thumbs/` path, NOT the panorama path.

