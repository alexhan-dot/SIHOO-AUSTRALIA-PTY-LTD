# M57 — page content migration (AU)

Product: `gid://shopify/Product/6074824392898` · handle `sihoo-m57-ergonomic-office-chair` · template `m57` (unchanged)
Sources: AU template `product.m57.json`; US page https://www.sihoo.com/products/m57-ergonomic-chair
Date: 2026-09-08. Title, price, variants, gallery, templateSuffix, status and description untouched (description is 252 words, AU spelling, kept). `custom.videos`, `custom.amazon_*`, `custom.related_article*` untouched.

## Before → after (text blocks)

| AU template block (before) | Content | After |
|---|---|---|
| main (disabled) › accordion | "Stay productive and inspired… 825 buyers rate it 4.6…" + 4 bullets (mesh, backrest, dual lumbar, 126° recline) | `custom.highlights` 1, 2, 4, 5; ratings copy not migrated (Loox/Amazon metafields already carry ratings) |
| custom-main-product › trust badges | 3-Year Warranty / 30-Day Returns / Free Shipping | faq `m57-faq-6` (warranty + 30-day change-of-mind returns), `m57-faq-7` (delivery) |
| sihoo-product-highlights "Find your fit" (3 features) | mesh seat and back / adjustable lumbar / adjustable arm support | superseded by `custom.highlights` (6) |
| rich-text "Stay Cool, Stay Comfortable" | full-mesh airflow paragraph, "Available from $329" | highlight 1 / story wording; price line not migrated (price lives on the product) |
| image-with-text-overlay ×2 ("Tell your story" placeholder text) | placeholder copy | not migrated: theme placeholder; images reused as lifestyle |
| logo-list (4 tiles) | Full breathable mesh / Contoured backrest 3D / 3D adjustable armrests / Dual-adjustable lumbar | `custom.highlights` 1–4 + `highlight_images` (M57-08-01…04 icons) |
| rich-text "Sihoo M57 Ergonomic Office Chair Features" | theme placeholder body | not migrated: placeholder |
| image-with-text "The Seat Back Contoured to Your Back…" | S-curve backrest | feature_story `m57-story-1` |
| image-with-text "Recline with Ease…" | 126° recline, seat height, footrest mention | `m57-story-2` (footrest sentence moved to the footrest product) |
| image-with-text "Adjustable Lumbar Support…" | dual lumbar vertical/horizontal | `m57-story-3` (+ 5 cm / 4 cm from specs.lumbar_detail) |
| image-with-text "Headrest to Keep Your Head Supported…" | headrest 8 cm / 45° | `m57-story-4` |
| image-with-text "Keep Your Arms Supported in Three Directions…" | 3D armrests | `m57-story-5` (+ 7 cm / 6 cm / 35° from specs.armrest_detail) |
| image-with-text "Easy Controls, Effortless Adjustments…" | lever controls, 3-yr parts, returns via Sihoo Australia | `m57-story-6`, faq-6 |
| specs-compare app blocks | spec table / comparison table | unchanged (app); `custom.compare_products` = M57 Pro, M59AS + `compare_intro` |
| rich-text "Deciding between the M57 and the M18?" | link to comparison article | not migrated: article already in `custom.related_article_paths` |
| US page benefits / "How M57 Chair Helps?" / FAQ (8) | 330 lbs, 3.9" headrest, vs M18/C300/S100 | rewritten metric in faq `m57-faq-1…8` (vs M57 Pro / M59AS per brief); imperial figures dropped |
| US editor quotes (Creative Bloq, TechRadar, Tom's Guide) | | not migrated: third-party quotes, no AU metafield for them |

## Before → after (images)

| File (before) | gid | After |
|---|---|---|
| M57-08-01/02/03/04.jpg (AU 120×120 icons) | 39278314422563 / 39282338005283 / 39282338070819 / 39282338038051 | `highlight_images[1–4]` (highlights 5–6 fall back to icon) |
| 01_14737d3c….jpg (AU 800×495, woman at desk) | 39278327562531 | story-1 |
| 02_6d56920e….jpg (AU 1000×619, reclining) | 39282357010723 | story-2 |
| 03_270b2832….jpg (AU 800×495, lumbar close-up) | 39282361270563 | story-3 |
| 04_00293721….jpg (AU 599×496, headrest) | 39282367594787 | story-4 |
| 05_a59d0113….jpg (AU 500×309, armrest + diagram) | 39278364328227 | replaced (low-res) by US 0667.webp → uploaded 43783082279203 (1000×1000) for story-5 |
| 06_f5385aed….jpg (AU 500×309, hand on lever) | 39278382121251 | story-6 (low-res, flagged) |
| 01_9742685c…_1.jpg (AU 1200×600, reading reclined) | 39282333352227 | `lifestyle_images[1]` |
| 02_1ed5a3ef….jpg (AU 1200×600, office with M57s) | 39282378965283 | `lifestyle_images[2]` |
| US M57-5_0e7ab13f….webp (sit-stand desk, plants) | uploaded → 43783082311971 (800×800) | `lifestyle_images[3]` |
| US 0664/0666/0668/0669.webp, 05/09.webp, M57-2/3.webp, IMG_9672.jpg, m57.webp | — | not uploaded (spares; photo-only, could replace 06 if wanted) |
| US M57_1cd04297 / M57_a9e02564 (dimension charts, inches) | — | skipped: imperial-only figures |

## Video
`custom.hero_video` left unset: the M57 template has no background-video section. SIHOO_AU has "Sihoo M57 Office Chair Assembly Guide" (https://www.youtube.com/watch?v=4S5hM_AlfnM) — candidate if approved; `custom.videos` already exists and was not touched.

## Created objects

- feature_story: m57-story-1 → 316799844643, -2 → 316799877411, -3 → 316799910179, -4 → 316799942947, -5 → 316799975715, -6 → 316800008483
- faq_item: m57-faq-1…8 → 316801253667, 316801286435, 316801319203, 316801351971, 316801384739, 316801417507, 316801450275, 316801483043 (ACTIVE)
- faqs: faqs-m57 → 316806791459 (ACTIVE)
- Files uploaded: 43783082279203 (0667.jpg), 43783082311971 (M57-5….jpg) — both READY
- Metafields set: custom.highlights (6), highlight_images (4), best_for (4), feature_stories (6), faqs, compare_products (M57 Pro, M59AS), compare_intro, lifestyle_images (3); specs.needs_confirmation (new: description says headrest 9.9 cm vs specs 8 cm). hero_video / hero_video_file / whats_in_box: unset (no source on AU page).
