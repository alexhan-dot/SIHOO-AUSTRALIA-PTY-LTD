# M57 with built-in footrest — page content migration (AU)

Product: `gid://shopify/Product/7479130194114` · handle `sihoo-m57-ergonomic-office-chair-with-built-in-footrest` · template `` (default `product.json`, unchanged)
Sources: default AU template `product.json` (M18 sections, all disabled) + existing description; M57 copy reused per brief; no US page.
Date: 2026-09-08. Title, price, variants, gallery, templateSuffix, status and description untouched (description is 429 words, AU spelling — "personalised", "aluminium" — kept). `custom.related_article*` untouched.

## Before → after (text blocks)

| AU source (before) | Content | After |
|---|---|---|
| product.json sections (image-with-text / key-features / faq / rich-text) | all M18 copy and **disabled** | not migrated: wrong model, not rendered |
| Description "Sihoo M57 Ergonomic Office Chair Features" bullets | headrest, lumbar height/depth, 3D armrests 360°, 90°–120° recline, 10 cm seat travel "(3. 9 in.)", BIFMA/SGS 2000 lbs, 150 kg, 8-step assembly, mesh care, aluminium base, 3-yr parts | `custom.highlights`, faq `m57-fr-faq-2/3/5/6`; recline taken from specs (110/116/126) — see needs_confirmation; imperial figures not repeated |
| Description embedded images (M572_480x480, H77f…, H904…, 1_1.png, 2_a3154657, 3_e4408e8a, 4_9d1d8521 — long infographics) | | left in description; not reused (infographics) |
| M57 template copy (backrest / lumbar / headrest / armrests / recline / controls) | | reused: `m57-fr-story-1…4`, story-6 |
| Footrest (title only on AU page) | | new: `m57-fr-story-5`, faq-4, highlight 6, best_for |
| Gallery alt text "expandable built-in footrest" | | used to choose footrest images |

## Before → after (images)

| File (before) | gid | After |
|---|---|---|
| AU 01_14737d3c / 03_270b2832 / 04_00293721 (M57 template) | 39278327562531 / 39282361270563 / 39282367594787 | story-1 / -2 / -3 |
| US 0667.jpg (uploaded for M57) | 43783082279203 | story-4 |
| gallery …-304947.jpg (studio, footrest extended) | 38635047354659 | story-5 |
| gallery …-598893.jpg (home office, footrest expanded) | 38635047452963 | story-6 + `lifestyle_images[3]` |
| gallery …-150227.jpg / …-679609.jpg (home office scenes) | 38635047387427 / 38635047420195 | `lifestyle_images[1–2]` |
| M57-08-01…04 icons | 39278314422563 / 39282338005283 / 39282338070819 / 39282338038051 | `highlight_images[1–4]` |
| gallery …-241289.webp size chart (alt says "M81") | — | not referenced; alt text looks wrong (flag) |

## Created objects

- feature_story: m57-fr-story-1 → 316803252515, -2 → 316803285283, -3 → 316803318051, -4 → 316803350819, -5 → 316803383587, -6 → 316803416355
- faq_item: m57-fr-faq-1…8 → 316803875107, 316803907875, 316803940643, 316803973411, 316804006179, 316804038947, 316804071715, 316804104483 (ACTIVE)
- faqs: faqs-m57-fr → 316806856995 (ACTIVE)
- Files uploaded: none (reuses M57 upload 43783082279203)
- Metafields set: custom.highlights (6), highlight_images (4), best_for (4), feature_stories (6), faqs, compare_products (M57, M57 Pro FR), compare_intro, lifestyle_images (3); specs.needs_confirmation appended (description 90°–120° recline + "3. 9 in." vs specs 110/116/126, metric only). hero_video / hero_video_file / whats_in_box: unset. Returns FAQ skipped: AU page states no returns policy.

## Specs alignment 2026-09-09 (page copy wins — owner decision)

Source of truth: description ("90°-120° reclining backrest", 150 kg, 10 cm seat travel — matches 43.5–53.5).

| specs key | old | new |
|---|---|---|
| recline_positions_deg | [110,116,126] | [90,120] |
| mechanism | single-lever, adjustable lift and recline tension | same + "; reclines 90°–120°" |
| data_source / needs_confirmation | sc_attributes / conflict list | aligned line + open items |

Edited: `custom.highlights[5]` (120°, 90°–120°), `custom.compare_intro` (M57 Pro FR up to 130°), faq_item m57-fr-faq-3, -4, -8, feature_story m57-fr-story-5, m57-fr-story-6. Cross-references updated on M57 Pro FR (compare_intro, faq-8). Description untouched.
Still open: "3. 9 in." imperial in description; size-chart alt text "M81"; headrest 8 cm kept (page gives no figure; M57 page says 9.9 cm).
