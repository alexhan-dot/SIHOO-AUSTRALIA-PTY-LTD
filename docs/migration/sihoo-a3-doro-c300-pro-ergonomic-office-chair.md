# Doro C300 Pro — page content migration (AU)

Product: `gid://shopify/Product/8060533801251` · handle `sihoo-a3-doro-c300-pro-ergonomic-office-chair` · template `doro-series-template` (unchanged)
Sources: AU template `product.doro-series-template.json`; US page https://www.sihoo.com/products/sihoo-doro-c300-pro-ergonomic-chair
Date: 2026-09-08. Title, price, variants, gallery, templateSuffix and status untouched. `custom.videos` untouched.

## Before → after (text blocks)

| AU template block (before) | Content | After (metafield / metaobject) |
|---|---|---|
| main › accordion "Benefits" | Supports up to 330 lbs; dynamic lumbar; 5'–6'3"; spacious cushion + seat depth; 6D armrests; single handle; BIFMA/SGS | `custom.highlights` (6 items, metric) + `custom.best_for` |
| custom-multi-column "Specifications" (Overview / headrest / armrests / seat) | Spec copy | Already in `specs.*`; used for FAQ answers (height 150–190 cm, 150 kg, 44–54 cm seat height, recline 105/120/135°) |
| product-promo-strip | "Relax and let inspiration flow — sit well and think better." | not migrated (theme strap-line) |
| background-video | https://youtu.be/4FzlrQcUQCI (SIHOO global channel, generic Doro clip) | `custom.hero_video` **left unset** — not SIHOO_AU and not model-specific; US page has only vertical UGC clips |
| product-promo-gallery "Features" (4 labels) | Dynamic Lumbar Support / Flexible Backrest / Bigger W-Shaped Cushion / Seat depth adjustment | `custom.highlights` items 1–4 (+ `highlight_images` in the same order) |
| product-testimonial ×2 (Mitch Gassner, MMORPG) | Two review quotes | not migrated (press_quote out of scope for this pass) |
| custom-image-text "Adjustable seat depth for custom comfort" | seat-depth copy | feature_story `c300-pro-story-1` |
| custom-image-text "Adjustable anti-spine lumbar support" | BM Tracking copy | feature_story `c300-pro-story-2` |
| custom-multi-column "How C300 Pro Chair Helps?" (3 columns) | flexible backrest / full-back headrest / workspace design | feature_story `c300-pro-story-3` (backrest), `c300-pro-story-4` (headrest); design column → `lifestyle_images[3]` |
| custom-multi-column "Comfort, Control, and Durability" | 6D armrests / right-hand controls | feature_story `c300-pro-story-5` |
| custom-multi-column (mesh / BM tracking / BIFMA & SGS) | image headings only | feature_story `c300-pro-story-6` |
| custom-multi-column "Ergonomic Chair Specifications" (imperial) | 28"W… 330 lbs, 3-year warranty (US) | superseded by `specs.*` (metric) and FAQ (5-year Doro warranty) |
| slideshow "For every part of you" | C300_pro.webp | `custom.lifestyle_images[1]` |
| US page FAQ (5 Qs) + US highlights (10 Ps) | | faq_items `c300-pro-faq-1…8` (AU-English, metric, AU delivery/warranty) |
| Product description (4011 chars) | left as is — only `customize(d)` → `customise(d)` | description |

## Before → after (images)

| shop_images file (before) | AU file gid | After |
|---|---|---|
| sihoo-img-1.jpg / -2.webp / -3.jpg / -4.webp | 42283498504483 / 42283498930467 / 42283499028771 / 42283500208419 | `highlight_images[1–4]` |
| 2024__08_79d46ac6….webp (6D armrests) | 42361671319843 | `highlight_images[5]`, story-5 image |
| 1_9a6e7073….webp (headrest) | 42361662177571 | `highlight_images[6]`, story-4 image |
| 20240115-164855.webp | 42361647923491 | story-1 image |
| c300_03_2480_1080.webp | 42361654673699 | story-2 image |
| 1940-1200.webp (AU has .jpg) | 40854598222115 | story-3 image |
| c300_19703e7a….jpg | 42361672859939 | story-6 image |
| 2480-1280_b40d9cb4….webp (office scene) | 42361662210339 | `lifestyle_images[3]` |
| C300_pro.webp (slideshow) | 42361675317539 | `lifestyle_images[1]` |
| US c300-pro-04.webp (home office) | uploaded → 43782991184163 (`c300-pro-lifestyle-home-office.webp`) | `lifestyle_images[2]` |
| 20240115-114800.webp, 20240112-101353.webp, 20240112-101347….jpg, C300_b84f4cd6…, C300_e1e9ffaa… | — | not referenced (spec/controls tiles) |

## Created objects

- feature_story: c300-pro-story-1 → 316785951011, -2 → 316785983779, -3 → 316786016547, -4 → 316786049315, -5 → 316786082083, -6 → 316786114851
- faq_item: c300-pro-faq-1…8 → 316786344227, 316786376995, 316786409763, 316786442531, 316786475299, 316786508067, 316786540835, 316786573603 (all ACTIVE)
- faqs: faqs-c300-pro → 316786999587 (ACTIVE)
- Metafields set: custom.highlights, highlight_images, best_for, feature_stories, faqs, compare_products (C300 Pro V2), compare_intro, lifestyle_images, whats_in_box — userErrors: none. hero_video / hero_video_file: not set.
