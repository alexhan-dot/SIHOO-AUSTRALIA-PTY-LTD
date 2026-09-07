import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
// Install liquidjs in an isolated runtime and pass that directory as argv[2].
const require = createRequire(path.resolve(process.argv[2], 'package.json'));
const { Liquid } = require('liquidjs');
const theme = path.resolve(import.meta.dirname, '../theme/work-theme-187727839523');
const source = fs.readFileSync(path.join(theme, 'sections/specs-table.liquid'), 'utf8');
const schema = JSON.parse(source.match(/{% schema %}([\s\S]*?){% endschema %}/)[1]);
const ids = schema.settings.filter(s => s.id).map(s => s.id);
assert.equal(new Set(ids).size, ids.length);
assert.deepEqual(ids, ['heading', 'show_fit_guide']);
const engine = new Liquid({ root: path.join(theme, 'snippets'), extname: '.liquid' });
const liquid = source.replace(/{% (schema|stylesheet) %}[\s\S]*?{% end\1 %}/g, '');
const base = { user_height_min_cm:150, user_height_max_cm:190, seat_height_min_cm:43.5, seat_height_max_cm:53.5, max_load_kg:150 };
async function render(values, editor=false, show=true) {
  const specs = Object.fromEntries(Object.entries(values).map(([k,v])=>[k,{value:v}]));
  return engine.parseAndRender(liquid,{product:{metafields:{specs,custom:{}}},request:{design_mode:editor},section:{id:'test',settings:{heading:'Specifications',show_fit_guide:show}}});
}
let html = await render(base);
assert.match(html,/Fit guide:/); assert.doesNotMatch(html,/standard 72/);
html = await render({...base,needs_confirmation:'Private HQ note'});
assert.doesNotMatch(html,/Fit guide:|Editor note:|Private HQ note/);
html = await render({...base,needs_confirmation:'Private HQ note'},true);
assert.match(html,/Editor note:/); assert.doesNotMatch(html,/Private HQ note|<strong>Fit guide:/);
html = await render({seat_height_min_cm:43.5,user_height_min_cm:150,overall_height_min_cm:110});
assert.doesNotMatch(html,/Recommended user height|Fit guide:|&ndash;/);
assert.match(html,/43.5 cm/);
assert.equal((await render({})).trim(),'');
assert.doesNotMatch(await render(base,false,false),/Fit guide:/);
console.log('PASS: schema IDs and six rendering scenarios. LiquidJS approximation; Shopify preview also required.');
