# M16 — page content migration (AU)

Product: `gid://shopify/Product/6103810703554` · handle `sihoo-m16-ergonomics-office-chair` · template `m-16` (unchanged)
Sources: AU template `product.m-16.json` (all content sections disabled and copied from the M18 page — M18 copy, M18 images); existing description (Amazon-style A+ PNGs) + `specs.*`. No US page.
Date: 2026-09-08. Title, price, variants, gallery, templateSuffix and status untouched. `custom.related_articles`, `custom.related_article_paths` untouched.

## Metafields set

- `custom.highlights` (6), `custom.best_for` (4), `custom.feature_stories` (5), `custom.faqs` (repointed — see flag), `custom.compare_products` (M18, M56), `custom.compare_intro`
- `specs.needs_confirmation` — one line appended
- `custom.highlight_images`: not set (no feature crops; A+ PNGs are 790×3000+ strips with baked text)
- `custom.lifestyle_images`: not set (gallery is entirely white-background product shots; no lifestyle photo exists for the M16)
- `custom.hero_video` / `hero_video_file`: unset (no video in template)
- `custom.whats_in_box`: not set
- Description: kept as-is (~90 words + 5 A+ images, no US spellings)

## Created objects

- feature_story: m16-story-1 → 316800139555, -2 → 316800172323, -3 → 316800205091, -4 → 316800237859, -5 → 316800270627
- faq_item (ACTIVE): m16-faq-1…8 → 316800303395, 316800336163, 316800368931, 316800401699, 316800434467, 316800467235, 316800500003, 316800532771
- faqs (ACTIVE): faqs-m16 → 316805218595
- File uploads: none

## Before → after (text blocks)

| Source block (before) | Content | After |
|---|---|---|
| Template image-with-text / key-features / rich-text / faq (all disabled) | verbatim **M18** copy ("Why Choose the SIHOO M18…") | not migrated: wrong model |
| Description paragraph 1 | two-way lumbar pillow + headrest, 90–125° recline, W-shaped seat pan, mesh, 360° swivel on PU castors | highlights 1–5, story-1/2/3/4, faq-3 (recline positions from specs: 3 positions, 110/116/130) |
| Description paragraph 2 | 3-year parts warranty, parts shipped directly | faq-6 |
| A+ PNG 1 (Triple protection / features / headrest / lumbar / backrest) | baked text | story-1, story-3 wording |
| A+ PNG 2 (Comfortable / "Colorful chair" / Advantages / Adjustable headrest) | baked text, US spelling | highlight 2 |
| A+ PNG 3 (Lumbar 4 cm/2 cm, fixed armrest, W-shaped pan, dual sponge, mesh, 3 mm base plate) | baked text | story-2, story-5, faq-2, faq-4 |
| A+ PNG 4 (gas lift, PU castors, five-prong base, 125° tilt, 10 cm seat height) | baked text | story-4, faq-4 |
| A+ PNG 5 (product table, dimensions 160/170/180 cm example) | baked text | faq-1 uses specs.* dimensions |
| specs.armrest_detail (fixed, 60 cm outer width) | | highlight 6, story-5, faq-4 |

## Before → after (images)

| File (before) | gid | After |
|---|---|---|
| Gallery sihoo-m16-…-179197.jpg (front-right, lumbar visible) | 38275427959075 | story-1 |
| Gallery …-825595.jpg (angled front) | 38275427893539 | story-2 |
| Gallery …-915818.jpg (rear) | 38275427991843 | story-3 |
| Gallery …-342588.jpg (side) | 38275428286755 | story-4 |
| Gallery …-998089.jpg (angled) | 38275427926307 | story-5 |
| Description A+ PNGs 1_c618d74a / 2_a4085bf9 / 3_aff1c074 / 4_ce5af00e / 5_8aeff976 | 21343718768834 / 20206997799106 / 21343816974530 / 20206997897410 / 20206997995714 | left in description only (tall strips, baked text) |
| Template images (M18 files) | — | not migrated: wrong model |

## Flags

- `custom.faqs` previously pointed at `faq-how-to-reduce-workplace-fatigue-through-office-setup` (264085733667), a 10-item FAQ container that is also referenced by that blog article (workplace-fatigue questions, nothing about the M16). Adding product FAQs there would have changed the article, so a new `faqs-m16` container was created and `custom.faqs` repointed. The article container was not modified.
- Description/A+ say 90–125° recline; specs say 3 positions 110/116/130°. FAQ follows specs.

## Specs alignment 2026-09-09 (page copy wins — owner decision)

Source of truth: description ("90 to 125 degree reclining backrest", "Fixed Arm Rest") + A+ PNG 4 (125° tilt).

| specs key | old | new |
|---|---|---|
| recline_positions_deg | [110,116,130] | [90,125] |
| mechanism | "… and 3 recline positions" | "… reclines 90°–125°" |
| armrest_type | 2D | Fixed |
| armrest_detail | mislabelled "2D non-adjustable lumbar support:" | "Fixed (non-adjustable) armrests:" (same body) |
| data_source / needs_confirmation | sc_attributes / conflict list | aligned line + open items |

Edited: `custom.highlights[5]` (90–125°), `custom.compare_intro` (M18 now 110–126° tilt-lock, 136 kg), faq_item m16-faq-3, m16-faq-8 (M18 136 kg / 110–126°, M56 155–185 cm), feature_story m16-story-4 (title + body). Description untouched.
Still open: no lifestyle photos; custom.faqs repoint note kept.
