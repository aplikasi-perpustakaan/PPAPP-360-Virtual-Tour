# Custom Marker Web Component Guide

The PPAPP 360° Virtual Tour supports rich, interactive custom markers using the native Web Component `<custom-marker>` defined in [`js/custom-marker.js`](../js/custom-marker.js).

---

## 1. Overview

Unlike standard flat icon markers, `<custom-marker>` provides:
- **SVG Icon Rendering**: Vector icons (`info`, `star`, `warning`, `pin`, `no-entry`, `ring`) with color theming.
- **Interactive Pulsing/Ripple Animation**: A subtle radar-like ripple on hover to invite user clicks.
- **3D Bounce Tooltip Card**: Smooth entry and exit animations (`rotate-bounce-out` and `show`).
- **Responsive Auto-Flipping**: Tooltips automatically flip to render below the marker when positioned near the top third of the viewport, preventing clipping.
- **Rich Slotted Content**: Support for images, headings, captions, and formatted text.
- **Image Preview with Aspect Ratio**: Images are capped at 250px height and use `object-fit: contain` to preserve original proportions.
- **Click-to-Enlarge**: Clicking the marker opens the full-resolution image in a new tab (via `data-url` attribute). This is disabled in debug mode so markers can be edited instead.

---

## 2. Usage in Scene Modules

Markers are stored as `html:` strings (NOT `element:` closures) so the dev-server can serialize them to disk via the `/api/save-marker` endpoint.

### Standard Marker Format

```javascript
markers: [
  {
    id: '{sceneId}-marker-{timestamp}',
    position: { yaw: '91.17deg', pitch: '-23.31deg' },
    size: { width: 32, height: 32 },
    anchor: 'center center',
    data: {
      type: 'info',          // 'info' | 'audio' | 'image' | 'link'
      title: 'Marker Title',
      icon: 'info',          // 'info' | 'star' | 'warning' | 'pin' | 'no-entry' | 'ring'
      color: 'blue',         // 'blue' | 'gold' | 'red' | 'green'
      animated: false,
      content: 'Text content here'
    },
    html: '<custom-marker type="info" data-icon="info" data-color="blue"><h2>Marker Title</h2><p>Text content here</p></custom-marker>'
  }
]
```

### Image Marker Format

```javascript
{
  id: '{sceneId}-marker-{timestamp}',
  position: { yaw: '120deg', pitch: '-15deg' },
  size: { width: 32, height: 32 },
  anchor: 'center center',
  data: {
    type: 'image',
    title: 'Photo Title',
    icon: 'info',
    color: 'blue',
    animated: false,
    imageSrc: './images/{branch}/markers/{file}.jpg',
    originalUrl: './images/{branch}/markers/{file}.jpg',
    caption: 'Photo Title'
  },
  html: '<custom-marker type="image" data-icon="info" data-color="blue" data-url="./images/{branch}/markers/{file}.jpg"><img src="./images/{branch}/markers/{file}.jpg" alt="Photo Title" style="cursor:pointer;" /><h2>Photo Title</h2><p style="font-size: 11px; opacity:0.7;">🔍 Click to enlarge</p></custom-marker>'
}
```

> **Important:** Do NOT use `element: (() => document.createElement(...))()` closures. This pattern is not serializable by the dev-server's JSON-based save pipeline and will be lost.

---

## 3. Marker Size Tiers

| Tier   | Value (px) | Use Case |
|--------|-----------|----------|
| Small  | 32        | **Default.** Standard markers (info, image, audio) |
| Medium | 44        | Legacy markers (pre-2026-09) |
| Large  | 56        | High-visibility markers (rarely used) |

The default size for new markers created via the Debug Marker Placer is **Small (32px)**.

---

## 4. Supported Attributes

| Attribute | Values | Description |
|-----------|--------|-------------|
| `type` | `info`, `audio`, `image`, `link` | Marker type (determines tooltip content) |
| `data-icon` | `info`, `star`, `warning`, `pin`, `no-entry`, `ring` | SVG icon rendered inside the marker button |
| `data-color` | `blue`, `gold`, `red`, `green` | Sets `--marker-color` CSS variable for the icon fill |
| `animated` | (boolean attribute) | Enables attention pulse animation |
| `data-url` | URL string | URL opened on click (full-res image or external link) |

---

## 5. Supported Slots & Content

Inside `<custom-marker>`, you can slot the following standard elements:

| Element | Purpose | Styling |
|---|---|---|
| `<img>` | Card header image | Max 250px height, `object-fit: contain`, aspect ratio preserved |
| `<h2>` | Title / Headline | Centered, bold heading |
| `<p>` | Body text / Description | Centered text with margin & padding |

---

## 6. Image Preview Behavior

- The tooltip card is **300px wide**.
- Slotted `<img>` elements are constrained to `max-height: 250px` with `object-fit: contain`.
- Images always preserve their original aspect ratio — never cropped or stretched.
- A subtle dark background (`rgba(0, 0, 0, 0.3)`) fills the space around non-filling images (e.g., portrait photos that hit the height limit).

---

## 7. Marker Assets Storage

Keep marker image assets organized within each branch's section subfolder:
```text
images/{branch}/{section}/markers/
  ├── {filename}.jpg          # Full-resolution image
  └── thumbs/
      └── {filename}.jpg      # 400px-wide thumbnail (auto-generated by dev-server upload)
```

---

## 8. Adding Markers (Debug Mode)

The easiest way to add markers is through the **Debug Marker Placer UI**:

1. Open the tour with `?debug=true`.
2. Click the **"+ Marker"** button in the debug toolbar.
3. Fill in the form: type, size, icon, color, title, and content.
4. Click **Save** — the marker is saved directly to the scene's `.js` file via the dev-server API.
5. The page reloads to show the new marker.

### Editing Existing Markers

In debug mode, click on any existing marker to open the edit dialog. You can:
- **Edit** all properties (type, size, icon, color, title, content).
- **Move** the marker to a new position by clicking "Move" and then clicking a new spot.
- **Duplicate** the marker (offset by 5° yaw).
- **Copy Style** to reuse the same size/icon/color for future markers.
- **Delete** the marker.
