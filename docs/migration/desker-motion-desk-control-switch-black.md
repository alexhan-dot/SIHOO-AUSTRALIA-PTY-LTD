# Carbon Fibre Dual Motor 3 Stage Electric Sit Stand Desk in Black — page content migration (AU)

Product: `gid://shopify/Product/8860338553123` · handle `desker-motion-desk-control-switch-black` · template `aftership.994c81c7` (unchanged; same AfterShip `.liquid` as the white Desker desk)
Sources: AU template `templates/product.aftership.994c81c7.liquid` (theme 187727839523) + product description + product gallery. No US page (none used).
Date: 2026-09-08. Title, price, variants, gallery, templateSuffix and status untouched. `custom.related_articles` / `related_article_paths` untouched. Desk template has no specs/compare table, so no `specs.*` set.

## Metafields set (custom.*)
highlights (6), highlight_images (4, gallery images), best_for (4), feature_stories (6), faqs, compare_products (white Desker desk 8170139156771), compare_intro, lifestyle_images (3), whats_in_box. hero_video / hero_video_file: unset (no video on the AU page). Description: kept as is (>60 words, no US spellings).

## Before → after (text blocks)

| AU template block (before) | Content | After |
|---|---|---|
| h2 "ADJUSTABLE STANDING DESKS" + intro / "Sit, Stand & Move" | stand, sit, lean, stretch | folded into story-4 and best_for |
| "New Black Carbon Fibre Pattern" | commemorative release, "up to 30% off" | feature_story `desker-cf-story-1` (promo/discount claim not migrated) |
| "Curved desktop is stylish, practical…" | curved black desktop complements modern decor | `desker-cf-story-2`, highlight 1 |
| "Easy Height Adjustment" | control switch stores 3 heights | `desker-cf-story-3`, faq-4, highlight 5 |
| "Comfortable Height for Sitting and Standing" | 32 mm/sec, ≤48 dB | `desker-cf-story-4`, faq-3 (**speed conflict** with description 36 mm/s — description value used) |
| "Obstacle Collision Sensor" | PIEZO collision prevention | `desker-cf-story-5`, faq-8, highlight 6 |
| "Standby Power Shutdown Mode" / "Outstanding Durability" / "25mm … 2mm ABS edge" | 0.1 W standby; 100,000-cycle test; LPM + Schattdecor | `desker-cf-story-6`, faq-3, faq-5 |
| "You might also like" | product grid | not migrated |
| Product description | dual motor, 3-stage steel frame, 25 mm E0 + LPM + 2 mm ABS, 140 kg, 10-year warranty | faq-2/5/9, highlights, compare_intro; kept as description |
| Gallery dimension/handset text (from the white desk gallery, same frame) | 600–1250 mm; 3 memory, cm/inch, time reminder | faq-1, faq-4 |

## Before → after (images)

| File (before) | gid | After |
|---|---|---|
| AfterShip image_upload_daa8b183… (carbon fibre top + gaming collage) | uploaded → 43783085687075 | story-1 |
| Gallery 930389 (curved carbon fibre edge) | 38275430580515 | story-2, highlight_images[1] |
| Gallery 433378 (handset under carbon fibre top) | 38275430646051 | story-3, highlight_images[2] |
| Gallery 994404 (carbon fibre edge, white background) | 38275430613283 | highlight_images[3] |
| Gallery 229995 (black desk, white background) | 38275430547747 | highlight_images[4] |
| AfterShip image_upload_3c7d8d74… (600–1250 mm diagram, white desk) | 43783085752611 | story-4 (shows the white version of the same frame) |
| AfterShip image_upload_c444b0be… (anti-collision illustration) | 43783085719843 | story-5 |
| AfterShip image_upload_797e0b9c… (black desk, timber shelving) | uploaded → 43783085818147 | story-6, lifestyle_images[1] |
| AfterShip image_upload_23f3c52b… (man reading at black desk) | 43783085621539 | lifestyle_images[2] |
| AfterShip image_upload_02625a32… (two people sit/stand) | 43783085654307 | lifestyle_images[3] |
| Gallery 270271 (seat cushion photo) | — | wrong product image in gallery; flagged, not touched |

## Created objects

- feature_story: desker-cf-story-1 → 316799353123, -2 → 316799385891, -3 → 316799418659, -4 → 316799451427, -5 → 316799484195, -6 → 316799516963
- faq_item (ACTIVE): desker-cf-faq-1…9 → 316800598307, 316800631075, 316800663843, 316800696611, 316800729379, 316800794915, 316800827683, 316800860451, 316800893219
- faqs: faqs-desker-cf → 316801220899 (ACTIVE)
- Files: none uploaded separately; reuses the 9 files uploaded for the white Desker desk (all READY)

## Flags
- Lift speed 32 mm/s (template) vs 36 mm/s (description) — used 36, confirm.
- Warranty: description states 10 years (used in FAQ); WORK-theme `product.desk.json` trust badge says "5-Year Warranty" — confirm.
- Variant "Black / With Footrest" ($699, no SKU) looks like a chair-footrest listing attached to the desk — not touched, flagged for review.
- No returns policy stated on the AU desk page — returns FAQ omitted. "Up to 30% off" promo copy not migrated.
