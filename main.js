/* ===================================================================
   360° Virtual Tour – Main Application Script
   ===================================================================
   Uses Photo Sphere Viewer (PSV) with:
     - Virtual Tour Plugin  (multi-scene navigation)
     - Compass Plugin       (orientation compass)
     - Gallery Plugin       (scene thumbnail strip)
     - Markers Plugin       (info tooltips / hotspots)
   =================================================================== */

import { Viewer } from '@photo-sphere-viewer/core';
import { VirtualTourPlugin } from '@photo-sphere-viewer/virtual-tour-plugin';
import { CompassPlugin } from '@photo-sphere-viewer/compass-plugin';
import { GalleryPlugin } from '@photo-sphere-viewer/gallery-plugin';
import { MarkersPlugin } from '@photo-sphere-viewer/markers-plugin';

import pusatNodes from './locations/pusat.js';
import btNodes from './locations/bt.js';
import jwNodes from './locations/jw.js';
import bmNodes from './locations/bm.js';
import ppajNodes from './locations/ppaj.js';
import gtNodes from './locations/gt.js';
import ppkNodes from './locations/ppk.js';

// ── Location Data Map ────────────────────────────────────────────────
// Maps the select box values to the scene arrays
const locationsData = {
  pusat: pusatNodes,
  bt: btNodes,
  jw: jwNodes,
  bm: bmNodes,
  ppaj: ppajNodes,
  gt: gtNodes,
  ppk: ppkNodes
};


// ── Viewer Instantiation ─────────────────────────────────────────────

const viewer = new Viewer({
  container: document.getElementById('viewer'),

  // Auto-rotate after 3 seconds of inactivity
  autorotateDelay: 3000,

  // Navbar with useful controls
  navbar: [
    'zoom',
    'move',
    'caption',
    'gallery',
    'fullscreen',
  ],

  // Plugins
  plugins: [
    // Virtual Tour – handles multi-scene navigation
    [VirtualTourPlugin, {
      renderMode: '3d',        // 3D transition between scenes
      positionMode: 'manual',  // we supply explicit link positions
      preload: true,           // preload adjacent panoramas for instant switching
      nodes: locationsData.pusat,
      startNodeId: locationsData.pusat[0].id,
    }],

    // Compass – orientation indicator
    [CompassPlugin, {
      size: '100px',
    }],

    // Gallery – thumbnail strip for quick scene selection
    [GalleryPlugin, {}],

    // Markers – info tooltips and hotspots
    [MarkersPlugin, {}],
  ],
});


// ── Coordinate Logger (Double-Click) ─────────────────────────────────
// Double-click anywhere on the panorama to log the exact yaw and pitch
// to the browser console. Use these values to precisely place links
// and markers in your tour configuration above.

viewer.addEventListener('dblclick', ({ data }) => {
  if (data) {
    const yawDeg   = (data.yaw   * 180 / Math.PI).toFixed(2);
    const pitchDeg = (data.pitch * 180 / Math.PI).toFixed(2);

    console.log(
      `%c📍 Clicked Position`,
      'color: #2D6CDF; font-weight: bold; font-size: 14px;'
    );
    console.log(`   Yaw:   ${data.yaw.toFixed(4)} rad  →  ${yawDeg}°`);
    console.log(`   Pitch: ${data.pitch.toFixed(4)} rad  →  ${pitchDeg}°`);
    console.log(`   Copy-paste for config:`);
    console.log(`   position: { yaw: '${yawDeg}deg', pitch: '${pitchDeg}deg' }`);
  }
});

console.log(
  '%c🌐 360° Virtual Tour loaded. Double-click anywhere to log yaw/pitch coordinates.',
  'color: #C9A84C; font-weight: bold;'
);

// ── Location Selector Logic ──────────────────────────────────────────

const locationSelect = document.getElementById('location-select');
const virtualTour = viewer.getPlugin(VirtualTourPlugin);

locationSelect.addEventListener('change', (e) => {
  const selectedLocation = e.target.value;
  const newNodes = locationsData[selectedLocation];
  
  if (newNodes && newNodes.length > 0) {
    // Switch the nodes and start at the first scene of the new location
    virtualTour.setNodes(newNodes, newNodes[0].id);
  }
});
