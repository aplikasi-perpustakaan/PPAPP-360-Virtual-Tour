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
import { AutorotatePlugin } from '@photo-sphere-viewer/autorotate-plugin';

import { initCoordinateLogger } from './js/coordinate-logger.js';
import { initLocationSelector } from './js/location-selector.js';
import { initAudioController } from './js/audio-controller.js';
import { initLoadingScreen, showLoading, hideLoading } from './js/loading-screen.js';

// Show loading initially
showLoading('Initializing Viewer...');

async function bootstrap() {
  try {
    // 1. Check for a requested scene and coordinates in the URL
    const urlParams = new URLSearchParams(window.location.search);
    const requestedNodeId = urlParams.get('scene');
    const requestedYaw = urlParams.get('yaw');
    const requestedPitch = urlParams.get('pitch');
    const requestedZoom = urlParams.get('zoom');
    
    // Sphere correction parameters for adjusting askew panoramas
    const requestedPan = urlParams.get('pan');
    const requestedTilt = urlParams.get('tilt');
    const requestedRoll = urlParams.get('roll');

    const isKiosk = urlParams.get('kiosk') === 'true';
    const isAutorotate = urlParams.get('autorotate') === 'true';
    const isDebug = urlParams.get('debug') === 'true';

    if (isKiosk) {
      document.body.classList.add('is-kiosk');
    }
    
    if (isDebug) {
      document.body.classList.add('is-debug');
    }
    
    // 2. Determine the branch. Use the prefix of the requested scene, or default to 'jw'
    let defaultBranch = 'jw';
    
    if (requestedNodeId) {
      // Assuming node IDs follow the convention {branch}-{floor}-{description}
      defaultBranch = requestedNodeId.split('-')[0];
    }
    
    // Generate the HTML for the embedded location selector
    const branches = [
      { id: 'pusat', name: 'PUSAT - Seberang Jaya' },
      { id: 'bt', name: 'BT - Daerah Seberang Perai Utara' },
      { id: 'jw', name: 'JW - Daerah Seberang Perai Selatan' },
      { id: 'bm', name: 'BM - Daerah Seberang Perai Tengah' },
      { id: 'ppaj', name: 'PPAJ - AEON Jusco Alma' },
      { id: 'gt', name: 'GT - Daerah Timur Laut' },
      { id: 'ppk', name: 'PPK - Lounge@Komtar' },
    ];
    
    const optionsHTML = branches.map(b => 
      `<option value="${b.id}" ${b.id === defaultBranch ? 'selected' : ''}>${b.name}</option>`
    ).join('');
    
    const locationSelectHTML = `<select id="location-select" class="navbar-select">${optionsHTML}</select>`;
    
    // 3. Load the initial nodes dynamically BEFORE initializing the viewer
    const module = await import(`./locations/${defaultBranch}/${defaultBranch}-index.js`);
    const defaultNodes = module.default;
    
    // 4. Validate if the requested node exists in the loaded branch
    const branchStartNodeIds = {
      jw: 'jw-ext-outside-10',
      bm: 'bm-ext-outside-1',
    };
    const configuredStartNodeId = branchStartNodeIds[defaultBranch];
    let startNodeId = defaultNodes.some(node => node.id === configuredStartNodeId)
      ? configuredStartNodeId
      : defaultNodes[0].id;
    if (requestedNodeId && defaultNodes.some(node => node.id === requestedNodeId)) {
      startNodeId = requestedNodeId;
    }

    // Apply any requested URL coordinates to the starting node before initialization
    if (requestedYaw || requestedPitch || requestedPan || requestedTilt || requestedRoll) {
      const targetNode = defaultNodes.find(n => n.id === startNodeId);
      if (targetNode) {
        if (requestedYaw) targetNode.defaultYaw = requestedYaw;
        if (requestedPitch) targetNode.defaultPitch = requestedPitch;
        
        if (requestedPan || requestedTilt || requestedRoll) {
          targetNode.sphereCorrection = targetNode.sphereCorrection || {};
          if (requestedPan) targetNode.sphereCorrection.pan = requestedPan;
          if (requestedTilt) targetNode.sphereCorrection.tilt = requestedTilt;
          if (requestedRoll) targetNode.sphereCorrection.roll = requestedRoll;
        }
      }
    }

    // 5. Instantiate the Viewer now that we have nodes
    const viewerOptions = {
      container: document.getElementById('viewer'),
      navbar: [
        'zoom',
        'move',
        {
          id: 'location',
          content: locationSelectHTML,
          className: 'navbar-location-container',
          title: 'Select Location'
        },
        'caption',
        'gallery',
        'fullscreen',
      ],
      plugins: [
        [MarkersPlugin, {}],
        [GalleryPlugin, {}],
        [MapPlugin, {
          size: '200px',
          position: 'bottom left'
        }],
        [CompassPlugin, {
          size: '100px',
        }],
        [VirtualTourPlugin, {
          renderMode: '3d',
          positionMode: 'manual',
          preload: true,
          nodes: defaultNodes,
          startNodeId: startNodeId,
          map: {
            imageUrl: 'assets/floor-plans/dummy-map.jpg',
          }
        }],
      ],
    };

    if (isAutorotate) {
      viewerOptions.plugins.push([AutorotatePlugin, { autostartDelay: 1000, autostartOnIdle: true }]);
    }
    
    if (requestedZoom) {
      viewerOptions.defaultZoomLvl = parseInt(requestedZoom, 10);
    }
    
    if (isKiosk) {
      viewerOptions.navbar = false;
    }

    // Force the Viewer constructor to respect the requested URL coordinates for the initial load
    if (requestedYaw) viewerOptions.defaultYaw = requestedYaw;
    if (requestedPitch) viewerOptions.defaultPitch = requestedPitch;
    
    // Ensure the initial node's sphereCorrection is applied immediately
    const initialNode = defaultNodes.find(n => n.id === startNodeId);
    if (initialNode && initialNode.sphereCorrection) {
      viewerOptions.sphereCorrection = initialNode.sphereCorrection;
    }

    const viewer = new Viewer(viewerOptions);
    window.viewer = viewer;
    
    // Minimize the map by default so it doesn't block the screen
    viewer.addEventListener('ready', () => {
      const mapPlugin = viewer.getPlugin(MapPlugin);
      if (mapPlugin) {
        setTimeout(() => mapPlugin.close(), 100);
      }
    });

    // 6. Initialize local modules
    initCoordinateLogger(viewer);
    initLocationSelector(viewer);
    initAudioController(viewer);
    initLoadingScreen(viewer);

    // 7. Update URL query string when navigating or looking around
    const virtualTour = viewer.getPlugin(VirtualTourPlugin);
    
    // Variables for Debug Keyboard Adjusters
    let currentPan = requestedPan ? parseFloat(requestedPan) || 0 : 0;
    let currentTilt = requestedTilt ? parseFloat(requestedTilt) || 0 : 0;
    let currentRoll = requestedRoll ? parseFloat(requestedRoll) || 0 : 0;

    // Update scene ID when changing rooms
    let isInitialLoad = true;
    virtualTour.addEventListener('node-changed', ({ node }) => {
      const url = new URL(window.location);
      url.searchParams.set('scene', node.id);
      
      // Remove yaw/pitch/correction when entering a new room so it uses that room's default
      // But don't strip it on the initial page load!
      if (!isInitialLoad) {
        url.searchParams.delete('yaw');
        url.searchParams.delete('pitch');
        url.searchParams.delete('zoom');
        url.searchParams.delete('pan');
        url.searchParams.delete('tilt');
        url.searchParams.delete('roll');
      }
      isInitialLoad = false;
      
      // Reset local keyboard adjusters to the current node's existing configuration
      // Note: PSV plugin strips custom properties from the node object, so we look it up from defaultNodes
      const originalNode = defaultNodes.find(n => n.id === node.id) || {};
      const correction = originalNode.sphereCorrection || { pan: '0deg', tilt: '0deg', roll: '0deg' };
      currentPan = parseFloat(correction.pan) || 0;
      currentTilt = parseFloat(correction.tilt) || 0;
      currentRoll = parseFloat(correction.roll) || 0;

      // Ensure the viewer applies the new room's correction (or resets it to 0)
      viewer.setOption('sphereCorrection', correction);

      window.history.replaceState({}, '', url);
    });

    // Debounce the position and zoom updates to avoid flooding the browser history
    let urlUpdateTimeout;
    const updateUrlParams = () => {
      clearTimeout(urlUpdateTimeout);
      urlUpdateTimeout = setTimeout(() => {
        const url = new URL(window.location);
        const position = viewer.getPosition();
        const zoom = viewer.getZoomLevel();
        
        // Convert radians to degrees for the URL string
        const yawDeg = (position.yaw * 180 / Math.PI).toFixed(2);
        const pitchDeg = (position.pitch * 180 / Math.PI).toFixed(2);
        url.searchParams.set('yaw', yawDeg + 'deg');
        url.searchParams.set('pitch', pitchDeg + 'deg');
        url.searchParams.set('zoom', zoom);
        
        window.history.replaceState({}, '', url);
      }, 500); // 500ms debounce
    };

    viewer.addEventListener('position-updated', updateUrlParams);
    viewer.addEventListener('zoom-updated', updateUrlParams);
    
    // 8. WASD Spatial Navigation & Global Arrow Key camera control
    window.addEventListener('keydown', (e) => {
      if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') return;
      
      // Look around with arrow keys (Shift+Arrow jumps by 90 degrees)
      const step = e.shiftKey ? Math.PI / 2 : 0.05; // radians
      if (e.key === 'ArrowLeft') {
        const pos = viewer.getPosition();
        viewer.rotate({ yaw: pos.yaw - step, pitch: pos.pitch });
        e.preventDefault();
      } else if (e.key === 'ArrowRight') {
        const pos = viewer.getPosition();
        viewer.rotate({ yaw: pos.yaw + step, pitch: pos.pitch });
        e.preventDefault();
      } else if (e.key === 'ArrowUp') {
        const pos = viewer.getPosition();
        viewer.rotate({ yaw: pos.yaw, pitch: pos.pitch + step });
        e.preventDefault();
      } else if (e.key === 'ArrowDown') {
        const pos = viewer.getPosition();
        viewer.rotate({ yaw: pos.yaw, pitch: pos.pitch - step });
        e.preventDefault();
      } else if (e.key === '0') {
        // Snap back to exactly 0 yaw and 0 pitch
        viewer.rotate({ yaw: 0, pitch: 0 });
        e.preventDefault();
      }

      // Walk forward
      if (e.key === 'w' || e.key === 'W') {
        const currentNodeId = virtualTour.getCurrentNode()?.id;
        if (!currentNodeId) return;
        
        const currentNode = defaultNodes.find(n => n.id === currentNodeId);
        if (!currentNode || !currentNode.links || currentNode.links.length === 0) return;
        
        const currentPosition = viewer.getPosition();
        let bestLink = null;
        let minAngle = 45; // Max 45 degrees threshold to trigger a walk
        
        currentNode.links.forEach(link => {
           let linkYawDeg = 0;
           if (typeof link.position.yaw === 'string' && link.position.yaw.endsWith('deg')) {
             linkYawDeg = parseFloat(link.position.yaw);
           } else if (typeof link.position.yaw === 'number') {
             linkYawDeg = link.position.yaw * 180 / Math.PI;
           }
           
           const currentYawDeg = currentPosition.yaw * 180 / Math.PI;
           
           // Calculate shortest angular distance on a 360 circle
           let diff = Math.abs(currentYawDeg - linkYawDeg) % 360;
           if (diff > 180) diff = 360 - diff;
           
           if (diff < minAngle) {
             minAngle = diff;
             bestLink = link;
           }
        });
        
        if (bestLink) {
          virtualTour.setCurrentNode(bestLink.nodeId);
        }
      }
    });

    // 9. Debug Keyboard Adjusters for Sphere Correction (A, S, D)
    window.addEventListener('keydown', (e) => {
      if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') return;

      const step = 0.5; // degrees per keypress
      let changed = false;

      if (e.key === 'a' || e.key === 'A') {
        currentRoll += e.shiftKey ? step : -step;
        changed = true;
      } else if (e.key === 's' || e.key === 'S') {
        currentTilt += e.shiftKey ? step : -step;
        changed = true;
      } else if (e.key === 'd' || e.key === 'D') {
        currentPan += e.shiftKey ? step : -step;
        changed = true;
      }

      if (changed) {
        const correction = {
          pan: currentPan.toFixed(1) + 'deg',
          tilt: currentTilt.toFixed(1) + 'deg',
          roll: currentRoll.toFixed(1) + 'deg'
        };
        
        // Dynamically apply to the viewer
        viewer.setOption('sphereCorrection', correction);

        // Update URL so you can easily copy the values
        const url = new URL(window.location);
        url.searchParams.set('pan', correction.pan);
        url.searchParams.set('tilt', correction.tilt);
        url.searchParams.set('roll', correction.roll);
        window.history.replaceState({}, '', url);

        console.log(`[SphereCorrection] pan: '${correction.pan}', tilt: '${correction.tilt}', roll: '${correction.roll}'`);
      }
    });

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
