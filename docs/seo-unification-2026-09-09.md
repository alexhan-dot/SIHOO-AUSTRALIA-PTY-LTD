# SEO Unification - SIHOO Australia Shopify store (2026-09-09)

Live changes applied via Admin GraphQL `productUpdate` / `collectionUpdate`. Scope: product titles, SEO title/description, tags, productType; collection SEO title/description and intro copy (`descriptionHtml`) where it was empty. Handles/URLs, prices, variants, status, images, templates, metafields and themes were not touched. All 27 product updates and 14 collection updates returned no `userErrors`.

## Rules applied

- Titles: `SIHOO <Model> Ergonomic Office Chair[ with Footrest]`, `XALLKING <Model> Ergonomic Gaming Chair`, `Desker <...> Electric Sit-Stand Desk`.
- SEO title <= 60 chars, `... | SIHOO Australia` suffix. Where the full form exceeded 60 chars, "Ergonomic" was dropped from the left part (Vito M90 with Footrest, M57 Pro with Footrest).
- SEO description 130-155 chars, built from `custom.highlights` + `specs.max_load_kg` + `specs.warranty_years`; no prices, emoji or review counts. "dispatched next business day" kept only where it fit (V1); all others end at "Free Australia-wide delivery."
- productType: Ergonomic Office Chair / Ergonomic Gaming Chair / Standing Desk.
- Tags additive: existing tags kept; added `ergonomic chair` + `office chair` (SIHOO) or `ergonomic chair` + `gaming chair` (XALLKING), series tag, `with footrest`, `headrest` (where `specs.headrest_detail` set), warranty tag. Desks got `standing desk`, `Desk`, `10-year warranty` (no chair tags).
- Judgement call: XALLKING X5 Pro tagged `with footrest` because its retractable footrest is standard (per highlights), not a variant option. V1 / M18 footrest-variant models were NOT tagged.

## A. Product titles (27)

| # | Handle | Before | After |
|---|---|---|---|
| 1 | `sihoo-m18-ergonomics-task-office-chair` | SIHOO M18 Ergonomic Office Chair | SIHOO M18 Ergonomic Office Chair |
| 2 | `sihoo-m57-ergonomic-office-chair` | Sihoo M57 Ergonomic Office Chair | SIHOO M57 Ergonomic Office Chair |
| 3 | `sihoo-v1-ergonomic-office-chair` | Sihoo V1 Ergonomic Office Chair | SIHOO V1 Ergonomic Office Chair |
| 4 | `sihoo-m16-ergonomics-office-chair` | SIHOO M16 Ergonomics Office Chair | SIHOO M16 Ergonomic Office Chair |
| 5 | `sihoo-m56-ergonomic-office-chair` | SIHOO M56 Ergonomics Office Chair | SIHOO M56 Ergonomic Office Chair |
| 6 | `sihoo-m59-ergonomic-office-chair` | SIHOO M59 Ergonomics Office Chair | SIHOO M59 Ergonomic Office Chair |
| 7 | `sihoo-m57-ergonomic-office-chair-with-built-in-footrest` | Sihoo M57 Ergonomic Office Chair with built-in footrest | SIHOO M57 Ergonomic Office Chair with Footrest |
| 8 | `sihoo-vito-m90-ergonomic-office-chair` | Sihoo VIto M90 Ergonomic Office Chair | SIHOO Vito M90 Ergonomic Office Chair |
| 9 | `sihoo-a3-doro-c300-ergonomic-office-chair` | Sihoo A3 DORO-C300 Pro Ergonomic Office Chair | SIHOO Doro C300 Pro Ergonomic Office Chair |
| 10 | `desker-height-adjustable-dual-motor-sit-stand-desk` | Desker Height Adjustable Dual Motor 3 Stage Electric Sit Stand Desk | Desker Dual Motor Electric Sit-Stand Desk |
| 11 | `sihoo-m76-ergonomics-office-chair` | SIHOO M76 Ergonomics Office Chair | SIHOO M76 Ergonomic Office Chair |
| 12 | `sihoo-vito-m90-ergonomic-office-chair-with-footrest` | Sihoo VIto M90 Ergonomic Office Chair with Footrest | SIHOO Vito M90 Ergonomic Office Chair with Footrest |
| 13 | `desker-motion-desk-control-switch-black` | Carbon Fibre Dual Motor 3 Stage Electric Sit Stand Desk in Black | Desker Carbon Fibre Dual Motor Electric Sit-Stand Desk (Black) |
| 14 | `sihoo-doro-s300-ergonomic-office-chair` | Sihoo DORO-S300 Ergonomic Office Chair | SIHOO Doro S300 Ergonomic Office Chair |
| 15 | `sihoo-a3-doro-c100-ergonomic-office-chair` | Sihoo A3 DORO-C100 Ergonomic Office Chair | SIHOO Doro C100 Ergonomic Office Chair |
| 16 | `xallking-x5pro-ergonomic-gaming-chair` | XALLKING X5 Pro Ergonomic Gaming Chair | XALLKING X5 Pro Ergonomic Gaming Chair |
| 17 | `sihoo-doro-c500-ergonomic-office-chair` | Sihoo DORO-C500 Ergonomic Office Chair | SIHOO Doro C500 Ergonomic Office Chair |
| 18 | `sihoo-m57-pro-ergonomic-office-chair` | Sihoo M57 Pro Ergonomic Office Chair | SIHOO M57 Pro Ergonomic Office Chair |
| 19 | `sihoo-m18-pro-ergonomic-office-chair` | Sihoo M18 Pro Ergonomic Office Chair | SIHOO M18 Pro Ergonomic Office Chair |
| 20 | `sihoo-m57-pro-ergonomic-office-chair-with-built-in-footrest` | Sihoo M57 Pro Ergonomic Office Chair with Built in Footrest | SIHOO M57 Pro Ergonomic Office Chair with Footrest |
| 21 | `xallking-x5c-ergonomic-gaming-chair` | XALLKING X5C Ergonomic Gaming Chair | XALLKING X5C Ergonomic Gaming Chair |
| 22 | `xallking-x5f-ergonomic-gaming-chair` | XALLKING X5F Ergonomic Gaming Chair | XALLKING X5F Ergonomic Gaming Chair |
| 23 | `xallking-x5s-ergonomic-gaming-chair` | XALLKING X5S Ergonomic Gaming Chair | XALLKING X5S Ergonomic Gaming Chair |
| 24 | `xallking-x3pro-premium-ergonomic-gaming-chair` | XALLKING X3PRO Premium Ergonomic Gaming Chair | XALLKING X3 Pro Ergonomic Gaming Chair |
| 25 | `sihoo-doro-s100-ergonomic-office-chair` | Sihoo DORO S100 Ergonomic Office Chair | SIHOO Doro S100 Ergonomic Office Chair |
| 26 | `sihoo-m59as-ergonomic-office-chair` | Sihoo M59AS Ergonomic Office Chair | SIHOO M59AS Ergonomic Office Chair |
| 27 | `sihoo-a3-doro-c300-pro-v2-ergonomic-office-chair` | Sihoo DORO-C300 Pro V2 Ergonomic Office Chair | SIHOO Doro C300 Pro V2 Ergonomic Office Chair |

## B. Product SEO title / description / productType (27)

| Handle | SEO title before | SEO title after (len) | SEO description before | SEO description after (len) | productType before -> after |
|---|---|---|---|---|---|
| `sihoo-m18-ergonomics-task-office-chair` | (empty) | M18 Ergonomic Office Chair \| SIHOO Australia (44) | (empty) | M18 ergonomic office chair with dual-adjustable lumbar support and breathable mesh back. Rated to 136 kg, 3-year warranty. Free Australia-wide delivery. (152) | Ergonomic Office Chair -> Ergonomic Office Chair |
| `sihoo-m57-ergonomic-office-chair` | Sihoo M57 Ergonomic Office Chair in Australia | M57 Ergonomic Office Chair \| SIHOO Australia (44) | (empty) | M57 ergonomic office chair with full-mesh seat and back and 3D adjustable armrests. Rated to 150 kg, 3-year warranty. Free Australia-wide delivery. (147) | Ergonomic Office Chair -> Ergonomic Office Chair |
| `sihoo-v1-ergonomic-office-chair` | V1 Ergonomic Chair in Australia | V1 Ergonomic Office Chair \| SIHOO Australia (43) | (empty) | V1 ergonomic office chair with 3D headrest and 4D armrests. Rated to 136 kg, 3-year warranty. Free Australia-wide delivery, dispatched next business day. (153) | Ergonomic Office Chair -> Ergonomic Office Chair |
| `sihoo-m16-ergonomics-office-chair` | Sihoo M16 Ergonomic Chair in Australia | M16 Ergonomic Office Chair \| SIHOO Australia (44) | (empty) | M16 ergonomic office chair with two-way lumbar pillow and adjustable headrest. Rated to 150 kg, 3-year warranty. Free Australia-wide delivery. (142) | Ergonomic Office Chair -> Ergonomic Office Chair |
| `sihoo-m56-ergonomic-office-chair` | Sihoo M56 Ergonomic Chair in Australia | M56 Ergonomic Office Chair \| SIHOO Australia (44) | (empty) | M56 ergonomic office chair with butterfly lumbar support and rotating headrest. Rated to 136 kg, 3-year warranty. Free Australia-wide delivery. (143) | Ergonomic Office Chair -> Ergonomic Office Chair |
| `sihoo-m59-ergonomic-office-chair` | M59 Ergonomic Chair in Australia | M59 Ergonomic Office Chair \| SIHOO Australia (44) | (empty) | M59 ergonomic office chair with flip-up armrests and all-mesh back and seat. Rated to 150 kg, 3-year warranty. Free Australia-wide delivery. (140) | Ergonomic Office Chair -> Ergonomic Office Chair |
| `sihoo-m57-ergonomic-office-chair-with-built-in-footrest` | Sihoo M57 Ergonomic Chair with Footrest in Australia | M57 Ergonomic Office Chair with Footrest \| SIHOO Australia (58) | (empty) | M57 ergonomic office chair with built-in footrest and 3D adjustable armrests. Rated to 150 kg, 3-year warranty. Free Australia-wide delivery. (141) | Ergonomic Office Chair -> Ergonomic Office Chair |
| `sihoo-vito-m90-ergonomic-office-chair` | Vito M90 Ergonomic Chair in Australia | Vito M90 Ergonomic Office Chair \| SIHOO Australia (49) | (empty) | Vito M90 ergonomic office chair with adaptive dual lumbar support and 3D linked armrests. Rated to 150 kg, 3-year warranty. Free Australia-wide delivery. (153) | Ergonomic Office Chair -> Ergonomic Office Chair |
| `sihoo-a3-doro-c300-ergonomic-office-chair` | Sihoo DORO C300 Pro Ergonomic Chair in Australia | Doro C300 Pro Ergonomic Office Chair \| SIHOO Australia (54) | (empty) | Doro C300 Pro ergonomic office chair with dynamic lumbar support and 6D armrests. Rated to 150 kg, 5-year warranty. Free Australia-wide delivery. (145) | Ergonomic Office Chair -> Ergonomic Office Chair |
| `desker-height-adjustable-dual-motor-sit-stand-desk` | Desker Dual Motor Sit Stand Desk \| SIHOO Australia | Desker Dual Motor Sit-Stand Desk \| SIHOO Australia (50) | (empty) | Desker Dual Motor electric sit-stand desk with 140 kg lift capacity and three memory presets. 10-year warranty. Free Australia-wide delivery. (141) | Standing Desk -> Standing Desk |
| `sihoo-m76-ergonomics-office-chair` | M76 Ergonomic Chair in Australia | M76 Ergonomic Office Chair \| SIHOO Australia (44) | (empty) | M76 ergonomic office chair with flip-up armrests and C-shaped mesh backrest. Rated to 130 kg, 3-year warranty. Free Australia-wide delivery. (140) | Ergonomic Office Chair -> Ergonomic Office Chair |
| `sihoo-vito-m90-ergonomic-office-chair-with-footrest` | Vito M90 Ergonomic Chair with Footrest | Vito M90 Office Chair with Footrest \| SIHOO Australia (53) | (empty) | Vito M90 ergonomic office chair with pull-out footrest and adaptive dual lumbar support. Rated to 150 kg, 3-year warranty. Free Australia-wide delivery. (152) | Ergonomic Office Chair -> Ergonomic Office Chair |
| `desker-motion-desk-control-switch-black` | Desker Carbon Fibre Sit Stand Desk \| SIHOO Australia | Desker Carbon Fibre Sit-Stand Desk (Black) \| SIHOO Australia (60) | (empty) | Desker Carbon Fibre electric sit-stand desk with black carbon fibre top and 140 kg lift capacity. 10-year warranty. Free Australia-wide delivery. (145) | Standing Desk -> Standing Desk |
| `sihoo-doro-s300-ergonomic-office-chair` | Sihoo Doro S300 Ergonomic Chair \| German Design Award | Doro S300 Ergonomic Office Chair \| SIHOO Australia (50) | Sihoo Doro S300 ergonomic office chair. German Design Award winner, BIFMA and SGS certified. Free Australia-wide delivery from four warehouses, 5-year warranty. Shop now. | Doro S300 ergonomic office chair with anti-gravity recline and dual dynamic lumbar support. Rated to 150 kg, 5-year warranty. Free Australia-wide delivery. (155) | Ergonomic Office Chair -> Ergonomic Office Chair |
| `sihoo-a3-doro-c100-ergonomic-office-chair` | Sihoo DORO-C100 Ergonomic Chair in Australia | Doro C100 Ergonomic Office Chair \| SIHOO Australia (50) | (empty) | Doro C100 ergonomic office chair with self-adaptive lumbar support and 4D armrests. Rated to 136 kg, 5-year warranty. Free Australia-wide delivery. (147) | Ergonomic Office Chair -> Ergonomic Office Chair |
| `xallking-x5pro-ergonomic-gaming-chair` | XALLKING X5 Pro Ergonomic Gaming Chair \| SIHOO Australia | XALLKING X5 Pro Ergonomic Gaming Chair \| SIHOO Australia (56) | (empty) | XALLKING X5 Pro ergonomic gaming chair with dual C lumbar support and 6D armrests. Rated to 150 kg, 3-year warranty. Free Australia-wide delivery. (146) | Gaming Chair -> Ergonomic Gaming Chair |
| `sihoo-doro-c500-ergonomic-office-chair` | DORO-C500 Ergonomic Chair in Australia | Doro C500 Ergonomic Office Chair \| SIHOO Australia (50) | (empty) | Doro C500 ergonomic office chair with anti-gravity recline and adaptive lumbar support. Rated to 150 kg, 5-year warranty. Free Australia-wide delivery. (151) | Ergonomic Office Chair -> Ergonomic Office Chair |
| `sihoo-m57-pro-ergonomic-office-chair` | M57 Pro Ergonomic Chair in Australia | M57 Pro Ergonomic Office Chair \| SIHOO Australia (48) | (empty) | M57 Pro ergonomic office chair with adaptive lumbar and 4D linkage armrests. Rated to 150 kg, 3-year warranty. Free Australia-wide delivery. (140) | Ergonomic Office Chair -> Ergonomic Office Chair |
| `sihoo-m18-pro-ergonomic-office-chair` | Sihoo M18 Pro Ergonomic Chair \| $369, 4D Armrests | M18 Pro Ergonomic Office Chair \| SIHOO Australia (48) | Sihoo M18 Pro ergonomic chair, $369. Self-weight sensing recline, 4D linked armrests. Free AU delivery, 3-year warranty. Shop now! | M18 Pro ergonomic office chair with self-weight-sensing recline and 4D linked armrests. Rated to 136 kg, 3-year warranty. Free Australia-wide delivery. (151) | Ergonomic Office Chair -> Ergonomic Office Chair |
| `sihoo-m57-pro-ergonomic-office-chair-with-built-in-footrest` | Sihoo M57 Pro Ergonomic Chair with Footrest in Australia | M57 Pro Office Chair with Footrest \| SIHOO Australia (52) | (empty) | M57 Pro ergonomic office chair with built-in footrest and 4D linkage armrests. Rated to 150 kg, 3-year warranty. Free Australia-wide delivery. (142) | Ergonomic Office Chair -> Ergonomic Office Chair |
| `xallking-x5c-ergonomic-gaming-chair` | XALLKING X5C Ergonomic Gaming Chair \| SIHOO Australia | XALLKING X5C Ergonomic Gaming Chair \| SIHOO Australia (53) | (empty) | XALLKING X5C ergonomic gaming chair with 3D dual-joint headrest and 4-zone lumbar support. Rated to 150 kg, 3-year warranty. Free Australia-wide delivery. (154) | Gaming Chair -> Ergonomic Gaming Chair |
| `xallking-x5f-ergonomic-gaming-chair` | XALLKING X5F Ergonomic Gaming Chair \| SIHOO Australia | XALLKING X5F Ergonomic Gaming Chair \| SIHOO Australia (53) | (empty) | XALLKING X5F ergonomic gaming chair with C-shaped lumbar cradle and 4D linked armrests. Rated to 150 kg, 3-year warranty. Free Australia-wide delivery. (151) | Gaming Chair -> Ergonomic Gaming Chair |
| `xallking-x5s-ergonomic-gaming-chair` | XALLKING X5S Ergonomic Gaming Chair \| SIHOO Australia | XALLKING X5S Ergonomic Gaming Chair \| SIHOO Australia (53) | (empty) | XALLKING X5S ergonomic gaming chair with double-C lumbar pillow and 3D headrest. Rated to 150 kg, 3-year warranty. Free Australia-wide delivery. (144) | Gaming Chair -> Ergonomic Gaming Chair |
| `xallking-x3pro-premium-ergonomic-gaming-chair` | XALLKING X3 Pro Premium Gaming Chair \| SIHOO Australia | XALLKING X3 Pro Ergonomic Gaming Chair \| SIHOO Australia (56) | (empty) | XALLKING X3 Pro ergonomic gaming chair with 6D armrests and anti-gravity recline. Rated to 150 kg, 3-year warranty. Free Australia-wide delivery. (145) | Gaming Chair -> Ergonomic Gaming Chair |
| `sihoo-doro-s100-ergonomic-office-chair` | DORO-S100 Ergonomic Office Chair | Doro S100 Ergonomic Office Chair \| SIHOO Australia (50) | (empty) | Doro S100 ergonomic office chair with dual dynamic lumbar support and 4D armrests. Rated to 150 kg, 5-year warranty. Free Australia-wide delivery. (146) | Ergonomic Office Chair -> Ergonomic Office Chair |
| `sihoo-m59as-ergonomic-office-chair` | Sihoo M59AS Ergonomic Office Chair \| $349 | M59AS Ergonomic Office Chair \| SIHOO Australia (46) | Sihoo M59AS ergonomic chair, $349. Dual-section backrest, 3D flip-up armrests, BIFMA and SGS certified. Free AU delivery. Shop now! | M59AS ergonomic office chair with 3D flip-up armrests and dual-section backrest. Rated to 150 kg, 3-year warranty. Free Australia-wide delivery. (144) | Ergonomic Office Chair -> Ergonomic Office Chair |
| `sihoo-a3-doro-c300-pro-v2-ergonomic-office-chair` | Sihoo Doro C300 Pro V2 Ergonomic Office Chair in Australia | Doro C300 Pro V2 Ergonomic Office Chair \| SIHOO Australia (57) | (empty) | Doro C300 Pro V2 ergonomic office chair with Domino sacral-lumbar support and 8D armrests. Rated to 150 kg, 5-year warranty. Free Australia-wide delivery. (154) | Ergonomic Office Chair -> Ergonomic Office Chair |

## C. Product tags (27)

| Handle | Tags before | Tags after |
|---|---|---|
| `sihoo-m18-ergonomics-task-office-chair` | (none) | ergonomic chair, office chair, M Series, headrest, 3-year warranty |
| `sihoo-m57-ergonomic-office-chair` | computer chair, Ergonomic, ergonomic chair, executive computer chair, Office Chair, office chair melbourne | computer chair, Ergonomic, ergonomic chair, executive computer chair, Office Chair, office chair melbourne, M Series, headrest, 3-year warranty |
| `sihoo-v1-ergonomic-office-chair` | (none) | ergonomic chair, office chair, V Series, headrest, 3-year warranty |
| `sihoo-m16-ergonomics-office-chair` | (none) | ergonomic chair, office chair, M Series, headrest, 3-year warranty |
| `sihoo-m56-ergonomic-office-chair` | (none) | ergonomic chair, office chair, M Series, headrest, 3-year warranty |
| `sihoo-m59-ergonomic-office-chair` | (none) | ergonomic chair, office chair, M Series, 3-year warranty |
| `sihoo-m57-ergonomic-office-chair-with-built-in-footrest` | computer chair, Ergonomic, ergonomic chair, executive computer chair, Office Chair, office chair melbourne | computer chair, Ergonomic, ergonomic chair, executive computer chair, Office Chair, office chair melbourne, M Series, with footrest, headrest, 3-year warranty |
| `sihoo-vito-m90-ergonomic-office-chair` | (none) | ergonomic chair, office chair, M Series, headrest, 3-year warranty |
| `sihoo-a3-doro-c300-ergonomic-office-chair` | (none) | ergonomic chair, office chair, Doro Series, headrest, 5-year warranty |
| `desker-height-adjustable-dual-motor-sit-stand-desk` | home office, team office | home office, team office, standing desk, Desk, 10-year warranty |
| `sihoo-m76-ergonomics-office-chair` | (none) | ergonomic chair, office chair, M Series, 3-year warranty |
| `sihoo-vito-m90-ergonomic-office-chair-with-footrest` | (none) | ergonomic chair, office chair, M Series, with footrest, headrest, 3-year warranty |
| `desker-motion-desk-control-switch-black` | home office, team office | home office, team office, standing desk, Desk, 10-year warranty |
| `sihoo-doro-s300-ergonomic-office-chair` | (none) | ergonomic chair, office chair, Doro Series, headrest, 5-year warranty |
| `sihoo-a3-doro-c100-ergonomic-office-chair` | (none) | ergonomic chair, office chair, Doro Series, headrest, 5-year warranty |
| `xallking-x5pro-ergonomic-gaming-chair` | (none) | ergonomic chair, gaming chair, X Series, with footrest, headrest, 3-year warranty |
| `sihoo-doro-c500-ergonomic-office-chair` | (none) | ergonomic chair, office chair, Doro Series, headrest, 5-year warranty |
| `sihoo-m57-pro-ergonomic-office-chair` | computer chair, Ergonomic, ergonomic chair, executive computer chair, Office Chair, office chair melbourne | computer chair, Ergonomic, ergonomic chair, executive computer chair, Office Chair, office chair melbourne, M Series, headrest, 3-year warranty |
| `sihoo-m18-pro-ergonomic-office-chair` | computer chair, Ergonomic, ergonomic chair, executive computer chair, Office Chair, office chair melbourne | computer chair, Ergonomic, ergonomic chair, executive computer chair, Office Chair, office chair melbourne, M Series, headrest, 3-year warranty |
| `sihoo-m57-pro-ergonomic-office-chair-with-built-in-footrest` | computer chair, Ergonomic, ergonomic chair, executive computer chair, Office Chair, office chair melbourne | computer chair, Ergonomic, ergonomic chair, executive computer chair, Office Chair, office chair melbourne, M Series, with footrest, headrest, 3-year warranty |
| `xallking-x5c-ergonomic-gaming-chair` | (none) | ergonomic chair, gaming chair, X Series, headrest, 3-year warranty |
| `xallking-x5f-ergonomic-gaming-chair` | (none) | ergonomic chair, gaming chair, X Series, headrest, 3-year warranty |
| `xallking-x5s-ergonomic-gaming-chair` | (none) | ergonomic chair, gaming chair, X Series, headrest, 3-year warranty |
| `xallking-x3pro-premium-ergonomic-gaming-chair` | (none) | ergonomic chair, gaming chair, X Series, 3-year warranty |
| `sihoo-doro-s100-ergonomic-office-chair` | (none) | ergonomic chair, office chair, Doro Series, headrest, 5-year warranty |
| `sihoo-m59as-ergonomic-office-chair` | (none) | ergonomic chair, office chair, M Series, headrest, 3-year warranty |
| `sihoo-a3-doro-c300-pro-v2-ergonomic-office-chair` | (none) | ergonomic chair, office chair, Doro Series, headrest, 5-year warranty |

## D. Collections (14 published)

Published = `resourcePublicationsCount` 11-12 (Online Store + channels). Campaign/promo collections (count 2-4, unpublished from Online Store) were left untouched.

| Handle | SEO title before | SEO title after (len) | SEO description before | SEO description after (len) | Intro copy |
|---|---|---|---|---|---|
| `products` | Ergonomic Chairs for Gaming and Office \| Shop Now | Ergonomic Chairs for Gaming and Office \| SIHOO Australia (56) | Level up your comfort 🎮💺 with SIHOO Australia’s ergonomic gaming & office chairs — sleek, supportive, and designed for all-day performance. Shop now! | SIHOO ergonomic chairs for gaming and office use, with adjustable lumbar support and breathable mesh. Free Australia-wide delivery, 3 to 5-year warranty. (153) | existing kept |
| `kids-study-chairs` | Kids Study Chair \| Ergonomic Kids Chairs in Australia | Kids Study Chairs \| SIHOO Australia (35) | Support your child’s posture 📚 with our ergonomic kids study chairs — adjustable, comfy, and designed for healthy posture. Perfect for growing learners! | Ergonomic kids study chairs that support healthy posture through homework and study. Free Australia-wide delivery, backed by SIHOO's manufacturer warranty. (155) | existing kept |
| `sihoo-ergonomic-office-chair` | Sihoo Ergonomic Office Chairs in Australia \| Shop Now | Ergonomic Office Chairs Australia \| SIHOO Australia (51) | 20 Sihoo ergonomic office chairs from $279, rated 4.6/5 by 822 buyers. Free Australia-wide delivery, 30-day returns, 3-year warranty. Shop now! | SIHOO ergonomic office chairs with adjustable lumbar support, breathable mesh and lockable recline. Free Australia-wide delivery, 3 to 5-year warranty. (151) | existing kept |
| `fursys` | Buy Fursys Ergonomic Chairs in Australia​ \| Shop Now | Fursys Ergonomic Chairs \| SIHOO Australia (41) | Experience comfort & style 🪑 with our Fursys ergonomic chairs — adjustable, supportive, and designed for long hours of work. Upgrade your workspace today! | Fursys SIDIZ T40 and T50 ergonomic office chairs in multiple colours, with lumbar support and synchronised tilt. Free Australia-wide delivery and warranty. (155) | existing kept |
| `standing-desk` | Standing Desks in Australia \| Shop Now | Standing Desks Australia \| SIHOO Australia (42) | Boost your productivity⚡with our ergonomic standing desks — adjustable, stylish, and designed to support comfort, posture, and productivity. Shop now! | Desker electric sit-stand desks with dual motors, memory presets and anti-collision safety. Free Australia-wide delivery, 10-year warranty. (139) | existing kept |
| `doro-series` | Doro Series Ergonomic Office Chair \| Shop Now | Doro Series Ergonomic Chairs \| SIHOO Australia (46) | Discover the SIHOO Doro Series ✨ ergonomic chairs crafted for luxury comfort, style, and full-body support. Perfect for work or gaming. Shop now Australia-wide! | SIHOO Doro Series ergonomic chairs with dynamic lumbar support, 4D to 8D armrests and adaptive recline. Free Australia-wide delivery, 5-year warranty. (150) | written (119 words) |
| `office-chairs` | Office Chairs in Australia \| 10+ Models From $179 | Office Chairs Australia \| SIHOO Australia (41) | Office chairs from $179 to $999. Ergonomic support, breathable mesh. Free AU delivery, 30-day returns, 3-year warranty. Shop now! | SIHOO office chairs for home and work, with adjustable lumbar support, breathable mesh and headrest options. Free Australia-wide delivery, 3-year warranty. (155) | written (107 words) |
| `ergonomic-chairs` | Ergonomic Desk Chairs for Home & Office in Australia | Ergonomic Chairs Australia \| SIHOO Australia (44) | Ergonomic office chairs from $179 to $1,199. Adjustable lumbar, breathable mesh, optional footrest. Free AU delivery. Shop now! | Ergonomic chairs for home office, study and gaming, with adjustable lumbar, mesh and optional footrest. Free Australia-wide delivery, 3 to 5-year warranty. (155) | written (118 words) |
| `m57-series` | M57 Series Ergonomic Office Chair \| Shop Now | M57 Series Ergonomic Office Chairs \| SIHOO Australia (52) | Discover the SIHOO M57 Series 💺 ergonomic chairs with enhanced lumbar support, 3D adjustability, and footrest options for all-day comfort and performance. | SIHOO M57 and M57 Pro ergonomic office chairs with full mesh, 3D and 4D armrests and footrest options. Free Australia-wide delivery, 3-year warranty. (149) | written (118 words) |
| `m90-series` | Sihoo M90 Ergonomic Office Chair  Series  \| Shop Now | Vito M90 Series Ergonomic Chairs \| SIHOO Australia (50) | Sihoo Vito M90 ergonomic chair series, from $339 to $419. Adaptive lumbar, 3D armrests, optional footrest. Free AU delivery, 3-year warranty. | SIHOO Vito M90 ergonomic office chairs with adaptive lumbar support, 3D armrests and optional footrest. Free Australia-wide delivery, 3-year warranty. (150) | written (114 words) |
| `m18-series` | M18 Series Ergonomic Office Chair \| Shop Now | M18 Series Ergonomic Office Chairs \| SIHOO Australia (52) | Sihoo M18 ergonomic office chairs from $279. Rated 4.6/5 by 332+ buyers. Free AU delivery, 30-day returns, 3-year warranty. | SIHOO M18 and M18 Pro ergonomic office chairs with adjustable lumbar, breathable mesh back and 4D armrests. Free Australia-wide delivery, 3-year warranty. (154) | written (108 words) |
| `ergonomic-gaming-chair` | Ergonomic Gaming Chairs in Australia \| From $439 | Ergonomic Gaming Chairs Australia \| SIHOO Australia (51) | Ergonomic gaming chairs from $439. Mesh breathability without the heat of a racing seat. Free AU delivery, 3-year warranty. Shop now! | Ergonomic gaming chairs with breathable mesh, adjustable lumbar and 4D to 6D armrests for long sessions. Free Australia-wide delivery, 3-year warranty. (151) | written (118 words) |
| `xallking-gaming-chairs` | XALLKING Ergonomic Gaming Chairs Australia \| Shop Now | XALLKING Ergonomic Gaming Chairs \| SIHOO Australia (50) | Explore the Sihoo-Xallking ergonomic chair collection. Featuring X3 Pro & X5 series chairs with 6D armrests, RGB, and mesh for the ultimate setup. Shop now! | XALLKING X3 Pro and X5 series ergonomic gaming chairs with 4D to 6D armrests, mesh backs and deep recline. Free Australia-wide delivery, 3-year warranty. (153) | written (114 words) |
| `ergonomic-chairs-with-footrest` | Ergonomic Chairs with Footrest in Australia \| Sihoo Australia | Ergonomic Chairs with Footrest \| SIHOO Australia (48) | Discover ergonomic office chairs with adjustable footrests, lumbar support and reclining features. Designed for comfortable work, study and relaxation. | Ergonomic office chairs with a built-in footrest, adjustable lumbar support and reclining backrest. Free Australia-wide delivery, 3-year warranty. (146) | written (113 words) |

### New collection intro copy (descriptionHtml, previously empty)

#### `doro-series`

```html
<p>The SIHOO Doro Series is our premium range of ergonomic office chairs, built for people who sit for eight hours or more and want support that adapts to them. Every Doro chair pairs dynamic lumbar support with a weight-sensing recline, so the backrest follows your spine instead of forcing you into one position. Choose from the Doro C100, C300 Pro, C300 Pro V2, C500, S100 and S300.</p>
<p>Doro chairs suit home offices, professional workspaces and long gaming sessions alike. Expect 4D to 8D armrests, breathable elastic mesh, adjustable headrests and a 5-year warranty. Not sure which model fits your desk and budget? Read our <a href="/blogs/all-about-ergonomic-chair/best-ergonomic-chair-in-australia-2026-matched-to-your-use-case">guide to the best ergonomic chair in Australia</a>, or browse all <a href="/collections/sihoo-ergonomic-office-chair">SIHOO ergonomic office chairs</a>.</p>
```

#### `office-chairs`

```html
<p>Our office chairs range covers everyday ergonomic seating for home offices, study nooks and shared workspaces across Australia. From the compact M59 and M76 to the full-featured M57 Pro and Vito M90, each chair brings adjustable lumbar support, breathable mesh and a lockable recline, so you stay comfortable from the first email to the last video call.</p>
<p>These chairs suit anyone who wants dependable ergonomic support without a premium price tag. Most models add a height-adjustable headrest and flip-up or 3D armrests, and every chair ships free Australia-wide with a 3-year warranty. Looking for more adjustability? Compare the <a href="/collections/doro-series">Doro Series</a>, or read our <a href="/blogs/all-about-ergonomic-chair/best-ergonomic-chair-in-australia-2026-matched-to-your-use-case">ergonomic chair buying guide</a>.</p>
```

#### `ergonomic-chairs`

```html
<p>Browse the full SIHOO ergonomic chairs range in Australia, from entry-level mesh task chairs to award-winning Doro models with weight-sensing recline. Each ergonomic chair is designed around posture: adjustable lumbar support that sits in the curve of your lower back, a breathable mesh backrest that keeps you cool, and armrests that line up with your desk.</p>
<p>This collection suits remote workers, students and gamers who spend long hours seated and want a chair that reduces back and neck strain. Many models add a headrest, seat-depth adjustment or a built-in footrest, and all come with free Australia-wide delivery and a 3 to 5-year warranty. To match a chair to your setup, read our <a href="/blogs/all-about-ergonomic-chair/best-ergonomic-chair-in-australia-2026-matched-to-your-use-case">best ergonomic chair in Australia guide</a>.</p>
```

#### `m57-series`

```html
<p>The SIHOO M57 Series is our best-selling family of ergonomic office chairs, and for good reason. A full-mesh seat and backrest keep air moving on long Australian summer days, the dual-adjustable lumbar support moves up, down, in and out to meet your lower back, and the double-jointed headrest takes the load off your neck when you lean back.</p>
<p>Choose the original M57 with 3D armrests, the M57 Pro with 4D linkage armrests and an auto-balance recline, or either model with a built-in footrest for reclined breaks. All M57 chairs are BIFMA and SGS certified, rated to 150 kg and covered by a 3-year warranty with free Australia-wide delivery. Prefer a leg rest? See all <a href="/collections/ergonomic-chairs-with-footrest">ergonomic chairs with footrest</a>.</p>
```

#### `m90-series`

```html
<p>The SIHOO Vito M90 Series brings adaptive support to the mid-range ergonomic office chair. Its split backrest has a lumbar section that adjusts its push to your weight and posture, while 3D linked armrests move with the backrest as you recline, so your forearms stay supported at 103, 113 or 123 degrees.</p>
<p>The Vito M90 suits home-office workers and students who want a breathable full-mesh chair with a double-jointed headrest, and the footrest version adds a pull-out leg rest for reclined breaks. Both are BIFMA and SGS certified, rated to 150 kg and backed by a 3-year warranty with free Australia-wide delivery. Compare it with the <a href="/collections/m57-series">M57 Series</a> or read our <a href="/blogs/all-about-ergonomic-chair/best-ergonomic-chair-in-australia-2026-matched-to-your-use-case">ergonomic chair guide</a>.</p>
```

#### `m18-series`

```html
<p>The SIHOO M18 Series is the entry point to ergonomic office seating without cutting corners on support. Both the M18 and M18 Pro combine a breathable mesh backrest with a cushioned W-shaped seat, a dual-adjustable lumbar pad and a height-adjustable headrest, so you get proper posture support at a price that suits a first home office.</p>
<p>The M18 is ideal for students and part-time desk work, while the M18 Pro adds a self-weight-sensing recline and 4D linked armrests for full-time use. Every M18 chair ships free Australia-wide with a 3-year warranty. Ready to step up? Explore the <a href="/collections/m57-series">M57 Series</a> or read our <a href="/blogs/all-about-ergonomic-chair/best-ergonomic-chair-in-australia-2026-matched-to-your-use-case">best ergonomic chair in Australia guide</a>.</p>
```

#### `ergonomic-gaming-chair`

```html
<p>Ergonomic gaming chairs from SIHOO and XALLKING swap the hot, padded racing seat for breathable mesh and real adjustability. Each chair in this collection has adjustable lumbar support, a multi-position headrest and 4D to 6D armrests that move with the backrest, so you stay supported through long sessions and a full working day at the same desk.</p>
<p>This range suits gamers, streamers and anyone who works and plays on one setup. Deep recline angles up to 145 degrees, seat suspension and optional retractable footrests make it easy to switch from focus mode to a rest break. All chairs are rated to 150 kg and ship free Australia-wide with a 3-year warranty. See the full <a href="/collections/xallking-gaming-chairs">XALLKING gaming chair range</a>.</p>
```

#### `xallking-gaming-chairs`

```html
<p>XALLKING is SIHOO's gaming chair brand, built for players who want ergonomic support rather than a racing-seat look. The X5 series (X5C, X5F, X5S and X5 Pro) uses angular full-mesh backrests with C-shaped or dual-C lumbar support, 3D headrests and linked 4D to 6D armrests, while the flagship X3 Pro adds an anti-gravity recline and a reactive LED tail fin.</p>
<p>These chairs suit gamers, streamers and hybrid work-and-play setups where a chair has to stay cool and comfortable for hours. Every XALLKING chair is rated to 150 kg, reclines to at least 135 degrees and ships free Australia-wide with a 3-year warranty. Compare them with our office models in the <a href="/collections/ergonomic-gaming-chair">ergonomic gaming chairs</a> collection.</p>
```

#### `ergonomic-chairs-with-footrest`

```html
<p>Ergonomic chairs with a footrest let you recline properly between tasks without leaving your desk. Each chair in this collection has a pull-out or retractable leg rest built into the seat, paired with a lockable recline, adjustable lumbar support and a headrest, so a ten-minute break actually rests your back, neck and legs.</p>
<p>These chairs suit people who work long shifts from home, take calls or read while reclined, or share a chair between work and gaming. Choose from the M57, M57 Pro and Vito M90 footrest models, all rated to 150 kg with free Australia-wide delivery and a 3-year warranty. For chairs without a leg rest, browse all <a href="/collections/sihoo-ergonomic-office-chair">SIHOO ergonomic office chairs</a>.</p>
```

## Verification

- Mutations: 3 x `productUpdate` batches (9 aliases each) + 1 x `collectionUpdate` batch (14 aliases). All returned `userErrors: []`.
- Read-back spot check after write confirmed titles, SEO, productType and tags persisted (see session log).
- Not done / follow-ups: Kids Study Chairs and Fursys collections have no warranty term on record, so their SEO descriptions reference SIHOO's warranty generically; confirm the term and tighten if desired.
