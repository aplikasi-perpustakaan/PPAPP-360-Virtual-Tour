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
  const duplicateBtn = document.getElementById('debug-marker-duplicate');
  const copyStyleBtn = document.getElementById('debug-marker-copy-style');

  let capturedYawDeg = 0;
  let capturedPitchDeg = 0;
  let isEditing = false;
  let editingMarkerId = null;
  let isRepositioning = false;

  btn.addEventListener('click', () => {
    isEditing = false;
    editingMarkerId = null;
    
    // Grab center of screen
    const pos = viewer.getPosition();
    capturedYawDeg = (pos.yaw * 180 / Math.PI) % 360;
    capturedPitchDeg = pos.pitch * 180 / Math.PI;

    // Reset modal
    typeSelect.value = 'info';
    const savedStyle = localStorage.getItem('debugMarkerStyle');
    if (savedStyle) {
      try {
        const parsed = JSON.parse(savedStyle);
        sizeSelect.value = parsed.size || '44';
        iconSelect.value = parsed.icon || 'info';
        colorSelect.value = parsed.color || 'blue';
        animCheck.checked = !!parsed.anim;
      } catch (e) {}
    } else {
      sizeSelect.value = '44';
      iconSelect.value = 'info';
      colorSelect.value = 'blue';
      animCheck.checked = false;
    }

    titleInput.value = '';
    contentInput.value = '';
    audioInput.value = '';
    linkInput.value = '';
    if (uploadInput) uploadInput.value = '';
    contentGroup.querySelector('label').textContent = 'Content (HTML):';
    const rtToolbar = contentGroup.querySelector('.debug-rt-toolbar');
    if (rtToolbar) rtToolbar.style.display = 'flex';
    contentGroup.style.display = 'flex';
    audioGroup.style.display = 'none';
    linkGroup.style.display = 'none';
    uploadGroup.style.display = 'none';
    if (deleteBtn) deleteBtn.style.display = 'none';
    if (moveBtn) moveBtn.style.display = 'none';
    if (duplicateBtn) duplicateBtn.style.display = 'none';
    if (copyStyleBtn) copyStyleBtn.style.display = 'none';

    modal.classList.add('is-visible');
  });

  // ── Parse marker HTML for metadata fallback ──────
  // Legacy/hand-coded markers may lack a structured `data` object.
  // This helper extracts type, icon, color, title, content, and URLs
  // from the HTML string so the edit modal reflects the actual marker.
  function parseMarkerHtml(html) {
    if (!html) return {};
    const result = {};
    try {
      const div = document.createElement('div');
      div.innerHTML = html;
      const cm = div.querySelector('custom-marker');
      if (cm) {
        if (cm.getAttribute('type')) result.type = cm.getAttribute('type');
        if (cm.getAttribute('data-icon')) result.icon = cm.getAttribute('data-icon');
        if (cm.getAttribute('data-color')) result.color = cm.getAttribute('data-color');
        if (cm.hasAttribute('animated')) result.animated = true;
        if (cm.getAttribute('data-url')) result.url = cm.getAttribute('data-url');

        const h2 = cm.querySelector('h2');
        if (h2) result.title = h2.textContent.trim();

        const img = cm.querySelector('img');
        if (img) {
          result.imageSrc = img.getAttribute('src') || '';
          // If there's an image, it's likely an image-type marker
          if (!result.type) result.type = 'image';
        }

        const p = cm.querySelector('p');
        if (p && !p.textContent.includes('Click to enlarge') && !p.textContent.includes('Audio')) {
          result.content = p.textContent.trim();
        }
      }
    } catch (e) {
      // Parsing failed; fall back gracefully
    }
    return result;
  }

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

        // Merge: explicit data wins, then parsed HTML, then defaults
        const parsed = parseMarkerHtml(rawMarker.html);
        const d = rawMarker.data || {};

        typeSelect.value = d.type || parsed.type || 'info';
        
        sizeSelect.value = rawMarker.size?.width || '44';
        iconSelect.value = d.icon || parsed.icon || 'info';
        colorSelect.value = d.color || parsed.color || 'blue';
        animCheck.checked = !!(d.animated || parsed.animated);
        
        titleInput.value = d.title || parsed.title || rawMarker.tooltip?.content || rawMarker.tooltip || '';
        
        contentGroup.style.display = 'none';
        audioGroup.style.display = 'none';
        linkGroup.style.display = 'none';
        uploadGroup.style.display = 'none';
        const galleryContainer = document.getElementById('debug-marker-gallery-container');
        if (galleryContainer) galleryContainer.style.display = 'none';

        if (typeSelect.value === 'audio') {
          audioInput.value = d.audioSrc || '';
          audioGroup.style.display = 'flex';
        } else if (typeSelect.value === 'link') {
          linkInput.value = d.url || parsed.url || '';
          linkGroup.style.display = 'flex';
        } else if (typeSelect.value === 'image') {
          contentInput.value = d.imageSrc || parsed.imageSrc || '';
          contentInput.setAttribute('data-original', d.originalUrl || parsed.url || '');
          contentGroup.querySelector('label').textContent = 'Image URL (or select from gallery):';
          const rtToolbar = contentGroup.querySelector('.debug-rt-toolbar');
          if (rtToolbar) rtToolbar.style.display = 'none';
          contentGroup.style.display = 'flex';
          uploadGroup.style.display = 'flex';
          if (galleryContainer) galleryContainer.style.display = 'flex';
          loadGallery();
        } else {
          contentInput.value = d.content || parsed.content || '';
          contentGroup.querySelector('label').textContent = 'Content (HTML):';
          const rtToolbar = contentGroup.querySelector('.debug-rt-toolbar');
          if (rtToolbar) rtToolbar.style.display = 'flex';
          contentGroup.style.display = 'flex';
        }

        capturedYawDeg = parseFloat(rawMarker.position.yaw) || 0;
        capturedPitchDeg = parseFloat(rawMarker.position.pitch) || 0;
        
        if (deleteBtn) deleteBtn.style.display = 'inline-block';
        if (moveBtn) moveBtn.style.display = 'inline-block';
        if (duplicateBtn) duplicateBtn.style.display = 'inline-block';
        if (copyStyleBtn) copyStyleBtn.style.display = 'inline-block';

        modal.classList.add('is-visible');
      }
    });
  }

  // --- Static Event Listeners (Added only once) ---

  if (moveBtn) {
    moveBtn.addEventListener('click', () => {
      closeModal();
      showToast('📍 Click anywhere in the panorama to drop the marker.');
      isRepositioning = true;
      viewer.container.style.cursor = 'crosshair';
    });
  }
  
  viewer.addEventListener('click', ({ data }) => {
    if (isRepositioning) {
      isRepositioning = false;
      viewer.container.style.cursor = '';
      
      const coords = viewer.dataHelper.viewerCoordsToSphericalCoords({ x: data.clientX, y: data.clientY });
      if (coords) {
         capturedYawDeg = (coords.yaw * 180 / Math.PI) % 360;
         capturedPitchDeg = coords.pitch * 180 / Math.PI;
         showToast('📍 Position updated! Click Save.');
      }
      modal.classList.add('is-visible');
    }
  });

  if (duplicateBtn) {
    duplicateBtn.addEventListener('click', () => {
      // Offset by 5 degrees yaw to prevent exact overlap
      capturedYawDeg = (capturedYawDeg + 5) % 360;
      isEditing = false;
      editingMarkerId = null;
      if (deleteBtn) deleteBtn.style.display = 'none';
      if (duplicateBtn) duplicateBtn.style.display = 'none';
      if (moveBtn) moveBtn.style.display = 'none';
      if (copyStyleBtn) copyStyleBtn.style.display = 'none';
      showToast('📄 Marker duplicated. Click Save to confirm.');
      
      const originalBg = duplicateBtn.style.background;
      duplicateBtn.style.background = 'rgba(40,167,69,0.5)';
      setTimeout(() => duplicateBtn.style.background = originalBg, 500);
    });
  }

  if (copyStyleBtn) {
    copyStyleBtn.addEventListener('click', () => {
      const style = {
        size: sizeSelect.value,
        icon: iconSelect.value,
        color: colorSelect.value,
        anim: animCheck.checked
      };
      localStorage.setItem('debugMarkerStyle', JSON.stringify(style));
      showToast('🎨 Style copied! New markers will use this design.');
    });
  }

  async function loadGallery() {
    const gallery = document.getElementById('debug-marker-gallery');
    if (!gallery) return;
    
    const currentNodeId = virtualTour.getCurrentNode()?.id;
    if (!currentNodeId) return;
    
    const branch = currentNodeId.split('-')[0];
    
    // Only load if empty or if branch changed
    if (gallery.children.length > 0 && gallery.dataset.branch === branch) {
       Array.from(gallery.children).forEach(container => {
          const img = container.querySelector('img');
          if (img && img.src.endsWith(contentInput.value.replace('./', '/'))) {
             container.style.border = '2px solid var(--color-accent-blue)';
             container.style.background = 'rgba(45, 108, 223, 0.2)';
          } else {
             container.style.border = '2px solid transparent';
             container.style.background = 'rgba(0,0,0,0.1)';
          }
       });
       return;
    }
    
    gallery.dataset.branch = branch;
    gallery.innerHTML = '<div style="font-size: 11px; color: #aaa;">Loading...</div>';
    
    try {
      const response = await fetch(`/api/marker-images?branch=${branch}`);
      const data = await response.json();
      
      if (!data.images || data.images.length === 0) {
        gallery.innerHTML = '<div style="font-size: 11px; color: #aaa;">No images found for this branch.</div>';
        return;
      }
      
      gallery.innerHTML = '';
      data.images.forEach(imgData => {
        const fileName = imgData.originalUrl.split('/').pop();
        
        const container = document.createElement('div');
        container.style.display = 'flex';
        container.style.flexDirection = 'column';
        container.style.gap = '4px';
        container.style.cursor = 'pointer';
        container.style.border = '2px solid transparent';
        container.style.borderRadius = '6px';
        container.style.padding = '4px';
        container.style.background = 'rgba(0,0,0,0.1)';
        container.title = fileName;

        const imgWrapper = document.createElement('div');
        imgWrapper.style.position = 'relative';

        const img = document.createElement('img');
        img.src = imgData.thumbUrl;
        img.style.width = '100%';
        img.style.height = '120px';
        img.style.objectFit = 'cover';
        img.style.borderRadius = '4px';
        img.style.transition = 'transform 0.2s';
        
        const rotateBtn = document.createElement('button');
        rotateBtn.innerHTML = '↻';
        rotateBtn.title = 'Rotate Image 90°';
        rotateBtn.style.position = 'absolute';
        rotateBtn.style.top = '4px';
        rotateBtn.style.right = '4px';
        rotateBtn.style.background = 'rgba(0,0,0,0.6)';
        rotateBtn.style.color = 'white';
        rotateBtn.style.border = 'none';
        rotateBtn.style.borderRadius = '50%';
        rotateBtn.style.width = '24px';
        rotateBtn.style.height = '24px';
        rotateBtn.style.cursor = 'pointer';
        rotateBtn.style.display = 'flex';
        rotateBtn.style.alignItems = 'center';
        rotateBtn.style.justifyContent = 'center';
        rotateBtn.style.fontSize = '14px';
        rotateBtn.style.zIndex = '10';
        
        rotateBtn.addEventListener('click', async (e) => {
          e.stopPropagation();
          rotateBtn.disabled = true;
          rotateBtn.style.opacity = '0.5';
          try {
            const res = await fetch('/api/rotate-image', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                originalUrl: imgData.originalUrl,
                thumbUrl: imgData.thumbUrl,
                direction: 90
              })
            });
            if (res.ok) {
               const ts = Date.now();
               const originalSrc = imgData.thumbUrl.split('?')[0];
               imgData.thumbUrl = `${originalSrc}?t=${ts}`;
               imgData.originalUrl = `${imgData.originalUrl.split('?')[0]}?t=${ts}`;
               img.src = imgData.thumbUrl;
               
               if (contentInput.value && contentInput.value.split('?')[0] === originalSrc) {
                 contentInput.value = imgData.thumbUrl;
                 contentInput.setAttribute('data-original', imgData.originalUrl);
               }
               showToast('✅ Image rotated');
            } else {
               showToast('❌ Failed to rotate');
            }
          } catch(err) {
             console.error(err);
             showToast('❌ Error rotating');
          } finally {
             rotateBtn.disabled = false;
             rotateBtn.style.opacity = '1';
          }
        });

        imgWrapper.appendChild(img);
        imgWrapper.appendChild(rotateBtn);
        
        const label = document.createElement('div');
        label.textContent = fileName;
        label.style.fontSize = '11px';
        label.style.color = '#ccc';
        label.style.textAlign = 'center';
        label.style.wordBreak = 'break-word';
        label.style.lineHeight = '1.2';
        
        container.appendChild(imgWrapper);
        container.appendChild(label);
        
        if (imgData.thumbUrl.split('?')[0] === contentInput.value.split('?')[0] || imgData.originalUrl.split('?')[0] === contentInput.value.split('?')[0]) {
            container.style.border = '2px solid var(--color-accent-blue)';
            container.style.background = 'rgba(45, 108, 223, 0.2)';
        }
        
        container.addEventListener('click', () => {
          contentInput.value = imgData.thumbUrl;
          contentInput.setAttribute('data-original', imgData.originalUrl);
          showToast('✅ Image selected from gallery');
          
          // Highlight selection
          Array.from(gallery.children).forEach(c => {
             c.style.border = '2px solid transparent';
             c.style.background = 'rgba(0,0,0,0.1)';
          });
          container.style.border = '2px solid var(--color-accent-blue)';
          container.style.background = 'rgba(45, 108, 223, 0.2)';
        });
        
        gallery.appendChild(container);
      });
    } catch (err) {
      gallery.innerHTML = '<div style="font-size: 11px; color: #ff6b6b;">Error loading gallery</div>';
      console.error(err);
    }
  }

  typeSelect.addEventListener('change', () => {
    contentGroup.style.display = 'none';
    audioGroup.style.display = 'none';
    linkGroup.style.display = 'none';
    uploadGroup.style.display = 'none';
    const galleryContainer = document.getElementById('debug-marker-gallery-container');
    if (galleryContainer) galleryContainer.style.display = 'none';

    if (typeSelect.value === 'audio') {
      audioGroup.style.display = 'flex';
    } else if (typeSelect.value === 'link') {
      linkGroup.style.display = 'flex';
    } else if (typeSelect.value === 'image') {
      contentGroup.querySelector('label').textContent = 'Image URL (or select from gallery):';
      const rtToolbar = contentGroup.querySelector('.debug-rt-toolbar');
      if (rtToolbar) rtToolbar.style.display = 'none';
      contentGroup.style.display = 'flex';
      uploadGroup.style.display = 'flex';
      if (galleryContainer) galleryContainer.style.display = 'flex';
      loadGallery();
    } else {
      contentGroup.querySelector('label').textContent = 'Content (HTML):';
      const rtToolbar = contentGroup.querySelector('.debug-rt-toolbar');
      if (rtToolbar) rtToolbar.style.display = 'flex';
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
    
    saveBtn.disabled = true;
    try {
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
        markerConfig.html = `<custom-marker ${customMarkerProps}>\n        <h2>${title}</h2>\n        <p>${contentInput.value.trim()}</p>\n      </custom-marker>`;
        markerConfig.data.content = contentInput.value.trim();
      } else if (type === 'audio') {
        markerConfig.html = `<custom-marker ${customMarkerProps}>\n        <h2>${title}</h2>\n        <p>🔊 Audio Narration</p>\n      </custom-marker>`;
        markerConfig.data.audioSrc = audioInput.value.trim();
      } else if (type === 'image') {
        const originalUrl = contentInput.getAttribute('data-original') || contentInput.value.trim().replace('/thumbs/', '/');
        markerConfig.html = `<custom-marker ${customMarkerProps} data-url="${originalUrl}">\n        <img src="${contentInput.value.trim()}" alt="${title}" style="cursor:pointer;" />\n        <h2>${title}</h2>\n        <p style="font-size: 11px; opacity:0.7;">🔍 Click to enlarge</p>\n      </custom-marker>`;
        markerConfig.data.imageSrc = contentInput.value.trim();
        markerConfig.data.originalUrl = originalUrl;
        markerConfig.data.caption = title;
      } else if (type === 'link') {
        markerConfig.html = `<custom-marker ${customMarkerProps} data-url="${linkInput.value.trim()}">\n        <h2>${title}</h2>\n        <p>🔗 Click to open link</p>\n      </custom-marker>`;
        markerConfig.data.url = linkInput.value.trim();
      }

      // 1. Save to disk via dev server FIRST
      const response = await fetch('/api/save-marker', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          sourceId: currentNodeId, 
          markerConfig,
          markerId: editingMarkerId || id,
          action: isEditing ? 'edit' : 'add'
        })
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to save');
      }
    } catch (err) {
      showToast(`❌ Error saving marker: ${err.message}`);
    } finally {
      saveBtn.disabled = false;
    }
  });

  if (deleteBtn) {
    deleteBtn.addEventListener('click', async () => {
      if (!isEditing || !editingMarkerId) return;
      const currentNodeId = virtualTour.getCurrentNode()?.id;
      if (!currentNodeId) return;

      const confirmDelete = confirm('Are you sure you want to delete this marker?');
      if (!confirmDelete) return;

      const node = allNodes.find(n => n.id === currentNodeId);
      const markerToDelete = node?.markers?.find(m => m.id === editingMarkerId);

      // 1. Delete from disk FIRST
      try {
        const response = await fetch('/api/save-marker', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 
            sourceId: currentNodeId, 
            markerId: editingMarkerId,
            action: 'delete',
            imageSrc: markerToDelete?.data?.imageSrc,
            originalUrl: markerToDelete?.data?.originalUrl
          })
        });
        if (!response.ok) throw new Error('Failed to delete');
      } catch (err) {
        showToast(`❌ Error deleting marker: ${err.message}`);
        return; // Don't update UI if delete failed
      }

      // 2. Remove from PSV (only after successful API call)
      if (markersPlugin) {
        markersPlugin.removeMarker(editingMarkerId);
      }

      // 3. Remove from allNodes memory
      if (node && node.markers) {
        node.markers = node.markers.filter(m => m.id !== editingMarkerId);
      }

      showToast(`🗑️ Marker deleted: ${editingMarkerId}`);
      closeModal();
      window.dispatchEvent(new CustomEvent('debug-markers-updated'));
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
      
      const currentNodeId = virtualTour.getCurrentNode()?.id;
      if (!currentNodeId) return showToast('❌ Error: No current scene selected.');
      
      uploadBtn.disabled = true;
      
      const reader = new FileReader();
      reader.onload = (e) => {
        const originalBase64 = e.target.result;
        
        // Generate Thumbnail using Canvas
        const img = new Image();
        img.onload = async () => {
            try {
                uploadBtn.textContent = 'Uploading...';
                
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                
                const targetWidth = 400;
                const scale = targetWidth / img.width;
                const targetHeight = Math.round(img.height * scale);
                
                canvas.width = targetWidth;
                canvas.height = targetHeight;
                ctx.imageSmoothingEnabled = true;
                ctx.imageSmoothingQuality = 'high';
                ctx.drawImage(img, 0, 0, targetWidth, targetHeight);
                const thumbBase64 = canvas.toDataURL('image/jpeg', 0.85);

                const response = await fetch('/api/upload-image', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ 
                        sourceId: currentNodeId,
                        filename: file.name, 
                        image: originalBase64,
                        thumb: thumbBase64
                    })
                });
                const result = await response.json();
                if (response.ok) {
                    contentInput.value = result.thumbUrl; 
                    showToast('✅ Image and thumbnail uploaded');
                    contentInput.setAttribute('data-original', result.originalUrl);
                } else {
                    throw new Error(result.error);
                }
            } catch (err) {
                showToast('❌ Upload failed: ' + err.message);
            } finally {
                uploadBtn.textContent = 'Upload';
                uploadBtn.disabled = false;
            }
        };
        img.src = originalBase64;
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
