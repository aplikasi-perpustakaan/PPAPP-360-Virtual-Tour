# Photo Sphere Viewer (PSV) Comprehensive Reference

This document serves as a comprehensive reference and knowledge base for **Photo Sphere Viewer (PSV)**. It is designed to equip AI agents with deep knowledge of the library's architecture, APIs, plugins, and best practices, specifically tailored for 360° virtual tour applications.

---

## 1. Core Architecture & Initialization

Photo Sphere Viewer is a JavaScript library built on top of Three.js that allows rendering of 360° panoramas.

### 1.1 Installation and Import (ES Modules)
In this project, PSV is imported via native ES Modules (importmap) to avoid build steps.
```javascript
import { Viewer } from '@photo-sphere-viewer/core';
import { VirtualTourPlugin } from '@photo-sphere-viewer/virtual-tour-plugin';
import { MarkersPlugin } from '@photo-sphere-viewer/markers-plugin';
```

### 1.2 Basic Initialization
```javascript
const viewer = new Viewer({
  container: document.querySelector('#viewer'),
  panorama: 'path/to/panorama.jpg',
  defaultYaw: '130deg', // Radians or CSS-like strings ('deg', 'rad')
  defaultPitch: 0,
  defaultZoomLvl: 50, // 0 to 100
  navbar: [
    'zoom', 'move', 'download', 'description', 'caption', 'fullscreen'
  ],
  plugins: [
    [MarkersPlugin, { /* plugin options */ }],
    [VirtualTourPlugin, { /* plugin options */ }]
  ]
});
```

---

## 2. Core API Methods & Properties

### 2.1 Viewer Properties
- `viewer.panorama`: Returns the URL of the current panorama.
- `viewer.config`: The configuration object passed during initialization.

### 2.2 Viewer Methods
- `viewer.setPanorama(path, options)`: Loads a new panorama. Returns a Promise.
- `viewer.animate({ yaw, pitch, zoom, speed })`: Smoothly animates the camera to a new position. Returns a Promise.
- `viewer.getPosition()`: Returns the current `{ yaw, pitch }` in radians.
- `viewer.getZoomLevel()`: Returns the current zoom level (0-100).
- `viewer.zoom(level)`: Changes the zoom level.
- `viewer.rotate({ yaw, pitch })`: Instantly changes the camera orientation.
- `viewer.resize(size)`: Triggers a resize of the canvas.
- `viewer.destroy()`: Completely destroys the viewer instance and removes events.

### 2.3 Event System
PSV uses a custom event emitter. Events are listened to using `addEventListener`.
```javascript
viewer.addEventListener('ready', () => {
  console.log('Viewer is ready!');
});

viewer.addEventListener('click', ({ data }) => {
  console.log('Clicked at yaw:', data.yaw, 'pitch:', data.pitch);
});

viewer.addEventListener('position-updated', ({ position }) => {
  console.log('New position:', position);
});
```
*Note: Depending on the PSV version, event listener syntax may use `viewer.on('event', cb)` or `viewer.addEventListener('event', cb)`.*

---

## 3. Virtual Tour Plugin

The **Virtual Tour Plugin** handles multiple nodes (panoramas) and links (hotspots) connecting them.

### 3.1 Setup
```javascript
const virtualTour = viewer.getPlugin(VirtualTourPlugin);

virtualTour.setNodes([
  {
    id: 'node-1',
    panorama: 'image1.jpg',
    name: 'Entrance',
    links: [
      { nodeId: 'node-2', position: { yaw: '10deg', pitch: 0 } }
    ],
    markers: [ /* Markers array specific to this node */ ],
    defaultYaw: '0deg',
    defaultPitch: '0deg'
  },
  {
    id: 'node-2',
    panorama: 'image2.jpg',
    name: 'Lobby',
    links: [
      { nodeId: 'node-1', position: { yaw: '180deg', pitch: 0 } }
    ]
  }
], 'node-1'); // 'node-1' is the starting node
```

### 3.2 Virtual Tour Events
```javascript
virtualTour.addEventListener('node-changed', ({ node }) => {
  console.log('Current node ID:', node.id);
});
```

### 3.3 Virtual Tour Methods
- `virtualTour.setNodes(nodes, startNodeId)`: Loads the tour graph.
- `virtualTour.setCurrentNode(nodeId)`: Navigates to a specific node.

---

## 4. Markers Plugin

The **Markers Plugin** allows the addition of interactive elements (HTML, images, SVGs, polygons) to the panorama.

### 4.1 Marker Configuration
```javascript
const markersPlugin = viewer.getPlugin(MarkersPlugin);

markersPlugin.addMarker({
  id: 'info-marker-1',
  position: { yaw: '45deg', pitch: '0deg' },
  html: '<div class="custom-marker">ℹ️</div>', // Or use 'image', 'polygon', etc.
  size: { width: 40, height: 40 },
  anchor: 'bottom center', // 'center center', 'bottom left', etc.
  tooltip: {
    content: 'Click here for more info',
    position: 'top center',
  },
  content: '<h2>Detailed Info</h2><p>This appears in a side panel when clicked.</p>',
  data: { customField: 'value' } // Attach custom metadata
});
```

### 4.2 Marker Types
1. **HTML**: Uses standard DOM elements. Ideal for highly styled markers. (Property: `html`)
2. **Image**: Renders an image file. (Property: `image`)
3. **SVG**: Uses inline SVG strings. (Property: `html` or specific SVG APIs)
4. **Polygon/Polyline**: Draws shapes on the sphere using an array of coordinates. (Properties: `polygon`, `polyline`, `svgStyle`)

### 4.3 Markers Plugin Methods
- `markersPlugin.addMarker(config)`: Adds a single marker.
- `markersPlugin.setMarkers(configs)`: Replaces all markers.
- `markersPlugin.updateMarker(config)`: Updates an existing marker.
- `markersPlugin.removeMarker(id)`: Removes a marker by ID.
- `markersPlugin.clearMarkers()`: Removes all markers.

### 4.4 Markers Events
```javascript
markersPlugin.addEventListener('select-marker', ({ marker }) => {
  console.log('Marker clicked:', marker.id);
  // Example: Play audio if marker has audio data
  if (marker.data?.audioUrl) {
    playAudio(marker.data.audioUrl);
  }
});
```

---

## 5. CSS Customization & Theming

PSV is heavily customizable via CSS. UI elements have standard class names prefixed with `psv-`.
- `.psv-container`: The main wrapper.
- `.psv-navbar`: The bottom navigation bar.
- `.psv-tooltip`: Tooltips attached to markers or navbar buttons.
- `.psv-panel`: The side panel triggered by marker content.
- `.psv-marker`: Base class for all DOM-based markers.

---

## 6. Coordinate System & Math

- **Yaw (Longitude)**: Horizontal rotation. Left to right. Defaults to `0` at the center of the image. Range: `0` to `2PI` (or `0deg` to `360deg`).
- **Pitch (Latitude)**: Vertical rotation. Up and down. `0` is the horizon. Range: `-PI/2` to `PI/2` (or `-90deg` to `90deg`).
- *Tip for AI Agents*: When writing configuration files, string values with units (`'90deg'`, `'-15deg'`) are much more readable and maintainable than raw radians.

---

## 7. Performance & Optimization

- Panoramas should be equirectangular images with a 2:1 aspect ratio.
- Recommended resolutions: 4096x2048 to 8192x4096.
- Larger images heavily impact WebGL texture memory. Quality should be optimized (JPEG 80-85%).
- When switching nodes in Virtual Tour, PSV caches images. Ensure proper garbage collection by not keeping unnecessary references.

---

## 8. Common Pitfalls & Troubleshooting

1. **CORS Issues**: Loading images from a different origin or `file://` protocol will throw a WebGL Security Error. Must run on a local HTTP server.
2. **Missing `importmap`**: If ES Modules fail to load dependencies (`@photo-sphere-viewer/core`), ensure the HTML file has a valid `<script type="importmap">` mapping all peer dependencies (like Three.js).
3. **Overlapping UI elements**: Z-index conflicts between PSV's `.psv-container` and custom app UI. Ensure PSV container has a relative/absolute context.
4. **Marker scaling**: Markers scale slightly when zooming. Use `scale: [min, max]` in the marker config to clamp marker sizes.
