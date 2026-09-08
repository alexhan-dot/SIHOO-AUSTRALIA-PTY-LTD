# Doro S100 — page content migration (AU)

Product: `gid://shopify/Product/10184342208803` · handle `sihoo-doro-s100-ergonomic-office-chair` · template `s100-2` (unchanged)
Sources: AU template `product.s100-2.json`; US page https://www.sihoo.com/products/sihoo-doro-s100-ergonomic-office-chair-with-dual-dynamic-lumbar-support
Date: 2026-09-08. Title, price, variants, gallery, templateSuffix and status untouched. `custom.videos` untouched.

## Before → after (text blocks)

| AU template block (before) | Content | After |
|---|---|---|
| main / custom-main-product › accordion "Features" | Dual lumbar, adjustable backrest+headrest, recline 135°, waterfall seat, mesh, seat depth, 4D armrests, BIFMA/SGS | `custom.highlights` (5) + description "Key features" |
| accordion "Benefits" | 330 lbs, media endorsements, 4D armrests, dual lumbar, 135°, BIFMA/SGS | `custom.best_for`; metric (150 kg) in description/FAQ; media names not migrated |
| custom-main-product › trust-badges "3-Year Warranty" | — | superseded: Doro = 5-year warranty (`specs.warranty_years`=5) in FAQ/description |
| custom-multi-column "Ergonomic Chair Specifications" | 67×70×111–126 cm, 22.3 kg, 150 kg, seat depth 38.5–43.5, hip 51 cm, 4D armrests; install/adjust YouTube links | numbers reused in description + faq `s100-faq-1/2/4`; video links already in `custom.videos` |
| product-promo-strip | "Relax and let inspiration flow…" | not migrated |
| background-video | https://youtu.be/552SU6d0c6E ("Office warriors… Doro Series", SIHOO global channel, not model-specific) | `custom.hero_video` **left unset**; US page has only vertical UGC clips (5) |
| product-promo-gallery (4 labels) | Dual Dynamic Lumbar / Independent Backrest / 4D Armrest / Premium Elastic Mesh | `custom.highlights` 1–4 (+ US 800×800 key-feature icons as `highlight_images`, + "Seat depth adjustment" as #5 from US gallery) |
| product-testimonial ×2 (Gamerant, Gamezebo) | quotes | not migrated (press_quote out of scope) |
| custom-image-text ×2 (C300 Pro seat-depth / BM Tracking copy + C300 images) | wrong-model copy | **dropped**; replaced by S100 stories 4 & 1 |
| custom-multi-column "How S100 Chair Helps?" (3) | seat depth (mis-titled "Wide spacious headrest") / headrest / 4D arms | feature_story `s100-story-4`, `s100-story-2`, `s100-story-3` |
| custom-multi-column (dual lumbar heading, 2 images) | dual dynamic lumbar | feature_story `s100-story-1`, `s100-story-5` |
| custom-multi-column (C300 mesh / BM tracking / BIFMA tiles) | headings only | feature_story `s100-story-6` |
| slideshow "For every part of you" (C300_pro.webp) | C300 image | not reused; S100 lifestyle set instead |
| US FAQ (7) + US "Support for all heights" | | faq_items `s100-faq-1…8` (metric, AU delivery, 5-yr warranty, vs C300 Pro/S300) |
| Product description (empty) | | new: 3 AU-English paragraphs + Key features |

## Before → after (images)

| File (before) | gid | After |
|---|---|---|
| dual-dynamic.png / backrest.png / 222.png / 444.png (AU, 208×208 icons) | 42861337870627 / 42861338558755 / 42861339017507 / 42861339443491 | too small; replaced by US 800×800 icons |
| US 14-54…png, 333…png, 222.png, 444.png, 555.png | uploaded → 43783036305699, 43783036338467, 43783036371235, 43783036404003, 43783036436771 | `highlight_images[1–5]`; 43783036371235 also story-3, 43783036404003 also story-6 |
| 1_54fc5a51….webp (AU, lumbar 180°) | 42668661211427 | story-1 |
| 20231223-114502.webp (AU) | 42668663177507 | story-5 |
| US cb138fb…jpg (backrest/headrest) | uploaded → 43783036469539 | story-2 |
| US 776415817…jpg (waterfall seat) | uploaded → 43783036502307 | story-4 |
| 3.webp / 4.webp / 5.webp (AU template refs) | not found in Files | — |
| US 4D__jpg…, 20231227-180126.jpg, jpg_4a91e85b… | — | **skipped: imperial-only annotations (2.76in / 1.97in / 5'–6'3")** |
| s100-working.webp (AU, = US hero) | 41641088090403 | `lifestyle_images[1]` |
| US S100-model.webp | uploaded → 43783036535075 | `lifestyle_images[2]` |
| S100-kol-gaming….webp (AU) | 41849548046627 | `lifestyle_images[3]` |
| S100-white-2.png / S100-white.png (spec tiles) | — | not referenced |

## Created objects

- feature_story: s100-story-1 → 316790276387, -2 → 316790309155, -3 → 316790341923, -4 → 316790374691, -5 → 316790407459, -6 → 316790440227
- faq_item: s100-faq-1…8 → 316790505763, 316790538531, 316790571299, 316790604067, 316790636835, 316790669603, 316790702371, 316790735139 (ACTIVE)
- faqs: faqs-s100 → 316790997283 (ACTIVE)
- Metafields set: highlights, highlight_images, best_for, feature_stories, faqs, compare_products (S300, C300 Pro), compare_intro, lifestyle_images, whats_in_box — userErrors: none. hero_video: unset.
