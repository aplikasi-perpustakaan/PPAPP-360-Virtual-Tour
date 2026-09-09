---
name: bidirectional-link
description: >
  Creates bi-directional navigation links between two scenes in a single operation.
  Given two scene IDs and their respective yaw/pitch positions, writes both the
  forward link (A→B) and reverse link (B→A) into the correct location files.
  Saves ~50% of tokens vs. manual link management and prevents "trapped user" bugs.
---

# Bidirectional Link Skill

## Purpose

Creates navigation links in BOTH directions between two scenes in one operation.
This prevents the common bug where users navigate to a scene and get trapped
because no reverse link was created.

## When to Use

- User says "link lobby 1 to kids 1" or "connect ramp to reading"
- Any time a navigation link is being added between scenes
- When user provides yaw/pitch coordinates for one or both directions

## Input Specification

| Parameter | Required | Example | Description |
|-----------|----------|---------|-------------|
| `sceneA` | ✅ | `bt-f1-lobby-2` | Source scene ID |
| `sceneB` | ✅ | `bt-f1-kids-1` | Target scene ID |
| `aToBYaw` | ✅ | `269.76deg` | Yaw for the link in scene A pointing to B |
| `aToBPitch` | ❌ (default: `-10deg`) | `-21.08deg` | Pitch for the link in scene A |
| `bToAYaw` | ✅ | `89.17deg` | Yaw for the link in scene B pointing to A |
| `bToAPitch` | ❌ (default: `-10deg`) | `-13.74deg` | Pitch for the link in scene B |
| `aToBName` | ❌ (auto-generated) | `Enter Kids Section` | Tooltip for A→B link |
| `bToAName` | ❌ (auto-generated) | `Back to Lobby 2` | Tooltip for B→A link |

## Process

### Step 1: Locate the Files

1. Search `locations/` recursively for files containing `id: '{sceneA}'`
2. Search `locations/` recursively for files containing `id: '{sceneB}'`
3. Both scenes MUST exist. If either is not found, report the error.

### Step 2: Add Forward Link (A → B)

In the file containing scene A, locate the scene's `links` array and append:

```javascript
{
  nodeId: '{sceneB}',
  position: { yaw: '{aToBYaw}', pitch: '{aToBPitch}' },
  name: '{aToBName}',
},
```

### Step 3: Add Reverse Link (B → A)

In the file containing scene B, locate the scene's `links` array and append:

```javascript
{
  nodeId: '{sceneA}',
  position: { yaw: '{bToAYaw}', pitch: '{bToAPitch}' },
  name: '{bToAName}',
},
```

### Step 4: Verify

- Check that no duplicate links exist (same nodeId already in the links array)
- If a duplicate is found, warn the user instead of creating a second link

### Step 5: Report

Confirm both links were created:
```
✅ Created bi-directional link:
   A→B: bt-f1-lobby-2 → bt-f1-kids-1 (yaw: 269.76deg, pitch: -21.08deg)
   B→A: bt-f1-kids-1 → bt-f1-lobby-2 (yaw: 89.17deg, pitch: -13.74deg)
```

## Auto-Generated Link Names

If the user doesn't provide link names, generate them from the scene's `name` field:

- Forward (A→B): `"Go to {sceneB.name}"` (e.g., "Go to Kids 1")
- Reverse (B→A): `"Go to {sceneA.name}"` or `"Back to {sceneA.name}"`

## Placeholder Mode

If the user doesn't have coordinates yet, create placeholder links:

```javascript
{
  nodeId: '{targetId}',
  position: { yaw: '0deg', pitch: '-10deg' },  // PLACEHOLDER — update with real coordinates
  name: 'Go to {targetName}',
},
```

Mark placeholders with a comment so they can be found later.

## Example Interactions

**Full specification:**
> "Make a two-way link between ramp 1 and reading 24.
> ramp 1 to reading 24: yaw 350deg, pitch -8deg.
> reading 24 to ramp 1: yaw 170deg, pitch -15deg."

**Minimal specification:**
> "Link lobby 2 to kids 1 (placeholder)"

**Single coordinate (agent calculates reverse):**
> "Link stairs-front-1 to f2-reading-1, yaw 45deg pitch -12deg"
> (Agent uses ~180° offset for reverse: yaw 225deg)
