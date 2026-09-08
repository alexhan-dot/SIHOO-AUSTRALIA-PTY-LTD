# Migration: Sihoo Doro S300 — `sihoo-doro-s300-ergonomic-office-chair`

Product: `gid://shopify/Product/8968609431843` · Template: `product.s300` (AU) · Date: 2026-09-08
Scope: only `custom.*` metafields, metaobjects and description spelling changed. Title, price, variants, gallery, templateSuffix, status untouched. `custom.videos` untouched.

## Before → After (text blocks)

| # | Template section / block | Before (AU template text) | After (destination) |
|---|---|---|---|
| 1 | main › text_d8qqgx | "Free shipping with delivery in 1-5 days." | Not migrated (theme block). Delivery copy re-stated in `s300-faq-7`. |
| 2 | main › accordion ff72739d | "Why Choose the SIHOO DORO-S300…" + 6 bullet features | `custom.highlights` (6 items) + `custom.best_for` |
| 3 | main › related-products | `specifications.compare_with` app metafield | `custom.compare_products` = [S100, C300 Pro] + `custom.compare_intro` |
| 4 | rich_text_JeXmGt | "Premium Ergonomic Office Chair for Long Work Hours" + 2 paras | Description already 325 words → kept; only US spelling fixed (`customized` → `personalised`) |
| 5 | background_video_VRGpGN | subheading/heading/text are theme placeholders ("Tell your story", "Background video") | Placeholder text dropped. `video_external` empty → `custom.hero_video` left unset. `video_shopify` 01eeaf68… (63 s SIHOO clip) → `custom.hero_video_file` |
| 6 | rich_text_EjcAFq | "Sihoo DORO-S300 Ergonomic Office Chair Features" | Section heading only — not migrated |
| 7 | custom_content_QaWjQY (4 quarter images) | captions: Anti-Gravity Mechanism / Dual dynamic lumbar support / Extra-soft mesh made of Italian velvet / Independent backrest | `custom.highlight_images` (4, same order as highlights 1–4) |
| 8 | image_with_text_emAkdX | "Anti-Gravity Recline for Smooth Ergonomic Support" | Merged into `s300-story-1` and highlight 1 |
| 9 | image_with_text_cgmn3V | "Experience Weightlessness with the Doro S300" | `s300-story-1` (image-left) |
| 10 | image_with_text_exBAbL | "Comprehensive lower back support" | `s300-story-2` (image-right) |
| 11 | image_with_text_UiDj6e | "Comfort for the Entire Back" (150 cm–190 cm; imperial dropped) | `s300-story-3` (image-left) |
| 12 | image_with_text_D4TiKX | "Coordinated Support for the Full Body" (template text was a duplicate of lumbar copy) | `s300-story-4` (image-right) — body rewritten from description's "Coordinated support" para |
| 13 | image_with_text_H8cx7F | "Soft and Spacious Headrest" | Folded into `s300-story-6` body + `s300-faq-4` |
| 14 | rich_text_BAyciK | "Award-winning design" (German Design Award, aluminium alloy) | Kept in description (already there). Not duplicated. |
| 15 | image_with_text_NTA6Lj | "Cloud-Like Softness" | `s300-story-5` (image-left) |
| 16 | image_with_text_4xp74p | "Pressure-Relieving Seating" | `s300-story-6` (image-right) |
| 17 | image_with_text_NDVfei | "Robustly Built, Rigorously Tested" (BIFMA, SGS) | `s300-story-6` body + `s300-faq-2` |
| 18 | rich_text_XNJUk6 | "6D armrests for arm support in every direction" | highlight 5 + `s300-faq-4` |
| 19 | rich_text_DMGPww | "Complete control within your reach" | `s300-faq-4` (controls on right-hand side) |
| 20 | (none) | — | `custom.faqs` → `faqs-s300` (8 new items + 4 reused from existing `s-300` container) |

## Before → After (images)

| Template image (`shopify://shop_images/…`) | File gid | After |
|---|---|---|
| 20240309-153512.jpg | MediaImage/39293580673315 | not used (hero banner duplicate of gallery) |
| 600-863_2_7b939174….jpg | MediaImage/39293580116259 | highlight_images[0] |
| 600-863_1_4396b001….jpg | MediaImage/39293580378403 | highlight_images[1] |
| 600-863_4_9c7b28d4….jpg | MediaImage/39293580542243 | highlight_images[2] |
| 600-863_3_7d220b07….jpg | MediaImage/39293580345635 | highlight_images[3] |
| SIHOO.webp | MediaImage/37473669677347 | not used (generic brand image) |
| S300_03_1358_840.gif | MediaImage/39293581263139 | s300-story-1.image |
| 01_8978772d….gif | MediaImage/39293580968227 | s300-story-2.image |
| 1940-1200_1_fa5d8119….jpg | MediaImage/39293580509475 | s300-story-3.image |
| s300__12M_6d4c48c9….gif | MediaImage/39293581164835 | s300-story-4.image |
| 1940-1200_5.jpg | MediaImage/39293580575011 | not used (headrest; folded into story 6 text) |
| 3_59e346be….jpg | MediaImage/39293580149027 | lifestyle_images[0] |
| 1_61afba7b…_1.jpg | MediaImage/39293580247331 | lifestyle_images[1] |
| 2_64a0ce0e….jpg | MediaImage/39293580640547 | lifestyle_images[2] |
| 1940-1200_3_352f2f8e….jpg | MediaImage/39293580706083 | s300-story-5.image |
| 1940-1200_4_7ce1ccd8….jpg | MediaImage/39293580607779 | s300-story-6.image |
| 20240313-154830.jpg | MediaImage/39293580476707 | not used (build/testing; text folded into story 6) |
| 20240220-102152.jpg (overlay) | MediaImage/39293580443939 | not used (no text; armrest overlay) |
| 20240220-102210.jpg (overlay) | MediaImage/39293580411171 | not used (no text; controls overlay) |
| video 01eeaf68841f45f58bbf92a37c81de2e….mp4 | Video/38022464504099 | custom.hero_video_file |

File lookups: 19 images + 1 video queried, 20 found, 0 missing.

## Metaobjects created
| Handle | Type | gid |
|---|---|---|
| s300-story-1 | feature_story | gid://shopify/Metaobject/316785230115 |
| s300-story-2 | feature_story | gid://shopify/Metaobject/316785262883 |
| s300-story-3 | feature_story | gid://shopify/Metaobject/316785295651 |
| s300-story-4 | feature_story | gid://shopify/Metaobject/316785328419 |
| s300-story-5 | feature_story | gid://shopify/Metaobject/316785361187 |
| s300-story-6 | feature_story | gid://shopify/Metaobject/316785393955 |
| s300-faq-1 … s300-faq-8 | faq_item (ACTIVE) | 316785426723, 316785459491, 316785492259, 316785525027, 316785557795, 316785590563, 316785656099, 316785688867 |
| faqs-s300 | faqs (ACTIVE) | gid://shopify/Metaobject/316785787171 (8 new + 4 reused from `s-300`: 209839489315, 209839325475, 209839292707, 209839227171) |

## Product metafields set (`metafieldsSet` userErrors: none)
custom.highlights (6), custom.highlight_images (4), custom.best_for (4), custom.hero_video_file, custom.feature_stories (6), custom.faqs, custom.compare_products [S100 10184342208803, C300 Pro 8060533801251], custom.compare_intro, custom.lifestyle_images (3). Not set: custom.hero_video (no external URL), custom.whats_in_box (not documented in template), custom.press_quotes (none in template). `custom.videos` untouched.

## Description
325 words → kept. Change: `customized` → `personalised` (productUpdate userErrors: none).
