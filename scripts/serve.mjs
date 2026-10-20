import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../dist');
const config=JSON.parse(await fs.readFile(new URL('../vercel.json',import.meta.url),'utf8'));
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.json':'application/json; charset=utf-8','.webp':'image/webp','.png':'image/png','.xml':'application/xml; charset=utf-8','.txt':'text/plain; charset=utf-8'};
const port=Number(process.env.PORT||4173);
const server=http.createServer(async(req,res)=>{
 let pathname;try{pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);}catch{res.writeHead(400);res.end('Bad request');return;}
 const clean=pathname==='/'?'/':pathname.replace(/\/$/,'');
 const redirect=config.redirects.find(r=>r.source===clean);if(redirect){res.writeHead(308,{Location:redirect.destination});res.end();return;}
 const rewrite=config.rewrites.find(r=>r.source===clean);
 let relative=rewrite?.destination||clean;
 if(relative==='/')relative='/index.html';
 const file=path.resolve(root,'.'+relative);
 if(!file.startsWith(root+path.sep)){res.writeHead(403);res.end('Forbidden');return;}
 const headers=Object.fromEntries(config.headers[0].headers.map(h=>[h.key,h.value]));
 try{const b=await fs.readFile(file);res.writeHead(200,{...headers,'Content-Type':types[path.extname(file)]||'application/octet-stream'});res.end(req.method==='HEAD'?undefined:b);}
 catch{res.writeHead(404,{...headers,'Content-Type':'text/html; charset=utf-8'});res.end(await fs.readFile(path.join(root,'404.html')));}
});
server.listen(port,'127.0.0.1',()=>console.log(`Local: http://127.0.0.1:${port}`));
