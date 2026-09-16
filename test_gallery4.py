import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()
        
        await page.goto("http://localhost:8080/tour.html?branch=pusat&debug=true")
        
        await page.wait_for_selector(".psv-container", timeout=10000)
        await page.wait_for_timeout(3000)
        
        await page.mouse.dblclick(400, 300)
        
        try:
            await page.wait_for_selector(".is-visible", timeout=3000)
        except:
            print("Trying another click")
            await page.mouse.dblclick(500, 400)
            await page.wait_for_selector(".is-visible", timeout=3000)
        
        await page.select_option("#debug-marker-type", "image")
        await page.wait_for_timeout(1000)
        
        display = await page.evaluate("document.getElementById('debug-marker-gallery-container').style.display")
        width = await page.evaluate("document.getElementById('debug-marker-gallery-container').offsetWidth")
        height = await page.evaluate("document.getElementById('debug-marker-gallery-container').offsetHeight")
        
        print(f"Gallery display: {display}, width: {width}, height: {height}")
        
        await browser.close()

asyncio.run(main())
