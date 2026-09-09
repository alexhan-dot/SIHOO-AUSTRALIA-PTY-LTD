# Vito M90 — page content migration (AU)

Product: `gid://shopify/Product/7480195449026` · handle `sihoo-vito-m90-ergonomic-office-chair` · templateSuffix (empty → templates/product.json, unchanged)
Sources: AU product description + gallery (`descriptionHtml`, `media`), shared AU template dump, existing `specs.*`. No US page (per brief).
Date: 2026-09-08. Title, price, variants, gallery, templateSuffix and status untouched. `custom.videos`, `custom.amazon_*`, `custom.related_article_paths`, `custom.related_articles` untouched.

## Before → after (text blocks)

| AU block (before) | Content | After |
|---|---|---|
| description › h2 + 5 【…】 bullets (lumbar / mesh / adjustable / quality / warranty) | adaptive lumbar, mesh, headrest + 3D armrests + 90–123° tilt, 5'5"–6'2", 4" lift, BIFMA/SGS 2504 lb, 330 lb, eight steps, 3-yr | highlights 1–6, stories m90-story-1…5, faq m90-faq-1…6; description kept, 'fiber'→'fibre' ×2; 330 lb / 3D / 90–123° / height conflicts → specs used, appended to specs.needs_confirmation (imperial figures in the old description left as-is — flagged) |
| description › brand paragraph + 8 bullets (smart dynamic lumbar pillow, 3D armrests w/ linkage, 6 cm backrest lift, double-joint headrest, 130° recline, BIFMA/SGS, Textilene, home aesthetic) |  | stories 1 / 2 / 3 / 4 / 5 / 6, faq 3–4 |
| description › MATERIALS list | mesh, nylon+fibre lumbar, S-shaped PP frame, steel mechanism, 3D PU armrest, 350 aluminium base 1136 kg, 60 mm castors | story 6, faq 2 |
| templates/product.json (shared default) sections | M18 copy | not migrated: shared template carries M18 copy |
| custom.videos › m90-video-product (SIHOO_AU ibVZ7wA42cg) |  | custom.hero_video (source is the product's own SIHOO_AU video record, not a template setting — flagged) |

## Before → after (images)

| File (before) | gid | After |
|---|---|---|
| sihoo-m90c_8 (1000², adaptive lumbar + 6 cm backrest, baked English copy, metric) | 34656696598819 | highlight 1, story 1 |
| sihoo-m90c_7 (800², double-jointed headrest 22°, baked copy) | 34656696402211 | highlight 2, story 3 |
| sihoo-m90c_1 (1000², headrest/armrest 7 cm/6 cm/5 cm/32°, baked copy) | 34656696467747 | highlight 3 |
| gallery right angle black (4176×2784, photo) | 38635056103715 | highlight 4, story 4 |
| sihoo-m90c_2 (1000², mesh, baked copy) | 34656696533283 | highlight 5, story 5 |
| sihoo-m90c_3 (800², front+side photo) | 34656696271139 | highlight 6 |
| gallery semi front right black (photo) | 38635056070947 | story 2 |
| M90C-07 (1920×800 three-photo lifestyle strip, photo-only) | 32355675668771 | story 6, lifestyle_images[2] |
| M90C-07_1 (600², home office photo) | 34656696664355 | lifestyle_images[1] |
| M90C-04 (1920×800, "2.36" backrest lift" — imperial-only) | 32355511501091 | skipped (imperial) |
| M90C-01/02/03/05/06 banners (baked copy; 3D armrests / 130° recline conflict with specs), M90C1 (SIHOO M90C banner), sihoo-m90c (123° tilt), M90C_Dimension, sihoo-m90c_4/6, m90d_* (M90D variant), M90-C white | various | not referenced |

## Created objects

- feature_story: m90-story-1 → 316803547427, m90-story-2 → 316803580195, m90-story-3 → 316803612963, m90-story-4 → 316803645731, m90-story-5 → 316803678499, m90-story-6 → 316803744035
- faq_item (ACTIVE): m90-faq-1 → 316804170019, m90-faq-2 → 316804202787, m90-faq-3 → 316804235555, m90-faq-4 → 316804268323, m90-faq-5 → 316804301091, m90-faq-6 → 316804333859, m90-faq-7 → 316804399395, m90-faq-8 → 316804432163
- faqs (ACTIVE): faqs-m90 → 316805185827
- File uploads: none (all images reused from existing AU Files / gallery)
- Metafields set: highlights (6), highlight_images (6), best_for, feature_stories, faqs, compare_products, compare_intro, lifestyle_images (2), hero_video, specs.needs_confirmation (appended). metafieldsSet userErrors: none.

## Content summary

**Highlights**
- Adaptive dual lumbar support: A split backrest whose lumbar section adjusts its push to your weight and posture
- Double-jointed headrest: Height and angle set independently, with stretch mesh for the neck
- Linked armrests: Armrests move with the backrest as you recline and adjust for height and depth
- Three-position recline: Lean back and lock at 110°, 116° or 126° with adjustable tension
- Full mesh seat and back: Breathable, elastic mesh throughout; the M90D option adds a sponge seat cushion
- Tested and warranted: BIFMA and SGS certified, aluminium alloy base, rated to 136 kg, 3-year warranty

**Feature stories**
1. A backrest in two parts — The M90's backrest is split so the upper section supports your shoulders while a separate lumbar section adapts its push to your weight and the angle you sit at. Lean forward, sit upright or recline and it follows, so your lower back stays supported without a dial. Lift the backrest 6 cm across three gears to line the lumbar section up with your own spine.
2. Armrests that recline with you — The armrests are linked to the backrest, so when you lean back they move with you and your elbows stay supported instead of being left behind. Height and depth are adjustable, so you can line the pads up with your desk and keep your wrists level with the keyboard.
3. A double-jointed headrest — Two joints let you set the headrest's height and angle independently, so it cradles the neck whether you are upright on a call or leaning back to read. The stretch mesh gives a little as you settle in, rather than pushing your head forward.
4. Three ways to lean back — Pull the lever and the backrest reclines and locks at any of three positions — 110°, 116° or 126° — and a knob under the seat sets the tension so the recline gives as much or as little as you like. The seat height adjusts from 46 to 55 cm, which suits users from 150 to 190 cm.
5. Cool, elastic mesh from seat to headrest — The seat and back are woven from a breathable, elastic mesh that keeps air moving and spreads your weight across the seat instead of concentrating it under the hips. Prefer a padded seat? The M90D option swaps the mesh seat for a soft sponge cushion.
6. At home in any room — In black, or grey mesh on a grey frame, the M90 fits a study, a living-room corner or a shared office. Under the seat is a precision steel mechanism and an aluminium alloy five-star base tested to a 1,136 kg static load, on quiet 60 mm castors for carpet or hard floors. The chair is BIFMA and SGS certified and covered by a 3-year warranty.

**FAQ**
1. **Who is the Sihoo Vito M90 designed for?** The M90 is a full-height chair with a headrest, sized for users 150–190 cm tall. The seat adjusts from 46 to 55 cm high, is 51 cm wide and 46 cm deep, and the chair stands 107–130 cm tall overall. If you prefer a padded seat to mesh, choose the M90D option, which has a soft sponge cushion.
2. **What is the maximum load of the M90?** The M90 is rated to a maximum user weight of 136 kg. The gas lift and mechanism are BIFMA and SGS certified, and the aluminium alloy base has passed a 1,136 kg static pressure test.
3. **How does the adaptive lumbar support work?** The backrest is split into two sections. The lower lumbar section is mounted on a nylon and fibre spring that adjusts its support to your weight and the angle you are sitting at, so it keeps pressing gently into your lower back whether you lean forward, sit upright or recline. You can also raise or lower the whole backrest by 6 cm, across three gears, to match the lumbar section to your height.
4. **What can I adjust on the M90?** Seat height (46–55 cm), backrest height (6 cm, three gears), backrest recline (locks at 110°, 116° or 126°) and recline tension, headrest height and angle on two joints, armrest height and depth (the armrests are linked to the backrest so they move with you when you recline), and 360° swivel.
5. **How long does assembly take and do I need tools?** Assembly follows eight illustrated steps and usually takes one person about 20 minutes. The hardware and the Allen key you need are in the box, and there is an assembly video on this page.
6. **What warranty does the M90 come with?** The M90 is covered by a 3-year warranty. If a part fails under normal use, contact us with your order number and a photo and we will send a replacement part free of charge.
7. **How quickly will my chair arrive?** Orders are dispatched the next business day from our Sydney, Melbourne, Brisbane or Perth warehouse and usually arrive within 1–3 business days. Delivery is free Australia-wide.
8. **How does the M90 compare with the M90 with footrest and the M76?** The M90 with footrest is the same chair with a padded leg rest that slides out from under the seat for reclined breaks. The M76 is a much lighter (9.6 kg) compact mid-back chair with flip-up armrests, a 5 cm sponge seat and no headrest, sized for users 150–180 cm; the M90 is the pick if you sit for full days and want a headrest and adaptive lumbar support.

**best_for**: Home office, Full 8-hour work days, Users 150–190 cm, Anyone who wants adaptive lumbar support  
**compare_products**: 8757046018339, 8739162390819  
**compare_intro**: The M90 with footrest is the same chair plus a pull-out leg rest for reclined breaks; the M76 is a lighter, compact mid-back chair (88.5–98.5 cm tall, 9.6 kg) with flip-up armrests and no headrest.
**hero_video**: https://www.youtube.com/watch?v=ibVZ7wA42cg

## Notes / flags

- custom.videos untouched (2 items).
- hero_video set from custom.videos (SIHOO_AU channel, model-specific) — not from a template setting; remove if the strict template-only rule applies.
- Old description still contains imperial figures (5'5"–6'2", 4", 2504 lb, 330 lb) — only spellings were changed per the brief.
- specs.needs_confirmation appended: Description/gallery say 150 kg (330 lb) max load, 3D armrests (7 cm / 6 cm / 32°), recline lockable at 103°/113°/123° (banner: 130°) and users 165–188 cm; specs.* say 136 kg, 2D armrests, 110°/116°/126° and 150–190 cm — specs used in new copy (2026-09-08 migration)

## Specs alignment 2026-09-09 (page copy wins — owner decision)

| specs key | old | new | source |
|---|---|---|---|
| max_load_kg | 136 | 150 | description "330 lbs" (150 kg) |
| armrest_type / armrest_detail | 2D / 2D | 3D / "3D armrests, linked to backrest recline (gallery: 7 cm / 6 cm / 32° adjustment)" | description "3D armrests with back linkage", gallery sihoo-m90c_1 |
| recline_positions_deg | [110,116,126] | [103,113,123] | gallery lock positions (description: 3 positions between 90° and 123°) |
| user_height_min_cm / user_height_max_cm | 150 / 190 | 165 / 188 | description 5'5"–6'2" |
| headrest_detail | (unset) | Double-joint elastic headrest (height and angle), stretch mesh | description |
| mechanism | (unset) | Mechanical steel multifunctional mechanism, 3-position recline lock, adjustable recline tension; 6 cm backrest lift (3 gears) | description MATERIALS + bullets |
| data_source | AU sc_attributes 메타필드 | AU page copy 2026-09-09 (owner decision) + sc_attributes | |
| needs_confirmation | rewritten | open: no gallery video, 4" (10 cm) vs 9 cm seat travel, 130° banner vs 123° top lock | |

Migrated content edited: `custom.highlights` [2] (3D linked armrests), [3] (103/113/123°), [5] (150 kg); `custom.best_for` (165–188 cm); faq_item m90-faq-1 (165–188 cm), m90-faq-2 (150 kg), m90-faq-4 (103/113/123°, 3D armrests), m90-faq-8 (M76 now 150–175 cm); feature_story m90-story-2 (3D pads), m90-story-4 (103/113/123°, 165–188 cm). Description pre-existed → untouched (imperial figures remain). userErrors: none.
