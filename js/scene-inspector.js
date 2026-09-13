export function initSceneInspector(viewer, virtualTour, allNodes, isDebug) {
  if (!isDebug) return;

  const panel = document.getElementById('debug-scene-inspector');
  const contentDiv = document.getElementById('debug-inspector-content');
  const closeBtn = document.getElementById('debug-inspector-close');
  const copyBtn = document.getElementById('debug-copy-url-btn');
  const toast = document.getElementById('debug-toast');

  if (!panel || !contentDiv) return;

  // Toggle Inspector Panel with 'I'
  window.addEventListener('keydown', (e) => {
    if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') return;
    if (e.key === 'i' || e.key === 'I') {
      panel.style.display = panel.style.display === 'none' ? 'flex' : 'none';
      if (panel.style.display === 'flex') {
        updateInspector();
      }
    }
  });

  closeBtn.addEventListener('click', () => {
    panel.style.display = 'none';
  });

  // Update on node change
  virtualTour.addEventListener('node-changed', () => {
    if (panel.style.display === 'flex') {
      updateInspector();
    }
  });

  // Quick Copy URL
  const copyUrl = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      showToast('🔗 Copied URL to clipboard!');
    }).catch(err => {
      console.error('Failed to copy URL', err);
      showToast('❌ Failed to copy URL');
    });
  };

  if (copyBtn) {
    copyBtn.addEventListener('click', copyUrl);
  }

  const saveDefaultsBtn = document.getElementById('debug-save-defaults-btn');
  if (saveDefaultsBtn) {
    saveDefaultsBtn.addEventListener('click', async () => {
      const currentNodeId = virtualTour.getCurrentNode()?.id;
      if (!currentNodeId) return;

      const pos = viewer.getPosition();
      const zoom = viewer.getZoomLevel();

      const defaultYaw = `${((pos.yaw * 180 / Math.PI) % 360).toFixed(2)}deg`;
      const defaultPitch = `${(pos.pitch * 180 / Math.PI).toFixed(2)}deg`;
      const defaultZoomLvl = Math.round(zoom);

      try {
        const response = await fetch('/api/save-defaults', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ sourceId: currentNodeId, defaultYaw, defaultPitch, defaultZoomLvl })
        });
        if (response.ok) {
          showToast(`💾 Saved Defaults: Yaw ${defaultYaw}, Pitch ${defaultPitch}`);
        } else {
          showToast(`❌ Failed to save defaults`);
        }
      } catch (err) {
        showToast(`❌ Error saving defaults: ${err.message}`);
      }
    });
  }

  const saveThumbBtn = document.getElementById('debug-save-thumb-btn');
  if (saveThumbBtn) {
    saveThumbBtn.addEventListener('click', async () => {
      const currentNodeId = virtualTour.getCurrentNode()?.id;
      if (!currentNodeId) return;

      const pos = viewer.getPosition();
      const defaultYaw = `${((pos.yaw * 180 / Math.PI) % 360).toFixed(2)}deg`;
      const defaultPitch = `${(pos.pitch * 180 / Math.PI).toFixed(2)}deg`;

      showToast(`⏳ Generating thumbnail...`);
      saveThumbBtn.disabled = true;

      try {
        const response = await fetch('/api/generate-thumbnail', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ sourceId: currentNodeId, yaw: defaultYaw, pitch: defaultPitch })
        });
        
        if (response.ok) {
          const data = await response.json();
          console.log('Thumbnail output:', data.stdout);
          showToast(`📸 Thumbnail updated!`);
        } else {
          showToast(`❌ Failed to update thumbnail`);
        }
      } catch (err) {
        showToast(`❌ Error: ${err.message}`);
      } finally {
        saveThumbBtn.disabled = false;
      }
    });
  }

  // Copy with 'C'
  window.addEventListener('keydown', (e) => {
    if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') return;
    if (e.key === 'c' || e.key === 'C') {
      copyUrl();
    }
  });

  function updateInspector() {
    const currentNodeId = virtualTour.getCurrentNode()?.id;
    if (!currentNodeId) {
      contentDiv.innerHTML = '<p>No scene loaded.</p>';
      return;
    }

    const node = allNodes.find(n => n.id === currentNodeId);
    if (!node) {
      contentDiv.innerHTML = '<p>Scene data not found.</p>';
      return;
    }

    // Create a clean JSON representation
    const displayData = {
      id: node.id,
      name: node.name,
      panorama: node.panorama,
      defaultYaw: node.defaultYaw,
      defaultPitch: node.defaultPitch,
      sphereCorrection: node.sphereCorrection,
      linksCount: node.links ? node.links.length : 0,
      markersCount: node.markers ? node.markers.length : 0,
      data: node.data || {}
    };

    contentDiv.innerHTML = `<pre>${JSON.stringify(displayData, null, 2)}</pre>`;
  }

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('is-visible');
    setTimeout(() => toast.classList.remove('is-visible'), 3000);
  }
}
