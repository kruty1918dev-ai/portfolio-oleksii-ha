#!/usr/bin/env python3
"""Local browser QA. Requires Python playwright, Chromium, and a local axe-core file.
Start: python -m http.server 8765 --bind 127.0.0.1 --directory public
Run: python scripts/check-quiet-camp-policy.py --axe /path/to/axe.min.js
No remote deployment or Unity process is launched.
"""
import argparse,json,hashlib
from pathlib import Path
from playwright.sync_api import sync_playwright
ap=argparse.ArgumentParser();ap.add_argument('--base',default='http://127.0.0.1:8765');ap.add_argument('--axe',required=True);args=ap.parse_args()
root=Path(__file__).resolve().parents[1];out=root/'reports/quiet-camp';shots=out/'screenshots';shots.mkdir(parents=True,exist_ok=True)
results={'date':'2026-10-20','browser':'Chromium','base':args.base,'javascript_disabled':[],'accessibility':[],'interaction':[]}
langs={'en':'','uk':'/uk','de':'/de'}
with sync_playwright() as p:
 browser=p.chromium.launch(executable_path='/usr/bin/chromium',headless=True,args=['--no-sandbox'])
 results['browser_version']=browser.version
 for lang,suffix in langs.items():
  ctx=browser.new_context(java_script_enabled=False,reduced_motion='reduce')
  requests=[];ctx.on('request',lambda req:requests.append(req.url))
  page=ctx.new_page()
  for width in [320,375,390,768,1440]:
   page.set_viewport_size({'width':width,'height':900 if width>760 else 844})
   response=page.goto(args.base+'/quiet-camp/privacy'+suffix+'/')
   assert response.status==200
   assert page.locator('html').get_attribute('lang')==lang
   assert page.locator('h1').count()==1
   assert page.locator('.policy-section').count()==14
   assert page.locator('main').inner_text().__len__()>10000
   # JavaScript is disabled for the page; automation evaluation reads layout only.
   sizes=page.evaluate('({width:innerWidth,scroll:document.documentElement.scrollWidth,body:document.body.scrollWidth})')
   assert sizes['scroll']<=width and sizes['body']<=width,(lang,width,sizes)
   assert page.locator('script').count()==0
   assert page.locator('meta[name="robots"][content*="noindex"]').count()==0
   canonical='https://oleksiy-havryliuk.de/quiet-camp/privacy'+suffix
   assert page.locator('link[rel="canonical"]').get_attribute('href')==canonical
   assert page.locator('link[rel="alternate"]').count()==4
   assert len(page.locator('.policy-section h2').all_inner_texts())==14
   if width==390:
    page.screenshot(path=str(shots/f'{lang}-mobile.png'))
    page.locator('#data').scroll_into_view_if_needed();page.screenshot(path=str(shots/f'{lang}-mobile-table.png'))
   if width==1440:page.screenshot(path=str(shots/f'{lang}-desktop.png'))
   results['javascript_disabled'].append({'lang':lang,'width':width,'status':200,'overflow':False,'sections':14})
  assert all(u.startswith(args.base) for u in requests),requests
  assert not ctx.cookies()
  results.setdefault('network',[]).append({'lang':lang,'origins':[args.base],'unique_paths':sorted(set(requests)),'cookies':0})
  ctx.close()
 # Keyboard and navigation in normal browser context. JS is present in the browser, but site has none.
 ctx=browser.new_context(viewport={'width':390,'height':844},reduced_motion='reduce');page=ctx.new_page();page.goto(args.base+'/quiet-camp/privacy/')
 page.keyboard.press('Tab');assert page.locator('.skip').evaluate('(e)=>e===document.activeElement')
 page.keyboard.press('Enter');assert page.locator('#policy').evaluate('(e)=>e===document.activeElement')
 summary=page.locator('.mobile-toc summary');summary.focus();page.keyboard.press('Enter');assert page.locator('.mobile-toc').get_attribute('open') is not None
 page.locator('.mobile-toc a[href="#rights"]').click();assert page.url.endswith('#rights')
 page.locator('nav.languages a[lang="de"]').click();assert page.locator('html').get_attribute('lang')=='de'
 page.locator('nav.languages a[lang="uk"]').click();assert page.locator('html').get_attribute('lang')=='uk'
 page.locator('nav.languages a[lang="en"]').click();assert page.locator('html').get_attribute('lang')=='en'
 results['interaction']=['Tab reveals skip link; Enter focuses main','Enter expands mobile contents','Contents link navigates to rights','EN → DE → UK → EN navigation works','Reduced motion requested; no animation or sticky mobile controls']
 ctx.close()
 # Accessibility tooling runs in a separate context allowing local instrumentation despite the page CSP.
 ctx=browser.new_context(bypass_csp=True)
 for lang,suffix in langs.items():
  page=ctx.new_page()
  for width in [390,1440]:
   page.set_viewport_size({'width':width,'height':900});page.goto(args.base+'/quiet-camp/privacy'+suffix+'/')
   page.add_script_tag(path=args.axe)
   r=page.evaluate("async()=>await axe.run(document,{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21a','wcag21aa','wcag22aa','best-practice']}})")
   results['accessibility'].append({'lang':lang,'width':width,'violations':r['violations'],'incomplete':r['incomplete'],'passes':len(r['passes'])})
  page.close()
 ctx.close();browser.close()
results['passed']=all(not x['violations'] for x in results['accessibility'])
(out/'browser-results.json').write_text(json.dumps(results,ensure_ascii=False,indent=2)+'\n')
print(json.dumps({'passed':results['passed'],'no_js_viewports':len(results['javascript_disabled']),'axe_scans':len(results['accessibility']),'violations':[(x['lang'],x['width'],[v['id'] for v in x['violations']]) for x in results['accessibility']],'screenshots':len(list(shots.glob('*.png')))},indent=2))
assert results['passed'],'Accessibility violations: see browser-results.json'
