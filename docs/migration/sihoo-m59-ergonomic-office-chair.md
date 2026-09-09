# M59 — page content migration (AU)

Product: `gid://shopify/Product/6137612665026` · handle `sihoo-m59-ergonomic-office-chair` · templateSuffix (empty → templates/product.json, unchanged)
Sources: AU product description + gallery (`descriptionHtml`, `media`), shared AU template dump, existing `specs.*`. No US page (per brief).
Date: 2026-09-08. Title, price, variants, gallery, templateSuffix and status untouched. `custom.videos`, `custom.amazon_*`, `custom.related_article_paths`, `custom.related_articles` untouched.

## Before → after (text blocks)

| AU block (before) | Content | After |
|---|---|---|
| description › h2 + 4 bullets (FEATURES / FOR LONG TIME SITTING / HIGH QUALITY & EASY TO ASSEMBLE / 3 YEARS WARRANTY) | 90° liftable armrests, all-mesh, 18° tilt, 8 cm height, mesh care, BIFMA/SGS, 150 kg, eight steps, 3-yr warranty | highlights 1–6, stories m59-story-1…5, faq m59-faq-2/4/5/6; description kept as-is (no US spellings found); 150 kg / 90° / 18° conflict with specs.* → specs used, line appended to specs.needs_confirmation |
| templates/product.json (shared default) › image-with-text, key-features ×8, faq ×5, rich-text, image-with-text ×3 | all copy is about the SIHOO M18 ("Why Choose the SIHOO M18…") | not migrated: shared template carries M18 copy, not M59 |
| main › specs-compare app block | product = sihoo-vito-m90 (wrong product) | not migrated: app block, unrelated |
| (no template video / no SIHOO_AU video for M59) |  | hero_video left unset |
| US page | none given | AU sources only |

## Before → after (images)

| File (before) | gid | After |
|---|---|---|
| description 1_b29ece70 / 2_174102d8 / 3_5f160e06 / 4_1ca4e2f1 / 5_fed993b3 / 6_df2d3ba0 (790×2400–2900 infographic strips, baked English copy, imperial-free) | 20210422841538 / 20210422907074 / 21343420252354 / 21733514608834 / 20210429657282 / 21343389778114 | not migrated: tall strips unsuitable for story/highlight tiles; still shown in description |
| description 6.jpg | not found in Files | not migrated (broken/legacy reference left in description) |
| gallery m59.jpg (2000×2000 front) | 42548002455843 | highlight_images[6] |
| gallery right / back / semi rear left / left / semi front left (1440×960, photo-only) | 38275431268643 / 38275431072035 / 38275431334179 / 38275431301411 / 38275431104803 | highlight_images[1–5]; stories 3 / 1 / 2 / 4 / 5 |
| gallery semi front right / semi rear right (1440×960) | 38275431170339 / 38275431366947 | lifestyle_images[1–2] (no scenario photography exists for M59 — flagged) |
| gallery size chart 202557.webp | 38275431432483 | not referenced (dimensions in specs.*) |
| template images 02_6d56920e, 3_ab94ab6f, 4_2f6c4792, photobank_7, C300-lumbar_support, M18-10, 7_97d170d1, 04_00293721, M18-12 | — | not migrated: M18/C300 imagery on the shared template |

## Created objects

- feature_story: m59-story-1 → 316799648035, m59-story-2 → 316799680803, m59-story-3 → 316799746339, m59-story-4 → 316799779107, m59-story-5 → 316799811875
- faq_item (ACTIVE): m59-faq-1 → 316800925987, m59-faq-2 → 316800958755, m59-faq-3 → 316800991523, m59-faq-4 → 316801024291, m59-faq-5 → 316801057059, m59-faq-6 → 316801089827, m59-faq-7 → 316801122595, m59-faq-8 → 316801155363
- faqs (ACTIVE): faqs-m59 → 316802007331
- File uploads: none (all images reused from existing AU Files / gallery)
- Metafields set: highlights (6), highlight_images (6), best_for, feature_stories, faqs, compare_products, compare_intro, lifestyle_images (2), specs.needs_confirmation (appended). metafieldsSet userErrors: none.

## Content summary

**Highlights**
- Flip-up armrests: Lift the armrests out of the way to slide the chair under a desk or free up elbow room
- All-mesh back and seat: Breathable PE and polyester mesh keeps air moving and resists wear
- Flexible lumbar support: A built-in lumbar zone flexes with your lower back and adjusts 3 cm up or down
- Tilt and lock: Single-lever mechanism with four recline settings between 100° and 120° and adjustable tension
- Compact and light: 11.5 kg and 93.5–102 cm tall, sized for users 150–180 cm
- Tested and warranted: BIFMA and SGS certified, rated to 136 kg, 3-year warranty

**Feature stories**
1. All mesh, all day — Both the backrest and the seat of the M59 are woven from a PE and polyester mesh that lets air circulate behind you and beneath you, so you stay cool through a warm Australian afternoon. The mesh resists abrasion, holds its shape and can be washed in warm water on a gentle cycle, which makes it easy to keep clean.
2. Lumbar support that moves with you — The lower section of the backrest is shaped to follow the curve of your lower back and flexes as you shift position, so you get support without a lever to fiddle with. It adjusts 3 cm up or down, letting you sit the support exactly where your back needs it.
3. Armrests that get out of the way — Flip the armrests up and the M59 slides under a desk or against a wall, which is handy in a small study, a shared apartment or a spare-room office. Drop them back down and they take the weight off your shoulders while you type.
4. Sit up, lean back, lock in — One lever under the seat controls both the gas lift, with a 42.5–51 cm seat-height range, and the recline, which locks in four positions between 100° and 120°. A tension knob sets how much resistance the backrest gives when you lean, and the chair swivels a full 360°.
5. Light, simple and built to last — At 11.5 kg the M59 is easy to carry between rooms, yet the frame and gas lift are BIFMA and SGS certified and the chair is rated to 136 kg. Assembly takes eight simple steps, and the chair is covered by a 3-year warranty.

**FAQ**
1. **Who is the Sihoo M59 designed for?** The M59 is a compact mid-back chair sized for users 150–180 cm tall. The seat adjusts from 42.5 to 51 cm high, is 46.5 cm wide and 44.5 cm deep, and the backrest tops out at 93.5–102 cm overall. If you are taller, or you want a headrest, look at the Sihoo M57 or M59AS.
2. **What is the maximum load of the M59?** The M59 is rated to a maximum user weight of 136 kg. The gas lift and frame are BIFMA and SGS certified.
3. **How does the lumbar support work?** The lower part of the mesh backrest is shaped to follow the curve of your lower back and flexes as you move, so it supports you automatically rather than through a separate cushion. You can move the lumbar zone 3 cm up or down to suit your height.
4. **What can I adjust on the M59?** Seat height (42.5–51 cm), the armrests (they flip up about 80° to clear a desk), backrest recline (four lockable settings between 100° and 120°), recline tension and 360° swivel. The M59 does not have a headrest.
5. **How long does assembly take and do I need tools?** Assembly follows eight steps in the illustrated guide and usually takes one person 15–20 minutes. The hardware and the Allen key you need are in the box.
6. **What warranty does the M59 come with?** The M59 is covered by a 3-year warranty. If a part fails under normal use, contact us with your order number and a photo and we will send a replacement part free of charge.
7. **How quickly will my chair arrive?** Orders are dispatched the next business day from our Sydney, Melbourne, Brisbane or Perth warehouse and usually arrive within 1–3 business days. Delivery is free Australia-wide.
8. **What is the difference between the M59, the M59AS and the M57?** The M59 is the simplest and lightest of the three: an all-mesh mid-back chair with flip-up armrests, a 100–120° recline, no headrest and a 136 kg rating. The M59AS adds a taller dual-section backrest with dynamic lumbar support, a double-jointed headrest, 3D flip-up armrests, a 126° recline and a 150 kg rating. The M57 adds a 2D headrest, 3D armrests, a manually adjustable dual lumbar support, a 126° recline and a 150 kg rating, and suits users up to 190 cm.

**best_for**: Home office, Study desks and small rooms, Users 150–180 cm, Warm rooms and long sitting  
**compare_products**: 10184342307107, 6074824392898  
**compare_intro**: The M59 is the compact, lightest option (11.5 kg, mid-back, no headrest, 136 kg rating); the M59AS and M57 add a headrest, 3D armrests, a deeper 126° recline and a 150 kg rating for users up to 190 cm.
**hero_video**: unset

## Notes / flags

- hero_video: unset (no SIHOO_AU video for the M59).
- lifestyle_images: gallery angles only — the M59 has no scenario photos on the AU store.
- whats_in_box: not documented on the AU page → not set.
- specs.needs_confirmation appended: Description says 150 kg max load, 90° liftable armrests and 18° tilt; specs.* say 136 kg, 80° armrest lift and 100–120° recline — specs used in new copy (2026-09-08 migration)

## Specs alignment 2026-09-09 (page copy wins — owner decision)

| specs key | old | new | source |
|---|---|---|---|
| max_load_kg | 136 | 150 | description "up to 150KG" |
| armrest_detail | Up and down: 80º | Up and down: 90° | description "90° Liftable Armrest" |
| recline_positions_deg | [100,120] | [90,108] | description "18° back tilt" (90° upright convention used across the AU pages) |
| data_source | AU sc_attributes 메타필드 | AU page copy 2026-09-09 (owner decision) + sc_attributes | |
| needs_confirmation | rewritten | resolved conflicts removed; open: armrest 1D/2D/3D class, no headrest value, no gallery video, 8 cm vs 8.5 cm seat travel | |

Migrated content edited: `custom.highlights` [3] (18° tilt) and [5] (150 kg); `custom.compare_intro` (150 kg differentiator dropped, 18° tilt added); faq_item m59-faq-2 (150 kg), m59-faq-4 (90° flip, 18° tilt), m59-faq-8 (18° tilt / 150 kg, M59AS & M57 150 kg "add" removed); feature_story m59-story-4 (18° tilt), m59-story-5 (150 kg). Description pre-existed → untouched. metafieldsSet / metaobjectUpdate userErrors: none.
