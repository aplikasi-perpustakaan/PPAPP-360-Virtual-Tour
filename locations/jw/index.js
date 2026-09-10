// ── locations/jw/index.js ─────────────────────────────────────────────
// Combines all sections for JW
// ────────────────────────────────────────────────────────────────

import gfMainAreaSection from './gf-main-area.js';
import f1KidsSection from './f1-kids.js';
import f1LobbySection from './f1-lobby.js';
import f2EsportSection from './f2-esport.js';
import f2FacilitiesSection from './f2-facilities.js';
import f2ReferenceSection from './f2-reference.js';
import extOutsideSection from './ext-outside.js';
import stairsSection from './stairs.js';

export default [
  ...extOutsideSection,
  ...gfMainAreaSection,
  ...f1KidsSection,
  ...f1LobbySection,
  ...f2EsportSection,
  ...f2FacilitiesSection,
  ...f2ReferenceSection,
  ...stairsSection,
];
