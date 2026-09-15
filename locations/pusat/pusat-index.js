// ── locations/pusat/index.js ─────────────────────────────────────────────
// Combines all sections for PUSAT
// ────────────────────────────────────────────────────────────────

import pusatF1EntranceSection from './pusat-f1-entrance.js';
import pusatF1CastleSection from './pusat-f1-castle.js';
import pusatF1ESportsSection from './pusat-f1-e-sports.js';
import pusatF1IPlayToysSection from './pusat-f1-i-play-toys.js';
import pusatF1KidsSection from './pusat-f1-kids.js';
import pusatF1LobbySection from './pusat-f1-lobby.js';

export default [
  ...pusatF1EntranceSection,
  ...pusatF1CastleSection,
  ...pusatF1ESportsSection,
  ...pusatF1IPlayToysSection,
  ...pusatF1KidsSection,
  ...pusatF1LobbySection,
];
