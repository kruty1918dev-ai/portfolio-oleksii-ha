import {escape,route} from './layout.mjs';
export function legalMarkup(markup,controller,lang='en'){
 const resolved=markup.replace(/\{\{(legalName|publicName|ukrainianName|postalAddress)\}\}/g,(_,key)=>escape(controller[key]));
 return resolved.replace(/href="(\/[^"\s]*)"/g,(whole,href)=>{
  const url=new URL(href,'https://local.invalid');
  const slug=url.pathname.replace(/^\//,'').replace(/\/(?:uk|de)\/?$/,'').replace(/\/$/,'');
  if(!['impressum','privacy','quiet-camp/privacy','quiet-camp/legal','quiet-camp','about'].includes(slug))return whole;
  return `href="${route(slug,lang)+url.search+url.hash}"`;
 });
}
