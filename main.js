/* ===================================================================
   360° Virtual Tour – Main Application Script
   ===================================================================
   Entry point: dynamically loads the initial location data,
   bootstraps the PSV Viewer with plugins, and initializes UI modules.
   =================================================================== */

import { Viewer } from '@photo-sphere-viewer/core';
import { VirtualTourPlugin } from '@photo-sphere-viewer/virtual-tour-plugin';
import { CompassPlugin } from '@photo-sphere-viewer/compass-plugin';
import { GalleryPlugin } from '@photo-sphere-viewer/gallery-plugin';
import { MarkersPlugin } from '@photo-sphere-viewer/markers-plugin';
import { MapPlugin } from '@photo-sphere-viewer/map-plugin';

import { initCoordinateLogger } from './js/coordinate-logger.js';
import { initLocationSelector } from './js/location-selector.js';
import { initAudioController } from './js/audio-controller.js';
import { initLoadingScreen, showLoading, hideLoading } from './js/loading-screen.js';

// Show loading initially
showLoading('Initializing Viewer...');

async function bootstrap() {
  try {
    // 1. Determine which branch is selected by default in the HTML dropdown
    const locationSelect = document.getElementById('location-select');
    const defaultBranch = locationSelect.value || 'bt';
    
    // 2. Load the initial nodes dynamically BEFORE initializing the viewer
    const module = await import(`./locations/${defaultBranch}/index.js`);
    const defaultNodes = module.default;

    // 3. Instantiate the Viewer now that we have nodes
    const viewer = new Viewer({
      container: document.getElementById('viewer'),
      navbar: [
        'zoom',
        'move',
        'caption',
        'gallery',
        'fullscreen',
      ],
      plugins: [
        [VirtualTourPlugin, {
          renderMode: '3d',
          positionMode: 'manual',
          preload: true,
          nodes: defaultNodes,
          startNodeId: defaultNodes[0].id,
          map: {
            imageUrl: 'assets/floor-plans/dummy-map.jpg',
          }
        }],
        [CompassPlugin, {
          size: '100px',
        }],
        [GalleryPlugin, {}],
        [MarkersPlugin, {}],
        [MapPlugin, {
          size: '200px',
          position: 'bottom left'
        }],
      ],
    });

    // 4. Initialize local modules
    initCoordinateLogger(viewer);
    initLocationSelector(viewer);
    initAudioController(viewer);
    initLoadingScreen(viewer);

    // Note: The loading screen will hide itself when the 'ready' or 'panorama-loaded' events fire in loading-screen.js

  } catch (error) {
    console.error('Critical error during bootstrap:', error);
    // Display error to user via our debug overlay
    const errDiv = document.getElementById('debug-error');
    if (errDiv) {
      errDiv.style.display = 'block';
      errDiv.innerText += `Critical Bootstrap Error: ${error.message}\n\n`;
    }
  }
}

// Start the application
bootstrap();
