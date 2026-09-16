/* ===================================================================
   Location Selector – Section switching UI logic
   ===================================================================
   Handles the location dropdown change event, teleporting the viewer
   to the selected area/scene within the current branch.
   =================================================================== */

import { VirtualTourPlugin } from '@photo-sphere-viewer/virtual-tour-plugin';

export function initLocationSelector(viewer) {
  const locationSelect = document.getElementById('location-select');
  if (!locationSelect) return;
  const virtualTour = viewer.getPlugin(VirtualTourPlugin);

  // Sync dropdown with current scene when navigating around
  virtualTour.addEventListener('node-changed', ({ node }) => {
    const currentId = node.id;
    if (!currentId) return;
    
    const option = Array.from(locationSelect.options).find(opt => opt.value === currentId);
    if (option) {
      locationSelect.value = currentId;
    } else {
      locationSelect.value = ""; // Select Area... placeholder
    }
  });

  // Teleport when a section is selected from the dropdown
  locationSelect.addEventListener('change', (e) => {
    const targetSceneId = e.target.value;
    if (!targetSceneId) return;

    try {
      virtualTour.setCurrentNode(targetSceneId);
    } catch (err) {
      console.error('Failed to teleport to section:', err);
    }
  });
}
