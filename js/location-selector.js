/* ===================================================================
   Location Selector – Branch switching UI logic
   ===================================================================
   Handles the location dropdown change event, dynamically loading
   the active scene set and swapping it in the Virtual Tour plugin.
   =================================================================== */

import { VirtualTourPlugin } from '@photo-sphere-viewer/virtual-tour-plugin';
import { showLoading } from './loading-screen.js';

/**
 * Initializes the location selector dropdown, binding it to the
 * Virtual Tour plugin to dynamically swap scene sets on change.
 *
 * @param {Object} viewer - The PSV Viewer instance.
 */
export function initLocationSelector(viewer) {
  const locationSelect = document.getElementById('location-select');
  const virtualTour = viewer.getPlugin(VirtualTourPlugin);

  locationSelect.addEventListener('change', async (e) => {
    const selectedLocation = e.target.value;
    
    // Show loading UI while downloading JS chunks and image
    showLoading(`Loading ${selectedLocation.toUpperCase()} Branch...`);
    
    try {
      // Dynamically import the location module only when needed
      const module = await import(`../locations/${selectedLocation}/${selectedLocation}-index.js`);
      const newNodes = module.default;

      if (newNodes && newNodes.length > 0) {
        // Queue the intro animation to play once as soon as the new branch's initial scene loads
        viewer.addEventListener('panorama-loaded', () => {
          const currentPosition = viewer.getPosition();
          viewer.animate({
            yaw: currentPosition.yaw + (2 * Math.PI),
            pitch: currentPosition.pitch,
            speed: '3rpm', // 3 rotations per minute
          });
        }, { once: true });

        // The panorama-loaded event in loading-screen.js will hide the overlay
        await virtualTour.setNodes(newNodes, newNodes[0].id);
      }
    } catch (err) {
      console.error('Failed to load location data:', err);
      // Fallback: hide loading if there was an error
      const { hideLoading } = await import('./loading-screen.js');
      hideLoading();
    }
  });
}
