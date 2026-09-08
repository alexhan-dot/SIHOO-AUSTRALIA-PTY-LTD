# M56 — page content migration (AU)

Product: `gid://shopify/Product/6137598509250` · handle `sihoo-m56-ergonomic-office-chair` · template `m56-v1` (unchanged)
Sources: AU template `product.m56-v1.json` (`product.m56.json` holds no copy); existing description + `specs.*`; US M56B page https://www.sihoo.com/products/m56b-ergonomic-office-chair (different chair — mesh seat, 3D armrests — only the "lumbar that moves with you" wording reused)
Date: 2026-09-08. Title, price, variants, gallery, templateSuffix and status untouched. `custom.related_articles`, `custom.related_article_paths` untouched.

## Metafields set

- `custom.highlights` (6), `custom.highlight_images` (6), `custom.best_for` (4), `custom.feature_stories` (6), `custom.faqs`, `custom.compare_products` (M16, M57), `custom.compare_intro`, `custom.lifestyle_images` (2), `custom.hero_video_file` → `gid://shopify/Video/41859921707299` (m56-v1.mp4, Shopify-hosted, referenced by the template's info-grid)
- `specs.needs_confirmation` — one line appended
- `custom.hero_video` (URL): unset — no YouTube video in template
- `custom.whats_in_box`: not set
- Description: kept; one US spelling fixed ("recognized" → "recognised"). Imperial aside "(3.9 in.)" and 90–125° claim left in place (flagged).

## Created objects

- feature_story: m56-story-1 → 316802269475, -2 → 316802302243, -3 → 316802335011, -4 → 316802367779, -5 → 316802400547, -6 → 316802466083
- faq_item (ACTIVE): m56-faq-1…8 → 316802498851, 316802531619, 316802564387, 316802597155, 316802629923, 316802662691, 316802695459, 316802728227
- faqs (ACTIVE): faqs-m56 → 316805251363
- File uploads: none

## Before → after (text blocks)

| AU template block (before) | Content | After |
|---|---|---|
| main › collapsible (Amazon-style features / ergonomic paragraphs) | | highlights, faq-4; description kept |
| main › text "Free shipping with delivery in 1-5 days." | | faq-7 |
| rich-text intro "Sitting all day shouldn't leave you sore…" | dynamic lumbar + soft contoured seat | story-1 / story-5 wording |
| slideshow "For every part of you" (m56-1.jpg) | | `lifestyle_images[1]` |
| image-with-text "Ultra-Wide Dynamic Lumbar Support" (disabled, M56C copy) | | not migrated: M56C wording; AU M56 uses butterfly pad |
| image-with-text "Adjustable and Rotatable Headrest" (30 cm) | | story-3, highlight 2 |
| image-with-text "Y-shaped Thickening Bracket Design" | | story-2, highlight 5 |
| image-with-text "135° tilt-back angle" | | story-6, highlight 6 |
| image-with-text "Biomimetic Butterfly Lumbar Support" (3.5 cm) | | story-1, highlight 1 |
| image-with-text "Liftable Armrests" (7 cm) | | story-4, highlight 3 |
| image-with-text "W-Shaped Foam Seat" | | story-5, highlight 4 |
| image-with-text "Y-shaped Adjustable Backrest" (6 cm lift, 155–185 cm) | | story-2 / faq-1 (height range from specs: 150–190; flagged) |
| info-grid (disabled): "Support That Moves With You" / "Comfort for Every Body" / "Engineered for Real Support" / "Global Trust" + videos m56-v1/v2/v3 | | story-1 wording; m56-v1.mp4 → `hero_video_file`; "1.6 million sold" claim not migrated |
| rich-text "Deciding between the M56 and M57?" (blog link) | | already in `custom.related_article_paths`; faq-8 covers vs M57 |
| Description | | kept (spelling fix only) |

## Before → after (images)

| File (before) | gid | After |
|---|---|---|
| m56-1.jpg (boardroom, 4000×4000, photo) | 42077560832291 | `lifestyle_images[1]` |
| m56-img-4.webp (woman reading, 750×750, photo) | 41859885760803 | `lifestyle_images[2]` |
| 3_55deb201….jpg (butterfly lumbar, "3.5cm" baked) | 42077549429027 | story-1, `highlight_images[1]` |
| 1_3acb47f2….jpg (headrest diagram) | 42077466788131 | story-3, `highlight_images[2]` |
| 4_1ef6cc64….jpg (armrest, photo) | 42077555884323 | story-4, `highlight_images[3]` |
| 5_b6c20d0e….jpg (W seat render) | 42077557719331 | story-5, `highlight_images[4]` |
| 2_0c80093a….jpg (Y-shaped back, photo) | 42077457285411 | story-2, `highlight_images[5]` |
| m56-18.jpg (135° tilt, baked text) | 42077522198819 | story-6, `highlight_images[6]` |
| m56-11.jpg (parameters, metric baked) / m56-specs-1.webp (imperial) | 42077595336995 / 41859880714531 | not migrated: spec tiles |
| home-office-design-ideas.jpg (3D render), relaxing.webp, built-to-last.webp, map.webp | 41187502457123 / 41641090253091 / 41641167782179 / — | not migrated: generic / not the M56 |
| m56-img-4.webp already used; US M56B images (02.webp, 68a5b1b9…, 47ccec6d…, d6bb4e84…, a58b64e6…) | — | not uploaded: M56B is a different chair (mesh seat, 3D arms) |
| Videos m56-v2 / m56-v3 (41859922493731 / 41859924164899) | | not referenced |

## Flags

- Template says Y-backrest suits 155–185 cm; specs say 150–190 (used). Description says 90–125° recline; specs 105–135° (template agrees with 135°).
- Description embeds two cdn videos (e4ecad91…, 82437ab5…) that are not the m56-v1/v2/v3 files.
