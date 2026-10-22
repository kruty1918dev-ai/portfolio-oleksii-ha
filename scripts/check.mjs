import fs from 'node:fs/promises';
import path from 'node:path';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {fileURLToPath} from 'node:url';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const out=path.join(root,'dist');
const json=async file=>JSON.parse(await fs.readFile(path.join(root,file),'utf8'));
const [routes,config,data,policy,websitePolicy,controller,media,selection]=await Promise.all([
 json('dist/routes.json'),json('vercel.json'),json('site/content.json'),
 json('legal/quiet-camp/content.json'),json('legal/website/content.json'),
 json('legal/controller.json'),json('docs/media-sources.json'),json('docs/selected-media-2026-10-22.json')
]);
const domain=data.profile.domain;
assert.equal(new URL(domain).protocol,'https:','Public canonical origin must use HTTPS');
const known=new Map(routes.map(r=>[r.path,r]));
assert.equal(routes.length,33,'The complete site needs 11 routes in all three languages');
assert.equal(known.size,routes.length,'Duplicate routes');
assert.equal(routes.length,(8+data.projects.length)*3,'Every project and core page needs all languages');
const expectedSlugs=['','games','portfolio','about','quiet-camp','moyva','fun-and-ball','quiet-camp/legal','impressum','privacy','quiet-camp/privacy'];
for(const slug of expectedSlugs)for(const lang of ['en','uk','de']){
 const target='/'+[slug,...(lang==='en'?[]:[lang])].filter(Boolean).join('/');
 assert(known.has(target),`Missing translated route ${target}`);
}
const htmlByPath=new Map(await Promise.all(routes.map(async r=>[r.path,await fs.readFile(path.join(out,r.file),'utf8')])));
const notFound=await fs.readFile(path.join(out,'404.html'),'utf8');
const decode=value=>value.replace(/&amp;/g,'&').replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&lt;/g,'<').replace(/&gt;/g,'>');
function tags(html,name){
 return [...html.matchAll(new RegExp(`<${name}\\b([^>]*?)>`,'gi'))].map(match=>{
  const attributes={};
  for(const attr of match[1].matchAll(/([^\s=\/]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g))
   attributes[attr[1].toLowerCase()]=decode(attr[2]??attr[3]??attr[4]??'');
  return attributes;
 });
}
const hasClass=(tag,name)=>(tag.class||'').split(/\s+/).includes(name);
const unfinishedCopy=/\b(?:draft|review copy|release candidate)\b|not (?:yet )?(?:ready|cleared|approved) (?:for|to)|verification pending|remaining operational checks|чернетк|кандидат|незавершені (?:операційні )?перевірки|не вважається повністю допущеним|Prüffassung|Freigabe ausstehend|noch nicht freigegeben|ausstehende Prüfungen/i;
const publicText=html=>decode(html.replace(/<head\b[\s\S]*?<\/head>/gi,'').replace(/<[^>]+>/g,' ')).replace(/\s+/g,' ');
const mediaByFile=new Map();
for(const item of media){
 const file=path.basename(item.file);
 assert(!mediaByFile.has(file),`Conflicting source records for ${file}`);
 mediaByFile.set(file,{...item,owner:item});
 for(const variant of item.variants||[])mediaByFile.set(variant.file,{...variant,owner:item});
}
const selected=new Map(selection.assets.map(item=>[path.basename(item.file),item]));
const verifiedMedia=new Set();
async function checkMedia(file,context){
 const item=mediaByFile.get(file);assert(item,`${context}: missing media/source record for ${file}`);
 assert(Number.isInteger(item.width)&&item.width>0&&Number.isInteger(item.height)&&item.height>0,`${file}: invalid source dimensions`);
 assert(typeof item.owner.source==='string'&&item.owner.source.trim(),`${file}: source provenance missing`);
 if(!verifiedMedia.has(file)){
  const bytes=await fs.readFile(path.join(out,'media',file));
  if(item.sha256)assert.equal(createHash('sha256').update(bytes).digest('hex'),item.sha256,`${file}: prepared image differs from recorded SHA-256`);
  if(item.bytes)assert.equal(bytes.length,item.bytes,`${file}: prepared image byte size differs from source record`);
  verifiedMedia.add(file);
 }
 return item;
}
for(const project of data.projects){
 for(const file of new Set([project.hero,...project.gallery])){
  const item=await checkMedia(file,project.slug);
  if(project.slug==='quiet-camp')assert(selected.has(file),`${project.slug}: ${file} is not an approved selection; archive-only placement/debug frames must not be promoted`);
  if(file.startsWith('qc-selected-')||file.startsWith('studio-moyva-')){
   const source=selected.get(path.basename(item.owner.file));assert(source,`${file}: selected source manifest missing`);
   assert(/^[a-f0-9]{40}$/i.test(source.sourceCommit||''),`${file}: pinned source commit missing`);
   assert(/^[a-f0-9]{64}$/i.test(source.originalSha256||''),`${file}: original image SHA-256 missing`);
   assert(source.sourcePath&&source.kind&&source.dateEvidence,`${file}: capture provenance incomplete`);
   assert(source.capturedDate||source.sourceSnapshotDate,`${file}: capture date or honestly identified source snapshot missing`);
   assert(!/archive only|avoid primary/i.test(source.recommended||''),`${file}: archived diagnostic frame selected for publication`);
   assert(item.owner.variants?.length,`${file}: responsive copies missing`);
  }
 }
}
let links=0,images=0;
function checkShell(html,label){
 assert.equal(tags(html,'h1').length,1,label+' needs one h1');
 assert.equal(tags(html,'header').filter(tag=>hasClass(tag,'site-header')).length,1,label+' shared site header');
 assert.equal(tags(html,'footer').filter(tag=>hasClass(tag,'site-footer')).length,1,label+' shared site footer');
 assert(tags(html,'body').some(tag=>hasClass(tag,'theme-studio')),label+' unified studio theme');
 assert(!/\btheme-(?:camp|atlas|play)\b|\bquiet-promotion\b/.test(tags(html,'body')[0]?.class||''),label+' obsolete independent page theme');
 assert(tags(html,'main').some(tag=>tag.id==='main'&&tag.tabindex==='-1'),label+' keyboard skip destination');
 assert(tags(html,'a').some(tag=>hasClass(tag,'skip')&&tag.href==='#main'),label+' skip link');
 assert(tags(html,'details').some(tag=>hasClass(tag,'mobile-menu')),label+' native mobile menu');
 assert(tags(html,'link').some(tag=>tag.rel==='stylesheet'&&tag.href==='/assets/site.css'),label+' shared stylesheet');
 const scripts=tags(html,'script');
 assert.equal(scripts.length,1,label+' only the shared progressive-interaction script');
 assert(scripts[0].src==='/assets/site.js'&&Object.hasOwn(scripts[0],'defer'),label+' shared deferred site.js');
 assert(tags(html,'link').filter(tag=>tag.rel==='stylesheet').every(tag=>tag.href.startsWith('/assets/')),label+' external stylesheet or font');
 assert(!tags(html,'video').some(tag=>Object.hasOwn(tag,'autoplay')),label+' automatic video');
 assert(!/\{\{\s*(?:legalName|publicName|postalAddress|ukrainianName|privacyEmail|supportEmail|brand|country)\s*\}\}/.test(html),label+' unresolved controller tokens');
 assert(!/\breview-note\b|id="review-heading"/.test(html),label+' public internal review notice');
 assert(!unfinishedCopy.test(publicText(html)),label+' public unfinished/audit copy');
 for(const asset of ['script','img','source','iframe','embed','object'].flatMap(name=>tags(html,name))){
  for(const attr of ['src','data'])if(asset[attr])assert(asset[attr].startsWith('/'),label+' external asset or tracking request: '+asset[attr]);
 }
 assert(!/Hannover|Ausbildung|Lebenslauf|umzugsbereit|B1-Prüfung|18 Jahre alt/i.test(html),label+' outdated recruitment copy');
 const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(match=>match[1]);
 assert.equal(ids.length,new Set(ids).size,label+' duplicate IDs');
}
const internalPath=url=>url.pathname==='/'?'/':url.pathname.replace(/\/$/,'');
async function checkLocal(value,r){
 const url=new URL(value,domain+r.path);
 if(url.origin!==domain)return;
 let targetPath=internalPath(url);
 const redirect=config.redirects.find(item=>item.source===targetPath);
 if(redirect){const destination=new URL(redirect.destination,domain);targetPath=internalPath(destination);if(!url.hash)url.hash=destination.hash;}
 if(known.has(targetPath)){
  if(url.hash)assert(htmlByPath.get(targetPath).includes(`id="${decodeURIComponent(url.hash.slice(1))}"`),`Missing anchor ${r.path}: ${value}`);
 }else await fs.access(path.join(out,decodeURIComponent(targetPath.slice(1)))).catch(()=>{throw Error(`Broken local reference ${r.path}: ${value}`);});
 links++;
}
for(const r of routes){
 const html=htmlByPath.get(r.path);checkShell(html,r.path);
 assert.equal(tags(html,'html')[0]?.lang,r.lang,r.path+' language');
 assert(!tags(html,'meta').some(tag=>tag.name==='robots'&&/noindex/i.test(tag.content||'')),r.path+' public page indexing');
 assert(tags(html,'link').some(tag=>tag.rel==='canonical'&&tag.href===domain+r.path),r.path+' canonical');
 const alternates=tags(html,'link').filter(tag=>tag.rel==='alternate');assert.equal(alternates.length,4,r.path+' language alternatives');
 for(const lang of ['en','uk','de']){
  const target=domain+'/'+[r.slug,...(lang==='en'?[]:[lang])].filter(Boolean).join('/');
  assert(alternates.some(tag=>tag.hreflang===lang&&tag.href===target),r.path+' language alternative '+lang);
  assert(tags(html,'a').some(tag=>tag.hreflang===lang&&tag.href===target.slice(domain.length)),r.path+' language switch preserves page '+lang);
 }
 for(const tag of [...tags(html,'a'),...tags(html,'link'),...tags(html,'img'),...tags(html,'script')])for(const key of ['href','src']){
  if(tag[key])await checkLocal(tag[key],r);
 }
 for(const anchor of tags(html,'a')){
  if(!anchor.href||anchor.hreflang||anchor.lang)continue;
  const url=new URL(anchor.href,domain+r.path),target=known.get(internalPath(url));
  if(url.origin===domain&&target)assert.equal(target.lang,r.lang,`${r.path}: internal link loses selected language: ${anchor.href}`);
 }
 // The modal's full-resolution image is populated dynamically; layout and
 // responsive source checks apply to the images rendered in page content.
 const contentHtml=html.replace(/<dialog\b[\s\S]*?<\/dialog>/gi,'');
 for(const img of tags(contentHtml,'img')){
  assert(Object.hasOwn(img,'alt'),r.path+' image alternative text missing');
  assert(img.src?.startsWith('/'),r.path+' external or missing image source');
  if(img.src.startsWith('/media/')){
   const item=await checkMedia(path.basename(img.src),r.path);images++;
   assert.equal(Number(img.width),item.width,r.path+' image width '+img.src);assert.equal(Number(img.height),item.height,r.path+' image height '+img.src);
   if(item.owner.variants?.length)assert(img.srcset&&img.sizes,r.path+' responsive source list or sizes missing for '+img.src);
   if(img.srcset){
    const widths=new Set();
    for(const candidate of img.srcset.split(',')){
     const match=candidate.trim().match(/^\/media\/([^\s]+)\s+(\d+)w$/);assert(match,r.path+' invalid responsive source '+candidate);
     const variant=await checkMedia(match[1],r.path);assert.equal(variant.width,Number(match[2]),match[1]+' responsive width descriptor');
     assert(!widths.has(variant.width),img.src+' duplicate responsive widths');widths.add(variant.width);
     assert(Math.abs(variant.height-item.owner.height*variant.width/item.owner.width)<=1,match[1]+' responsive image changed aspect ratio');
    }
   }
  }
 }
 if(r.path!=='/')assert(config.rewrites.some(item=>item.source===r.path&&item.destination==='/'+r.file),r.path+' rewrite');
 if(['privacy','quiet-camp/privacy','impressum'].includes(r.slug)){
  assert(html.includes(controller.legalName)&&html.includes(controller.postalAddress),r.path+' complete confirmed controller identity/address');
  assert(html.includes(controller.privacyEmail),r.path+' privacy contact');
 }
 if(r.slug==='privacy'||r.slug==='quiet-camp/privacy'){
  const source=r.slug==='privacy'?websitePolicy[r.lang]:policy[r.lang],expected=r.slug==='privacy'?8:14;
  assert.equal(source.sections.length,expected,r.path+' source policy completeness');
  const sections=tags(html,'section').filter(tag=>hasClass(tag,'policy-section'));
  assert.deepEqual(sections.map(tag=>tag.id),source.sections.map(section=>section.id),r.path+' all policy sections in order');
  if(r.slug==='quiet-camp/privacy'){
   assert(html.includes(controller.supportEmail),r.path+' game support contact');
   assert(tags(html,'meta').some(tag=>tag.name==='quiet-camp-policy-revision'&&tag.content===source.revision),r.path+' policy revision');
  }
 }
 const viewers=tags(html,'dialog').filter(tag=>tag.id==='image-viewer');
 if(tags(html,'a').some(tag=>Object.hasOwn(tag,'data-gallery'))){
  assert.equal(viewers.length,1,r.path+' gallery viewer');
  assert(tags(html,'span').some(tag=>Object.hasOwn(tag,'data-count')&&tag['aria-live']==='polite'),r.path+' announced gallery position');
 }
}
checkShell(notFound,'404');
assert(tags(notFound,'a').some(tag=>tag.href==='/'),'404 route home');
const sitemap=await fs.readFile(path.join(out,'sitemap.xml'),'utf8');
for(const r of routes)assert(sitemap.includes('<loc>'+domain+r.path+'</loc>'),r.path+' sitemap');
for(const file of ['assets/site.css','assets/legal.css']){
 const css=await fs.readFile(path.join(out,file),'utf8');assert(!/@import\s|url\(\s*['"]?https?:\/\//i.test(css),file+' external stylesheet/font requests');
}
console.log(`PASS: ${routes.length} translated routes + 404, shared shell and progressive JS, ${links} local references, ${images} sourced images, responsive media integrity, localized navigation, complete public policies and metadata.`);
