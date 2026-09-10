const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  await page.goto('http://localhost:8080/');
  await page.waitForTimeout(3000);
  
  const mapState = await page.evaluate(() => {
    const mapPlugin = window.viewer.getPlugin('map');
    
    try {
      mapPlugin.close();
    } catch (e) {
      return 'Error calling close: ' + e.message;
    }
    
    return new Promise(resolve => {
      setTimeout(() => {
        const mapEl = document.querySelector('.psv-map');
        resolve({
          classes: Array.from(mapEl.classList).join(' '),
          width: mapEl.clientWidth,
          height: mapEl.clientHeight,
        });
      }, 500); // wait for animation
    });
  });
  
  console.log('Map State after manual close:', mapState);
  
  await browser.close();
})();
