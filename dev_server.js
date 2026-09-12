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

function extractSection(sceneId) {
  if (!sceneId) return 'unknown';
  const parts = sceneId.split('-');
  if (parts.length <= 2) return 'other';
  return parts.slice(1, -1).join('-');
}

function handleSaveLink({ action, sourceId, targetId, yaw, pitch, targetName }) {
  const branch = sourceId.split('-')[0];
  const section = extractSection(sourceId);
  const filePath = path.join(__dirname, 'locations', branch, `${branch}-${section}.js`);
  
  if (!fs.existsSync(filePath)) {
    throw new Error(`File not found: ${filePath}`);
  }

  let content = fs.readFileSync(filePath, 'utf8');

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
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(PORT, () => {
  console.log(`========================================`);
  console.log(` 360 Virtual Tour – Node Dev Server`);
  console.log(`========================================`);
  console.log(`\n Server running at http://localhost:${PORT}/`);
  console.log(` Auto-saving for debug links is ENABLED.\n`);
  console.log(` Press Ctrl+C to stop.`);
});
