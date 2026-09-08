# XALLKING X5 Pro — page content migration (AU)

Product: `gid://shopify/Product/9660749807907` · handle `xallking-x5pro-ergonomic-gaming-chair` · template `x5-pro` (unchanged)
Sources: AU template `product.x5-pro.json` + existing description + `specs.*`. No US page (AU sources only).
Date: 2026-09-08. Title, price, variants, gallery, templateSuffix and status untouched. `custom.videos`, `custom.related_article*` untouched.

Metafields set: `custom.highlights` (6), `custom.highlight_images` (3), `custom.best_for` (4), `custom.hero_video_file` (Video 39669039137059 = theme `X5-PRODUCT-VIDEO.mp4`), `custom.feature_stories` (6), `custom.faqs`, `custom.compare_products` (X5S, X3 Pro), `custom.compare_intro`, `custom.lifestyle_images` (3), `specs.needs_confirmation` (2 lines appended). Not set: `custom.hero_video` (no SIHOO_AU YouTube video on the template), `custom.whats_in_box` (page does not document the box contents).
Description: 333 words, already AU English — unchanged.

## Before → after (text blocks)

| AU template block (before) | Content | After |
|---|---|---|
| main › accordion (X5 series intro) | switchable backrests, dynamic armrests, generous recline | reused in highlights 2/4 wording |
| main › text "Free shipping with delivery in 1-5 days." | | faq `x5-pro-faq-7` (standard AU delivery wording) |
| background-video `X5-PRODUCT-VIDEO.mp4` + placeholder heading/text "Tell your story / Background video" | Shopify-hosted mp4, X5 series | `custom.hero_video_file`; placeholder copy not migrated |
| rich-text "X5Pro Ergonomic Gaming Chair Features" | heading only | not migrated (section chrome) |
| image-with-text "Enhanced Lumbar Protection with Dual 'C' Lumbar Support" + 3-Zone Elastic Backrest (button links to Doro S300 design story — wrong model) | 5 cm vertical, 3-zone | `x5-pro-story-1`, highlight 1–2; S300 button dropped |
| image-with-text "Double C-Shaped Wrap Waist Pillow" | | `x5-pro-story-2` |
| image-with-text "Double Joint Headrest" | 44°, 7 cm | `x5-pro-story-3`, highlight 5, faq 4 |
| image-with-text "6D Bionic Joint Armrests" | | `x5-pro-story-4`, highlight 4, faq 4 |
| image-with-text "Saddle-Type Pressure Dividing Seat Cushion" | | folded into faq 1 / description (already covered); no separate story |
| image-with-text "Recline Range and Footrest" | 95°–138° (**conflicts with specs [100,110,130]**) | `x5-pro-story-5` uses specs locks; conflict → `specs.needs_confirmation` |
| image-with-text "One-touch Adjustment in 3 Modes" | 9 cm lift, 138° recline, 4 cm slide | `x5-pro-story-5`, highlight 6 |
| image-with-text "Adjustable Ergonomic Design for All Heights" | 172/180 cm examples | faq `x5-pro-faq-1` (uses specs 150–190 cm) |
| custom-content "Sturdy Aluminium Alloy Base, Certified Gas Lift & Smooth PU Wheels" | "150 kg" (**conflicts with specs 136 kg**) | `x5-pro-story-6`, highlight 3 (136 kg); conflict → `specs.needs_confirmation` |
| Description "Why choose the X5PRO" list (lumbar, 6D arms, headrest, recline, switchable backrests, mesh, base 150 kg) | | kept as-is; faqs 2–4 use specs values |
| (no returns policy on page) | | returns FAQ skipped |
| — | | faq_items `x5-pro-faq-1…8`: fit/height, max load, lumbar+backrest, adjustments, assembly, 3-yr warranty, delivery, vs X5S/X3 Pro |

## Before → after (images)

| File (before) | gid | After |
|---|---|---|
| XALLKING.jpg (1920×700, "PLAY GAMES LIKE XALLKING" banner) / xallking-x5pro_b2898ec7… (mobile) | 41952717209891 / 41952759447843 | not migrated (baked-in slogan, slideshow hero) |
| x5-pro-1.jpg (1600×1600, white chair in study, photo) | 39669032452387 | `lifestyle_images[1]` |
| X5pro-_logo__27.jpg (dimension diagram, cm) | 39669002830115 | not migrated (spec diagram; specs.* already hold the values) |
| 2-tic.webp (3500×4667, dark chair in gaming room, photo) | 39669024227619 | `lifestyle_images[2]` |
| X5P-2_1.jpg (800², partition backrest, baked EN copy) | 39669055815971 | story-1 image, `highlight_images[2]` |
| X5P-2_2.jpg (800², waist pillow, baked EN copy) | 39669055750435 | story-2 image, `highlight_images[1]` |
| 750_05.jpg (750×1327, headrest 44°, baked EN) | 39669057192227 | story-3 |
| 750_02.jpg (750×1636, 6D armrest, baked EN) | 39669057257763 | story-4 |
| 750_06.jpg (750×1327, seat cushion "4cm", baked EN) | 39669057388835 | not referenced (seat cushion has no story) |
| 750_04.jpg (750×1519, recline "95°–138°", baked EN) | 39669057290531 | not migrated (figure conflicts with specs) |
| 750_03.jpg (750×1551, in-line control, baked EN) | 39669057323299 | story-5 |
| 5-tic-32.webp (736×415, 180/172 cm) | 39669198913827 | not migrated (low-res, banner ratio) |
| X5P-2_3.jpg (800², PU wheel, baked EN) | 39669055652131 | story-6 |
| 5_1.jpg | not found in Files | — |
| 6_ea01c9ac….jpg (800², aluminium base, baked EN) | 39669055684899 | `highlight_images[3]` |
| 301.jpg (800², gaming room, photo) | 39669163622691 | `lifestyle_images[3]` |
| 302.jpg (800², photo) / X5-2-tic.webp (5000×2781 neon room, photo) | 39669164802339 / 39669169127715 | spare, not referenced |

## Created objects

- feature_story: x5-pro-story-1 → 316795846947, -2 → 316795879715, -3 → 316795912483, -4 → 316795945251, -5 → 316795978019, -6 → 316796010787
- faq_item: x5-pro-faq-1…8 → 316796043555, 316796076323, 316796109091, 316796141859, 316796174627, 316796207395, 316796240163, 316796272931 (ACTIVE)
- faqs: faqs-x5-pro → 316796567843 (ACTIVE)
- File uploads: none (all AU shop_images). YouTube `_9VUPq3SxOc` on sibling templates is Shopify's stock placeholder, not SIHOO_AU.
