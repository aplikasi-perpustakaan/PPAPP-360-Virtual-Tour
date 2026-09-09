/* ===================================================================
   Location Selector – Branch switching UI logic
   ===================================================================
   Handles the location dropdown change event, swapping the active
   scene set in the Virtual Tour plugin.
   =================================================================== */

import { VirtualTourPlugin } from '@photo-sphere-viewer/virtual-tour-plugin';


/**
 * Initializes the location selector dropdown, binding it to the
 * Virtual Tour plugin to swap scene sets on change.
 *
 * @param {Object} viewer         - The PSV Viewer instance.
 * @param {Object} locationsData  - Map of branch codes to scene arrays.
 */
export function initLocationSelector(viewer, locationsData) {
  const locationSelect = document.getElementById('location-select');
  const virtualTour = viewer.getPlugin(VirtualTourPlugin);

  locationSelect.addEventListener('change', (e) => {
    const selectedLocation = e.target.value;
    const newNodes = locationsData[selectedLocation];

    if (newNodes && newNodes.length > 0) {
      virtualTour.setNodes(newNodes, newNodes[0].id);
    }
  });
}
