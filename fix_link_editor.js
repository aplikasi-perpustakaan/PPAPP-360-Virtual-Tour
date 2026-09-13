const fs = require('fs');
let content = fs.readFileSync('js/link-editor.js', 'utf8');

// Fix string interpolations
content = content.replace(/\\deg\\;/g, '${((pos.yaw * 180 / Math.PI) % 360).toFixed(2)}deg;\\n    const newTargetPitch = ${(pos.pitch * 180 / Math.PI).toFixed(2)}deg;');
// The replace above will do both but wait.

// Let's just fix the specific broken lines.
content = content.replace('const newTargetYaw = \\deg\\;', 'const newTargetYaw = ${((pos.yaw * 180 / Math.PI) % 360).toFixed(2)}deg;');
content = content.replace('const newTargetPitch = \\deg\\;', 'const newTargetPitch = ${(pos.pitch * 180 / Math.PI).toFixed(2)}deg;');

content = content.replace(/showToast\\(\\\? Error: \\\\\\);/g, 'showToast(❌ Error: );');
content = content.replace(/removeMarker\\(.*?\\);/g, 'removeMarker(	our-link-);');

fs.writeFileSync('js/link-editor.js', content, 'utf8');
