# Vito M90 with footrest — page content migration (AU)

Product: `gid://shopify/Product/8757046018339` · handle `sihoo-vito-m90-ergonomic-office-chair-with-footrest` · templateSuffix (empty → templates/product.json, unchanged)
Sources: AU product description + gallery (`descriptionHtml`, `media`), shared AU template dump, existing `specs.*`. No US page (per brief).
Date: 2026-09-08. Title, price, variants, gallery, templateSuffix and status untouched. `custom.videos`, `custom.amazon_*`, `custom.related_article_paths`, `custom.related_articles` untouched.

## Before → after (text blocks)

| AU block (before) | Content | After |
|---|---|---|
| description › h2 + 5 h3 sections (same M90 copy) | same as M90; no footrest copy anywhere on the AU page | highlights 1/3/4/5/6, stories m90-fr-story-1/3/4/5/6 (reused M90 copy), faq 1–2, 4–8; description kept, 'fiber'→'fibre' ×2; conflicts appended to specs.needs_confirmation |
| (footrest — undocumented on the AU page; written from product photos) |  | highlight 2, story m90-fr-story-2, faq m90-fr-faq-3 (footrest), faq-9 (vs M90 / M57 with footrest) |
| custom.videos › m90-video-product (SIHOO_AU ibVZ7wA42cg) |  | custom.hero_video (flagged, as for M90) |
| templates/product.json (shared default) sections | M18 copy | not migrated |

## Before → after (images)

| File (before) | gid | After |
|---|---|---|
| sihoo-m90c_8 / _7 / _1 (M90 feature tiles, baked copy, metric) | 34656696598819 / 34656696402211 / 34656696467747 | highlights 1/3/4, stories 1/3/4 |
| gallery angled front-right black with footrest (2880×1920 photo) | 38635053941027 | highlight 2, story 2 |
| gallery 853260 'Sturdy & breathable' (1200², baked copy incl. 3-year parts badge) | 38635054104867 | highlight 5 |
| gallery angled front-left black (photo) | 38635053908259 | highlight 6 |
| gallery 574144 'Double back structure' (1200², baked copy) | 38635054137635 | story 5 |
| description s-l1600_3 (800², home office photo) | 35231244517667 | story 6, lifestyle_images[1] |
| M90C-07 strip / M90C-07_1 (photos) | 32355675668771 / 34656696664355 | lifestyle_images[2–3] |
| description s-l1600_2 (dimensions), M90C-01…06 banners, gallery 418942 'Newly upgraded headrest', white-chair photos | various | not referenced |

## Created objects

- feature_story: m90-fr-story-1 → 316805742883, m90-fr-story-2 → 316805775651, m90-fr-story-3 → 316805808419, m90-fr-story-4 → 316805841187, m90-fr-story-5 → 316805873955, m90-fr-story-6 → 316805906723
- faq_item (ACTIVE): m90-fr-faq-1 → 316806431011, m90-fr-faq-2 → 316806463779, m90-fr-faq-3 → 316806496547, m90-fr-faq-4 → 316806529315, m90-fr-faq-5 → 316806562083, m90-fr-faq-6 → 316806594851, m90-fr-faq-7 → 316806627619, m90-fr-faq-8 → 316806660387, m90-fr-faq-9 → 316806693155
- faqs (ACTIVE): faqs-m90-fr → 316807020835
- File uploads: none (all images reused from existing AU Files / gallery)
- Metafields set: highlights (6), highlight_images (6), best_for, feature_stories, faqs, compare_products, compare_intro, lifestyle_images (3), hero_video, specs.needs_confirmation (appended). metafieldsSet userErrors: none.

## Content summary

**Highlights**
- Adaptive dual lumbar support: A split backrest whose lumbar section adjusts its push to your weight and posture
- Pull-out footrest: A padded leg rest slides out from under the seat for reclined breaks
- Double-jointed headrest: Height and angle set independently, with stretch mesh for the neck
- 4D armrests: Height, depth, width and pivot adjustment, linked to the backrest as you recline
- Full mesh seat and back: Durable, UV-resistant, breathable mesh throughout
- Tested and warranted: BIFMA and SGS certified, aluminium alloy base, rated to 136 kg, 3-year warranty

**Feature stories**
1. A backrest in two parts — The M90's backrest is split so the upper section supports your shoulders while a separate lumbar section adapts its push to your weight and the angle you sit at. Lean forward, sit upright or recline and it follows, so your lower back stays supported without a dial. Lift the backrest 6 cm across three gears to line the lumbar section up with your own spine.
2. Built-in footrest for real breaks — Tucked under the seat is a padded footrest that slides out and unfolds in seconds. Recline the backrest, put your feet up and the M90 becomes a lounger for a twenty-minute reset between meetings. Slide it back and it disappears, leaving an ordinary office chair that still fits under the desk.
3. A double-jointed headrest — Two joints let you set the headrest's height and angle independently, so it cradles the neck whether you are upright on a call or leaning back to read. The stretch mesh gives a little as you settle in, rather than pushing your head forward.
4. 4D armrests that recline with you — The armrests adjust for height, depth, width and pivot, and they are linked to the backrest so they move with you when you lean back rather than leaving your elbows behind. Line the pads up with the desk for typing, or angle them in for a controller or a tablet.
5. A double back structure that spreads the load — The two-piece backrest gives a large support area, so pressure is spread across the whole back rather than concentrated at one point, and the elastic mesh on both the seat and the back keeps air moving through long days. The mesh is durable, UV-resistant and easy to wipe clean.
6. At home in any room — In black, or grey mesh on a grey frame, the M90 with footrest suits a study, a living-room corner or a gaming desk. Under the seat is a precision steel mechanism and an aluminium alloy five-star base tested to a 1,136 kg static load, on quiet 60 mm castors. The chair is BIFMA and SGS certified and covered by a 3-year warranty.

**FAQ**
1. **Who is the Sihoo Vito M90 with footrest designed for?** It is a full-height chair with a headrest, sized for users 150–190 cm tall. The seat adjusts from 46 to 55 cm high, is 51 cm wide and 46 cm deep, and the chair stands 107–130 cm tall overall. The pull-out footrest makes it a good choice if you like to recline properly during breaks, or you game or stream from the same chair you work in.
2. **What is the maximum load of the M90 with footrest?** The chair is rated to a maximum user weight of 136 kg. The gas lift and mechanism are BIFMA and SGS certified, and the aluminium alloy base has passed a 1,136 kg static pressure test.
3. **How does the footrest work?** The padded leg rest is stored on rails under the seat. Pull it forward and unfold the pad to rest your calves, recline the backrest and lock it, and you can lie back with your feet up. Fold the pad and push it back under the seat and the chair fits under a desk as normal.
4. **How does the adaptive lumbar support work?** The backrest is split into two sections. The lower lumbar section is mounted on a nylon and fibre spring that adjusts its support to your weight and the angle you are sitting at, so it keeps pressing gently into your lower back whether you lean forward, sit upright or recline. You can also raise or lower the whole backrest by 6 cm, across three gears, to match the lumbar section to your height.
5. **What can I adjust on the M90 with footrest?** Seat height (46–55 cm), backrest height (6 cm, three gears), backrest recline (locks at 110°, 116° or 126°) and recline tension, the 3D headrest, the 4D armrests (height, depth, width and pivot, linked to the backrest), the pull-out footrest and 360° swivel.
6. **How long does assembly take and do I need tools?** Assembly follows eight illustrated steps and usually takes one person 20–25 minutes, with the footrest rails fitted under the seat as the last step. The hardware and the Allen key you need are in the box, and there is an assembly video on this page.
7. **What warranty does the M90 with footrest come with?** The M90 with footrest is covered by a 3-year warranty. If a part fails under normal use, contact us with your order number and a photo and we will send a replacement part free of charge.
8. **How quickly will my chair arrive?** Orders are dispatched the next business day from our Sydney, Melbourne, Brisbane or Perth warehouse and usually arrive within 1–3 business days. Delivery is free Australia-wide.
9. **How does this compare with the standard M90 and the M57 with footrest?** The standard M90 is the same chair without the footrest, so choose it if you never recline with your feet up. The M57 with footrest is lighter (19.9 kg versus 21.2 kg), has a single-piece mesh backrest with a manually adjustable dual lumbar support and 3D armrests, and is rated to 150 kg; the M90 adds the split backrest with adaptive lumbar support, the 6 cm backrest lift and 4D armrests.

**best_for**: Home office with room to recline, Long work days with breaks, Users 150–190 cm, Gaming and streaming  
**compare_products**: 7480195449026, 7479130194114  
**compare_intro**: Same M90 chair with a pull-out footrest; the standard M90 drops the footrest, while the M57 with footrest is a lighter (19.9 kg) chair with a single-piece backrest, manual dual lumbar support and 3D armrests at a 150 kg rating.
**hero_video**: https://www.youtube.com/watch?v=ibVZ7wA42cg

## Notes / flags

- custom.videos untouched.
- hero_video from custom.videos (flagged).
- specs.armrest_type is 4D here but 2D on the standard M90 — same chair; worth confirming (already in needs_confirmation).
- specs.needs_confirmation appended: Description says 150 kg (330 lb) max load, 3D armrests, recline 90°–123° (banner: 130°) and users 165–188 cm; specs.* say 136 kg, 4D armrests, 110°/116°/126° and 150–190 cm — specs used in new copy (2026-09-08 migration)
