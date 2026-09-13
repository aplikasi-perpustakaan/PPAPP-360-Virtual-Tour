import { branches } from './js/tour-config.js';

async function initFrontpage() {
  const branchesGrid = document.getElementById('branches-grid');
  let allScenes = [];

  // Load all branch data
  for (const branch of branches) {
    try {
      const module = await import(`./locations/${branch.id}/${branch.id}-index.js`);
      const scenes = module.default;
      allScenes = allScenes.concat(scenes);
      
      // Find start node
      const startNode = scenes.find(s => s.id === branch.startNode) || scenes[0];
      
      // Build card
      const card = document.createElement('a');
      card.href = `./tour.html?scene=${startNode.id}`;
      card.className = 'branch-card glass-panel';
      card.innerHTML = `
        <div class="card-image-container">
          <img src="${startNode.thumbnail || './images/shared/placeholder.jpg'}" alt="${branch.name}" loading="lazy" onerror="this.src='./images/shared/placeholder.jpg'">
        </div>
        <div class="card-content">
          <h3>${branch.name}</h3>
          <p>${scenes.length} Scenes</p>
        </div>
      `;
      branchesGrid.appendChild(card);
    } catch (e) {
      console.error(`Failed to load branch ${branch.id}:`, e);
    }
  }

  // Initialize search
  const searchInput = document.getElementById('scene-search');
  const searchResults = document.getElementById('search-results');

  if (searchInput && searchResults) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      if (!query) {
        searchResults.classList.add('is-hidden');
        return;
      }

      const matches = allScenes.filter(scene => {
        const nameMatch = scene.name?.toLowerCase().includes(query);
        const tagMatch = scene.data?.tags?.some(tag => tag.toLowerCase().includes(query));
        const branchMatch = scene.caption?.toLowerCase().includes(query);
        return nameMatch || tagMatch || branchMatch;
      }).slice(0, 10); // Top 10 results

      if (matches.length > 0) {
        searchResults.innerHTML = matches.map(scene => `
          <a href="./tour.html?scene=${scene.id}" class="search-result-item">
            <img src="${scene.thumbnail || './images/shared/placeholder.jpg'}" alt="" onerror="this.src='./images/shared/placeholder.jpg'">
            <div>
              <h4>${scene.name}</h4>
              <small>${scene.caption}</small>
            </div>
          </a>
        `).join('');
        searchResults.classList.remove('is-hidden');
      } else {
        searchResults.innerHTML = `<div class="search-no-results">No locations found matching "${query}".</div>`;
        searchResults.classList.remove('is-hidden');
      }
    });

    // Hide search results when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.search-container')) {
        searchResults.classList.add('is-hidden');
      }
    });
  }
}

// Wait for DOM to load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initFrontpage);
} else {
  initFrontpage();
}
