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
      
      // Collect up to 6 unique thumbnails for the slideshow
      const uniqueThumbs = new Set();
      if (startNode.thumbnail) uniqueThumbs.add(startNode.thumbnail);
      for (const scene of scenes) {
        if (scene.thumbnail && !scene.thumbnail.includes('placeholder.jpg')) {
          uniqueThumbs.add(scene.thumbnail);
        }
        if (uniqueThumbs.size >= 6) break;
      }
      const thumbArray = Array.from(uniqueThumbs);
      if (thumbArray.length === 0) thumbArray.push('./images/shared/placeholder.jpg');
      
      const branchThumb = thumbArray[0];
      const thumbsJson = JSON.stringify(thumbArray).replace(/"/g, '&quot;');
      
      // Build card
      const card = document.createElement('a');
      card.href = `./${branch.id}.html`;
      
      card.className = 'branch-card';
      card.innerHTML = `
        <div class="card-image-container" style="background-color: #111;">
          <img class="slideshow-img slideshow-img-1" style="position: absolute; inset: 0; opacity: 1; transition: opacity 1.2s ease-in-out, transform 0.6s ease;" data-thumbs="${thumbsJson}" data-index="0" src="${branchThumb}" alt="${branch.name}" loading="lazy" onerror="this.src='./images/shared/placeholder.jpg'">
          <img class="slideshow-img slideshow-img-2" style="position: absolute; inset: 0; opacity: 0; transition: opacity 1.2s ease-in-out, transform 0.6s ease;" src="" alt="" loading="lazy">
          <div class="card-overlay" style="z-index: 10;">
            <div class="text-bar">
              <span class="take-tour-text">TAKE A TOUR</span>
              <span class="branch-name">${branch.name}</span>
            </div>
          </div>
        </div>
      `;
      branchesGrid.appendChild(card);
    } catch (e) {
      console.error(`Failed to load branch ${branch.id}:`, e);
    }
  }

  // Track slideshow intervals for potential cleanup
  const slideshowIntervals = [];

  // Initialize Slideshows
  const branchCards = document.querySelectorAll('.branch-card');
  branchCards.forEach((card, cardIndex) => {
    const img1 = card.querySelector('.slideshow-img-1');
    const img2 = card.querySelector('.slideshow-img-2');
    if (!img1 || !img2) return;
    
    try {
      const thumbsStr = img1.getAttribute('data-thumbs');
      if (!thumbsStr) return;
      const thumbs = JSON.parse(thumbsStr.replace(/&quot;/g, '"'));
      
      if (thumbs.length > 1) {
        let currentIndex = 0;
        let activeImg = img1;
        let inactiveImg = img2;
        
        // Stagger the start time based on card index
        const startDelay = cardIndex * 1800;
        
        setTimeout(() => {
          const intervalId = setInterval(() => {
            currentIndex = (currentIndex + 1) % thumbs.length;
            
            inactiveImg.src = thumbs[currentIndex];
            
            // Wait for image src to update before fading
            setTimeout(() => {
              activeImg.style.opacity = '0';
              inactiveImg.style.opacity = '1';
              
              const temp = activeImg;
              activeImg = inactiveImg;
              inactiveImg = temp;
            }, 50);
            
          }, 5000); // Change image every 5 seconds
          slideshowIntervals.push(intervalId);
        }, startDelay);
      }
    } catch (e) {
      // Ignore JSON parse errors
    }
  });

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
