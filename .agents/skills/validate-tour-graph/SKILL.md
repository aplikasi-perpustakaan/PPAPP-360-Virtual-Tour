---
name: validate-tour-graph
description: >
  Audits the entire tour graph for a branch or the whole project. Finds dead ends
  (no outgoing links), orphan scenes (unreachable), broken links (referencing
  non-existent scene IDs), missing images, and one-way links (missing reverse).
  Use after adding scenes or links, or before deployment to ensure tour integrity.
---

# Validate Tour Graph Skill

## Purpose

Audits the virtual tour's navigation graph for structural problems that would
degrade the user experience. Catches broken links, dead ends, orphaned scenes,
and missing images before they reach production.

## When to Use

- After completing a batch of scene additions
- Before deploying an update
- When debugging navigation issues ("user can't reach scene X")
- User asks "check the tour" or "validate BT"

## Input

| Parameter | Required | Example | Description |
|-----------|----------|---------|-------------|
| `branch` | ❌ (default: all) | `bt` | Branch to validate (or omit for all) |

## Validation Script

Run the following validation process using `run_command`:

### Step 1: Collect All Scenes

Read all `locations/{branch}/*.js` files (excluding `index.js`) and extract:
- All scene IDs
- All link targets (nodeIds)
- All panorama paths
- All marker IDs

### Step 2: Build Graph

Create a directed graph:
- Nodes = scene IDs
- Edges = links (nodeId references)

### Step 3: Run Checks

#### Check 1: Broken Links
Find all links where `nodeId` references a scene ID that doesn't exist in the branch.
```
❌ BROKEN LINK: bt-f2-reading-25 → bt-f2-reading-26 (target does not exist)
```

#### Check 2: Dead Ends
Find scenes with zero outgoing links (excluding deliberate terminal scenes).
```
⚠️ DEAD END: bt-f1-surau-1 has no outgoing links
```

#### Check 3: Orphan Scenes
Find scenes that no other scene links to (unreachable from the tour graph).
```
⚠️ ORPHAN: bt-f2-backside-3 is not referenced by any link
```

#### Check 4: One-Way Links
Find links where A→B exists but B→A does not.
```
⚠️ ONE-WAY: bt-f1-lobby-3 → bt-ramp-1 (no reverse link found)
```

#### Check 5: Missing Images
Check if panorama image files exist at the referenced paths.
```
❌ MISSING IMAGE: ./images/bt/f2-reading/bt-f2-reading-26.jpg does not exist
```

#### Check 6: Duplicate Scene IDs
Check for scene IDs that appear more than once.
```
❌ DUPLICATE ID: bt-f1-lobby-1 defined in both f1-lobby.js and f1-entrance.js
```

#### Check 7: Placeholder Check
Find scenes still using `./images/shared/placeholder.jpg`.
```
ℹ️ PLACEHOLDER: jw-gf-main-area still uses placeholder.jpg
```

### Step 4: Summary Report

```
📊 Tour Validation Report — BT Branch
═══════════════════════════════════════
Total Scenes:     48
Total Links:      92
Total Markers:    15

✅ No broken links
✅ No duplicate IDs
⚠️ 2 dead ends (bt-f1-surau-1, bt-stairs-back-1)
⚠️ 3 one-way links
❌ 1 missing image
ℹ️ 0 placeholders
═══════════════════════════════════════
```

## Implementation Approach

Use a Node.js or PowerShell script that:

1. Reads all `.js` files in `locations/{branch}/` (excluding `index.js`)
2. Uses regex to extract scene objects: `id:`, `nodeId:`, `panorama:` values
3. Builds an adjacency list from the extracted data
4. Runs each validation check
5. Outputs a structured report

### PowerShell Quick Validation (for use with `run_command`):

```powershell
# Extract all scene IDs and link targets from location files
$branch = "{branch}"
$locationDir = "D:\_ASSISTANTS\PPAPP\PPAPP-360-Virtual-Tour\locations\$branch"
$imageDir = "D:\_ASSISTANTS\PPAPP\PPAPP-360-Virtual-Tour\images\$branch"

# Get all JS files except index.js
$files = Get-ChildItem "$locationDir\*.js" | Where-Object { $_.Name -ne 'index.js' }

$allIds = @()
$allLinks = @()
$allPanoramas = @()

foreach ($f in $files) {
    $content = Get-Content $f.FullName -Raw
    
    # Extract scene IDs
    $ids = [regex]::Matches($content, "id:\s*'([^']+)'") | ForEach-Object { $_.Groups[1].Value }
    $allIds += $ids
    
    # Extract link nodeIds
    $links = [regex]::Matches($content, "nodeId:\s*'([^']+)'") | ForEach-Object { $_.Groups[1].Value }
    $allLinks += $links
    
    # Extract panorama paths
    $panos = [regex]::Matches($content, "panorama:\s*'([^']+)'") | ForEach-Object { $_.Groups[1].Value }
    $allPanoramas += $panos
}

# Check for broken links
$broken = $allLinks | Where-Object { $_ -notin $allIds }
if ($broken) { Write-Host "❌ BROKEN LINKS: $($broken -join ', ')" }

# Check for orphans (no incoming links)
$orphans = $allIds | Where-Object { $_ -notin $allLinks }
if ($orphans) { Write-Host "⚠️ POTENTIAL ORPHANS: $($orphans -join ', ')" }

Write-Host "📊 Total scenes: $($allIds.Count), Total links: $($allLinks.Count)"
```

## Cross-Branch Validation

When validating all branches, also check:
- No scene ID collisions between branches
- `main.js` imports all branch index files
- `index.html` has options for all branches in the location selector
