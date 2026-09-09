# M18 — page content migration (AU)

Product: `gid://shopify/Product/6048691126466` · handle `sihoo-m18-ergonomics-task-office-chair` · template `m-18` (unchanged)
Sources: AU template `product.m-18.json`; existing description + `specs.*`; US page https://www.sihoo.com/products/m18-ergonomic-chair (feature wording + photo-only images)
Date: 2026-09-08. Title, price, variants, gallery, templateSuffix and status untouched. `custom.videos`, `custom.amazon_*`, `custom.related_articles`, `custom.related_article_paths` untouched.

## Metafields set

- `custom.highlights` (6), `custom.highlight_images` (6), `custom.best_for` (4), `custom.feature_stories` (5), `custom.faqs`, `custom.compare_products` (M18 Pro, M57), `custom.compare_intro`, `custom.lifestyle_images` (3)
- `specs.needs_confirmation` — one line appended (AU copy vs specs conflict, see below)
- `custom.hero_video` / `hero_video_file`: **unset** — AU template has no video section; US page videos (HJnlc33FKPo, iTi7zQeNDKg, 9aXVyVJt9Jc) are SIHOO global, not @SIHOO_AU. AU assembly video already lives in `custom.videos`.
- `custom.whats_in_box`: not set (AU page does not document box contents)
- Description: kept as-is (93 words, no US spellings; the only "center" is a CSS value)

## Created objects

- feature_story: m18-story-1 → 316796600611, -2 → 316796633379, -3 → 316796666147, -4 → 316796698915, -5 → 316796731683
- faq_item (ACTIVE): m18-faq-1…9 → 316795355427, 316795420963, 316795453731, 316795486499, 316795519267, 316795552035, 316795584803, 316795617571, 316795650339
- faqs (ACTIVE): faqs-m18 → 316796764451
- Files uploaded from US (6, all READY): 43783081034019 (1_0000__0694 lumbar knob), 43783081066787 (1_0001__0691 armrest), 43783081099555 (1_0002__0690 headrest), 43783081132323 (M18-09 seat), 43783081165091 (M18-11 lumbar), 43783081197859 (M18-07 home office)

## Before → after (text blocks)

| AU template block (before) | Content | After |
|---|---|---|
| custom-main-product › trust badges | 3-Year Warranty / 30-Day Returns / Free Shipping | faq-6 (warranty), faq-8 (returns), faq-7 (delivery) |
| custom-main-product › demand alert / shipping note | "Extended dispatch 5–7 days" / "Free shipping 1-5 days" | not migrated: theme-level shipping notice, superseded by delivery FAQ wording |
| sihoo-product-highlights (already live) | Cushioned seat / Adjustable lumbar / Footrest option | superseded by `custom.highlights` 1, 3, 6 |
| image-with-text "Why Choose the SIHOO M18?" (disabled) | 6 bullets: lumbar, mesh, recline, headrest+armrests, W seat, steel frame + aluminium base | `custom.highlights` 1–6 |
| key-features (disabled) — steel structure / aluminium base | | not migrated: no photo-only base image with AU spelling (4_2f6c4792 has "Aluminum" baked in) |
| key-features — Reclining comfort / Adjustable reclining positions | | story-5 + faq-3 (angles taken from specs, not the 110/116/130 image) |
| key-features — Ergonomic lumbar support | | story-1, highlight 1 |
| key-features — Breathable mesh | | story-2, highlight 2 |
| key-features — Adjustable headrest / Adjustable armrests | | story-4, highlights 4–5 |
| rich-text "Advanced Ergonomic Features" (disabled) | intro paragraph | folded into story bodies |
| faq "What's the difference between M18 and M18 Pro?" ($90) | | faq-9 (no dollar figure, merged with vs M57) |
| faq "Is the M18 good for home offices?" | | `custom.best_for` |
| faq "Does the M18 come with a footrest?" | | story-5 + highlight 6 |
| faq "Are the armrests adjustable?" / "Breathable for Australian weather?" | | highlights 4, 2; story-2 |
| faq "Seat dimensions" (46–55 / 51 / 46 / 107–130) and "Max weight" (136 kg) | conflict with specs.* | faq-1, faq-2, faq-4 use specs.* (43–53 / 51 / 42 / 107–121, 150 kg); conflict logged in `specs.needs_confirmation` |
| US page feature list (8 items) | wording only | highlights / stories (AU spelling, metric) |
| US FAQ 1–10 | | faq-3 (lumbar), faq-9 (vs M57); US shipping/returns/support not used |
| Product description (93 words: 136 kg, 110–126°, tilt-lock) | | kept verbatim; conflict flagged |

## Before → after (images)

| File (before) | gid | After |
|---|---|---|
| AU 02_6d56920e….jpg (woman reclining, 1000×619, photo) | 39282357010723 | `lifestyle_images[1]` |
| AU 01_9742685c…_1.jpg (woman at desk, 1200×600, photo) | 39282333352227 | `lifestyle_images[2]` |
| US M18-07.jpg (home office, photo) | 43783081197859 | `lifestyle_images[3]` |
| AU M18-10.jpg (mesh close-up, 700×433) | 39282485166371 | story-2, `highlight_images[2]` |
| AU 04_00293721….jpg (headrest, 599×496, photo) | 39282367594787 | story-4 |
| AU M18-12.jpg (armrest, 1940×1200) | 39282485199139 | spare (US square armrest used instead) |
| AU photobank_7.jpg (footrest, baked "Comfortable siesta" text) | 42470760317219 | not used — gallery photo 445246 used instead |
| AU 4_2f6c4792….jpg (base, baked "Aluminum" US spelling) | 42470788038947 | not migrated |
| AU 7_97d170d1….jpg (recline 110/116/130° baked, contradicts specs) | 42470814515491 | not migrated |
| AU C300-lumbar_support….webp | — | not migrated: C300 image, wrong model |
| Gallery sihoo-m18-…-445246.jpg (woman with footrest, photo) | 38275435561251 | story-5, `highlight_images[6]` |
| US 1_0000__0694 / 1_0001__0691 / 1_0002__0690 (1000×1000 lumbar knob / armrest / headrest) | 43783081034019 / 43783081066787 / 43783081099555 | `highlight_images[1,4,5]` |
| US M18-09 (W seat, photo) | 43783081132323 | story-3, `highlight_images[3]` |
| US M18-11 (lumbar knob on mesh, photo) | 43783081165091 | story-1 |
| US M18-14 (110°/126° baked), M18_f9a040a8 / M18_ff01fce0 (imperial dimensions), M18_3343198c (certs) | — | not migrated (angle conflict / imperial / no cert in specs) |

## Flags

- specs.* for the M18 (self-weighted mechanism, linked-recline armrests, 109/122/134°, 150 kg) are identical to the M18 Pro record; AU description + template FAQ say 136 kg, 46–55 cm seat, 110–126° tilt-lock. Metafield copy follows specs.*; confirm which is right.

## Specs alignment 2026-09-09 (page copy wins — owner decision)

Source of truth: description (136 kg, 150–190 cm, 110–126° tilt-lock) + template FAQ (seat 46–55 / 51 / 46 cm, overall 107–130 cm, 136 kg, "base M18's 2D armrests").

| specs key | old | new |
|---|---|---|
| max_load_kg | 150 | 136 |
| seat_height_min_cm / max | 43 / 53 | 46 / 55 |
| seat_depth_min_cm / max | 42 / 42 | 46 / 46 |
| overall_height_max_cm | 121 | 130 |
| recline_positions_deg | [109,122,134] | [110,126] |
| mechanism | self-weighted, 3 lockable positions | tilt-lock, 110–126°, locks in place |
| armrest_detail | 2D + 15.2° swivel + "Linked Recline" (M18 Pro copy) | 2D: 7 cm up/down, 6 cm front/back |
| data_source / needs_confirmation | sc_attributes / conflict list | "AU page copy 2026-09-09 (owner decision) + sc_attributes" / open items only |

Edited: `custom.highlights[6]` (tilt-lock 110–126°), `custom.compare_intro` (136 / 110 / 150 kg), faq_item m18-faq-1, -2, -3, -4, -9, feature_story m18-story-5. Description untouched (pre-existing).
Still open: headrest/lumbar/armrest travel figures remain the M18 Pro numbers (no AU page figure); baked-angle images 7_97d170d1 / M18-14 unused.
