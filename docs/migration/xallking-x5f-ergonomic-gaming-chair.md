# XALLKING X5F — page content migration (AU)

Product: `gid://shopify/Product/10130722029859` · handle `xallking-x5f-ergonomic-gaming-chair` · template `x5f` (unchanged)
Sources: AU template `product.x5f.json` + existing description + `specs.*`. No US page (AU sources only).
Date: 2026-09-08. Title, price, variants, gallery, templateSuffix and status untouched. `custom.videos`, `custom.related_article*` untouched.

Metafields set: `custom.highlights` (6), `custom.highlight_images` (4), `custom.best_for` (4), `custom.hero_video_file` (Video 39669039137059 = theme `X5-PRODUCT-VIDEO.mp4`, X5 series), `custom.feature_stories` (6), `custom.faqs`, `custom.compare_products` (X5C, X5S), `custom.compare_intro`, `custom.lifestyle_images` (2), `specs.needs_confirmation` (2 lines appended). Not set: `custom.hero_video` (template YouTube `_9VUPq3SxOc` is Shopify's stock placeholder), `custom.whats_in_box` (not documented).
Description: 119 words, already AU English — unchanged.
Flags: the AU template's feature images are labelled "X5FS"; the armrest image shows 8 cm height / 60° in / 15° out while `specs.armrest_detail` says 6.5 cm / 70° — copy follows specs, both noted in `specs.needs_confirmation`. Only one photo-only lifestyle image exists on the template; the second lifestyle image (x5fs-img-2) carries a baked "Designed to impress" heading.

## Before → after (text blocks)

| AU template block (before) | Content | After |
|---|---|---|
| main › text "Free shipping with delivery in 1-5 days." | | faq `x5f-faq-7` |
| background-video `X5-PRODUCT-VIDEO.mp4` + YouTube `_9VUPq3SxOc` | Shopify mp4 / stock placeholder | `custom.hero_video_file`; YouTube not migrated |
| gallery (img-2, img-1, x5fs_1200x) | | img-2/img-1 reused as story images; x5fs_1200x → lifestyle |
| rich-text "XALLKING X5F Ergonomic Gaming Chair Features" | heading only | not migrated (section chrome) |
| image-with-text "C-Shaped Lumbar Cradle — a hug of support…" | | `x5f-story-1`, highlight 1 |
| image-with-text "Ergonomic Butterfly Design — active contouring…" | | `x5f-story-2`, highlight 2 |
| image-with-text "4D Adjustable Armrest — your agile, ergonomic extension" | | `x5f-story-3`, highlight 3 (specs figures) |
| image-with-text "3D Headrest — 6-way support" | | `x5f-story-4`, highlight 4 |
| multi-column (x5fs-img-2 / -13 / -18, no text) | designed-to-impress / components & certifications / PC-mobile-rest modes | lifestyle[2] / `x5f-story-6` / `x5f-story-5` |
| Description ("Never settle for mediocrity", agile adaptation, endurance, skeletal alignment) | | kept as-is; specs used for faqs |
| (no returns policy on page) | | returns FAQ skipped |
| — | | faq_items `x5f-faq-1…8`: fit/height, max load 150 kg, lumbar+mechanism, adjustments, assembly, 3-yr warranty, delivery, vs X5C/X5S |

## Before → after (images)

| File (before) | gid | After |
|---|---|---|
| img-3_98c66d40… (800², lumbar cradle, arrows only) | 42307345908003 | story-1, `highlight_images[1]` |
| img-2_8b8fe606… (800², butterfly backrest, arrows only) | 42307334635811 | story-2, `highlight_images[2]` |
| img-4_2d07588b… (800², 4D armrest, baked "8 cm / 60° / 15°" — conflicts with specs) | 42307346989347 | story-3, `highlight_images[3]` (flagged) |
| img-1_fc30e8cf… (800², 3D headrest 45°/50°/7 cm) | 42307335323939 | story-4, `highlight_images[4]` |
| x5fs_1200x_d3a3a4c1… (1200×768, pink room, photo) | 42307337683235 | `lifestyle_images[1]` |
| x5fs-img-2.jpg (750×1607, room shot with baked heading) | 42307348300067 | `lifestyle_images[2]` (noted) |
| x5fs-img-13.jpg (750×1628, components/certifications, baked EN) | 42307348693283 | story-6 |
| x5fs-img-18.jpg (750×1623, PC/mobile/rest modes, baked EN) | 42307349512483 | story-5 |

## Created objects

- feature_story: x5f-story-1 → 316801515811, -2 → 316801548579, -3 → 316801581347, -4 → 316801614115, -5 → 316801646883, -6 → 316801679651
- faq_item: x5f-faq-1…8 → 316801712419, 316801745187, 316801777955, 316801810723, 316801843491, 316801876259, 316801909027, 316801941795 (ACTIVE)
- faqs: faqs-x5f → 316803449123 (ACTIVE)
- File uploads: none.
