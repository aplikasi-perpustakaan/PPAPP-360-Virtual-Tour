import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        # SET VIEWPORT TO SMALL
        page = await browser.new_page(viewport={"width": 600, "height": 800})
        
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
            
            w1 = await page.evaluate("document.querySelector('.debug-modal-panel').offsetWidth")
            w2 = await page.evaluate("document.getElementById('debug-marker-gallery-container').offsetWidth")
            
            print(f"Form width={w1}, Gallery width={w2}")
            
        except Exception as e:
            print(f"Error: {e}")
        
        await browser.close()

asyncio.run(main())
