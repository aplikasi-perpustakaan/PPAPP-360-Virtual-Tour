/* ===================================================================
   360° Virtual Tour – Main Application Script
   ===================================================================
   Entry point: bootstraps the PSV Viewer with plugins, loads
   location data, and initializes all UI modules.

   Plugins:
     - Virtual Tour Plugin  (multi-scene navigation)
     - Compass Plugin       (orientation compass)
     - Gallery Plugin       (scene thumbnail strip)
     - Markers Plugin       (info tooltips / hotspots)
   =================================================================== */


// ── Third-Party Libraries ────────────────────────────────────────────

import { Viewer } from '@photo-sphere-viewer/core';
import { VirtualTourPlugin } from '@photo-sphere-viewer/virtual-tour-plugin';
import { CompassPlugin } from '@photo-sphere-viewer/compass-plugin';
import { GalleryPlugin } from '@photo-sphere-viewer/gallery-plugin';
import { MarkersPlugin } from '@photo-sphere-viewer/markers-plugin';


// ── Local Modules ────────────────────────────────────────────────────

import { initCoordinateLogger } from './js/coordinate-logger.js';
import { initLocationSelector } from './js/location-selector.js';


// ── Location Data ────────────────────────────────────────────────────

import pusatNodes from './locations/pusat/index.js';
import btNodes from './locations/bt/index.js';
import jwNodes from './locations/jw/index.js';
import bmNodes from './locations/bm/index.js';
import ppajNodes from './locations/ppaj/index.js';
import gtNodes from './locations/gt/index.js';
import ppkNodes from './locations/ppk/index.js';


// ── Location Data Map ────────────────────────────────────────────────
// Maps the select box values to the scene arrays

const locationsData = {
  pusat: pusatNodes,
  bt:    btNodes,
  jw:    jwNodes,
  bm:    bmNodes,
  ppaj:  ppajNodes,
  gt:    gtNodes,
  ppk:   ppkNodes,
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
      renderMode: '3d',
      positionMode: 'manual',
      preload: true,
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


// ── Initialize Modules ──────────────────────────────────────────────

initCoordinateLogger(viewer);
initLocationSelector(viewer, locationsData);
