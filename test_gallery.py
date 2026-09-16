import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()
        
        await page.goto("http://localhost:8080/tour.html?branch=pusat")
        
        await page.wait_for_selector(".psv-container", timeout=10000)
        await page.mouse.dblclick(400, 300)
        
        await page.wait_for_selector("#debug-marker-modal.is-visible")
        
        await page.select_option("#debug-marker-type", "image")
        await page.wait_for_timeout(1000)
        
        display = await page.evaluate("document.getElementById('debug-marker-gallery-container').style.display")
        client_rect = await page.evaluate("document.getElementById('debug-marker-gallery-container').getBoundingClientRect()")
        html = await page.evaluate("document.getElementById('debug-marker-gallery-container').outerHTML")
        
        print(f"Gallery display: {display}")
        print(f"Gallery rect: {client_rect}")
        # print(f"HTML: {html}")
        
        await page.screenshot(path="debug_modal.png")
        
        await browser.close()

asyncio.run(main())
