// Writes a public publisher record only when the owner supplies the real ID.
// Does not contact AdMob, change DNS or deploy anything.
import {readFile,writeFile} from 'node:fs/promises';
const publisher=process.argv[2];
if(!/^pub-\d{16}$/.test(publisher||'')||['pub-0000000000000000','pub-3940256099942544'].includes(publisher)){
 console.error('Usage: npm run admob:publisher -- pub-<your 16 digits>. Use the publisher ID from your own AdMob account, never Google sample IDs.');
 process.exit(1);
}
const file=new URL('../public/app-ads.txt',import.meta.url);
let text='';try{text=await readFile(file,'utf8');}catch(e){if(e.code!=='ENOENT')throw e;}
const record=`google.com, ${publisher}, DIRECT, f08c47fec0942fa0`;
const google=text.split(/\r?\n/).map(s=>s.split('#')[0].trim()).filter(s=>/^google\.com\s*,/i.test(s));
if(google.some(s=>s.replace(/\s/g,'')!==record.replace(/\s/g,'')))throw Error('An existing Google seller record differs. Review public/app-ads.txt manually; no records were replaced.');
if(!google.length)await writeFile(file,text+(text&&!text.endsWith('\n')?'\n':'')+record+'\n');
console.log('Publisher record prepared in public/app-ads.txt. Review, commit, deploy the website and verify AdMob crawl status. No account or production setting changed.');
