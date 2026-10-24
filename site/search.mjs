import {createHash} from 'node:crypto';

export function structuredData(data,slug,lang,title,description){
 if(!['','quiet-camp','quiet-camp/account','quiet-camp/delete-account'].includes(slug))return '';
 const origin=data.profile.domain,url=origin+'/'+[slug,...(lang==='en'?[]:[lang])].filter(Boolean).join('/');
 const organization={'@type':'Organization','@id':origin+'/#studio',name:'Kruty1918 Games',url:origin+'/',founder:{'@id':origin+'/#developer'}};
 const developer={'@type':'Person','@id':origin+'/#developer',name:'Oleksiy Havryliuk',alternateName:['Oleksii Havryliuk','Олексій Гаврилюк'],url:origin+'/about',sameAs:[data.profile.github]};
 const website={'@type':'WebSite','@id':origin+'/#website',name:'Kruty1918 Games',alternateName:'Kruty1918',url:origin+'/',inLanguage:['en','uk','de'],publisher:{'@id':origin+'/#studio'}};
 const document={'@type':'WebPage','@id':url+'#page',name:title,description,url,inLanguage:lang,isPartOf:{'@id':origin+'/#website'}};
 const graph=[website,organization,developer,document];
 if(slug==='quiet-camp')graph.push({'@type':'VideoGame','@id':origin+'/quiet-camp#game',name:'Quiet Camp',alternateName:['Квіт Кемп'],url:origin+'/quiet-camp',description,inLanguage:['en','uk','de'],genre:'Logic puzzle',publisher:{'@id':origin+'/#studio'},author:{'@id':origin+'/#developer'},image:origin+'/media/'+data.projects.find(p=>p.featured).hero});
 if(slug){
  const home=origin+(lang==='en'?'/':'/'+lang),game=origin+'/quiet-camp'+(lang==='en'?'':'/'+lang);
  const parts=[{name:'Kruty1918 Games',item:home},{name:'Quiet Camp',item:game}];
  if(slug!=='quiet-camp')parts.push({name:title,item:url});
  graph.push({'@type':'BreadcrumbList',itemListElement:parts.map((p,i)=>({'@type':'ListItem',position:i+1,...p}))});
 }
 return JSON.stringify({'@context':'https://schema.org','@graph':graph}).replace(/[<>&\u2028\u2029]/g,c=>'\\u'+c.charCodeAt(0).toString(16).padStart(4,'0'));
}
export const scriptHash=text=>"'sha256-"+createHash('sha256').update(text).digest('base64')+"'";
export const contentSecurityPolicy=(hashes=[])=>`default-src 'none'; style-src 'self'; img-src 'self'; script-src 'self'${hashes.length?' '+hashes.join(' '):''}; base-uri 'none'; form-action 'none'; frame-ancestors 'none'`;
