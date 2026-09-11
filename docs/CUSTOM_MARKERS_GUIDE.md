# Custom Marker Web Component Guide

The PPAPP 360° Virtual Tour supports rich, interactive custom markers using the native Web Component `<custom-marker>` defined in [`js/custom-marker.js`](../js/custom-marker.js).

---

## 1. Overview

Unlike standard flat icon markers, `<custom-marker>` provides:
- **Interactive Pulsing/Ripple Animation**: A subtle radar-like ripple on hover to invite user clicks.
- **3D Bounce Tooltip Card**: Smooth entry and exit animations (`rotate-bounce-out` and `show`).
- **Responsive Auto-Flipping**: Tooltips automatically flip to render below the marker when positioned near the top third of the viewport, preventing clipping.
- **Rich Slotted Content**: Support for images, headings, captions, and formatted text.

---

## 2. Usage in Scene Modules

To add a custom marker to any scene:

1. **Import the module** at the top of your scene file:
   ```javascript
   import '../../js/custom-marker.js';
   ```

2. **Add a marker object** to the scene's `markers` array:
   ```javascript
   markers: [
     {
       id: '{scene-id}-custom-{name}',
       position: { yaw: '91.17deg', pitch: '-23.31deg' },
       element: (() => {
         const el = document.createElement('custom-marker');
         el.innerHTML = `
           <img src="./images/bm/gf-kids/markers/custom-marker-8-v2.jpg" alt="Children's Corner" />
           <h2>Children's Corner</h2>
           <p>Bahasa Cina Kanak-Kanak Collection</p>
         `;
         return el;
       })(),
       anchor: 'center center',
     }
   ]
   ```

---

## 3. Supported Slots & Content

Inside `<custom-marker>`, you can slot the following standard elements:

| Element | Purpose | Styling |
|---|---|---|
| `<img>` | Card header image | Full width, rounded top corners (`10px 10px 0 0`) |
| `<h2>` | Title / Headline | Centered, bold heading |
| `<p>` | Body text / Description | Centered text with margin & padding |
| `<pre>` | Raw metadata or preformatted text | Monospace text with automatic word wrap |

---

## 4. Marker Assets Storage

Keep marker image assets organized within each branch's section subfolder:
```text
images/{branch}/{section}/markers/
  └── custom-marker-{description}.jpg
```

Example:
`images/bm/gf-kids/markers/custom-marker-8-v2.jpg`

---

## 5. Finding Marker Coordinates

Use the same coordinate logger as navigation links:
1. Open the tour with `?debug=true` or open browser console (F12).
2. Click on the point of interest in the panorama.
3. Note the logged `{ yaw, pitch }` values and paste them into your marker definition.
