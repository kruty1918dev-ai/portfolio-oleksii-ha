import {escape} from './layout.mjs';
export function legalMarkup(markup, controller) {
 return markup.replace(/\{\{(legalName|publicName|ukrainianName|postalAddress)\}\}/g,(_,key)=>escape(controller[key]));
}
