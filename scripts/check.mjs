import fs from 'node:fs/promises';
import path from 'node:path';
import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const out=path.join(root,'dist');
const routes=JSON.parse(await fs.readFile(path.join(out,'routes.json'),'utf8'));
const config=JSON.parse(await fs.readFile(path.join(root,'vercel.json'),'utf8'));
const data=JSON.parse(await fs.readFile(path.join(root,'site/content.json'),'utf8'));
const known=new Map(routes.map(r=>[r.path,r.file]));
assert.equal(routes.length,(7+data.projects.length)*3,'Every project and core page needs three languages');
const sharedCss='/assets/site.css';
let links=0;
for(const r of routes){
 const html=await fs.readFile(path.join(out,r.file),'utf8');
 assert.equal((html.match(/<h1[ >]/g)||[]).length,1,r.path+' needs one h1');
 assert(html.includes(`<html lang="${r.lang}">`),r.path+' lang');
 assert(html.includes(`rel="canonical" href="https://oleksiy-havryliuk.de${r.path}"`),r.path+' canonical');
 assert.equal((html.match(/rel="alternate"/g)||[]).length,4,r.path+' language alternatives');
 assert(html.includes(`href="${sharedCss}"`),r.path+' shared styling');
 assert(!/\{\{(?:legalName|publicName|postalAddress|ukrainianName)\}\}/.test(html),r.path+' unresolved controller tokens');
 assert(!/noindex|fonts\.googleapis|fonts\.gstatic|images\.unsplash|googletagmanager|google-analytics/i.test(html),r.path+' tracking/metadata');
 assert(!/Hannover|Ausbildung|Lebenslauf|umzugsbereit|B1-Prüfung|18 Jahre alt/i.test(html),r.path+' outdated recruitment content');
 const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);assert.equal(ids.length,new Set(ids).size,r.path+' duplicate ids');
 for(const m of html.matchAll(/(?:href|src)="([^"]+)"/g)){
  const value=m[1];
  if(!value.startsWith('/')&&!value.startsWith('#'))continue;
  const u=new URL(value,'https://oleksiy-havryliuk.de'+r.path);
  const targetPath=u.pathname==='/'?'/':u.pathname.replace(/\/$/,'');
  const target=known.has(targetPath)?path.join(out,known.get(targetPath)):path.join(out,targetPath.slice(1));
  await fs.access(target).catch(()=>{throw Error(`Broken local link ${r.path}: ${value}`);});links++;
  if(u.hash&&known.has(targetPath)){const targetHtml=await fs.readFile(target,'utf8');assert(targetHtml.includes(`id="${u.hash.slice(1)}"`),`Missing anchor ${r.path}: ${value}`);}
 }
 if(r.path!=='/')assert(config.rewrites.some(x=>x.source===r.path&&x.destination==='/'+r.file),r.path+' rewrite');
 if(r.slug==='impressum'){
  assert(html.includes('Oleksii Havryliuk')&&html.includes('23966 Wismar'),r.path+' confirmed legal identity');
 }
 if(r.slug==='privacy'){
  assert.equal((html.match(/class="policy-section"/g)||[]).length,8,r.path+' website privacy sections');
  assert(html.includes('review-note')&&html.includes('privacy@oleksiy-havryliuk.de'),r.path+' website legal qualifications');
 }
 if(r.slug==='quiet-camp/privacy'){
  assert.equal((html.match(/class="policy-section"/g)||[]).length,14,r.path+' legal sections');
  assert(html.includes('privacy@oleksiy-havryliuk.de')&&html.includes('support@oleksiy-havryliuk.de'),r.path+' legal contacts');
  assert(html.includes('review-note'),r.path+' unresolved release qualifications');
 }
}
const sitemap=await fs.readFile(path.join(out,'sitemap.xml'),'utf8');
for(const r of routes)assert(sitemap.includes('<loc>https://oleksiy-havryliuk.de'+r.path+'</loc>'),r.path+' sitemap');
console.log(`PASS: ${routes.length} pages, ${links} local links/assets/anchors, shared design, translated metadata, routing, no recruitment copy or external assets, all legal sections.`);
