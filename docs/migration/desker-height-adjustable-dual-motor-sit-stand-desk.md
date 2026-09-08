# Desker Height Adjustable Dual Motor Sit Stand Desk — page content migration (AU)

Product: `gid://shopify/Product/8170139156771` · handle `desker-height-adjustable-dual-motor-sit-stand-desk` · template `aftership.994c81c7` (unchanged; AfterShip Page Builder `.liquid`, not `.json`)
Sources: AU template `templates/product.aftership.994c81c7.liquid` (theme 187727839523) + product description + product gallery. No US page (none used).
Date: 2026-09-08. Title, price, variants, gallery, templateSuffix and status untouched. `custom.related_articles` / `related_article_paths` untouched. Desk template has no specs/compare table, so no `specs.*` set.

## Metafields set (custom.*)
highlights (6), highlight_images (4, gallery images), best_for (4), feature_stories (6), faqs, compare_products (Carbon Fibre desk 8860338553123), compare_intro, lifestyle_images (3), whats_in_box. hero_video / hero_video_file: unset (no video on the AU page). Description: kept as is (>60 words, no US spellings; stray empty `__endic_crx__` divs left alone).

## Before → after (text blocks)

| AU template block (before) | Content | After |
|---|---|---|
| h2 "ADJUSTABLE STANDING DESKS" + intro paragraph | stand, sit, lean and stretch; "don't feel trapped" | story-1 wording |
| "Sit, Stand & Move" | bodies find balance; get out of the fixed desk | feature_story `desker-dm-story-1` |
| "New Black Carbon Fibre Pattern" | commemorative release, "up to 30% off" | story-6 (promo/discount claim not migrated) |
| "Curved desktop is stylish, practical…" | curved black desktop, modern decor | story-6 / carbon-fibre desk listing |
| "Obstacle Collision Sensor" | PIEZO collision prevention | story-4, faq-8, highlight 5 |
| "Easy Height Adjustment" | control switch, stores 3 heights | story-2, faq-4, highlight 4 |
| "Comfortable Height for Sitting and Standing" | 32 mm/sec, ≤48 dB | story-3, faq-3 (**speed conflict**: template 32 mm/s vs product description 36 mm/s — description value used; confirm with Desker) |
| "Standby Power Shutdown Mode" | 0.1 W standby | story-5, faq-3 |
| "Outstanding Durability and Superior Quality" | 100,000-cycle durability test | story-5, faq-3 |
| "Exceptional quality of 25mm boldness, and 2mm refined ABS edge" | LPM, German Schattdecor, scratch resistance | story-5, highlight 6, faq-5 |
| "You might also like / Our Available products" | product grid | not migrated (theme handles related products) |
| Product description | 25 mm E0 PB + LPM + 2 mm ABS; steel frame; 140 kg (150 kg distributed); 36 mm/s; ≤48 dB; 10-year warranty | faq-1/2/3/5/9, highlights, compare_intro; kept as description |
| Gallery image text (handset card) | up/down, 3 memory, cm/inch, time reminder, min/max, overheat protection | story-2, faq-4 |
| Gallery image text (features card) | dual motor, 25 mm top, telescopic frame 1000–1750 mm, foundation 700×75 mm | highlight 1/6, faq-6 |
| Gallery dimension images | 600–1250 mm height; 1400×700, 1600×700, 1600×800, 1800×800 | faq-1, faq-5 |
| WORK-theme `product.desk.json` trust badge "5-Year Warranty" | | **conflict** with description's 10-year warranty — description (AU page) used for FAQ; badge belongs to the new theme template, flagged for review |

## Before → after (images)

| File (before) | gid | After |
|---|---|---|
| AfterShip image_upload_23f3c52b… (man reading at desk, 750×750) | uploaded → 43783085621539 | lifestyle_images[1] |
| AfterShip image_upload_02625a32… (two people sit/stand office) | uploaded → 43783085654307 | story-1, lifestyle_images[2] |
| AfterShip image_upload_e4af1e18… (two white desks office) | uploaded → 43783085883683 | lifestyle_images[3] |
| AfterShip image_upload_c444b0be… (chair vs desk, anti-collision) | uploaded → 43783085719843 | story-4 |
| AfterShip image_upload_3c7d8d74… (600–1250 mm; baked-in metric figures) | uploaded → 43783085752611 | story-3 |
| AfterShip image_upload_452e922c… (ABS edge + DESKER badge) | uploaded → 43783085850915 | story-5 |
| AfterShip image_upload_daa8b183… (carbon fibre top + gaming collage) | uploaded → 43783085687075 | story-6 |
| AfterShip image_upload_60a264d3… (iMac on white top) | uploaded → 43783085785379 | spare, not referenced |
| AfterShip image_upload_797e0b9c… (black desk, timber shelving) | uploaded → 43783085818147 | used on the Carbon Fibre desk |
| AfterShip image_upload_a9ca0082… (handset photo) | duplicate of gallery 169159 | gallery gid 38275430383907 used for story-2 |
| AfterShip image_upload_0bfe53d4… (carbon fibre close-up) | duplicate of gallery 930389 | not re-uploaded |
| Gallery 240626 (features card, baked-in English text) | 38275430318371 | highlight_images[1] |
| Gallery 809930 (dimensions 1400×700, metric) | 38275430416675 | highlight_images[2] |
| Gallery 106877 (components diagram) | 38275430187299 | highlight_images[3]; whats_in_box source |
| Gallery 372054 (handset card) | 38275430154531 | highlight_images[4] |
| Gallery 945398 / 824542 / 563200 (other size diagrams), 609108, 169159, 229995, 930389, 994404, 433378 | — | left in gallery only |
| Gallery 270271 / 352001 (seat cushion photos) | — | wrong product images in gallery; flagged, not touched |

## Created objects

- feature_story: desker-dm-story-1 → 316798402851, -2 → 316798435619, -3 → 316798468387, -4 → 316798501155, -5 → 316798533923, -6 → 316798566691
- faq_item (ACTIVE): desker-dm-faq-1…9 → 316798632227, 316798664995, 316798697763, 316798730531, 316798763299, 316798796067, 316798828835, 316798861603, 316798894371
- faqs: faqs-desker-dm → 316801188131 (ACTIVE)
- Files uploaded: 9 (all READY, none FAILED), shared with the Carbon Fibre desk

## Flags
- Lift speed 32 mm/s (template) vs 36 mm/s (description) — used 36, confirm.
- Warranty 10 years (description) vs "5-Year Warranty" trust badge in WORK-theme `product.desk.json` — FAQ says 10 years, confirm which is correct before the new template goes live.
- No returns policy stated on the AU desk page — returns FAQ omitted.
- "Up to 30% off" carbon fibre promo copy not migrated.
