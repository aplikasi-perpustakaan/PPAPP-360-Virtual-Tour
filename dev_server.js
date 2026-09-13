const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const PORT = 8080;

const MIME_TYPES = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml'
};

function handleSaveLink({ action, sourceId, targetId, yaw, pitch, targetName }) {
  const branch = sourceId.split('-')[0];
  const branchDir = path.join(__dirname, 'locations', branch);
  
  if (!fs.existsSync(branchDir)) {
    throw new Error(`Branch directory not found: ${branchDir}`);
  }

  // Dynamically find which file contains this scene ID
  const files = fs.readdirSync(branchDir).filter(f => f.endsWith('.js') && !f.endsWith('-index.js'));
  let filePath = null;
  let content = null;
  
  const idSearchRegex = new RegExp(`id:\\s*['"]${sourceId}['"]`);

  for (const file of files) {
    const fullPath = path.join(branchDir, file);
    const fileContent = fs.readFileSync(fullPath, 'utf8');
    if (idSearchRegex.test(fileContent)) {
      filePath = fullPath;
      content = fileContent;
      break;
    }
  }

  if (!filePath || !content) {
    throw new Error(`Could not find scene ID '${sourceId}' in any file under locations/${branch}/`);
  }

  const blockRegex = new RegExp(`(id:\\s*['"]${sourceId}['"][\\s\\S]*?links:\\s*\\[)([\\s\\S]*?)(\\]\\s*,\\s*(?:markers|data):)`, 'g');
  
  let modified = false;
  content = content.replace(blockRegex, (match, prefix, linksStr, suffix) => {
    modified = true;
    
    // Match the specific object for this targetId, allowing exactly one level of nested braces (for `position: {}`)
    const linkObjRegex = new RegExp(`\\{\\s*nodeId:\\s*['"]${targetId}['"](?:[^{}]|\\{[^{}]*\\})*\\}\\s*,?`, 'g');
    
    const exists = linkObjRegex.test(linksStr);
    linkObjRegex.lastIndex = 0; // reset
    
    if (action === 'delete') {
      linksStr = linksStr.replace(linkObjRegex, '').trim();
    } else {
      const newLinkSnippet = `{\n        nodeId: '${targetId}',\n        position: { yaw: '${yaw}', pitch: '${pitch}' },\n        name: '${targetName}'\n      }`;
      
      if (exists) {
        linksStr = linksStr.replace(linkObjRegex, newLinkSnippet + ',\n      ');
      } else {
        linksStr = linksStr.trim();
        if (linksStr && !linksStr.endsWith(',')) {
          linksStr += ',';
        }
        linksStr += (linksStr ? '\n      ' : '') + newLinkSnippet + ',';
      }
    }
    
    // Cleanup spacing inside the links array
    linksStr = linksStr.replace(/,\s*,/g, ',');
    linksStr = linksStr.trim();
    
    const formattedLinks = linksStr ? `\n      ${linksStr}\n    ` : '';
    
    return `${prefix}${formattedLinks}${suffix}`;
  });

  if (!modified) {
    throw new Error(`Could not find links array for scene ${sourceId} in ${filePath}. Check if formatting matches expectations.`);
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`[${action.toUpperCase()}] ${sourceId} -> ${targetId} saved to ${filePath}`);
}

function handleSaveMarker(payload) {
  const { sourceId, markerConfig, markerId, action } = payload;
  const targetMarkerId = markerId || (markerConfig && markerConfig.id);
  const branch = sourceId.split('-')[0];
  const branchDir = path.join(__dirname, 'locations', branch);
  
  if (!fs.existsSync(branchDir)) {
    throw new Error(`Branch directory not found: ${branchDir}`);
  }

  const files = fs.readdirSync(branchDir).filter(f => f.endsWith('.js') && !f.endsWith('-index.js'));
  let filePath = null;
  let content = null;
  
  const idSearchRegex = new RegExp(`id:\\s*['"]${sourceId}['"]`);

  for (const file of files) {
    const fullPath = path.join(branchDir, file);
    const fileContent = fs.readFileSync(fullPath, 'utf8');
    if (idSearchRegex.test(fileContent)) {
      filePath = fullPath;
      content = fileContent;
      break;
    }
  }

  if (!filePath || !content) {
    throw new Error(`Could not find scene ID '${sourceId}'`);
  }

  // Regex to find the markers array for the specific scene
  // Matches from `id: "sourceId"` down to `markers: [` then captures the contents until the first `]`
  const blockRegex = new RegExp(`(id:\\s*['"]${sourceId}['"][\\s\\S]*?markers:\\s*\\[)([\\s\\S]*?)(\\])`, 'g');
  
  let modified = false;
  content = content.replace(blockRegex, (match, prefix, markersStr, suffix) => {
    modified = true;
    
    // Remove the existing marker with this ID if it exists (for edit or delete)
    // Matches { ... id: '...', ... } with up to one level of nested braces
    const existingMarkerRegex = new RegExp(`\\{(?:[^{}]|\\{[^{}]*\\})*?id:\\s*['"]${targetMarkerId}['"](?:[^{}]|\\{[^{}]*\\})*\\}(?:\\s*,)?`, 'g');
    markersStr = markersStr.replace(existingMarkerRegex, '');

    if (payload.action !== 'delete') {
      // Stringify and clean up the new marker object
      let newMarkerSnippet = JSON.stringify(markerConfig, null, 2).replace(/"([^"]+)":/g, '$1:').replace(/"/g, "'");
      // Indent
      newMarkerSnippet = newMarkerSnippet.split('\n').map((line, i) => i === 0 ? line : `      ${line}`).join('\n');

      markersStr = markersStr.trim();
      if (markersStr && !markersStr.endsWith(',')) {
        markersStr += ',';
      }
      markersStr += (markersStr ? '\n      ' : '') + newMarkerSnippet + ',';
    }
    
    // Cleanup spacing
    markersStr = markersStr.replace(/,\s*,/g, ',');
    markersStr = markersStr.trim();
    if (markersStr.endsWith(',')) markersStr = markersStr.slice(0, -1);
    
    const formattedMarkers = markersStr ? `\n      ${markersStr}\n    ` : '';
    
    return `${prefix}${formattedMarkers}${suffix}`;
  });

  if (!modified) {
    throw new Error(`Could not find markers array for scene ${sourceId} in ${filePath}.`);
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`[MARKER] ${targetMarkerId} (action: ${action || 'add/edit'}) saved to ${filePath}`);
}

function handleSaveDefaults({ sourceId, defaultYaw, defaultPitch, defaultZoomLvl }) {
  const branch = sourceId.split('-')[0];
  const branchDir = path.join(__dirname, 'locations', branch);
  
  if (!fs.existsSync(branchDir)) {
    throw new Error(`Branch directory not found: ${branchDir}`);
  }

  const files = fs.readdirSync(branchDir).filter(f => f.endsWith('.js') && !f.endsWith('-index.js'));
  let filePath = null;
  let content = null;
  
  const idSearchRegex = new RegExp(`id:\\s*['"]${sourceId}['"]`);

  for (const file of files) {
    const fullPath = path.join(branchDir, file);
    const fileContent = fs.readFileSync(fullPath, 'utf8');
    if (idSearchRegex.test(fileContent)) {
      filePath = fullPath;
      content = fileContent;
      break;
    }
  }

  if (!filePath || !content) {
    throw new Error(`Could not find scene ID '${sourceId}'`);
  }

  const blockStartIndex = content.search(idSearchRegex);
  if (blockStartIndex === -1) throw new Error("Not found");
  
  const endMatch = content.substring(blockStartIndex).match(/(links:|markers:|data:)/);
  if (!endMatch) throw new Error("Could not find end of scene object");
  
  const blockEndIndex = blockStartIndex + endMatch.index;
  let block = content.substring(blockStartIndex, blockEndIndex);
  
  // Strip out old defaults
  block = block
    .replace(/\s*defaultYaw:\s*['"][^'"]+['"],?/g, '')
    .replace(/\s*defaultPitch:\s*['"][^'"]+['"],?/g, '')
    .replace(/\s*defaultZoomLvl:\s*\d+,?/g, '');
    
  // Insert new defaults immediately after the thumbnail property
  block = block.replace(/(thumbnail:\s*['"][^'"]+['"],?)/, 
    `$1\n    defaultYaw: '${defaultYaw}',\n    defaultPitch: '${defaultPitch}',\n    defaultZoomLvl: ${defaultZoomLvl},`
  );
  
  content = content.substring(0, blockStartIndex) + block + content.substring(blockEndIndex);

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`[SAVE DEFAULTS] ${sourceId} saved to ${filePath}`);
}

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/api/save-link') {
    let body = '';
    req.on('data', chunk => { body += chunk.toString(); });
    req.on('end', () => {
      try {
        const payload = JSON.parse(body);
        handleSaveLink(payload);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true }));
      } catch (err) {
        console.error('Error saving link:', err.message);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: err.message }));
      }
    });
    return;
  }

  if (req.method === 'POST' && req.url === '/api/save-marker') {
    let body = '';
    req.on('data', chunk => { body += chunk.toString(); });
    req.on('end', () => {
      try {
        const payload = JSON.parse(body);
        handleSaveMarker(payload);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true }));
      } catch (err) {
        console.error('Error saving marker:', err.message);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: err.message }));
      }
    });
    return;
  }

  if (req.method === 'POST' && req.url === '/api/save-defaults') {
    let body = '';
    req.on('data', chunk => { body += chunk.toString(); });
    req.on('end', () => {
      try {
        const payload = JSON.parse(body);
        handleSaveDefaults(payload);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true }));
      } catch (err) {
        console.error('Error saving defaults:', err.message);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: err.message }));
      }
    });
    return;
  }

  if (req.method === 'POST' && req.url === '/api/generate-thumbnail') {
    let body = '';
    req.on('data', chunk => { body += chunk.toString(); });
    req.on('end', () => {
      try {
        const payload = JSON.parse(body);
        const { sourceId, yaw, pitch } = payload;
        
        // Strip 'deg' from yaw/pitch to pass as floats
        const numYaw = parseFloat(yaw);
        const numPitch = parseFloat(pitch);

        const cmd = `python scripts/generate-thumbnails.py --scene "${sourceId}" --yaw ${numYaw} --pitch ${numPitch}`;
        
        exec(cmd, { cwd: __dirname }, (error, stdout, stderr) => {
          if (error) {
            console.error('Error generating thumbnail:', stderr || error.message);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: stderr || error.message }));
            return;
          }
          console.log(`[GENERATE THUMBNAIL] ${sourceId} thumbnail generated. Output: ${stdout.trim()}`);
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ success: true, stdout }));
        });
      } catch (err) {
        console.error('Error generating thumbnail:', err.message);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: err.message }));
      }
    });
    return;
  }

  if (req.method === 'POST' && req.url === '/api/upload-image') {
    let body = '';
    // Increase max payload size for images (default might be small, but we chunk it)
    req.on('data', chunk => { body += chunk.toString(); });
    req.on('end', () => {
      try {
        const payload = JSON.parse(body);
        const { filename, image } = payload;
        
        // image should be a base64 string like "data:image/jpeg;base64,/9j/4AAQ..."
        const matches = image.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
        if (!matches || matches.length !== 3) {
          throw new Error('Invalid base64 image data');
        }

        const ext = filename.split('.').pop().toLowerCase() || 'jpg';
        const uniqueFilename = `${Date.now()}-${Math.random().toString(36).substring(2, 8)}.${ext}`;
        const uploadDir = path.join(__dirname, 'images', 'shared', 'uploads');
        
        if (!fs.existsSync(uploadDir)) {
          fs.mkdirSync(uploadDir, { recursive: true });
        }

        const filePath = path.join(uploadDir, uniqueFilename);
        const buffer = Buffer.from(matches[2], 'base64');
        fs.writeFileSync(filePath, buffer);

        const relativePath = `./images/shared/uploads/${uniqueFilename}`;
        
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true, url: relativePath }));
      } catch (err) {
        console.error('Error uploading image:', err.message);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: err.message }));
      }
    });
    return;
  }

  // Static file serving
  let urlPath = req.url.split('?')[0];
  let filePath = path.join(__dirname, urlPath === '/' ? 'index.html' : urlPath);
  
  const extname = String(path.extname(filePath)).toLowerCase();
  const contentType = MIME_TYPES[extname] || 'application/octet-stream';

  fs.readFile(filePath, (error, content) => {
    if (error) {
      if(error.code == 'ENOENT'){
        res.writeHead(404);
        res.end('File not found');
      } else {
        res.writeHead(500);
        res.end('Server error: ' + error.code);
      }
    } else {
      res.writeHead(200, {
        'Content-Type': contentType,
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(PORT, () => {
  console.log(`========================================`);
  console.log(` 360 Virtual Tour – Node Dev Server`);
  console.log(`========================================`);
  console.log(`\n Server running at http://localhost:${PORT}/`);
  console.log(` Auto-saving for debug links and markers is ENABLED.\n`);
  console.log(` Press Ctrl+C to stop.`);
});

