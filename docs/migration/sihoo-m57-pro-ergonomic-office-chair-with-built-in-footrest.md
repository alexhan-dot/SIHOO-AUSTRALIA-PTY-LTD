# M57 Pro with built-in footrest — page content migration (AU)

Product: `gid://shopify/Product/9902935507235` · handle `sihoo-m57-pro-ergonomic-office-chair-with-built-in-footrest` · template `m57-pro` (shared with M57 Pro, unchanged)
Sources: AU template `product.m57-pro.json` + existing description; no US page.
Date: 2026-09-08. Title, price, variants, gallery, templateSuffix, status and description untouched (description is 349 words, AU spelling, kept). `custom.related_article*` untouched.

## Before → after (text blocks)

| AU template block (before) | Content | After |
|---|---|---|
| main › accordion / description bullets (same as M57 Pro) | 4D armrests, double-joint headrest, S-curve backrest, elastomer lumbar, auto-balance 90–130°, 150 kg, 15-min assembly, 3-yr parts & labour | `custom.highlights` 1–5, faq `m57-pro-fr-faq-2/3/5/6`; recline from specs (109/122/134) — see needs_confirmation |
| rich-text "Stay cool, stay comfortable" | full-mesh airflow | highlight 1 / story-6 |
| background-video | Shopify mp4 "Sihoo s M57C… hexagonal God of war.mp4" (+ Shopify placeholder YouTube id) | `custom.hero_video_file` = gid://shopify/Video/40818915934499 |
| image-with-text-overlay 13/14/15 with note "*The Footrest is not available in Without Built-in Footrest." | footrest images | 13 → story-5 on this product; note itself not migrated |
| Footrest (title only) | | new: story-5, faq-4, highlight 6, best_for |
| specs-compare app blocks | | unchanged; `compare_products` = M57 Pro, M57 with footrest + `compare_intro` |

## Before → after (images)

| File (before) | gid | After |
|---|---|---|
| 4.jpg / 3.jpg / 6_9f8458f1 / 9_3714225a (baked-text feature tiles, metric) | 40818980323619 / 40818980192547 / 40818980258083 / 40818980127011 | story-1 / -2 / -3 / -4 (same as M57 Pro) |
| 13_4bc7840f "134° LIE DOWN AND RELAX" (footrest shown, baked text) | 40818980356387 | story-5 |
| 12.jpg "BUILT-IN ELASTIC FOAM" | 40818980159779 | story-6 |
| M57C_0058 / M57C_0063 / M57C_0065.jpg (grey studio, footrest extended, 1281×1920, photo-only) | 40818881954083 / 40818882085155 / 40818882117923 | `lifestyle_images[1–3]` — flagged: no scenario photos in AU template or gallery; studio shots used |
| M57-08-01…04 icons | 39278314422563 / 39282338005283 / 39282338070819 / 39282338038051 | `highlight_images[1–4]` |
| 14_e5de23f4 "FULL BREATHABLE MESH", 15_666c2a76 dimensions, 2_9da6f176 (US-centric BIFMA), 10.jpg collage | — | not referenced |

## Created objects

- feature_story: m57-pro-fr-story-1 → 316804792611, -2 → 316804858147, -3 → 316804956451, -4 → 316805021987, -5 → 316805087523, -6 → 316805120291
- faq_item: m57-pro-fr-faq-1…8 → 316805284131, 316805316899, 316805349667, 316805382435, 316805447971, 316805480739, 316805513507, 316805546275 (ACTIVE)
- faqs: faqs-m57-pro-fr → 316806889763 (ACTIVE)
- Files uploaded: none
- Metafields set: custom.highlights (6), highlight_images (4), best_for (4), feature_stories (6), faqs, compare_products (M57 Pro, M57 FR), compare_intro, lifestyle_images (3), hero_video_file; specs.needs_confirmation appended (description recline 90–130° vs specs 109/122/134; "2,000 lb"). hero_video / whats_in_box: unset. Returns FAQ skipped: AU page states no returns policy.

## Specs alignment 2026-09-09 (page copy wins — owner decision)

Source of truth: description ("recline from 90°–130° with three lockable angles", 150 kg, 4D).

| specs key | old | new |
|---|---|---|
| recline_positions_deg | [109,122,134] | [90,130] |
| mechanism | self-weighted, 3 lockable positions | auto-balance self-weight sensing, 90°–130°, three lockable angles |
| data_source / needs_confirmation | sc_attributes / conflict list | aligned line + open items |

Edited: `custom.highlights[6]` (90°–130°), `custom.compare_intro` (M57 FR recline to 120°), faq_item m57-pro-fr-faq-3, -4, -8, feature_story m57-pro-fr-story-5 (title + body). Description untouched.
Still open: story-5 image 13_4bc7840f has "134° lie down" baked in; description says 10 cm seat travel vs specs 42–50 cm; "2,000 lb" imperial in description.
