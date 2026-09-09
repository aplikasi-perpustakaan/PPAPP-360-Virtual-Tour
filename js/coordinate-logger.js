/* ===================================================================
   Coordinate Logger – Double-click position logger for dev workflow
   ===================================================================
   Double-click anywhere on the panorama to log the exact yaw and pitch
   to the browser console. Use these values to precisely place links
   and markers in your scene configuration.
   =================================================================== */


/**
 * Attaches a double-click listener to the PSV viewer that logs
 * yaw/pitch coordinates to the console in a copy-paste-ready format.
 *
 * @param {Object} viewer - The PSV Viewer instance.
 */
export function initCoordinateLogger(viewer) {
  viewer.addEventListener('dblclick', ({ data }) => {
    if (data) {
      const yawDeg   = (data.yaw   * 180 / Math.PI).toFixed(2);
      const pitchDeg = (data.pitch * 180 / Math.PI).toFixed(2);

      console.log(
        `%c📍 Clicked Position`,
        'color: #2D6CDF; font-weight: bold; font-size: 14px;'
      );
      console.log(`   Yaw:   ${data.yaw.toFixed(4)} rad  →  ${yawDeg}°`);
      console.log(`   Pitch: ${data.pitch.toFixed(4)} rad  →  ${pitchDeg}°`);
      console.log(`   Copy-paste for config:`);
      console.log(`   position: { yaw: '${yawDeg}deg', pitch: '${pitchDeg}deg' }`);
    }
  });

  console.log(
    '%c🌐 360° Virtual Tour loaded. Double-click anywhere to log yaw/pitch coordinates.',
    'color: #C9A84C; font-weight: bold;'
  );
}
