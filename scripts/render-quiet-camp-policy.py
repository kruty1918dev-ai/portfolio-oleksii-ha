#!/usr/bin/env python3
"""Render complete static language pages. No network, packages, SDKs or publication."""
import json, shutil
from html import escape
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
SOURCE=ROOT/'legal/quiet-camp'
OUT=ROOT/'public/quiet-camp/privacy'
BASE='https://oleksiy-havryliuk.de/quiet-camp/privacy'
PATHS={'en':'','uk':'/uk','de':'/de'}
NAMES={'en':'English','uk':'Українська','de':'Deutsch'}
LABELS={'en':'EN','uk':'UA','de':'DE'}
data=json.loads((SOURCE/'content.json').read_text(encoding='utf-8'))
keys=list(data['en'])
for lang,c in data.items():
    assert set(c)==set(keys), f'Missing top-level translations: {lang}'
    assert [s['id'] for s in c['sections']]==[s['id'] for s in data['en']['sections']]
    assert len(c['rows'])==5 and len(c['sections'])==14
    for s,ref in zip(c['sections'],data['en']['sections']):
        assert len(s['paragraphs'])==len(ref['paragraphs']), (lang,s['id'])
    def toc():
        return '<ol class="toc">'+''.join(f'<li><a href="#{s["id"]}">{escape(s["title"])}</a></li>' for s in c['sections'])+'</ol>'
    nav=''.join(f'<a href="{BASE+PATHS[l]}" lang="{l}" hreflang="{l}" aria-label="{LABELS[l]} — {NAMES[l]}"'+(' aria-current="page"' if l==lang else '')+f'>{LABELS[l]}</a>' for l in ['uk','en','de'])
    # Absolute origin links would leave a local preview. Paths retain exact production routing.
    nav=nav.replace('href="https://oleksiy-havryliuk.de','href="')
    alternates='\n'.join(f'<link rel="alternate" hreflang="{l}" href="{BASE+PATHS[l]}">' for l in ['en','uk','de'])+f'\n<link rel="alternate" hreflang="x-default" href="{BASE}">'
    sections=[]
    for i,s in enumerate(c['sections'],1):
        body=''.join('<p>'+v+'</p>' for v in s['paragraphs'])
        if s.get('table'):
            heads=''.join(f'<th id="col-{j}" scope="col" role="columnheader">{escape(h)}</th>' for j,h in enumerate(c['tableHead']))
            rows=''.join('<tr role="row">'+''.join(f'<td headers="col-{j}" role="cell"><span class="cell-label" aria-hidden="true">{escape(c["tableHead"][j])}</span>{escape(cell)}</td>' for j,cell in enumerate(row))+'</tr>' for row in c['rows'])
            body+=f'<div class="table-wrap"><table role="table"><caption>{escape(c["tableCaption"])}</caption><thead role="rowgroup"><tr role="row">{heads}</tr></thead><tbody role="rowgroup">{rows}</tbody></table></div>'
        sections.append(f'<section id="{s["id"]}" class="policy-section" aria-labelledby="heading-{s["id"]}"><span class="section-number" aria-hidden="true">{i:02}</span><h2 id="heading-{s["id"]}">{i}. {escape(s["title"])}</h2>{body}</section>')
    html=f'''<!DOCTYPE html>
<html lang="{lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta name="color-scheme" content="light">
<meta name="theme-color" content="#202d27">
<meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'self'; img-src 'self'; base-uri 'none'; form-action 'none'">
<meta name="referrer" content="no-referrer">
<title>{escape(c['title'])} | Quiet Camp — Kruty1918 Games</title>
<meta name="description" content="{escape(c['description'],quote=True)}">
<link rel="canonical" href="{BASE+PATHS[lang]}">
{alternates}
<link rel="icon" type="image/png" href="/quiet-camp/privacy/brand-icon.png">
<link rel="stylesheet" href="/quiet-camp/privacy/policy.css">
</head>
<body id="top">
<a class="skip" href="#policy">{escape(c['skip'])}</a>
<header class="masthead"><div class="wrap">
<a class="brand" href="https://kruty1918dev-ai.github.io/quiet-camp/"><img src="/quiet-camp/privacy/brand-icon.png" width="48" height="48" alt=""><span>Quiet Camp<small>Kruty1918 Games</small></span></a>
<div class="header-tools"><a class="game-link" href="https://kruty1918dev-ai.github.io/quiet-camp/">{escape(c['back'])}</a><nav class="languages" aria-label="{escape(c['languages'])}">{nav}</nav></div>
</div></header>
<section class="hero" aria-labelledby="page-title"><div class="wrap hero-grid"><div><p class="eyebrow">{escape(c['legal'])}</p><h1 id="page-title">{escape(c['title'])}</h1><p class="lede">{escape(c['intro'])}</p></div>
<div class="metadata"><p><code>{escape(c['revision'])}</code></p><p><span>{escape(c['updated'])}</span><time datetime="{c['dateISO']}">{escape(c['date'])}</time></p><p><span>{escape(c['contact'])}</span><a href="mailto:privacy@oleksiy-havryliuk.de">privacy@oleksiy-havryliuk.de</a></p></div></div></section>
<div class="wrap document-grid">
<aside class="sidebar"><nav aria-label="{escape(c['toc'])}"><h2>{escape(c['toc'])}</h2>{toc()}</nav><div class="sidebar-contact"><p>Kruty1918 Games</p><a href="mailto:privacy@oleksiy-havryliuk.de">privacy@oleksiy-havryliuk.de</a></div></aside>
<main id="policy" tabindex="-1">
<details class="mobile-toc"><summary>{escape(c['toc'])}</summary>{toc()}</details>
<div class="review-note" role="note" aria-labelledby="review-heading"><p class="status">{escape(c['status'])}</p><h2 id="review-heading">{escape(c['noticeTitle'])}</h2><p>{escape(c['notice'])}</p></div>
{''.join(sections)}
<a href="#top">{escape(c['top'])}</a>
</main></div>
<footer class="footer"><div class="wrap"><div class="footer-grid"><div><strong>Kruty1918 Games</strong><p>Oleksiy Havryliuk</p><p>{escape(c['footerDeveloper'])}</p></div><div><p>{escape(c['contact'])}: <a href="mailto:privacy@oleksiy-havryliuk.de">privacy@oleksiy-havryliuk.de</a></p><p>{escape(c['support'])}: <a href="mailto:support@oleksiy-havryliuk.de">support@oleksiy-havryliuk.de</a></p></div></div><p class="footer-note">{escape(c['footerNote'])}</p><nav class="footer-nav" aria-label="{escape(c['back'])}"><a href="https://kruty1918dev-ai.github.io/quiet-camp/">Quiet Camp</a><a href="https://oleksiy-havryliuk.de/">Oleksiy Havryliuk</a></nav></div></footer>
</body></html>
'''
    dest=OUT/(lang if lang!='en' else '')
    dest.mkdir(parents=True,exist_ok=True)
    (dest/'index.html').write_text(html, encoding='utf-8')
shutil.copyfile(SOURCE/'policy.css',OUT/'policy.css')
shutil.copyfile(SOURCE/'brand-icon.png',OUT/'brand-icon.png')
print('Rendered en, uk, de: 14 sections each. No deployment performed.')
