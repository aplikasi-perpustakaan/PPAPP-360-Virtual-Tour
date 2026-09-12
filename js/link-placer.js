/* ===================================================================
   Link Placer – Debug tool for visually placing navigation links
   ===================================================================
   Visible only in debug mode (?debug=true). Click the "Add Link" button
   to place a bidirectional navigation link at the current crosshair
   position. A modal lets you pick the destination scene. The link is
   injected at runtime and a copy-paste code snippet is printed to the
   browser console.
   =================================================================== */


/**
 * Initialises the debug link-placer UI and wires up all event handlers.
 *
 * @param {Object}  viewer       - The PSV Viewer instance.
 * @param {Object}  virtualTour  - The VirtualTourPlugin instance.
 * @param {Array}   allNodes     - The full in-memory nodes array (mutable).
 * @param {boolean} isDebug      - Whether debug mode is active.
 */
export function initLinkPlacer(viewer, virtualTour, allNodes, isDebug) {
  if (!isDebug) return;                    // Gate: nothing to do in production

  // ── DOM References ────────────────────────────────────────────────
  const btn           = document.getElementById('debug-add-link-btn');
  const modal         = document.getElementById('debug-link-modal');
  const searchInput   = document.getElementById('debug-link-search');
  const sceneList     = document.getElementById('debug-link-scene-list');
  const cancelBtn     = document.getElementById('debug-link-cancel');
  const toast         = document.getElementById('debug-toast');

  if (!btn || !modal) return;              // Safety: HTML elements missing

  // ── Show the button (CSS hides it unless body.is-debug) ───────────
  // The CSS rule `body.is-debug .debug-add-link-btn` handles visibility,
  // so we only need to wire up the click.

  let capturedYawDeg  = 0;
  let capturedPitchDeg = 0;

  // ── Button click: capture position & open modal ───────────────────
  btn.addEventListener('click', () => {
    const position = viewer.getPosition();
    capturedYawDeg   = parseFloat((position.yaw   * 180 / Math.PI).toFixed(2));
    capturedPitchDeg = parseFloat((position.pitch * 180 / Math.PI).toFixed(2));

    // Normalise yaw to 0-360 range
    capturedYawDeg = ((capturedYawDeg % 360) + 360) % 360;

    populateSceneList('');
    searchInput.value = '';
    modal.classList.add('is-visible');
    searchInput.focus();
  });

  // ── Populate the scene list grouped by section ─────────────────────
  function populateSceneList(filter) {
    const currentNodeId = virtualTour.getCurrentNode()?.id;
    const currentNode   = allNodes.find(n => n.id === currentNodeId);
    const existingLinks = (currentNode?.links || []).map(l => l.nodeId);
    const lowerFilter   = filter.toLowerCase();
    const currentSection = extractSection(currentNodeId);

    sceneList.innerHTML = '';

    // Group nodes by section, e.g. 'jw-f1-lobby-3' → section 'f1-lobby'
    const grouped = new Map();

    allNodes.forEach(node => {
      if (node.id === currentNodeId) return;            // Skip self

      // Apply text filter
      const matchesId   = node.id.toLowerCase().includes(lowerFilter);
      const matchesName = (node.name || '').toLowerCase().includes(lowerFilter);
      if (lowerFilter && !matchesId && !matchesName) return;

      const section = extractSection(node.id);
      if (!grouped.has(section)) grouped.set(section, []);
      grouped.get(section).push(node);
    });

    // Sort sections: current section first, then alphabetical
    const sortedSections = [...grouped.keys()].sort((a, b) => {
      if (a === currentSection) return -1;
      if (b === currentSection) return 1;
      return a.localeCompare(b);
    });

    // Render grouped list with section headers
    sortedSections.forEach(section => {
      const header = document.createElement('li');
      header.classList.add('debug-section-header');
      header.textContent = section + (section === currentSection ? ' (current)' : '');
      sceneList.appendChild(header);

      grouped.get(section).forEach(node => {
        const li = document.createElement('li');
        li.dataset.nodeId = node.id;

        const alreadyLinked = existingLinks.includes(node.id);

        li.innerHTML = `
          <span class="debug-scene-id">${node.id}</span>
          <span class="debug-scene-name">${node.name || ''}</span>
          ${alreadyLinked
            ? '<span class="debug-scene-badge">⟳ update</span><button class="debug-link-delete-btn" title="Delete this link">🗑️</button>'
            : ''}
        `;

        li.addEventListener('click', () => onSelectDestination(node, alreadyLinked));

        // Wire up the delete button (if present) with stopPropagation
        if (alreadyLinked) {
          const delBtn = li.querySelector('.debug-link-delete-btn');
          delBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            onDeleteLink(node);
          });
        }

        sceneList.appendChild(li);
      });
    });

    if (sceneList.children.length === 0) {
      const empty = document.createElement('li');
      empty.classList.add('debug-scene-empty');
      empty.textContent = 'No matching scenes';
      sceneList.appendChild(empty);
    }
  }

  // ── Extract the section from a scene ID ────────────────────────────
  // e.g. 'jw-f1-lobby-3' → 'f1-lobby', 'jw-ext-outside-7' → 'ext-outside'
  // Convention: {branch}-{section}-{number}, where section may contain hyphens
  function extractSection(sceneId) {
    if (!sceneId) return 'unknown';
    const parts = sceneId.split('-');
    // First part is the branch code; last part is the number
    // Section is everything in between
    if (parts.length <= 2) return 'other';
    return parts.slice(1, -1).join('-');
  }

  // ── Filter on typing ──────────────────────────────────────────────
  searchInput.addEventListener('input', () => {
    populateSceneList(searchInput.value);
  });

  // ── Cancel / close modal ──────────────────────────────────────────
  cancelBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    // Close when clicking the backdrop (not the panel itself)
    if (e.target === modal) closeModal();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-visible')) {
      closeModal();
    }
  });

  function closeModal() {
    modal.classList.remove('is-visible');
  }

  // ── Core: handle destination selection ─────────────────────────────
  function onSelectDestination(destNode, isUpdate) {
    const currentNodeId = virtualTour.getCurrentNode()?.id;
    const currentNode   = allNodes.find(n => n.id === currentNodeId);
    if (!currentNode || !destNode) return;

    // Forward link position: captured from crosshair
    const forwardYaw   = capturedYawDeg.toFixed(2) + 'deg';
    const forwardPitch = capturedPitchDeg.toFixed(2) + 'deg';

    // Reverse link position: 180° offset yaw, default -10deg pitch
    const reverseYawDeg = ((capturedYawDeg + 180) % 360).toFixed(2);
    const reverseYaw    = reverseYawDeg + 'deg';
    const reversePitch  = '-10deg';

    // -- Forward link (A → B) -------------------------------------------
    upsertLink(currentNode, destNode.id, forwardYaw, forwardPitch, destNode.name);

    // -- Reverse link (B → A) -------------------------------------------
    upsertLink(destNode, currentNodeId, reverseYaw, reversePitch, currentNode.name);

    // -- Force the viewer to re-render links for the current scene ------
    // The VirtualTourPlugin keeps its own internal copy of the nodes,
    // so we must reload ALL nodes via setNodes() after mutating allNodes.
    virtualTour.setNodes(allNodes, currentNodeId);

    // -- Console output -------------------------------------------------
    printSnippet(currentNodeId, destNode.id, forwardYaw, forwardPitch, destNode.name, isUpdate);
    printSnippet(destNode.id, currentNodeId, reverseYaw, reversePitch, currentNode.name, isUpdate);

    // -- Toast ----------------------------------------------------------
    const verb = isUpdate ? 'Updated' : 'Added';
    showToast(`✅ ${verb} link: ${currentNodeId} ↔ ${destNode.id}`);

    closeModal();
  }

  // ── Core: handle link deletion ──────────────────────────────────────
  function onDeleteLink(destNode) {
    const currentNodeId = virtualTour.getCurrentNode()?.id;
    const currentNode   = allNodes.find(n => n.id === currentNodeId);
    if (!currentNode || !destNode) return;

    // Remove forward link (A → B)
    removeLink(currentNode, destNode.id);

    // Remove reverse link (B → A)
    removeLink(destNode, currentNodeId);

    // Reload nodes into the plugin
    virtualTour.setNodes(allNodes, currentNodeId);

    // Console output
    printDeleteSnippet(currentNodeId, destNode.id);
    printDeleteSnippet(destNode.id, currentNodeId);

    showToast(`🗑️ Deleted link: ${currentNodeId} ↔ ${destNode.id}`);

    // Refresh the modal list so the badge/button disappear
    populateSceneList(searchInput.value);
  }

  // ── Remove a link from a node's links array ────────────────────────
  function removeLink(sourceNode, targetId) {
    if (!sourceNode.links) return;
    sourceNode.links = sourceNode.links.filter(l => l.nodeId !== targetId);
  }

  // ── Print deletion info to the console ─────────────────────────────
  function printDeleteSnippet(sourceId, targetId) {
    console.log(
      `%c🗑️ REMOVE from scene: ${sourceId}`,
      'color: #E05252; font-weight: bold; font-size: 13px;'
    );
    console.log(`      Delete link to: '${targetId}'`);
  }

  // ── Upsert: create or update a link in a node's links array ────────
  function upsertLink(sourceNode, targetId, yaw, pitch, targetName) {
    if (!sourceNode.links) sourceNode.links = [];

    const existing = sourceNode.links.find(l => l.nodeId === targetId);

    if (existing) {
      // Update in place
      existing.position = { yaw, pitch };
      existing.name = buildLinkName(targetName);
    } else {
      // Create new
      sourceNode.links.push({
        nodeId: targetId,
        position: { yaw, pitch },
        name: buildLinkName(targetName),
      });
    }
  }

  // ── Build a human-readable link tooltip ────────────────────────────
  function buildLinkName(sceneName) {
    if (!sceneName) return '';
    // Strip the floor prefix if present, e.g. "Floor 1 – Lobby 2" → "Lobby 2"
    const parts = sceneName.split('–').map(s => s.trim());
    const shortName = parts.length > 1 ? parts.slice(1).join(' – ') : parts[0];
    return `Go to ${shortName}`;
  }

  // ── Print a copy-paste-ready code snippet to the console ──────────
  function printSnippet(sourceId, targetId, yaw, pitch, targetName, isUpdate) {
    const verb = isUpdate ? '✏️  UPDATE in' : '➕ ADD to';
    const linkName = buildLinkName(targetName);
    console.log(
      `%c${verb} scene: ${sourceId}`,
      'color: #2D6CDF; font-weight: bold; font-size: 13px;'
    );
    console.log(
      `      {\n` +
      `        nodeId: '${targetId}',\n` +
      `        position: { yaw: '${yaw}', pitch: '${pitch}' },\n` +
      `        name: '${linkName}',\n` +
      `      },`
    );
  }

  // ── Toast notification ─────────────────────────────────────────────
  function showToast(message) {
    toast.textContent = message;
    toast.classList.add('is-visible');
    setTimeout(() => toast.classList.remove('is-visible'), 3000);
  }
}
