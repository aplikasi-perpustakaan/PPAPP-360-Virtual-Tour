import { Viewer } from '@photo-sphere-viewer/core';

export function initLinkEditor(viewer, virtualTour, allNodes, isDebug) {
  if (!isDebug) return;

  const markersPlugin = viewer.getPlugin('markers');
  
  const modal = document.getElementById('debug-edit-link-modal');
  const targetSelect = document.getElementById('debug-edit-link-target');
  const nameInput = document.getElementById('debug-edit-link-name');
  const gotoBtn = document.getElementById('debug-edit-link-goto');
  const saveBtn = document.getElementById('debug-edit-link-save');
  const cancelBtn = document.getElementById('debug-edit-link-cancel');
  const deleteBtn = document.getElementById('debug-edit-link-delete');
  const moveBtn = document.getElementById('debug-edit-link-move');
  const previewContainer = document.getElementById('debug-edit-link-preview-viewer');
  const toast = document.getElementById('debug-toast');
  
  if (!modal) return;
  
  let previewViewer = null;
  let currentSourceId = null;
  let currentTargetId = null;
  let currentLinkOriginalYaw = null;
  let currentLinkOriginalPitch = null;
  let currentTargetName = null;

  // Intercept VirtualTourPlugin navigation requests
  const originalSetCurrentNode = virtualTour.setCurrentNode.bind(virtualTour);
  virtualTour.setCurrentNode = (nodeId, options) => {
    // If we specifically requested navigation (from Go to Scene button), allow it
    if (options && options.__forceNavigation) {
      return originalSetCurrentNode(nodeId, options);
    }
    
    // Otherwise, this might be a click from the UI!
    const currentNode = virtualTour.getCurrentNode();
    if (!currentNode) {
       // Initial load
       return originalSetCurrentNode(nodeId, options);
    }

    currentSourceId = currentNode.id;
    currentTargetId = nodeId;
    const node = allNodes.find(n => n.id === currentSourceId);
    
    // Check if there is a link from the current node to the requested node
    const link = node?.links.find(l => l.nodeId === nodeId);
    if (link) {
      currentLinkOriginalYaw = link.position.yaw || '0deg';
      currentLinkOriginalPitch = link.position.pitch || '0deg';
      currentTargetName = link.name || '';
      openEditor(link);
      return Promise.resolve(); // Intercepted, do not navigate!
    }

    // If it's not a link, allow it
    return originalSetCurrentNode(nodeId, options);
  };

  function openEditor(link) {
     modal.classList.add('is-visible');
     
     targetSelect.innerHTML = '';
     const targetNode = allNodes.find(n => n.id === link.nodeId);
     const option = document.createElement('option');
     option.value = link.nodeId;
     option.textContent = targetNode ? targetNode.name || link.nodeId : link.nodeId;
     targetSelect.appendChild(option);
     
     nameInput.value = link.name || '';
     
     loadPreviewViewer(link.nodeId, link.targetYaw, link.targetPitch);
  }

  function loadPreviewViewer(nodeId, targetYaw, targetPitch) {
    const targetNode = allNodes.find(n => n.id === nodeId);
    if (!targetNode) return;

    if (previewViewer) {
      previewViewer.destroy();
    }

    const initialYaw = targetYaw || targetNode.defaultYaw || '0deg';
    const initialPitch = targetPitch || targetNode.defaultPitch || '0deg';

    previewViewer = new Viewer({
      container: previewContainer,
      panorama: targetNode.panorama,
      defaultYaw: initialYaw,
      defaultPitch: initialPitch,
      defaultZoomLvl: targetNode.defaultZoomLvl || 0,
      sphereCorrection: targetNode.sphereCorrection,
      navbar: ['zoom', 'fullscreen'],
      keyboard: false
    });

    const crosshair = document.createElement('div');
    crosshair.style.position = 'absolute';
    crosshair.style.top = '50%';
    crosshair.style.left = '50%';
    crosshair.style.width = '40px';
    crosshair.style.height = '40px';
    crosshair.style.transform = 'translate(-50%, -50%)';
    crosshair.style.pointerEvents = 'none';
    crosshair.style.zIndex = '100';
    crosshair.innerHTML = `
      <div style="position:absolute; top:50%; left:0; width:100%; height:2px; transform:translateY(-50%); background-color:rgba(0, 255, 0, 0.8); box-shadow:0 0 2px rgba(0,0,0,0.8);"></div>
      <div style="position:absolute; top:0; left:50%; width:2px; height:100%; transform:translateX(-50%); background-color:rgba(0, 255, 0, 0.8); box-shadow:0 0 2px rgba(0,0,0,0.8);"></div>
    `;
    previewContainer.appendChild(crosshair);
  }

  function showToast(msg) {
    if (toast) {
      toast.textContent = msg;
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 3000);
    }
  }

  cancelBtn.addEventListener('click', () => {
    modal.classList.remove('is-visible');
    if (previewViewer) {
      previewViewer.destroy();
      previewViewer = null;
    }
  });

  gotoBtn.addEventListener('click', () => {
    modal.classList.remove('is-visible');
    if (previewViewer) {
      previewViewer.destroy();
      previewViewer = null;
    }
    // Navigate manually since we intercepted it!
    virtualTour.setCurrentNode(currentTargetId, { __forceNavigation: true });
  });

  saveBtn.addEventListener('click', async () => {
    if (!previewViewer || !currentSourceId || !currentTargetId) return;

    const pos = previewViewer.getPosition();
    const newTargetYaw = `${((pos.yaw * 180 / Math.PI) % 360).toFixed(2)}deg`;
    const newTargetPitch = `${(pos.pitch * 180 / Math.PI).toFixed(2)}deg`;

    try {
      const response = await fetch('/api/save-link', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'edit',
          sourceId: currentSourceId,
          targetId: currentTargetId,
          yaw: currentLinkOriginalYaw,
          pitch: currentLinkOriginalPitch,
          targetName: currentTargetName,
          targetYaw: newTargetYaw,
          targetPitch: newTargetPitch
        })
      });

      if (response.ok) {
        showToast('💾 Arrival view saved successfully!');
        console.log(`[Link Editor] Saved custom arrival view for link ${currentSourceId} -> ${currentTargetId}`);
        console.log(`              Target Yaw: ${newTargetYaw}, Target Pitch: ${newTargetPitch}`);
        
        const node = allNodes.find(n => n.id === currentSourceId);
        const link = node.links.find(l => l.nodeId === currentTargetId);
        if (link) {
          link.targetYaw = newTargetYaw;
          link.targetPitch = newTargetPitch;
        }

        modal.classList.remove('is-visible');
        if (previewViewer) {
          previewViewer.destroy();
          previewViewer = null;
        }
      } else {
        showToast('❌ Failed to save arrival view.');
      }
    } catch (err) {
      showToast(`❌ Error: ${err.message}`);
    }
  });

  moveBtn.addEventListener('click', async () => {
    if (!currentSourceId || !currentTargetId || !previewViewer) return;

    // Grab the MAIN viewer's current crosshair position (where they are looking)
    const pos = viewer.getPosition();
    const newYaw = `${((pos.yaw * 180 / Math.PI) % 360).toFixed(2)}deg`;
    const newPitch = `${(pos.pitch * 180 / Math.PI).toFixed(2)}deg`;

    // Keep the targetYaw and targetPitch what they currently are in the editor
    const previewPos = previewViewer.getPosition();
    const newTargetYaw = `${((previewPos.yaw * 180 / Math.PI) % 360).toFixed(2)}deg`;
    const newTargetPitch = `${(previewPos.pitch * 180 / Math.PI).toFixed(2)}deg`;

    try {
      const response = await fetch('/api/save-link', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'edit',
          sourceId: currentSourceId,
          targetId: currentTargetId,
          yaw: newYaw,
          pitch: newPitch,
          targetName: currentTargetName,
          targetYaw: newTargetYaw,
          targetPitch: newTargetPitch
        })
      });

      if (response.ok) {
        showToast('📍 Arrow moved to crosshair!');
        console.log(`[Link Editor] Moved source arrow for link ${currentSourceId} -> ${currentTargetId}`);
        console.log(`              New Yaw: ${newYaw}, New Pitch: ${newPitch}`);
        
        // Update local memory
        const node = allNodes.find(n => n.id === currentSourceId);
        const link = node.links.find(l => l.nodeId === currentTargetId);
        if (link) {
          link.position.yaw = newYaw;
          link.position.pitch = newPitch;
          link.targetYaw = newTargetYaw;
          link.targetPitch = newTargetPitch;
          
          currentLinkOriginalYaw = newYaw;
          currentLinkOriginalPitch = newPitch;
        }

        // Update the marker instantly on screen
        if (markersPlugin) {
          markersPlugin.updateMarker({
            id: `tour-link-${currentTargetId}`,
            position: { yaw: newYaw, pitch: newPitch }
          });
        }
      } else {
        showToast('❌ Failed to move arrow.');
      }
    } catch (err) {
      showToast(`❌ Error: ${err.message}`);
    }
  });

  deleteBtn.addEventListener('click', async () => {
    if (!currentSourceId || !currentTargetId) return;
    
    try {
      const response = await fetch('/api/save-link', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'delete',
          sourceId: currentSourceId,
          targetId: currentTargetId
        })
      });

      if (response.ok) {
        await fetch('/api/save-link', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ action: 'delete', sourceId: currentTargetId, targetId: currentSourceId })
        });
        
        showToast('🗑️ Link deleted.');
        console.log(`[Link Editor] Deleted bidirectional link between ${currentSourceId} and ${currentTargetId}`);
        
        const node = allNodes.find(n => n.id === currentSourceId);
        node.links = node.links.filter(l => l.nodeId !== currentTargetId);
        
        if (markersPlugin) markersPlugin.removeMarker(`tour-link-${currentTargetId}`);

        modal.classList.remove('is-visible');
        if (previewViewer) {
          previewViewer.destroy();
          previewViewer = null;
        }
      } else {
        showToast('❌ Failed to delete link.');
      }
    } catch (err) {
      showToast(`❌ Error: ${err.message}`);
    }
  });
}
