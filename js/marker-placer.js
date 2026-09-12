export function initMarkerPlacer(viewer, virtualTour, allNodes, isDebug) {
  if (!isDebug) return;

  const btn = document.getElementById('debug-add-marker-btn');
  const modal = document.getElementById('debug-marker-modal');
  const saveBtn = document.getElementById('debug-marker-save');
  const cancelBtn = document.getElementById('debug-marker-cancel');
  
  const idInput = document.getElementById('debug-marker-id');
  const typeSelect = document.getElementById('debug-marker-type');
  const titleInput = document.getElementById('debug-marker-title');
  const contentInput = document.getElementById('debug-marker-content');
  const audioInput = document.getElementById('debug-marker-audio');
  
  const contentGroup = document.getElementById('debug-marker-content-group');
  const audioGroup = document.getElementById('debug-marker-audio-group');
  
  const toast = document.getElementById('debug-toast');

  if (!btn || !modal) return;

  let capturedYawDeg = 0;
  let capturedPitchDeg = 0;

  btn.addEventListener('click', () => {
    const position = viewer.getPosition();
    capturedYawDeg = parseFloat((position.yaw * 180 / Math.PI).toFixed(2));
    capturedPitchDeg = parseFloat((position.pitch * 180 / Math.PI).toFixed(2));
    capturedYawDeg = ((capturedYawDeg % 360) + 360) % 360;

    const currentNodeId = virtualTour.getCurrentNode()?.id || 'unknown';
    // Auto-generate a basic ID
    const randomSuffix = Math.floor(Math.random() * 1000);
    idInput.value = `${currentNodeId}-marker-${randomSuffix}`;
    
    titleInput.value = '';
    contentInput.value = '';
    audioInput.value = '';
    
    modal.classList.add('is-visible');
    idInput.focus();
  });

  typeSelect.addEventListener('change', () => {
    if (typeSelect.value === 'audio') {
      contentGroup.style.display = 'none';
      audioGroup.style.display = 'flex';
    } else if (typeSelect.value === 'info') {
      contentGroup.style.display = 'flex';
      audioGroup.style.display = 'none';
    } else { // image/custom
      contentGroup.style.display = 'flex';
      audioGroup.style.display = 'none';
    }
  });

  function closeModal() {
    modal.classList.remove('is-visible');
  }

  cancelBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-visible')) {
      closeModal();
    }
  });

  saveBtn.addEventListener('click', async () => {
    const currentNodeId = virtualTour.getCurrentNode()?.id;
    if (!currentNodeId) return;

    const id = idInput.value.trim() || `marker-${Date.now()}`;
    const type = typeSelect.value;
    const title = titleInput.value.trim();
    const yaw = `${capturedYawDeg.toFixed(2)}deg`;
    const pitch = `${capturedPitchDeg.toFixed(2)}deg`;
    
    let markerConfig = {};
    if (type === 'info') {
      markerConfig = {
        id,
        position: { yaw, pitch },
        html: '<custom-marker type="info"></custom-marker>',
        size: { width: 44, height: 44 },
        anchor: 'center center',
        tooltip: title,
        data: {
          type: 'info',
          title: title,
          content: contentInput.value.trim()
        }
      };
    } else if (type === 'audio') {
      markerConfig = {
        id,
        position: { yaw, pitch },
        html: '<custom-marker type="audio"></custom-marker>',
        size: { width: 44, height: 44 },
        anchor: 'center center',
        tooltip: title,
        data: {
          type: 'audio',
          audioSrc: audioInput.value.trim()
        }
      };
    } else if (type === 'image') {
      markerConfig = {
        id,
        position: { yaw, pitch },
        html: '<custom-marker type="image"></custom-marker>',
        size: { width: 44, height: 44 },
        anchor: 'center center',
        tooltip: title,
        data: {
          type: 'image',
          imageSrc: contentInput.value.trim(),
          caption: title
        }
      };
    }

    // 1. Inject into PSV immediately
    const markersPlugin = viewer.getPlugin('markers');
    if (markersPlugin) {
      markersPlugin.addMarker(markerConfig);
    }

    // 2. Add to allNodes in memory
    const node = allNodes.find(n => n.id === currentNodeId);
    if (node) {
      if (!node.markers) node.markers = [];
      const existing = node.markers.findIndex(m => m.id === id);
      if (existing >= 0) node.markers[existing] = markerConfig;
      else node.markers.push(markerConfig);
    }

    showToast(`✅ Marker added: ${id}`);
    closeModal();

    // 3. Save to disk via dev server
    try {
      const response = await fetch('/api/save-marker', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sourceId: currentNodeId,
          markerConfig
        })
      });
      if (response.ok) {
        console.log(`%c💾 Auto-saved marker to disk: ${id}`, 'color: #2D6CDF');
      } else {
        console.error(`❌ Failed to auto-save marker: Server returned ${response.status}`);
      }
    } catch (err) {
      console.warn(`⚠️ Auto-save unavailable for marker: ${err.message}.`);
      console.log(`Copy paste this into your scene config:\n`, markerConfig);
    }
  });

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add('is-visible');
    setTimeout(() => toast.classList.remove('is-visible'), 3000);
  }
}
