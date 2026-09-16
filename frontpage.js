import { branches } from './js/tour-config.js';

async function initFrontpage() {
  const branchesGrid = document.getElementById('branches-grid');
  const featuredBranch = document.getElementById('featured-branch');
  let allScenes = [];

  // Load all branch data
  for (const branch of branches) {
    try {
      const module = await import(`./locations/${branch.id}/${branch.id}-index.js`);
      const scenes = module.default;
      allScenes = allScenes.concat(scenes);
      
      // Find start node
      const startNode = scenes.find(s => s.id === branch.startNode) || scenes[0];
      branch._thumbnail = startNode.thumbnail || './images/shared/placeholder.jpg';
      
      // Build card
      const card = document.createElement('a');
      card.href = `./${branch.id}.html`;
      
      // No special featured branch layout, everything goes in the grid
        card.className = 'branch-card';
        card.innerHTML = `
          <div class="card-image-container">
            <img src="${startNode.thumbnail || './images/shared/placeholder.jpg'}" alt="${branch.name}" loading="lazy" onerror="this.src='./images/shared/placeholder.jpg'">
            <div class="card-overlay">
              <span class="take-tour-text">TAKE A TOUR</span>
              <span class="branch-name">${branch.name}</span>
            </div>
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

      const matches = branches.filter(branch => {
        const nameMatch = branch.name?.toLowerCase().includes(query);
        const addressMatch = branch.address?.toLowerCase().includes(query);
        return nameMatch || addressMatch;
      });

      if (matches.length > 0) {
        searchResults.innerHTML = matches.map(branch => `
          <a href="./${branch.id}.html" class="search-result-item">
            <img src="${branch._thumbnail || './images/shared/placeholder.jpg'}" alt="" onerror="this.src='./images/shared/placeholder.jpg'">
            <div>
              <h4>${branch.name}</h4>
              <small>${branch.address || ''}</small>
            </div>
          </a>
        `).join('');
        searchResults.classList.remove('is-hidden');
      } else {
        searchResults.innerHTML = `<div class="search-no-results">No branches found matching "${query}".</div>`;
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
