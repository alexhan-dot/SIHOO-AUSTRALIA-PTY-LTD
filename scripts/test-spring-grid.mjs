import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
const require = createRequire(path.resolve(process.argv[2], 'package.json'));
const { JSDOM } = require('jsdom');
const card = () => `<div class="product-grid-item" data-product-id="same-product"><div class="product-grid-item-image"><img><div class="product-grid-item-image-sale"></div></div><select class="product-grid-item-variation-dropdown"><option value="black" data-price="$329.00" data-compare-price="$489.00" data-savings="$160.00">Black</option><option value="grey" data-price="$339.00" data-compare-price="$489.00" data-savings="$150.00" data-image="https://example.com/grey.jpg" data-image-alt="Grey chair">Grey</option><option value="regular" data-price="$350.00">Regular</option><option value="sold" disabled data-price="$350.00">Sold out</option></select><div class="product-grid-item-price">$329.00</div><form><input name="id" value="black"><button type="submit" data-variant-id="black">Add to Cart</button></form></div>`;
const dom = new JSDOM(`<sihoo-spring-grid>${card()}</sihoo-spring-grid><sihoo-spring-grid>${card()}${card()}</sihoo-spring-grid>`,{runScripts:'outside-only'});
const code = fs.readFileSync(path.resolve(import.meta.dirname,'../theme/work-theme-187727839523/assets/sihoo-spring-grid.js'),'utf8');
dom.window.eval(code); dom.window.eval(code); // Repeated section assets must be harmless.
const cards = [...dom.window.document.querySelectorAll('.product-grid-item')];
const select = cards[1].querySelector('select');
const change = value => {select.value=value;select.dispatchEvent(new dom.window.Event('change',{bubbles:true}));};
change('grey');
assert.equal(cards[1].querySelector('input').value,'grey');
assert.equal(cards[1].querySelector('button').dataset.variantId,'grey');
assert.equal(cards[1].querySelector('.price__current').textContent,'$339.00');
assert.equal(cards[1].querySelector('.product-grid-item-image-sale').textContent,'Save $150.00');
assert.equal(cards[1].querySelector('img').alt,'Grey chair');
for (const i of [0,2]) {assert.equal(cards[i].querySelector('input').value,'black');assert.equal(cards[i].querySelector('.product-grid-item-price').textContent,'$329.00');}
change('regular');assert.equal(cards[1].querySelector('.price__was'),null);assert.equal(cards[1].querySelector('.product-grid-item-image-sale'),null);
change('sold');assert.equal(cards[1].querySelector('button').disabled,true);
change('grey');assert.equal(cards[1].querySelector('button').disabled,false);
console.log('PASS: duplicate cards remain isolated; form variant, price, savings, image, sold-out and repeated script checks.');
