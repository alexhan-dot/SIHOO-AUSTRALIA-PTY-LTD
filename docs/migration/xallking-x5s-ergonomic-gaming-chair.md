# XALLKING X5S — page content migration (AU)

Product: `gid://shopify/Product/10130731139363` · handle `xallking-x5s-ergonomic-gaming-chair` · template `x5s` (unchanged)
Sources: AU template `product.x5s.json` + existing description + `specs.*`. No US page (AU sources only).
Date: 2026-09-08. Title, price, variants, gallery, templateSuffix and status untouched. `custom.videos`, `custom.related_article*` untouched.

Metafields set: `custom.highlights` (6), `custom.highlight_images` (3), `custom.best_for` (4), `custom.hero_video_file` (Video 39669039137059 = theme `X5-PRODUCT-VIDEO.mp4`, X5 series), `custom.feature_stories` (5), `custom.faqs`, `custom.compare_products` (X5 Pro, X5C), `custom.compare_intro`, `custom.lifestyle_images` (2), `specs.needs_confirmation` (1 line appended). Not set: `custom.hero_video` (template YouTube `_9VUPq3SxOc` is Shopify's stock placeholder), `custom.whats_in_box` (not documented).
Description: 162 words, already AU English — unchanged.
Flag: template copy and feature images say "110°–143°" recline; `specs.recline_positions_deg` = [108,118,128,140], so copy uses the four specs locks (noted in `specs.needs_confirmation`). Story-1 image still carries the baked "143°" figure (metric, so kept).

## Before → after (text blocks)

| AU template block (before) | Content | After |
|---|---|---|
| custom-main-product › demand-alert "HIGH DEMAND — extended dispatch 5–7 business days" | operational notice | not migrated (theme block, stays in template) |
| custom-main-product › shipping-note "Free shipping with delivery in 1-5 days" | | faq `x5s-faq-7` |
| custom-main-product › trust-badges "3-Year Warranty / 30-Day Returns / Free Shipping" | | faq `x5s-faq-6` (warranty + 30-day change-of-mind returns, unused and in original packaging) |
| background-video `X5-PRODUCT-VIDEO.mp4` + YouTube `_9VUPq3SxOc` | Shopify mp4 / stock placeholder | `custom.hero_video_file`; YouTube not migrated |
| gallery (img-1_575x, img-2_575x, x5s-img-16) | 2 photos + "143°" banner | `lifestyle_images[1–2]`; x5s-img-16 not migrated (baked conflicting figure, 16:9) |
| rich-text "XALLKING X5S Ergonomic Gaming Chair Features" | heading only | not migrated (section chrome) |
| image-with-text "143° of Reclining Comfort — 110° to 143°" | **conflicts with specs** | `x5s-story-1`, highlight 1 (specs locks) |
| image-with-text "3D Headrest with Strong Neck Support" | dual-axis | `x5s-story-2`, highlight 2 |
| image-with-text "Double C Contour Lumbar Pillow — 4 cm, automatic adaptive" | | `x5s-story-3`, highlight 3 |
| image-with-text "4D Armrests for Reduced Shoulder and Neck Strain — 4 cm slide, 70°, wide-range recline" (img-4.jpg missing) | | `x5s-story-4`, highlight 4 (uses x5s-img-1 instead) |
| multi-column (x5s-img-1 / -2 / -5, no text) | 4D armrests / 143° / lumbar | story-4 / not migrated (143°) / not migrated (duplicate lumbar copy) |
| Description ("Why choose the X5S": total-body harmony, breathability, stability) | | kept as-is; `x5s-story-5`, highlights 5–6 |
| — | | faq_items `x5s-faq-1…8`: fit/height, max load 150 kg, lumbar+mechanism, adjustments, assembly, warranty+returns, delivery, vs X5 Pro/X5C |

## Before → after (images)

| File (before) | gid | After |
|---|---|---|
| img-1_575x_78816165… (575², gaming desk, photo) | 42307233906979 | `lifestyle_images[1]` |
| img-2_575x_25bdd86d… (575², blue room, photo) | 42307237708067 | `lifestyle_images[2]`, story-5 |
| x5s-img-16.jpg (1920×1080, "143°" banner) | 42307212968227 | not migrated |
| img-1_ba3c75bc… (1600², recline "143°", baked EN) | 42307271491875 | story-1, `highlight_images[1]` (flagged) |
| img-2_b594e74f… (1600², headrest 50°/7 cm/45°) | 42307276177699 | story-2, `highlight_images[2]` |
| img-3_55691d03… (1600², lumbar 4 cm) | 42307281060131 | story-3, `highlight_images[3]` |
| img-4.jpg | not found in Files | — |
| x5s-img-1.jpg (750×1050, 4D armrests, baked EN) | 42307293872419 | story-4 |
| x5s-img-2.jpg (748×1079, "143°" 108°–144°) / x5s-img-5.jpg (750×1111, lumbar text) | 42307298230563 / 42307301605667 | not migrated |
| Product gallery: last image is an X5 Pro shot (img-1_ee07a04a…) | 42304920846627 | gallery untouched — flagged for cleanup |

## Created objects

- feature_story: x5s-story-1 → 316804497699, -2 → 316804530467, -3 → 316804563235, -4 → 316804596003, -5 → 316804628771
- faq_item: x5s-faq-1…8 → 316804661539, 316804694307, 316804759843, 316804825379, 316804890915, 316804923683, 316804989219, 316805054755 (ACTIVE)
- faqs: faqs-x5s → 316806955299 (ACTIVE)
- File uploads: none.
