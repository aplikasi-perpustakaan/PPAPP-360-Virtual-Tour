// ── locations/bt/index.js ─────────────────────────────────────────────
// Combines all sections for BT
// ────────────────────────────────────────────────────────────────

import extOutsideSection from './ext-outside.js';
import f1LobbySection from './f1-lobby.js';
import f1KidsSection from './f1-kids.js';
import f1TytSection from './f1-tyt.js';
import f1SurauSection from './f1-surau.js';
import f1BacksideSection from './f1-backside.js';
import rampSection from './ramp.js';
import stairsFrontSection from './stairs-front.js';
import stairsBackSection from './stairs-back.js';
import f2ReadingSection from './f2-reading.js';
import f2BacksideSection from './f2-backside.js';

export default [
  ...extOutsideSection,
  ...f1LobbySection,
  ...f1KidsSection,
  ...f1TytSection,
  ...f1SurauSection,
  ...f1BacksideSection,
  ...rampSection,
  ...stairsFrontSection,
  ...stairsBackSection,
  ...f2ReadingSection,
  ...f2BacksideSection,
];
