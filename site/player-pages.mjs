import {escape as e,route,arrow} from './layout.mjs';

export const deletionForm='https://quietcamp-access.oleksiy-havryliuk.workers.dev/v1/cloud/delete-account';
export const accountPortal='https://quietcamp-access.oleksiy-havryliuk.workers.dev/v1/cloud/account';
export function playerPage(content,lang,kind,studio){
 const c=content[kind],deletion=kind==='delete';
 const link=(slug,label)=>`<a class="document-link" href="${route(slug,lang)}"><span>${e(label)}</span>${arrow}</a>`;
 const sections=c.sections.map(([title,paragraphs])=>`<section class="section"><h2>${e(title)}</h2>${paragraphs.map(p=>`<p>${e(p)}</p>`).join('')}</section>`).join('');
 const steps=deletion?`<section class="section"><h2>${e(c.stepsTitle)}</h2><ol>${c.steps.map(p=>`<li>${e(p)}</li>`).join('')}</ol></section>`:'';
 return `<div class="container"><header class="page-heading"><nav class="breadcrumbs" aria-label="Quiet Camp"><a href="${route('quiet-camp',lang)}">Quiet Camp</a><span aria-hidden="true">/</span><span>${e(c.title)}</span></nav><p class="eyebrow">Quiet Camp / Kruty1918 Games</p><h1>${e(c.title)}</h1><p class="intro">${e(c.intro)}</p><div class="actions"><a class="button" href="${deletion?deletionForm:accountPortal+'?lang='+lang}" rel="external">${e(deletion?c.openForm:c.openAccount)}${arrow}</a></div></header><div class="reading">${steps}${sections}<p><a href="mailto:privacy@oleksiy-havryliuk.de">privacy@oleksiy-havryliuk.de</a></p></div><nav class="document-list" aria-label="${e(studio.documents)}">${link(deletion?'quiet-camp/account':'quiet-camp/delete-account',deletion?content.accountLabel:content.deleteLabel)}${link('quiet-camp/legal',studio.documents)}${link('quiet-camp/privacy',studio.gamePrivacy)}</nav></div>`;
}
