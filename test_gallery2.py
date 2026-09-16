import asyncio
from playwright.async_api import async_playwright
import urllib.request
import time

def check_server():
    try:
        urllib.request.urlopen("http://localhost:8080/index.html")
        return True
    except:
        return False

async def main():
    if not check_server():
        print("Server not running on 8080")
        return

    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()
        
        await page.goto("http://localhost:8080/tour.html?branch=pusat")
        
        print("Waiting for viewer")
        await page.wait_for_selector(".psv-container", timeout=10000)
        
        print("Double clicking")
        await page.mouse.dblclick(400, 300)
        
        print("Waiting for modal")
        await page.wait_for_selector("#debug-marker-modal.is-visible", timeout=5000)
        
        print("Selecting image")
        await page.select_option("#debug-marker-type", "image")
        
        await page.wait_for_timeout(1000)
        
        display = await page.evaluate("document.getElementById('debug-marker-gallery-container').style.display")
        width = await page.evaluate("document.getElementById('debug-marker-gallery-container').offsetWidth")
        
        print(f"Gallery display: {display}, width: {width}")
        
        await browser.close()

asyncio.run(main())
