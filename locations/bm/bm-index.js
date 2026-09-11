// ── locations/bm/bm-index.js ──────────────────────────────────────────
// Combines all sections for BM (Cawangan Daerah Seberang Perai Tengah)
// ────────────────────────────────────────────────────────────────

import bmExtOutsideSection from './bm-ext-outside.js';
import bmGfLobbySection from './bm-gf-lobby.js';
import bmGfReadingSection from './bm-gf-reading.js';
import bmGfKidsSection from './bm-gf-kids.js';

export default [
  ...bmExtOutsideSection,
  ...bmGfLobbySection,
  ...bmGfReadingSection,
  ...bmGfKidsSection,
];
