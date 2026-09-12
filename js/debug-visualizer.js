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
          pointer-events: none;
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
}
