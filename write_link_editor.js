const fs = require('fs');
const content = \import { Viewer } from '@photo-sphere-viewer/core';

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
  const previewContainer = document.getElementById('debug-edit-link-preview-viewer');
  const toast = document.getElementById('debug-toast');
  
  if (!modal) return;
  
  let previewViewer = null;
  let currentSourceId = null;
  let currentTargetId = null;
  let currentLinkOriginalYaw = null;
  let currentLinkOriginalPitch = null;
  let currentTargetName = null;

  // Intercept marker clicks
  if (markersPlugin) {
    markersPlugin.addEventListener('select-marker', (e, data) => {
      const marker = data.marker;
      if (marker.id.startsWith('tour-link-')) {
        // Prevent default navigation
        e.preventDefault();
        
        currentSourceId = virtualTour.getCurrentNode().id;
        currentTargetId = marker.id.replace('tour-link-', '');
        
        const node = allNodes.find(n => n.id === currentSourceId);
        const link = node.links.find(l => l.nodeId === currentTargetId);
        if (link) {
           currentLinkOriginalYaw = link.position.yaw || '0deg';
           currentLinkOriginalPitch = link.position.pitch || '0deg';
           currentTargetName = link.name || '';
           openEditor(link);
        }
      }
    });
  }

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
    // Perform the navigation manually since we intercepted it
    virtualTour.setCurrentNode(currentTargetId);
  });

  saveBtn.addEventListener('click', async () => {
    if (!previewViewer || !currentSourceId || !currentTargetId) return;

    const pos = previewViewer.getPosition();
    const newTargetYaw = \\deg\;
    const newTargetPitch = \\deg\;

    try {
      const response = await fetch('/api/save-link', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'edit', // or 'add' (re-saving rewrites it)
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
        
        // Update local memory
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
      showToast(\❌ Error: \\);
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
        
        const node = allNodes.find(n => n.id === currentSourceId);
        node.links = node.links.filter(l => l.nodeId !== currentTargetId);
        
        if (markersPlugin) markersPlugin.removeMarker(\	our-link-\\);

        modal.classList.remove('is-visible');
        if (previewViewer) {
          previewViewer.destroy();
          previewViewer = null;
        }
      } else {
        showToast('❌ Failed to delete link.');
      }
    } catch (err) {
      showToast(\❌ Error: \\);
    }
  });
}\;
fs.writeFileSync('js/link-editor.js', content, 'utf8');
