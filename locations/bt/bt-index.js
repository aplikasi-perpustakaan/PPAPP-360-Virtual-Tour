// ── locations/bt/index.js ─────────────────────────────────────────────
// Combines all sections for BT
// ────────────────────────────────────────────────────────────────

import btExtOutsideSection from './bt-ext-outside.js';
import btF1LobbySection from './bt-f1-lobby.js';
import btF1KidsSection from './bt-f1-kids.js';
import btF1TytSection from './bt-f1-tyt.js';
import btF1SurauSection from './bt-f1-surau.js';
import btF1BacksideSection from './bt-f1-backside.js';
import btRampSection from './bt-ramp.js';
import btStairsFrontSection from './bt-stairs-front.js';
import btStairsBackSection from './bt-stairs-back.js';
import btF2ReadingSection from './bt-f2-reading.js';
import btF2BacksideSection from './bt-f2-backside.js';

export default [
  ...btExtOutsideSection,
  ...btF1LobbySection,
  ...btF1KidsSection,
  ...btF1TytSection,
  ...btF1SurauSection,
  ...btF1BacksideSection,
  ...btRampSection,
  ...btStairsFrontSection,
  ...btStairsBackSection,
  ...btF2ReadingSection,
  ...btF2BacksideSection,
];
