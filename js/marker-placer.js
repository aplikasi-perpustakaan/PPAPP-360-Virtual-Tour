export function initMarkerPlacer(viewer, virtualTour, allNodes, isDebug) {
  if (!isDebug) return;

  const btn = document.getElementById('debug-add-marker-btn');
  const modal = document.getElementById('debug-marker-modal');
  const cancelBtn = document.getElementById('debug-marker-cancel');
  const saveBtn = document.getElementById('debug-marker-save');
  
  const typeSelect = document.getElementById('debug-marker-type');
  const sizeSelect = document.getElementById('debug-marker-size');
  const iconSelect = document.getElementById('debug-marker-icon');
  const colorSelect = document.getElementById('debug-marker-color');
  const animCheck = document.getElementById('debug-marker-anim');
  
  const titleInput = document.getElementById('debug-marker-title');
  const contentInput = document.getElementById('debug-marker-content');
  const audioInput = document.getElementById('debug-marker-audio');
  const linkInput = document.getElementById('debug-marker-link');
  
  const contentGroup = document.getElementById('debug-marker-content-group');
  const audioGroup = document.getElementById('debug-marker-audio-group');
  const linkGroup = document.getElementById('debug-marker-link-group');
  const uploadGroup = document.getElementById('debug-marker-image-upload-group');
  
  const uploadInput = document.getElementById('debug-marker-image-file');
  const uploadBtn = document.getElementById('debug-marker-upload-btn');
  const toast = document.getElementById('debug-toast');

  if (!btn || !modal) return;

  const deleteBtn = document.getElementById('debug-marker-delete');
  const moveBtn = document.getElementById('debug-marker-move');

  let capturedYawDeg = 0;
  let capturedPitchDeg = 0;
  let isEditing = false;
  let editingMarkerId = null;

  btn.addEventListener('click', () => {
    isEditing = false;
    editingMarkerId = null;
    
    // Grab center of screen
    const pos = viewer.getPosition();
    capturedYawDeg = (pos.yaw * 180 / Math.PI) % 360;
    capturedPitchDeg = pos.pitch * 180 / Math.PI;

    // Reset modal
    typeSelect.value = 'info';
    sizeSelect.value = '44';
    iconSelect.value = 'info';
    colorSelect.value = 'blue';
    animCheck.checked = false;
    titleInput.value = '';
    contentInput.value = '';
    audioInput.value = '';
    linkInput.value = '';
    if (uploadInput) uploadInput.value = '';
    contentGroup.style.display = 'flex';
    audioGroup.style.display = 'none';
    linkGroup.style.display = 'none';
    uploadGroup.style.display = 'none';
    
    if (deleteBtn) deleteBtn.style.display = 'none';
    if (moveBtn) moveBtn.style.display = 'none';

    modal.classList.add('is-visible');
    });

  const markersPlugin = viewer.getPlugin('markers');
  if (markersPlugin) {
    markersPlugin.addEventListener('select-marker', ({ marker }) => {
      // Don't intercept visualizer links here
      if (marker.id.startsWith('debug-link-visualizer-')) return;
      
      const node = allNodes.find(n => n.id === virtualTour.getCurrentNode()?.id);
      const rawMarker = node?.markers?.find(m => m.id === marker.id);
      
      if (rawMarker) {
        isEditing = true;
        editingMarkerId = rawMarker.id;
        
        idInput.value = rawMarker.id;
        typeSelect.value = rawMarker.data?.type || 'info';
        
        let sizeMatch = rawMarker.html ? rawMarker.html.match(/width="(\d+)"/) || rawMarker.html.match(/size="\d+"/) : null;
        sizeSelect.value = rawMarker.size?.width || '44';
        
        iconSelect.value = rawMarker.data?.icon || 'info';
        colorSelect.value = rawMarker.data?.color || 'blue';
        animCheck.checked = !!rawMarker.data?.animated;
        
        titleInput.value = rawMarker.data?.title || rawMarker.tooltip?.content || rawMarker.tooltip || '';
        
        contentGroup.style.display = 'none';
        audioGroup.style.display = 'none';
        linkGroup.style.display = 'none';
        uploadGroup.style.display = 'none';

        if (typeSelect.value === 'audio') {
          audioInput.value = rawMarker.data?.audioSrc || '';
          audioGroup.style.display = 'flex';
        } else if (typeSelect.value === 'link') {
          linkInput.value = rawMarker.data?.url || '';
          linkGroup.style.display = 'flex';
        } else if (typeSelect.value === 'image') {
          contentInput.value = rawMarker.data?.imageSrc || '';
          contentGroup.style.display = 'flex';
          uploadGroup.style.display = 'flex';
        } else {
          contentInput.value = rawMarker.data?.content || '';
          contentGroup.style.display = 'flex';
        }

        capturedYawDeg = parseFloat(rawMarker.position.yaw) || 0;
        capturedPitchDeg = parseFloat(rawMarker.position.pitch) || 0;

        if (deleteBtn) deleteBtn.style.display = 'inline-block';
        if (moveBtn) moveBtn.style.display = 'inline-block';

        modal.classList.add('is-visible');
        }
    });
  }

  typeSelect.addEventListener('change', () => {
    contentGroup.style.display = 'none';
    audioGroup.style.display = 'none';
    linkGroup.style.display = 'none';
    uploadGroup.style.display = 'none';

    if (typeSelect.value === 'audio') {
      audioGroup.style.display = 'flex';
    } else if (typeSelect.value === 'link') {
      linkGroup.style.display = 'flex';
    } else if (typeSelect.value === 'image') {
      contentGroup.style.display = 'flex';
      uploadGroup.style.display = 'flex';
    } else {
      contentGroup.style.display = 'flex';
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

    const id = (isEditing && editingMarkerId) ? editingMarkerId : `${currentNodeId}-marker-${Date.now()}`;
    const type = typeSelect.value;
    const title = titleInput.value.trim();
    const yaw = `${capturedYawDeg.toFixed(2)}deg`;
    const pitch = `${capturedPitchDeg.toFixed(2)}deg`;
    const size = parseInt(sizeSelect.value, 10) || 44;
    const icon = iconSelect.value;
    const color = colorSelect.value;
    const anim = animCheck.checked;
    
    let markerConfig = {
      id,
      position: { yaw, pitch },
      size: { width: size, height: size },
      anchor: 'center center',
      tooltip: title,
      data: {
        type,
        title,
        icon,
        color,
        animated: anim
      }
    };
    
    let customMarkerProps = `type="${type}" data-icon="${icon}" data-color="${color}"`;
    if (anim) customMarkerProps += ' animated';

    if (type === 'info') {
      markerConfig.html = `<custom-marker ${customMarkerProps}></custom-marker>`;
      markerConfig.data.content = contentInput.value.trim();
    } else if (type === 'audio') {
      markerConfig.html = `<custom-marker ${customMarkerProps}></custom-marker>`;
      markerConfig.data.audioSrc = audioInput.value.trim();
    } else if (type === 'image') {
      markerConfig.html = `<custom-marker ${customMarkerProps}></custom-marker>`;
      markerConfig.data.imageSrc = contentInput.value.trim();
      markerConfig.data.caption = title;
    } else if (type === 'link') {
      markerConfig.html = `<custom-marker ${customMarkerProps} data-url="${linkInput.value.trim()}"></custom-marker>`;
      markerConfig.data.url = linkInput.value.trim();
    }

    // 1. Inject into PSV immediately
    const markersPlugin = viewer.getPlugin('markers');
    if (markersPlugin) {
      if (isEditing) {
        markersPlugin.updateMarker(markerConfig);
      } else {
        markersPlugin.addMarker(markerConfig);
      }
    }

    // 2. Add to allNodes in memory
    const node = allNodes.find(n => n.id === currentNodeId);
    if (node) {
      if (!node.markers) node.markers = [];
      const existing = node.markers.findIndex(m => m.id === id);
      if (existing >= 0) node.markers[existing] = markerConfig;
      else node.markers.push(markerConfig);
    }

    showToast(isEditing ? `✅ Marker updated: ${id}` : `✅ Marker added: ${id}`);
    closeModal();

    // 3. Save to disk via dev server
    try {
      const response = await fetch('/api/save-marker', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          sourceId: currentNodeId, 
          markerConfig,
          markerId: editingMarkerId || id, // Pass original ID so backend can replace it
          action: isEditing ? 'edit' : 'add'
        })
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to save');
      }
    } catch (err) {
      showToast(`❌ Error saving marker: ${err.message}`);
    }
  });

  if (deleteBtn) {
    deleteBtn.addEventListener('click', async () => {
      if (!isEditing || !editingMarkerId) return;
      const currentNodeId = virtualTour.getCurrentNode()?.id;
      if (!currentNodeId) return;

      const confirmDelete = confirm('Are you sure you want to delete this marker?');
      if (!confirmDelete) return;

      // 1. Remove from PSV
      const markersPlugin = viewer.getPlugin('markers');
      if (markersPlugin) {
        markersPlugin.removeMarker(editingMarkerId);
      }

      // 2. Remove from allNodes memory
      const node = allNodes.find(n => n.id === currentNodeId);
      if (node && node.markers) {
        node.markers = node.markers.filter(m => m.id !== editingMarkerId);
      }

      showToast(`🗑️ Marker deleted: ${editingMarkerId}`);
      closeModal();

      // 3. Delete from disk
      try {
        const response = await fetch('/api/save-marker', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 
            sourceId: currentNodeId, 
            markerId: editingMarkerId,
            action: 'delete'
          })
        });
        if (!response.ok) throw new Error('Failed to delete');
      } catch (err) {
        showToast(`❌ Error deleting marker: ${err.message}`);
      }
    });
  }

  if (moveBtn) {
    moveBtn.addEventListener('click', () => {
      const pos = viewer.getPosition();
      capturedYawDeg = (pos.yaw * 180 / Math.PI) % 360;
      capturedPitchDeg = pos.pitch * 180 / Math.PI;
      showToast(`🎯 Position updated to crosshair! Click Save to apply.`);
      
      // Briefly flash the button green to show success
      const originalBg = moveBtn.style.background;
      moveBtn.style.background = 'rgba(40,167,69,0.5)';
      setTimeout(() => moveBtn.style.background = originalBg, 500);
    });
  }

  
  document.querySelectorAll('.rt-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tag = btn.getAttribute('data-tag');
      const start = contentInput.selectionStart;
      const end = contentInput.selectionEnd;
      const text = contentInput.value;
      if (tag === 'br') {
        contentInput.value = text.substring(0, start) + '<br/>' + text.substring(end);
        contentInput.selectionStart = contentInput.selectionEnd = start + 5;
      } else {
        const selectedText = text.substring(start, end);
        contentInput.value = text.substring(0, start) + `<${tag}>${selectedText}</${tag}>` + text.substring(end);
        contentInput.selectionStart = contentInput.selectionEnd = start + tag.length + 2 + selectedText.length;
      }
      contentInput.focus();
    });
  });

  if (uploadBtn) {
    uploadBtn.addEventListener('click', () => {
      const file = uploadInput.files[0];
      if (!file) return showToast('Please select a file first.');
      
      const reader = new FileReader();
      reader.onload = async (e) => {
        try {
          uploadBtn.textContent = 'Uploading...';
          const base64 = e.target.result;
          const response = await fetch('/api/upload-image', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ filename: file.name, image: base64 })
          });
          const result = await response.json();
          if (response.ok) {
            contentInput.value = result.url;
            showToast('✅ Image uploaded');
          } else {
            throw new Error(result.error);
          }
        } catch (err) {
          showToast('❌ Upload failed: ' + err.message);
        } finally {
          uploadBtn.textContent = 'Upload';
        }
      };
      reader.readAsDataURL(file);
    });
  }

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add('is-visible');
    setTimeout(() => toast.classList.remove('is-visible'), 3000);
  }
}
