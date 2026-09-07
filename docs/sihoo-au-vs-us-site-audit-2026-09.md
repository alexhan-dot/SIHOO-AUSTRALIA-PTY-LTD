# SIHOO Australia (sihoo.com.au) vs SIHOO US (sihoooffice.com → www.sihoo.com) 사이트 대조 감사

> 목적: sihoo.com.au 의 **상품페이지 템플릿 통합·테마 업그레이드·SEO/GEO 보강** 작업 리스트 도출.
> 조사일: 2026-09-07 · 조사자: Claude (Shopify Admin API + 실 HTML 크롤링 + 테마 파일 직접 열람) · 리프레시 권장: 테마 업그레이드 완료 후 1회, 이후 분기 1회.
> 관련 문서: [market-icp-2026q2.md](./market-icp-2026q2.md) (AU D2C ICP), CLAUDE.md §8 모바일 우선.

---

## 0. 3줄 요약 (모바일용)

1. **AU 는 "SEO 뼈대"가 US 보다 낫고(Organization·ItemList·Blog/Article/FAQ 스키마, AU 지역화 타이틀·메타), US 는 "상품페이지 설득 구조"가 압도적** (Chair Finder 퀴즈, 모델 간 비교표, 스펙 아코디언, 리뷰어 영상, FAQ 스키마, 브레드크럼, hreflang).
2. **AU 최대 리스크는 상품 템플릿 파편화** — 활성 상품 27개에 product 템플릿 30종(사실상 1상품 1템플릿, 3세대 섹션 혼재) + 테마 20개 보관 + Symmetry **7.3.0** (최신 **8.3.2**, 2026-07-03) 로 메이저 1세대 뒤처짐.
3. **작업 순서**: (A) 1~2주 SEO 즉시 수정(2차 검증에서 **컬렉션 canonical 상대 URL 버그·CLS 0.496** 추가 발견) → (B) 제품별 스펙 확정·`specs.*` 메타필드 임포트(문서·CSV 준비 완료) → 3~5주 단일 상품 템플릿 `product.chair.json` → (C) 2~4주 Symmetry 8.3.2 클린 업그레이드 + 커스텀 이식 → (D) GEO 콘텐츠 상시. 상세 백로그는 §8.

---

## 1. 조사 범위와 방법

| 항목 | AU (sihoo.com.au) | US (www.sihoo.com) |
|---|---|---|
| 확인한 페이지 | 홈, `/collections/ergonomic-chairs`, `/collections/doro-series`, `/collections/all`, PDP 7개(C300 Pro V2, C300 Pro, M57, M18, S300, M59AS, X5 Pro), `/pages/compare-products`, `/pages/faq`, `/pages/blogs`, `/pages/about-us`, `/pages/all-product-installation-tutorials`, 블로그 리스트·아티클, `/pages/weekly-digest-feed`, robots/sitemap/agents.md/llms.txt/.well-known/ucp | 홈, `/collections/office-chairs`, PDP 5개(C300 Pro V2, C300 Pro, M57, M18, S300), `/pages/how-to-choose-right-ergonomic-office-chair`, `/pages/setup-guide`, `/pages/sitting-method`, `/pages/about-sihoo`, `/blogs/guide` 리스트·아티클, robots/sitemap/llms.txt |
| 내부 데이터 | Shopify Admin API: 상품 48개 전수(템플릿·SEO·메타필드·설명 길이), 테마 20개 목록, LIVE 테마 파일 목록 + `theme.liquid`/`doc-head-core`/`canonical-urls`/`structured-data-product`/`faq-schema`/`collection-itemlist-schema`/`robots.txt.liquid`/product 템플릿 JSON 4종/`main-product.liquid` 스키마, 메타오브젝트 정의 15종, 최근 아티클 5건 | 외부 HTML 만 (Admin 접근 없음) |
| 도구 | curl 원본 HTML 파싱(JSON-LD·메타·섹션 순서·이미지 alt·스크립트 호스트), WebFetch 요약, Shopify GraphQL | 동일 (curl + WebFetch) |

**2차 검증(같은 날)**: Lighthouse 로컬 실행으로 CWV lab 수치 확보(§6.3), 검색 가시성 부분 검증(§6.4), Symmetry 8.x 주요 변경점 확인, 제품별 스펙 전수 문서화(별도 문서). 남은 가정은 §9.

---

## 2. 플랫폼·테마·앱 현황 대조

| 구분 | AU | US | 시사점 |
|---|---|---|---|
| 플랫폼 | Shopify Advanced, 단일 마켓(AU/AUD) | Shopify, 마켓 다수(US 본점 + eu/fr/de/uk 서브도메인 + `/zh` 로케일) | US 는 다국어·다지역 구조, AU 는 단일 — AU 는 hreflang 이 없고 US 스토어 셀렉터에도 AU 가 **빠져 있음** |
| 테마 | **Symmetry (Clean Canvas) 7.3.0** — 커스텀 다수, 테마명 `LIVE - SIHOO (Symmetry)` | **Enterprise (Clean Canvas) 2.3.0** — `Sihoo_RA_202501_...` (RA 에이전시 커스텀 섹션 `ra_*` 다수) | 같은 벤더(Clean Canvas). Symmetry 최신 **8.3.2 (2026-07-03)** 이라 AU 는 메이저 1세대 뒤처짐 |
| 보관 테마 수 | **20개** (Debut/Narrative/Brooklyn/Minimal 2020~21, Dawn, SparkLayer Dawn, Symmetry 백업 7종, "Copy before fixing duplicate meta desc issue" 등) | 불명 | 20개 한도 도달 → 업그레이드용 테마 추가 불가. 정리 필수 |
| product 템플릿 수 | **30종** (`product.c100/c300-pro/c300-pro-2/c500/s100/s100-2/s300/m-16/m-18/m18-pro/m56/m56-v1/m57/m57-pro/m57-high-convert-pp/m59/v1/x3-pro/x5-pro/x5c/x5f/x5s/ringo-kids/doro-series-template/custom-main/custom/alternative/countdown/preorder/story` + aftership/automizely 잔재 12종) | 상품 템플릿은 소수, 섹션(`ra_*`)으로 차별화 | AU 는 "상품 1개 = 템플릿 1개" 운영. 섹션 편집이 상품별로 흩어져 유지보수·SEO 일관성 모두 깨짐 |
| PDP 메인 섹션 | 3세대 혼재: (1) `main-product` 기본 + `image-with-text` 나열(S300, X5 Pro), (2) `doro-series-template` + `product-promo-*`(C300 Pro), (3) `custom-main-product`(134KB!) + `faq` + `product-testimonial`(C300 Pro V2, M57, M18) | 단일 `main` + `details` + `ra_*` 섹션 조합 | AU 의 `custom-main-product.liquid` 134KB 는 Symmetry 원본 `main-product`(95KB) 의 포크 → 테마 업그레이드 시 병합 불가 |
| 리뷰 앱 | Loox (+ Klaviyo Reviews 블록이 기본 `product.json` 에 남아 있음, `reviews.rating` 메타필드는 17/48 만 채움) | Okendo (별점 분포·추천율·필터·사진/영상) | US 리뷰 위젯이 정보량·필터·신뢰 신호 모두 우세 |
| 결제/BNPL | Afterpay 스크립트 로드되나 **PDP 가격 옆 분할결제 문구 없음** | Affirm·Klarna 문구 가격 바로 아래 노출 | AU 는 Afterpay/Zip 메시지 위젯 PDP 가격 옆 노출 필요 |
| 주요 앱 흔적 | Loox, Klaviyo, PageFly, LayoutHub, EComposer(잔재 템플릿), Specs&Compare 앱 블록, Vitals, Wiser, LimeSpot, Globo, PushOwl, goaffpro, Bing UET, Podium, OpenAI ads 스니펫 | Okendo, Tidio 챗, GTM, Clarity, 17TRACK, Impact 어필리에이트, Zip, PageFly, Hulk | AU 는 페이지빌더 3종(PageFly·LayoutHub·EComposer) 흔적 — 잔재 정리 대상 |
| 성능(Lighthouse 모바일 lab, 2026-09-07, §9 캐비앗) | 홈 **56** / M57 PDP **43** / C300 Pro V2 PDP **34** / 컬렉션 **13** — LCP 3.2~7.7s, TBT 3.5~4.6s, 페이지 4.0~6.7MB, 요청 297~423 | 홈 **44** / M57 PDP **37** / C300 Pro V2 PDP **37** — LCP 3.9~5.1s, TBT 6.7~8.5s, 페이지 13~15MB, 요청 494~670 | 양쪽 다 "느림". AU 가 US 보다 가볍지만 **AU 컬렉션 CLS 0.496**(히어로 이미지 높이 미지정)과 PDP CLS 0.106(`<main>` 지연 삽입 + Podium 챗 iframe) 은 즉시 수정 대상. 상세 §6.3 |

---

## 3. 페이지별 대조

### 3.1 홈페이지

| 요소 | AU | US | 판단 |
|---|---|---|---|
| 프로모바 | Father's Day Sale + $20 뉴스레터 | Free Shipping / 30-Day Free Trial + 신제품(B300 Pro)·프리미엄 픽(C300 Pro V2) 콜아웃 | US 는 "신제품/프리미엄 픽" 고정 콜아웃으로 계절 무관 전환 유도 |
| 히어로 | 정적 배너 1장(모바일/데스크톱 프리로드 ✅) | 4슬라이드(신제품·세일·벌크) | AU 는 LCP 프리로드가 잘 되어 있음 — **유지** |
| 신뢰 배지 | 3년 보증·30일 반품·5~7일 배송·24/7 챗 (히어로 위) | 동일 4종 + 통계 카운터 | 동등 |
| 상품 진열 | 캐러셀 2 + 그리드(S300/C500/X5/X3) | Best Sellers 캐러셀(별점·리뷰수 노출) | US 카드에 별점·리뷰수 노출 — AU 카드는 가격·할인율만 |
| 용도별 탐색 | Creating/Working/Gaming/Relaxing + 직군별 카드 | Cozy/Creating/Gaming/Relaxing | 동등 |
| 브랜드 신뢰 | 85+국·2.6M·14년·2000+미디어·513K 리뷰 + 미디어 로고 | 122+국·1.9M·15년·2000+·513K | **숫자 불일치**(85 vs 122 국, 2.6M vs 1.9M, 14 vs 15년) → 본사 수치로 통일 필요 |
| 블로그 | Ergonomic Guide 4건 | 4건 + 회사 소개 텍스트 | 동등 |
| FAQ | 6문항(스키마 없음) | FAQPage JSON-LD 2문항 | US 는 홈에도 FAQ 스키마 |
| H1 | "Ergonomic Chairs in Australia for Work, Gaming and Everyday Comfort" ✅ | 로고 링크가 H1 ❌ | AU 우세 — **유지** |
| 타이틀/메타 | "Ergonomic Chairs in Australia \| SIHOO Australia" / 지역화 메타 ✅ | "...Sit Well, Think Bet – Official US Sihoo Store"(잘림) / 메타에 "cheap ergonomic desk chair" 등 구식 문구 | AU 우세 — **유지** |

### 3.2 내비게이션

| 요소 | AU | US |
|---|---|---|
| 1차 메뉴 | Doro Series / Shop / About Us / Support / Wholesale | 🔥Sale / Office Chair / Gaming Chair / All Products / Support / Discover |
| 상품 메가메뉴 | 컬렉션 4개 링크 | **모델별 직링크 3그룹**(Engineered Beyond: C300 Pro V2·C300·C300 Pro·S300 / Built Better: B300 Pro·M57·M59AS·M56C / Start Strong: M18·B100 Pro·B100) + NEW/HOT 배지 |
| Support | Blogs·설치가이드·Contact·Compare·FAQ·수리요청 | Buying Guide(Sitting Method·Choose Your Right) / Our Promise(배송·반품·보증·CS 각각 전용 페이지) / Contact(Track Order·Setup Guide) |
| Discover | 없음 | Media Recognition·Global Presence·Sustainability·Innovation History / 블로그 4카테고리 / Affiliate·Review Application·Dealer Locator |
| 판단 | AU 는 카테고리 중심, 모델명 검색 유입(“sihoo m57”, “doro c300”)을 메뉴에서 바로 못 받음 | US 는 모델명 직링크 + 구매가이드 진입로가 명확 |

### 3.3 컬렉션 페이지

| 요소 | AU `/collections/ergonomic-chairs` | US `/collections/office-chairs` |
|---|---|---|
| 히어로·설명 | 배너 + 상단 설명 ✅, H1 지역화 ✅ | C300 Pro V2 배너 + "C-Series / Core Collection" 2단 큐레이션 |
| 필터 | 재고·가격 **2개뿐** | 필터 없음 (큐레이션형) |
| 카드 | 할인율·가격·Quick buy·스와치 (별점 없음) | 배지(Focus First/Best Seller/Upgrade Pick…)·별점·할인율·스와치·Buy/Learn more·한 줄 태그라인 |
| 편집 콘텐츠 | 앉는 시간별 추천표, 비교표, About, 장문 교육 콘텐츠, 용도별 타일, WFH 섹션, FAQ 6 | Chair Finder 퀴즈, Before/After, 러버 서포트 설명, FAQ 9 (FAQPage 스키마) |
| 구조화 데이터 | **ItemList + Product + Offer + AggregateRating** ✅ (커스텀 스니펫) | Organization + FAQPage |
| 판단 | AU 는 SEO 콘텐츠 양이 많고 ItemList 스키마가 강점. 단 **카드에 별점 부재, 필터가 메타필드(헤드레스트·풋레스트·최대하중·권장 신장)를 전혀 활용 못함**, 긴 편집 콘텐츠가 상품 그리드 아래에 몰려 모바일 스크롤이 김 | US 는 "추천 배지 + 퀴즈"로 선택 마찰을 줄임 |

### 3.4 상품 상세 (PDP) — §4 에서 상세

### 3.5 블로그

| 요소 | AU | US |
|---|---|---|
| 규모 | 4개 블로그·235 아티클(sitemap 220 URL) | 5개 블로그·855 URL(guide 만 505) |
| 허브 | `/pages/blogs` 커스텀 허브(카테고리별 8건 + 미디어 로고) ✅ | `/pages/blog`, `/pages/blog-sitemap` |
| 리스트 | 태그 필터 + 페이지네이션, 날짜만(작성자·읽기시간 없음) | 작성자 바이라인, 날짜, "Showing 13 of 505" |
| 아티클 스키마 | **Article(author Person·dateModified) + FAQPage(메타오브젝트) + Organization** ✅ | Article + BreadcrumbList + Organization |
| 아티클 본문 | TOC ✅, 관련 상품 메타필드(`custom.related_products`) ✅, FAQ 메타필드 ✅ | TOC ✅, 상품 링크 다수 |
| 판단 | AU 아티클 템플릿이 GEO 관점에서 이미 우수(FAQ 메타오브젝트 1,211개 축적). **부족한 것은 BreadcrumbList 와 작성자 노출(E-E-A-T)** |

### 3.6 지원·정보 페이지

| 페이지 | AU | US | 판단 |
|---|---|---|---|
| 구매 가이드 | `/pages/compare-products` — **3개 모델 동시 비교 + 신장·용도 필터** 인터랙티브 ✅ (일부 신모델 누락) | `/pages/how-to-choose-right-ergonomic-office-chair` 4문항 퀴즈 + 니즈별 추천 4그룹, `/pages/sitting-method` 자세 자가진단 + 7문항 퀴즈, `/pages/best-ergonomic-office-chair-for-tall-heavy-people`, `/pages/ergonomic-office-chair-for-petite-person`, `/pages/high-back-office-chair` | AU 비교툴은 우수하나 **JSON-LD 없음**(Organization 만). US 는 롱테일 랜딩(키 큰 사람/작은 사람/하이백) 을 페이지로 보유 |
| 설치 가이드 | M90C·M18·M57 영상 + PDF 4종(M90C·M18·M57·V1) — **Doro·XALLKING 누락** | Setup Guide 허브(폼 중심) + PDP 스펙 아코디언에 모델별 설치/조정 영상·매뉴얼 링크 | AU 는 PDP 에서 매뉴얼 링크 일관성 없음 |
| FAQ | 16 카테고리 34문항, 아코디언(details 66개) — **FAQPage 스키마 없음** | 페이지별 FAQ + 스키마 | AU FAQ 콘텐츠는 풍부(NDIS·쇼룸·교체부품 등 로컬 질문) → 스키마만 붙이면 됨 |
| About | ABN·연락처·3 chair families ✅, 창고·쇼룸 정보 없음 | 타임라인·R&D·테스트센터 | AU 는 `showroom` 메타오브젝트 4건이 있으나 페이지 노출 미확인 |
| 보증/배송/반품 | 정책 페이지 4종(`/policies/*` → `/pages/*` canonical 처리) | "Our Promise" 전용 랜딩 3종 | 동등 |
| B2B | `/pages/commercial` + 산업별 6페이지(corporate/fitout/architecture/coworking/government/bpo) ✅ | Bulk Order 1페이지 + edu-business | AU 우세 — **유지**. 단 `theme.liquid` 에 `/pages/commercial/*` → `/pages/*` 하드코딩 리다이렉트 잔재(§6.3) |
| 에이전틱 커머스 | agents.md·llms.txt·`.well-known/ucp`(UCP 2026-08-25)·`sitemap_agentic_discovery.xml` ✅ (Shopify 플랫폼 자동) | 동일 | 동등 — 차별화는 "콘텐츠 품질"(§7) |

---

## 4. 상품페이지 템플릿 심층 대조

### 4.1 섹션 순서 비교 (플래그십 C300 Pro V2)

| 순서 | US PDP (`doro-c300-pro-v2`) | AU PDP (`sihoo-a3-doro-c300-pro-v2-…`, 템플릿 `c300-pro-2`) | 격차 |
|---|---|---|---|
| 1 | 갤러리 24장 + 기능 GIF, 재고 상태 | 갤러리 16장, 29% off 배지, "LOW ON STOCK" | AU 갤러리 이미지 alt 가 **모두 빈 값(53건)** |
| 2 | 타이틀·가격·Affirm/Klarna·Color/Version | 리뷰 4.6(5)·타이틀·가격·절약액·Color/Version·재고 경고·배송 안내·3배지 | AU 에 Afterpay 문구 없음 |
| 3 | 무료배송/보증/반품 배너, Add to cart + CHECK OUT + 공유 | Add to cart(품절) | — |
| 4 | "A perfect fit from the first sit." 포지셔닝 | Description/Features/Benefits 아코디언 3개 (설명 본문은 **descriptionHtml 이 비어 있음** → 스키마 description "") | ❌ AU 치명적: 상품 설명 필드가 비어 UCP/Shop/Google 피드에 설명 없음 |
| 5 | "Get the highlights." 5 콜아웃 | 스펙 3열 멀티컬럼(백레스트 높이·시트 깊이·최대하중 150kg…) | AU 스펙은 텍스트 ✅ (US 도 텍스트 표) |
| 6 | "What Tech Reviewers Say" — LTT·TechUtopia **영상** | Promo strip + 배경 영상 + 기능 갤러리 4 | US 는 3rd-party 영상 임베드 5개 |
| 7 | DynoCore / SyncroFlex / Lumbar 2.0 / 8D Armrest / Headrest / Recline 105-120-135 / Built to Last — 각 전용 섹션 | 테스티모니얼(LTT 인용) → "How Doro C300 Pro V2 Helps?" 3열 → 커스텀 리퀴드 비교표 → 테스티모니얼(TechUtopia) | AU 는 인용문 텍스트로 대체(영상 없음) |
| 8 | Scenario Showcase (Cozy/Team/WFH) | 슬라이드쇼 1장 | — |
| 9 | **비교표 C300 Pro V2 vs C300** (5행) | **비교표 Pro V2 vs Pro** (5행, custom-liquid) | 동등. 단 AU 는 리퀴드 하드코딩, 메타오브젝트 `comparison_table`(7건) 미사용 |
| 10 | 스펙 표(재질·팔걸이·최대하중·시트·백레스트·리클라인·무게·색상) | 위 5번에 포함 | — |
| 11 | FAQ 아코디언 4 + **FAQPage JSON-LD** | Loox 리뷰 → FAQ 5문항(**스키마 없음**) → 연락처 | ❌ AU FAQ 스키마 부재 |
| 12 | 리뷰(Okendo, 별점 분포·추천율·필터) | Loox(카드 나열) | US 우세 |
| 13 | 관련 상품 없음 / 푸터 | You may also like / 푸터 | — |
| 스키마 | Organization + ProductGroup + FAQPage | Organization(풍부) + ProductGroup | 양쪽 모두 **aggregateRating 서버측 없음**, BreadcrumbList 없음 |

### 4.2 AU 내부 템플릿 불일치 (같은 사이트 안에서 다른 PDP 경험)

| 상품 | 템플릿 | 메인 섹션 | FAQ | 비교표 | 스펙 표 | 브레드크럼 | 리뷰 | 설명 단어수 |
|---|---|---|---|---|---|---|---|---|
| C300 Pro V2 | `c300-pro-2` | custom-main-product | ✅(스키마 ✗) | ✅ | ✅ | ✗ | Loox 5 | **0** |
| C300 Pro | `doro-series-template` | main-product + Specs&Compare 앱 블록 | ✗ | ✗ | 앱 블록 | ✗ | Loox 174 | 308 |
| M57 | `m57` | custom-main-product + image-with-text ×7 | ✗ (M57 vs M18 아티클 링크만) | ✗ | 테이블 2 | ✗ | Loox 885 | 252 |
| M18 | `m-18` | custom-main-product + faq-accordion | ✅(스키마 ✗) | ✗ | 인라인 | ✗ | 346 | 93 |
| S300 | `s300` | **main-product(기본)** + image-with-text ×13 | ✗ | ✗ | ✗ | **✅ BreadcrumbList** | 75 | 325 |
| X5 Pro | `x5-pro` | main-product + image-with-text ×10 | ✗ | ✗ | ✗ | ✅ | — | 333 |
| S100 / M59AS | `s100-2` / `m59` | custom-main-product | ✗ | ✗ | — | ✗ | 4 / 2 | **0 / 0** |

관찰:
- 브레드크럼은 Symmetry 기본 `main-product` 에만 있고, 포크된 `custom-main-product` 에서는 사라짐 → 신형 템플릿일수록 SEO 신호가 **줄어드는** 역설.
- 스펙은 (a) Specs&Compare 앱 블록, (b) custom-multi-column 하드코딩, (c) rich-text 인라인, (d) 없음 — 4가지 방식. 반면 메타필드 `sc_attributes.*`(mechanism·headrest·max_recommended_weight·recommended_user_height_range·seat_width…) 는 10~22개 상품에 이미 입력돼 있으나 **어느 템플릿도 이를 렌더링하지 않음**.
- FAQ 메타오브젝트(`faqs` 227건, `faq_item` 1,211건)와 `faq-schema.liquid` 스니펫이 있지만 상품에 `custom.faqs` 를 연결한 것은 **M16 단 1개**. 아티클엔 잘 쓰고 있음.
- `product.json`(기본 템플릿) 에는 M18 전용 섹션(비활성)과 **Klaviyo Reviews 앱 블록**이 남아 있음 → 템플릿 미지정 상품(M59·M76·M90·M57 footrest 등 9개)은 이 잔재를 렌더링.
- 초안(DRAFT) 상품 21개(FURSYS/SIDIZ/Desker 등)가 SEO 필드·automizely 템플릿을 끌고 있음 — 아카이브 정리 대상.

### 4.3 목표: 단일 상품 템플릿 `product.chair.json` (메타필드 구동)

설계 원칙: **콘텐츠는 메타필드/메타오브젝트에, 레이아웃은 템플릿 1개에.** 상품별 템플릿 복제 금지. 예외는 데스크(`product.desk.json`)와 키즈(`ringo-kids`)만.

| # | 섹션 (Symmetry 8.x 기준) | 데이터 소스 | US 에서 가져오는 것 | AU 에서 유지하는 것 |
|---|---|---|---|---|
| 1 | `main-product` (테마 원본, 포크 금지) — 갤러리(+영상 1개 필수), 별점 요약, 타이틀, 가격+절약액, **Afterpay/Zip 문구**, 옵션, 재고 경고, 배송 ETA, 3배지, Sticky ATC(테마 내장 `enable_sticky_atc`) | 상품 기본 필드 + `reviews.rating`/`rating_count` | 분할결제 문구, "Backordered / ships …" 문구 | 절약액·배송 1~5일 문구·배지 3종 |
| 2 | 핵심 혜택 5불릿 ("Get the highlights") | 신규 메타필드 `custom.highlights` (list.single_line_text) | ✅ | — |
| 3 | 사이즈 핏 가이드 — 권장 신장 범위·최대 하중·시트 깊이 | `sc_attributes.recommended_user_height_range`, `max_recommended_weight`, `_seat_depth`, `seat_width` (이미 존재) | US FAQ 의 "150~190cm" 답변을 표준 블록으로 | Compare 툴의 신장 필터 로직 재사용 |
| 4 | 기능 갤러리 4~6 (텍스트 헤딩 + 이미지/GIF) | 신규 메타오브젝트 `product_feature` (heading·body·media) | 기능별 전용 헤딩(SEO H2) | `product-promo-gallery` 디자인 |
| 5 | 리뷰어/미디어 인용 + **영상 임베드** | 신규 메타오브젝트 `expert_quote` (source·quote·video_url·logo) | LTT·TechUtopia·TechRadar 영상 | `product-testimonial` 디자인 |
| 6 | "How it helps" 3열 용도 시나리오 | `product_feature` 재사용(카테고리=scenario) | Scenario Showcase | 기존 3열 |
| 7 | **비교표** (같은 패밀리 2~3모델) | 기존 메타오브젝트 `comparison_table`/`comparison_items` (7/21건 존재) | Pro V2 vs C300 형태 | Compare 페이지 데이터 공유 |
| 8 | **스펙 표** (텍스트 `<table>`, 단위 cm/kg 우선 + 인치 병기) | `sc_attributes.*` 22개 키 | Overview/Detailed/Resources 3탭 구조 | Specs&Compare 앱 의존 제거 |
| 9 | 리소스 — 설치 영상·조정 영상·매뉴얼 PDF | 신규 메타필드 `custom.install_video`, `custom.adjust_video`, `custom.manual_pdf` | 모든 PDP 에 3링크 | 설치 튜토리얼 페이지와 동기화 |
| 10 | **FAQ 아코디언 + FAQPage JSON-LD** | 기존 `custom.faqs` 메타오브젝트 + `faq-schema.liquid` | PDP FAQ 스키마 | 1,211 faq_item 자산 |
| 11 | 리뷰 위젯 (Loox 앱 블록, 별점 분포·사진 필터 설정 ON) | Loox | Okendo 수준 분포·추천율 | Loox 유지(교체 비용 大) |
| 12 | 관련 아티클 (예: "M57 vs M18") | 신규 `custom.related_articles` (list.article_reference) — 아티클엔 이미 역방향 `related_products` 있음 | — | M57 의 비교 아티클 CTA |
| 13 | 관련 상품 / 함께 구매 (Symmetry `complementary` 블록) | Shopify Search & Discovery 추천 | — | You may also like |
| 헤드 | `structured-data-product` 확장: ProductGroup + **aggregateRating(reviews.* 메타필드)** + **BreadcrumbList** + `hasMerchantReturnPolicy` 링크 | — | — | Organization 스키마의 반품정책 구조 재사용 |

데이터 준비: 제품별 스펙·설명 원문과 정규화 스키마는 [sihoo-au-product-spec-sheet-2026-09.md](./sihoo-au-product-spec-sheet-2026-09.md) 에 문서화했고, 위 표의 `sc_attributes.*` 참조는 임포트 후 모두 `specs.*` 로 바꾼다.

이행 방법: (1) 스테이징 테마에서 `product.chair.json` 작성 → (2) C300 Pro V2·M57·M18 3종에 먼저 적용(A/B: 기존 템플릿 유지 상품과 전환율 비교 2주) → (3) 메타필드 일괄 입력(Matrixify CSV) → (4) 나머지 24개 활성 상품 전환 → (5) 구 템플릿 30종 삭제. 상세 백로그 §8 B 그룹.

---

## 5. 테마 업그레이드 대조·전략

| 항목 | 현황 | 목표 |
|---|---|---|
| 버전 | Symmetry 7.3.0 (2025-10 설치 사본) | **8.3.2** (2026-07-03, Shopify Theme Store 기준) |
| 업그레이드 방식 | 인플레이스 병합 불가: `main-product` 포크(`custom-main-product` 134KB), `theme.liquid` 대량 수정, `custom.js` 24KB, `custom.css`, 커스텀 섹션 15종(`custom-*`, `product-*`, `faq*`) | **클린 설치 + 이식**: 8.3.2 새로 설치 → 설정(`settings_data`) 이관 → 커스텀 섹션을 "앱 블록/메타필드 기반 섹션"으로 재작성해 이식 → 템플릿 JSON 재구성 |
| 이식 대상 (유지) | `canonical-urls`, `doc-head-core`(타이틀 규칙 수정 후), `collection-itemlist-schema`, `faq-schema`, `weekly-digest-*`(Klaviyo 피드), `openai-ads`, `third-party-delay-homepage`, `bing-uet`, `custom-footer`, `product-categories`, `compare-products.js` + Compare 페이지 custom-liquid 4개, B2B 페이지 템플릿 6종, `robots.txt.liquid` | 각각 8.x 스니펫 구조에 맞춰 재배치. `theme.liquid` 의 조건부 noindex/canonical 은 유지하되 `/pages/commercial/*` meta-refresh 6종은 **Shopify URL Redirects 로 이관 후 삭제** |
| 폐기 대상 | aftership/automizely `product.*.liquid` 12종, `index.ecomposer.liquid`, `layout/ecom.liquid`, `layout/layouthub.liquid`, `layout/theme.aftership.liquid`, `layout/theme.pagefly.liquid`(PageFly 유지 시 재생성), 시즌 컬렉션 템플릿 30여 종(`collection.black-friday-sale` 등 2025 시즌), 시즌 페이지 템플릿 25종(연도 지난 것), `product.m57-high-convert-pp`, `product.countdown`, `product.story`, EComposer 메타필드 정의 2종 | 시즌 프로모는 **템플릿 복제 대신 `page.promo.json` 1개 + 메타오브젝트 `expired_promotion`(이미 존재)** 으로 운영 |
| 테마 슬롯 | 20/20 사용 | 백업 2개(직전 LIVE + 8.x 배포 전) 만 남기고 16개 삭제 → 업그레이드 작업 공간 확보 |
| 8.x 에서 얻는 것(요약, 벤더 페이지 기준) | — | 최신 Sticky ATC·사이즈차트·complementary·mega menu·predictive search·RTL·성능 개선(정확한 8.x 릴리스 노트는 Clean Canvas 지원 포털이 403 으로 확인 불가 → 업그레이드 전 벤더 changelog 직접 확인 필요) |
| 리스크 | 앱 블록 ID(`specs-compare`, `loox-reviews`, `klaviyo-reviews`) 재연결, PageFly 페이지 레이아웃 재생성, Klaviyo 피드 스니펫, `custom.js` 의존 UI(카운트다운·비교툴) | 스테이징 테마 + Theme Check + 전 페이지 스크린샷 회귀(Playwright) + Search Console URL 검사로 스키마 회귀 확인 |

---

## 6. SEO 대조 — 장점은 유지, 단점은 막기

### 6.1 AU 가 이미 잘하고 있는 것 (업그레이드·템플릿 통합 시 **반드시 보존**)

| 항목 | 근거 | 보존 방법 |
|---|---|---|
| 풍부한 Organization 스키마 | legalName·주소(South Granville NSW)·전화·이메일·sameAs 6·`hasMerchantReturnPolicy`(30일·무료반품)·foundingDate | 스니펫 그대로 이식. Google Merchant 반품정책과 값 동기화 |
| 컬렉션 ItemList + AggregateRating | `collection-itemlist-schema.liquid` (reviews/stamped/loox/yotpo 폴백) | 유지. 단 PDP 와 동일 소스(`reviews.*`)로 통일 |
| 블로그 Article + FAQPage + Blog 스키마 | Article(author Person·dateModified) + FAQ 메타오브젝트 | 유지. 작성자 노출·BreadcrumbList 추가만 |
| 지역화 타이틀·메타 | "… in Australia \| SIHOO Australia", 컬렉션 메타 "from $179 to $1,199 … Free AU delivery" | 유지. 단 §6.2 #1 중복 접미사 수정 |
| H1 정확성 | 홈·컬렉션·PDP 모두 텍스트 H1 (US 는 로고가 H1) | 유지 |
| 이미지 최적화 습관 | width/height 속성 57/59, srcset, webp, 히어로 프리로드 | 유지 + alt 보강 |
| 크롤 위생 | 블로그 태그 페이지·계정·`/collections`·`/products` 인덱스 noindex, `/policies/*` → `/pages/*` canonical, 위클리 다이제스트 피드 robots Disallow | 유지 |
| 서드파티 지연 로딩 | `third-party-delay-homepage`(홈 한정) | **PDP·컬렉션까지 확장** |
| 인터랙티브 비교툴 | 3모델 비교 + 신장·용도 필터 | 유지 + ItemList/Product 스키마 부여 |
| B2B 산업별 랜딩 6종 | 롱테일(government-education, coworking 등) | 유지 |
| 에이전틱 디스커버리 | agents.md·llms.txt·UCP·agentic sitemap 자동 | 유지 (플랫폼 제공) |

### 6.2 AU 단점·보완점 (US 를 참고해 막기)

| # | 문제 | 근거 | 왜 중요한가 | 해결 |
|---|---|---|---|---|
| 1 | **타이틀 접미사 중복·길이 초과** | `doc-head-core` 가 SEO 타이틀 뒤에 `\| SIHOO Australia` 를 붙임 → "Sihoo M57 Ergonomic Office Chair in Australia \| Shop Now \| SIHOO Australia"(74자), 블로그 "… \| Ergonomic Chairs Guide \| SIHOO Australia" | SERP 에서 잘리고 "Shop Now" 같은 CTA 가 브랜드보다 앞섬 | `unless page_title contains 'SIHOO'`(대소문자 무시)로 조건 수정 + SEO 타이틀에서 "\| Shop Now" 일괄 제거(Matrixify) → 55~60자 규칙 |
| 2 | **상품 설명 비어 있음 3개** (C300 Pro V2·S100·M59AS) | `descriptionHtml` 0단어 → ProductGroup `description: ""`, 메타 설명은 SEO 필드로만 버팀 | Shop app·UCP `search_catalog`·Google Merchant·AI 답변이 상품 설명을 못 읽음 | 200~350 단어 설명 입력(US 설명 참고, AU 단위·보증 문구) |
| 3 | **aggregateRating 서버측 부재** | `structured-data-product` 가 `{{ product \| structured_data }}` 만 출력. `reviews.rating` 메타필드 17/48 만 채움, Loox 메타필드 26 | M57 885건·M18 346건 리뷰가 검색 결과 별점으로 안 나올 수 있음(Loox JS 주입 여부 미확인) | 스니펫에 `reviews.rating`/`rating_count` → `aggregateRating` 추가, Loox 메타필드 동기화 켜기, Search Console 리치 결과 확인 |
| 4 | **PDP FAQ 스키마 없음** | C300 Pro V2·M18 FAQ 섹션 있으나 JSON-LD 는 Org+ProductGroup 뿐 (US 는 FAQPage) | AI 검색·PAA 노출 손실. FAQ 자산 1,211건이 상품엔 미연결 | 템플릿에 `faq-schema` 렌더 + `custom.faqs` 연결(27개 활성 상품) |
| 5 | **BreadcrumbList 누락** | `custom-main-product` 사용 PDP 와 컬렉션·블로그·페이지 전부 없음 (S300·X5 만 있음) | 사이트 구조 신호·SERP 경로 표시 | Symmetry 원본 `breadcrumbs` 스니펫 + JSON-LD 전 템플릿 적용 |
| 6 | **브랜드/벤더 불일치** | vendor "Sihoo" 15 / "SIHOO Australia" 15 → 스키마 `brand.name` 이 상품마다 다름 | 엔티티 혼선(GEO 핵심), Merchant Center 브랜드 필터 | vendor 전부 `SIHOO` 로 통일, Organization 은 `SIHOO Australia`(brand 와 seller 분리) |
| 7 | **productType 오타·불일치** | "Ergonomics Office Chair"(32) / "Office Chairs"(2) / ""(7) | 필터·피드 카테고리 품질 | `Ergonomic Office Chair` / `Gaming Chair` / `Standing Desk` 3종으로 정규화 (Shopify 표준 카테고리는 이미 정확) |
| 8 | **갤러리 alt 공백** | C300 Pro V2 PDP 이미지 98개 중 alt="" 53개 | 이미지 검색·접근성·AI 이미지 이해 | 미디어 alt 규칙: "{모델} {색상} {뷰}" 일괄 입력 |
| 9 | **hreflang/국가 교차 신호 없음** | AU 는 hreflang 0, US 는 x-default/en/zh-Hans 만. US 푸터 스토어 목록에 AU 없음 | AU 검색에 US 도메인이 뜨면 USD 가격·배송 불가로 이탈. (순위 실측은 미확인) | AU 페이지에 `en-AU`(self) + `en-US`(www.sihoo.com 대응 URL) hreflang 출력, 본사에 US 측 `en-AU` 역링크 + 푸터 "SIHOO AU Store" 추가 요청. 상호 링크 없으면 무효이므로 본사 협의 항목 |
| 10 | **컬렉션 필터 빈약** | 재고·가격만. `sc_attributes`·`shopify.*` 택소노미 메타필드 미활용 | 롱테일("footrest", "150kg", "tall") 내부 탐색 불가 | Search & Discovery 앱에서 헤드레스트·풋레스트·최대하중·권장신장·재질 필터 활성 |
| 11 | **theme.liquid 하드코딩 리다이렉트** | `/pages/commercial/*` 6종 meta-refresh + canonical, EOFY 2026 ItemList 하드코딩 | 테마 업그레이드마다 유실 위험, 만료 프로모 스키마 잔존 | Shopify URL Redirects 로 이관, ItemList 는 프로모 템플릿 섹션으로 |
| 12 | **robots.txt.liquid 가 플랫폼 헤더 제거** | 커스텀 템플릿이 `default_groups` 만 출력 → US robots 에 있는 agents.md/UCP 안내 주석과 `Allow:` 규칙 미출력 | 에이전트 크롤러 안내 손실(경미) | `{{ robots }}` 기본 출력 방식으로 재작성 후 Disallow 1줄만 추가 |
| 13 | **og:image http://** | 홈·PDP og:image 가 `http://` (secure_url 은 https) | 일부 SNS 미리보기 경고 | `doc-head-social` 에서 https 강제 |
| 14 | **초안 상품 21개 SEO 잔재** | FURSYS/SIDIZ/Desker DRAFT 가 automizely 템플릿·SEO 필드 보유 | 실수로 공개 시 중복·저품질 | 아카이브 또는 삭제 |
| 15 | **홈 신뢰 수치 불일치** | AU 85+국/2.6M/14년 vs US 122+국/1.9M/15년 | AI 요약 시 모순 → 신뢰 하락 | 본사 공식 수치 1소스로 통일 |
| 16 | **리뷰 수 노출 위치** | 컬렉션 카드·홈 캐러셀에 별점 없음 (US 는 카드에 별점·리뷰수) | CTR | `product-block` 에 `reviews.rating` 렌더 |
| 17 | **컬렉션 canonical 이 상대 URL** (검증됨) | `canonical-urls.liquid` 가 `<link rel="canonical" href="{{ collection.url }}">` 로 출력 → 실제 HTML `href="/collections/ergonomic-chairs"`. Lighthouse SEO "Is not an absolute URL" 판정 | Google 은 상대 canonical 을 무시하거나 오해석 → 컬렉션 14개가 canonical 없는 상태와 같음. 필터·정렬 파라미터 URL 이 중복 인덱스될 수 있음 | `{{ shop.url }}{{ collection.url }}` 로 수정 (1줄). 동일 스니펫의 다른 분기도 절대 URL 여부 점검 |
| 18 | **컬렉션 페이지 CLS 0.496** (검증됨) | 히어로 `image-overlay height--fixed` 블록이 이미지 로드 전 높이 0 → 그리드 전체가 밀림. PDP 도 `<main>` 0.105 + Podium 챗 iframe 0.062 | CLS 0.25 초과는 Core Web Vitals "poor" → 순위·전환 모두 손실 | 히어로에 aspect-ratio/min-height 지정, Podium 위젯을 `position:fixed` 컨테이너로 예약 배치 또는 상호작용 후 로드 |
| 19 | **PDP 에 불필요한 서드파티 JS** (검증됨) | reCAPTCHA 189KB(미사용), Podium widget.js 1.5s 부트업, Klaviyo 온사이트 ~1s, Loox ~1s, Shopify event-observer 1.2s; 스크립트 총 3.3MB, 요청 419 | TBT 4.5s → INP 악화 | reCAPTCHA 는 폼 있는 페이지에만, Podium·Klaviyo 는 `third-party-delay` 로 지연, Loox 는 뷰포트 진입 시 로드 |

### 6.3 Core Web Vitals 실측 (Lighthouse 12, 모바일 시뮬레이션, 2026-09-07)

| 페이지 | 성능 | SEO | 접근성 | FCP | LCP | TBT | CLS | 총용량 | 요청 | 주요 원인 |
|---|---|---|---|---|---|---|---|---|---|---|
| AU 홈 | 56 | 100 | 93 | 2.5s | 3.2s | 3,550ms | 0 | 4.0MB | 297 | 미사용 JS 685KB, 메인스레드 13.8s(swiper 1.1s·Loox 0.7s·Klaviyo 0.6s) |
| US 홈 | 44 | 92 | 88 | 2.6s | 3.9s | 6,700ms | 0 | 13.0MB | 494 | 미사용 JS 1.9MB, Klaviyo 6.1s·search-form 3.1s·Clarity 2.7s |
| AU M57 PDP | 43 | 100 | 95 | 2.3s | 4.0s | 4,570ms | **0.106** | 5.8MB | 419 | 페이지 인라인 JS 3.3s, Podium 1.6s, reCAPTCHA 1.2s, Klaviyo 1.1s, Loox 1.0s |
| US M57 PDP | 37 | 100 | 93 | 2.8s | 5.1s | 8,530ms | 0.013 | 15.0MB | 657 | 페이지 JS 52.8s(!), Klaviyo 12.4s |
| AU C300 Pro V2 PDP | 34 | 100 | 90 | 2.6s | 5.6s | 4,160ms | **0.106** | 6.7MB | 423 | 이미지 1.2MB(alt 공백 16장), 위와 동일 서드파티 |
| US C300 Pro V2 PDP | 37 | 100 | 82 | 2.8s | 5.0s | 7,760ms | 0.01 | 13.8MB | 670 | 이미지 4.8MB, 페이지 JS 27s |
| AU 컬렉션 ergonomic-chairs | **13** | 92 | 97 | 2.4s | **7.7s** | 4,210ms | **0.496** | 5.8MB | 372 | 히어로 높이 미지정 CLS, **canonical 상대 URL**, reCAPTCHA·Podium |

캐비앗: 샌드박스 프록시 제약으로 Chromium 을 TLS 1.2 로 실행(핸드셰이크 1 RTT 추가, 절대값이 실제보다 다소 불리), CrUX 필드 데이터 없음. **상대 비교와 원인 분석용**으로만 사용하고, C6 기준선은 PageSpeed Insights(필드 데이터 포함)로 다시 잡을 것. US 는 CLS 가 거의 0 — Enterprise 테마의 미디어 뷰어가 크기를 예약함. AU 는 테마 업그레이드·템플릿 통합 시 히어로/갤러리 `aspect-ratio` 를 표준으로.

### 6.4 검색 가시성 검증 (부분) — 지역 스토어 간 카니발라이제이션

샌드박스에서 Google/Bing/DDG/Brave 직접 조회는 차단(봇 판정·429)돼, 미국 기준 검색 인덱스로 AU 의도 질의만 확인했다(§9).

| 질의 | 상위 노출(순서) | 해석 |
|---|---|---|
| "sihoo m57 australia" | Bunnings → arielle.com.au 리뷰 → **sihoo.com.au** m57-series → sihoo.com.au M57 PDP → M57 Pro footrest → M57 footrest → aussiechair.com.au → M57 Pro | AU 의도 질의는 AU 도메인이 잘 잡음. 단 1~2위가 리테일러·리뷰 |
| "sihoo m18 office chair australia" | Costco AU → Amazon AU → Woolworths → **sihoo.com.au** M18 PDP → m18-series → 홈 → office-chairs → M18 Pro → … → **sa.sihoo.com** | 리테일러 3곳이 공식 스토어보다 위. 남아공 스토어(sa.sihoo.com)가 AU 질의에 노출 |
| "sihoo doro c300 pro australia" | Harvey Norman → sihoo.com.au 블로그(TechRadar 리뷰) → C300 Pro V2 PDP → 블로그 → C300 Pro PDP → aussiechair → doro-series → 비교 블로그 | AU 우세. 블로그가 PDP 위에 오는 것은 PDP 콘텐츠 부족 신호 |
| "sihoo m57 ergonomic chair" (지역 의도 없음) | Best Buy → Amazon.com → Best Buy → Medium 리뷰 → Walmart → Best Buy → **www.sihoo.com/en/products/…(구 URL)** → www.sihoo.com M57 → **sa.sihoo.com** | 지역 의도 없으면 US·SA 스토어. 구 코퍼레이트 URL(`/en/products/`) 도 인덱스 잔존 |
| "site:sihoo.com.au sihoo m57" | Amazon AU → TechRadar → sihoo.com.au M57 → **www.sihoo.com** → **fr.sihoo.com** → **sa.sihoo.com** | 브랜드+모델 질의에 fr/sa/www 가 함께 경쟁 — hreflang 부재의 직접 증거 |

결론: (1) AU 의도가 명시된 질의는 AU 도메인이 잡지만 **리테일러(Bunnings·Costco·Amazon AU·Harvey Norman)에 밀리는 경우가 많다** → PDP 콘텐츠·리뷰 스키마·가격 표기 강화가 곧 순위. (2) 모델명만 치는 질의에는 www/sa/fr 스토어가 뜬다 → 본사에 **전 지역 스토어 hreflang 상호 링크**(en-AU/en-US/en-GB/fr-FR/de-DE/en-ZA) 를 요청할 근거. (3) 실제 AU SERP 순위는 Search Console 로 확정해야 하며 절차는 A21.

### 6.5 US 에서 가져올 것 (AU 에 없는 강점)

- PDP·컬렉션·홈 **FAQPage 스키마** (AU 는 인프라가 있으니 연결만).
- **BreadcrumbList** 전 페이지.
- **Chair Finder 퀴즈**(4문항) — AU Compare 툴 데이터(신장·용도)를 재사용해 퀴즈 UI 로 확장.
- **롱테일 랜딩**: "best office chair for tall people"(AU 는 아티클로 존재 → 페이지 승격), "petite", "high back", "under $500".
- **모델명 메가메뉴 직링크 + NEW/HOT 배지**.
- **3rd-party 리뷰어 영상 임베드**(LTT·TechRadar) — AU PDP 는 인용문만.
- **Our Promise 전용 랜딩**(배송·반품·보증 각 1페이지) — 정책 페이지와 별개로 판매 언어로 쓴 페이지.

---

## 7. GEO (Generative Engine Optimization) 대조

AI 검색(Google AI Overviews, ChatGPT Shopping, Perplexity, Shop app 에이전트)이 인용·추천하는 조건은 **(a) 기계가 읽는 사실(스키마·표·FAQ), (b) 일관된 엔티티, (c) 신선도·저자, (d) 에이전트 접근성**이다.

| 축 | AU 현재 (강점 = 유지) | 보완 (US 참고 또는 신규) | 피해야 할 것 |
|---|---|---|---|
| 기계 가독 사실 | 컬렉션 ItemList, Article+FAQ, 스펙이 텍스트인 PDP(C300 Pro V2·M57) | 전 PDP 스펙 `<table>` 통일(§4.3 #8), 권장 신장·최대하중을 **문장으로도** 명시("150~190cm, 최대 150kg"), 비교표 텍스트화, FAQPage 스키마 PDP 적용 | 스펙을 이미지로만 제공(S300·X5 image-with-text 나열) — AI 가 못 읽음 |
| 엔티티 일관성 | Organization 스키마 완비 | brand `SIHOO` 통일, 모델 표기 통일("DORO-C300 Pro" vs "Doro C300 Pro" vs "A3 DORO-C300" 혼용 → 타이틀은 "Sihoo Doro C300 Pro"), `sameAs` 에 Wikipedia/Wikidata 없으면 본사 엔티티 링크 추가 | 상품명에 내부 코드(A3) 노출 |
| 신선도·저자 | Article `dateModified`, 작성자 Person(Alex Han·Janet Biag 등) | 아티클에 바이라인·프로필 페이지(About 의 팀 소개) 노출, 연 1회 "2026 Guide" 업데이트 규칙, PDP 에 "Last updated" 메타필드 | 작성자명이 "AHA Digital Marketing"(에이전시) 로 남는 것 — 개인 전문가 명의로 |
| Q&A 자산 | `shopify--qa-pair` 메타오브젝트 8건(Shopify 의 AI/Shop 용 Q&A), FAQ 1,211건 | qa-pair 를 상품당 5~8건으로 확장(출처 링크 포함) — Shop app·AI 답변에 직접 사용됨 | FAQ 를 마케팅 카피로 채우기(질문-답 형식 유지) |
| 에이전트 접근 | agents.md·llms.txt·UCP 2026-08-25·agentic sitemap, robots 에 AI 봇 차단 없음 | 상품 설명 공백 채우기(#2), `product.category` 유지, 재고·배송 ETA 정확성(UCP 가 그대로 노출) | GPTBot 등 차단, 설명 없는 상품, 품절 상품을 ItemList 상위에 |
| 인용 가능한 비교 콘텐츠 | Compare 툴, "M57 vs M18" 아티클 | 패밀리별 비교 아티클 세트(C300 Pro vs Pro V2 vs C500, M57 vs M57 Pro vs M90, X5S vs X5F vs X5 Pro) + PDP 비교표 동일 데이터 | 하드코딩 비교표(리퀴드) — 데이터 이중화 |
| 리뷰 근거 | Loox 885/346/174 건 | aggregateRating 스키마(#3) + 리뷰 요약 텍스트("가장 많이 언급된 장점 3가지") 섹션 | 별점 없는 상품에 가짜 rating |
| 로컬 근거 | ABN, NSW 주소, 1300 번호, NDIS FAQ, 3년 AU 보증 | About 에 창고·쇼룸(메타오브젝트 `showroom` 4건 활용)·`LocalBusiness` 스키마 추가 | US 수치(15년/122국) 그대로 복붙 |

---

## 8. 작업 리스트 (우선순위 백로그)

범례: P0 즉시(1주) · P1 2~4주 · P2 다음 분기 · 규모 S(≤0.5일) M(1~3일) L(1주+) · 담당: Dev(테마 개발) / Content(콘텐츠·SEO) / HQ(본사 협의)

### A. SEO 즉시 수정 (템플릿 통합 전에 끝낼 것)

| ID | P | 규모 | 담당 | 작업 | 완료 기준 |
|---|---|---|---|---|---|
| A1 | ✅ 드래프트+라이브 (09-07) | S | Claude | `doc-head-core` 타이틀 접미사 조건 수정(대소문자 무시) + SEO 타이틀 "\| Shop Now" 일괄 제거 | 전 PDP·블로그 `<title>` ≤ 60자, 브랜드 1회 |
| A2 | 🔶 C300 Pro V2 완료, S100·M59AS 본사 대기 | M | Claude/Content | C300 Pro V2·S100·M59AS 상품 설명 작성(200~350 단어, cm/kg, AU 보증) | `descriptionHtml` 비어 있는 활성 상품 0 |
| A3 | ✅ 드래프트 (09-07) | S | Claude | `structured-data-product` 에 `aggregateRating`(reviews.rating/rating_count) + `brand` 고정 | Rich Results Test 통과, M57 별점 표시 |
| A4 | 🔶 별점 메타필드 있는 상품은 스키마 반영, Loox 동기화 점검 남음 | S | Content | Loox → `reviews.rating` 메타필드 동기화 활성, 미동기 상품 확인 | 리뷰 ≥1 상품 전부 rating 메타필드 보유 |
| A5 | ✅ 라이브 (09-07) | S | Claude | vendor 전부 `SIHOO`, productType 3종 정규화 | Admin 필터로 이형 값 0 |
| A6 | 🔶 스키마 인프라 완료(faq 섹션 자동), 메타오브젝트 연결은 콘텐츠 작업 | M | Content | 활성 상품 27개 `custom.faqs` 연결(기존 faq_item 재사용) | 각 PDP FAQ 5문항 이상 |
| A7 | ✅ 드래프트 (09-07) | S | Claude | PDP 템플릿 전부에 `faq-schema` 렌더 + Compare·FAQ 페이지 FAQPage 스키마 | 해당 페이지 JSON-LD 에 FAQPage |
| A8 | ✅ 드래프트 (09-07) | S | Claude | BreadcrumbList 스니펫 전 템플릿(PDP·컬렉션·블로그·페이지) | JSON-LD + 가시 브레드크럼 |
| A9 | ✅ 드래프트 (09-07, 리다이렉트는 이미 존재) | S | Claude | `/pages/commercial/*` 6건 → Shopify URL Redirects, theme.liquid 하드코딩 제거, EOFY ItemList 제거 | theme.liquid 에 경로 하드코딩 0 |
| A10 | 🔶 og:image https 완료, robots.txt.liquid 는 유지(다이제스트 Disallow 필요) | S | Claude | og:image https, `robots.txt.liquid` 기본 출력 방식 재작성 | robots 에 Shopify 에이전트 헤더 복원 |
| A11 | ✅ 라이브 (09-07, 17장) | M | Claude | 미디어 alt 일괄 입력("모델 색상 뷰") | 활성 상품 갤러리 alt 공백 0 |
| A12 | P1 | S | Content | DRAFT 상품 21개 아카이브/삭제, 사용 안 하는 automizely/aftership 템플릿 삭제 | 초안 0, 템플릿 파일 -12 |
| A13 | P1 | S | Content | 홈·About 신뢰 수치 본사 공식값으로 통일 | AU/US 수치 동일 |
| A14 | P1 | M | Dev+HQ | hreflang: AU 페이지에 en-AU/en-US 출력, 본사에 역링크·푸터 AU 스토어 추가 요청 | 양방향 hreflang 검증(Search Console 국제 타게팅) |
| A15 | P1 | S | Dev | Search & Discovery 필터: 헤드레스트·풋레스트·최대하중·권장신장·재질 | 컬렉션 필터 ≥ 5종 |
| A16 | ✅ 드래프트 (09-07) | S | Claude | `product-block` 카드에 별점·리뷰수 노출(컬렉션·홈 캐러셀) | 카드에 별점 |
| A17 | P2 | S | Dev | `third-party-delay` 를 PDP·컬렉션으로 확장, Bing/Podium 스크립트 지연 | PDP 외부 script 30 → 20 이하 |
| A18 | ✅ 드래프트 적용 (2026-09-07) | S | Claude | `canonical-urls.liquid` 컬렉션 분기 `{{ shop.url }}{{ collection.url }}` 로 수정 — **작업 테마 `WORK - SIHOO Symmetry 2026-09 fixes DRAFT` (ID 187727839523, 미공개)** 에 적용. 프리뷰(`?preview_theme_id=187727839523`)에서 `/collections/ergonomic-chairs`·`/collections/doro-series` canonical 이 절대 URL 로 렌더됨을 확인. 라이브 반영은 사용자가 테마 게시 또는 LIVE 에 같은 1줄 수정 | 라이브 게시 후 Lighthouse SEO canonical 통과 |
| A19 | P1 | S | Dev | 컬렉션 히어로 `image-overlay height--fixed` 에 aspect-ratio/min-height, PDP `<main>` 지연 삽입 요소 크기 예약, Podium 위젯 자리 예약 (§6.2 #18) | 컬렉션 CLS < 0.1, PDP CLS < 0.05 |
| A20 | 🔶 Podium 상호작용 로드 완료, reCAPTCHA 는 Admin 스팸 설정 결정 필요 | S | Claude | PDP·컬렉션에서 reCAPTCHA 제거(폼 페이지 한정), Podium·Klaviyo 상호작용 후 로드, Loox 뷰포트 진입 시 로드 (§6.2 #19) | PDP 스크립트 3.3MB → 2MB, TBT < 2.5s |
| A21 | **P0** | S | Content | **AU 검색 가시성 확정**: Search Console 성과 → 국가 = Australia, 최근 3개월, 질의 20개("sihoo m57", "sihoo m18", "sihoo doro c300 pro", "sihoo s300", "sihoo chair", "sihoo australia", "sihoo review", "sihoo m57 pro", "sihoo c300 pro v2", "sihoo gaming chair", "best sihoo chair", "sihoo vs", "ergonomic chair australia", "office chair australia", "mesh office chair", "sihoo m59", "sihoo v1", "sihoo m90", "xallking", "sihoo warranty") 의 노출·순위·URL 확인 + Google AU 시크릿 창에서 동일 20개 수동 확인, 1페이지에 www/sa/fr/uk.sihoo.com 이 뜨는 질의 목록화 | 질의별 AU 순위·경쟁 도메인 표 1장. 규칙: 5개 이상 질의에서 타 지역 스토어가 1페이지면 A14 를 P0 로 승격 |
| A22 | P1 | S | Dev | CWV 기준선: PageSpeed Insights(필드 데이터)로 §6.3 7페이지 재측정 → C6 회귀 기준 | 페이지별 LCP/CLS/INP 표 |
| A23 | P1 | S | Content+HQ | 구 코퍼레이트 URL(`www.sihoo.com/en/products/…`)·sa.sihoo.com 이 AU 질의에 노출되는 건 본사에 공유, 전 지역 hreflang 매트릭스 제안서 송부 | 본사 회신 기록 |

### B. 상품페이지 템플릿 통합 (`product.chair.json`)

| ID | P | 규모 | 담당 | 작업 | 완료 기준 |
|---|---|---|---|---|---|
| B0 | ✅ 완료 | — | Claude | **제품별 스펙·설명 문서화** — [sihoo-au-product-spec-sheet-2026-09.md](./sihoo-au-product-spec-sheet-2026-09.md): 활성 27개 스펙 원문·정규화 값·US 대조·확인 목록, 정규화 스키마 `specs.*` 정의, Matrixify CSV(`sihoo-au-product-specs-import.csv`), 설명 공백 3종 초안 | 문서·CSV 커밋됨 |
| B1 | ✅ 라이브 (09-07, 정의 33개) | S | Claude | 메타필드 정의 생성: 스펙 문서 §2 의 `specs.*` 24개(타입 지정) + `specs_desk.*` + `custom.highlights`, `custom.best_for`, `custom.install_video`, `custom.adjust_video`, `custom.manual_pdf`, `custom.related_articles`, `custom.last_updated`, `custom.compare_table`, `custom.expert_quotes`, `custom.features` / 메타오브젝트 `product_feature`, `expert_quote` | Admin 에 정의 생성, 타입 검수 |
| B2 | 🔶 23개 임포트 완료(09-07), S100·M59AS·데스크 4개 본사 회신 대기 | M | Claude/Content | 스펙 문서 §4 확인 목록 12건 해소 → CSV 갱신 → Matrixify 임포트(Metafields only, dry run 후). 본사 요청 이메일 초안 + 전 제품 스펙시트 엑셀(공백 노랑·확인 주황·US 환산 파랑, Gaps 시트 90행): [hq-spec-confirmation-request-2026-09.md](./hq-spec-confirmation-request-2026-09.md) · [sihoo-au-spec-sheet-hq-review-2026-09.xlsx](../data/sihoo-au-spec-sheet-hq-review-2026-09.xlsx). **2026-09-07 Doris(본사) 에게 메시지로 발송 완료** → 회신 대기(목표 09-21) → 반영 | `specs.needs_confirmation` 전부 공백, 27개 상품 `specs.*` 채움 |
| B2b | P1 | S | Content | 설명 공백 3종(C300 Pro V2·S100·M59AS) 스펙 문서 §5 초안 검수 후 게시, 나머지 24개도 §5 표준 구조(4문단, cm/kg, AU 약속)로 정비 | 설명 200~350단어 27/27 |
| B3 | P1 | M | Content | 기능 갤러리·리뷰어 인용·영상 URL 메타오브젝트 입력(플래그십 5종 우선) | C300 Pro V2·C300 Pro·S300·M57·M18 완료 |
| B4 | P1 | L | Dev | `product.chair.json` 작성(§4.3 13섹션) — Symmetry 원본 `main-product` 사용, 포크 금지, Sticky ATC·사이즈차트 테마 옵션 활용, Afterpay/Zip 문구 블록 | 스테이징에서 5종 렌더, Theme Check 통과 |
| B5 | 🔶 B5-lite 완료: `sections/specs-table.liquid` + 플래그십 3종 템플릿(드래프트) | M | Claude | 스펙 `<table>` 섹션(메타필드 → 3탭 Overview/Detail/Resources) + 사이즈 핏 가이드 섹션(권장신장·최대하중 문장) | Specs&Compare 앱 의존 제거 |
| B6 | P1 | M | Dev | 비교표 섹션을 `comparison_table` 메타오브젝트 기반으로, Compare 페이지와 데이터 공유 | 하드코딩 비교표 0 |
| B7 | P1 | S | Dev | PDP 헤드: ProductGroup + aggregateRating + BreadcrumbList + FAQPage + `hasMerchantReturnPolicy` | Rich Results 4종 통과 |
| B8 | P1 | M | Dev+Content | A/B 2주: C300 Pro V2·M57·M18 신템플릿 vs 기존(전환율·ATC·이탈) | 전환율 ≥ 기존, 결과 기록 |
| B9 | P2 | M | Content | 나머지 24개 활성 상품 전환 + `product.desk.json`(Desker 2종) | 활성 상품 템플릿 종류 ≤ 3 |
| B10 | P2 | S | Dev | 구 product 템플릿 30종·`custom-main-product.liquid`·Klaviyo Reviews 블록 삭제 | 템플릿 디렉토리 정리 |
| B11 | P2 | M | Dev | 시즌 프로모: `page.promo.json` 1개 + `expired_promotion` 메타오브젝트로 통합, 2025 시즌 템플릿 55종 삭제 | 프로모 템플릿 ≤ 2 |

### C. 테마 업그레이드 (Symmetry 7.3.0 → 8.3.2)

**작업 규칙(2026-09-07 확정)**: 모든 테마 수정은 라이브가 아닌 **작업 테마 `WORK - SIHOO Symmetry 2026-09 fixes DRAFT` (ID 187727839523, 미공개)** 에서 한다. 이 테마는 2026-08-21 LIVE 복사본을 이름 변경한 것으로, LIVE 와의 차이(설정 `settings_data.json`·`settings_schema.json`, weekly-digest 스니펫 4종, `page.weekly-digest-feed.liquid`, `robots.txt.liquid`)는 C0 에서 동기화한다. 테마 슬롯이 20/20 이라 `themeDuplicate` 가 조용히 실패하므로 새 복사본을 만들려면 C1 정리가 선행돼야 한다. 검증은 `?preview_theme_id=187727839523` 프리뷰, 게시는 사용자가 수동으로.

| ID | P | 규모 | 담당 | 작업 | 완료 기준 |
|---|---|---|---|---|---|
| C0 | ✅ 완료 (2026-09-07) | S | Claude | 작업 테마를 LIVE 와 동기화 — `settings_data.json`, `settings_schema.json`(minified, 내용 동일), weekly-digest 스니펫 4종, `page.weekly-digest-feed.liquid`, `robots.txt.liquid` 8개 파일 업서트. 이후 모든 A/B 수정은 작업 테마에 누적, 게시 전 LIVE 와 재-diff | 체크섬 diff = `canonical-urls.liquid`(A18) + `settings_schema.json`(공백 차이) 만 |
| C1 | P1 | S | Dev | 테마 20개 중 16개 삭제(백업: 직전 LIVE 1 + 8.x 배포 전 1), 삭제 전 ZIP 내보내기 | 테마 슬롯 ≥ 10 여유 |
| C2 | P1 | S | Dev | Clean Canvas 8.x 릴리스 노트·마이그레이션 가이드 확인(지원 포털 로그인), 브레이킹 체인지 목록화 | 체크리스트 문서 |
| C3 | P1 | L | Dev | 8.3.2 클린 설치 → `settings_data` 이관 → §5 이식 대상 스니펫·섹션 재배치 | 스테이징 테마 전 템플릿 렌더 |
| C4 | P1 | M | Dev | `custom.js`(24KB)·`custom.css` 기능 분해: 비교툴·카운트다운·헤더 높이 → 필요한 것만 섹션 로컬 JS 로 | 전역 custom.js ≤ 5KB |
| C5 | P1 | M | Dev | 앱 블록 재연결(Loox, Specs&Compare 제거, Klaviyo 폼, PageFly 레이아웃 재생성 또는 폐기) | 앱 블록 누락 0 |
| C6 | P1 | M | Dev | 회귀: Playwright 전 템플릿 스크린샷(모바일/데스크톱), JSON-LD diff, Search Console URL 검사 10 URL, PSI 전후 비교 | 회귀 리포트 첨부 |
| C7 | P1 | S | Dev | 배포: 화요일 오전(AEST) 저트래픽, 24h 모니터(Search Console 커버리지·GA 전환) | 롤백 계획 포함 |
| C8 | P2 | S | Dev | 테마 업데이트 루틴 문서화(분기 1회 벤더 체크, 커스텀 파일 목록 관리) | 런북 |

### D. GEO·콘텐츠 (상시)

| ID | P | 규모 | 담당 | 작업 | 완료 기준 |
|---|---|---|---|---|---|
| D1 | P1 | M | Content | `shopify--qa-pair` 상품당 5~8건(출처 링크) — 플래그십 5종부터 | 40건 이상 |
| D2 | P1 | M | Content | 패밀리 비교 아티클 3종(C300 Pro/Pro V2/C500, M57/M57 Pro/M90, X5 시리즈) + PDP 관련 아티클 링크 | 각 PDP 에서 1클릭 도달 |
| D3 | P1 | M | Content+Dev | Chair Finder 퀴즈(4문항) — Compare 툴 데이터 재사용, 결과에 상품 카드+별점 | 홈·컬렉션에 배치 |
| D4 | P1 | S | Content | 롱테일 페이지 승격: tall people(아티클→페이지), petite, high back, under $500 | 4페이지 + 내부링크 |
| D5 | P2 | S | Content | 아티클 바이라인·저자 프로필(개인 전문가 명의), "Last updated" 노출 | E-E-A-T 요소 노출 |
| D6 | P2 | S | Dev | About 에 `showroom` 메타오브젝트 노출 + LocalBusiness 스키마 | 스키마 검증 |
| D7 | P2 | M | Content | 리뷰어 영상(LTT·TechRadar·Creative Bloq) 라이선스 확인 후 PDP 임베드(본사 공유 자산) | 플래그십 3종 영상 ≥1 |
| D8 | P2 | S | Content | 설치 튜토리얼 페이지 Doro·XALLKING 추가 + PDP 리소스 블록과 동일 소스 | 활성 상품 매뉴얼 링크 100% |
| D9 | P2 | S | Content | "Our Promise" 판매형 랜딩 3종(배송·반품·보증) | 정책 페이지와 상호 링크 |

### 권장 실행 순서

1. **주 1~2**: A18(canonical 1줄)·A21(검색 가시성 확정)·A1~A7 (하루 이내 항목 다수, 즉시 리치 결과 개선) + A19·A20(CLS·서드파티) + C1·C2 (슬롯 확보·릴리스 노트 확인).
2. **주 3~6**: B1→B2→B2b (스펙 확인·임포트·설명 정비를 템플릿보다 먼저) → B3~B8 (템플릿 통합은 7.3.0 위에서 먼저 만들어 검증 — 업그레이드 후 이식이 쉬움) + A8~A16, A22.
3. **주 7~10**: C3~C7 (8.3.2 클린 설치 + `product.chair.json` 이식) → B9~B11 정리.
4. **상시**: D1~D9, 분기별 본 문서 리프레시.

---

## 9. 검증 결과와 남은 가정 (2차 검증 2026-09-07)

> 2026-09-07 실행분 상세: [sihoo-au-change-report-2026-09-07.md](./sihoo-au-change-report-2026-09-07.md).

| 항목 | 1차 상태 | 2차 검증 결과 | 남은 가정 / 후속 |
|---|---|---|---|
| Core Web Vitals | PSI 쿼터 초과로 미측정 | **Lighthouse 12 로컬 실행 성공(7페이지, §6.3)**. Chromium 이 샌드박스 릴레이를 TLS 1.3 으로 못 지나 `--ssl-version-max=tls1.2` 로 실행. PSI API 는 재시도에도 429 | lab 데이터만, 필드(CrUX) 없음 → A22 에서 PSI 로 기준선 확정 |
| Symmetry 8.x 변경점 | 지원 포털 403 | 공개 자료로 확인: **8.0.0 = 2025-06-18**(OS 2.0 완전 지원), **8.1.0** 변형별 커스텀 라벨(이미지 위 표시), **8.2.0** "Size guide" 섹션 신설 + product-list 블록 색상 메타필드 옵션, **8.3.0**, **8.3.2 = 2026-07-03** 버그픽스. 지원 포털(Cloudflare 봇 차단)·archive.org 는 접근 불가 | 8.x 전체 릴리스 노트는 C2 에서 Clean Canvas 로그인 후 확인. 사이즈 가이드 섹션이 8.2 부터 내장이므로 §4.3 #3 은 테마 기본 기능으로 구현 |
| AU 검색에서 타 지역 스토어 노출 | 순위 데이터 없음 | **부분 검증(§6.4)**: AU 의도 질의는 sihoo.com.au 가 잡되 리테일러에 밀림, 모델명 단독 질의는 www/sa/fr.sihoo.com 노출, 구 URL `/en/products/` 잔존. Google/Bing/DDG/Brave 직접 조회는 샌드박스에서 봇 차단·429 | 실제 AU 순위는 A21(Search Console + 수동 20질의) 로 확정 후 A14 우선순위 결정 |
| 상품 스펙 데이터 | "메타필드 미활용" 수준의 파악 | **전수 문서화 완료**: 27개 중 23개 스펙 키 15/15 보유, S100·M59AS·데스크 2종 공백, 자유 텍스트 정규화 필요(오타 `1105°`, inch 병기, "/" 값). US 스펙표와 8개 모델 대조 → M18·S300 상이값 2건 | 스펙 문서 §4 확인 목록 12건은 본사 스펙시트로 확정(B2) |
| Loox 클라이언트 스키마 | 미확인 | 서버 HTML 에 aggregateRating JSON-LD 없음 재확인(7페이지). Loox JS 주입 여부는 여전히 미확인 | Search Console "상품 스니펫/판매자 목록" 리포트 확인 (A3 후 자동 해소) |
| US 사이트 내부 구조 | 외부 HTML 만 | 변동 없음 | RA 커스텀 섹션 내부는 미확인 |

---

## 부록 A. AU 활성 상품 감사 (2026-09-07)

| 상품 | 템플릿 | 설명 단어 | SEO 타이틀 | 별점(건수) | FAQ 연결 | 미디어 |
|---|---|---|---|---|---|---|
| DORO-C300 Pro V2 | c300-pro-2 | **0** | **없음** | — | ✗ | 16 |
| DORO C300 Pro | doro-series-template | 308 | ✅ | 4.6 (174) | ✗ | 34 |
| DORO-C500 | c500 | 233 | ✅ | — | ✗ | 15 |
| DORO-S300 | s300 | 325 | ✅ | — (Loox 75) | ✗ | 13 |
| DORO S100 | s100-2 | **0** | ✅ | 2.0 (4) | ✗ | 8 |
| DORO-C100 | c100 | 103 | ✅ | — | ✗ | 17 |
| M57 | m57 | 252 | ✅ | 4.6 (885) | ✗ | 27 |
| M57 footrest | (기본) | 304 | ✅ | 4.7 (143) | ✗ | 18 |
| M57 Pro / Pro footrest | m57-pro | 265 / 269 | ✅ | 4.4 (115) / 4.6 (28) | ✗ | 22 / 11 |
| M18 | m-18 | 93 | ✅ | 4.6 (346) | ✗ | 19 |
| M18 Pro | m18-pro | 359 | ✅ | 4.5 (27) | ✗ | 11 |
| M16 | m-16 | 104 | ✅ | 4.9 (72) | **✅** | 9 |
| M56 | m56-v1 | 336 | ✅ | — | ✗ | 9 |
| M59 | (기본) | 204 | ✅ | 4.6 (23) | ✗ | 10 |
| M59AS | m59 | **0** | ✅ | 2.5 (2) | ✗ | 12 |
| M76 | (기본) | 229 | ✅ | 4.8 (6) | ✗ | 15 |
| V1 | v1 | 289 | ✅ | 4.6 (74) | ✗ | 31 |
| Vito M90 / M90 footrest | (기본) | 541 / 533 | ✅ | 4.5 (83) / 4.9 (11) | ✗ | 18 / 12 |
| XALLKING X3 Pro / X5 Pro / X5C / X5F / X5S | x3-pro / x5-pro / x5c / x5f / x5s | 207 / 333 / 211 / 119 / 162 | ✅ | — | ✗ | 9 / 17 / 7 / 9 / 10 |
| Desker 데스크 2종 | aftership.994c81c7 | 98 / 120 | ✅ | — / 3.7 (3) | ✗ | 5 / 15 |

## 부록 B. 페이지 유형별 JSON-LD 매트릭스

| 페이지 유형 | AU | US |
|---|---|---|
| 홈 | Organization(풍부), WebSite+SearchAction | Organization(간단), WebSite, **FAQPage** |
| 컬렉션 | Organization, **ItemList+Product+Offer+AggregateRating** | Organization, **FAQPage** |
| PDP | Organization, ProductGroup(+Product/Offer, rating ✗) ; S300·X5 만 BreadcrumbList | Organization, ProductGroup(rating ✗), **FAQPage** |
| 블로그 리스트 | Organization, **Blog+BlogPosting** | Organization, **BreadcrumbList** |
| 아티클 | Organization, **Article(author·dateModified)**, **FAQPage** | Organization, **BreadcrumbList**, Article |
| FAQ / Compare 페이지 | Organization 만 | — |

## 부록 C. 참고 URL

- Symmetry 테마 스토어(버전 확인): https://themes.shopify.com/themes/symmetry
- Clean Canvas Symmetry 업데이트 가이드: https://support.cleancanvas.co.uk/hc/en-us/articles/11681160313501-How-to-update-Symmetry
- AU 에이전트 문서: https://sihoo.com.au/agents.md · https://sihoo.com.au/.well-known/ucp
- US 구매 가이드(참고 구조): https://www.sihoo.com/pages/how-to-choose-right-ergonomic-office-chair · https://www.sihoo.com/pages/sitting-method
