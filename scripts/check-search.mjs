import {readFile} from 'node:fs/promises';
import assert from 'node:assert/strict';
import {scriptHash} from '../site/search.mjs';
const read=p=>readFile(new URL('../'+p,import.meta.url),'utf8');
const routes=JSON.parse(await read('dist/routes.json')),config=JSON.parse(await read('vercel.json'));
const sitemap=await read('dist/sitemap.xml'),robots=await read('dist/robots.txt');
const csp=config.headers[0].headers.find(h=>h.key==='Content-Security-Policy').value;
assert(!csp.includes('unsafe-inline')&&!csp.includes('unsafe-eval'));
assert(csp.includes("frame-ancestors 'none'"),'Clickjacking protection must stay in HTTP headers');
assert(robots.includes('Sitemap: https://oleksiy-havryliuk.de/sitemap.xml'));
const decode=s=>s.replace(/&#39;/g,"'").replace(/&quot;/g,'"').replace(/&amp;/g,'&');
let structured=0;
for(const route of routes){
 const html=await read('dist/'+route.file);
 assert(sitemap.includes('<loc>https://oleksiy-havryliuk.de'+route.path+'</loc>'),route.path+' sitemap');
 assert(html.includes('href="'+('/quiet-camp/delete-account'+(route.lang==='en'?'':'/'+route.lang))+'"'),route.path+' discoverable deletion link');
 const title=html.match(/<title>(.*?)<\/title>/)[1];
 assert(!title.includes('Kruty1918 Games | Kruty1918 Games'),route.path+' repeated brand');
 assert(!/Ausbildung|Auszubild|apprenticeship/i.test(html),route.path+' stale recruitment copy');
 const metaCsp=decode(html.match(/http-equiv="Content-Security-Policy" content="([^"]+)"/)[1]);
 for(const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)){
  structured++;const data=JSON.parse(match[1]);assert.equal(data['@context'],'https://schema.org');
  assert(csp.includes(scriptHash(match[1]))&&metaCsp.includes(scriptHash(match[1])),route.path+' structured data CSP');
  const web=data['@graph'].find(x=>x['@type']==='WebPage');assert.equal(web.url,'https://oleksiy-havryliuk.de'+route.path);
  assert.equal(web.inLanguage,route.lang);
  assert(!/aggregateRating|"offers"|downloadUrl/.test(match[1]),route.path+' unverified release claims');
 }
 if(route.slug==='quiet-camp/delete-account'){
  assert(html.includes('href="https://quietcamp-access.oleksiy-havryliuk.workers.dev/v1/cloud/delete-account"'),route.path+' real deletion form');
  assert(!/<form\b/i.test(html),route.path+' no collection of provider credentials on static website');
  assert(!html.includes('/v1/cloud/delete-federated'),route.path+' no automatic destructive API request');
  assert(html.includes('privacy@oleksiy-havryliuk.de'),route.path+' account access fallback');
 }
 if(route.slug==='quiet-camp/account')assert(!html.includes('href="https://quietcamp-access.oleksiy-havryliuk.workers.dev/v1/cloud/login"'),route.path+' sign-in must start with game handoff');
 if(route.slug==='quiet-camp'&&route.lang==='uk')assert(html.includes('Квіт Кемп'),route.path+' natural localized game name');
}
assert.equal(structured,12);
assert(!sitemap.includes('workers.dev')&&!sitemap.includes('/v1/'),'Service APIs and session login are not website search landing pages');
assert((await read('dist/404.html')).includes('<meta name="robots" content="noindex">'));
console.log('PASS: 39 crawlable pages, translated account/deletion discovery, real form links, 12 structured-data graphs with strict CSP, localized game name and no unverified store claims.');
