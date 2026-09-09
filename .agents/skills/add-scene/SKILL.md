---
name: add-scene
description: >
  Streamlined workflow for adding a single scene to the virtual tour. Handles image
  placement, scene data creation, index.js wiring, and optionally creates bi-directional
  links. Use when the user provides a photo and wants it added as a new scene.
  Faster than the raw workflow rule because it includes validation scripts.
---

# Add Scene Skill

## Purpose

A streamlined, validated workflow for adding a single panoramic scene to the virtual tour.
Handles the full pipeline: image validation → file placement → scene data creation →
index.js update → optional link creation.

## When to Use

- User provides a panoramic photo to add to the tour
- User says "add this photo to BT floor 1 lobby"
- User provides a Google Photos link with branch/floor/section info

## Input Specification

| Parameter | Required | Example | Description |
|-----------|----------|---------|-------------|
| `image` | ✅ | URL or file path | The panoramic image |
| `branch` | ✅ | `bt` | Branch short code |
| `floor` | ✅ | `f1` | Floor code |
| `section` | ✅ | `lobby` | Section name |
| `sceneNum` | ❌ (auto) | `3` | Scene number (auto-incremented if omitted) |
| `name` | ❌ (auto) | `Floor 1 – Lobby 3` | Scene display name |
| `defaultYaw` | ❌ | `90deg` | Initial camera heading |
| `defaultPitch` | ❌ | `0deg` | Initial camera pitch |
| `tags` | ❌ | `['lobby', 'main']` | Metadata tags |
| `linkTo` | ❌ | `bt-f1-lobby-2` | Scene ID to create a link to |
| `linkYaw` | ❌ | `178deg` | Yaw for the link |
| `linkPitch` | ❌ | `-8deg` | Pitch for the link |

## Process

### Step 1: Download/Locate Image

If the image is a URL:
```powershell
Invoke-WebRequest -Uri "{url}" -OutFile "images/{branch}/{section}/{branch}-{section}-{N}.jpg"
```

If it's a Google Photos link, use `browser_subagent` to download.

If it's a local file path, copy it to the correct location.

### Step 2: Validate Image

Run a quick validation check:
```powershell
# Check file exists and get dimensions
$img = [System.Drawing.Image]::FromFile("{imagePath}")
$width = $img.Width
$height = $img.Height
$ratio = $width / $height
$img.Dispose()

# Check 2:1 aspect ratio
if ([Math]::Abs($ratio - 2.0) -gt 0.05) {
    Write-Warning "Image is not 2:1 equirectangular (ratio: $ratio)"
}

# Check minimum resolution
if ($width -lt 4096) {
    Write-Warning "Image width ($width) below minimum 4096px"
}

# Check file size
$size = (Get-Item "{imagePath}").Length / 1MB
if ($size -gt 10) {
    Write-Warning "Image size ($([Math]::Round($size, 1)) MB) exceeds 10 MB target"
}
```

### Step 3: Auto-Detect Scene Number

If `sceneNum` is not provided, scan the existing section file (if it exists) to find the highest scene number and increment:

```javascript
// Find highest N in IDs matching pattern: {branch}-{section}-{N}
```

### Step 4: Create/Update Section File

If `locations/{branch}/{section}.js` exists:
- Append the new scene object to the export array

If it doesn't exist:
- Create the file with the standard header and export structure
- Update `locations/{branch}/index.js` to import the new section

### Step 5: Generate Scene Object

Use the canonical template from the `scene-data-conventions` rule:

```javascript
{
  id: '{branch}-{section}-{N}',
  name: '{Floor Title} – {Section Title} {N}',
  caption: '{BRANCH} – {Floor Title} – {Section Title} {N}',
  panorama: './images/{branch}/{section}/{branch}-{section}-{N}.jpg',
  thumbnail: './images/{branch}/{section}/{branch}-{section}-{N}.jpg',
  defaultYaw: '{defaultYaw}',
  defaultPitch: '{defaultPitch}',
  links: [],
  markers: [],
  data: {
    floor: '{floor}',
    tags: {tags},
  },
}
```

### Step 6: Create Links (Optional)

If `linkTo` is specified, use the `bidirectional-link` skill to create both forward and reverse links.

### Step 7: Report

```
✅ Scene added:
   ID: bt-f1-lobby-3
   File: locations/bt/f1-lobby.js
   Image: images/bt/f1-lobby/bt-f1-lobby-3.jpg (7.2 MB, 8192×4096)
   Links: bt-f1-lobby-2 ↔ bt-f1-lobby-3
```

## Validation Checks

Before completing, verify:
- [ ] Image file exists at the expected path
- [ ] Scene ID is unique (not duplicated in any branch)
- [ ] Section file exports a valid array
- [ ] index.js imports the section (if new file)
- [ ] Links reference valid, existing scene IDs
