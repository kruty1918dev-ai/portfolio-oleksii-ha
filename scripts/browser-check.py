#!/usr/bin/env python3
"""Optional browser QA: Python Playwright + Chromium + local axe-core file.
No browser/test package is required to build or publish this static site.
"""
import argparse,json
from datetime import date
from pathlib import Path
from playwright.sync_api import sync_playwright
p=argparse.ArgumentParser();p.add_argument('--base',default='http://127.0.0.1:4173');p.add_argument('--axe',required=True);p.add_argument('--browser');p.add_argument('--output',required=True);args=p.parse_args()
root=Path(__file__).resolve().parents[1];out=root/args.output;shots=out/'screenshots';shots.mkdir(parents=True,exist_ok=True)
routes=json.loads((root/'dist/routes.json').read_text(encoding='utf8'));result={'base':args.base,'date':date.today().isoformat(),'layouts':[],'accessibility':[],'interactions':[],'network':[]}
with sync_playwright() as p:
 b=p.chromium.launch(executable_path=args.browser,headless=True);result['browser']=b.version
 ctx=b.new_context(java_script_enabled=False,reduced_motion='reduce');page=ctx.new_page();requests=[];page.on('request',lambda req:requests.append(req.url))
 for r in routes:
  for width in [320,375,390,768,1440]:
   page.set_viewport_size({'width':width,'height':900 if width>800 else 844});resp=page.goto(args.base+r['path'],wait_until='load');page.wait_for_timeout(30)
   assert resp.status==200,(r['path'],resp.status)
   assert page.locator('h1').count()==1
   assert page.locator('html').get_attribute('lang')==r['lang']
   sizes=page.evaluate('({viewport:innerWidth,document:document.documentElement.scrollWidth,body:document.body.scrollWidth})')
   assert sizes['document']<=width and sizes['body']<=width,(r['path'],width,sizes)
   assert page.locator('main').inner_text().strip()
   result['layouts'].append({'path':r['path'],'width':width,'overflow':False,'js_disabled':True})
   if r['lang']=='uk' and width in [390,1440]:
    tag=(r['slug'] or 'home').replace('/','-');page.screenshot(path=str(shots/f'{tag}-uk-{width}.png'))
 assert all(u.startswith(args.base) for u in requests)
 assert not ctx.cookies()
 result['network']={'third_party_requests':0,'cookies':0,'javascript_required_for_content':False}
 ctx.close()
 ctx=b.new_context(viewport={'width':390,'height':844},reduced_motion='reduce');page=ctx.new_page();page.goto(args.base+'/uk');page.keyboard.press('Tab');assert page.locator('.skip').evaluate('(e)=>e===document.activeElement');page.keyboard.press('Enter');assert page.locator('main').evaluate('(e)=>e===document.activeElement')
 page.locator('.mobile-menu summary').focus();page.keyboard.press('Enter');assert page.locator('.mobile-menu').get_attribute('open') is not None
 page.locator('.mobile-menu a[href="/portfolio/uk"]').click();assert page.url.endswith('/portfolio/uk')
 page.locator('.languages a[lang="de"]').click();assert page.url.endswith('/portfolio/de')
 page.locator('.languages a[lang="en"]').click();assert page.url.endswith('/portfolio')
 page.goto(args.base+'/moyva/uk');opener=page.locator('[data-gallery]').first;opener.click();dialog=page.locator('dialog');assert dialog.evaluate('(e)=>e.open')
 count=dialog.locator('[data-count]').inner_text();page.keyboard.press('ArrowRight');assert dialog.locator('[data-count]').inner_text()!=count
 page.keyboard.press('Escape');assert not dialog.evaluate('(e)=>e.open');assert opener.evaluate('(e)=>e===document.activeElement')
 page.goto(args.base+'/quiet-camp/privacy/uk');page.locator('.policy-mobile-toc summary').click();page.locator('.policy-mobile-toc a[href="#rights"]').click();assert page.url.endswith('#rights')
 page.goto(args.base+'/about/uk');page.locator('.actions a[href="#contact"]').click();assert page.url.endswith('#contact')
 assert page.goto(args.base+'/missing-page').status==404
 assert page.goto(args.base+'/cv').url.endswith('/about')
 result['interactions']=['Keyboard skip link focuses main','Native mobile menu opens and reaches portfolio','Languages retain current page','Gallery opens, keyboard next works, Escape closes and restores focus','Privacy contents reaches rights','Contact action reaches correct section','Unknown path returns HTTP 404','Legacy /cv redirects to /about']
 ctx.close()
 ctx=b.new_context(bypass_csp=True);page=ctx.new_page()
 for r in routes:
  for width in ([390,1440] if r['lang']=='uk' else [390]):
   page.set_viewport_size({'width':width,'height':900});page.goto(args.base+r['path']);page.add_script_tag(path=args.axe)
   scan=page.evaluate("async()=>await axe.run(document,{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21a','wcag21aa','wcag22aa','best-practice']}})")
   result['accessibility'].append({'path':r['path'],'width':width,'violations':scan['violations'],'incomplete':scan['incomplete']})
 ctx.close();b.close()
result['passed']=all(not x['violations'] for x in result['accessibility'])
(out/'browser-results.json').write_text(json.dumps(result,ensure_ascii=False,indent=2)+'\n',encoding='utf8')
print(json.dumps({'passed':result['passed'],'layouts':len(result['layouts']),'axe_scans':len(result['accessibility']),'failures':[(x['path'],x['width'],[v['id'] for v in x['violations']]) for x in result['accessibility'] if x['violations']]},indent=2))
assert result['passed'],'Accessibility errors are recorded in browser-results.json'
