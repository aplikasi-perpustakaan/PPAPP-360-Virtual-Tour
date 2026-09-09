const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  page.on('console', msg => console.log(`[BROWSER LOG] ${msg.type().toUpperCase()}: ${msg.text()}`));
  page.on('pageerror', err => console.error(`[BROWSER ERROR] ${err.message}`));
  
  console.log('Navigating to http://localhost:8080...');
  await page.goto('http://localhost:8080');
  
  // Wait a few seconds for errors to happen
  await page.waitForTimeout(3000);
  
  await browser.close();
})();
