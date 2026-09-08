# 상품 상세페이지(PDP) 통일 계획서 — sihoo.com.au (2026-09-08, 컨펌 대기)

> 3줄 요약
> 1. 현재 27개 상품이 **20개 템플릿 · 2종류 메인 섹션 · 3종류 스펙 표 · 2종류 FAQ · 2종류 리뷰 블록**을 섞어 쓰고 있어 상품마다 버튼·배지·별점·갤러리·글꼴이 다르다. 데스크 2종은 템플릿 파일명 불일치로 기본 템플릿으로 떨어진다.
> 2. 제안: 메타필드를 단일 소스로 읽는 **템플릿 1개(`product.chair.json`) + 재사용 섹션 라이브러리 13개**를 드래프트 테마에 만들고, 상품별 차이는 섹션 옵션과 메타필드 값으로만 표현한다. 데스크만 파생 템플릿 1개.
> 3. 4단계(디자인 토큰 → 섹션 라이브러리 → 상품별 콘텐츠 이관 → 검수·게시), 라이브 테마는 게시 순간까지 무접촉. **아래 §7 결정 8가지에 답을 주면 바로 시작.**

---

## 1. 목표와 원칙

| 원칙 | 내용 |
|---|---|
| 호주 시장 기준 | 미터법·AUD·호주 배송/반품/보증 표기, ACCC 리뷰 규정, Afterpay·Zip 노출, 호주 책상 높이 기준 핏 가이드 |
| 모바일 우선 | 폰에서 첫 화면에 제목·별점·가격·옵션·구매 버튼이 들어오고, 긴 이미지 나열 대신 접이식 콘텐츠 |
| 데이터는 메타필드 | 스펙·하이라이트·영상·매뉴얼·FAQ·비교 대상은 `specs.*`·`custom.*` 메타필드(및 필요 시 메타오브젝트)에서만 읽는다. 템플릿 JSON 안에 상품 문구를 박지 않는다 |
| 텍스트는 텍스트로 | 이미지에 구워 넣은 카피(image-with-text 10~17장 연속)를 실제 HTML 텍스트로 옮겨 검색·AI 답변·접근성·번역에 쓰이게 한다 |
| 라이브 무접촉 | 모든 작업은 드래프트 테마 187727839523. 기존 템플릿은 삭제하지 않고 남겨 두어 상품별로 되돌릴 수 있게 한다 |
| 검증 가능 | 상품마다 프리뷰 링크 + 체크리스트, Rich Results·Lighthouse 재측정 |

## 2. 현황 진단

### 2.1 템플릿 인벤토리 (드래프트 테마 기준, 비활성 섹션 제외)

| 템플릿 | 상품 | 메인 섹션 | 섹션 수 | 특징 · 문제 |
|---|---|---|---|---|
| `(기본 product.json)` | M59, M57 footrest, Vito M90 ×2, M76 | main-product | 4 | 콘텐츠 섹션 없음(FAQ·리뷰·관련상품만). 설명은 상품 description 의존 |
| `aftership.994c81c7` (파일 없음) | Desker 데스크·컨트롤러 | → 기본으로 폴백 | 4 | **템플릿 파일명 불일치**(테마엔 `aftership.9b1060dd`만 존재). 데스크가 의자용 기본 템플릿으로 표시 |
| `m-16` | M16 | main-product | 4 | 기본과 동일 |
| `v1` | V1 | custom-main-product | 6 | 스펙 앱 + FAQ 2종 중복(faq-accordion + faq) |
| `m-18` | M18 | custom-main-product | 7 | 하이라이트 + 스펙표(메타필드) + FAQ 2종 중복 |
| `m57` | M57 | custom-main-product | 18 | image-with-text 8장, 로고리스트, rich-text 4개 |
| `m57-pro` | M57 Pro ×2 | main-product | 21 | image-with-text-overlay **14장** 연속 |
| `m18-pro` | M18 Pro | main-product | 23 | image-with-text-overlay **17장** 연속 |
| `m56-v1` | M56 | main-product | 18 | custom_css **72개**, 글꼴 override 21곳, product-grid 로 끝남(related 아님) |
| `s300` | Doro S300 | main-product | 24 | image-with-text 10장, rich-text 6개, 갤러리 |
| `c500` | Doro C500 | main-product | 22 | image-with-text 10장, collapsible-tabs, video-with-text |
| `c100` | Doro C100 | main-product | 23 | image-with-text 10장, 스펙 앱 2개 |
| `c300-pro` | (미사용, 구 C300 Pro) | main-product | — | 참고용 |
| `doro-series-template` | C300 Pro | main-product | 17 | 커스텀 liquid 비교표 4.8KB 하드코딩, custom_css 10 |
| `c300-pro-2` | C300 Pro V2 | custom-main-product | 15 | 위와 같은 비교표 하드코딩, 스펙표(메타필드), FAQ, 출처문구 |
| `m59` | M59AS | main-product | 13 | Doro 계열 섹션(테스티모니얼 없음), 출처문구 |
| `s100-2` | Doro S100 | custom-main-product | 13 | HIGH DEMAND 박스, 트러스트 배지 |
| `s100` | (미사용, 구 S100) | main-product | — | 참고용 |
| `x5-pro` | X5 Pro | main-product | 19 | **슬라이드쇼가 메인 위에** 위치, 스펙 앱 2개 |
| `x3-pro` / `x5c` / `x5f` | X3 Pro, X5C, X5F | main-product | 12~13 | 게이밍 공통 구조, custom_css 16, 글꼴 override 9~10 |
| `x5s` | X5S | custom-main-product | 12 | 같은 게이밍 구조인데 메인만 다름 |

같은 계열(예: X5 시리즈 4종, M57 계열 3종, Doro 5종) 안에서도 메인 섹션과 콘텐츠 구조가 다르다. 미사용 템플릿 2개(`c300-pro`, `s100`)와 `m56`, `alternative`, `countdown`, `custom-main`, `preorder`, `ringo-kids`, `sihoo-m18`, `story` 등 상품이 연결되지 않은 템플릿 10개가 더 있다.

### 2.2 화면에서 바로 보이는 불일치 (스크린샷 C500 · S300 · S100 · C300 Pro 기준)

| 항목 | 유형 A (main-product: C500·S300·C300 Pro 등 13개 상품) | 유형 B (custom-main-product: S100·M57·M18·V1·C300 Pro V2·X5S·C100) | 문제 |
|---|---|---|---|
| 별점 | 제목 아래 "4.8/5 · 28 reviews" **+** 가격 옆 "★★★★★ 28 reviews" → **두 번 표시** | 제목 위 한 줄 | A 는 같은 정보 중복, 폰에서 세로 공간 낭비 |
| 세일 표기 | 이미지 모서리 빨간 "27% off" 배지 + 취소선 가격 | "Save $290.00" 필 + "LOW ON STOCK" 필 | 할인율 vs 할인액, 규칙 없음 |
| 구매 버튼 | 검정 테두리 대문자 "ADD TO CART" + 보라 "Buy with shop" + "More payment options" | 빨간 "Add to cart" + 검정 "Buy it now" | 브랜드 컬러·대소문자·2차 버튼이 상품마다 다름 |
| 배송 문구 | 비행기 아이콘 회색 "Free shipping with delivery in 1-5 days." | 초록 체크 "Free shipping with delivery in 1-5 days" | 아이콘·색·마침표 불일치 |
| 긴급성 박스 | 없음 | 노란 "HIGH DEMAND — Extended dispatch 5–7 business days" | 배송 1-5일 문구와 **같은 화면에서 모순** |
| 신뢰 배지 | 없음 | 3-Year Warranty · 30-Day Returns · Free Shipping | 보증·반품은 전 상품 공통인데 일부만 노출 |
| 브레드크럼 | C300 Pro 만 "Home > 상품명" | 없음 | 컬렉션 단계가 빠져 SEO 가치 낮음 |
| 갤러리 | S300 좌측 세로 썸네일 / C500 썸네일 없음 / C300 Pro 좌우 화살표 | S100 하단 가로 썸네일 | 4가지 |
| 제목 | 2줄 큰 제목 (~36px) | 1줄 작은 제목 (~28px) | 위계 불일치 |
| 옵션 버튼 | 사각 테두리 | 사각 테두리, 품절 회색 | 유사하나 여백 다름 |
| 스펙 표 | Specs&Compare 앱(현재 대부분 비활성) 또는 custom-multi-column 텍스트 | specs-table(메타필드, 3개 상품만) | 3가지 방식, 값 불일치 위험 |
| FAQ | collapsible-tabs / faq-accordion(메타오브젝트) / faq(블록) | 동일 | 3가지 |
| 리뷰 | Loox 앱 섹션 + `sihoo-product-reviews` 커스텀 섹션 | 동일 | 일부 페이지에 둘 다 존재 |
| 글꼴 | 전역 Inter 400, 제목 37px, 본문 15px, 버튼 대문자·각진 모양 | 템플릿 custom_css 로 글꼴 크기·굵기 재정의(m56-v1 21곳, 게이밍 9~10곳) | 전역 설정이 상품마다 덮어써짐 |

### 2.3 구조적 문제 (화면에 안 보이지만 비용이 큰 것)

1. **콘텐츠가 템플릿 JSON 에 박혀 있다.** 상품 카피·스펙·링크가 `sections.*.settings` 안에 있어 테마를 바꾸거나 복제하면 전부 다시 입력해야 한다. 테마 업그레이드(Symmetry 7.3 → 8.x)가 사실상 막혀 있는 원인.
2. **이미지 카피.** M18 Pro 17장, M57 Pro 14장, Doro 10장씩 image-with-text 가 연속되며 텍스트가 이미지 안에 있다. 검색엔진·AI 쇼핑 답변이 읽지 못하고, 폰에서 스크롤이 20화면을 넘는다. LCP 이후 이미지 용량도 크다.
3. **하드코딩 비교표.** C300 Pro / C300 Pro V2 의 "Why upgrade" 비교표가 4.8KB 커스텀 liquid 로 두 템플릿에 각각 복제돼 있다. 가격·스펙이 바뀌면 두 곳을 손봐야 한다.
4. **앱 의존 스펙.** Specs&Compare 앱 블록이 12개 템플릿에 남아 있으나 대부분 비활성. 앱 해지 시 빈 섹션이 남는다.
5. **데스크 템플릿 폴백.** 데스크 2종이 의자 기본 템플릿으로 나가 데스크에 없는 항목(팔걸이 등)을 전제로 한 구조.
6. **중복 리뷰 블록**과 **중복 FAQ 섹션**이 스키마(FAQPage·aggregateRating)를 두 번 출력할 위험. 지금은 드래프트 테마에서 잡아 두었지만 템플릿을 정리하지 않으면 재발.

## 3. 페이지(상품군)별 구성 · 문제 · 개선안

| 상품군 | 현재 구성 | 핵심 문제 | 개선안 (통일 템플릿에서의 표현) |
|---|---|---|---|
| **Doro 프리미엄** (C300 Pro V2, C300 Pro, S300, S100, C500, C100, M59AS) | 프로모 스트립 → 배경 영상 → 기능 갤러리 → 테스티모니얼 → 이미지+텍스트 다수 → 슬라이드쇼 → 리뷰 | 계열 안에서도 메인·비교표·스펙 방식 제각각, C300 Pro/V2 만 비교표 | Hero 영상 → 하이라이트 6 → 스펙표 → 기능 스토리(텍스트+이미지 3~5개) → **메타필드 비교표**(같은 family 상품 자동) → 언론·테스티모니얼 → FAQ → 리뷰 |
| **M 시리즈 베스트셀러** (M57, M18, M57 Pro ×2, M18 Pro, M56, M16) | M57·M18 은 하이라이트+스펙표, Pro 는 이미지 14~17장, M16 은 빈 페이지 | 같은 가격대 상품인데 정보량이 0 ~ 17장 | 하이라이트 4 → 스펙표 → 기능 스토리 3개(이미지 카피를 텍스트로 이관) → 핏 가이드 → FAQ → 리뷰. Pro 는 "Pro 와 기본형 차이" 비교표 자동 |
| **기본 템플릿 5종** (M59, M57 footrest, Vito M90 ×2, M76) | 메인 + FAQ + 리뷰 | 설명 없음, 스펙 없음 | 메타필드만 채우면 같은 템플릿이 스펙표·하이라이트를 자동 표시. 콘텐츠 작성이 곧 개선 |
| **V1** | 메인 + 스펙 앱 + FAQ 2개 | FAQ 중복, 스펙 앱 | FAQ 1개, 스펙 메타필드 |
| **XALLKING 게이밍** (X5 Pro, X5S, X5C, X5F, X3 Pro) | 배경영상 → 갤러리 → rich-text → 이미지+텍스트 4~8 → multi-column | X5 Pro 만 슬라이드쇼가 메인 위, X5S 만 메인 종류 다름, 글꼴 override | 같은 템플릿, 게이밍용 컬러 스킴 옵션(다크 배경) 만 다르게. 슬라이드쇼는 메인 아래로 |
| **Desker 데스크 2종** | 폴백(의자 기본) | 의자 전제 구조, 스펙 없음 | `product.desk.json`: 데스크용 스펙표(상판·높이 범위·모터·최대하중), 조립 영상, 컨트롤러 액세서리 연결 |

## 4. 목표 설계

### 4.1 템플릿 구조

```
product.chair.json   ← 의자 25종 전부
product.desk.json    ← Desker 2종 (섹션 라이브러리는 동일, 스펙표 매핑만 다름)
```

상품별 차이는 세 가지로만 만든다.
1. **메타필드 값** — 스펙, 하이라이트, 영상, 매뉴얼, FAQ, 비교 대상, 수상·언론
2. **섹션 옵션** — 색 스킴(라이트/다크), 레이아웃(좌/우), 높이, 표시/숨김 토글
3. **자동 비어 있음 처리** — 메타필드가 없으면 섹션이 아무것도 렌더하지 않음(오류·빈 칸 없음)

### 4.2 섹션 라이브러리 (순서 = 기본 페이지 순서)

| # | 섹션 | 상태 | 데이터 소스 | 주요 옵션 |
|---|---|---|---|---|
| S1 | **Main product** (`custom-main-product` 개선) | 개조 | 상품·변형·`reviews.*`·`custom.highlights` | 갤러리 레이아웃(하단 썸네일 고정), 별점 1회, 세일 표기 규칙 1개, 배송·Afterpay 한 줄, 신뢰 배지 3개(전 상품), 접이식 Description/Features/What's in the box, 스티키 ATC(모바일) |
| S2 | **Product highlights** (아이콘 4~6) | 개조(`sihoo-product-highlights`) | `custom.highlights` (list) | 열 수, 아이콘 세트 |
| S3 | **Specs table + fit guide** | 완료 | `specs.*` | 헤딩, 핏 가이드 토글, 행 숨김 |
| S4 | **Feature story** (이미지·영상 + 텍스트, 반복) | 신규(3종 통합) | 블록: 제목·본문·이미지/영상·CTA | 좌/우, 비율, 배경 스킴, 텍스트 오버레이 여부, 모바일 순서 |
| S5 | **Hero video** | 유지(`background-video`) | `custom.hero_video` 또는 섹션 설정 | 높이, 오버레이 |
| S6 | **Compare** (같은 family 상품 스펙 비교) | 신규 | `custom.compare_products` (product list) + `specs.*` | 비교 행 선택, 강조 열, "Why upgrade" 문구 |
| S7 | **Press & testimonials** | 개조(`product-testimonial` + `logo-list`) | 블록 또는 `custom.press_quotes` (metaobject) | 다크/라이트, 로고 행 |
| S8 | **Lifestyle gallery** | 유지(`gallery`) | 블록 | 열 수, 비율 |
| S9 | **FAQ** (FAQPage 스키마 내장) | 완료(`faq`) 1종으로 통일 | 블록 또는 `custom.faq` (metaobject) | 열림 기본값 |
| S10 | **Review source note** | 완료 | `custom.review_source_note` | 헤딩 |
| S11 | **Reviews** (Loox 앱 섹션) | 유지, 커스텀 리뷰 섹션 제거 | Loox | — |
| S12 | **Resources** (매뉴얼·설치·조정 영상·보증) | S3 안에 통합 완료 | `custom.manual_pdf`·`install_video`·`adjust_video` | 별도 섹션으로 분리 여부 옵션 |
| S13 | **Related / complementary** (풋레스트, 컨트롤러) | 유지 | Shopify 추천 + `custom.related_products` | 열 수 |
| 옵션 | Promo strip, countdown, size-guide 팝업 | 유지 | 섹션 설정 | 캠페인 때만 켬 |

제거 대상: `sihoo-product-reviews`(중복), Specs&Compare 앱 블록 12개, `custom-image-text`·`image-with-text-overlay` 남용(→S4), 커스텀 liquid 비교표 2개(→S6), `collapsible-tabs` FAQ(→S9).

### 4.3 디자인 토큰 (전역 설정 + 섹션 CSS 변수로 고정, 템플릿 custom_css 금지)

| 토큰 | 값 (제안) | 근거 |
|---|---|---|
| 글꼴 | Inter 400/500/600 유지 | 이미 전역, US 사이트도 산세리프. 템플릿별 override 전부 제거 |
| 크기 스케일 | 본문 15 → 16px(모바일 가독), PDP 제목 데스크톱 32 / 모바일 26, 섹션 제목 28/22, 캡션 13 | 현재 37px 제목이 2줄로 꺾임 |
| 색 | 텍스트 #171717 / 보조 #5c5c5c, 브랜드 레드 **#c20000** (1차 버튼·세일가·별점), 링크는 레드 대신 텍스트색+밑줄 | 현재 링크색 #c16452(주황빛)과 버튼 레드가 충돌 |
| 버튼 | 1차: 레드 배경·흰 글자, 2차: 검정 테두리; **대소문자 규칙은 §7 Q3** | 전역 `button_style: caps` 는 사이트 전체 영향 |
| 세일 표기 | 취소선 정가 + 레드 판매가 + "Save $X (Y%)" 한 줄, 모서리 배지 없음 | 할인율·할인액 규칙 통일, ACCC 정가 표시 규정(정가는 실제 판매된 가격) |
| 재고·긴급성 | "LOW ON STOCK"은 실재고 ≤ 임계값일 때만, HIGH DEMAND 박스는 배송 문구와 동시 표시 금지(둘 중 하나) | 모순 제거 |
| 배지 | 신뢰 배지 3개 고정: 3-Year Warranty · 30-Day Returns · Free AU Shipping | 전 상품 공통 정책 |
| 간격 | 섹션 상하 80/48px(모바일), 카드 radius 8px, 버튼 sharp 유지 | 현재 섹션마다 20~80 혼재 |
| 이미지 | 갤러리 4:5, 스토리 이미지 3:2, 최대 2000px, WebP, alt 필수 | 성능·LCP |

### 4.4 신규 메타필드 (기존 33개에 추가, 정의만 먼저)

| 키 | 타입 | 용도 |
|---|---|---|
| `custom.hero_video` | url | S5 |
| `custom.feature_stories` | list.metaobject `feature_story` (title, body, image, video, layout) | S4 — 상품별 3~5개 |
| `custom.compare_products` | list.product_reference | S6 |
| `custom.press_quotes` | list.metaobject `press_quote` (quote, author, outlet, logo, url) | S7 |
| `custom.faq` | list.metaobject `faq_item` (question, answer) — 기존 faq-accordion 메타오브젝트 재사용 가능 여부 확인 | S9 |
| `custom.whats_in_box` | multi_line_text | S1 접이식 |
| `custom.color_scheme` | single_line (light/dark) | 게이밍 다크 스킴 |

## 5. 진행 단계

| 단계 | 작업 | 산출물 | 예상 |
|---|---|---|---|
| **P0 컨펌** | §7 결정 + 이 계획서 승인 | — | Alex |
| **P1 토큰·메인** | 전역 타이포/색/버튼 설정(드래프트), `custom-main-product` 개조(별점 1회·세일 규칙·배송/Afterpay·배지·갤러리 고정), 브레드크럼 컬렉션 경유 | M57·S100·X5S 3개 프리뷰 | 1~2일 |
| **P2 섹션 라이브러리** | S4 Feature story, S6 Compare, S2·S7 개조, 신규 메타필드·메타오브젝트 정의, 빈 값 처리 | `product.chair.json` v1 + 섹션 문서 | 2~3일 |
| **P3 콘텐츠 이관** | 27개 상품 × (하이라이트·스토리 3~5·FAQ·비교·영상·매뉴얼) 메타필드 입력. 이미지 카피 → 텍스트 추출(현재 템플릿 JSON 과 이미지에서). 상품군 순서: Doro 7 → M 8 → 게이밍 5 → 기본 5 → 데스크 2 | 상품별 이관 표(전/후) | 3~5일, 본사 자산 회신에 따라 변동 |
| **P4 검수** | 상품별 프리뷰 링크, 폰 체크리스트, Rich Results, Lighthouse(모바일), 리뷰·FAQ 스키마 1회 출력 확인, 기존 템플릿 대비 스크린샷 비교 | 검수표 + change report | 1~2일 |
| **P5 게시** | 상품 `templateSuffix` 를 `chair`/`desk` 로 일괄 전환(되돌리기 = 이전 값 복원, 표로 보관), 드래프트 테마 게시 후 24시간 모니터링, 구 템플릿 30일 뒤 삭제 | 게시 리포트 | 0.5일 |

이관 순서는 매출 비중이 큰 Doro·M57·M18 부터. 각 단계 끝마다 프리뷰 링크를 공유하고 다음 단계로 넘어간다.

## 6. 리스크와 되돌리기

- 콘텐츠 유실: 기존 템플릿 JSON 을 레포에 전부 보관(이미 `theme/` 에 20개 저장). 이미지 카피는 텍스트로 옮기되 원본 이미지도 유지.
- 전환율 변동: 상품군 단위로 나눠 게시(P5 를 3회로 분할 가능), Shopify 분석에서 PDP 전환율 전후 비교.
- 앱 제거 부작용: Specs&Compare 블록 제거 전 앱이 다른 페이지(비교 페이지)에서 쓰이는지 확인.
- 스키마 중복: 리뷰·FAQ 섹션을 1개로 줄이므로 해소. 게시 후 Rich Results 재검사.
- 되돌리기: 상품별 `templateSuffix` 원복만으로 즉시 이전 페이지로 복귀(테마 재게시 불필요).

## 7. 컨펌 필요 결정 (답을 주시면 P1 시작)

| # | 질문 | 권장 |
|---|---|---|
| Q1 | 템플릿을 의자 1개 + 데스크 1개로 갈지, 상품군별 3개(Doro / M·V / 게이밍)로 갈지 | **1+1**. 상품군 차이는 색 스킴·섹션 토글로 충분 |
| Q2 | 1차 버튼 색: 브랜드 레드 #c20000 vs 현재 검정 | **레드**(S100 방식). 2차 버튼 검정 테두리 |
| Q3 | 버튼 대소문자: 전역 대문자 유지 vs 문장형 | **문장형**("Add to cart") — 단, 전역 설정이라 헤더·컬렉션 버튼도 함께 바뀜 |
| Q4 | 세일 표기: "Save $290 (37%)" 한 줄 vs 모서리 "27% off" 배지 | **한 줄**, 배지 제거 |
| Q5 | HIGH DEMAND 박스 유지 여부와 조건 | 실제 지연 변형에만, 그때는 "1-5일" 문구 숨김 |
| Q6 | 이미지 카피 → 텍스트 이관 범위: 전 상품 vs 상위 10개 먼저 | **상위 10개 먼저**(Doro 7 + M57·M18·M57 Pro), 나머지는 스펙표·하이라이트만으로 1차 게시 |
| Q7 | 비교표 자동화(S6) 포함 여부 | 포함. C300 Pro↔V2, M57↔M57 Pro, M18↔M18 Pro, X5 4종 |
| Q8 | 리뷰 위젯: Loox 앱 섹션 단일화(커스텀 리뷰 섹션 삭제) | 삭제 |

추가로 필요한 것: 본사 이미지·영상 원본(요청 중), 게이밍 라인 다크 스킴 여부, Afterpay/Zip 문구 사용 승인(가맹 상태 확인).

## 8. 검증 방법 (각 단계 공통)

- 프리뷰: `https://sihoo.com.au/products/<handle>?preview_theme_id=187727839523`
- 폰 체크리스트: 첫 화면(제목·별점·가격·옵션·버튼), 스크롤 길이 ≤ 8화면, 접이식 동작, 스티키 ATC
- 코드 체크: Liquid 오류 0, JSON-LD Product/FAQ/Breadcrumb 각 1회, 이미지 alt 100%, 템플릿 custom_css 0
- 성능: Lighthouse 모바일 LCP ≤ 2.5s, CLS ≤ 0.1 (현재 M57 기준선은 `data/lighthouse-2026-09-07/`)
- 기록: `docs/sihoo-au-change-report-*.md` 에 상품별 전/후 표, 레포 커밋

---

부록 A. 분석 원자료: `theme/work-theme-187727839523/templates/` (20개 템플릿), 인벤토리 스크립트 결과는 §2.1 표로 정리. 스크린샷 4장(C500·S300·S100·C300 Pro·Shop 드롭다운)은 2026-09-08 라이브 기준.
