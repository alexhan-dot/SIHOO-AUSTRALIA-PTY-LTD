# M76 — page content migration (AU)

Product: `gid://shopify/Product/8739162390819` · handle `sihoo-m76-ergonomics-office-chair` · templateSuffix (empty → templates/product.json, unchanged)
Sources: AU product description + gallery (`descriptionHtml`, `media`), shared AU template dump, existing `specs.*`. No US page (per brief).
Date: 2026-09-08. Title, price, variants, gallery, templateSuffix and status untouched. `custom.videos`, `custom.amazon_*`, `custom.related_article_paths`, `custom.related_articles` untouched.

## Before → after (text blocks)

| AU block (before) | Content | After |
|---|---|---|
| description › h2 + 5 【…】 bullets (design / folding armrest / quality / assembly / warranty) | C-shaped back, 3 support points, 150–175 cm, 130 kg, flip-up arms, 120° tilt, mesh, silent castors, BIFMA gas lift, 15–20 min + tools & gloves, 3-yr | highlights 1–6, stories m76-story-1…6, faq m76-faq-1…6, whats_in_box; description kept (no US spellings); 150–175 cm / 130 kg / 120° conflicts → specs used, appended to specs.needs_confirmation |
| templates/product.json (shared default) sections | M18 copy | not migrated |
| (no template video / no SIHOO_AU video for M76) |  | hero_video unset |

## Before → after (images)

| File (before) | gid | After |
|---|---|---|
| gallery close-ups 800²: backrest / armrest / seat / right side / castors / back (photo-only) | 38635054629155 / 38635054498083 / 38635054530851 / 38635054563619 / 38635054465315 / 38635054596387 | highlight_images[1–6]; stories 2 / 5 / 6 use armrest / right side / castors |
| gallery 102328 'Ergonomic chair curvature design' (805×937, baked copy) | 38635054432547 | story 1 |
| gallery 529563 mesh (1500², baked copy, no figures) | 38635054301475 | story 3 |
| gallery 964465 '5cm thick raw cutting sponge' (baked copy, metric) | 38635054334243 | story 4 |
| gallery 838580 home office (1000², photo) | 38635054268707 | lifestyle_images[1] |
| description 9_d9f360ba two chairs / 7_45a484b5 meeting room (1464×600 photos) | 35121565827363 / 35121565040931 | lifestyle_images[2–3] |
| gallery 304489 'Rocking Function' (90°/120°/30° — conflicts with specs), 367652 '90° flip-up' (conflicts with 75°), description 5d3d00ba, 73323495 (120° lean), 4_d0cc2c6f, 5_aed43c49 (components, 'aluminum'), 1f042b8b (banner), m76.jpg, dimensions 670474 | various | not referenced |

## Created objects

- feature_story: m76-story-1 → 316808364323, m76-story-2 → 316808397091, m76-story-3 → 316808429859, m76-story-4 → 316808462627, m76-story-5 → 316808495395, m76-story-6 → 316808528163
- faq_item (ACTIVE): m76-faq-1 → 316808692003, m76-faq-2 → 316808757539, m76-faq-3 → 316808790307, m76-faq-4 → 316808823075, m76-faq-5 → 316808855843, m76-faq-6 → 316808888611, m76-faq-7 → 316808921379, m76-faq-8 → 316808954147
- faqs (ACTIVE): faqs-m76 → 316809445667
- File uploads: none (all images reused from existing AU Files / gallery)
- Metafields set: highlights (6), highlight_images (6), best_for, feature_stories, faqs, compare_products, compare_intro, lifestyle_images (3), whats_in_box, specs.needs_confirmation (appended). metafieldsSet userErrors: none.

## Content summary

**Highlights**
- C-shaped backrest: Curved mesh back with a lumbar pad that adjusts 2.5 cm to follow your lower back
- Flip-up armrests: Raise the armrests to slide the chair under a desk and save space
- 5 cm sponge seat: Thick high-density foam under a breathable, stain-resistant fabric
- Rocking tilt: Lean back and rock, with adjustable tension and a lock for upright work
- Quiet castors and certified gas lift: Smooth, floor-friendly wheels and a BIFMA-certified gas lift
- Light and compact: 9.6 kg and 88.5–98.5 cm tall, sized for users 150–180 cm and rated to 136 kg

**Feature stories**
1. A backrest shaped like your back — The M76's C-shaped backrest curves to meet your spine, with a lumbar pad that adjusts 2.5 cm up or down so the support sits where your lower back needs it. Back, hips and arms are each supported, which is what keeps you comfortable through a long study session or a working day.
2. Armrests that flip out of the way — Raise the armrests and the M76 slides fully under a desk, freeing floor space in a small study, a shared room or a meeting room. Lower them and they take the weight off your shoulders while you type.
3. Cool mesh for warm rooms — The backrest is a high-density polyester mesh that lets air pass through, so your back stays cool and dry through a summer afternoon. It is treated to resist water, dust and stains, and the colour will not fade in the sun.
4. A seat you can sit in all day — A 5 cm raw-cut sponge cushion is firm enough to hold its shape and soft enough to spread your weight, under a skin-friendly, stain-resistant fabric. The waterfall front edge takes the pressure off the back of your thighs.
5. Rock back and relax — Unlock the tilt and the backrest rocks with you; a tension knob under the seat sets how easily it gives, and you can lock it upright for typing. One lever handles the gas lift, with a 10 cm seat-height range from 40.5 to 50.5 cm.
6. Quiet on the move — Smooth, silent castors roll across timber and tiles without scratching, and the gas lift is BIFMA certified for a stable, safe lift. At 9.6 kg the M76 is easy to move between rooms, and it is covered by a 3-year warranty.

**FAQ**
1. **Who is the Sihoo M76 designed for?** The M76 is a compact mid-back chair sized for users 150–180 cm tall. The seat adjusts from 40.5 to 50.5 cm high, is 48.5 cm wide and 44.5 cm deep, and the chair stands 88.5–98.5 cm tall overall. It suits study desks, small home offices and meeting rooms; if you want a headrest or sit for full days, look at the M57 or M90.
2. **What is the maximum load of the M76?** The M76 is rated to a maximum user weight of 136 kg, and the gas lift is BIFMA and SGS certified.
3. **How does the backrest and lumbar support work?** The C-shaped mesh backrest is curved to follow your spine, and a lumbar pad on the lower part adjusts 2.5 cm up or down so the support sits in the small of your back. Together with the 5 cm sponge seat and the armrests it gives three points of support: back, hips and arms.
4. **What can I adjust on the M76?** Seat height (40.5–50.5 cm), the flip-up armrests, the lumbar pad (2.5 cm), backrest tilt through roughly 108–125° with adjustable tension and an upright lock, and 360° swivel. The M76 does not have a headrest.
5. **How long does assembly take and do I need tools?** About 15–20 minutes. The tools and gloves you need are in the box, along with an illustrated instruction sheet.
6. **What warranty does the M76 come with?** The M76 is covered by a 3-year warranty. If a part fails under normal use, contact us with your order number and a photo and we will send a replacement part free of charge.
7. **How quickly will my chair arrive?** Orders are dispatched the next business day from our Sydney, Melbourne, Brisbane or Perth warehouse and usually arrive within 1–3 business days. Delivery is free Australia-wide.
8. **What is the difference between the M76, the M57 and the M90?** The M76 is the compact, budget option: a 9.6 kg mid-back chair with flip-up armrests, a sponge seat and no headrest, for users 150–180 cm. The M57 and M90 are full-height chairs with headrests for users up to 190 cm: the M57 has 3D armrests, a manually adjustable dual lumbar support and a 150 kg rating, while the M90 has a split backrest with adaptive lumbar support and armrests linked to the recline.

**best_for**: Study desks and small rooms, Home office on a budget, Users 150–180 cm, Meeting rooms and shared spaces  
**compare_products**: 7480195449026, 6074824392898  
**compare_intro**: The M76 is the compact, lightest chair here (9.6 kg, mid-back, no headrest, flip-up armrests); the M57 and M90 are full-height chairs with headrests, more armrest adjustment and a deeper 126° recline for users up to 190 cm.
**whats_in_box**: Chair back with flip-up armrests, seat, five-star base, gas lift, 5 castors, hardware, assembly tools and gloves, instruction sheet
**hero_video**: unset

## Notes / flags

- whats_in_box written from the description (tools, gloves, instructions documented; chair parts are the standard set).
- hero_video unset.
- specs.needs_confirmation appended: Description says users 150–175 cm, 130 kg max load and 120° tilt, gallery says 90° flip-up armrests; specs.* say 150–180 cm, 136 kg, 108–125° recline and 75° armrest lift — specs used in new copy (2026-09-08 migration)

## Specs alignment 2026-09-09 (page copy wins — owner decision)

| specs key | old | new | source |
|---|---|---|---|
| user_height_max_cm | 180 | 175 | description "150-175cm" |
| max_load_kg | 136 | 130 | description "maximum load of 130kg" |
| recline_positions_deg | [108,125] | [90,120] | description "tilted at 120°", gallery Rocking Function 90°/120° |
| armrest_detail | Up and down: 75º | Up and down: 90° | gallery "90° flip-up" |
| data_source | AU sc_attributes 메타필드 | AU page copy 2026-09-09 (owner decision) + sc_attributes | |
| needs_confirmation | rewritten | open: armrest 1D/2D/3D class, no headrest value, no gallery video | |

Migrated content edited: `custom.highlights` [5] (150–175 cm, 130 kg); `custom.best_for` (150–175 cm); `custom.compare_intro` ("deeper 126° recline for users up to 190 cm" → "deeper recline for taller users", since M90 is now 123° / 188 cm); faq_item m76-faq-1 (150–175 cm), m76-faq-2 (130 kg), m76-faq-4 (90° flip, tilt to 120°), m76-faq-8 (150–175 cm; M57 190 / M90 188 cm). Description pre-existed → untouched. userErrors: none.
