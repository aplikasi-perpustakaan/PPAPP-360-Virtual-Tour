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

  let expectedLocation = locationSelect.value;
  let introAnimationListener = null;

  locationSelect.addEventListener('change', async (e) => {
    const selectedLocation = e.target.value;
    expectedLocation = selectedLocation;
    
    // Show loading UI while downloading JS chunks and image
    showLoading(`Loading ${selectedLocation.toUpperCase()} Branch...`);
    
    try {
      // Dynamically import the location module only when needed
      const module = await import(`../locations/${selectedLocation}/${selectedLocation}-index.js`);
      const newNodes = module.default;

      // Abort if the user selected a different location while this was loading
      if (expectedLocation !== selectedLocation) return;

      if (newNodes && newNodes.length > 0) {
        
        // Remove old listener if it exists to prevent multiple sweeps queuing up
        if (introAnimationListener) {
            viewer.removeEventListener('panorama-loaded', introAnimationListener);
        }

        // Queue the intro animation to play once as soon as the new branch's initial scene loads
        introAnimationListener = () => {
          if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            const currentPosition = viewer.getPosition();
            viewer.animate({
              yaw: currentPosition.yaw + (2 * Math.PI),
              pitch: currentPosition.pitch,
              speed: '3rpm', // 3 rotations per minute
            });
          }
          // Remove self since `{ once: true }` doesn't let us easily remove a specific function instance beforehand
          viewer.removeEventListener('panorama-loaded', introAnimationListener);
          introAnimationListener = null;
        };
        viewer.addEventListener('panorama-loaded', introAnimationListener);

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
