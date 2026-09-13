export function initAudioController(viewer) {
  // Initialize ambient audio
  const ambientAudio = new Audio('./audio/ambient/library-ambience.wav');
  ambientAudio.loop = true;
  ambientAudio.volume = 0.3; // Low background volume

  let currentNarration = null;

  // Shared audio pool to bypass mobile autoplay restrictions
  const sharedAudioPool = new Audio();
  let poolUnlocked = false;

  // Browser autoplay policies require user interaction before playing audio
  const unlockAudio = () => {
    ambientAudio.play().catch(err => {
      console.warn('Autoplay prevented. Audio will play upon interaction.', err);
    });

    if (!poolUnlocked) {
      sharedAudioPool.play().catch(() => {});
      sharedAudioPool.pause();
      poolUnlocked = true;
    }
    
    // Remove the listener after the first successful interaction
    document.removeEventListener('click', unlockAudio);
    document.removeEventListener('touchstart', unlockAudio);
  };
  
  // Attach interaction listener
  document.addEventListener('click', unlockAudio);
  document.addEventListener('touchstart', unlockAudio);

  // Hook into markers plugin to play targeted narration
  viewer.addEventListener('select-marker', ({ marker }) => {
    if (marker.data && marker.data.audioUrl) {
      if (currentNarration) {
        currentNarration.pause();
        currentNarration.currentTime = 0;
      }

      if (poolUnlocked) {
        // Reuse unlocked pool element
        sharedAudioPool.src = marker.data.audioUrl;
        currentNarration = sharedAudioPool;
      } else {
        currentNarration = new Audio(marker.data.audioUrl);
      }

      currentNarration.play().catch(err => {
        console.warn('Failed to play narration:', err);
      });
    }
  });

  // Stop narration when scene changes
  viewer.addEventListener('panorama-load', () => {
    if (currentNarration) {
        currentNarration.pause();
        currentNarration.currentTime = 0;
        currentNarration = null;
    }
  });
}
