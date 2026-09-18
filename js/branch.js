import { branches } from './tour-config.js';
import { Viewer } from '@photo-sphere-viewer/core';
import { AutorotatePlugin } from '@photo-sphere-viewer/autorotate-plugin';
async function initBranchPage() {
  const branchId = window.BRANCH_ID || new URLSearchParams(window.location.search).get('id');

  if (!branchId) {
    window.location.href = './index.html';
    return;
  }

  const branch = branches.find(b => b.id === branchId);
  if (!branch) {
    window.location.href = './index.html';
    return;
  }

  document.title = `${branch.name} - PPAPP 360° Virtual Tour`;

  // Try to load the branch scenes to get thumbnails
  let scenes = [];
  try {
    const module = await import(`../locations/${branch.id}/${branch.id}-index.js`);
    scenes = module.default;
  } catch (e) {
    console.warn(`Could not load scenes for branch ${branch.id}`, e);
  }

  // Populate basic info
  document.getElementById('branch-name').textContent = branch.name;
  document.getElementById('branch-description').textContent = branch.description || 'Welcome to this branch.';
  document.getElementById('branch-address').textContent = branch.address || 'Address not available.';
  document.getElementById('branch-phone').textContent = branch.phone || 'Phone not available.';
  document.getElementById('branch-email').textContent = branch.email || 'Email not available.';
  document.getElementById('branch-hours').textContent = branch.hours || 'Operating hours not available.';

  // Set Start Tour link
  document.getElementById('start-tour-btn').href = `./tour.html?scene=${branch.startNode}`;

  // Set Hero Viewer (use start node panorama if available)
  const startScene = scenes.find(s => s.id === branch.startNode) || scenes[0];
  if (startScene && startScene.panorama) {
    let defaultYaw = 0;
    if (startScene.defaultYaw) {
      if (typeof startScene.defaultYaw === 'string' && startScene.defaultYaw.endsWith('deg')) {
        defaultYaw = parseFloat(startScene.defaultYaw) * Math.PI / 180;
      } else {
        defaultYaw = parseFloat(startScene.defaultYaw);
      }
    }

    const viewer = new Viewer({
      container: 'hero-viewer-container',
      panorama: startScene.panorama,
      navbar: false,
      defaultZoomLvl: 100,
      defaultPitch: 0,
      defaultYaw: defaultYaw,
      touchmoveTwoFingers: true,
      mousewheel: false,
      plugins: [
        [AutorotatePlugin, {
          autostartDelay: 500,
          autorotatePitch: 0,
          autorotateSpeed: '1rpm'
        }]
      ]
    });
  }

  // Populate Facilities
  const facilitiesList = document.getElementById('branch-facilities');
  if (branch.facilities && branch.facilities.length > 0) {
    facilitiesList.innerHTML = branch.facilities.map(f => `<li>${f}</li>`).join('');
  } else {
    facilitiesList.innerHTML = '<li>Information not available</li>';
  }

  // Populate Zones
  const zonesContainer = document.getElementById('zones-container');
  if (branch.zones && branch.zones.length > 0) {
    let html = '';
    branch.zones.forEach(zoneCategory => {
      if (branch.zones.length > 1 || zoneCategory.category !== 'Main Areas') {
        html += `<h4 class="zone-category-title">${zoneCategory.category}</h4>`;
      }
      
      html += `<div class="zones-grid">`;
      html += zoneCategory.items.map(link => {
        const targetScene = scenes.find(s => s.id === link.sceneId);
        const thumb = targetScene && targetScene.thumbnail ? targetScene.thumbnail : './images/shared/placeholder.jpg';
        let subzonesHTML = '';
        if (link.subzones && link.subzones.length > 0) {
          subzonesHTML = `
            <div class="zone-subzones">
              ${link.subzones.map(sub => `<a href="./tour.html?scene=${sub.sceneId}" class="subzone-pill">${sub.label}</a>`).join('')}
            </div>
          `;
        }

        return `
          <div class="zone-card-container">
            <a href="./tour.html?scene=${link.sceneId}" class="zone-card">
              <img src="${thumb}" alt="${link.label}" class="zone-img" onerror="this.src='./images/shared/placeholder.jpg'">
              <div class="zone-label">${link.label}</div>
            </a>
            ${subzonesHTML}
          </div>
        `;
      }).join('');
      html += `</div>`;
    });
    if (zonesContainer) {
      zonesContainer.innerHTML = html;
    }
  } else {
    const zonesSection = document.querySelector('.zones-section');
    if (zonesSection) {
      zonesSection.classList.add('is-hidden');
    }
  }



  // Show content
  const spinner = document.getElementById('loading-spinner');
  if (spinner) {
    spinner.classList.add('is-hidden');
  }
  const branchContent = document.getElementById('branch-content');
  if (branchContent) {
    branchContent.classList.remove('is-hidden');
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initBranchPage);
} else {
  initBranchPage();
}





