#!/usr/bin/env python3
"""Optional Chromium touch-profile, landscape and enlarged-text checks."""
from playwright.sync_api import sync_playwright
import json
from pathlib import Path
import argparse
parser=argparse.ArgumentParser();parser.add_argument('--base',default='http://127.0.0.1:4173');args=parser.parse_args()
base=args.base;results=[]
paths=['/uk','/games/uk','/portfolio/uk','/about/uk','/quiet-camp/uk','/moyva/uk','/fun-and-ball/uk','/privacy/uk','/quiet-camp/privacy/uk']
with sync_playwright() as p:
 b=p.chromium.launch(executable_path='/usr/bin/chromium',args=['--no-sandbox'])
 for device in ['Pixel 7','iPhone 13','iPad (gen 7)']:
  ctx=b.new_context(**p.devices[device],reduced_motion='reduce');page=ctx.new_page()
  for path in paths:
   page.goto(base+path)
   assert page.evaluate('document.documentElement.scrollWidth <= innerWidth'),(device,path)
   if page.locator('.mobile-menu').is_visible():
    page.locator('.mobile-menu summary').tap();assert page.locator('.mobile-menu').get_attribute('open') is not None
    page.locator('.mobile-menu a[href="/games/uk"]').tap();page.wait_for_url('**/games/uk');assert page.url.endswith('/games/uk'),(device,path,page.url)
   results.append({'device_emulation':device,'path':path,'overflow':False,'menu':'pass'})
  ctx.close()
 print('PASS touch profiles',flush=True)
 ctx=b.new_context(viewport={'width':640,'height':480},java_script_enabled=False,bypass_csp=True)
 page=ctx.new_page()
 for path in paths:
  page.goto(base+path);assert page.evaluate('document.documentElement.scrollWidth <= innerWidth')
  results.append({'viewport':'640x480 landscape','path':path,'overflow':False,'js_disabled':True})
 # A 1280px desktop at 200% browser zoom has a 640 CSS-pixel layout viewport.
 # Increase root text separately to check text enlargement without clipping.
 for path in paths:
  page.goto(base+path);page.evaluate("document.documentElement.style.fontSize='200%'")
  assert page.evaluate('document.documentElement.scrollWidth <= innerWidth'),('text200',path)
  results.append({'text_enlargement':'200% at 640 CSS px','path':path,'overflow':False})
 ctx.close();b.close()
(Path(__file__).resolve().parents[1]/'reports/site-redesign/device-results.json').write_text(json.dumps({'engine':'Chromium; mobile profiles are emulation, not Safari or physical devices','checks':results,'passed':True},ensure_ascii=False,indent=2)+'\n')
print('PASS',len(results),'touch-profile, landscape and text-enlargement checks')
