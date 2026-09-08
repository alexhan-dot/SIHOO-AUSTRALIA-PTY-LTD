import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {createRequire} from 'node:module';
const require=createRequire(path.resolve(process.argv[2], 'package.json'));
const {Liquid}=require('liquidjs');
const {JSDOM}=require('jsdom');
const root=path.resolve(import.meta.dirname, '../theme/work-theme-187727839523');
const source=f=>fs.readFileSync(path.join(root,f),'utf8');
const parse=f=>{const s=source(f);return JSON.parse(s.slice(s.indexOf('{')));};
const engine=new Liquid({root:path.join(root,'snippets'),extname:'.liquid'});
const liquid=f=>source(f).replace(/{% (schema|style|stylesheet) %}[\s\S]*?{% end\1 %}/g,'');
engine.registerFilter('money',v=>'$'+Number(v)/100);
for(const family of ['doro','m','x','desk']){
 const t=parse(`templates/product.${family}.json`);
 assert.equal(t.sections.main.settings.sihoo_unified_reviews,true);
 const r=Object.values(t.sections).filter(s=>s.type==='sihoo-product-reviews');
 assert.equal(r.length,1);
 assert.equal(r[0].settings.show_source_note,false);
 const b=Object.values(r[0].blocks);
 assert.equal(b.length,1);
 assert.equal(b[0].settings.reviews_to_display,'product_reviews_only');
 for(const k of ['aggregated','only_photos','is_sample'])assert.equal(b[0].settings[k],false);
 assert.equal(new Set(t.order).size,t.order.length);
 assert.ok(t.order.every(k=>t.sections[k]));
 assert.ok(Object.keys(t.sections).length<=25);
 assert.equal(t.sections.social_proof.settings.show_verified_claims,false);
 assert.equal(t.sections.delivery_promise.settings.show_warehouse_grid,false);
}
// Metafield values are products, not handles; the real Shopify preview is also required.
const field=value=>({value});
const chair=(id,specs)=>({id,title:'Chair '+id,price_min:50000,url:'/products/'+id,metafields:{specs:Object.fromEntries(Object.entries(specs).map(([k,v])=>[k,field(v)])),custom:{}}});
const a=chair('A',{max_load_kg:150,armrest_type:'8D',seat_height_min_cm:46,seat_height_max_cm:56.7});
const b=chair('B',{max_load_kg:150,armrest_type:'6D',seat_height_min_cm:44,seat_height_max_cm:54});
a.metafields.custom.compare_products=field([b]);
const section={id:'test',settings:{color_scheme:'light',height:'small',differences_only:false},blocks:[]};
const rows=html=>[...new JSDOM(html).window.document.querySelectorAll('tbody tr')].map(r=>r.textContent.trim());
let html=await engine.parseAndRender(liquid('sections/compare-table.liquid'),{product:a,section});
assert.ok(rows(html).some(r=>r.includes('46–56.7 cm')&&r.includes('44–54 cm')));
assert.ok(rows(html).some(r=>r.includes('8D')&&r.includes('6D')));
section.settings.differences_only=true;
html=await engine.parseAndRender(liquid('sections/compare-table.liquid'),{product:a,section});
assert.ok(!rows(html).some(r=>r.includes('Maximum load')));
assert.ok(rows(html).some(r=>r.includes('Armrests')));
b.metafields.specs.armrest_type=field('<img src=x onerror=alert(1)>');
html=await engine.parseAndRender(liquid('sections/compare-table.liquid'),{product:a,section});
assert.ok(html.includes('&lt;img'));
assert.ok(!html.includes('<img src=x'));
a.metafields.custom.compare_products=field([]);
assert.equal((await engine.parseAndRender(liquid('sections/compare-table.liquid'),{product:a,section})).trim(),'');
const settings={color_scheme:'light',show_site_reviews:true,show_verified_claims:false,units_sold:'unverified',certifications:'unverified',warehouses:'unverified'};
for(const [rating,count,expected] of [[4.2,347,true],[2.6,5,true],[0,0,false],[8,5,false]]){
 const product={metafields:{loox:{avg_rating:rating,num_reviews:count},reviews:{rating_count:9999},custom:{amazon_rating:field(4.1),amazon_rating_count:field(5084),amazon_url:field('https://www.amazon.com.au/dp/B07BDFW1Y7')}}};
 html=await engine.parseAndRender(liquid('sections/social-proof.liquid'),{product,section:{id:'social',settings}});
 const doc=new JSDOM(html).window.document;
 assert.ok(doc.body.textContent.includes('4.1/5'));
 assert.ok(doc.body.textContent.includes('5,084 ratings on Amazon.com.au'));
 assert.equal(doc.body.textContent.includes('reviews on sihoo.com.au'),expected);
 assert.ok(!html.includes('★★★★★'));
 assert.ok(!html.includes('unverified'));
 assert.ok(!html.includes('9999'));
 if(expected)assert.ok(doc.querySelector('a[href="#sihoo-product-reviews"]'));
}
for(const name of ['compare-table','social-proof','delivery-promise','custom-main-product','sihoo-product-reviews']){
 const schema=JSON.parse(source('sections/'+name+'.liquid').match(/{% schema %}([\s\S]*?){% endschema %}/)[1]);
 const unique=s=>{const ids=(s??[]).filter(x=>x.id).map(x=>x.id);assert.equal(new Set(ids).size,ids.length,name);};
 unique(schema.settings);
 assert.equal(new Set((schema.blocks??[]).map(b=>b.type)).size,(schema.blocks??[]).length);
 for(const block of schema.blocks??[])unique(block.settings);
}
// Execute the actual variant-change handler: unavailable and missing combinations
// must not inherit a delivery promise from the previously selected variant.
const main=source('sections/custom-main-product.liquid');
const handler=main.slice(main.indexOf('    function updateBadges(variant) {'),main.indexOf("    document.addEventListener('on:variant:change'"));
const shippingNote={hidden:false}, demandAlert={hidden:true,dataset:{showFor:'specific'}};
const update=Function('shippingNote','demandAlert',`const saveBadge=null,lowStockBadge=null,buyItNowBtn=null; const variantMatchesDemand=v=>v.delayed; ${handler}; return updateBadges;`)(shippingNote,demandAlert);
for(const [variant,hidden] of [[{id:1,available:true,delayed:false},false],[{id:2,available:false,delayed:false},true],[{id:3,available:true,delayed:true},true],[{id:1,available:true,delayed:false},false],[null,true]]){
 update(variant);assert.equal(shippingNote.hidden,hidden);
}
console.log('PASS: 4 series templates, comparison values/differences/empty/escaping, source-separated ratings including low/zero/invalid values, 5 schema scopes, 5 delivery variant transitions.');
