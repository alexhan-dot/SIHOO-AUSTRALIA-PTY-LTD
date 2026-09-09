# XALLKING X3 Pro — page content migration (AU)

Product: `gid://shopify/Product/10130735268131` · handle `xallking-x3pro-premium-ergonomic-gaming-chair` · template `x3-pro` (unchanged)
Sources: AU template `product.x3-pro.json` + existing description + `specs.*`. No US page (AU sources only).
Date: 2026-09-08. Title, price, variants, gallery, templateSuffix and status untouched. `custom.videos`, `custom.related_article*` untouched.

Metafields set: `custom.highlights` (6), `custom.highlight_images` (5), `custom.best_for` (4), `custom.feature_stories` (6), `custom.faqs`, `custom.compare_products` (X5 Pro, X5S), `custom.compare_intro`, `custom.lifestyle_images` (3), `specs.needs_confirmation` (1 line appended). Not set: `custom.hero_video` (template YouTube `_9VUPq3SxOc` is Shopify's stock placeholder), `custom.hero_video_file` (theme video is `X3S VIDEO.mp4`, Video 42306944925987 — first frame is black and the file name says X3S, so the model could not be verified; flagged), `custom.whats_in_box` (not documented in text; x3pro-7 shows parts but no list).
Description: 207 words, already AU English — unchanged.
Note: `specs.*` has no headrest value; copy describes the integrated "waterfall chair back" (4 positions / 7 cm) rather than a headrest.

## Before → after (text blocks)

| AU template block (before) | Content | After |
|---|---|---|
| main › text "Free shipping with delivery in 1-5 days." | | faq `x3-pro-faq-7` |
| background-video `X3S VIDEO.mp4` + YouTube `_9VUPq3SxOc` | unverified model / stock placeholder | not migrated (flagged) |
| gallery (x3pro-21, x3pro-28, x3pro.jpg) | 2 photos; x3pro.jpg not in Files | `lifestyle_images[1–2]` |
| rich-text "XALLKING X3PRO Ergonomic Gaming Chair Features" | heading only | not migrated (section chrome) |
| image-with-text "Gradient Fluorescent Spray Paint" | blue/purple shift | `x3-pro-story-1`, highlight 6 |
| image-with-text "Waterfall Chair Back" (4 positions, 7 cm) | | `x3-pro-story-2`, highlight 3 |
| image-with-text "6D Interactive Armrest" (PC / mobile / Switch modes) | | `x3-pro-story-3`, highlight 1 (specs figures) |
| image-with-text "Versatile Lumbar Support" (90–105) | | `x3-pro-story-4`, highlight 2 |
| image-with-text "Flowing Light Tail Fin" | | `x3-pro-story-5`, highlight 5 |
| multi-column (x3pro-7 / -18 / -1, no text) | parts layout / gradient mesh / spray paint | not migrated / `x3-pro-story-6` / story-1 image |
| Description ("Why choose the X3PRO": total-body harmony, futuristic aesthetic + LED, gradient mesh, anti-gravity recline) | | kept as-is; story-6, highlight 4 |
| (no returns policy on page) | | returns FAQ skipped |
| — | | faq_items `x3-pro-faq-1…8`: fit/height (49–56 cm seat), max load 150 kg, lumbar+anti-gravity recline, adjustments, assembly, 3-yr warranty, delivery, vs X5 Pro/X5S |

## Before → after (images)

| File (before) | gid | After |
|---|---|---|
| x3pro-21.jpg (800², gamer at desk, photo + XALLKING watermark) | 42306683535651 | story-4, `highlight_images[2]`, `lifestyle_images[1]` |
| x3pro-28.jpg (800², reclined gamer, photo + watermark) | 42306687205667 | story-3, `highlight_images[1]`, `lifestyle_images[2]` |
| x3pro-20.jpg (800², chair with whales art, no copy) | 42306749825315 | `highlight_images[4]`, `lifestyle_images[3]` |
| x3pro-27_f7aef91a….webp (600², waterfall back "7CM") | 42430047191331 | story-2, `highlight_images[3]` |
| x3pro-29.jpg (800², lighting modes, baked EN) | 42306887385379 | story-5, `highlight_images[5]` |
| x3pro-7.png (790×1539, parts, baked EN) | 42306900623651 | not referenced |
| x3pro-18.png (790×1459, gradient mesh, baked EN) | 42306904457507 | story-6 |
| x3pro-1.png (790×1500, spray paint, baked EN) | 42306908848419 | story-1 |
| x3pro.jpg | not found in Files (gallery has x3pro_10557fe5… 2000², product shot) | — |

## Created objects

- feature_story: x3-pro-story-1 → 316807217443, -2 → 316807250211, -3 → 316807282979, -4 → 316807315747, -5 → 316807348515, -6 → 316807381283
- faq_item: x3-pro-faq-1…8 → 316807414051, 316807446819, 316807479587, 316807512355, 316807545123, 316807577891, 316807610659, 316807643427 (ACTIVE)
- faqs: faqs-x3-pro → 316807905571 (ACTIVE)
- File uploads: none.

## Specs alignment 2026-09-09 (page copy wins — owner decision)

Description and template checked against `specs.*`: no conflicts (waterfall back 4 positions / 7 cm, lumbar 90°–105°, 6D armrests, anti-gravity recline all consistent; no figures for load, seat or recline on the page). No `specs.*` values changed.

| Key | Old | New |
|---|---|---|
| `specs.data_source` | AU sc_attributes 메타필드 | AU page copy 2026-09-09 (owner decision) + sc_attributes |
| `specs.needs_confirmation` | 3 lines | same 3 open items (headrest note expanded: page describes an integrated waterfall back, not a headrest) + alignment line |

Migrated content updated for sibling changes only: `custom.compare_intro` and faq_item `x3-pro-faq-8` (X5 Pro now 95°–138° / 150 kg, X5S now 110°–143°). Description pre-existed → untouched. Still open: headrest value (none / waterfall back), no gallery video, X3S VIDEO.mp4 model unverified.
