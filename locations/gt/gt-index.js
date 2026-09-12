// ── locations/gt/index.js ─────────────────────────────────────────────
// Combines all sections for GT
// ────────────────────────────────────────────────────────────────

import gtGfMainAreaSection from './gt-gf-main-area.js';
import gtF1MainAreaSection from './gt-f1-main-area.js';

import gtF1IPlayToySection from './gt-f1-i-play-toy.js';
import gtF2MainAreaSection from './gt-f2-main-area.js';
import gtF2BilikKoleksiKhasSection from './gt-f2-bilik-koleksi-khas.js';
import gtExtOutsideSection from './gt-ext-outside.js';
import gtStairsSection from './gt-stairs.js';
export default [
  ...gtExtOutsideSection,
  ...gtF1MainAreaSection,
  ...gtF1IPlayToySection,
  ...gtF2MainAreaSection,
  ...gtF2BilikKoleksiKhasSection,
  ...gtStairsSection,
  ...gtGfMainAreaSection,
];
