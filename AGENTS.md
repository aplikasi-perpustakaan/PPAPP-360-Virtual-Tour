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
├── favicon.png             # Official PPAPP browser favicon
├── js/                     # JavaScript modules (kebab-case filenames)
│   ├── custom-marker.js    # Custom Web Component marker with ripple & floating card
│   ├── loading-screen.js   # Glassmorphism loading screen management
│   ├── location-selector.js# Branch selection dropdown handler & transitions
│   ├── marker-templates.js # HTML templates for info/audio markers
│   ├── coordinate-logger.js# Utility for logging click yaw/pitch coordinates
│   └── audio-controller.js # Background and narration audio handlers
├── locations/{branch}/     # Modular scene data per branch
│   ├── {branch}-index.js   # Section aggregator for the branch (e.g. bm-index.js, bt-index.js)
│   └── {branch}-{section}.js # Individual section scenes (e.g. bm-gf-lobby.js, ppaj-f1-main-area.js)
├── images/{branch}/{section}/ # Per-branch, per-section panorama images
│   └── thumbs/             # Flat perspective thumbnails (400x300 px)
├── images/shared/          # Shared assets (placeholder.jpg, logos, icons, favicon)
├── audio/narration/        # Per-scene narration clips
├── audio/ambient/          # Background ambient sounds
├── assets/floor-plans/     # Minimap/floor plan images
└── scripts/                # Utility scripts (e.g. generate-thumbnails.py)
```

## Naming Conventions

| Type | Convention | Example |
|---|---|---|
| Location index | `{branch}-index.js` | `bm-index.js`, `bt-index.js`, `ppaj-index.js` |
| Location section files | `{branch}-{section}.js` | `bm-gf-lobby.js`, `bt-f1-kids.js` |
| JS modules | `kebab-case` | `custom-marker.js`, `marker-templates.js` |
| Panorama images | `{branch}-{floor}-{description}.jpg` | `bm-gf-lobby-1.jpg`, `bt-f1-lobby-1.jpg` |
| Scene IDs | `{branch}-{floor}-{description}` | `bm-gf-lobby-1`, `ppaj-f1-01` |
| Marker IDs | `{sceneId}-{type}-{N}` | `bm-gf-kids-8-custom-img` |
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
    defaultZoomLvl: 0,
    sphereCorrection: { pan: '0deg', tilt: '0deg', roll: '0deg' }, // Note: Ignore standard yaw/pitch when applying sphereCorrection; use explicit pan/tilt/roll values.
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

## Marker Standards

### Custom Marker Component (`<custom-marker>`)

All interactive markers use the `<custom-marker>` Web Component defined in `js/custom-marker.js`. Markers are stored in scene data as `html:` strings (NOT `element:` closures) so the dev-server can serialize them to disk.

**Canonical marker format in scene files:**
```js
{
  id: '{sceneId}-marker-{timestamp}',
  position: { yaw: '90deg', pitch: '-15deg' },
  size: { width: 32, height: 32 },
  anchor: 'center center',
  data: {
    type: 'info',        // 'info' | 'audio' | 'image' | 'link'
    title: 'Marker Title',
    icon: 'info',        // 'info' | 'star' | 'warning' | 'pin' | 'no-entry' | 'ring'
    color: 'blue',       // 'blue' | 'gold' | 'red' | 'green'
    animated: false,
    content: ''           // For info type
  },
  html: '<custom-marker type="info" data-icon="info" data-color="blue">...</custom-marker>'
}
```

### Marker Size Tiers

| Tier   | Value (px) | Use Case |
|--------|-----------|----------|
| Small  | 32        | **Default.** Standard markers (info, image, audio) |
| Medium | 44        | Legacy markers (pre-2026-09) |
| Large  | 56        | High-visibility markers (rarely used) |

### Image Marker Preview

- Image markers display a preview in a 300px-wide tooltip card.
- Images respect their original aspect ratio (`object-fit: contain`).
- Maximum preview height: **250px** (prevents tall images from overwhelming the view).
- Clicking the marker opens the full-resolution image in a new tab (via `data-url` attribute).
- In debug mode (`?debug=true`), click-to-open is disabled so markers can be edited instead.

### Legacy Marker Templates (`js/marker-templates.js`)

These functions generate simple inline-styled `<div>` markers. They are **not used by the debug marker placer** (which uses `<custom-marker>`), but remain available for manual/programmatic marker creation:

| Function | Default Size | Visual |
|----------|-------------|--------|
| `createInfoMarker()` | 24px | Blue circle with "i" |
| `createAudioMarker()` | 24px | Gold circle with 🔊 |
| `createNavArrow()` | 32px | Blue arrow circle |
| `createLabelMarker({ text })` | auto | Glass badge with text |


