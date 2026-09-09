# Photo Sphere Viewer (PSV) Demos & Advanced Features Reference

This document serves as a companion to the main `PSV_REFERENCE.md` and provides comprehensive documentation on the advanced features, configurations, and plugins showcased on the official [PSV Demos page](https://photo-sphere-viewer.js.org/demos/).

---

## 1. Basic & Core Features

### 1.1 Cropped Panoramas
To display partial panoramas (e.g., a 180° image instead of a full 360°), use the `panoData` configuration to define the cropped area.

```javascript
const viewer = new Viewer({
  // ...
  panoData: {
    fullWidth: 6000,
    fullHeight: 3000,
    croppedWidth: 4000,
    croppedHeight: 2000,
    croppedX: 1000,
    croppedY: 500,
    poseHeading: 0,
    posePitch: 0,
    poseRoll: 0,
  },
});
```

### 1.2 Fisheye Projection
The `fisheye` parameter enables a distorted, ultra-wide-angle perspective.

```javascript
const viewer = new Viewer({
  // ...
  fisheye: true, // Boolean (true/false) or numeric intensity (e.g. 1.5)
});
```

### 1.3 Custom Navbar
The navbar can be customized entirely using a string array of built-in button identifiers, or completely replaced by hiding the default and building a custom DOM layer over the viewer.

```javascript
const viewer = new Viewer({
  // ...
  navbar: [
    'zoom',
    'move',
    {
      id: 'my-custom-button',
      content: 'Custom',
      title: 'Click Me!',
      className: 'custom-btn',
      onClick: () => alert('Custom action!'),
    },
    'caption',
    'fullscreen',
  ],
});
```

### 1.4 Transitions
Switching panoramas with transition effects:

```javascript
viewer.setPanorama('new-image.jpg', {
  showLoader: true,
  transition: true,
  speed: '20rpm', // Rotation speed during transition
  position: { yaw: '90deg', pitch: '0deg' }, // Where to look in new pano
  zoom: 50
});
```

---

## 2. Advanced Interactivity

### 2.1 Smooth Camera Animations
You can animate the camera's view programmatically.

```javascript
viewer.animate({
  yaw: '180deg',
  pitch: '10deg',
  zoom: 80,
  speed: '2rpm',
}).then(() => console.log('Animation complete!'));
```

### 2.2 Screenshot Generation
Take a snapshot of the current WebGL canvas state (excluding HTML markers/DOM elements).

```javascript
const renderPlugin = viewer.getPlugin(ResolutionPlugin); // Or core API depending on version
const screenshotUrl = viewer.renderer.renderer.domElement.toDataURL('image/jpeg');
```

---

## 3. Advanced Markers Plugin Capabilities

The Markers Plugin supports highly complex overlays and interactive elements.

### 3.1 SVG Polygon Patterns
Draw precise geometric overlays directly onto the 360 sphere.

```javascript
markersPlugin.addMarker({
  id: 'polygon-1',
  polygon: [
    [0.1, 0.2], // [yaw, pitch] pairs in radians
    [0.5, 0.2],
    [0.5, 0.5],
    [0.1, 0.5]
  ],
  svgStyle: {
    fill: 'rgba(255, 0, 0, 0.3)',
    stroke: 'red',
    strokeWidth: '2px',
  },
  tooltip: 'Restricted Area'
});
```

### 3.2 Hover Scale & Interactions
Markers can have hover states to enlarge when the user points at them.

```javascript
markersPlugin.addMarker({
  id: 'interactive-marker',
  image: 'icon.png',
  size: { width: 50, height: 50 },
  position: { yaw: '90deg', pitch: 0 },
  // Optional dynamic sizing based on zoom level:
  scale: [0.5, 1.5], // [min_scale, max_scale]
});
```
*Note: Smooth hover scaling is usually achieved using custom CSS transitions on the marker's HTML class.*

### 3.3 Chroma Key / Video Markers
Display a video inside the panorama, utilizing chroma keying to remove backgrounds (green screen effect).

```javascript
markersPlugin.addMarker({
  id: 'video-marker',
  videoLayer: 'video.mp4',
  position: { yaw: 0, pitch: 0 },
  size: { width: 400, height: 300 },
  chromaKey: {
    enabled: true,
    color: { r: 0, g: 255, b: 0 }, // Green screen removal
    similarity: 0.2,
  }
});
```

### 3.4 Custom Tooltips
Tooltips on markers can be heavily customized with HTML.

```javascript
markersPlugin.addMarker({
  id: 'custom-tooltip',
  position: { yaw: '0deg', pitch: '0deg' },
  html: '<div class="pin"></div>',
  tooltip: {
    content: '<b>Bold Title</b><br><em>Italic subtitle</em>',
    position: 'top left',
    className: 'my-custom-tooltip' // CSS styling target
  }
});
```

---

## 4. Integration with Other Plugins

### 4.1 Compass Plugin (with Markers)
The Compass Plugin can show the user's heading and simultaneously display markers on the compass UI.

```javascript
import { CompassPlugin } from '@photo-sphere-viewer/compass-plugin';

viewer.getPlugin(CompassPlugin).setHotspots([
  { yaw: '0deg', color: 'red' },
  { yaw: '90deg', color: 'blue' }
]);
```

### 4.2 Map & Plan Plugins
The **Map Plugin** overlays a mini-map onto the viewer. The **Plan Plugin** does the same for architectural floor plans. Both natively sync with the Virtual Tour plugin to show the current location and connected rooms as clickable hotspots on the map interface.

```javascript
import { MapPlugin } from '@photo-sphere-viewer/map-plugin';

const mapPlugin = viewer.getPlugin(MapPlugin);
mapPlugin.setCenter({ x: 100, y: 150 });
```

---

## 5. Implementation Summary

To implement any of these advanced demo features into the PPAPP Virtual Tour:
1. Ensure the necessary plugin is imported via `importmap` in `index.html`.
2. Instantiate the plugin in `main.js` during Viewer initialization.
3. Use the specific configurations detailed above within the location data objects in the `locations/` directory.

---

## 6. How to Prompt the AI Agent

Keep your prompts simple. The AI can figure out the technical details.

**Add a Map or Compass:**
> "Add the Map plugin to main.js"

**Add a custom marker (polygon/video):**
> "Add a red polygon marker to the lobby floor"
> "Add a video marker (video.mp4) to the ramp wall at yaw 0, pitch 0"

**Add animations:**
> "Make the camera auto-pan slowly when the tour loads"

**Customize the navbar:**
> "Change the navbar to only show the fullscreen and zoom buttons"
