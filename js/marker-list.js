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
        <div style="flex:1; min-width:0; padding-right:10px;">
          <strong title="${title}">${title}</strong>
          <br />
          <small>${type}</small>
        </div>
      `;

      div.addEventListener('click', () => {
        // Animate camera to marker
        const pitch = parseFloat(markerConfig.position.pitch);
        const yaw = parseFloat(markerConfig.position.yaw);
        viewer.animate({
          yaw: yaw,
          pitch: pitch,
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

      content.appendChild(div);
    });

    if (node.markers.length === 0) {
      content.innerHTML = '<div style="padding:10px; color:#888;">No markers found.</div>';
    }
  }

  // Refresh when node changes
  virtualTour.addEventListener('node-changed', refreshList);

  // Expose refresh so marker-placer can call it after adding/editing/deleting
  window.debugMarkerListRefresh = refreshList;
}
