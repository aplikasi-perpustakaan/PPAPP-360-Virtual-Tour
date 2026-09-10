// ── locations/jw/index.js ─────────────────────────────────────────────
// Combines all sections for JW
// ────────────────────────────────────────────────────────────────

import jwF1KidsSection from './jw-f1-kids.js';
import jwF1LobbySection from './jw-f1-lobby.js';
import jwF2EsportSection from './jw-f2-esport.js';
import jwF2FacilitiesSection from './jw-f2-facilities.js';
import jwF2ReferenceSection from './jw-f2-reference.js';
import jwExtOutsideSection from './jw-ext-outside.js';
import jwStairsSection from './jw-stairs.js';

export default [
  ...jwExtOutsideSection,
  ...jwF1KidsSection,
  ...jwF1LobbySection,
  ...jwF2EsportSection,
  ...jwF2FacilitiesSection,
  ...jwF2ReferenceSection,
  ...jwStairsSection,
];
