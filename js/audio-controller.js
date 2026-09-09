export function initAudioController(viewer) {
  // Initialize ambient audio
  const ambientAudio = new Audio('./audio/ambient/library-ambience.wav');
  ambientAudio.loop = true;
  ambientAudio.volume = 0.3; // Low background volume

  // Browser autoplay policies require user interaction before playing audio
  const playAmbient = () => {
    ambientAudio.play().catch(err => {
      console.warn('Autoplay prevented. Audio will play upon interaction.', err);
    });
    // Remove the listener after the first successful interaction
    document.removeEventListener('click', playAmbient);
  };
  
  // Attach interaction listener
  document.addEventListener('click', playAmbient);

  // Hook into markers plugin to play targeted narration
  viewer.addEventListener('select-marker', ({ marker }) => {
    if (marker.data && marker.data.audioUrl) {
      const narration = new Audio(marker.data.audioUrl);
      narration.play().catch(err => {
        console.warn('Failed to play narration:', err);
      });
    }
  });
}
