# Migration: Sihoo Doro C500 — `sihoo-doro-c500-ergonomic-office-chair`

Product: `gid://shopify/Product/9882185040163` · Template: `product.c500` (AU) · Date: 2026-09-08
Scope: only `custom.*` metafields and metaobjects changed. Title, price, variants, gallery, templateSuffix, status and description untouched (description already AU English, >60 words). `custom.videos` untouched.

## Before → After (text blocks)

| # | Template section / block | Before (AU template text) | After (destination) |
|---|---|---|---|
| 1 | main › text_d8qqgx | "Free shipping with delivery in 1-5 days." | Theme block, not migrated. Delivery restated in `c500-faq-7`. |
| 2 | main › accordion "The Next Generation of Space Seating Comfort" | 1 para positioning copy | `custom.best_for` + `custom.compare_intro` |
| 3 | rich_text_EjcAFq | "Sihoo DORO-C500 Ergonomic Chair Features" | Heading only, not migrated |
| 4 | custom_content_QaWjQY (4 quarter images) | captions: Anti-Gravity Mechanism / Domino 3D lumbar support system / Extra-soft mesh made of Italian velvet / 6D Bionic Joint Armrest | `custom.highlights` 1–4 + `custom.highlight_images` (same order) |
| 5 | image_with_text_emAkdX | "Breakthrough Anti-Gravity Mechanism" | `c500-story-1` (image-left) |
| 6 | image_with_text_cgmn3V | "Experience Weightlessness with the Doro C500" (image is S300 GIF) | Merged into `c500-story-1` + `c500-faq-3` |
| 7 | image_with_text_exBAbL | "Adaptive Anti-Spine Lumbar Support" (BM tracking) | `c500-story-2` (image-right) |
| 8 | image_with_text_UiDj6e | "Adjustable Backrest Height for Tailored Support" (150 cm–190 cm; imperial dropped) | `c500-story-3` (image-left) |
| 9 | image_with_text_D4TiKX | "Experience Effortless Comfort…" (generic repeat of anti-gravity copy) | Not migrated (duplicate) |
| 10 | image_with_text_3DfKjP | "6D armrests for arm support in all" | `c500-story-4` (image-right), highlight 4 |
| 11 | image_with_text_H8cx7F | "Wide-Angle 3D Headrest for Exceptional Neck Support" | `c500-story-5` (image-left), highlight 6 |
| 12 | image_with_text_7WAwRX | "Customisable Seat Depth for Tailored Comfort" (4 cm) | `c500-story-6` (image-right) |
| 13 | rich_text_BAyciK | "Award-winning design" — copy refers to **S300**, US spelling (aluminum, esthetics) | Not migrated (wrong model) |
| 14 | image_with_text_NTA6Lj | "Cloud-Like Softness" | Folded into `c500-story-6` body + highlight 3 |
| 15 | image_with_text_NDVfei | "Engineered for Durability and Certified Safety" (BIFMA Level 4) | highlight 6 + `c500-faq-2` |
| 16 | background_video_VRGpGN | placeholder text; `video_external` empty; `video_shopify` FUNCTION DEMONSTRATION VID (118 s) | `custom.hero_video_file`; `custom.hero_video` left unset |
| 17 | collapsible_tabs_AWRURX (10 Qs) | Q1 difference, Q2 long hours, Q3 warranty, Q4 posture, Q5 adjust, Q6 assembly, Q7 climate, Q8 home/corporate, Q9 certifications, Q10 bestseller | Reused: Q3→faq-6, Q5→faq-4, Q6→faq-5, Q9→faq-2, Q1→faq-8, Q2+Q7→faq-1. Dropped: Q4, Q8, Q10 (marketing filler). New: faq-1 (height range), faq-3 (mechanism), faq-7 (delivery) |
| 18 | background_video_cqrB3X | placeholder text; INSTALLATION VID.mp4 | Not migrated (assembly video; `custom.videos` not to be overwritten) |
| 19 | video_with_text_6WhCrc | "Easy Installation Guide Video" + YouTube `_9VUPq3SxOc` + copy | Copy folded into `c500-faq-5`. YouTube `_9VUPq3SxOc` is Shopify's **placeholder** video ("Share your brand story…"), not SIHOO — not migrated; owner should replace with the real INSTALLATION VID via `custom.videos` |

## Before → After (images)

| Template image (`shopify://shop_images/…`) | File gid | After |
|---|---|---|
| C500_0822_790_02_36136fa3….jpg | MediaImage/40969736225059 | highlight_images[0] |
| 2024.05.07_c500_3617.jpg | MediaImage/40969705521443 | highlight_images[1] |
| 2024.05.07_c500_3467.jpg | MediaImage/40969701032227 | highlight_images[2] |
| b438e0aca8d7dacf1ec0c61646bc88ce.jpg | MediaImage/40969692447011 | highlight_images[3] |
| 4_c317a06a….jpg | MediaImage/40969472409891 | c500-story-1.image |
| S300_03_1358_840.gif | MediaImage/39293581263139 | not used (S300 asset) |
| C500_0904_790_13.gif | MediaImage/40969569796387 | c500-story-2.image |
| C500_0904_790_20.gif | MediaImage/40969573335331 | c500-story-3.image |
| 4_i_2.jpg | MediaImage/40969537585443 | not used (duplicate story) |
| C500_0904_790_15.gif | MediaImage/40969566257443 | c500-story-4.image |
| C500_0904_790_17.gif | MediaImage/40969567666467 | c500-story-5.image |
| C500_0904_790_22.gif | MediaImage/40969569992995 | c500-story-6.image |
| 1940-1200_3_352f2f8e….jpg | MediaImage/39293580706083 | not used (S300 asset) |
| 20240313-154830.jpg | MediaImage/39293580476707 | not used (S300 asset) |
| C500_1022_750_181.jpg | MediaImage/40970579378467 | lifestyle_images[0] |
| C500_1022_750_19.jpg | MediaImage/40970582753571 | lifestyle_images[1] |
| C500_1022_750_20_3e840e8d….jpg | MediaImage/40969456189731 | not used (third of same set) |
| gallery 3_59e346be….jpg / 1_61afba7b…_1.jpg | 39293580149027 / 39293580247331 | not used (S300 lifestyle shots) |
| gallery C500_e9daca91….jpg | MediaImage/40970694951203 | lifestyle_images[2] |
| video FUNCTION DEMONSTRATION VID_533a52ab….mp4 | Video/40969510191395 | custom.hero_video_file |
| video INSTALLATION VID.mp4 | Video/40969510224163 | not used |

File lookups: 20 images + 2 videos queried, 22 found, 0 missing (4_i_2 needed an exact-filename query).

## Metaobjects created
| Handle | Type | gid |
|---|---|---|
| c500-story-1 … c500-story-6 | feature_story | 316787392803, 316787425571, 316787458339, 316787491107, 316787523875, 316787556643 |
| c500-faq-1 … c500-faq-8 | faq_item (ACTIVE) | 316787589411, 316787622179, 316787654947, 316787687715, 316787720483, 316787753251, 316787786019, 316787818787 |
| faqs-c500 | faqs (ACTIVE) | gid://shopify/Metaobject/316788179235 |

## Product metafields set (`metafieldsSet` userErrors: none)
custom.highlights (6), custom.highlight_images (4), custom.best_for (4), custom.hero_video_file (Video/40969510191395), custom.feature_stories (6), custom.faqs, custom.compare_products [C300 Pro V2 10264258281763, C300 Pro 8060533801251], custom.compare_intro, custom.lifestyle_images (3). Not set: custom.hero_video (no SIHOO external URL), custom.whats_in_box (not documented), custom.press_quotes (none). `custom.videos` untouched.

## Description
Already AU English (Customisable, aluminium), >60 words → unchanged.
