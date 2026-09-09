# XALLKING X5C — page content migration (AU)

Product: `gid://shopify/Product/10130002739491` · handle `xallking-x5c-ergonomic-gaming-chair` · template `x5c` (unchanged)
Sources: AU template `product.x5c.json` + existing description + `specs.*`. No US page (AU sources only).
Date: 2026-09-08. Title, price, variants, gallery, templateSuffix and status untouched. `custom.videos`, `custom.related_article*` untouched.

Metafields set: `custom.highlights` (6), `custom.highlight_images` (3), `custom.best_for` (4), `custom.hero_video_file` (Video 39669039137059 = theme `X5-PRODUCT-VIDEO.mp4`, X5 series), `custom.feature_stories` (5), `custom.faqs`, `custom.compare_products` (X5S, X5F), `custom.compare_intro`, `custom.lifestyle_images` (3), `specs.needs_confirmation` (1 line appended). Not set: `custom.hero_video` (template's YouTube `_9VUPq3SxOc` is Shopify's stock placeholder), `custom.whats_in_box` (not documented on the page).
Description: 211 words, already AU English — unchanged. It says "up to 150 kg" while `specs.max_load_kg` = 136; metafields use 136 kg and the conflict is flagged.

## Before → after (text blocks)

| AU template block (before) | Content | After |
|---|---|---|
| main › text "Free shipping with delivery in 1-5 days." | | faq `x5c-faq-7` (standard AU delivery wording) |
| main › accordion "Description" (page content ref) | | n/a (dynamic) |
| background-video `X5-PRODUCT-VIDEO.mp4` + YouTube `_9VUPq3SxOc` | Shopify mp4 (X5 series) / stock Shopify placeholder video | `custom.hero_video_file`; YouTube not migrated |
| gallery (3 photos) | | `custom.lifestyle_images` |
| rich-text "X5C Ergonomic Gaming Chair Features" | heading only | not migrated (section chrome) |
| image-with-text "Height Adjustment" (accommodates all heights, neck contours) | | folded into `x5c-story-1` + faq 1 |
| image-with-text "6 dUAL - JOINT HEADREST — 7 Position Adjustment" | | `x5c-story-1`, highlight 1 |
| image-with-text "Professional Ergonomic Design" (multiple adjustments, precise support) | dual-joint headrest / 4D biomimetic armrests | `x5c-story-2`, highlights 3–4 |
| image-with-text "Futuristic X Battle — Compatible with Various Styles" | | `x5c-story-3`, highlight 2 |
| multi-column (3 images, no text; 08.jpg / 06.jpg missing) | mobile gaming mode / handle mode image | `x5c-story-4` |
| Description "Why choose the X5C" (alloy base, 3-position lock, high-elasticity mesh, "150 kg") | | `x5c-story-5`, highlights 5–6 (136 kg per specs) |
| (no returns policy on page) | | returns FAQ skipped |
| — | | faq_items `x5c-faq-1…8`: fit/height, max load, lumbar+mechanism, adjustments, assembly, 3-yr warranty, delivery, vs X5F/X5S |

## Before → after (images)

| File (before) | gid | After |
|---|---|---|
| X5C_COLORFUL_BACK_COVER.jpg (2500×1666, photo) | 42307356819747 | `lifestyle_images[1]` |
| X5C2.jpg (2500×2000, photo) | 42307357737251 | `lifestyle_images[2]`, story-5 |
| X5C_DESK2.jpg (2000×2600, photo) | 42307359441187 | `lifestyle_images[3]` |
| X5C-8.gif (790×689, headrest 7 cm / 45–50°, baked EN) | 42307363832099 | not referenced (duplicate of 2_-800x800 content) |
| 2_-800x800.jpg (1440², 6D dual-joint headrest, baked EN) | 42307366289699 | story-1, `highlight_images[1]` |
| X5C-1.gif (790×783, "Professional Ergonomic Design", baked EN) | 42307367797027 | story-2, `highlight_images[3]` |
| 1_-800x800.jpg (1440², "Futuristic X Battle Armor", baked EN) | 42307369632035 | story-3, `highlight_images[2]` |
| 11_0cdd0acf….jpg (750×1133, mobile gaming / handle mode, baked EN) | 42307370320163 | story-4 |
| 08.jpg / 06.jpg | not found in Files | — |

## Created objects

- feature_story: x5c-story-1 → 316797354275, -2 → 316797387043, -3 → 316798239011 (first attempt failed on malformed body JSON, recreated), -4 → 316797452579, -5 → 316797485347
- faq_item: x5c-faq-1…8 → 316797518115, 316797550883, 316797583651, 316797616419, 316797649187, 316797681955, 316797714723, 316797747491 (ACTIVE)
- faqs: faqs-x5c → 316799582499 (ACTIVE)
- File uploads: none.

## Specs alignment 2026-09-09 (page copy wins — owner decision)

| Key | Old | New | Source |
|---|---|---|---|
| `specs.max_load_kg` | 136 | 150 | description "Tested to hold up to 150 kg" |
| `specs.armrest_type` | (unset) | 4D | X5C-1.gif feature image ("4D biomimetic armrests"); closes the "팔걸이 유형 미표준" item |
| `specs.data_source` | AU sc_attributes 메타필드 | AU page copy 2026-09-09 (owner decision) + sc_attributes | |
| `specs.needs_confirmation` | 3 lines | 갤러리 영상 없음 + alignment line | |

Migrated content updated: `custom.highlights` [6] (150 kg); `custom.compare_intro` (X5C 150 kg, X5F 8 cm armrest, X5S 110°–143°); feature_story `x5c-story-5` (150 kg); faq_item `x5c-faq-2` (150 kg), `x5c-faq-8` (X5C 150 kg, X5F armrest 8 cm / 60° in / 15° out, X5S 110°–143°). Description pre-existed → untouched. Still open: no gallery video.
