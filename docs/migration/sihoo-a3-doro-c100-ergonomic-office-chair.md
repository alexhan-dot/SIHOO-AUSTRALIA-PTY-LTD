# Migration: Sihoo A3 Doro C100 — `sihoo-a3-doro-c100-ergonomic-office-chair`

Product: `gid://shopify/Product/9360837837091` · Template: `product.c100` (AU) · Date: 2026-09-08
Scope: only `custom.*` / `specs.*` metafields and metaobjects changed. Title, price, variants, gallery, templateSuffix, status and description untouched (description ~100 words, already AU English). `custom.videos` untouched.

**Data conflict flagged (owner to confirm):** the template's accordions say max load **136 kg**, height **152–190/191 cm**, **3-year** warranty and **5–7 business day** shipping; the product's `specs.*` metafields say **150 kg**, **150–190 cm**, **5 years**. Per the migration brief, `specs.*` and the Doro 5-year warranty were used in FAQs. Conflict appended to `specs.needs_confirmation`.

## Before → After (text blocks)

| # | Template section / block | Before (AU template text) | After (destination) |
|---|---|---|---|
| 1 | main › text_d8qqgx / custom-main-product shipping-note & demand-alert | "Free shipping with delivery in 1-5 days"; "HIGH DEMAND — extended dispatch 5–7 business days" | Theme blocks, not migrated (transient). Delivery restated in `c100-faq-7`. |
| 2 | accordion "Find Your Fit" | links to 2 blog articles | Not migrated (product already has `custom.related_articles`) |
| 3 | accordion "Features" (9 items: dynamic lumbar, adaptive design 152–191 cm, spacious cushion, 4-direction armrests, easy controls, flexible backrest, precision headrest, sleek design, breathable mesh) | | `custom.highlights` (6) + `c100-story-5` (easy controls) + `custom.best_for` |
| 4 | accordion "Benefits" (136 kg, 152–190 cm, 4D armrests, BIFMA/SGS, Gadgeteer/MMORPG endorsement) | | highlights 4 & 6, `c100-faq-1/2`. Endorsement line not migrated (no quotable text for `press_quotes`). Load/height superseded by `specs.*` (see conflict) |
| 5 | accordion "Promises" (30-day trial, 3-year warranty, 5–7 day shipping, support email) | | Not migrated as-is: warranty → `c100-faq-6` (5 years per Doro policy), shipping → `c100-faq-7` (per brief). 30-day trial not migrated (policy, not product content) |
| 6 | accordion "FAQ" (5 Qs + "Why choose" bullets) | Q1 unique/price, Q2 lumbar, Q3 taller users, Q4 headrest, Q5 armrests | Q1→`c100-faq-8`, Q2→`c100-faq-3`, Q3→`c100-faq-1`, Q4+Q5→`c100-faq-4`. New: faq-2 load, faq-5 assembly, faq-6 warranty, faq-7 delivery |
| 7 | background_video_QbRE7c | `video_external` https://youtu.be/MbYQw3N-x7k — oEmbed title "Every gamer is unique, and so is the Doro Series" (SIHOO Doro Series video by store owner) | `custom.hero_video` |
| 8 | rich_text_EjcAFq | "Sihoo A3 DORO-C100 Ergonomic Chair Features" | heading only, not migrated |
| 9 | custom_content_QaWjQY (4 quarter images) | captions: Self-adaptive lumbar support / Wide multi-adjustable headrest / Flexible Backrest / 4D coordinated armrests | `custom.highlight_images` (same order as highlights 1–4) |
| 10 | rich_text_x4fg8L | "Dynamic lumbar support that moves with you" (BM tracking) | highlight 1 + `c100-faq-3` + `c100-story-3` body |
| 11 | background_video_xhCkHG | `video_shopify` a9b5de96… (81 s); `video_external` `_9VUPq3SxOc` = Shopify placeholder video | `custom.hero_video_file` = Video/41015569711395; placeholder URL ignored |
| 12 | image_with_text_XVYNAC | "Streamlined backrest that flexes and comforms" (typo fixed) | `c100-story-1` (image-left) |
| 13 | image_with_text_U4DmfJ | "Wide and precise neck support" | `c100-story-2` (image-right) |
| 14 | image_with_text_emAkdX | "Recline in comfort and support" | `c100-story-3` (image-left) |
| 15 | image_with_text_cgmn3V | "Feel weightless when seated in Doro C100" (waterfall seat) | `c100-story-4` (image-right) |
| 16 | image_with_text_D4TiKX | "Made for comfort, made to last" (mesh) | highlight 6 |
| 17 | image_with_text_NTA6Lj | "Adaptable mechanism, comfortable reclining" (US "utilizing" dropped) | `c100-story-5` (image-left) |
| 18 | rich_text_Bm6wCn | "Rigorously tested…" — "American BIFMA", "German TUV" | `c100-faq-2` uses BIFMA + SGS per `specs.certifications`; TUV claim not carried (not in specs) |
| 19 | image_with_text_MfDQ3r | "Control Doro C100 with ease" (copy is actually headrest text) | merged into `c100-story-2`; single-handle control → `c100-story-5` |
| 20 | image_with_text_TTHNzM | "Rest your arms in 4 directions and in coordination" (US "synchronized") | `c100-story-6` (image-right) |
| 21 | rich_text_hMcznq | "Designed to elevate your workspace" | `custom.best_for` |

## Before → After (images)

| Template image (`shopify://shop_images/…`) | File gid | After |
|---|---|---|
| 1313_3.jpg | MediaImage/41015554736419 | highlight_images[0] |
| 1313_1_1.jpg | MediaImage/41015554703651 | highlight_images[1] |
| 1313_4_1.jpg | MediaImage/41015554670883 | highlight_images[2] |
| 1313_2_1.jpg | MediaImage/41015554638115 | highlight_images[3] |
| Sihoo.jpg | MediaImage/41015597891875 | c100-story-1.image |
| Sihoo-2_7bc01927….jpg | MediaImage/41015597859107 | c100-story-2.image |
| Sihoo-5_705dfc3f….jpg | MediaImage/41015597826339 | c100-story-3.image |
| A3_2233_316f0c8a….jpg | MediaImage/41015597793571 | c100-story-4.image |
| 1_57a7c1ff….jpg | MediaImage/41015597924643 | not used (mesh; folded into highlight) |
| 1-_2.jpg | MediaImage/41015597695267 | c100-story-5.image |
| 2480_2.jpg (overlay, no text) | MediaImage/41015641768227 | lifestyle_images[0] |
| Sihoo-3_6abf7543….jpg | MediaImage/41015658217763 | not used (duplicate headrest) |
| Sihoo-4_bde71bb0….jpg | MediaImage/41015658152227 | c100-story-6.image |
| Sihoo_Ergonomischer_Burostuhl_C300_Abmessungen.jpg | MediaImage/41015658086691 | **not used — this is a C300 dimensions graphic, wrong model** |
| 3_01d0735d….jpg (overlay, no text) | MediaImage/41015554605347 | lifestyle_images[1] |
| video a9b5de9620bd40f4b0a9443f7985acf7….mp4 | Video/41015569711395 | custom.hero_video_file |

File lookups: 15 images + 1 video queried, 16 found, 0 missing (`Sihoo.jpg` and `1-_2.jpg` needed date-scoped queries). Template has no gallery/slideshow section, so the two text-free overlay images serve as lifestyle images (2).

## Metaobjects created
| Handle | Type | gid |
|---|---|---|
| c100-story-1 … c100-story-6 | feature_story | 316788998435, 316789031203, 316789063971, 316789096739, 316789129507, 316789162275 |
| c100-faq-1 … c100-faq-8 | faq_item (ACTIVE) | 316789195043, 316789227811, 316789260579, 316789293347, 316789326115, 316789358883, 316789391651, 316789424419 |
| faqs-c100 | faqs (ACTIVE) | gid://shopify/Metaobject/316789555491 |

## Product metafields set (`metafieldsSet` userErrors: none)
custom.highlights (6), custom.highlight_images (4), custom.best_for (4), custom.hero_video (https://youtu.be/MbYQw3N-x7k), custom.hero_video_file (Video/41015569711395), custom.feature_stories (6), custom.faqs, custom.compare_products [C300 Pro 8060533801251, S100 10184342208803], custom.compare_intro, custom.lifestyle_images (2). specs.needs_confirmation appended with the load/height/warranty conflict. Not set: custom.whats_in_box (not documented), custom.press_quotes (Gadgeteer/MMORPG mentioned but no quote text). `custom.videos` untouched.

## Description
~100 words, AU English → unchanged.
