const http = require('http');
const fs = require('fs');
const path = require('path');

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

function handleSaveMarker({ sourceId, markerConfig }) {
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
  const blockRegex = new RegExp(`(id:\\s*['"]${sourceId}['"][\\s\\S]*?markers:\\s*\\[)([\\s\\S]*?)(\\]\\s*,\\s*(?:data|links):|\\}\\s*,?\\s*\\n\\s*\\{)`, 'g');
  
  let modified = false;
  content = content.replace(blockRegex, (match, prefix, markersStr, suffix) => {
    modified = true;
    
    // Stringify and clean up the marker object
    let newMarkerSnippet = JSON.stringify(markerConfig, null, 2).replace(/"([^"]+)":/g, '$1:').replace(/"/g, "'");
    // Indent
    newMarkerSnippet = newMarkerSnippet.split('\n').map((line, i) => i === 0 ? line : `      ${line}`).join('\n');

    markersStr = markersStr.trim();
    if (markersStr && !markersStr.endsWith(',')) {
      markersStr += ',';
    }
    markersStr += (markersStr ? '\n      ' : '') + newMarkerSnippet + ',';
    
    // Cleanup spacing
    markersStr = markersStr.replace(/,\s*,/g, ',');
    markersStr = markersStr.trim();
    
    const formattedMarkers = markersStr ? `\n      ${markersStr}\n    ` : '';
    
    return `${prefix}${formattedMarkers}${suffix}`;
  });

  if (!modified) {
    throw new Error(`Could not find markers array for scene ${sourceId} in ${filePath}.`);
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`[ADD MARKER] ${markerConfig.id} saved to ${filePath}`);
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

