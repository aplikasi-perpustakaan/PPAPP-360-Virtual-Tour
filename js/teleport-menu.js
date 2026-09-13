export function initTeleportMenu(viewer, virtualTour, allNodes, isDebug) {
  if (!isDebug) return;

  const modal = document.getElementById('debug-teleport-modal');
  const searchInput = document.getElementById('debug-teleport-search');
  const list = document.getElementById('debug-teleport-list');

  if (!modal || !searchInput || !list) return;

  function openModal() {
    modal.classList.add('is-visible');
    searchInput.value = '';
    renderList('');
    setTimeout(() => searchInput.focus(), 50);
  }

  function closeModal() {
    modal.classList.remove('is-visible');
  }

  window.addEventListener('keydown', (e) => {
    // Ctrl+K or Cmd+K
    if ((e.ctrlKey || e.metaKey) && (e.key === 'k' || e.key === 'K')) {
      e.preventDefault();
      if (modal.classList.contains('is-visible')) {
        closeModal();
      } else {
        openModal();
      }
    }
    if (e.key === 'Escape' && modal.classList.contains('is-visible')) {
      closeModal();
    }
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  searchInput.addEventListener('input', (e) => {
    renderList(e.target.value.toLowerCase());
  });

  function renderList(query) {
    list.innerHTML = '';
    const filtered = allNodes.filter(n => {
      if (!query) return true;
      return n.id.toLowerCase().includes(query) || (n.name && n.name.toLowerCase().includes(query));
    });

    if (filtered.length === 0) {
      list.innerHTML = '<li class="debug-scene-empty">No scenes found</li>';
      return;
    }

    // Optional: Group by branch or just list them all.
    // For simplicity, list them all up to a reasonable limit
    const limit = 50;
    filtered.slice(0, limit).forEach(n => {
      const li = document.createElement('li');
      
      const idSpan = document.createElement('span');
      idSpan.className = 'debug-scene-id';
      idSpan.textContent = n.id;
      
      const nameSpan = document.createElement('span');
      nameSpan.className = 'debug-scene-name';
      nameSpan.textContent = n.name || '';
      
      li.appendChild(idSpan);
      li.appendChild(nameSpan);

      li.addEventListener('click', () => {
        virtualTour.setCurrentNode(n.id).catch(err => console.warn('Teleport error:', err));
        closeModal();
      });

      list.appendChild(li);
    });
  }
}
