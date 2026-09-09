# V1 — page content migration (AU)

Product: `gid://shopify/Product/6080377258178` · handle `sihoo-v1-ergonomic-office-chair` · templateSuffix v1 (templates/product.v1.json, unchanged)
Sources: AU product description + gallery (`descriptionHtml`, `media`), shared AU template dump, existing `specs.*`. No US page (per brief).
Date: 2026-09-08. Title, price, variants, gallery, templateSuffix and status untouched. `custom.videos`, `custom.amazon_*`, `custom.related_article_paths`, `custom.related_articles` untouched.

## Before → after (text blocks)

| AU block (before) | Content | After |
|---|---|---|
| description › h2 + 5 ★【…】 bullets (headrest / ergonomic design / materials / research / warranty) | 3D headrest, lumbar height+depth, 4D armrests 360°, 90–140° recline, 10 cm seat lift, aluminium base, silent castors, double back frame, testing, 3-yr | highlights 1–6, stories v1-story-1…6, faq v1-faq-1…6; description kept, 'Recognized'→'Recognised', 'aluminum'→'aluminium'; 90–140° recline not in specs.* → degrees omitted, appended to specs.needs_confirmation |
| description › YouTube iframe GCSkokN3tWU | channel not verifiable as SIHOO_AU | not used for hero_video (left in description) |
| templates/product.v1.json › custom-main-product trust badges | 3-Year Warranty / 30-Day Returns / Free Shipping | faq v1-faq-6 (warranty), v1-faq-8 (30-day returns — allowed because the AU page states it) |
| templates/product.v1.json › demand-alert 'Extended dispatch: allow an additional 5–7 business days' + shipping-note 'Free shipping with delivery in 1-5 days' |  | not migrated; standard delivery FAQ used per brief — **conflicts with the live template notice, flagged** |
| templates/product.v1.json › image-with-text, key-features ×8, faq ×7, rich-text, image-with-text ×3 | all M18 copy ("Why Choose the SIHOO M18…", M18 vs M18 Pro, M18 dimensions) | not migrated: M18 copy on the V1 template |
| custom.videos › v1-video-product (SIHOO_AU A_dat3yLMBk) |  | custom.hero_video (flagged: source is custom.videos, not a template setting) |
| Variants Black/Grey × with/without Leg rest |  | faq v1-faq-4, highlight 4, story 4 |

## Before → after (images)

| File (before) | gid | After |
|---|---|---|
| gallery photos 1440×960: semi back right / semi front right / back / right reclined / front (no footrest) / right side | 38635057578275 / 38635058037027 / 38635057709347 / 38635057905955 / 38635058200867 / 38635057676579 | highlight_images[1–6], stories 1–6 |
| staff-area-chairs_V1.jpg (1920×822 office photo) | 26982150930626 | lifestyle_images[1] |
| gallery 678011 'Reliable comfort' woman with footrest (800², baked copy, no figures) | 38635058430243 | lifestyle_images[2] |
| gallery 559849 / 772640 / 577688 (4D armrest / backrest height / multi-adjustable — imperial-only figures) | 38635058331939 / 38635058364707 / 38635058397475 | skipped (imperial) |
| description V1_ec806d31.webp (1920×9656 infographic strip) | 26675262423234 | not referenced (too tall) |
| description 8.jpg | not found in Files | not migrated (legacy reference left in description) |
| gallery Video 15095873077442 (Shopify-hosted mp4, 'view 3') | gid://shopify/Video/15095873077442 | not set as hero_video_file (not a theme-hosted file) — could be used if approved |
| template images 02_6d56920e, 4_2f6c4792, photobank_7, C300-lumbar_support, M18-10, 7_97d170d1, 04_00293721, M18-12 | — | not migrated: M18/C300 imagery |

## Created objects

- feature_story: v1-story-1 → 316810035491, v1-story-2 → 316810068259, v1-story-3 → 316810101027, v1-story-4 → 316810133795, v1-story-5 → 316810166563, v1-story-6 → 316810199331
- faq_item (ACTIVE): v1-faq-1 → 316810363171, v1-faq-2 → 316810395939, v1-faq-3 → 316810428707, v1-faq-4 → 316810461475, v1-faq-5 → 316810494243, v1-faq-6 → 316810527011, v1-faq-7 → 316810559779, v1-faq-8 → 316810592547, v1-faq-9 → 316810625315
- faqs (ACTIVE): faqs-v1 → 316810821923
- File uploads: none (all images reused from existing AU Files / gallery)
- Metafields set: highlights (6), highlight_images (6), best_for, feature_stories, faqs, compare_products, compare_intro, lifestyle_images (2), hero_video, specs.needs_confirmation (appended). metafieldsSet userErrors: none.

## Content summary

**Highlights**
- 3D headrest: Height, angle and depth adjustment so it meets the curve of your neck
- 4D armrests: Height, depth, width and pivot, with pads that rotate through 360°
- 4D cushioned lumbar support: A padded lumbar block adjustable for height and depth
- Multi-position recline with optional leg rest: Lean back with adjustable tension; 'with Leg rest' options add a fold-away footrest
- Adjustable seat depth: 47.5–57 cm seat height and 44.5–49.5 cm seat depth on a 53 cm wide seat
- Aluminium base and double back frame: Polished aluminium base, silent castors, rated to 136 kg, 3-year warranty

**Feature stories**
1. A headrest that meets your neck — The V1's headrest moves in three dimensions — up and down, tilt, and forward and back — so it sits behind the curve of your neck rather than pushing your head forward. Set it once for upright typing and again when you recline for a call.
2. 4D armrests for every desk and task — Height, depth, width and pivot are all adjustable and the pads rotate through 360°, so you can bring them in for typing, spread them for a controller or angle them to match a recline. With your forearms supported, your shoulders drop and your wrists stay level with the keyboard.
3. Lumbar support you set, not just feel — A cushioned lumbar block adjusts for both height and depth, so you can dial in exactly how far it presses into the small of your back. The double-backed frame holds that shape all day, and the mesh keeps air moving behind you.
4. Lean back, feet up — The backrest reclines through several lockable positions with adjustable tension, for reading, a call or a proper break. Choose a 'with Leg rest' option and a padded footrest slides out from under the seat so you can lie back with your feet up.
5. A seat sized for taller Australians — A 53 cm wide seat with 44.5–49.5 cm of adjustable depth and a 47.5–57 cm height range means users up to 190 cm get full thigh support without the seat edge pressing behind the knee. The mesh seat lets air through, so it stays cool through a summer working day.
6. Built on aluminium — A polished aluminium base, silent castors and a double-backed frame give the V1 a solid, stable feel, and every part has been through cushion impact, armrest fatigue and static-pressure testing. It is rated to 136 kg and covered by a 3-year warranty.

**FAQ**
1. **Who is the Sihoo V1 designed for?** The V1 is a tall, fully adjustable chair sized for users 150–190 cm. The seat adjusts from 47.5 to 57 cm high and 44.5 to 49.5 cm deep, is 53 cm wide, and the chair stands 116–137 cm tall overall, so it suits taller users and anyone who wants to fine-tune every part of the chair.
2. **What is the maximum load of the V1?** The V1 is rated to a maximum user weight of 136 kg.
3. **What can I adjust on the V1?** Seat height (47.5–57 cm), seat depth (44.5–49.5 cm), the 3D headrest (height, angle and depth), the 4D armrests (height, depth, width and pivot, with 360° rotating pads), the cushioned lumbar support (height and depth), backrest recline with adjustable tension and multiple lock positions, 360° swivel and, on 'with Leg rest' options, the fold-away footrest.
4. **Does the V1 come with a leg rest?** It is your choice. The V1 is sold in Black and Grey either with or without the leg rest; the 'with Leg rest' options add a padded footrest that slides out from under the seat for reclined breaks and folds away when you are working.
5. **How long does assembly take and do I need tools?** Most people finish in 20–30 minutes following the illustrated guide; the hardware and the Allen key you need are in the box, and there is an assembly video on this page.
6. **What warranty does the V1 come with?** The V1 is covered by a 3-year warranty. If a part fails under normal use, contact us with your order number and a photo and we will send a replacement part free of charge.
7. **How quickly will my chair arrive?** Orders are dispatched the next business day from our Sydney, Melbourne, Brisbane or Perth warehouse and usually arrive within 1–3 business days. Delivery is free Australia-wide.
8. **Can I return the V1 if I change my mind?** Yes. You have 30 days from delivery to return the chair for a change of mind, provided it is unused and in its original packaging. Contact us with your order number and we will arrange the return.
9. **What is the difference between the V1, the M18 and the M57?** The V1 is the tallest and most adjustable of the three, with a 3D headrest, 4D armrests, a 4D cushioned lumbar support, seat-depth adjustment and an optional leg rest. The M18 is a lighter (18.5 kg) chair with 2D armrests, a self-weighing recline and a fabric seat cushion; the M57 has 3D armrests, a manually adjustable dual lumbar support and a full mesh seat. Both the M18 and M57 are rated to 150 kg and also suit users 150–190 cm.

**best_for**: All-day home office, Gaming and streaming, Users 160–190 cm, Reclined breaks with the leg rest  
**compare_products**: 6048691126466, 6074824392898  
**compare_intro**: The V1 is the tallest and most adjustable of the three (116–137 cm, 4D armrests, 4D lumbar support, 3D headrest, seat-depth adjustment, optional leg rest); the M18 and M57 are lighter chairs with 2D or 3D armrests and a 150 kg rating.
**hero_video**: https://www.youtube.com/watch?v=A_dat3yLMBk

## Notes / flags

- custom.videos untouched (2 items).
- hero_video from custom.videos (SIHOO_AU, model-specific) — flagged.
- Returns FAQ included because the v1 template shows a '30-Day Returns' trust badge.
- Template demand-alert (extra 5–7 business days) contradicts the standard delivery FAQ — needs a decision.
- specs.needs_confirmation appended: Description says 90°–140° reclining backrest and 10 cm seat-height travel; specs.* have no recline value (raw tilt 0/9/18/27°) and 47.5–57 cm — recline degrees omitted from new copy (2026-09-08 migration)

## Specs alignment 2026-09-09 (page copy wins — owner decision)

| specs key | old | new | source |
|---|---|---|---|
| recline_positions_deg | (unset; raw sc_attributes tilt 0/9/18/27°) | [90,140] | description "90°-140° reclining backrest" |
| data_source | AU sc_attributes 메타필드 | AU page copy 2026-09-09 (owner decision) + sc_attributes | |
| needs_confirmation | rewritten | open: no mechanism value, 1/31 image alt missing, 10 cm vs 9.5 cm seat travel | |

Migrated content edited: `custom.highlights` [3] ("Multi-position recline…" → "90–140° recline with optional leg rest: Lean back to 140°…"); faq_item v1-faq-3 ("backrest recline from 90° to 140°"); feature_story v1-story-4 ("reclines from upright to 140°"). Description pre-existed → untouched. Template demand-alert (extra 5–7 business days) vs delivery FAQ is delivery wording → left as decided by the owner. userErrors: none.
