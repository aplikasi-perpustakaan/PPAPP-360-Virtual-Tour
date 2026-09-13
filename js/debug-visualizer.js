export function initDebugVisualizer(viewer, virtualTour, allNodes, isDebug) {
  if (!isDebug) return;

  const markersPlugin = viewer.getPlugin('markers');
  if (!markersPlugin) return;

  let currentDebugMarkers = [];

  virtualTour.addEventListener('node-changed', ({ node }) => {
    // Clean up previous debug markers
    currentDebugMarkers.forEach(id => {
      markersPlugin.removeMarker(id);
    });
    currentDebugMarkers = [];

    // The node provided by the event is the PSV node, which might not have the full raw links
    const rawNode = allNodes.find(n => n.id === node.id);
    if (!rawNode || !rawNode.links) return;

    // Add a text marker for each link
    rawNode.links.forEach((link, idx) => {
      const markerId = `debug-link-visualizer-${idx}`;
      currentDebugMarkers.push(markerId);

      // Simple HTML overlay for the link
      const html = `
        <div style="
          background: rgba(45, 108, 223, 0.85);
          color: white;
          padding: 2px 6px;
          border-radius: 4px;
          font-family: Consolas, monospace;
          font-size: 11px;
          border: 1px solid white;
          pointer-events: auto;
          cursor: pointer;
          white-space: nowrap;
          transform: translateY(-40px); /* Push it above the 3D arrow */
        ">
          ${link.nodeId}<br>
          ${link.position.yaw}, ${link.position.pitch}
        </div>
      `;

      markersPlugin.addMarker({
        id: markerId,
        position: link.position,
        html: html,
        size: { width: 0, height: 0 },
        anchor: 'bottom center',
        tooltip: 'Debug Link Info'
      });
    });
  });

  markersPlugin.addEventListener('select-marker', ({ marker }) => {
    if (marker.id.startsWith('debug-link-visualizer-')) {
      const idx = parseInt(marker.id.replace('debug-link-visualizer-', ''), 10);
      const rawNode = allNodes.find(n => n.id === virtualTour.getCurrentNode()?.id);
      if (rawNode && rawNode.links && rawNode.links[idx]) {
        const link = rawNode.links[idx];
        const newYaw = prompt(`Edit yaw for link to ${link.nodeId}`, link.position.yaw);
        if (newYaw === null) return;
        const newPitch = prompt(`Edit pitch for link to ${link.nodeId}`, link.position.pitch);
        if (newPitch === null) return;
        
        link.position.yaw = newYaw;
        link.position.pitch = newPitch;
        
        fetch('/api/save-link', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            sourceId: rawNode.id,
            targetId: link.nodeId,
            yaw: newYaw,
            pitch: newPitch
          })
        }).then(res => {
          if (res.ok) {
            // Very hacky visual update, normally requires a full refresh
            const toast = document.getElementById('debug-toast');
            if (toast) {
              toast.textContent = '✅ Link updated. Refresh to apply changes.';
              toast.classList.add('is-visible');
              setTimeout(() => toast.classList.remove('is-visible'), 3000);
            }
          }
        });
      }
    }
  });
}
