# M18 Pro — page content migration (AU)

Product: `gid://shopify/Product/9883536228643` · handle `sihoo-m18-pro-ergonomic-office-chair` · template `m18-pro` (unchanged)
Sources: AU template `product.m18-pro.json` (17 A+ images M18_750_01–17 + rich text); existing description + `specs.*`. No US page.
Date: 2026-09-08. Title, price, variants, gallery, templateSuffix and status untouched. `custom.related_articles`, `custom.related_article_paths` untouched.

## Metafields set

- `custom.highlights` (6), `custom.best_for` (4), `custom.feature_stories` (6), `custom.faqs`, `custom.compare_products` (M18, M57 Pro), `custom.compare_intro`, `custom.lifestyle_images` (2)
- `specs.needs_confirmation` — one line appended
- `custom.highlight_images`: **not set** — every AU M18 Pro image is a tall 750-px A+ infographic (no square feature crops); the section falls back to icons
- `custom.hero_video` / `hero_video_file`: **unset** — the only video in the template is a disabled background-video pointing at the M57C instruction video (wrong model)
- `custom.whats_in_box`: not set (not documented)
- Description: kept as-is (already AU spelling: centred, moulds, maximises, labour, fibre). Contains pasted table markup (svg copy button) and load/recline claims that contradict specs — flagged, not edited

## Created objects

- feature_story: m18-pro-story-1 → 316796961059, -2 → 316796993827, -3 → 316797026595, -4 → 316797059363, -5 → 316797092131, -6 → 316797124899
- faq_item (ACTIVE): m18-pro-faq-1…9 → 316797845795, 316797878563, 316797911331, 316797944099, 316797976867, 316798009635, 316798042403, 316798075171, 316798107939
- faqs (ACTIVE): faqs-m18-pro → 316798959907
- File uploads: none

## Before → after (text blocks)

| AU template block (before) | Content | After |
|---|---|---|
| main › text "Rated for 6+ hour desk days. Free delivery, 3-year warranty." | | best_for[1], faq-6, faq-7 |
| main › collapsible "SIHOO M18 Pro …: 4D Linked Armrests…" | 7 upgrades, BIFMA, "Perfect for" list | highlights 1–6, `custom.best_for`, story-6 |
| rich-text "Why the M18 Pro?" ($90 more, 136 kg) | | faq-9 / compare_intro (no dollar figure; 150 kg per specs) |
| image-with-text-overlay ×17 (placeholder "Tell your story" copy; real content is baked into the images) | | copy dropped; images mapped below |
| overlay subheading "*The Footrest is not available in Without Built-in Footrest." | | faq-8 |
| background-video (disabled, M57C video) | | not migrated: wrong model |
| specs-compare comparison table (12 products) | | `custom.compare_products` limited to M18 + M57 Pro |
| Description table "M18 Standard vs M18 Pro" (100 kg / 110 kg, 3D armrests on M18) | conflicts with specs | not used; flagged |

## Before → after (images) — all AU shop_images, all with baked-in English copy (metric only)

| File (before) | gid | After |
|---|---|---|
| M18_750_01 (BIFMA test figures) | 40911049130275 | not migrated: test-count infographic |
| M18_750_02 (7 upgrades / 3 continuations overview) | 40911049195811 | not used |
| M18_750_03 / _12 (section banners 750×287) | 40911048540451 / 40911048573219 | not migrated |
| M18_750_04 (4D linked armrests) | 40911048999203 | story-2 (baked text) |
| M18_750_05 (non-linked pain points) | 40911049097507 | not used |
| M18_750_06 (armrest pull/nap, woman at desk) | 40911048835363 | `lifestyle_images[2]` (baked text) |
| M18_750_07 (armrest depth) | 40911049163043 | not used |
| M18_750_08 (adaptive mechanism, 45 kg / 100 kg) | 40911048966435 | story-1 (baked text) |
| M18_750_09 (moth-shaped lumbar) | 40911049261347 | story-3 (baked text) |
| M18_750_10 (dual-joint headrest, 22° rotation) | 40911049064739 | story-4 (baked text) |
| M18_750_11 (134° recline) | 40911048802595 | story-6 (baked text) |
| M18_750_13 (moth lumbar 4 cm / 2 cm) | 40911049228579 | not used (duplicate of story-3) |
| M18_750_14 (4-position liftable backrest) | 40911049031971 | story-5 (baked text) |
| M18_750_15 (W-shaped cushion) | 40911048769827 | not used (folded into story-5) |
| M18_750_16 (Yida mesh) / _17 (parameters, metric) / _18 (spec table) | 40911049294115 / 40911048933667 / 40911048737059 | not migrated: spec tiles |
| 01_9742685c…_1.jpg (woman at desk, photo; from disabled overlay) | 39282333352227 | `lifestyle_images[1]` |

## Flags

- `specs.armrest_type` = 2D but all AU copy/images say 4D linked (armrest_detail already lists height/depth/15.2° swivel/linked recline). Highlights say "linked armrests" with the specs numbers, avoiding the 2D/4D label.
- Description claims 110 kg (M18 100 kg) and 90–130° vs specs 150 kg and 109/122/134°.

## Specs alignment 2026-09-09 (page copy wins — owner decision)

Source of truth: description (4D linked armrests; 90°–130° with three lockable angles; 110 kg safe working load, also in the M18 vs M18 Pro table).

| specs key | old | new |
|---|---|---|
| armrest_type | 2D | 4D |
| armrest_detail | "2D armrest: …" | "4D linked armrest (height, width, depth, rotation): …" (same 7 cm / 6 cm / 15.2° / linked figures) |
| max_load_kg | 150 | 110 |
| recline_positions_deg | [109,122,134] | [90,130] |
| mechanism | self-weighted, 3 lockable positions | adaptive self-weight sensing, 90°–130°, three lockable angles |
| data_source / needs_confirmation | sc_attributes / conflict list | aligned line + open items |

Edited: `custom.highlights[2]` (4D linked), `[6]` (90–130°, 110 kg), `custom.compare_intro`, faq_item m18-pro-faq-2, -3, -4, -9, feature_story m18-pro-story-2 (title + body), m18-pro-story-6 (title + body). Description untouched.
Still open: template rich-text "Why the M18 Pro?" says 136 kg (description 110 kg used); story-6 image M18_750_11 has "134°" baked in; description cites BIFMA & CNAS vs specs.certifications BIFMA/SGS; stray table markup in description.
