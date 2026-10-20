#!/usr/bin/env python3
"""Synchronize a candidate bundled notice, without Unity or a player build.
Use --check for read-only parity; --write-candidate explicitly updates draft resources.
"""
import argparse, hashlib, json, re
from pathlib import Path
from html.parser import HTMLParser
parser=argparse.ArgumentParser();parser.add_argument('--game-root',required=True,type=Path)
mode=parser.add_mutually_exclusive_group(required=True);mode.add_argument('--check',action='store_true');mode.add_argument('--write-candidate',action='store_true');args=parser.parse_args()
root=Path(__file__).resolve().parents[1];policy=json.loads((root/'legal/quiet-camp/content.json').read_text());controller=json.loads((root/'legal/controller.json').read_text());evidence=json.loads((root/'legal/release-evidence.json').read_text());revision=evidence['policyRevision']
class Plain(HTMLParser):
 def __init__(self):super().__init__();self.parts=[]
 def handle_starttag(self,tag,attrs):
  if tag=='br':self.parts.append('\n')
 def handle_data(self,data):self.parts.append(data)
def text(value):
 value=re.sub(r'\{\{(legalName|publicName|ukrainianName|postalAddress)\}\}',lambda m:controller[m[1]],value)
 reader=Plain();reader.feed(value);return ''.join(reader.parts)
resource=args.game_root/'QuietCamp/Assets/QuietCamp/Resources/QuietCamp/privacy_content.json';data=json.loads(resource.read_text());assert data['draft'],'Candidate sync refuses to overwrite a non-draft publication'
hashes={};summaries=[];changed=False
for variant in data['document']['variants']:
 lang=variant['language'];c=policy[lang];body=[c['title'],c['status'],c['notice'],c['intro']]
 for i,section in enumerate(c['sections'],1):
  body.append(f"{i}. {section['title']}");body.extend(text(p) for p in section['paragraphs'])
  if section.get('table'):body.extend(' — '.join(row) for row in c['rows'])
 body='\n\n'.join(body);hashes[lang]=hashlib.sha256(body.encode()).hexdigest()
 changed|=variant.get('bundledBody')!=body or variant.get('revision')!=revision
 if args.write_candidate:variant.update({'bundledBody':body,'revision':revision,'url':'','sourceUrl':''})
 scope=next(s for s in c['sections'] if s['id']=='scope')
 summaries.append({'language':lang,'revision':revision,'text':c['intro']+'\n\n'+text(scope['paragraphs'][1])+'\n\n'+c['notice']})
changed|=data['summaries']!=summaries
if args.write_candidate:
 data['summaries']=summaries;resource.write_text(json.dumps(data,ensure_ascii=False,indent=2)+'\n')
 (root/'legal/bundled-policy-source.json').write_text(json.dumps({'revision':revision,'gameResource':str(resource.relative_to(args.game_root)),'bodySha256':hashes,'status':'candidate; native UI and installed SDK verification pending'},indent=2)+'\n')
else:assert not changed,'Bundled policy differs; review source changes and run --write-candidate'
print('PASS: matching en/uk/de bundled candidate content, no remote policy fetch or SDK activation.')
