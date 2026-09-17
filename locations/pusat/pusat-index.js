// ── locations/pusat/index.js ─────────────────────────────────────────────
// Combines all sections for PUSAT
// ────────────────────────────────────────────────────────────────

import pusatF1CastleSection from './pusat-f1-castle.js';
import pusatF1ESportsSection from './pusat-f1-e-sports.js';
import pusatF1IPlayToysSection from './pusat-f1-i-play-toys.js';
import pusatF1KidsSection from './pusat-f1-kids.js';
import pusatF1LobbySection from './pusat-f1-lobby.js';
import pusatF1SensorySection from './pusat-f1-sensory.js';
import pusatF1ReadingSection from './pusat-f1-reading.js';
import pusatOutsideSection from './outside.js';

export default [
  ...pusatF1CastleSection,
  ...pusatF1ESportsSection,
  ...pusatF1IPlayToysSection,
  ...pusatF1KidsSection,
  ...pusatF1LobbySection,
  ...pusatF1SensorySection,
  ...pusatF1ReadingSection,
  ...pusatOutsideSection,
];
