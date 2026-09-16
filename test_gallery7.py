import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()
        
        await page.goto("http://localhost:8080/tour.html?branch=pusat&debug=true")
        
        await page.wait_for_timeout(3000)
        
        try:
            await page.evaluate('''
                document.getElementById('debug-marker-modal').classList.add('is-visible');
                
                const btn = document.getElementById('debug-marker-type');
                btn.value = 'image';
                btn.dispatchEvent(new Event('change'));
            ''')
            
            await page.wait_for_timeout(1000)
            
            display = await page.evaluate("document.getElementById('debug-marker-gallery-container').style.display")
            w = await page.evaluate("document.getElementById('debug-marker-gallery-container').offsetWidth")
            h = await page.evaluate("document.getElementById('debug-marker-gallery-container').offsetHeight")
            html = await page.evaluate("document.getElementById('debug-marker-gallery-container').outerHTML")
            
            print(f"DISPLAY={display}")
            print(f"WIDTH={w}")
            print(f"HEIGHT={h}")
            
        except Exception as e:
            print(f"Error: {e}")
        
        await browser.close()

asyncio.run(main())
