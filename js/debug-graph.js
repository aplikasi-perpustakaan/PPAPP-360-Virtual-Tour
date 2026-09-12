export function initDebugGraph(viewer, virtualTour, allNodes, isDebug) {
  if (!isDebug) return;

  const panel = document.getElementById('debug-graph-minimap');
  const canvas = document.getElementById('debug-graph-canvas');
  const closeBtn = document.getElementById('debug-graph-close');

  if (!panel || !canvas) return;

  const ctx = canvas.getContext('2d');
  let animationId = null;
  let isRunning = false;
  let currentNodeId = null;

  // Graph state
  let nodes = [];
  let edges = [];

  // Toggle Minimap Panel with 'M'
  window.addEventListener('keydown', (e) => {
    if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') return;
    if (e.key === 'm' || e.key === 'M') {
      const isVisible = panel.style.display === 'flex';
      if (isVisible) {
        closeMinimap();
      } else {
        openMinimap();
      }
    }
  });

  closeBtn.addEventListener('click', closeMinimap);

  virtualTour.addEventListener('node-changed', () => {
    currentNodeId = virtualTour.getCurrentNode()?.id;
  });

  function openMinimap() {
    panel.style.display = 'flex';
    currentNodeId = virtualTour.getCurrentNode()?.id;
    buildGraph();
    isRunning = true;
    loop();
  }

  function closeMinimap() {
    panel.style.display = 'none';
    isRunning = false;
    if (animationId) cancelAnimationFrame(animationId);
  }

  function buildGraph() {
    nodes = allNodes.map(n => ({
      id: n.id,
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: 0,
      vy: 0
    }));

    edges = [];
    allNodes.forEach(n => {
      if (!n.links) return;
      n.links.forEach(l => {
        // avoid duplicate edges (undirected graph for visualization)
        const sourceId = n.id;
        const targetId = l.nodeId;
        const existing = edges.find(e => 
          (e.source.id === sourceId && e.target.id === targetId) ||
          (e.source.id === targetId && e.target.id === sourceId)
        );
        if (!existing) {
          const sourceNode = nodes.find(node => node.id === sourceId);
          const targetNode = nodes.find(node => node.id === targetId);
          if (sourceNode && targetNode) {
            edges.push({ source: sourceNode, target: targetNode });
          }
        }
      });
    });
  }

  function loop() {
    if (!isRunning) return;

    // Physics step
    const k = 0.5; // Spring constant
    const repulsion = 1000; // Repulsion constant
    const damping = 0.8;
    const centerGravity = 0.05;

    // Repulsion
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const n1 = nodes[i];
        const n2 = nodes[j];
        const dx = n1.x - n2.x;
        const dy = n1.y - n2.y;
        let distSq = dx * dx + dy * dy;
        if (distSq === 0) distSq = 0.1;
        
        const force = repulsion / distSq;
        const dist = Math.sqrt(distSq);
        const fx = force * (dx / dist);
        const fy = force * (dy / dist);

        n1.vx += fx;
        n1.vy += fy;
        n2.vx -= fx;
        n2.vy -= fy;
      }
    }

    // Attraction (Springs)
    edges.forEach(edge => {
      const dx = edge.target.x - edge.source.x;
      const dy = edge.target.y - edge.source.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const targetDist = 50; // Rest length
      
      const force = (dist - targetDist) * k;
      const fx = force * (dx / dist);
      const fy = force * (dy / dist);

      edge.source.vx += fx;
      edge.source.vy += fy;
      edge.target.vx -= fx;
      edge.target.vy -= fy;
    });

    // Center gravity & update positions
    nodes.forEach(n => {
      // Pull towards center
      const dx = (canvas.width / 2) - n.x;
      const dy = (canvas.height / 2) - n.y;
      n.vx += dx * centerGravity;
      n.vy += dy * centerGravity;

      n.vx *= damping;
      n.vy *= damping;
      n.x += n.vx;
      n.y += n.vy;
    });

    // Render step
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw edges
    ctx.strokeStyle = 'rgba(136, 146, 160, 0.4)';
    ctx.lineWidth = 1;
    edges.forEach(edge => {
      ctx.beginPath();
      ctx.moveTo(edge.source.x, edge.source.y);
      ctx.lineTo(edge.target.x, edge.target.y);
      ctx.stroke();
    });

    // Draw nodes
    nodes.forEach(n => {
      const isCurrent = n.id === currentNodeId;
      ctx.fillStyle = isCurrent ? '#2D6CDF' : '#8892A0';
      
      ctx.beginPath();
      ctx.arc(n.x, n.y, isCurrent ? 6 : 4, 0, Math.PI * 2);
      ctx.fill();

      // Label current node or hover (we just label current for simplicity)
      if (isCurrent) {
        ctx.fillStyle = '#E8ECF1';
        ctx.font = '10px Consolas';
        ctx.fillText(n.id, n.x + 8, n.y + 4);
      }
    });

    animationId = requestAnimationFrame(loop);
  }
}
