export function initMarkerList(viewer, virtualTour, allNodes, isDebug) {
  if (!isDebug) return;

  const btn = document.getElementById('debug-marker-list-btn');
  const panel = document.getElementById('debug-marker-list-panel');
  const closeBtn = document.getElementById('debug-marker-list-close');
  const content = document.getElementById('debug-marker-list-content');

  if (!btn || !panel) return;

  // Toggle Panel
  btn.addEventListener('click', () => {
    const isVisible = panel.style.display === 'flex';
    panel.style.display = isVisible ? 'none' : 'flex';
    if (!isVisible) refreshList();
  });

  closeBtn.addEventListener('click', () => {
    panel.style.display = 'none';
  });

  function refreshList() {
    if (panel.style.display === 'none') return;

    const currentNodeId = virtualTour.getCurrentNode()?.id;
    if (!currentNodeId) return;

    const node = allNodes.find(n => n.id === currentNodeId);
    if (!node || !node.markers) {
      content.innerHTML = '<div style="padding:10px; color:#888;">No markers found.</div>';
      return;
    }

    content.innerHTML = '';

    node.markers.forEach(markerConfig => {
      const type = markerConfig.data?.type || 'unknown';
      const title = markerConfig.tooltip?.content || markerConfig.tooltip || markerConfig.id;

      const div = document.createElement('div');
      div.className = 'marker-list-item';
      
      div.innerHTML = `
        <div style="flex:1; min-width:0; padding-right:10px; cursor:pointer;" class="marker-list-info">
          <strong title="${title}">${title}</strong>
          <br />
          <small>${type}</small>
        </div>
        <button class="marker-list-del-btn" title="Delete Marker" style="background:none; border:none; color:#dc3545; cursor:pointer; font-size:16px; padding:4px; margin-left:8px;">🗑️</button>
      `;

      const infoDiv = div.querySelector('.marker-list-info');
      infoDiv.addEventListener('click', () => {
        // Animate camera to marker
        viewer.animate({
          yaw: markerConfig.position.yaw,
          pitch: markerConfig.position.pitch,
          speed: '2rpm'
        }).then(() => {
          // Open edit modal by triggering PSV marker selection
          const markersPlugin = viewer.getPlugin('markers');
          if (markersPlugin) {
             const m = markersPlugin.getMarker(markerConfig.id);
             if (m) markersPlugin.trigger('select-marker', { marker: m });
          }
        });
      });

      const delBtn = div.querySelector('.marker-list-del-btn');
      delBtn.addEventListener('click', async (e) => {
        e.stopPropagation();
        
        if (!confirm('Are you sure you want to delete this marker?')) return;
        
        const markersPlugin = viewer.getPlugin('markers');
        if (markersPlugin) {
          try {
            markersPlugin.removeMarker(markerConfig.id);
          } catch(err) { console.warn('Marker not found in PSV', err); }
        }
        
        if (node && node.markers) {
          node.markers = node.markers.filter(m => m.id !== markerConfig.id);
        }
        
        refreshList();
        window.dispatchEvent(new CustomEvent('debug-markers-updated'));
        
        try {
          const response = await fetch('/api/save-marker', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
              sourceId: currentNodeId, 
              markerId: markerConfig.id,
              action: 'delete',
              imageSrc: markerConfig.data?.imageSrc,
              originalUrl: markerConfig.data?.originalUrl
            })
          });
          if (!response.ok) throw new Error('Failed to delete via API');
        } catch (err) {
          console.error('Error deleting marker:', err);
          alert('Error deleting marker: ' + err.message);
        }
      });

      content.appendChild(div);
    });

    if (node.markers.length === 0) {
      content.innerHTML = '<div style="padding:10px; color:#888;">No markers found.</div>';
    }
  }

  // Refresh when node changes
  virtualTour.addEventListener('node-changed', refreshList);

  // Refresh when marker list gets an event from marker-placer
  window.addEventListener('debug-markers-updated', refreshList);
}
