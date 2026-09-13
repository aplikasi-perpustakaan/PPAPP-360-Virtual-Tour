/* ===================================================================
   Marker Templates – Reusable HTML generators for PSV markers
   ===================================================================
   Provides consistent, parameterized marker visuals used across
   all location files. Avoids duplicating inline HTML strings.
   =================================================================== */

const escapeHtml = (s) => s.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":"&#39;"}[c]));

/**
 * Info marker — blue circle with "i" icon.
 * Used for informational tooltips and points of interest.
 *
 * @param {Object}  [options]          - Customization options.
 * @param {number}  [options.size=24]  - Marker diameter in px.
 * @param {string}  [options.color]    - Background color override.
 * @returns {string} HTML string for the marker element.
 */
export function createInfoMarker({ size = 24, color = 'var(--color-accent-blue, #2D6CDF)' } = {}) {
  const fontSize = Math.round(size * 0.58);
  return `<div class="marker-base marker-info" style="
    width:${size}px; height:${size}px;
    background:${escapeHtml(color)};
    border-radius:50%;
    display:flex; align-items:center; justify-content:center;
    color:#fff; font-weight:bold; font-size:${fontSize}px;
    cursor:pointer;
    box-shadow:0 2px 8px rgba(0,0,0,0.4);
    transition: transform 0.2s ease;
  ">i</div>`;
}


/**
 * Audio marker — gold circle with speaker icon.
 * Used to indicate scenes or spots with audio narration.
 *
 * @param {Object}  [options]          - Customization options.
 * @param {number}  [options.size=24]  - Marker diameter in px.
 * @returns {string} HTML string for the marker element.
 */
export function createAudioMarker({ size = 24 } = {}) {
  const fontSize = Math.round(size * 0.58);
  return `<div class="marker-base marker-audio" style="
    width:${size}px; height:${size}px;
    background:var(--color-accent-gold, #C9A84C);
    border-radius:50%;
    display:flex; align-items:center; justify-content:center;
    color:#fff; font-size:${fontSize}px;
    cursor:pointer;
    box-shadow:0 2px 8px rgba(0,0,0,0.4);
    transition: transform 0.2s ease;
  ">🔊</div>`;
}


/**
 * Navigation arrow marker — directional indicator for scene links.
 * Used as an alternative to the default PSV link arrows.
 *
 * @param {Object}  [options]              - Customization options.
 * @param {string}  [options.direction]    - Arrow direction: 'up', 'down', 'left', 'right'.
 * @param {number}  [options.size=32]      - Marker diameter in px.
 * @returns {string} HTML string for the marker element.
 */
export function createNavArrow({ direction = 'right', size = 32 } = {}) {
  const arrows = { up: '↑', down: '↓', left: '←', right: '→' };
  const arrow = arrows[direction] || arrows.right;
  const fontSize = Math.round(size * 0.55);

  return `<div class="marker-base marker-nav" style="
    width:${size}px; height:${size}px;
    background:rgba(45,108,223,0.7);
    border-radius:50%;
    display:flex; align-items:center; justify-content:center;
    color:#fff; font-size:${fontSize}px; font-weight:bold;
    cursor:pointer;
    box-shadow:0 2px 12px rgba(0,0,0,0.5);
    border:2px solid rgba(255,255,255,0.3);
    transition: transform 0.2s ease, background 0.2s ease;
  ">${arrow}</div>`;
}


/**
 * Label marker — text label with a background badge.
 * Used for room names, area labels, or any text-based marker.
 *
 * @param {Object}  [options]           - Customization options.
 * @param {string}  options.text        - Label text to display.
 * @param {string}  [options.bgColor]   - Background color override.
 * @returns {string} HTML string for the marker element.
 */
export function createLabelMarker({ text = 'Label', bgColor = 'var(--glass-bg, rgba(28,35,51,0.85))' } = {}) {
  return `<div class="marker-base marker-label" style="
    background:${escapeHtml(bgColor)};
    backdrop-filter:blur(8px);
    -webkit-backdrop-filter:blur(8px);
    padding:6px 14px;
    border-radius:6px;
    color:#fff; font-size:13px; font-weight:600;
    white-space:nowrap;
    cursor:pointer;
    box-shadow:0 2px 8px rgba(0,0,0,0.4);
    border:1px solid rgba(136,146,160,0.3);
    transition: transform 0.2s ease;
  ">${escapeHtml(text)}</div>`;
}
