# 변경 리포트 2 — PDP 통일 P1·P2 + 파일럿·B100·배송 콘텐츠 (2026-09-08)

> 2026-09-09 정정: 이 문서는 9월 8일 작업 시점의 기록이다. 아래 신규 콘텐츠 중 상품 설명·메타필드는 LIVE와 DRAFT가 공유한다. V2 설명이 LIVE의 검색·SNS 메타 설명에 노출됨을 9월 9일 익명 요청으로 확인했다. "고객 미노출"이라는 기존 표현은 잘못됐다. 후속 변경·수정·검증 범위는 [9월 9일 수정 리포트](sihoo-au-fix-report-2026-09-09.md)를 따른다.

> 3줄 요약
> 1. **드래프트 테마(187727839523)**: 전역 버튼 문장형·본문 16px, 메인 섹션 개조(Save 한 줄·배송/Afterpay 두 줄·HIGH DEMAND 규칙·갤러리 배지 숨김·제목 토큰), 새 섹션 11개, 시리즈 템플릿 4개(doro/m/x/desk), 브레드크럼 컬렉션 폴백, FAQ 페이지 배송 답변 갱신. 라이브 테마 무접촉.
> 2. **공유 스토어 데이터(LIVE에도 노출 가능)**: 메타오브젝트 정의 3종(feature_story·press_quote·product_video) + 메타필드 정의 14개 추가, C300 Pro V2 콘텐츠를 US 페이지 기준으로 메타필드에 재작성(스토리 7·영상 7·이미지 10·FAQ 5), 11개 상품에 유튜브 영상 16개 연결, M57·M18 아마존 평점 입력, **B100 신규 상품 DRAFT 등록**(변형 6·이미지 15·스펙·FAQ·스토리), 배송 블로그 초안(비공개).
> 3. **파일**: US 리뷰 CSV 2종(M59AS 118건 전달, B100 151건), 레포 `docs/`·`theme/`·`data/` 갱신. 리뷰 임포트·테마 게시·B100 활성화·배송 블로그 공개는 하지 않음. 공유 상품 설명 등의 변경은 LIVE에도 영향을 줄 수 있음.

---

## 1. 공유 스토어 데이터 변경 (LIVE 노출 여부는 각 데이터 사용처에 따라 다름)

### 1.1 정의 (Settings → Custom data)

| 구분 | 이름 | 용도 |
|---|---|---|
| 메타오브젝트 | `feature_story` (title, body, image, video_url, layout, products) | 기능 스토리 섹션 |
| 메타오브젝트 | `press_quote` (outlet, quote, author, logo, url, date) | 언론·전문가 인용 |
| 메타오브젝트 | `product_video` (title, url, kind, creator, duration, thumbnail) | 영상 갤러리 |
| 메타필드 `custom.*` | compare_products, hero_video, whats_in_box, color_scheme, feature_stories, press_quotes, videos, amazon_rating, amazon_rating_count, amazon_url, amazon_badge, lifestyle_images, compare_intro, review_source_note(9/7) | 각 섹션의 단일 데이터 소스 |

### 1.2 C300 Pro V2 (US 페이지 기준 재작성, 호주식 영어·미터법)

| 항목 | 값 |
|---|---|
| 설명(description) | 3문단 + Key features 6개, 150–190 cm · 150 kg 명시 |
| hero_video | SIHOO_AU "The All-New Doro C300 Pro V2" (z3g5tXxeAw4) — 종전 4FzlrQcUQCI(Doro 시리즈 뮤직 영상)는 V2 영상이 아니어서 교체 |
| highlights 6 | 3D wide headrest 28% / Domino™ / SyncroFlex™ / 4-zone tracking / 8D armrests / Smart Mechanism 2.0 (40–100 kg) |
| feature_stories 7 | Full-body support → Better fit → Lumbar 2.0 → 8D armrests → Headrest → Three angles → Built to last (US 이미지 7장 업로드, 좌우 교대) |
| videos 7 | 제품(z3g5tXxeAw4), 조립(6zLqe1W8X9s), 조작(fedn8dF3XNQ), 크리에이터 숏츠 2(xrdkPGbOLyc·47PrB-dNlvE), TechUtopia(D53fqnatLNE), Tech Gear Talk(UPGSIEFKpoI) |
| lifestyle_images 3 | Cosy work · Team work · Work from home |
| compare_products / compare_intro | C300 Pro + "What changed" 한 문단 |
| faqs 5 | DynaCore / SyncroFlex / 150–190 cm / 대상 / 3년 보증 범위 (publishable ACTIVE) |
| press_quotes 2 | Linus Tech Tips, TechUtopia (인용문 새로 만들지 않음) |

### 1.3 다른 상품에 연결한 영상·아마존 데이터

| 상품 | videos | Amazon |
|---|---|---|
| M57 | 조립 2 (SIHOO AU 채널 TccKdvjW-XI, HQ 4S5hM_AlfnM) | 4.1/5 · 5,084 · Amazon's Choice · /dp/B07BDFW1Y7 |
| M18 | 조립 2 + 벌크오더 영상 | 4.2/5 · 16,727 · /dp/B07GNDDNMW |
| Vito M90 ×2 | 조립, 제품 소개 | — |
| V1 | 조립, "What makes the V1 special" | — |
| M59AS | 조립·조정 | — |
| Doro S100 | 조립, 조정 | — |
| Doro S300 | 조립·조정, Doro 뮤직 | — |
| C300 Pro | 조립, 풋레스트 조정, Doro 뮤직 | — |
| C500 · C100 | Doro 뮤직 | — |

아마존 수치는 Alex 스크린샷(2026-09-08) 기준. 소셜 프루프 섹션이 "n ratings on Amazon.com.au" + 리스팅 링크로 출처를 표시한다.

### 1.4 B100 신규 상품 (DRAFT)

- `gid://shopify/Product/10362607862051`, handle `sihoo-b100-ergonomic-office-chair`, vendor SIHOO, type Ergonomic Office Chair, **DRAFT**.
- 변형 6: Colour(White/Black) × Seat type(Mesh/Cushioned) × Version(Standard/With footrest, 쿠션 시트는 풋레스트 없음). SKU는 US와 동일. **가격은 임시값(USD×1.6): 320 / 352 / 416** — Alex 확정 필요.
- 이미지 15장(alt 포함), 기능 이미지 10장 Files 업로드, 스토리 5, FAQ 5(US 페이지에 FAQ 없어 스펙·혜택에서 작성 → 검토 필요), 하이라이트 6, best_for 4, compare_products = M59AS.
- 스펙: max_load 150 kg, overall height 112–131.1 cm, recline 135°, net 16.5 kg, 2D flip-up armrests, Class 4 gas lift, BIFMA·SGS·TÜV, 3년. 시트 높이/폭/깊이·권장 신장은 US 페이지에 없어 미입력(`needs_confirmation`).
- 영상 없음(US 페이지에 임베드 없음).

### 1.5 블로그·FAQ

- 블로그 "Work From Home Ergonomics"에 **비공개** 글 생성: "Four Australian warehouses, faster delivery: how your SIHOO chair gets to you" (`gid://shopify/Article/614398230819`, handle `four-australian-warehouses-faster-delivery`). 원문 `docs/content/blog-four-warehouses-fast-delivery-2026-09.html`.
- FAQ 페이지(드래프트 테마 `page.faq.json`) 4번 "Shipping and Delivery" 답변 3개를 4개 창고·1–5일·무료배송으로 갱신, "Where do you ship from?" 문항 추가.

## 2. 드래프트 테마 변경 (2026-09-08 추가분)

| # | 파일 | 무엇을 | 왜 |
|---|---|---|---|
| 3.1 | `config/settings_data.json` | `button_style` caps→normal, `font_size_base_int` 15→16 | Alex 결정 Q3, 모바일 가독성 |
| 3.2 | `sections/custom-main-product.liquid` | 제목 26/32px·600, "Save $X (Y%)" 한 줄 + JS 변형 갱신, 갤러리 sale 라벨 숨김 옵션, 배송 문구 2줄(subtext), HIGH DEMAND 표시 시 배송 문구 숨김(서버+JS), 스키마 설정 3개 추가 | Q2·Q4·Q5, 모순 제거 |
| 3.3 | `snippets/breadcrumbs.liquid`, `snippets/structured-data-breadcrumbs.liquid` | 직접 진입 시 첫 컬렉션 폴백(Home > Doro Series > 상품) | SEO 3단 브레드크럼 |
| 3.4 | 신규 `sections/product-highlights.liquid` | `custom.highlights`·`best_for` 아이콘 그리드 | 이미지 카피 대체 |
| 3.5 | 신규 `sections/feature-story.liquid` + `snippets/feature-story-item.liquid` | 메타오브젝트 스토리(이미지/영상 클릭 재생, 좌우 교대/오버레이) | image-with-text 3종 통합 |
| 3.6 | 신규 `sections/compare-table.liquid` | `compare_products`+`specs.*` 자동 비교표, `compare_intro` 지원 | 하드코딩 비교표 제거 |
| 3.7 | 신규 `sections/press-quotes.liquid` + `snippets/press-quote-card.liquid` | `press_quotes` 카드 | testimonial+logo-list 통합 |
| 3.8 | 신규 `sections/product-hero-video.liquid` | `hero_video` 포스터→클릭 재생 | 서드파티 iframe 지연 로드 |
| 3.9 | 신규 `sections/video-gallery.liquid` + `snippets/video-card.liquid` | `videos`(+install/adjust) 그룹별 카드: 제품·조립/조정·고객·전문가 | 실제 영상으로 전환율 |
| 3.10 | 신규 `sections/social-proof.liquid` | 아마존 평점·사이트 리뷰·판매량·인증·창고 4곳 타일 | 구매 결정 근거, 출처 명시 |
| 3.11 | 신규 `sections/delivery-promise.liquid` | 창고 4곳·주별 배송일 | 배송 불만 리뷰 상쇄 |
| 3.12 | 신규 `sections/lifestyle-gallery.liquid` | `lifestyle_images` | 시나리오 이미지 |
| 3.13 | 신규 `templates/product.doro.json`·`product.m.json`·`product.x.json`(다크 기본)·`product.desk.json`(스펙표·비교표 제외) | 메인 → 소셜프루프 → 하이라이트 → 스펙표 → 히어로 영상 → 스토리 → 영상 갤러리 → 비교 → 라이프스타일 → 언론 → FAQ → 배송 → 리뷰 출처 → Loox → 관련상품 | 상품 문구 0, 메타필드만 |
| 3.14 | `templates/page.faq.json` | 배송 Q&A 갱신 + 1문항 추가 | 4개 창고 |

## 3. 프리뷰 링크

| 페이지 | 링크 | 확인 포인트 |
|---|---|---|
| C300 Pro V2 · Doro 템플릿 | https://sihoo.com.au/products/sihoo-a3-doro-c300-pro-v2-ergonomic-office-chair?view=doro&preview_theme_id=187727839523 | V2 영상, 소셜 프루프, 스토리 7, 영상 갤러리, 비교표+인트로, 라이프스타일 3, FAQ 5, 배송 4곳 |
| M57 · M 템플릿 | https://sihoo.com.au/products/sihoo-m57-ergonomic-office-chair?view=m&preview_theme_id=187727839523 | 아마존 4.1/5·5,084·Amazon's Choice 타일, 조립 영상 2, 스펙표 |
| M18 · M 템플릿 | https://sihoo.com.au/products/sihoo-m18-ergonomics-task-office-chair?view=m&preview_theme_id=187727839523 | 아마존 4.2/5·16,727, 영상 3 |
| X5S · X 템플릿 | https://sihoo.com.au/products/xallking-x5s-ergonomic-gaming-chair?view=x&preview_theme_id=187727839523 | 다크 스킴 (메타필드 없는 섹션은 비표시) |
| B100 (DRAFT) | [Shopify 상품 관리자](https://admin.shopify.com/store/sihoo/products/10362607862051) | 기존 일반 URL은 404/컬렉션 이동 확인. 관리자 발급 키로 DRAFT M 프리뷰 검증 완료. [절차](sihoo-au-fix-report-2026-09-09.md#b100-비공개-프리뷰-절차) 참조; 일반 상품 URL로는 열리지 않음 |
| FAQ 페이지 | https://sihoo.com.au/pages/faq?preview_theme_id=187727839523 | 4번 배송 답변 |
| 블로그 초안 | Admin → Online Store → Blog posts → "Four Australian warehouses…" (비공개) | 공개 전 검토 |

`view=` 파라미터는 상품의 템플릿 설정을 바꾸지 않고 렌더만 바꾼다. 실제 전환(P5)은 상품별 `templateSuffix` 변경으로 한다.

## 4. 남은 것 · 결정 필요

- B100 가격 확정, FAQ 검토, 활성화 시점.
- 배송일 표(주별 1–3/2–5/5–10일)와 "same or next business day dispatch" 문구는 운영 실제와 맞는지 Alex 확인.
- 아마존 수치는 주기적 갱신 필요(메타필드 2개).
- P3: Doro 나머지 6개 → M 13 → X 5 → 데스크 2 순으로 상품별 이관·프리뷰.
- 데스크 스펙 키(상판·높이·모터) 정의 후 desk 템플릿에 스펙표 추가.
- 임포트(US 리뷰), 게시, 블로그 공개는 Alex 승인 후.
