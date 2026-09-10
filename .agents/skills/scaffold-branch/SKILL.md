---
name: scaffold-branch
description: >
  Generates the complete directory structure, index.js, initial section files, and
  image directories for a new library branch. Use when starting work on a branch
  that currently only has a placeholder stub (jw, bm, ppaj, gt, ppk).
  Saves ~70% of tokens vs. manual setup.
---

# Scaffold Branch Skill

## Purpose

Generates the full boilerplate structure for a new library branch, replacing a
placeholder stub with a complete, multi-section skeleton ready to receive
panoramic images and scene data.

## When to Use

- Starting work on a new branch (e.g., "let's build out the JW branch")
- User has a set of photos for a previously-unstaffed branch
- Any branch that currently has only a single placeholder scene

## Current Stub Branches

These branches currently have only a single placeholder scene and need scaffolding:

| Branch | Current Files | Status |
|--------|-------------|--------|
| `jw` | `gf-main-area.js` + `index.js` | Placeholder only |
| `bm` | `gf-main-area.js` + `index.js` | Placeholder only |
| `ppaj` | `f1-main-area.js` + `index.js` | Placeholder only |
| `gt` | `gf-main-area.js` + `index.js` | Placeholder only |
| `ppk` | `f1-main-area.js` + `index.js` | Placeholder only |

## Input Specification

| Parameter | Required | Example | Description |
|-----------|----------|---------|-------------|
| `branch` | ✅ | `jw` | Branch short code |
| `sections` | ✅ | See below | List of sections to create |

### Sections Format

```json
[
  { "name": "ext-outside", "floor": "ext", "sceneCount": 3 },
  { "name": "gf-lobby", "floor": "gf", "sceneCount": 2 },
  { "name": "gf-reading", "floor": "gf", "sceneCount": 5 },
  { "name": "gf-kids", "floor": "gf", "sceneCount": 3 },
  { "name": "f1-study", "floor": "f1", "sceneCount": 4 }
]
```

If the user doesn't provide a section list, ask them what areas/rooms the branch has.

## Process

### Step 1: Create Directory Structure

```
images/{branch}/
  ext-outside/
  gf-lobby/
  gf-reading/
  gf-kids/
  f1-study/
```

### Step 2: Generate Section Files

For each section, create `locations/{branch}/{section}.js` using the
`generate-scene-batch` skill logic:
- If `sceneCount > 0`, generate that many placeholder scenes with chained links
- All scenes use `./images/shared/placeholder.jpg` initially (swapped when real photos arrive)

### Step 3: Generate index.js

Create `locations/{branch}/index.js` that imports and aggregates all sections:

```javascript
// ── locations/{branch}/index.js ─────────────────────────────────────────────
// Combines all sections for {BRANCH}
// ────────────────────────────────────────────────────────────────

import extOutsideSection from './ext-outside.js';
import gfLobbySection from './gf-lobby.js';
import gfReadingSection from './gf-reading.js';
import gfKidsSection from './gf-kids.js';
import f1StudySection from './f1-study.js';

export default [
  ...extOutsideSection,
  ...gfLobbySection,
  ...gfReadingSection,
  ...gfKidsSection,
  ...f1StudySection,
];
```

### Step 4: Verify main.js Integration

Check that `main.js` already imports the branch's index:
```javascript
import jwNodes from './locations/jw/index.js';
```

If not present (unlikely since all 7 are pre-wired), add the import.

### Step 5: Verify index.html Integration

Check that `index.html` has an `<option>` for the branch in the location selector.
All 7 branches are already pre-wired in the current HTML.

### Step 6: Report

```
📁 Branch Scaffold Complete — JW
═══════════════════════════════════
Sections created: 5
  - ext-outside (3 scenes)
  - gf-lobby (2 scenes)
  - gf-reading (5 scenes)
  - gf-kids (3 scenes)
  - f1-study (4 scenes)
Total scenes: 17 (all using placeholder images)
Image directories: 5 created

Next steps:
  1. Add real panoramic photos to replace placeholders
  2. Generate 2D thumbnails: python scripts/generate-thumbnails.py --branch {branch} --update-scenes
  3. Set defaultYaw for each scene based on preferred starting view
  4. Add cross-section links (lobby <-> reading, etc.)
  5. Add markers for points of interest
```

## Naming Conventions for Import Variables

Convert section filenames to camelCase import names:
- `ext-outside.js` → `extOutsideSection`
- `gf-lobby.js` → `gfLobbySection`
- `f2-reading.js` → `f2ReadingSection`

Pattern: Replace hyphens with camelCase + append `Section`.
