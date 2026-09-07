# SIHOO Australia 개선 작업 변경 리포트 — 2026-09-07 (1차 실행분)

> 범위: 본사(Doris) 스펙 회신과 무관하게 진행 가능한 항목 전부. 호주 시장 기준(AU 배송·30일 반품·3년 AU 보증·cm/kg·1300 번호)으로 작성.
> 원칙: **테마 변경은 미공개 작업 테마에만**(`WORK - SIHOO Symmetry 2026-09 fixes DRAFT`, ID 187727839523), **상품 데이터 변경은 라이브 스토어에 직접**(Shopify Admin 데이터는 테마와 무관하게 즉시 반영). 각 항목에 "무엇을 / 어떻게 / 왜 / 영향 / 되돌리기" 를 적었다.
> 상위 문서: [사이트 감사](./sihoo-au-vs-us-site-audit-2026-09.md) · [스펙 문서](./sihoo-au-product-spec-sheet-2026-09.md) · [본사 요청](./hq-spec-confirmation-request-2026-09.md)

---

## 0. 3줄 요약

1. **라이브에 이미 반영된 것(상품 데이터)**: 활성 27개 상품의 vendor `SIHOO` 통일, productType 3종 정규화, SEO 타이틀에서 "| Shop Now" 제거 및 60자 이내 재작성(19개), C300 Pro V2 설명·SEO 타이틀 신규, 이미지 alt 17장, `specs.*` 메타필드 정의 33개 생성 + 23개 상품 스펙 값 임포트.
2. **작업 테마(미공개)에 반영된 것**: canonical 절대 URL(A18), 타이틀 접미사 중복 제거(A1), og:image https(A10), 상품 JSON-LD 재작성(별점·AU 배송·반품 정책·brand·GTIN)(A3), FAQPage 스키마 3종 섹션(A7), BreadcrumbList 전 템플릿(A8), theme.liquid 하드코딩 리다이렉트·EOFY 스키마 제거(A9), Podium 챗 상호작용 후 로드(A20), 카드 별점 표시 ON(A16), 메타필드 기반 스펙 표 섹션 신설 + 플래그십 3종 템플릿 삽입(B5-lite).
3. **미착수/보류**: 컬렉션 히어로 CLS(A19, 트레이스 필요), reCAPTCHA 제거(Admin 스팸 설정 결정 필요), hreflang(A14, 본사 상호 링크 필요), Search & Discovery 필터(A15, 앱 UI 수동), 초안 상품 21개 아카이브(A12, 머천다이징 결정), S100·M59AS·데스크 스펙(본사 회신 대기).

**라이브 반영 방법**: Shopify Admin → Online Store → Themes → `WORK - SIHOO Symmetry 2026-09 fixes DRAFT` → Publish. 게시 전 프리뷰(`https://sihoo.com.au/?preview_theme_id=187727839523`)에서 §5 체크리스트 확인. 되돌리기는 직전 LIVE 테마 재게시(테마 파일은 LIVE 에 손대지 않았음).

---

## 1. 라이브 스토어에 직접 반영된 변경 (상품 데이터)

### 1.1 vendor · productType · SEO 타이틀 정규화 (A5 · A1) — 27개 상품

- **무엇을**: vendor 를 `Sihoo`(15)·`SIHOO Australia`(15) → `SIHOO` 로 통일(Desker 2종 제외). productType 을 `Ergonomics Office Chair`(오타)·`Office Chairs` → `Ergonomic Office Chair`, `Gaming Chairs` → `Gaming Chair`, `Office Desk` → `Standing Desk` 로 정규화. SEO 타이틀 끝의 `| Shop Now` 제거(19개), 60자 초과 9개 재작성, C300 Pro V2 는 비어 있던 SEO 타이틀 신규 입력.
- **어떻게**: Admin GraphQL `productUpdate` 27건(변경 전 값은 아래 표에 보존).
- **왜**: (1) 상품 JSON-LD `brand.name` 이 상품마다 `Sihoo`/`SIHOO Australia` 로 달라 검색엔진·AI 가 같은 브랜드로 묶지 못함(GEO 엔티티 일관성). (2) productType 은 Google Merchant·Shop app·필터의 카테고리 값인데 오타 값이 32개에 박혀 있었음. (3) 테마가 SEO 타이틀 뒤에 `| SIHOO Australia` 를 무조건 붙여 "…| Shop Now | SIHOO Australia"(70자+)가 되어 SERP 에서 잘리고, CTA 문구가 브랜드보다 앞에 왔음.
- **영향 확인**: 스마트 컬렉션 규칙은 전부 `TITLE contains` / `VARIANT_INVENTORY` 기반이라 vendor·type 변경으로 컬렉션 구성이 바뀌지 않음(사전 조회로 확인). 라이브 테마는 아직 구 접미사 로직이므로 `<title>` 최종 형태는 작업 테마 게시 후 표의 마지막 열처럼 됨(그 전까지는 "…| SIHOO Australia" 가 한 번 더 붙지만 `Shop Now` 는 이미 사라짐).
- **되돌리기**: 아래 표의 "전" 값을 같은 mutation 으로 재입력.

| 상품 | vendor 전 → 후 | productType 전 → 후 | SEO 타이틀 전 → 후 | 렌더 `<title>` (길이) |
|---|---|---|---|---|
| SIHOO M18 Ergonomic Office Chair | Sihoo → SIHOO | Ergonomics Office Chair → Ergonomic Office Chair | SIHOO M18 Ergonomic Office Chair \| Shop Now → **SIHOO M18 Ergonomic Office Chair** | SIHOO M18 Ergonomic Office Chair (32) |
| Sihoo M57 Ergonomic Office Chair | Sihoo → SIHOO | Ergonomics Office Chair → Ergonomic Office Chair | Sihoo M57 Ergonomic Office Chair in Australia \| Shop Now → **Sihoo M57 Ergonomic Office Chair in Australia** | Sihoo M57 Ergonomic Office Chair in Australia (45) |
| Sihoo V1 Ergonomic Office Chair | Sihoo → SIHOO | Ergonomics Office Chair → Ergonomic Office Chair | V1 Ergonomic Chair in Australia \| Shop Now → **V1 Ergonomic Chair in Australia** | V1 Ergonomic Chair in Australia \| SIHOO Australia (49) |
| SIHOO M16 Ergonomics Office Chair | Sihoo → SIHOO | Ergonomics Office Chair → Ergonomic Office Chair | Sihoo M16 Ergonomic Chair in Australia \| Shop Now → **Sihoo M16 Ergonomic Chair in Australia** | Sihoo M16 Ergonomic Chair in Australia (38) |
| SIHOO M56 Ergonomics Office Chair | Sihoo → SIHOO | Ergonomics Office Chair → Ergonomic Office Chair | Sihoo M56 Ergonomic Chair in Australia \| Shop Now → **Sihoo M56 Ergonomic Chair in Australia** | Sihoo M56 Ergonomic Chair in Australia (38) |
| SIHOO M59 Ergonomics Office Chair | Sihoo → SIHOO | Ergonomics Office Chair → Ergonomic Office Chair | M59 Ergonomic Chair in Australia \| Shop Now → **M59 Ergonomic Chair in Australia** | M59 Ergonomic Chair in Australia \| SIHOO Australia (50) |
| Sihoo M57 Ergonomic Office Chair with  | Sihoo → SIHOO | Ergonomics Office Chair → Ergonomic Office Chair | M57 Ergonomic Chair in Australia with Footrest → **Sihoo M57 Ergonomic Chair with Footrest in Australia** | Sihoo M57 Ergonomic Chair with Footrest in Australia (52) |
| Sihoo VIto M90 Ergonomic Office Chair | Sihoo → SIHOO | Office Chairs → Ergonomic Office Chair | Vito M90 Ergonomic Chair in Australia \| Shop Now → **Vito M90 Ergonomic Chair in Australia** | Vito M90 Ergonomic Chair in Australia \| SIHOO Australia (55) |
| Sihoo A3 DORO-C300 Pro Ergonomic Offic | SIHOO Australia → SIHOO | Ergonomics Office Chair → Ergonomic Office Chair | Sihoo DORO C300 Pro Ergonomic Chair in Australia \| Shop Now → **Sihoo DORO C300 Pro Ergonomic Chair in Australia** | Sihoo DORO C300 Pro Ergonomic Chair in Australia (48) |
| Desker Height Adjustable Dual Motor 3  | Desker → Desker | Office Desk → Standing Desk | Height Adjust Dual Motor 3 Stage Electric Sit Stand Desk → **Desker Dual Motor Sit Stand Desk \| SIHOO Australia** | Desker Dual Motor Sit Stand Desk \| SIHOO Australia (50) |
| SIHOO M76 Ergonomics Office Chair | Sihoo → SIHOO | Ergonomics Office Chair → Ergonomic Office Chair | M76 Ergonomic Chair in Australia \| Shop Now → **M76 Ergonomic Chair in Australia** | M76 Ergonomic Chair in Australia \| SIHOO Australia (50) |
| Sihoo VIto M90 Ergonomic Office Chair  | Sihoo → SIHOO | Office Chairs → Ergonomic Office Chair | Vito M90 Ergonomic Chair with Footrest \| Shop Now → **Vito M90 Ergonomic Chair with Footrest** | Vito M90 Ergonomic Chair with Footrest \| SIHOO Australia (56) |
| Carbon Fibre Dual Motor 3 Stage Electr | Desker → Desker | Office Desk → Standing Desk | Carbon Fibre Dual Motor 3 Stage Electric Sit Stand Desk → **Desker Carbon Fibre Sit Stand Desk \| SIHOO Australia** | Desker Carbon Fibre Sit Stand Desk \| SIHOO Australia (52) |
| Sihoo DORO-S300 Ergonomic Office Chair | SIHOO Australia → SIHOO | Ergonomics Office Chair → Ergonomic Office Chair | Sihoo Doro S300 Ergonomic Chair \| German Design Award → **Sihoo Doro S300 Ergonomic Chair \| German Design Award** | Sihoo Doro S300 Ergonomic Chair \| German Design Award (53) |
| Sihoo A3 DORO-C100 Ergonomic Office Ch | SIHOO Australia → SIHOO | Ergonomics Office Chair → Ergonomic Office Chair | Sihoo DORO-C100 Ergonomic Chair in Australia \| Shop Now → **Sihoo DORO-C100 Ergonomic Chair in Australia** | Sihoo DORO-C100 Ergonomic Chair in Australia (44) |
| XALLKING X5 Pro Ergonomic Gaming Chair | SIHOO Australia → SIHOO | Gaming Chairs → Gaming Chair | Xallking X5Pro Gaming Chair \| Ergonomic Gaming Chair → **XALLKING X5 Pro Ergonomic Gaming Chair \| SIHOO Australia** | XALLKING X5 Pro Ergonomic Gaming Chair \| SIHOO Australia (56) |
| Sihoo DORO-C500 Ergonomic Office Chair | SIHOO Australia → SIHOO | Ergonomics Office Chair → Ergonomic Office Chair | DORO-C500 Ergonomic Chair in Australia \| Shop Now → **DORO-C500 Ergonomic Chair in Australia** | DORO-C500 Ergonomic Chair in Australia \| SIHOO Australia (56) |
| Sihoo M57 Pro Ergonomic Office Chair | SIHOO Australia → SIHOO | Ergonomics Office Chair → Ergonomic Office Chair | M57 Pro Ergonomic Chair in Australia \| Shop Now → **M57 Pro Ergonomic Chair in Australia** | M57 Pro Ergonomic Chair in Australia \| SIHOO Australia (54) |
| Sihoo M18 Pro Ergonomic Office Chair | SIHOO Australia → SIHOO | Ergonomics Office Chair → Ergonomic Office Chair | Sihoo M18 Pro Ergonomic Chair \| $369, 4D Armrests → **Sihoo M18 Pro Ergonomic Chair \| $369, 4D Armrests** | Sihoo M18 Pro Ergonomic Chair \| $369, 4D Armrests (49) |
| Sihoo M57 Pro Ergonomic Office Chair w | SIHOO Australia → SIHOO | Ergonomics Office Chair → Ergonomic Office Chair | M57 Pro Ergonomic Chair with Built in Footrest → **Sihoo M57 Pro Ergonomic Chair with Footrest in Australia** | Sihoo M57 Pro Ergonomic Chair with Footrest in Australia (56) |
| XALLKING X5C Ergonomic Gaming Chair | SIHOO Australia → SIHOO | Gaming Chairs → Gaming Chair | Xallking X5C Gaming Chair \| Ergonomic Gaming Chair → **XALLKING X5C Ergonomic Gaming Chair \| SIHOO Australia** | XALLKING X5C Ergonomic Gaming Chair \| SIHOO Australia (53) |
| XALLKING X5F Ergonomic Gaming Chair | SIHOO Australia → SIHOO | Gaming Chairs → Gaming Chair | Xallking X5F Gaming Chair \| Ergonomic Gaming Chair → **XALLKING X5F Ergonomic Gaming Chair \| SIHOO Australia** | XALLKING X5F Ergonomic Gaming Chair \| SIHOO Australia (53) |
| XALLKING X5S Ergonomic Gaming Chair | SIHOO Australia → SIHOO | Gaming Chairs → Gaming Chair | Xallking X5S Gaming Chair \| Ergonomic Gaming Chair → **XALLKING X5S Ergonomic Gaming Chair \| SIHOO Australia** | XALLKING X5S Ergonomic Gaming Chair \| SIHOO Australia (53) |
| XALLKING X3PRO Premium Ergonomic Gamin | SIHOO Australia → SIHOO | Gaming Chairs → Gaming Chair | Xallking X3Pro Gaming Chair \| Ergonomic Gaming Chair → **XALLKING X3 Pro Premium Gaming Chair \| SIHOO Australia** | XALLKING X3 Pro Premium Gaming Chair \| SIHOO Australia (54) |
| Sihoo DORO S100 Ergonomic Office Chair | SIHOO Australia → SIHOO | Ergonomics Office Chair → Ergonomic Office Chair | DORO-S100 Ergonomic Office Chair \| Shop Now → **DORO-S100 Ergonomic Office Chair** | DORO-S100 Ergonomic Office Chair \| SIHOO Australia (50) |
| Sihoo M59AS Ergonomic Office Chair | SIHOO Australia → SIHOO | Ergonomics Office Chair → Ergonomic Office Chair | Sihoo M59AS Ergonomic Office Chair \| $349 → **Sihoo M59AS Ergonomic Office Chair \| $349** | Sihoo M59AS Ergonomic Office Chair \| $349 (41) |
| Sihoo DORO-C300 Pro V2 Ergonomic Offic | SIHOO Australia → SIHOO | Ergonomics Office Chair → Ergonomic Office Chair | (없음) → **Sihoo Doro C300 Pro V2 Ergonomic Office Chair in Australia** | Sihoo Doro C300 Pro V2 Ergonomic Office Chair in Australia (58) |

### 1.2 C300 Pro V2 상품 설명 (A2)

- **무엇을**: 설명이 비어 있던 플래그십 C300 Pro V2 에 4문단(포지셔닝 → 핵심 사양 cm/kg → 소재·인증 → AU 배송·반품·보증·1300 번호) 설명 입력.
- **왜**: 설명이 비면 상품 JSON-LD `description` 이 `""` 로 나가고, Shop app·UCP `search_catalog`·Google Merchant·AI 답변이 상품을 설명할 근거가 없음. 스펙은 이미 확정된 값(150~190cm, 150kg, 46~56.7cm 시트 높이, 8D 팔걸이, 105/120/135°)만 사용.
- **되돌리기**: 설명을 비우면 원상태(원래 비어 있었음). S100·M59AS 설명은 본사 스펙 확인 후 게시(초안은 스펙 문서 §5).

### 1.3 이미지 alt 텍스트 (A11) — 17장

- **무엇을**: alt 가 빈 갤러리 이미지(C300 Pro V2 16장, V1 1장)에 `"{상품명} - {변형 색상} - view N"` 형식으로 입력. 나머지 25개 상품은 이미 alt 가 있었음.
- **왜**: 이미지 검색·접근성·AI 이미지 이해. 특히 C300 Pro V2 는 갤러리 전체가 alt 없이 노출되고 있었음.
- **되돌리기**: 해당 미디어 alt 를 빈 값으로.

### 1.4 `specs.*` 메타필드 정의 33개 + 스펙 값 임포트 (B1 · B2)

- **무엇을**: 스펙 문서 §2 스키마대로 Products 메타필드 정의 생성 — `specs.*` 26개(타입 지정: number_integer/decimal, list.number_integer, boolean, text; 스토어프론트 읽기 허용; `family`·`max_load_kg`·`armrest_type` 은 스마트 컬렉션 조건·어드민 필터 가능) + `custom.*` 7개(highlights, best_for, install_video, adjust_video, manual_pdf, related_articles, last_updated). 이어서 AU 데이터가 있는 23개 상품에 정규화된 값을 `metafieldsSet` 으로 임포트(S100·M59AS·데스크 2종 제외 — 본사 확인 대기).
- **어떻게**: `sihoo-au-product-specs-import.csv` 의 값을 그대로 사용, `/` 같은 빈 값은 제외, C300 Pro 리클라인 `1105°` 오타는 105° 로 정정, 원문 자유 텍스트(팔걸이·럼바·헤드레스트·메커니즘·소재)는 `*_detail` 필드에 보존. `specs.data_source`/`specs.needs_confirmation`(내부용, 스토어프론트 비공개)에 출처와 확인 필요 사항을 함께 저장.
- **왜**: 기존 `sc_attributes.*` 는 앱이 만든 자유 텍스트라 필터·스키마·비교표·사이즈 가이드에 못 쓰고, 어떤 템플릿도 렌더하지 않았음. 타입이 지정된 메타필드는 Search & Discovery 필터(최대 하중·권장 신장·팔걸이), 스마트 컬렉션("150kg 이상"), 템플릿 스펙 표, 향후 JSON-LD `additionalProperty` 의 단일 소스가 됨.
- **영향**: 라이브 테마는 `specs.*` 를 읽지 않으므로 고객 화면 변화 없음. 작업 테마의 스펙 표 섹션(§2.10)만 읽음.
- **되돌리기**: 정의 삭제 시 값도 함께 삭제됨(Settings → Custom data). `sc_attributes.*` 는 손대지 않았음.

**실행 결과(2026-09-07)**

- 스펙 값 임포트: 23개 상품 전부 `specs.*` 26키 저장 완료. 4개 상품(S300·C100·C500·C300 Pro V2)은 메타필드가 26개라 `metafieldsSet` 25개 제한에 걸려 13+13 으로 분할 재실행, 오류 0. 재조회로 26키 존재 확인.
- 이미지 alt: C300 Pro V2 16장 + V1 1장(영상) 갱신, 오류 0.
- `settings_data.json`: `current.enable_product_reviews_collection` 만 `false → true`, 나머지 바이트 동일(diff 확인).
- 템플릿: `product.c300-pro-2.json`·`product.m57.json`·`product.m-18.json` 의 `sections` 에 `specs_table`(type `specs-table`) 추가, `order` 에서 메인 상품 섹션 바로 뒤에 삽입, 기존 섹션 바이트 동일. m57·m-18 에서 바로 뒤에 있던 Specs&Compare 앱 섹션(같은 데이터를 한 번 더 표시)은 중복을 피하기 위해 `disabled: true` 로 비활성화 완료 — m57 섹션 `172649452298bf6fcf`, m-18 섹션 `1786558889ff94005e`, 두 파일 모두 해당 키 1개만 변경(구조 diff 확인, userErrors 없음). c300-pro-2 는 이미 비활성이라 손대지 않음.
- 프리뷰 확인: M57·C300 Pro V2·M18 PDP 에 스펙 표 렌더(핏 가이드 문장 포함), Liquid 오류 0. 컬렉션 카드에 별점 16개 노출.


---

## 2. 작업 테마(미공개)에 반영된 변경

| # | 파일 | 변경 | 왜 (호주 시장·SEO·GEO 관점) |
|---|---|---|---|
| 2.1 A18 | `snippets/canonical-urls.liquid` | 컬렉션 분기를 `{{ shop.url }}{{ collection.url }}` 절대 URL 로 | Lighthouse SEO 감사에서 "Is not an absolute URL" 실패. 상대 canonical 은 Google 이 무시하거나 오해석 → 컬렉션 14개가 canonical 없는 것과 같았음(필터·정렬 URL 중복 인덱스 위험) |
| 2.2 A1 | `snippets/doc-head-core.liquid` | 접미사 조건을 대소문자 무시 `contains 'sihoo'` 로, `<title>` 을 한 줄로 출력 | 종전엔 정확히 "SIHOO Australia" 가 없으면 무조건 붙여 "Sihoo M57 … \| Shop Now \| SIHOO Australia" 가 됨. 이제 브랜드가 이미 있으면 안 붙이고, 없으면(M59·V1·M76 등) 한 번만 붙음 → 전 상품 32~58자 |
| 2.3 A10 | `snippets/doc-head-social.liquid` | `og:image` 를 `https:` 로 | `http:` 이미지는 일부 SNS·메신저 미리보기에서 경고/차단 |
| 2.4 A3 | `snippets/structured-data-product.liquid` | `{{ product \| structured_data }}` 대신 직접 작성한 ProductGroup JSON-LD: `aggregateRating`(reviews.rating/rating_count → Loox 동기값), `brand` 고정(SIHOO/Desker), `description`, 변형별 `Offer` 에 `priceValidUntil`·`itemCondition`·`seller`·**`shippingDetails`(AU, 무료, 처리 0~1일 + 배송 1~7일)**·**`hasMerchantReturnPolicy`(AU, 30일, 무료 반품, 반품 링크)**, `gtin`(바코드 있을 때), `color`, `variesBy` | Google 머천트 리스팅 리치 결과는 배송·반품 정보를 Offer 에 요구. M57(885건)·M18(346건) 별점이 서버 HTML 에 없어 리치 스니펫을 못 받고 있었음. brand 가 상품마다 달랐음 |
| 2.5 A3 | `snippets/structured-data-header.liquid` | Organization 의 `returnPolicyCategory` 를 유효 enum(`MerchantReturnFiniteReturnWindow`)으로 정정, `applicableCountry: AU`·`areaServed`·`availableLanguage` 추가 | 종전 값 `ReturnShippingFees` 는 `returnFees` 용 enum 이라 검증기에서 무효 |
| 2.6 A7 | `sections/faq.liquid`, `sections/faq-accordion.liquid`, `sections/collapsible-tabs.liquid` | 보이는 FAQ 블록/메타오브젝트에서 그대로 FAQPage JSON-LD 생성(collapsible-tabs 는 `page.faq` 템플릿에서만) | PDP(C300 Pro V2 5문항, M18 5문항)·홈(6문항)·비교 페이지·FAQ 페이지(34문항)에 스키마가 없었음. 콘텐츠와 스키마가 같은 소스라 어긋날 수 없음. US 사이트는 이미 PDP·컬렉션·홈에 FAQPage 보유 |
| 2.7 A8 | `snippets/structured-data-breadcrumbs.liquid`(신규, `theme.liquid` head 에서 렌더), `snippets/breadcrumbs.liquid`(JSON-LD 출력 제거) | 상품·컬렉션·블로그·아티클·페이지 전 템플릿에 BreadcrumbList 1개 보장. 상품은 컬렉션 경유 시 Home > 컬렉션 > 상품 | 종전엔 Symmetry 기본 `main-product` 를 쓰는 S300·X5 만 BreadcrumbList 가 있고, 신형 `custom-main-product` PDP·모든 컬렉션·블로그엔 없었음. 보이는 브레드크럼 스니펫에서 JSON-LD 를 떼어 중복 출력 방지 |
| 2.8 A9 | `layout/theme.liquid` | `/pages/commercial/*` 6개 meta-refresh 블록과 EOFY 2026 ItemList 하드코딩 제거(4KB 감량). `structured-data-breadcrumbs` 렌더 추가 | 동일 경로의 301 URL Redirect 6개가 이미 Admin 에 존재(조회로 확인)해 완전 중복. 만료 프로모 스키마가 레이아웃에 박혀 모든 페이지 코드에 실려 있었음. 테마 업그레이드 시 유실될 하드코딩 제거 |
| 2.9 A20 | `snippets/podium-widget.liquid` | 모든 템플릿에서 실제 상호작용(포인터·키·터치·휠) 후에만 로드; 4초 유휴 자동 로드 제거 | 비홈 템플릿에서 4초 후 자동 로드되며 PDP 부트업 1.5s + CLS 0.06 을 CWV 창 안에 만들었음. 실제 고객은 첫 제스처에 로드되므로 채팅 노출 손실 없음 |
| 2.10 B5-lite | `sections/specs-table.liquid`(신규) + `product.c300-pro-2.json`·`product.m57.json`·`product.m-18.json` 에 섹션 삽입 | `specs.*` 만 읽는 스펙 표: 핏 가이드 문장("Recommended for users 150–190 cm, rated to 150 kg. Seat height 43–53 cm suits standard 72–75 cm Australian desks"), 16개 행, 리소스(설치·조정 영상·매뉴얼 PDF는 메타필드 입력 시 자동 노출), 3년 AU 보증 표기. 스펙이 없는 상품은 아무것도 렌더하지 않음 | 텍스트 표는 AI 검색·비교 답변이 인용 가능한 형태. 미터법 우선. 이 섹션이 단일 상품 템플릿 `product.chair.json` 의 첫 구성요소 |
| 2.11 A16 | `config/settings_data.json` | `enable_product_reviews_collection: true` | Symmetry 카드가 `reviews.rating` 을 읽어 별점·리뷰수를 표시하는 내장 옵션이 꺼져 있었음. US 카드는 별점 노출 |
| 2.12 C0 | 8개 파일 동기화 | 작업 테마를 LIVE(2026-09-06) 와 동일하게 맞춘 뒤 위 변경 적용 | 게시 시 LIVE 의 최근 설정·다이제스트 피드가 유실되지 않도록 |

---

## 3. 프리뷰 검증 결과 (작업 테마, 2026-09-07)

| 페이지 | `<title>` | canonical | JSON-LD | Liquid 오류 |
|---|---|---|---|---|
| 홈 | `Ergonomic Chairs in Australia \| SIHOO Australia` | 절대 | Organization, WebSite, **FAQPage(6)** | 0 |
| M57 PDP | `Sihoo M57 Ergonomic Office Chair in Australia` (45자, 접미사 중복 없음) | 절대 | **BreadcrumbList**, Organization, **ProductGroup(rating 4.6 / 885, brand SIHOO, 설명 1,666자, 변형 3, 배송·반품 포함)** | 0 |
| C300 Pro V2 PDP | `Sihoo Doro C300 Pro V2 Ergonomic Office Chair in Australia` | 절대 | BreadcrumbList, Organization, ProductGroup(rating 4.6 / 5, 설명 1,147자), **FAQPage(5)** | 0 |
| 컬렉션 ergonomic-chairs | 정상 | **절대 URL** (버그 수정) | ItemList, **BreadcrumbList**, Organization | 0 |
| FAQ 페이지 | 정상 | 절대 | BreadcrumbList, Organization, FAQPage ×16 섹션(34문항) | 0 |
| 블로그 아티클 | 정상 | 절대 | **BreadcrumbList(3단)**, Organization, FAQPage(7), Article | 0 |
| S300 PDP(기본 main-product) | 정상 | 절대 | BreadcrumbList **1개**(중복 없음), ProductGroup(rating 4.6 / 75) | 0 |

og:image 는 모든 페이지 `https:`. Podium 로더는 모든 페이지에서 상호작용 전 스크립트 미삽입.

---

## 4. 하지 않은 것과 이유

| 항목 | 상태 | 이유 / 다음 행동 |
|---|---|---|
| A19 컬렉션 히어로 CLS 0.496 | 미착수 | 원인 요소(`image-overlay height--fixed`)는 알지만 실제 이동 원인(폰트 스왑·오버레이 텍스트·이미지 지연)은 Lighthouse 트레이스가 필요. 작업 테마 게시 후 PSI 트레이스로 확정 |
| A20 reCAPTCHA 189KB | 미착수 | Shopify 가 폼 있는 페이지에 자동 삽입(푸터 뉴스레터 폼). Admin → Preferences → Spam protection 설정 또는 뉴스레터를 Klaviyo 폼으로 교체하는 운영 결정 필요 |
| A12 초안 상품 21개 아카이브·잔재 템플릿 삭제 | 미착수 | FURSYS/SIDIZ/Desker 초안은 머천다이징 판단. 아카이브 후 `product.automizely.*` 12종 삭제 가능 |
| A14 hreflang | 미착수 | US 측 역링크 없이는 무효. 본사 요청에 포함됨 |
| A15 필터 | 미착수 | Search & Discovery 앱은 API 가 없어 Admin UI 에서 `specs.max_load_kg`·`user_height_max_cm`·`armrest_type`·`family` 를 필터로 등록 |
| FAQ 페이지 FAQPage 16블록 | 완료(주의) | 섹션마다 1블록. Google 은 허용하지만 1블록 통합이 이상적 → 테마 업그레이드 시 FAQ 페이지 섹션 통합 |
| A2 S100·M59AS 설명, B2 나머지 4개 스펙 | 대기 | 본사 회신(목표 09-21) |

---

## 5. 게시 전 체크리스트 (Alex)

1. 프리뷰 URL 로 홈·M57·C300 Pro V2·컬렉션·FAQ·블로그 1개씩 육안 확인(레이아웃 변화는 스펙 표 3개 PDP 와 카드 별점뿐).
2. Google Rich Results Test 에 M57 프리뷰 HTML 붙여넣기 → Product(머천트 리스팅)·Breadcrumb·FAQ 통과 확인.
3. 게시 → 24시간 후 Search Console 커버리지·"상품 스니펫" 리포트 확인, PSI 로 §6.3 기준선 재측정(A22).
4. 게시 후 `docs/research/sihoo-au-vs-us-site-audit-2026-09.md` §8 상태를 "라이브" 로 갱신.

---

## 6. 정확히 무엇이 "추가"되고 무엇이 "변경"되었나

### 6.1 추가 (이전에 없던 것)

| 구분 | 항목 | 위치 |
|---|---|---|
| 테마 파일(신규) | `snippets/structured-data-breadcrumbs.liquid` — 전 템플릿 BreadcrumbList JSON-LD | 작업 테마 · 이 레포 `theme/work-theme-187727839523/` |
| 테마 파일(신규) | `sections/specs-table.liquid` — `specs.*` 메타필드 스펙 표 + 핏 가이드 | 〃 |
| 테마 파일(신규) | `snippets/spec-num.liquid` — 숫자 출력 보조(51.0 → 51) | 〃 |
| 템플릿 섹션(추가) | `product.c300-pro-2.json`·`product.m57.json`·`product.m-18.json` 에 `specs_table` 섹션 1개씩 | 〃 |
| 스키마 출력(추가) | FAQPage JSON-LD (faq · faq-accordion · collapsible-tabs 섹션), Offer 별 `shippingDetails`·`hasMerchantReturnPolicy`·`priceValidUntil`·`itemCondition`·`seller`·`gtin`·`color`, ProductGroup `aggregateRating`·`description`·`variesBy` | 작업 테마 렌더 결과 |
| Admin 데이터(추가) | 메타필드 정의 33개 (`specs.*` 26 + `custom.*` 7) | 라이브 스토어 Settings → Custom data → Products |
| Admin 데이터(추가) | 23개 상품 × 최대 26개 `specs.*` 값 | 라이브 상품(고객 화면엔 작업 테마 게시 전까지 미노출) |
| Admin 데이터(추가) | C300 Pro V2 상품 설명(4문단), C300 Pro V2 SEO 타이틀, 이미지 alt 17장 | 라이브 상품 |
| 문서(신규) | 감사·스펙 문서·본사 요청·변경 리포트, 임포트 CSV, 본사 검토 엑셀, Lighthouse 결과 7개, 실행한 mutation 원문 | 이 레포 `docs/`, `data/` |

### 6.2 변경 (있던 것을 고친 것)

| 구분 | 항목 | 전 → 후 |
|---|---|---|
| 테마 | `snippets/canonical-urls.liquid` | 컬렉션 canonical 상대 경로 → 절대 URL |
| 테마 | `snippets/doc-head-core.liquid` | 접미사 조건 정확 문자열 → 대소문자 무시 `sihoo` 포함 여부, `<title>` 다중행 → 단일행 |
| 테마 | `snippets/doc-head-social.liquid` | `og:image` http → https |
| 테마 | `snippets/structured-data-product.liquid` | Shopify 기본 `structured_data` 1줄 → 직접 작성 ProductGroup(위 추가 항목 포함) |
| 테마 | `snippets/structured-data-header.liquid` | 반품 정책 enum 오류 값 → 유효 값, `applicableCountry: AU` 등 추가 |
| 테마 | `snippets/breadcrumbs.liquid` | 보이는 브레드크럼 + JSON-LD → 보이는 브레드크럼만(JSON-LD 는 신규 스니펫으로 이동) |
| 테마 | `snippets/podium-widget.liquid` | 비홈 4초 유휴 자동 로드 → 전 페이지 상호작용(포인터·키·터치·휠) 후 로드 |
| 테마 | `sections/faq.liquid`, `sections/faq-accordion.liquid`, `sections/collapsible-tabs.liquid` | 시각 마크업 동일 + JSON-LD 출력 추가 |
| 테마 | `layout/theme.liquid` | `/pages/commercial/*` meta-refresh 6블록·EOFY ItemList 제거, `structured-data-breadcrumbs` 렌더 1줄 추가 (16.6KB → 12.6KB) |
| 테마 | `config/settings_data.json` | `enable_product_reviews_collection` false → true (그 외 동일) |
| 템플릿 | `product.m57.json`, `product.m-18.json` | Specs&Compare 앱 섹션 `disabled` false → true (완료·확인됨) |
| Admin 데이터 | 27개 상품 vendor / productType / SEO 타이틀 | §1.1 표 |

### 6.3 삭제된 것

- `layout/theme.liquid` 안의 하드코딩 리다이렉트 6블록과 EOFY 2026 ItemList 스크립트(동일 기능은 Admin URL Redirect 6개가 이미 수행).
- `snippets/breadcrumbs.liquid` 안의 JSON-LD 캡처 블록(신규 스니펫으로 대체).

### 6.4 손대지 않은 것

- LIVE 테마(`LIVE - SIHOO (Symmetry)`) 파일 전부, `sc_attributes.*` 메타필드, 컬렉션·규칙, 초안 상품 21개, 리다이렉트, robots.txt.liquid, 다른 마켓/도메인.

---

## 7. 프리뷰 링크 (작업 테마, 브라우저에서 바로 열림 · 게시 전 상태)

| 페이지 | 링크 | 확인 포인트 |
|---|---|---|
| 홈 | https://sihoo.com.au/?preview_theme_id=187727839523 | 타이틀 한 줄, FAQ 스키마, 카드 별점 |
| M57 PDP | https://sihoo.com.au/products/sihoo-m57-ergonomic-office-chair?preview_theme_id=187727839523 | 스펙 표 + 핏 가이드, ProductGroup 별점 4.6/885, 브레드크럼 |
| C300 Pro V2 PDP | https://sihoo.com.au/products/sihoo-a3-doro-c300-pro-v2-ergonomic-office-chair?preview_theme_id=187727839523 | 새 설명, 스펙 표, FAQPage(5) |
| M18 PDP | https://sihoo.com.au/products/sihoo-m18-ergonomics-task-office-chair?preview_theme_id=187727839523 | 스펙 표, 앱 스펙 표 중복 여부 |
| 컬렉션 | https://sihoo.com.au/collections/ergonomic-chairs?preview_theme_id=187727839523 | canonical 절대 URL, 카드 별점 16개, 브레드크럼 |
| FAQ 페이지 | https://sihoo.com.au/pages/faq?preview_theme_id=187727839523 | FAQPage 16블록 |
| 블로그 아티클 | https://sihoo.com.au/blogs/reviews/ergonomic-chair-for-tall-people?preview_theme_id=187727839523 | 3단 브레드크럼 |

한 번 열면 프리뷰 쿠키가 잡혀 이후 클릭한 페이지도 작업 테마로 보입니다. 스키마 확인은 페이지 소스의 `application/ld+json` 또는 Google Rich Results Test 에 URL 대신 소스 붙여넣기(프리뷰는 크롤러가 못 봄).
