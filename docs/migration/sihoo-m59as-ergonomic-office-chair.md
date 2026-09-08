# M59AS — page content migration (AU)

Product: `gid://shopify/Product/10184342307107` · handle `sihoo-m59as-ergonomic-office-chair` · template `m59` (unchanged)
Sources: AU template `product.m59.json`; US page https://www.sihoo.com/products/sihoo-m59as-ergonomic-office-chair
Date: 2026-09-08. Title, price, variants, gallery, templateSuffix and status untouched. `custom.videos` untouched.

## Before → after (text blocks)

| AU template block (before) | Content | After |
|---|---|---|
| main › accordion "Features" | mesh, dual-section backrest, 3D flip-up armrests, dynamic lumbar, double-jointed headrest, saddle seat, 126° recline, coat hanger | `custom.highlights` (6) + description "Key features" |
| accordion "Benefits" | dual-section backrest, flip-up armrests, headrest, saddle seat, mesh, coat hanger | `custom.best_for` |
| custom-multi-column "Ergonomic Chair Specifications" | 70.5×70×113.5–134.5 cm, 16.6 kg, 150 kg, seat depth 43.5, hip 50.5, PE+polyester, 3D armrests, 3-yr warranty; YouTube guide | reused in description + faq `m59as-faq-1/2/4/6`; guide link already in `custom.videos` |
| product-promo-strip | "Built for all-day comfort, from a 9am start to a 5pm wrap-up." | reused in story-1 / description wording |
| background-video | https://youtu.be/B2uD_VkSB_E (M59AS product video, **SIHOO global channel**, not SIHOO_AU) | `custom.hero_video` **left unset** per rule (SIHOO_AU only); flagged — model-specific, could be set if approved. US page has only vertical UGC clips (5) |
| product-promo-gallery (4 labels) | Dual-section backrest / 3D flip-up armrests / Double-jointed headrest / Full premium mesh | `custom.highlights` 1–4 + `highlight_images` (AU 600×600); highlights 5–6 (dynamic lumbar, coat hanger) have no matching square image |
| product-testimonial ×2 (S100 quotes, wrong model) | | dropped |
| custom-multi-column (C300 mesh / BM tracking / BIFMA tiles) | headings only | story-6 |
| custom-multi-column "Comfort, Convenience, and Durability" | pressure-free / convenience / BIFMA | folded into story-4 (saddle seat) and story-6 (coat hanger, BIFMA/SGS) |
| custom-image-text "Dual-section backrest…" | | feature_story `m59as-story-1` |
| custom-image-text "Double-jointed headrest…" | | feature_story `m59as-story-2` |
| custom-multi-column "How M59AS Chair Helps?" (4) | 3D arms / entire back / recline / mesh | `m59as-story-3`, `-4`, `-5`, `-6` |
| slideshow "For every part of you" (C300_pro.webp) | C300 image | dropped; M59AS lifestyle set instead |
| US FAQ (7, incl. vs M57/M18/C300/S100) | | faq_items `m59as-faq-1…8` (metric, AU delivery, 3-yr warranty, vs M57/M59) |
| Product description (empty) | | new: 3 AU-English paragraphs + Key features |

## Before → after (images)

| File (before) | gid | After |
|---|---|---|
| 1_6e448650….webp / 2_61c3b2f5….jpg / 3_2e626903….webp / 4_4c96c8f4….jpg (AU 600×600) | 42669026935075 / 42669028245795 / 42669028966691 / 42669029753123 | `highlight_images[1–4]`; 3_2e626903 also story-2 |
| 5_4553b1dc….webp (AU, backrest) | 42669031293219 | story-1 |
| 6.webp / 7.webp / 12.webp (AU template refs) | not found in Files | replaced by US images |
| US f0b28a7c….webp (3D armrests) | uploaded → 43783036666147 | story-3 |
| US 90e8f3fd….webp (tall backrest) | uploaded → 43783036698915 | story-4 |
| US 125.webp (recline) | uploaded → 43783036731683 | story-5 |
| US 47ccec6d….webp (mesh) | uploaded → 43783036764451 | story-6 |
| US 2e161d41….webp (home office) | uploaded → 43783036567843 | `lifestyle_images[1]` |
| US a69f16b8….webp (sit-stand desk) | uploaded → 43783036633379 | `lifestyle_images[2]` |
| US ed01ac65….webp (coat hanger, two chairs) | uploaded → 43783036797219 | `lifestyle_images[3]` |
| US 1630-1080.webp (armrest close-up) | uploaded → 43783036600611 | spare, not referenced |
| 8_d2781338 / 9_37534b89 / 10_867679e4 (AU 575×356), 11_ca8e69c8, 13.webp, m59as_f5e6a091, m59as-2 | — | not referenced (low-res or spec tiles) |

## Created objects

- feature_story: m59as-story-1 → 316791030051, -2 → 316791062819, -3 → 316791095587, -4 → 316791128355, -5 → 316791161123, -6 → 316791193891
- faq_item: m59as-faq-1…8 → 316791357731, 316791390499, 316791423267, 316791456035, 316791488803, 316791521571, 316791554339, 316791587107 (ACTIVE)
- faqs: faqs-m59as → 316791750947 (ACTIVE)
- Metafields set: highlights, highlight_images (4), best_for, feature_stories, faqs, compare_products (M57, M59), compare_intro, lifestyle_images, whats_in_box. hero_video: unset (see note).

## specs.* import (2026-09-08)

Source: US https://www.sihoo.com/products/sihoo-m59as-ergonomic-office-chair — "Specifications" section text plus the two dimension diagrams (`M59AS_152416d9…webp` front, `M59AS_4ad23165…webp` side), inches → cm rounded to 0.5 cm, lb → kg. `data_source` = "US sihoo.com spec section 2026-09-08 (converted to metric)".

| Key | Value | From |
|---|---|---|
| family | Core Ergonomic (M/V) | brief |
| user_height_min/max_cm | unset | not published on US page (flagged) |
| max_load_kg | 150 | 330 lb |
| seat_height_min/max_cm | 45.5 / 53.0 | side diagram 17.9–20.9 in |
| seat_width_cm | 50.5 | "Max hip width 19.88 in" (diagram 18.5 in = 47) |
| seat_depth_min/max_cm | 43.5 / 43.5 | "Seat depth 17.13 in" fixed (diagram 16.5 in) |
| overall_height_min/max_cm | 113.5 / 134.5 | "Chair back lifting height 44.69–52.95 in" = overall height (diagram 43.9–51.6 in) |
| net_weight_kg | 16.6 | 36.7 lb = 16.65, listed 16.6 to match AU page |
| recline_positions_deg | [126] | "Recline up to 126°" |
| armrest_type / armrest_detail | 3D flip-up; up/down, fwd/back, rotation; pad ~23 cm, height ~24.5 cm | US text + diagram |
| lumbar / headrest / mechanism / mesh_material / seat_cushion | dynamic lumbar in dual-section backrest (~45 cm wide); double-jointed headrest ~30 × 14 cm; 126° recline, gas lift, coat hanger; PE + polyester full mesh, aluminium; saddle-shaped mesh seat | US text + diagram |
| suspension | true | full-mesh assumption (flagged) |
| certifications | BIFMA, SGS | US text |
| warranty_years | 3 | US text (AU page also 3) |
| gas_lift_class | unset | not published |
| needs_confirmation | see metafield | |

23 keys set, userErrors: none.
