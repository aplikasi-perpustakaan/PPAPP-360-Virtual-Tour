export function showLoading(message = 'Loading virtual tour...') {
  const overlay = document.getElementById('loading-screen');
  const text = document.getElementById('loading-text');
  if (overlay && text) {
    text.textContent = message;
    overlay.classList.remove('is-hidden');
    // Ensure opacity is back to 1 if it was previously hidden via transition
    overlay.style.opacity = '1';
    overlay.style.pointerEvents = 'all';
  }
}

export function hideLoading() {
  const overlay = document.getElementById('loading-screen');
  if (overlay) {
    overlay.style.opacity = '0';
    overlay.style.pointerEvents = 'none';
    setTimeout(() => {
      overlay.classList.add('is-hidden');
    }, 400); // Wait for transition
  }
}

export function initLoadingScreen(viewer) {
  // Hide loading screen initially when viewer is ready
  viewer.addEventListener('ready', () => {
    hideLoading();
  });

  // Re-hide after panorama loads (e.g. from switching branches)
  viewer.addEventListener('panorama-loaded', () => {
    hideLoading();
  });
}
