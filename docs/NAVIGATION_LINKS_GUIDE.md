# How to Add Navigation Links

Navigation links (hotspots) are the core mechanism that allows users to "walk" between different panoramas in the virtual tour. This guide explains how to properly connect scenes within the repository's modular structure.

---

## 1. The Link Syntax

Every scene object in your `locations/` modules has a `links` array. To create a navigation arrow pointing to another scene, you add an object to this array.

```javascript
links: [
  {
    nodeId: 'target-scene-id', // The exact ID of the destination scene
    position: { yaw: '90deg', pitch: '-5deg' }, // Where the arrow appears in THIS scene
    name: 'Go to Library Lobby', // Tooltip text shown on hover
  }
]
```

### Key Properties:
- `nodeId`: **Must** exactly match the `id` of the destination scene.
- `position.yaw`: Horizontal placement (left/right). `0deg` is the center of the image. Range: `0deg` to `360deg`.
- `position.pitch`: Vertical placement (up/down). `0deg` is the horizon. Range: `-90deg` (straight down) to `90deg` (straight up). Generally, links are placed slightly below the horizon (e.g., `-10deg` to `-15deg`).
- `name`: (Optional) The text displayed when the user hovers over the arrow.

---

## 2. Finding the Exact Coordinates (Yaw & Pitch)

You shouldn't guess the `yaw` and `pitch` values. The project includes a utility to help you find them easily.

1. Open the virtual tour in your browser (`http://localhost:8000`).
2. Navigate to the scene where you want to place the arrow.
3. Open your browser's **Developer Tools Console** (F12 -> Console).
4. *(If `coordinate-logger.js` is active)* Click exactly where you want the arrow to appear on the screen.
5. The console will log the exact `yaw` and `pitch` values (e.g., `Clicked at: { yaw: '135.4deg', pitch: '-12.1deg' }`).
6. Copy these values into your code.

---

## 3. Two-Way Linking (Crucial Best Practice)

When you link Scene A to Scene B, you almost always need to create a reverse link from Scene B back to Scene A. If you don't, the user will walk into a room and get trapped!

**Example:**

In `locations/bt/f1-lobby.js`:
```javascript
{
  id: 'bt-lobby-1',
  name: 'Main Lobby',
  // ...
  links: [
    {
      nodeId: 'bt-kids-1',
      position: { yaw: '45deg', pitch: '-10deg' },
      name: 'Go to Kids Section'
    }
  ]
}
```

In `locations/bt/f1-kids.js`:
```javascript
{
  id: 'bt-kids-1',
  name: 'Kids Section',
  // ...
  links: [
    {
      nodeId: 'bt-lobby-1',
      position: { yaw: '225deg', pitch: '-10deg' }, // Usually roughly 180 degrees opposite
      name: 'Back to Lobby'
    }
  ]
}
```

---

## 4. Cross-Module Linking

Because the location data is split into multiple files (e.g., `ramp.js`, `stairs-front.js`, `f2-reading.js`), you can link to a scene that exists in a completely different file. 

The Virtual Tour plugin combines all these files together in the `index.js` file, so the viewer knows about all of them globally.

**Rule:** As long as the `nodeId` exactly matches the `id` of a scene defined *anywhere* within the same branch's modules, the link will work. You do not need to import `f2-reading.js` into `f1-lobby.js` just to link to it.

---

## 5. Troubleshooting Links

- **Link doesn't appear:** Ensure the `nodeId` is perfectly spelled and matches the target scene's `id`. If the viewer cannot find the target node, it silently ignores the link.
- **Link points the wrong way:** Adjust the `yaw` value.
- **Arrow is floating in the air:** Adjust the `pitch` value to be more negative (e.g., change `-5deg` to `-15deg`).
- **Cannot click the link:** Sometimes UI elements or markers overlap the link. Check for CSS `z-index` issues or overlapping markers.

---

## 6. How to Prompt the AI Agent

Keep your prompts as short and simple as possible. The AI can find the right files for you.

**Add a link:**
> "Add link yaw 45deg, pitch -10deg (lobby 1 to kids 1)"

**Add a two-way link:**
> "Make a two-way link between ramp 1 and reading 24.
> ramp 1 to reading 24: yaw 350deg, pitch -8deg.
> reading 24 to ramp 1: yaw 170deg, pitch -15deg."

**Add a placeholder link (unknown coordinates):**
> "Link stairs 1 to lobby 2 (placeholder)"
