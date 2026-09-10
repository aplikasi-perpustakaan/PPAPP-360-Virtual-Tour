---
name: generate-scene-batch
description: >
  Generates a batch of scene data objects for linear-chain sections (e.g., corridors, reading rooms).
  Takes a compact specification (branch, section, count, link angles) and outputs a complete
  location JS module file. Use when the user wants to create multiple sequential scenes that
  link forward/backward in a chain. Saves ~90% of tokens vs. writing each scene individually.
---

# Generate Scene Batch Skill

## Purpose

This skill generates a complete location section file (`locations/{branch}/{section}.js`)
containing N scene data objects linked in a linear forward/backward chain.

It is designed for the most common virtual tour pattern: a series of panoramas
taken along a corridor, room, or walkway where each scene connects to its
neighbors in sequence.

## When to Use

- User says "create 10 scenes for the reading room" or similar batch request
- User provides a folder of sequentially-numbered panorama images
- Any time you need to create ≥3 scenes that link in a linear chain

## Input Specification

The user provides (or you infer from context):

| Parameter | Required | Example | Description |
|-----------|----------|---------|-------------|
| `branch` | ✅ | `bt` | Branch short code |
| `section` | ✅ | `f2-reading` | Section name (becomes filename) |
| `floor` | ✅ | `f2` | Floor code for metadata |
| `count` | ✅ | `25` | Number of scenes to generate |
| `startNum` | ❌ (default: 1) | `1` | Starting scene number |
| `tags` | ❌ (default: from section) | `['reading']` | Metadata tags |
| `forwardYaw` | ❌ (default: `358.45deg`) | `358.45deg` | Yaw for forward links |
| `backwardYaw` | ❌ (default: `178.45deg`) | `178.45deg` | Yaw for backward links |
| `pitch` | ❌ (default: `-8.15deg`) | `-8.15deg` | Pitch for all links |
| `defaultYaw` | ❌ (default: `0deg`) | `0deg` | Default camera yaw |
| `defaultPitch` | ❌ (default: `0deg`) | `0deg` | Default camera pitch |
| `imageSubdir` | ❌ (default: `true`) | `true` | Use subdirectory structure `images/{branch}/{section}/` |
| `extraLinks` | ❌ | See below | Additional non-chain links for specific scenes |

### Extra Links Format

To add links that break the linear chain (e.g., connecting to other sections):

```json
{
  "sceneNum": 1,
  "links": [
    {
      "nodeId": "bt-ramp-1",
      "position": { "yaw": "90deg", "pitch": "-10deg" },
      "name": "Go to Ramp"
    }
  ]
}
```

## Output

The skill generates a complete ES Module file with this structure:

```javascript
// ── locations/{branch}/{section}.js ─────────────────────────────────────
export default [
  {
    id: '{branch}-{section}-1',
    name: '{Floor} – {Section} 1',
    caption: '{BRANCH} – {Floor} – {Section} 1',
    panorama: './images/{branch}/{section}/{branch}-{section}-1.jpg',
    thumbnail: './images/{branch}/{section}/thumbs/{branch}-{section}-1.jpg',
    defaultYaw: '0deg',
    defaultPitch: '0deg',
    links: [
      // No backward link for first scene
      {
        nodeId: '{branch}-{section}-2',
        position: { yaw: '{forwardYaw}', pitch: '{pitch}' },
        name: 'Go to {Section} 2',
      },
    ],
    markers: [],
    data: {
      floor: '{floor}',
      tags: ['{tags}'],
    },
  },
  // ... middle scenes have both forward and backward links ...
  {
    id: '{branch}-{section}-N',
    name: '{Floor} – {Section} N',
    // ... last scene has no forward link
  },
];
```

## Generation Rules

1. **First scene**: Has only a forward link (no backward neighbor).
2. **Middle scenes**: Have both backward (to N-1) and forward (to N+1) links.
3. **Last scene**: Has only a backward link (no forward neighbor).
4. **Extra links**: Appended to the links array of the specified scene number.
5. **Image paths**: Use subdirectory structure by default: `./images/{branch}/{section}/{branch}-{section}-{N}.jpg`
6. **Thumbnail paths**: Always use `thumbs/` subdirectory: `./images/{branch}/{section}/thumbs/{branch}-{section}-{N}.jpg`
7. **Scene IDs**: Follow pattern `{branch}-{section}-{N}` (e.g., `bt-f2-reading-1`).
8. **Captions**: Use format `{BRANCH_UPPER} – {Floor Title} – {Section Title} {N}`.
9. **Name**: Use format `{Floor Title} – {Section Title} {N}`.

## Name Formatting

- Floor codes are title-cased: `f1` → `Floor 1`, `f2` → `Floor 2`, `gf` → `Ground Floor`, `ext` → `Exterior`
- Section names are title-cased with hyphens replaced by spaces: `f2-reading` → `Reading`, `ext-outside` → `Outside`
- Branch codes in captions are uppercased: `bt` → `BT`

## Post-Generation Checklist

After generating the section file, also:

1. **Check `index.js`**: Verify the new section is imported and spread in `locations/{branch}/index.js`. If not, update it.
2. **Create image directory**: Ensure `images/{branch}/{section}/` exists (or remind user to create it and add photos).
3. **Generate 2D thumbnails**: Once panorama images are placed, run the thumbnail generator to create flat perspective thumbnails:
   ```bash
   python scripts/generate-thumbnails.py --branch {branch} --update-scenes
   ```
   Or use the `generate-thumbnail` skill for individual scenes with custom yaw/pitch.
4. **Report**: Tell the user how many scenes were created and what image files are expected.

## Example Interaction

**User**: "Generate 15 scenes for BT f2-backside section"

**Agent executes**:
1. Infers: `branch=bt`, `section=f2-backside`, `floor=f2`, `count=15`
2. Uses defaults: `forwardYaw=358.45deg`, `backwardYaw=178.45deg`, `pitch=-8.15deg`
3. Generates `locations/bt/f2-backside.js` with 15 chained scenes (thumbnails pointing to `thumbs/` subfolder)
4. Updates `locations/bt/index.js` to import and spread the new section
5. Creates `images/bt/f2-backside/` directory
6. Generates 2D thumbnails: `python scripts/generate-thumbnails.py --branch bt --update-scenes`
7. Reports: "Created 15 scenes (bt-f2-backside-1 through bt-f2-backside-15). Place images in `images/bt/f2-backside/`."
