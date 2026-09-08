import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
const require = createRequire(path.resolve(process.argv[2], 'package.json'));
const { Liquid } = require('liquidjs');
const root = path.resolve(import.meta.dirname, '../theme/work-theme-187727839523');
const rollback = path.resolve(import.meta.dirname, '../theme/rollback-pdp-2026-09-08');
const parse = file => { const s=fs.readFileSync(file,'utf8'); return JSON.parse(s.slice(s.indexOf('{'))); };
let checked=0;
for (const file of fs.readdirSync(path.join(rollback,'templates'))) {
  const d=parse(path.join(root,'templates',file));
  const old=parse(path.join(rollback,'templates',file));
  const reviews=Object.values(d.sections).filter(s=>s.type==='sihoo-product-reviews');
  assert.equal(reviews.length,1,file);
  assert.equal(reviews[0].settings.show_source_note,false);
  const blocks=Object.values(reviews[0].blocks);
  assert.equal(blocks.length,1);
  assert.ok(blocks[0].type.includes('/loox-dynamic-section/'));
  assert.equal(blocks[0].settings.reviews_to_display,'product_reviews_only');
  for (const key of ['only_photos','aggregated','is_sample']) assert.equal(blocks[0].settings[key],false);
  assert.ok(!Object.values(d.sections).some(s=>s.type==='review-source-note'));
  assert.equal(new Set(d.order).size,d.order.length);
  assert.ok(d.order.every(id=>d.sections[id]));
  assert.ok(Object.keys(d.sections).length<=25);
  // Preserve every unrelated section, including other apps and disabled content.
  for (const [id,s] of Object.entries(old.sections)) {
    if (['main-product','custom-main-product'].includes(s.type)) {
      for (const [bid,block] of Object.entries(s.blocks??{})) assert.deepEqual(d.sections[id].blocks[bid],block,`${file}: original purchase block ${bid}`);
    }
    const widget=Object.values(s.blocks??{}).some(b=>/loox-dynamic-section|klaviyo-reviews\/blocks\/product-reviews/.test(b.type));
    if (widget || ['review-source-note','main-product','custom-main-product'].includes(s.type)) continue;
    const normalise = value => JSON.parse(JSON.stringify(value).replaceAll('shopify://apps/spec-compare/','shopify://apps/specs-compare/'));
    assert.deepEqual(normalise(d.sections[id]),normalise(s),`${file}: unrelated section ${id}`);
  }
  checked++;
}
assert.equal(checked,15);
for (const file of ['sihoo-product-reviews','sihoo-product-highlights','main-product','custom-main-product']) {
  const src=fs.readFileSync(path.join(root,'sections',file+'.liquid'),'utf8');
  const schema=JSON.parse(src.match(/{% schema %}([\s\S]*?){% endschema %}/)[1]);
  const unique=items=>{ const ids=items.filter(s=>s.id).map(s=>s.id); assert.equal(new Set(ids).size,ids.length); };
  unique(schema.settings);
  assert.equal(new Set(schema.blocks.map(b=>b.type)).size,schema.blocks.length);
  for(const b of schema.blocks) unique(b.settings??[]);
}
const engine=new Liquid();
const summary=fs.readFileSync(path.join(root,'snippets/sihoo-review-summary.liquid'),'utf8').replace(/{% stylesheet %}[\s\S]*?{% endstylesheet %}/g,'');
for(const [loox,other,expected] of [
  [{num_reviews:346,avg_rating:4.6},{rating_count:30},'346 reviews'],
  [{num_reviews:3,avg_rating:3.3},{rating_count:118},'3.3 / 5'],
  [{num_reviews:1,avg_rating:2},{},'1 review'],
  [{num_reviews:0,avg_rating:0},{rating_count:100},'Read or write a review'],
  [{},{rating_count:100},'Read or write a review']
]) {
 const html=await engine.parseAndRender(summary,{product:{id:'123',metafields:{loox,reviews:other}}});
 assert.ok(html.includes(expected),html);
 assert.ok(html.includes('href="#sihoo-product-reviews"'));
 if(!loox.num_reviews) assert.ok(!html.includes('/ 5'));
 else assert.ok(html.includes('data-id="123"'));
}
const reviewSection=fs.readFileSync(path.join(root,'sections/sihoo-product-reviews.liquid'),'utf8').replace(/{% (schema|stylesheet) %}[\s\S]*?{% end\1 %}/g,'');
const html=await engine.parseAndRender(reviewSection,{product:{title:'M18',metafields:{custom:{review_source_note:{value:'<script>alert(1)</script>'}}}},section:{id:'test',settings:{heading:'Customer reviews',show_source_note:true},blocks:[]}});
assert.ok(html.includes('&lt;script&gt;'));
assert.ok(!html.includes('<script>'));
console.log('PASS: 15 template migrations; unrelated sections preserved; four schemas; five rating scenarios; escaped source disclosure.');
