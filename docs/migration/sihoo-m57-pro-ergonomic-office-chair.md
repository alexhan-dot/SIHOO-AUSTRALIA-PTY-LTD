# M57 Pro — page content migration (AU)

Product: `gid://shopify/Product/9882207650083` · handle `sihoo-m57-pro-ergonomic-office-chair` · template `m57-pro` (unchanged)
Sources: AU template `product.m57-pro.json` + existing description; no US page (none given).
Date: 2026-09-08. Title, price, variants, gallery, templateSuffix, status and description untouched (description is 321 words, AU spelling, kept). `custom.related_article*` untouched.

## Before → after (text blocks)

| AU template block (before) | Content | After |
|---|---|---|
| main › text "Ready to feel the difference? Click Add to Cart…" | CTA | not migrated: CTA copy |
| main › accordion "Sihoo M57 PRO … 4D Adjustable High-Back…" | "Hexagonal God of War", BIFMA, five patents, "Perfect for" list (home offices, teams, gamers, M57 upgraders) | `custom.best_for` (4); patents/nickname not migrated (unverifiable marketing) |
| rich-text "Stay cool, stay comfortable" | full-mesh airflow, Aussie heat | highlight 1 / story-5 wording |
| background-video | Shopify mp4 "Sihoo s M57C… hexagonal God of war.mp4" + YouTube _9VUPq3SxOc (Shopify placeholder video, not SIHOO_AU) | `custom.hero_video_file` = gid://shopify/Video/40818915934499 (READY); YouTube URL ignored (placeholder) |
| image-with-text-overlay ×15 (all "Tell your story" placeholder text) | images carry the copy (baked-in English, metric) | see images; placeholder text not migrated |
| Description bullets (features / quality / long stints / materials / warranty) | 4D armrests, double-joint headrest, S-curve backrest, elastomer lumbar, auto-balance 90–130°, 150 kg, 15-min assembly, 3-yr parts & labour | `custom.highlights` 2–6, faq `m57-pro-faq-2…6`; recline range taken from specs (109/122/134) not description — see needs_confirmation |
| specs-compare app blocks | | unchanged; `compare_products` = M57, M57 Pro with footrest + `compare_intro` |

## Before → after (images)

| File (before) | gid | After |
|---|---|---|
| 4.jpg "S-SHAPED BACKREST" (750×1068, baked text) | 40818980323619 | story-1 |
| 3.jpg "DOUBLE JOINT 3D HEADREST" (22°, 11 cm — metric) | 40818980192547 | story-2 |
| 6_9f8458f1….jpg "ADAPTIVE LUMBAR SUPPORT" | 40818980258083 | story-3 |
| 9_3714225a….jpg "4D ADJUSTABLE ARMREST" | 40818980127011 | story-4 |
| 12.jpg "BUILT-IN ELASTIC FOAM" | 40818980159779 | story-5 |
| 663A0299.jpg (studio side photo, no text, 2879×1920) | 40818806653219 | story-6 |
| 663A9260 / 663A0296 / 663A9254.jpg (studio, photo-only) | 40818978193699 / 40818806030627 / 40818978292003 | `lifestyle_images[1–3]` — flagged: no scenario/lifestyle photos exist in the AU template or gallery; studio shots used |
| M57-08-01…04 (M57 icons) | 39278314422563 / 39282338005283 / 39282338070819 / 39282338038051 | `highlight_images[1–4]` (generic mesh/backrest/armrest/lumbar icons reused; 5–6 fall back) |
| 1_32e4b5b7 "6 KEY ERGONOMICS", 5.jpg "4-HEIGHT LOCKING BACKREST", 7.jpg "ERGONOMIC LUMBAR SUPPORT", 8_c2fdb951 "4-WAY ADJUSTABLE", 10.jpg (4-scene collage with labels), 14_e5de23f4 "FULL BREATHABLE MESH" | — | not referenced (duplicates / icon tiles) |
| 2_9da6f176 "SIHOO M57C – passed BIFMA test in the United States" | — | skipped: US-centric wording |
| 13_4bc7840f "134° LIE DOWN" (footrest shown) | — | used on the footrest product only (template note: footrest not on this model) |
| 15_666c2a76 "Product dimensions" | — | skipped: spec tile |
| M57C_00xx.jpg (grey studio set) | — | used on the footrest product |

## Created objects

- feature_story: m57-pro-story-1 → 316802040099, -2 → 316802072867, -3 → 316802105635, -4 → 316802138403, -5 → 316802171171, -6 → 316802203939
- faq_item: m57-pro-faq-1…8 → 316802957603, 316802990371, 316803023139, 316803055907, 316803088675, 316803121443, 316803154211, 316803186979 (ACTIVE)
- faqs: faqs-m57-pro → 316806824227 (ACTIVE)
- Files uploaded: none
- Metafields set: custom.highlights (6), highlight_images (4), best_for (4), feature_stories (6), faqs, compare_products (M57, M57 Pro FR), compare_intro, lifestyle_images (3), hero_video_file; specs.needs_confirmation appended (description recline 90–130° vs specs 109/122/134; "2,000 lb" imperial). hero_video / whats_in_box: unset. Returns FAQ skipped: AU page states no returns policy.
