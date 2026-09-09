# Scene Data Conventions

This rule codifies the exact conventions for all scene data in this project.
The agent MUST follow these conventions without needing to re-read example files.

## Scene Object Template

Every scene object must have exactly these fields in this order:

```javascript
{
  id: '{branch}-{floor}-{section}-{N}',        // e.g., 'bt-f2-reading-1'
  name: '{Floor Title} – {Section Title} {N}',  // e.g., 'Floor 2 – Reading 1'
  caption: '{BRANCH} – {Floor Title} – {Section Title} {N}',
  panorama: './images/{branch}/{section}/{branch}-{section}-{N}.jpg',
  thumbnail: './images/{branch}/{section}/{branch}-{section}-{N}.jpg',
  defaultYaw: '0deg',
  defaultPitch: '0deg',
  links: [],
  markers: [],
  data: {
    floor: '{floor}',  // e.g., 'f1', 'f2', 'gf', 'ext'
    tags: ['keyword1', 'keyword2'],
  },
}
```

## ID Naming Convention

- Pattern: `{branch}-{floor}-{section}-{N}` or `{branch}-{section}-{N}` when section already includes floor
- Examples: `bt-f1-lobby-1`, `bt-f2-reading-25`, `bt-ext-outside-5`
- IDs must be globally unique across all branches
- Use kebab-case, lowercase only

## Image Path Convention

- **With subdirectory** (default for sections with multiple scenes):
  `./images/{branch}/{section}/{branch}-{section}-{N}.jpg`
  Example: `./images/bt/f2-reading/bt-f2-reading-1.jpg`

- **Without subdirectory** (for sections with a single scene):
  `./images/{branch}/{branch}-{floor}-{section}.jpg`
  Example: `./images/pusat/pusat-f1-entrance.jpg`

## Floor Code Reference

| Code | Display Name |
|------|-------------|
| `gf` | Ground Floor |
| `f1` | Floor 1 (or Level 1) |
| `f2` | Floor 2 |
| `f3` | Floor 3 |
| `ext` | Exterior |

## Branch Code Reference

| Code | Full Name | Caption Prefix |
|------|-----------|---------------|
| `pusat` | PUSAT – Seberang Jaya (HQ) | `PUSAT` |
| `bt` | Cawangan Daerah Seberang Perai Utara | `BT` |
| `jw` | Cawangan Daerah Seberang Perai Selatan | `JW` |
| `bm` | Cawangan Daerah Seberang Perai Tengah | `BM` |
| `ppaj` | PP AEON Jusco Alma | `PPAJ` |
| `gt` | Cawangan Daerah Timur Laut | `GT` |
| `ppk` | PP Lounge@Komtar | `PPK` |

## Link Defaults

- **Corridor links** (forward/backward along a walkway):
  - Forward yaw: `358.45deg`
  - Backward yaw: `178.45deg`
  - Pitch: `-8.15deg`
- **Cross-section links** (entering a different area):
  - Use actual yaw/pitch from coordinate logger
  - Pitch typically `-10deg` to `-21deg`
- **Links MUST be bi-directional** — if A links to B, B must link back to A

## Marker Templates

Use the functions from `js/marker-templates.js`:

| Function | Use Case | Visual |
|----------|----------|--------|
| `createInfoMarker()` | Points of interest, descriptions | Blue circle with "i" |
| `createAudioMarker()` | Audio narration spots | Gold circle with 🔊 |
| `createNavArrow()` | Custom directional indicators | Blue arrow circle |
| `createLabelMarker({ text })` | Room labels, area names | Glass badge with text |

Import pattern: `import { createInfoMarker } from '../../js/marker-templates.js';`

## File Structure

- Each branch has its own directory: `locations/{branch}/`
- Each section is a separate file: `locations/{branch}/{section}.js`
- Each branch has an `index.js` that imports and re-exports all sections:

```javascript
import sectionA from './section-a.js';
import sectionB from './section-b.js';
export default [...sectionA, ...sectionB];
```

## Comment Style

- File header: `// ── locations/{branch}/{section}.js ─────────────────────────────────`
- Section separators within scenes (optional, used in detailed scenes):
  ```javascript
  // ─── Identity ───
  // ─── Panorama ───
  // ─── Camera Defaults ───
  // ─── Navigation Links ───
  // ─── Info Markers ───
  // ─── Metadata ───
  ```

## Angle Values

- Always use degree strings: `'80deg'`, `'-5deg'`, `'358.45deg'`
- Never use raw radians in config files
- Yaw range: `0deg` to `360deg`
- Pitch range: `-90deg` (down) to `90deg` (up)
