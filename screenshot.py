from playwright.sync_api import sync_playwright
import time

try:
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        page.set_viewport_size({"width": 1280, "height": 720})
        page.goto('https://fake-news-detector-liard-gamma.vercel.app/', wait_until='networkidle', timeout=30000)
        # Give it a couple of seconds for animations to finish
        time.sleep(3)
        page.screenshot(path=r'c:\Users\somil\OneDrive\Desktop\3d-portfolio\public\images\truthguard.png')
        browser.close()
        print("Screenshot saved successfully.")
except Exception as e:
    print(f"Error: {e}")
