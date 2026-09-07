# SIHOO Australia 제품별 스펙·설명 문서 및 메타필드 입력 시트 (2026-09)

> 목적: 상품페이지 템플릿 통합(`product.chair.json`) 전에 **활성 상품 27개의 정확한 스펙과 설명을 한 곳에 문서화**하고, 템플릿이 읽을 **정규화 메타필드 스키마**와 **Matrixify 임포트 CSV** 를 준비한다.
> 원천: Shopify Admin API(2026-09-07 기준 `sc_attributes.*` 메타필드 22키·변형·미디어·설명), 각 상품 템플릿 JSON 에 박힌 스펙 텍스트, US 스토어(www.sihoo.com) 스펙 표(inch/lbs → cm/kg 환산). 
> 동반 파일: [`data/sihoo-au-product-specs-import.csv`](../data/sihoo-au-product-specs-import.csv) (Matrixify Products 시트 형식, 27행). 상위 감사 문서: [sihoo-au-vs-us-site-audit-2026-09.md](./sihoo-au-vs-us-site-audit-2026-09.md).

---

## 0. 3줄 요약

1. **스펙 데이터는 생각보다 많이 있다.** 활성 27개 중 23개가 `sc_attributes` 15개 핵심 키를 모두 보유. 문제는 (a) 어떤 템플릿도 이 메타필드를 렌더링하지 않고, (b) 값이 자유 텍스트(단위 혼용·중국어 구두점·오타 `1105°`)라 필터·스키마·비교표에 못 쓴다는 것.
2. **완전 공백은 4개** — DORO S100, M59AS(메타필드 0 + 설명 0), Desker 데스크 2종(의자 스키마 미적용). C300 Pro V2 는 스펙은 있으나 설명·SEO 타이틀·alt 가 전부 비어 있음.
3. **작업 순서**: §2 정규화 스키마 `specs.*` 생성 → CSV 검토(§4 확인 목록 해소) → Matrixify 임포트 → 템플릿이 `specs.*` 만 읽도록 구현 → `sc_attributes` 는 앱 의존 제거 후 폐기.

---

## 1. 현황 요약표 (활성 27개)

| 상품 | 패밀리 | 스펙 키 15개 | 설명 단어 | 영상 | alt | SEO 타이틀 | FAQ 연결 | 리뷰 | US 대조 |
|---|---|---|---|---|---|---|---|---|---|
| DORO-C300 Pro V2 | Doro | 15/15 | **0** | 0 | **0/16** | **없음** | ✗ | — | ✓ 일치 |
| DORO C300 Pro | Doro | 15/15 | 308 | 0 | 34/34 | ✓ | ✗ | 4.6 (174) | ✓ (리클라인 오타) |
| DORO-C500 | Doro | 15/15 | 226 | 0 | 15/15 | ✓ | ✗ | — | US 미판매 |
| DORO-S300 | Doro | 15/15 | 325 | 0 | 13/13 | ✓ | ✗ | 4.6 (75) | ⚠ 시트 깊이 |
| DORO S100 | Doro | **0/15** | **0** | 0 | 8/8 | ✓ | ✗ | 2.0 (4) | US 값으로 임시 채움 |
| DORO-C100 | Doro | 15/15 | 103 | 0 | 17/17 | ✓ | ✗ | — | US 미판매 |
| M57 | Core | 15/15 | 252 | 0 | 27/27 | ✓ | ✗ | 4.6 (885) | ✓ 일치 |
| M57 footrest | Core | 15/15 | 303 | 0 | 18/18 | ✓ | ✗ | 4.7 (143) | ✓ 일치 |
| M57 Pro / Pro footrest | Core | 15/15 | 263 / 267 | 0 | ✓ | ✓ | ✗ | 4.4 (115) / 4.6 (28) | US 미판매 |
| M18 | Core | 15/15 | 93 | 0 | 19/19 | ✓ | ✗ | 4.6 (346) | ⚠ 시트 깊이·순중량 |
| M18 Pro | Core | 15/15 | 344 | 0 | 11/11 | ✓ | ✗ | 4.5 (27) | US 미판매 |
| M16 | Core | 15/15 | 104 | 0 | 9/9 | ✓ | **✓** | 4.9 (72) | US 미판매 |
| M56 | Core | 15/15 | 336 | 0 | 9/9 | ✓ | ✗ | — | US M56C 유사(확인) |
| M59 | Core | 15/15 | 204 | 0 | 10/10 | ✓ | ✗ | 4.6 (23) | US 미판매 |
| M59AS | Core | **0/15** | **0** | 0 | 12/12 | ✓ | ✗ | 2.5 (2) | US 값으로 임시 채움 |
| M76 | Core | 15/15 | 225 | 0 | 15/15 | ✓ | ✗ | 4.8 (6) | US 미판매 |
| V1 | Core | 15/15 | 287 | **1** | 30/31 | ✓ | ✗ | 4.6 (74) | US 미판매 |
| Vito M90 / M90 footrest | Core | 15/15 | 536 / 528 | 0 | ✓ | ✓ | ✗ | 4.5 (83) / 4.9 (11) | US 미판매 |
| XALLKING X3 Pro | Gaming | 14/15 | 207 | 0 | 9/9 | ✓ | ✗ | — | US 미판매 |
| XALLKING X5 Pro | Gaming | 14/15 | 333 | 0 | 17/17 | ✓ | ✗ | — | US 미판매 |
| XALLKING X5C / X5F / X5S | Gaming | 15/15 | 211 / 119 / 162 | 0 | ✓ | ✓ | ✗ | — | US 미판매 |
| Desker 데스크 2종 | Desk | **0/15**(스키마 다름) | 116 / 98 | 0 | ✓ | ✓ | ✗ | 3.7 (3) / — | 해당 없음 |

관찰: 영상은 V1 단 1개. 리뷰 별점 메타필드(`reviews.rating`)는 Loox 동기화가 된 상품에만 있음.

---

## 2. 정규화 메타필드 스키마 (`specs.*`) — 템플릿이 읽는 유일한 소스

기존 `sc_attributes.*` 는 Specs&Compare 앱이 만든 자유 텍스트 필드(키 이름에 `_` 접두, 값에 단위·괄호·중국어 구두점 혼재)라 **필터·JSON-LD·비교표·사이즈 가이드에 그대로 못 쓴다.** 새 네임스페이스 `specs` 를 타입 지정으로 만들고, 아래 매핑으로 1회 이관한다.

| 새 메타필드 | 타입 | 원천(`sc_attributes`) | 정규화 규칙 | 템플릿 사용처 |
|---|---|---|---|---|
| `specs.family` | single_line_text | 상품명 | Doro Series / Core Ergonomic (M/V) / XALLKING Gaming / Standing Desk | 비교 그룹·필터·브레드크럼 |
| `specs.user_height_min_cm`, `specs.user_height_max_cm` | number_integer | `recommended_user_height_range` | "150-190cm" → 150, 190 | 사이즈 핏 가이드, Compare 신장 필터, FAQ 문장 |
| `specs.max_load_kg` | number_integer | `max_recommended_weight` | "150 kg / 330 lbs" → 150 | 사이즈 핏, 필터, 스펙표 |
| `specs.seat_height_min_cm`, `_max_cm` | number_decimal | `_seat_height` | "44–54 cm (SGS Class 4 gas lift)" → 44, 54; 괄호는 `gas_lift_class` 로 | 스펙표, 키 큰/작은 사용자 가이드 |
| `specs.seat_width_cm` | number_decimal | `seat_width` | 숫자만 | 스펙표 |
| `specs.seat_depth_min_cm`, `_max_cm` | number_decimal | `_seat_depth` | 단일값이면 min=max; inch 병기 제거 | 스펙표, 사이즈 핏 |
| `specs.overall_height_min_cm`, `_max_cm` | number_decimal | `overall_height` | 범위 파싱 | 스펙표 |
| `specs.recline_positions_deg` | list.number_integer | `_recline_angle` | "105°, 120° and 135°" → [105,120,135]; `1105`→105 정정 | 스펙표, 비교표 |
| `specs.net_weight_kg` | number_decimal | `_net_weight` | 숫자만 | 스펙표 |
| `specs.armrest_type` | single_line_text | `_armrests` | 1D/2D/3D/4D/6D/8D 만 (M59·M76·X5C 는 수동 분류) | 비교표, 필터, 카드 배지 |
| `specs.armrest_detail`, `specs.lumbar_detail`, `specs.headrest_detail`, `specs.mechanism`, `specs.mesh_material` | multi_line_text | 동명 키 | 원문 유지, "/" 는 빈값 처리 | 스펙표 상세 탭 |
| `specs.seat_cushion` | single_line_text | `waterfall_shapedseat_cushion` | "YES" → "Waterfall mesh seat" 등 문장화 | 스펙표 |
| `specs.suspension` | boolean | `suspension_system` | YES/DynaCore → true, "/" → false | 비교표 |
| `specs.gas_lift_class` | single_line_text | `_seat_height` 괄호 | "SGS Class 4" | 신뢰 배지 |
| `specs.certifications` | list.single_line_text | 설명 내 BIFMA/SGS 언급 | ["BIFMA","SGS"] | 신뢰 배지, FAQ |
| `specs.warranty_years` | number_integer | 정책 | 3 (Desker 10) | 배지, Offer 스키마 |
| `specs.data_source`, `specs.needs_confirmation` | text | — | 내부용(임포트 후 확인 완료 시 비움) | 렌더 안 함 |

콘텐츠 메타필드(스펙 외, 같은 PR 에서 정의):

| 메타필드 | 타입 | 용도 |
|---|---|---|
| `custom.highlights` | list.single_line_text | "Get the highlights" 5불릿 |
| `custom.best_for` | list.single_line_text | "Best for: 6h+ sitting, tall users, gaming" — 카드·AI 답변용 |
| `custom.faqs` (기존) | metaobject_reference(faqs) | PDP FAQ + FAQPage 스키마 |
| `custom.install_video`, `custom.adjust_video` | url | 리소스 탭 |
| `custom.manual_pdf` | file_reference | 리소스 탭 |
| `custom.compare_table` | metaobject_reference(comparison_table, 기존) | PDP 비교표 |
| `custom.expert_quotes` | list.metaobject_reference(expert_quote, 신규: source·quote·video_url·logo) | 리뷰어 인용·영상 |
| `custom.features` | list.metaobject_reference(product_feature, 신규: heading·body·media) | 기능 갤러리 |
| `custom.related_articles` | list.article_reference | "M57 vs M18" 등 |
| `custom.last_updated` | date | "Last updated" 노출·신선도 |

데스크(Desker 2종)는 `specs_desk.*` (상판 W×D, 높이 범위, 모터 수, 단계, 최대 하중, 보증 10년)를 별도 정의 — 이 문서 범위 밖, B1 작업에 포함.

---

## 3. 임포트 절차 (Matrixify)

1. Settings → Custom data → Products 에서 §2 의 `specs.*` 정의를 먼저 생성(타입 정확히). 정의가 없으면 Matrixify 가 문자열로 만들어 필터가 안 잡힘.
2. `data/sihoo-au-product-specs-import.csv` 를 열어 §4 확인 목록의 항목을 수정. `specs.needs_confirmation` 열이 비어야 완료.
3. Matrixify → Import → Products, "Metafields" 만 업데이트(다른 열 제외). Dry run 후 실행.
4. 임포트 후 `custom.faqs` 연결(기존 faq_item 1,211건 재사용, 상품당 5~8문항), `custom.highlights`·`custom.best_for` 입력.
5. 템플릿에서 `specs.*` 렌더 확인 → Search & Discovery 필터에 `specs.max_load_kg`, `specs.user_height_max_cm`, `specs.armrest_type`, `specs.family` 등록.
6. Specs&Compare 앱 블록 제거 후 `sc_attributes` 정의 삭제(백업 CSV 보관).

---

## 4. 확인 목록 (임포트 전 반드시 해소)

| 상품 | 확인 사항 | 근거 |
|---|---|---|
| DORO S100 | AU 메타필드 0 → CSV 는 US 스펙 환산값(최대 150kg, 시트 깊이 38.5–43.5, 시트 폭 51, 순중량 22.3, 4D 팔걸이)만 채움. **시트 높이·전체 높이·권장 신장·리클라인은 본사 스펙시트 필요** | US PDP 스펙표 |
| M59AS | 동일 — US 환산(150kg, 시트 깊이 43.5, 폭 50.5, 전체 높이 113.5–134.5, 순중량 16.6, 3D). **시트 높이·권장 신장·리클라인 확인** | US PDP 스펙표 |
| C300 Pro V2 | 설명·SEO 타이틀·이미지 alt 16장 전부 공백. 스펙은 완비 | Admin |
| C300 Pro | `_recline_angle` 원문 `1105°` 오타 → 105° 로 정정(CSV 반영됨) | 메타필드 |
| M18 | US 와 상이: 시트 깊이 AU 42 / US 45.5cm, 순중량 AU 18.5 / US 16.8kg — 세대 차이인지 확인 | US PDP |
| S300 | 시트 깊이 최소 AU 40 / US 43.5cm | US PDP |
| V1 | 리클라인 원문 `0°-9°-18°-27°` 는 틸트 각도 → 좌석 기준 각도로 재확인, 메커니즘 값 없음 | 메타필드 |
| M59, M76, X5C | 팔걸이 유형이 "Up and down: 80º" 식 → 1D/2D 로 분류 필요 | 메타필드 |
| M90 (2종), Desker | 메커니즘·헤드레스트 값이 "/" | 메타필드 |
| M56 | US M56C 와 동일 모델인지 확인(US: 리클라인 110–125°, 팔걸이 상하 조절, 최대 150kg) | US PDP |
| 전 상품 | 갤러리 영상 0(V1 제외) — 본사 제품 영상 URL 수급 | Admin |
| 전 상품 | `custom.faqs` 미연결(M16 제외) | Admin |

---

## 5. 설명(description) 표준 구조와 공백 3종 초안

표준 구조(200~350 단어, cm/kg 우선, AU 보증·배송 명시, 모델명 표기 "Sihoo Doro C300 Pro V2" 형식 고정):

1. 한 문단 포지셔닝(누구를 위한 의자인지 + 핵심 시스템 1개)
2. 핵심 사양 3~4문장(권장 신장·최대 하중·팔걸이·리클라인·시트 깊이 조절)
3. 소재·인증(메시, BIFMA/SGS, SGS Class 4 gas lift)
4. AU 약속 한 줄(무료 배송 1~5일, 30일 반품, 3년 보증, 1300 002 580)

### 5.1 Sihoo Doro C300 Pro V2 (현재 설명 없음)

> The Sihoo Doro C300 Pro V2 is the first Doro chair built around the DynaCore™ Full-Body Support System: the lumbar, backrest, headrest and armrests respond together as you move, so support follows you instead of waiting for you to readjust. The SyncroFlex™ Back-Glide System senses your weight when you sit and glides with you through 105°, 120° and 135° recline positions.
>
> Designed for users between 150 cm and 190 cm and rated to 150 kg, the C300 Pro V2 pairs Domino™ sacral-lumbar support (Self-Adaptive Dynamic Lumbar Support 2.0) with 8D bionic armrests, an ultra-wide 3D adjustable headrest and a pressure-relief waterfall seat with 4 cm of depth adjustment. Seat height runs 46–56.7 cm on an SGS Class 4 gas lift; seat width is 52.1 cm and seat depth 42.9–47 cm.
>
> The premium elastic mesh back and seat keep airflow moving through long Australian summers, and the chair is BIFMA and SGS certified. Choose Black or White, Standard or Footrest version.
>
> Every C300 Pro V2 ships free from our Sydney warehouse in 1–5 business days with 30-day returns and a 3-year Australian warranty. Questions? Call 1300 002 580 (Mon–Fri, 8am–5:30pm AEST).

### 5.2 Sihoo Doro S100 (현재 설명 없음, 스펙 확인 후 수치 보정)

> The Sihoo Doro S100 brings the Doro series' dual dynamic lumbar support to an everyday price. Two independent lumbar pads move with your lower back as you shift, lean and recline, so you get continuous support without touching a dial.
>
> Built for users of most heights and rated to 150 kg, the S100 includes 4D coordinated armrests (height, width, depth and pivot), an adjustable headrest and a mesh seat with adjustable depth (38.5–43.5 cm) on a 51 cm wide seat. All controls sit on the right-hand side so you can adjust without leaving the chair.
>
> Breathable mesh on the back and seat, soft PU-coated armrests and BIFMA/SGS certification make it a practical choice for home offices, study desks and shared workspaces.
>
> Free delivery Australia-wide in 1–5 business days, 30-day returns and a 3-year warranty from SIHOO Australia.

### 5.3 Sihoo M59AS (현재 설명 없음, 스펙 확인 후 수치 보정)

> The Sihoo M59AS is a compact, fully meshed ergonomic chair with a two-section backrest that lets the upper and lower back move independently, plus dynamic lumbar support that adapts as you sit. A dual-joint headrest adjusts for height and angle to support the neck during long stretches at the desk.
>
> Rated to 150 kg, the M59AS has 3D armrests that flip up for tucking under the desk, a 50.5 cm wide seat with 43.5 cm depth, and an overall height of 113.5–134.5 cm. Weighing just 16.6 kg, it suits smaller home offices and study rooms.
>
> Breathable PE + polyester mesh keeps air moving, and the frame is built to BIFMA and SGS standards.
>
> Free AU delivery in 1–5 business days, 30-day returns and a 3-year SIHOO Australia warranty.

---

## 6. 제품별 스펙 시트 (정규화 값 · 원문 · 확인 필요)

아래는 Admin 메타필드 원문을 그대로 옮기고 정규화 값을 병기한 것이다. "확인 필요"가 비어야 임포트 대상이 된다.

### SIHOO M18 Ergonomic Office Chair

- handle `/products/sihoo-m18-ergonomics-task-office-chair` · 패밀리 Core Ergonomic (M/V) · 현 템플릿 `m-18` · 설명 93단어 · 미디어 19장(영상 0, alt 19/19) · SEO 타이틀 있음 · 리뷰 4.6 (346건) · 데이터 출처: AU sc_attributes 메타필드
- 변형(SKU / 판매가 / 정가 / 재고 / 배송중량): Black `M18-025` $279.00 / $469.00 / 340 / 18.8kg; Orange `M18-026` $299.00 / $469.00 / 0 / 18.8kg; Grey `M18-031` $299.00 / $469.00 / 57 / 18.8kg; Black with Leg Rest `M18-028` $339.00 / $499.00 / -3 / 22.3kg

| 항목 | 정규화 값 | 원문(sc_attributes) |
|---|---|---|
| 권장 신장 | 150–190 cm | 150-190cm |
| 최대 하중 | 150 kg | 150kg |
| 시트 높이 | 43–53 cm | 43–53 cm |
| 시트 폭 | 51 cm | 51 cm |
| 시트 깊이 | 42–42 cm | 42 cm |
| 전체 높이 | 107–121 cm | 107–121 cm |
| 리클라인 | 109/122/134° | 109°-122°-134 |
| 순중량 | 18.5 kg | 18.5KG |
| 팔걸이 | 2D | 2D armrest: Up and down: 7 CM Front and back: 6 CM Left and right: 15.2° Linked Recline |
| 럼바 | — | Up and down: 4 CM Front and back: 2 CM |
| 헤드레스트 | — | 2D headrest（Double joint）: Up and down: 11CM,8 level Headrest rotation: 45° 22° up/down flip |
| 메커니즘 | — | Self-weighted design, supports lift, large-angle recline, and multi-position locking; 3 lockable recline positions |
| 메시/소재 | — | Polyester Mesh Fabric，High Toughness & Tensile Strength，Wear-Resistant |
| 시트 쿠션 · 서스펜션 | TRUE | Fabric cushion · YES |
| 인증 · 가스리프트 | — · — | 설명/메타필드 내 언급 기준 |

- 현재 설명(앞 250자): Premium Ergonomic Office Chair for Work and Home Offices Rated 4.6 out of 5 by 333 Australian buyers, the M18 pairs dual lumbar support with a breathable mesh back built for long sessions at your desk. It fits users from 150cm to 190cm and holds up t
- **확인 필요**: US 스펙과 상이: 시트 깊이 AU 42 / US 45.5cm, 순중량 AU 18.5 / US 16.8kg; 갤러리 영상 없음

### Sihoo M57 Ergonomic Office Chair

- handle `/products/sihoo-m57-ergonomic-office-chair` · 패밀리 Core Ergonomic (M/V) · 현 템플릿 `m57` · 설명 252단어 · 미디어 27장(영상 0, alt 27/27) · SEO 타이틀 있음 · 리뷰 4.6 (885건) · 데이터 출처: AU sc_attributes 메타필드
- 변형(SKU / 판매가 / 정가 / 재고 / 배송중량): Black Mesh `M57-001` $329.00 / $489.00 / -67 / 21.9kg; Grey Mesh `M57-002` $339.00 / $489.00 / 10 / 21.9kg; Grey Frame with Grey Mesh `M57-009` $339.00 / $499.00 / 4 / 21.9kg

| 항목 | 정규화 값 | 원문(sc_attributes) |
|---|---|---|
| 권장 신장 | 150–190 cm | 150-190cm |
| 최대 하중 | 150 kg | 150kg |
| 시트 높이 | 43.5–53.5 cm | 43.5–53.5 cm |
| 시트 폭 | 51 cm | 51 cm |
| 시트 깊이 | 46–46 cm | 46 cm |
| 전체 높이 | 110–127.5 cm | 110-127.5cm |
| 리클라인 | 110/116/126° | 110°-116°-126° |
| 순중량 | 18.9 kg | 18.9 KG |
| 팔걸이 | 3D | 3D armrest: Up and down: 7 CM Front and back: 6 CM Armrest surface left and right: 35° |
| 럼바 | — | Up and down: 5 CM Front and back: 4 CM |
| 헤드레스트 | — | 2D headrest: Up and down: 8CM Headrest rotation: 45° |
| 메커니즘 | — | Single-lever control, thickened explosion-proof steel, adjustable lift and recline tension |
| 메시/소재 | — | PE + polyester mesh, wear-resistant, UV-resistant, and breathable suspension system |
| 시트 쿠션 · 서스펜션 | TRUE | YES · YES |
| 인증 · 가스리프트 | BIFMA, SGS · — | 설명/메타필드 내 언급 기준 |

- 현재 설명(앞 250자): The SIHOO M57 Ergonomic Office Chair combines breathable full-mesh comfort with adjustable support for home offices, workspaces and study areas. Its streamlined high backrest follows the natural curve of the spine, while the adjustable headrest, lumb
- **확인 필요**: 갤러리 영상 없음

### Sihoo V1 Ergonomic Office Chair

- handle `/products/sihoo-v1-ergonomic-office-chair` · 패밀리 Core Ergonomic (M/V) · 현 템플릿 `v1` · 설명 287단어 · 미디어 31장(영상 1, alt 30/31) · SEO 타이틀 있음 · 리뷰 4.6 (74건) · 데이터 출처: AU sc_attributes 메타필드
- 변형(SKU / 판매가 / 정가 / 재고 / 배송중량): Black with Leg rest `V1-009` $569.00 / $849.00 / 6 / 34kg; Black without Leg rest `V1-001` $529.00 / $799.00 / 0 / 26kg; Grey with Leg rest `V1-010` $599.00 / $849.00 / 10 / 34kg; Grey without Leg rest `V1-002` $529.00 / $799.00 / 15 / 26kg

| 항목 | 정규화 값 | 원문(sc_attributes) |
|---|---|---|
| 권장 신장 | 150–190 cm | 150 - 190 cm (5' - 6'3") |
| 최대 하중 | 136 kg | 136 kg (300 lb) |
| 시트 높이 | 47.5–57 cm | 47.5 - 57 cm (18.70 - 22.44 in) |
| 시트 폭 | 53 cm | 53 cm (20.87 in) |
| 시트 깊이 | 44.5–49.5 cm | 44.5 - 49.5 cm (17.52 - 19.49 in) |
| 전체 높이 | 116–137 cm | 116 - 137 cm (45.67 - 53.94 in) |
| 리클라인 | — | 0°-9°-18°-27° |
| 순중량 | 22.6 kg | 22.6 kg |
| 팔걸이 | 4D | 4D |
| 럼바 | — | 4D cushioned lumbar support |
| 헤드레스트 | — | 3D headrest |
| 메커니즘 | — | / |
| 메시/소재 | — | Breathable mesh |
| 시트 쿠션 · 서스펜션 | FALSE | Breathable mesh · / |
| 인증 · 가스리프트 | — · — | 설명/메타필드 내 언급 기준 |

- 현재 설명(앞 250자): Sihoo V1 Ergonomic Office Chair Features ★ 【FULL-ADJUSTABLE HEAD REST】Provides personalised neck relief and head support, adjustable lower-back lumbar support allows for free adjustment of both height and depth of support, 4D adjustable armrests can 
- **확인 필요**: 리클라인 원문 '	
0°-9°-18°-27°' 는 틸트 각도 표기 → 좌석 기준 각도로 재확인; 메커니즘 값 없음; 이미지 alt 누락 1/31

### SIHOO M16 Ergonomics Office Chair

- handle `/products/sihoo-m16-ergonomics-office-chair` · 패밀리 Core Ergonomic (M/V) · 현 템플릿 `m-16` · 설명 104단어 · 미디어 9장(영상 0, alt 9/9) · SEO 타이틀 있음 · 리뷰 4.9 (72건) · 데이터 출처: AU sc_attributes 메타필드
- 변형(SKU / 판매가 / 정가 / 재고 / 배송중량): Black Mesh `SIHOOM16-101` $299.00 / $329.00 / 7 / 17.9kg

| 항목 | 정규화 값 | 원문(sc_attributes) |
|---|---|---|
| 권장 신장 | 150–190 cm | 150 cm to 190 cm (5'0" to 6'3") |
| 최대 하중 | 150 kg | 150 kg (approx. 330 lbs) |
| 시트 높이 | 44.5–54.5 cm | 44.5 cm to 54.5 cm |
| 시트 폭 | 51 cm | 51 cm – 53 cm |
| 시트 깊이 | 45–46 cm | 45 cm – 46 cm |
| 전체 높이 | 107–130 cm | 107 cm - 130 cm |
| 리클라인 | 110/116/130° | 110°, 116°, and 130° |
| 순중량 | 14.6 kg | 14.6 kg to 21.2 kg |
| 팔걸이 | 2D | 2D non-adjustable lumbar support: Up and down: Non-adjustable (Fixed at standard desk elbow height) Front and back: Non-adjustable Left and  |
| 럼바 | — | Up and down: 4 CM Front and back: 2 CM |
| 헤드레스트 | — | Height- and angle-adjustable headrest |
| 메커니즘 | — | Thickened explosion-proof mechanism with adjustable tilt tension and 3 recline positions |
| 메시/소재 | — | Breathable polyester mesh backrest with high tensile strength and improved airflow |
| 시트 쿠션 · 서스펜션 | — | W-shaped 8.5 cm thickened foam seat cushion with breathable elastic mesh · Integrated S-shaped ergonomic backrest w |
| 인증 · 가스리프트 | — · — | 설명/메타필드 내 언급 기준 |

- 현재 설명(앞 250자): SIHOO M16 Ergonomics Office Chair, Computer Chair Desk Chair, Adjustable Headrests, Lumbar Support, Fixed Arm Rest, W-Shaped Seat Pan and High Quality Mesh Backrest Mesh Chair The M16 pairs a two-way adjustable lumbar pillow and headrest with a 90 to
- **확인 필요**: 갤러리 영상 없음

### SIHOO M56 Ergonomics Office Chair

- handle `/products/sihoo-m56-ergonomic-office-chair` · 패밀리 Core Ergonomic (M/V) · 현 템플릿 `m56-v1` · 설명 336단어 · 미디어 9장(영상 0, alt 9/9) · SEO 타이틀 있음 · 리뷰 4.5 (10건) · 데이터 출처: AU sc_attributes 메타필드
- 변형(SKU / 판매가 / 정가 / 재고 / 배송중량): Black Mesh `M56-001` $249.00 / $369.00 / 0 / 17.9kg

| 항목 | 정규화 값 | 원문(sc_attributes) |
|---|---|---|
| 권장 신장 | 150–190 cm | 150-190cm |
| 최대 하중 | 136 kg | 136kg |
| 시트 높이 | 43–52.5 cm | 43.-52.5 cm |
| 시트 폭 | 50 cm | 50cm |
| 시트 깊이 | 40.5–40.5 cm | 40.5 cm |
| 전체 높이 | 103.5–125.5 cm | 103.5-125.5cm |
| 리클라인 | 105/135° | 105°-135° |
| 순중량 | 12.52 kg | 12.52 kg |
| 팔걸이 | 2D | 2D armrest: Up and down: 7 CM |
| 럼바 | — | Up and down: 3.5CM |
| 헤드레스트 | — | 2D headrest: Up and down: 7.5CM Headrest rotation: 45° |
| 메커니즘 | — | Cold-rolled mechanical tension spring + mechanical steel multi-functional mechanism, double-lever control explosion-proof mechanism, adjusta |
| 메시/소재 | — | Polyester mesh, colorfast, pressure-resistant, tear-resistant |
| 시트 쿠션 · 서스펜션 | TRUE | Fabric cushion · YES |
| 인증 · 가스리프트 | — · — | 설명/메타필드 내 언급 기준 |

- 현재 설명(앞 250자): SIHOO M56 Ergonomics Office Chair, Computer Chair Desk Chair, Adjustable Headrests and Chair Backrest Mesh Chair .product-video-banner{ position:relative; width:100%; padding-top:56.25%; /* 16:9 비율 = 9/16 = 0.5625 */ overflow:hidden; } .product-video
- **확인 필요**: 갤러리 영상 없음

### SIHOO M59 Ergonomics Office Chair

- handle `/products/sihoo-m59-ergonomic-office-chair` · 패밀리 Core Ergonomic (M/V) · 현 템플릿 `(기본)` · 설명 204단어 · 미디어 10장(영상 0, alt 10/10) · SEO 타이틀 있음 · 리뷰 4.6 (23건) · 데이터 출처: AU sc_attributes 메타필드
- 변형(SKU / 판매가 / 정가 / 재고 / 배송중량): Grey Mesh with Grey Frame `M59B-201` $279.00 / $399.00 / 14 / 17.9kg

| 항목 | 정규화 값 | 원문(sc_attributes) |
|---|---|---|
| 권장 신장 | 150–180 cm | 150-180cm |
| 최대 하중 | 136 kg | 136kg |
| 시트 높이 | 42.5–51 cm | 42.5-51 cm |
| 시트 폭 | 46.5 cm | 46.5cm |
| 시트 깊이 | 44.5–44.5 cm | 44.5 cm |
| 전체 높이 | 93.5–102 cm | 93.5--102CM |
| 리클라인 | 100/120° | 100º-120º |
| 순중량 | 11.5 kg | 11.5KG |
| 팔걸이 | — | Up and down: 80º |
| 럼바 | — | Up and down: 3CM |
| 헤드레스트 | — | / |
| 메커니즘 | — | Single-handle thickened explosion-proof mechanism, 4 gears of recline adjustment, adjustable lift and recline tension |
| 메시/소재 | — | PE + polyester special mesh, colorfast, high tensile strength, wear-resistant, non-toxic, corrosion/chemical resistant, UV-resistant, highly |
| 시트 쿠션 · 서스펜션 | TRUE | YES · YES |
| 인증 · 가스리프트 | BIFMA, SGS · — | 설명/메타필드 내 언급 기준 |

- 현재 설명(앞 250자): SIHOO M59 Ergonomics Home Office Chair Features FEATURES: 90°Liftable Armrest refreshing, breathable and flexible all mesh design, 18°degree back tilt function for more comfortable angle, 360°-degree swivel capability. 8cm height adjustable. FOR LONG
- **확인 필요**: 팔걸이 유형 미표준: 'Up and down: 80º' → 1D/2D/3D 로 분류; 헤드레스트 값 없음(없는 모델이면 "없음" 명시); 갤러리 영상 없음

### Sihoo M57 Ergonomic Office Chair with built-in footrest

- handle `/products/sihoo-m57-ergonomic-office-chair-with-built-in-footrest` · 패밀리 Core Ergonomic (M/V) · 현 템플릿 `(기본)` · 설명 303단어 · 미디어 18장(영상 0, alt 18/18) · SEO 타이틀 있음 · 리뷰 4.7 (143건) · 데이터 출처: AU sc_attributes 메타필드
- 변형(SKU / 판매가 / 정가 / 재고 / 배송중량): Black Mesh `M57B-N101` $369.00 / $529.00 / 22 / 23.9kg; Grey Mesh `M57B-N106` $379.00 / $529.00 / 91 / 23.9kg; Grey Frame with Grey Mesh `M57B-N102` $389.00 / $549.00 / 57 / 23.9kg

| 항목 | 정규화 값 | 원문(sc_attributes) |
|---|---|---|
| 권장 신장 | 150–190 cm | 150-190cm |
| 최대 하중 | 150 kg | 150kg |
| 시트 높이 | 43.5–53.5 cm | 43.5–53.5 cm |
| 시트 폭 | 51 cm | 51 cm |
| 시트 깊이 | 46–46 cm | 46 cm |
| 전체 높이 | 110–127.5 cm | 110-127.5cm |
| 리클라인 | 110/116/126° | 110°-116°-126° |
| 순중량 | 19.9 kg | 19.9 KG |
| 팔걸이 | 3D | 3D |
| 럼바 | — | Up and down: 5 CM Front and back: 4 CM |
| 헤드레스트 | — | 2D headrest: Up and down: 8CM Headrest rotation: 45° |
| 메커니즘 | — | Single-lever control, thickened explosion-proof steel, adjustable lift and recline tension |
| 메시/소재 | — | PE + polyester mesh, wear-resistant, UV-resistant, and breathable suspension system |
| 시트 쿠션 · 서스펜션 | TRUE | YES · YES |
| 인증 · 가스리프트 | BIFMA, SGS · — | 설명/메타필드 내 언급 기준 |

- 현재 설명(앞 250자): Sihoo M57 Ergonomic Office Chair Features Computer Desk Chair, 3D Adjustable High-Back, Breathable Skin-Friendly Mesh with 3D Adjustable Armrest, Lumbar Support with built-in footrest ★【FULLY-ADJUSTABLE HEADREST】 Provides personalised neck relief and
- **확인 필요**: 갤러리 영상 없음

### Sihoo VIto M90 Ergonomic Office Chair

- handle `/products/sihoo-vito-m90-ergonomic-office-chair` · 패밀리 Core Ergonomic (M/V) · 현 템플릿 `(기본)` · 설명 536단어 · 미디어 18장(영상 0, alt 18/18) · SEO 타이틀 있음 · 리뷰 4.5 (83건) · 데이터 출처: AU sc_attributes 메타필드
- 변형(SKU / 판매가 / 정가 / 재고 / 배송중량): Black `M90C-301` $339.00 / $529.00 / 58 / 22kg; Grey Frame with Grey Mesh `M90C-302` $389.00 / $549.00 / 26 / 22kg; M90D Black(with sponge cushion) `M90D-B105` $379.00 / $529.00 / 26 / 22kg

| 항목 | 정규화 값 | 원문(sc_attributes) |
|---|---|---|
| 권장 신장 | 150–190 cm | 150 - 190 cm (5' - 6'3") |
| 최대 하중 | 136 kg | 136 kg (300 lb) |
| 시트 높이 | 46–55 cm | 46 - 55 cm (18.11 - 21.65 in) |
| 시트 폭 | 51 cm | 51 cm (20.08 in) |
| 시트 깊이 | 46–46 cm | 46 cm (18.11 in) |
| 전체 높이 | 107–130 cm | 107 - 130 cm |
| 리클라인 | 110/116/126° | 110°-116°-126° |
| 순중량 | 21.2 kg | 21.20 kg |
| 팔걸이 | 2D | 2D |
| 럼바 | — | Dual lumbar support |
| 헤드레스트 | — | / |
| 메커니즘 | — | / |
| 메시/소재 | — | Breathable mesh |
| 시트 쿠션 · 서스펜션 | FALSE | Full mesh cushion (Soft sponge cushion available with M90D model) · / |
| 인증 · 가스리프트 | BIFMA, SGS · — | 설명/메타필드 내 언급 기준 |

- 현재 설명(앞 250자): Sihoo M90 High-End Ergonomic Office Chair with Adaptive Lumbar Support for Different Postures 【 Comfortable Lumbar Support】 Do you have back pain? SIHOO home office chair with lumbar support will be the best choice to protect your spine from the pain
- **확인 필요**: 메커니즘 값 없음; 헤드레스트 값 없음(없는 모델이면 "없음" 명시); 갤러리 영상 없음

### Sihoo A3 DORO-C300 Pro Ergonomic Office Chair

- handle `/products/sihoo-a3-doro-c300-ergonomic-office-chair` · 패밀리 Doro Series · 현 템플릿 `doro-series-template` · 설명 308단어 · 미디어 34장(영상 0, alt 34/34) · SEO 타이틀 있음 · 리뷰 4.6 (174건) · 데이터 출처: AU sc_attributes 메타필드
- 변형(SKU / 판매가 / 정가 / 재고 / 배송중량): Black `C300-B101` $679.00 / $999.00 / 6 / 27kg; Grey `C300-B102` $679.00 / $999.00 / 25 / 27kg; Black with Footrest `C300-B101-JT` $699.00 / $1049.00 / 0 / 29kg; Grey with Footrest `C300-B102-JT` $699.00 / $1049.00 / 23 / 29kg

| 항목 | 정규화 값 | 원문(sc_attributes) |
|---|---|---|
| 권장 신장 | 150–190 cm | 150-190cm |
| 최대 하중 | 150 kg | 150kg |
| 시트 높이 | 44–54 cm | 44–54 cm (SGS Class 4 gas lift) |
| 시트 폭 | 51 cm | 51 cm |
| 시트 깊이 | 42.5–45 cm | 42.5–45 cm |
| 전체 높이 | 106–127 cm | 106–127 cm |
| 리클라인 | 105/120/135° | 1105° – 120° – 135° |
| 순중량 | 24.2 kg | 24.2KG |
| 팔걸이 | 6D | 6D armrest: Up and down: 6.5 CM Up and down: 35° Front and back: 5 CM Left and right: 75° PU Armrest Surface Left and right:5 positions Link |
| 럼바 | — | Adaptive PA+ fiber lumbar pillow with strong support |
| 헤드레스트 | — | Wide Adjustable 3D headrest: Up and down: 5CM Front and back:2.5 Headrest rotation: 35° Bracket rotation: 45° |
| 메커니즘 | — | Self-weighting chassis with 3-position lock; backrest angle range 105°–135° |
| 메시/소재 | — | High-elastic wave mesh, breathable, oil and stain resistant Suspension system |
| 시트 쿠션 · 서스펜션 | — | Waterfall Mesh Seat with 4 cm · Multi-Point Ergonomic Support |
| 인증 · 가스리프트 | BIFMA, SGS · SGS Class 4 | 설명/메타필드 내 언급 기준 |

- 현재 설명(앞 250자): Sihoo A3 DORO C300 Ergonomic Chair Domino three-dimensional lumbar support The innovative Domino three-dimensional lumbar support, which is a genius idea that combines the variables that affect comfort and health as a lumbar pillow. The Sihoo DORO C3
- **확인 필요**: 리클라인 원문 '1105°' 오타 → 105°로 정정; 갤러리 영상 없음

### Desker Height Adjustable Dual Motor 3 Stage Electric Sit Stand Desk

- handle `/products/desker-height-adjustable-dual-motor-sit-stand-desk` · 패밀리 Standing Desk · 현 템플릿 `aftership.994c81c7` · 설명 116단어 · 미디어 15장(영상 0, alt 15/15) · SEO 타이틀 있음 · 리뷰 3.7 (3건) · 데이터 출처: AU sc_attributes 메타필드
- 변형(SKU / 판매가 / 정가 / 재고 / 배송중량): White Frame with White desktop + 2 mm ABS edge / 1400x700 `NT33-2A2W-1470W` $699.00 / $999.00 / -1 / 0kg; Black Frame with Black Carbon Fibre / 1400x700 `NT33-2A3B-1470B` $699.00 / $999.00 / 0 / 0kg; White Frame with White desktop + 2 mm ABS edge / 1600x700 `NT33-2A3W-1670W` $729.00 / $1029.00 / 0 / 0kg; White Frame with White desktop + 2 mm ABS edge / 1600x800 `NT33-2A3W-1680W` $749.00 / $1049.00 / 12 / 0kg; Black Frame with Black Carbon Fibre / 1600x800 `NT33-2A3B-1680B` $749.00 / $1049.00 / 1 / 0kg; White Frame with White desktop + 2 mm ABS edge / 1800x800 (out of stock) `NT33-2A3W-1880W` $769.00 / $1069.00 / 1 / 0kg

| 항목 | 정규화 값 | 원문(sc_attributes) |
|---|---|---|
| 권장 신장 | – cm | — |
| 최대 하중 |  kg | — |
| 시트 높이 | – cm | — |
| 시트 폭 |  cm | — |
| 시트 깊이 | – cm | — |
| 전체 높이 | – cm | — |
| 리클라인 | — | — |
| 순중량 |  kg | — |
| 팔걸이 | — | — |
| 럼바 | — | — |
| 헤드레스트 | — | — |
| 메커니즘 | — | — |
| 메시/소재 | — | — |
| 시트 쿠션 · 서스펜션 | — | — · — |
| 인증 · 가스리프트 | — · — | 설명/메타필드 내 언급 기준 |

- 현재 설명(앞 250자): The Desker Height Adjustable Dual Motor Sit Stand Desk combines sleek design with powerful performance. With smooth, quiet height control and a sturdy 3-stage steel frame, it supports up to 140 kg. Ideal for modern workspaces, it offers durability, c
- **확인 필요**: 메커니즘 값 없음; 헤드레스트 값 없음(없는 모델이면 "없음" 명시); 데스크: 의자 스펙 스키마 미적용 → specs_desk.* (상판 크기·높이 범위·모터·하중) 별도 정의; 갤러리 영상 없음

### SIHOO M76 Ergonomics Office Chair

- handle `/products/sihoo-m76-ergonomics-office-chair` · 패밀리 Core Ergonomic (M/V) · 현 템플릿 `(기본)` · 설명 225단어 · 미디어 15장(영상 0, alt 15/15) · SEO 타이틀 있음 · 리뷰 4.8 (6건) · 데이터 출처: AU sc_attributes 메타필드
- 변형(SKU / 판매가 / 정가 / 재고 / 배송중량): Grey `M76-N102` $179.00 / $199.00 / 9 / 17.9kg

| 항목 | 정규화 값 | 원문(sc_attributes) |
|---|---|---|
| 권장 신장 | 150–180 cm | 150-180cm |
| 최대 하중 | 136 kg | 136kg |
| 시트 높이 | 40.5–50.5 cm | 40.5-50.5 cm |
| 시트 폭 | 48.5 cm | 48.5cm |
| 시트 깊이 | 44.5–44.5 cm | 44.5 cm |
| 전체 높이 | 88.5–98.5 cm | 88.5-98.5CM |
| 리클라인 | 108/125° | 108°-125° |
| 순중량 | 9.6 kg | 9.6KG |
| 팔걸이 | — | Up and down: 75º |
| 럼바 | — | Up and down: 2.5CM |
| 헤드레스트 | — | / |
| 메커니즘 | — | Old-rolled mechanical tension spring + steel thickened explosion-proof mechanism, adjustable lift/recline tension, recline lockable |
| 메시/소재 | — | Polyester three-proof mesh (water/dust/stain proof), chair seat with white elastic bottom cloth, colorfast, high tensile strength, UV-resist |
| 시트 쿠션 · 서스펜션 | TRUE | Fabric cushion · YES |
| 인증 · 가스리프트 | BIFMA, SGS · — | 설명/메타필드 내 언급 기준 |

- 현재 설명(앞 250자): SIHOO M76 Ergonomics Home Office Chair Features 【Ergonomic Office Chair Design 】This ergonomic chair in Australia is designed with a C-shaped backrest that perfectly supports your body. SIHOO ergonomic chair in Australia provides 3 support points (ba
- **확인 필요**: 팔걸이 유형 미표준: 'Up and down: 75º' → 1D/2D/3D 로 분류; 헤드레스트 값 없음(없는 모델이면 "없음" 명시); 갤러리 영상 없음

### Sihoo VIto M90 Ergonomic Office Chair with Footrest

- handle `/products/sihoo-vito-m90-ergonomic-office-chair-with-footrest` · 패밀리 Core Ergonomic (M/V) · 현 템플릿 `(기본)` · 설명 528단어 · 미디어 12장(영상 0, alt 12/12) · SEO 타이틀 있음 · 리뷰 4.9 (11건) · 데이터 출처: AU sc_attributes 메타필드
- 변형(SKU / 판매가 / 정가 / 재고 / 배송중량): Black `M90B-N101` $419.00 / $579.00 / 27 / 22kg; Grey Frame with Grey Mesh `M90B-N102` $419.00 / $579.00 / 11 / 22kg

| 항목 | 정규화 값 | 원문(sc_attributes) |
|---|---|---|
| 권장 신장 | 150–190 cm | 150 - 190 cm (5' - 6'3") |
| 최대 하중 | 136 kg | 136 kg (300 lb) |
| 시트 높이 | 46–55 cm | 46 - 55 cm (18.11 - 21.65 in) |
| 시트 폭 | 51 cm | 51 cm (20.08 in) |
| 시트 깊이 | 46–46 cm | 46 cm (18.11 in) |
| 전체 높이 | 107–130 cm | 107 - 130 cm |
| 리클라인 | 110/116/126° | 110°-116°-126° |
| 순중량 | 21.2 kg | 21.20 kg |
| 팔걸이 | 4D | 4D |
| 럼바 | — | Dual lumbar support |
| 헤드레스트 | — | 3D headrest |
| 메커니즘 | — | / |
| 메시/소재 | — | Breathable mesh |
| 시트 쿠션 · 서스펜션 | FALSE | Full mesh cushion (Soft sponge cushion available with M90D model) · / |
| 인증 · 가스리프트 | BIFMA, SGS · — | 설명/메타필드 내 언급 기준 |

- 현재 설명(앞 250자): Sihoo M90 High-End Ergonomic Office Chair Features Comfortable Lumbar Support Do you have back pain? This ergonomic chair in Australia with lumbar support will be the best choice to protect your spine from the pain and fatigue of sitting for a long t
- **확인 필요**: 메커니즘 값 없음; 갤러리 영상 없음

### Carbon Fibre Dual Motor 3 Stage Electric Sit Stand Desk in Black

- handle `/products/desker-motion-desk-control-switch-black` · 패밀리 Standing Desk · 현 템플릿 `aftership.994c81c7` · 설명 98단어 · 미디어 5장(영상 0, alt 5/5) · SEO 타이틀 있음 · 리뷰 — (0건) · 데이터 출처: AU sc_attributes 메타필드
- 변형(SKU / 판매가 / 정가 / 재고 / 배송중량): Black Frame with Black Carbon Fibre / 1400x700 `NT33-2A3B-1470B` $749.00 / $1049.00 / -1 / 0kg; Black Frame with Black Carbon Fibre / 1600x800 `NT33-2A3B-1680B` $799.00 / $1099.00 / 1 / 0kg; Black / With Footrest `None` $699.00 / $1049.00 / 0 / 0kg

| 항목 | 정규화 값 | 원문(sc_attributes) |
|---|---|---|
| 권장 신장 | – cm | — |
| 최대 하중 |  kg | — |
| 시트 높이 | – cm | — |
| 시트 폭 |  cm | — |
| 시트 깊이 | – cm | — |
| 전체 높이 | – cm | — |
| 리클라인 | — | — |
| 순중량 |  kg | — |
| 팔걸이 | — | — |
| 럼바 | — | — |
| 헤드레스트 | — | — |
| 메커니즘 | — | — |
| 메시/소재 | — | — |
| 시트 쿠션 · 서스펜션 | — | — · — |
| 인증 · 가스리프트 | — · — | 설명/메타필드 내 언급 기준 |

- 현재 설명(앞 250자): The Desker Height Adjustable Dual Motor Sit Stand Desk is built for comfort, flexibility, and everyday performance. Its dual motor system and sturdy 3-stage steel frame provide smooth, quiet height adjustment, making it easy to switch between sitting
- **확인 필요**: 메커니즘 값 없음; 헤드레스트 값 없음(없는 모델이면 "없음" 명시); 데스크: 의자 스펙 스키마 미적용 → specs_desk.* (상판 크기·높이 범위·모터·하중) 별도 정의; 갤러리 영상 없음

### Sihoo DORO-S300 Ergonomic Office Chair

- handle `/products/sihoo-doro-s300-ergonomic-office-chair` · 패밀리 Doro Series · 현 템플릿 `s300` · 설명 325단어 · 미디어 13장(영상 0, alt 13/13) · SEO 타이틀 있음 · 리뷰 4.6 (75건) · 데이터 출처: AU sc_attributes 메타필드
- 변형(SKU / 판매가 / 정가 / 재고 / 배송중량): Black `S300-B101` $949.00 / $1599.00 / 23 / 27kg; Grey `S300-B102` $949.00 / $1599.00 / 28 / 27kg; Black with Footrest `S300-B101-JT` $989.00 / $1649.00 / 39 / 29kg; Grey with Footrest `S300-B102-JT` $989.00 / $1649.00 / 64 / 29kg

| 항목 | 정규화 값 | 원문(sc_attributes) |
|---|---|---|
| 권장 신장 | 150–190 cm | 150-190cm |
| 최대 하중 | 150 kg | 150kg |
| 시트 높이 | 49–57 cm | 49–57 cm (SGS Class 4 gas lift) |
| 시트 폭 | 51.5 cm | 51.5 cm |
| 시트 깊이 | 40–47 cm | 40–47 cm |
| 전체 높이 | 111.5–127 cm | 111.5–127 cm |
| 리클라인 | 100/110/130° | 100° – 110° – 130° |
| 순중량 | 24.82 kg | 24.82 kg |
| 팔걸이 | 6D | 6D armrest: Up and down: 6.5 CM Up and down: 30° Front and back: 5 CM Left and right: 72° PU Armrest Surface Left and right:5 positions Link |
| 럼바 | — | 6D dynamic lumbar support： 90°-105 ° directional support |
| 헤드레스트 | — | Integrated adjustable headrest, shoulder and neck support |
| 메커니즘 | — | Space Mechanism: Aviation-grade fiberglass spring blades, allowing free-floating at any angle and effortless reclining. |
| 메시/소재 | — | Premium velvet mesh, breathable and durable |
| 시트 쿠션 · 서스펜션 | TRUE | YES (shock-absorbing seat cushion） · YES |
| 인증 · 가스리프트 | BIFMA, SGS · SGS Class 4 | 설명/메타필드 내 언급 기준 |

- 현재 설명(앞 250자): Sihoo DORO S300 Ergonomic Chair A weightless recline experience With the help of anti-gravity mechanism, whenever you need to relax a bit during your work, you can smoothly recline on the Sihoo Doro S300, stop at any angle you want (without the need 
- **확인 필요**: US 스펙과 상이: 시트 깊이 최소 AU 40 / US 43.5cm; 갤러리 영상 없음

### Sihoo A3 DORO-C100 Ergonomic Office Chair

- handle `/products/sihoo-a3-doro-c100-ergonomic-office-chair` · 패밀리 Doro Series · 현 템플릿 `c100` · 설명 103단어 · 미디어 17장(영상 0, alt 17/17) · SEO 타이틀 있음 · 리뷰 4.7 (123건) · 데이터 출처: AU sc_attributes 메타필드
- 변형(SKU / 판매가 / 정가 / 재고 / 배송중량): Black `C100-101` $459.00 / $899.00 / -2 / 27kg; Grey `C100-102` $459.00 / $899.00 / 0 / 27kg

| 항목 | 정규화 값 | 원문(sc_attributes) |
|---|---|---|
| 권장 신장 | 150–190 cm | 150-190cm |
| 최대 하중 | 150 kg | 150kg |
| 시트 높이 | 45.5–55.5 cm | 45.5–55.5 cm (SGS Class 4 gas lift) |
| 시트 폭 | 51 cm | 51 cm |
| 시트 깊이 | 42.5–45 cm | 42.5–45 cm |
| 전체 높이 | 106–127 cm | 106–127 cm |
| 리클라인 | 105/120/135° | 105° – 120° – 135° |
| 순중량 | 24.7 kg | 24.70KG |
| 팔걸이 | 4D | 4D armrest: Up and down: 6.5CM Front and back: 5 CM Left and right: 75° Linked Recline |
| 럼바 | — | Adaptive PA+ fiber lumbar pillow with strong support |
| 헤드레스트 | — | 3D headrest: Up and down: 5CM Front and back:2.5 Headrest rotation: 35° Bracket rotation: 45° |
| 메커니즘 | — | Elf-weighting chassis with 3-position lock; backrest angle range 105°–135° |
| 메시/소재 | — | High-elastic wave mesh, breathable, oil and stain resistant Suspension system |
| 시트 쿠션 · 서스펜션 | TRUE | YES · YES |
| 인증 · 가스리프트 | BIFMA, SGS · SGS Class 4 | 설명/메타필드 내 언급 기준 |

- 현재 설명(앞 250자): Sihoo A3 DORO-C100 Ergonomic Office Chair Sihoo Doro-C100 is engineered to provide continual, next-level support and comfort to you, coming with self-adaptive lumbar support, flexible backrest, 3D coordinated armrests, and more, all for a comfortable
- **확인 필요**: 갤러리 영상 없음

### XALLKING X5 Pro Ergonomic Gaming Chair

- handle `/products/xallking-x5pro-ergonomic-gaming-chair` · 패밀리 XALLKING Gaming · 현 템플릿 `x5-pro` · 설명 333단어 · 미디어 17장(영상 0, alt 17/17) · SEO 타이틀 있음 · 리뷰 4.6 (32건) · 데이터 출처: AU sc_attributes 메타필드
- 변형(SKU / 판매가 / 정가 / 재고 / 배송중량): White Frame with Gray Mesh `X5PRO-402-JT` $799.00 / $1199.00 / 64 / 0kg; Black Frame with Dark Grey Mesh `X5PRO-401-JT` $799.00 / $1199.00 / 14 / 0kg

| 항목 | 정규화 값 | 원문(sc_attributes) |
|---|---|---|
| 권장 신장 | 150–190 cm | 150 - 190 cm |
| 최대 하중 | 136 kg | 136 kg |
| 시트 높이 | 45.5–54.5 cm | 45.5 - 54.5 cm |
| 시트 폭 | 51 cm | 51 cm |
| 시트 깊이 | 40–47 cm | 40-47 cm |
| 전체 높이 | 109–127.5 cm | 109 - 127.5 cm |
| 리클라인 | 100/110/130° | 100°,110°,130° |
| 순중량 | 26.2 kg | 26.2 kg |
| 팔걸이 | 6D | 6D synchronous tilting armrest |
| 럼바 | — | C-type adjustable lumbar support |
| 헤드레스트 | — | Double joint headrest |
| 메커니즘 | — | Anti-Gravity Mechanism with aerospace-grade glass fiber elastic plates |
| 메시/소재 | — | Polyester Elastic Mesh |
| 시트 쿠션 · 서스펜션 | — | Saddle type pressure dividing seat cushion · — |
| 인증 · 가스리프트 | — · — | 설명/메타필드 내 언급 기준 |

- 현재 설명(앞 250자): For those long days of work or marathon gaming, the XALLKING X5 Pro Ergonomic Gaming Chair is the pinnacle of high-performance design. This ergonomic chair provides an elegant sitting option that doesn't skimp on comfort by combining high-quality mat
- **확인 필요**: 갤러리 영상 없음

### Sihoo DORO-C500 Ergonomic Office Chair

- handle `/products/sihoo-doro-c500-ergonomic-office-chair` · 패밀리 Doro Series · 현 템플릿 `c500` · 설명 226단어 · 미디어 15장(영상 0, alt 15/15) · SEO 타이틀 있음 · 리뷰 4.8 (28건) · 데이터 출처: AU sc_attributes 메타필드
- 변형(SKU / 판매가 / 정가 / 재고 / 배송중량): Black with Footrest `C500-101-JT` $1199.00 / $1649.00 / 36 / 29kg; Grey with Footrest `C500-102-JT` $1199.00 / $1649.00 / 30 / 29kg

| 항목 | 정규화 값 | 원문(sc_attributes) |
|---|---|---|
| 권장 신장 | 150–190 cm | 150-190cm |
| 최대 하중 | 150 kg | 150kg |
| 시트 높이 | 48–56.5 cm | 48–56.5 cm (SGS Class 4 gas lift) |
| 시트 폭 | 51 cm | 51 cm |
| 시트 깊이 | 41–44 cm | 41–44 cm |
| 전체 높이 | 116.5–132 cm | 116.5–132 cm |
| 리클라인 | 95/145° | 95° -145°(4-position) |
| 순중량 | 29.08 kg | 29.08 kg |
| 팔걸이 | 6D | 6D armrest: Up and down: 6.5 CM Up and down: 35° Front and back: 5 CM Left and right: 75° PU Armrest Surface Left and right:5 positions Link |
| 럼바 | — | Adaptive PA+ fiber lumbar pillow with strong support |
| 헤드레스트 | — | 3D headrest: Up and down: 5CM Front and back:2.5 Headrest rotation: 35° Bracket rotation: 45° |
| 메커니즘 | — | Space Mechanism: Aviation-grade fiberglass spring blades, allowing free-floating at any angle and effortless reclining. |
| 메시/소재 | — | High-elastic wave mesh, breathable, oil and stain resistant |
| 시트 쿠션 · 서스펜션 | TRUE | YES · YES |
| 인증 · 가스리프트 | BIFMA, SGS · SGS Class 4 | 설명/메타필드 내 언급 기준 |

- 현재 설명(앞 250자): Sihoo Doro C500 Executive Ergonomic Mesh Office Chair Experience Next-Level Comfort & Support Transform your workspace with the Sihoo Doro C500 Executive Ergonomic Mesh Office Chair—engineered for professionals who demand both comfort and style. Whet
- **확인 필요**: 갤러리 영상 없음

### Sihoo M57 Pro Ergonomic Office Chair

- handle `/products/sihoo-m57-pro-ergonomic-office-chair` · 패밀리 Core Ergonomic (M/V) · 현 템플릿 `m57-pro` · 설명 263단어 · 미디어 22장(영상 0, alt 22/22) · SEO 타이틀 있음 · 리뷰 4.4 (115건) · 데이터 출처: AU sc_attributes 메타필드
- 변형(SKU / 판매가 / 정가 / 재고 / 배송중량): Black Mesh / Without Built-in Footrest `M57C-201` $399.00 / $499.00 / 17 / 21.9kg; Black Mesh / With Built-in Footrest `M57C-201-JT` $439.00 / $519.00 / 92 / 21.9kg; Grey Frame with Grey Mesh / Without Built-in Footrest `M57C-202` $399.00 / $499.00 / 34 / 21.9kg; Grey Frame with Grey Mesh / With Built-in Footrest `M57C-202-JT` $439.00 / $519.00 / 54 / 21.9kg

| 항목 | 정규화 값 | 원문(sc_attributes) |
|---|---|---|
| 권장 신장 | 150–190 cm | 150-190cm |
| 최대 하중 | 150 kg | 150kg |
| 시트 높이 | 42–50 cm | 42–50 cm |
| 시트 폭 | 50 cm | 50 cm |
| 시트 깊이 | 45–45 cm | 45 cm |
| 전체 높이 | 105–131 cm | 105–131 cm |
| 리클라인 | 109/122/134° | 109°-122°-134 |
| 순중량 | 20 kg | 20KG |
| 팔걸이 | 4D | 4D armrest: Up and down: 7 CM Front and back: 6 CM Left and right: 15.2° Linked Recline |
| 럼바 | — | Up and down: 4 CM Front and back: 2 CM |
| 헤드레스트 | — | 2D headrest（Double joint): Up and down: 11CM,8 level Headrest rotation: 45° 22° up/down flip |
| 메커니즘 | — | Self-weighted design, supports lift, large-angle recline, and multi-position locking; 3 lockable recline positions |
| 메시/소재 | — | Polyester mesh, wear-resistant, UV-resistant, and breathable |
| 시트 쿠션 · 서스펜션 | TRUE | YES · YES |
| 인증 · 가스리프트 | BIFMA, SGS · — | 설명/메타필드 내 언급 기준 |

- 현재 설명(앞 250자): Sihoo M57 PRO Ergonomic Office Chair, Computer & Gaming Desk Chair — 4D Adjustable High-Back, Breathable Mesh, Dynamic Lumbar Support ★ 【Features】 Level-up your seating with a double-joint flexible headrest for custom neck relief; a 4-position integr
- **확인 필요**: 갤러리 영상 없음

### Sihoo M18 Pro Ergonomic Office Chair

- handle `/products/sihoo-m18-pro-ergonomic-office-chair` · 패밀리 Core Ergonomic (M/V) · 현 템플릿 `m18-pro` · 설명 344단어 · 미디어 11장(영상 0, alt 11/11) · SEO 타이틀 있음 · 리뷰 4.5 (27건) · 데이터 출처: AU sc_attributes 메타필드
- 변형(SKU / 판매가 / 정가 / 재고 / 배송중량): Black Mesh / Without Built-in Footrest `M18C-101` $369.00 / $499.00 / 25 / 21.9kg; Black Mesh / With Built-in Footrest `M18C-JT-101` $389.00 / $519.00 / 0 / 21.9kg

| 항목 | 정규화 값 | 원문(sc_attributes) |
|---|---|---|
| 권장 신장 | 150–190 cm | 150-190cm |
| 최대 하중 | 150 kg | 150kg |
| 시트 높이 | 43–53 cm | 43–53 cm |
| 시트 폭 | 51 cm | 51 cm |
| 시트 깊이 | 42–42 cm | 42 cm |
| 전체 높이 | 107–121 cm | 107–121 cm |
| 리클라인 | 109/122/134° | 109°-122°-134 |
| 순중량 | 21.7 kg | 21.7 kg |
| 팔걸이 | 2D | 2D armrest: Up and down: 7 CM Front and back: 6 CM Left and right: 15.2° Linked Recline |
| 럼바 | — | Up and down: 4 CM Front and back: 2 CM |
| 헤드레스트 | — | 2D headrest（Double joint）: Up and down: 11CM,8 level Headrest rotation: 45° 22° up/down flip |
| 메커니즘 | — | Self-weighted design, supports lift, large-angle recline, and multi-position locking; 3 lockable recline positions |
| 메시/소재 | — | Polyester Mesh Fabric，High Toughness & Tensile Strength，Wear-Resistant |
| 시트 쿠션 · 서스펜션 | TRUE | Fabric cushion · YES |
| 인증 · 가스리프트 | BIFMA, SGS · — | 설명/메타필드 내 언급 기준 |

- 현재 설명(앞 250자): SIHOO M18 Pro Ergonomic Office Chair — 4D Linked Armrests, High-Back Breathable Mesh, Adaptive Lumbar Support ★ [Next-Level Ergonomics]Our adaptive self-weight sensing mechanism automatically tailors recline resistance to your body mass—no manual ten
- **확인 필요**: 갤러리 영상 없음

### Sihoo M57 Pro Ergonomic Office Chair with Built in Footrest

- handle `/products/sihoo-m57-pro-ergonomic-office-chair-with-built-in-footrest` · 패밀리 Core Ergonomic (M/V) · 현 템플릿 `m57-pro` · 설명 267단어 · 미디어 11장(영상 0, alt 11/11) · SEO 타이틀 있음 · 리뷰 4.6 (28건) · 데이터 출처: AU sc_attributes 메타필드
- 변형(SKU / 판매가 / 정가 / 재고 / 배송중량): Black Mesh / With Built-in Footrest `M57C-201-JT` $439.00 / $519.00 / 97 / 21.9kg; Grey Frame with Grey Mesh / With Built-in Footrest `M57C-202-JT` $439.00 / $519.00 / 55 / 21.9kg

| 항목 | 정규화 값 | 원문(sc_attributes) |
|---|---|---|
| 권장 신장 | 150–190 cm | 150-190cm |
| 최대 하중 | 150 kg | 150kg |
| 시트 높이 | 42–50 cm | 42–50 cm |
| 시트 폭 | 50 cm | 50 cm |
| 시트 깊이 | 45–45 cm | 45 cm |
| 전체 높이 | 105–131 cm | 105–131 cm |
| 리클라인 | 109/122/134° | 109°-122°-134 |
| 순중량 | 21.7 kg | 21.7 kg |
| 팔걸이 | 4D | 4D armrest: Up and down: 7 CM Front and back: 6 CM Left and right: 15.2° Linked Recline |
| 럼바 | — | Height & Horizontal Adjustable Lumbar Support Integrated S-shape Backrest |
| 헤드레스트 | — | 2D headrest（Double joint): Up and down: 11CM,8 level Headrest rotation: 45° 22° up/down flip |
| 메커니즘 | — | Self-weighted design, supports lift, large-angle recline, and multi-position locking; 3 lockable recline positions |
| 메시/소재 | — | Polyester mesh, wear-resistant, UV-resistant, and breathable |
| 시트 쿠션 · 서스펜션 | TRUE | YES · YES |
| 인증 · 가스리프트 | BIFMA, SGS · — | 설명/메타필드 내 언급 기준 |

- 현재 설명(앞 250자): Sihoo M57 PRO Ergonomic Office Chair with Built in Footrest, Computer & Gaming Desk Chair — 4D Adjustable High-Back, Breathable Mesh, Dynamic Lumbar Support ★ 【Features】 Level-up your seating with a double-joint flexible headrest for custom neck reli
- **확인 필요**: 갤러리 영상 없음

### XALLKING X5C Ergonomic Gaming Chair

- handle `/products/xallking-x5c-ergonomic-gaming-chair` · 패밀리 XALLKING Gaming · 현 템플릿 `x5c` · 설명 211단어 · 미디어 7장(영상 0, alt 7/7) · SEO 타이틀 있음 · 리뷰 — (0건) · 데이터 출처: AU sc_attributes 메타필드
- 변형(SKU / 판매가 / 정가 / 재고 / 배송중량): Black `X5C-N302` $559.00 / $None / 21 / 0kg

| 항목 | 정규화 값 | 원문(sc_attributes) |
|---|---|---|
| 권장 신장 | 150–190 cm | 150-190CM |
| 최대 하중 | 136 kg | 136KG |
| 시트 높이 | 42.5–50.5 cm | 42.5-50.5CM |
| 시트 폭 | 50.5 cm | 50.5CM |
| 시트 깊이 | 51–51 cm | 51CM |
| 전체 높이 | 109–117 cm | 109-117 |
| 리클라인 | 107/135° | 107°-135° |
| 순중량 | 20.6 kg | 20.6KG |
| 팔걸이 | — | Up and down: 7 CM Front and back: 6 CM Left and right:35 CM Linked Recline |
| 럼바 | — | 4-zone lumbar support Up and down: 4CM |
| 헤드레스트 | — | 3D headrest： Up and down: 7CM Headrest rotation: 45° Bracket rotation: 50° |
| 메커니즘 | — | Black/3rd gear/controller mechanism |
| 메시/소재 | — | Elastic-Breathable-Oilproof-Pressure-Resistant Mesh |
| 시트 쿠션 · 서스펜션 | TRUE | Yes · Yes |
| 인증 · 가스리프트 | — · — | 설명/메타필드 내 언급 기준 |

- 현재 설명(앞 250자): Many gaming chairs may catch your eye, but they usually fall short in providing genuine support. The X5C stands out as a unique firearm. While it may appear to be an imposing mecha, it's the sensation it delivers that truly sets it apart. This ergono
- **확인 필요**: 팔걸이 유형 미표준: 'Up and down: 7 CM Front and back: 6 CM Left and right:35 CM ' → 1D/2D/3D 로 분류; 갤러리 영상 없음

### XALLKING X5F Ergonomic Gaming Chair

- handle `/products/xallking-x5f-ergonomic-gaming-chair` · 패밀리 XALLKING Gaming · 현 템플릿 `x5f` · 설명 119단어 · 미디어 9장(영상 0, alt 9/9) · SEO 타이틀 있음 · 리뷰 4.7 (3건) · 데이터 출처: AU sc_attributes 메타필드
- 변형(SKU / 판매가 / 정가 / 재고 / 배송중량): Dream Pink Blue `X5FS-201-JT` $699.00 / $849.00 / 4 / 0kg

| 항목 | 정규화 값 | 원문(sc_attributes) |
|---|---|---|
| 권장 신장 | 150–190 cm | 150-190CM |
| 최대 하중 | 150 kg | 150KG |
| 시트 높이 | 41.5–48 cm | 41.5-48CM |
| 시트 폭 | 50.5 cm | 50.5CM |
| 시트 깊이 | 41–43.5 cm | 41-43.5CM |
| 전체 높이 | 108.5–122 cm | 108.5-122CM |
| 리클라인 | 110/122/135° | 110°-122°-135° |
| 순중량 | 24.6 kg | 24.6KG |
| 팔걸이 | 4D | 4D armrest: Up and down: 6.5 CM Front and back: 4 CM Left and right: 70° Linked Recline |
| 럼바 | — | 4-zone lumbar support Up and down: 4CM |
| 헤드레스트 | — | 3D headrest： Up and down: 7CM Headrest rotation: 45° Bracket rotation: 40° |
| 메커니즘 | — | Self-weight-bearing three-speed wire-controlled mechanism |
| 메시/소재 | — | Elastic-Breathable-Oilproof-Pressure-Resistant Mesh |
| 시트 쿠션 · 서스펜션 | TRUE | Yes · Yes |
| 인증 · 가스리프트 | — · — | 설명/메타필드 내 언급 기준 |

- 현재 설명(앞 250자): Never settle for mediocrity. Average is the adversary of excellence. The XALLKING X5F ergonomic gaming chair transcends the ordinary seat. It’s a strategic asset crafted to serve as a high-performance extension of your physique. This ergonomic chair 
- **확인 필요**: 갤러리 영상 없음

### XALLKING X5S Ergonomic Gaming Chair

- handle `/products/xallking-x5s-ergonomic-gaming-chair` · 패밀리 XALLKING Gaming · 현 템플릿 `x5s` · 설명 162단어 · 미디어 10장(영상 0, alt 10/10) · SEO 타이틀 있음 · 리뷰 5.0 (3건) · 데이터 출처: AU sc_attributes 메타필드
- 변형(SKU / 판매가 / 정가 / 재고 / 배송중량): Black Samurai `X5S-801-JT` $559.00 / $799.00 / 0 / 0kg; Gray Knight `X5S-802-JT` $569.00 / $799.00 / 0 / 0kg

| 항목 | 정규화 값 | 원문(sc_attributes) |
|---|---|---|
| 권장 신장 | 150–190 cm | 150-190CM |
| 최대 하중 | 150 kg | 150KG |
| 시트 높이 | 43–51 cm | 43-51CM |
| 시트 폭 | 50.5 cm | 50.5CM |
| 시트 깊이 | 42.5–46.5 cm | 42.5-46.5CM |
| 전체 높이 | 108.5–123.5 cm | 108.5-123.5 |
| 리클라인 | 108/118/128/140° | 108°-118°-128°-140° |
| 순중량 | 25.05 kg | 25.05KG |
| 팔걸이 | 4D | 4D armrest: Up and down: 8 CM Front and back: 4 CM Left and right: 70° Linked Recline |
| 럼바 | — | 4-zone lumbar support Up and down: 4CM |
| 헤드레스트 | — | 3D headrest： Up and down: 7CM Headrest rotation: 45° Bracket rotation: 40° |
| 메커니즘 | — | Self-weight-bearing four-speed wire-controlled mechanism |
| 메시/소재 | — | Elastic-Breathable-Oilproof-Pressure-Resistant Mesh |
| 시트 쿠션 · 서스펜션 | TRUE | Yes · Yes |
| 인증 · 가스리프트 | — · — | 설명/메타필드 내 언급 기준 |

- 현재 설명(앞 250자): The Xallking X5S ergonomic gaming chair gives gamers the upper hand when it comes to competition. It's perfect for individuals who want nothing less than complete dominance. Crafted with the spirit of a champion, this top-tier Australian ergonomic ch
- **확인 필요**: 갤러리 영상 없음

### XALLKING X3PRO Premium Ergonomic Gaming Chair

- handle `/products/xallking-x3pro-premium-ergonomic-gaming-chair` · 패밀리 XALLKING Gaming · 현 템플릿 `x3-pro` · 설명 207단어 · 미디어 9장(영상 0, alt 9/9) · SEO 타이틀 있음 · 리뷰 — (0건) · 데이터 출처: AU sc_attributes 메타필드
- 변형(SKU / 판매가 / 정가 / 재고 / 배송중량): Blue-Violet Gradient `X3PRO-401-JT` $1499.00 / $2199.00 / 1 / 0kg

| 항목 | 정규화 값 | 원문(sc_attributes) |
|---|---|---|
| 권장 신장 | 150–190 cm | 150-190CM |
| 최대 하중 | 150 kg | 150KG |
| 시트 높이 | 49–56 cm | 49-56cm |
| 시트 폭 | 51 cm | 51cm |
| 시트 깊이 | 39.5–46 cm | 39.5-46 |
| 전체 높이 | 112–126 cm | 112-126 |
| 리클라인 | 98/108/130/145° | 98°-108°-130°-145° |
| 순중량 | 29 kg | 29KG |
| 팔걸이 | 6D | 6D Up and down: 9 CM Up and down: 35° Front and back: 3.5 CM Left and right: 75 ° Left and right: 8CM Linked Recline |
| 럼바 | — | 6D lumbar support, Infinite transformation between 90°-105 |
| 헤드레스트 | — | — |
| 메커니즘 | — | Self-weight-bearing four-speed wire-controlled mechanism |
| 메시/소재 | — | Blue Red Gradient Special Mesh Elastic-Breathable-Oilproof-Pressure-Resistant Mesh |
| 시트 쿠션 · 서스펜션 | TRUE | Yes · Yes |
| 인증 · 가스리프트 | — · — | 설명/메타필드 내 언급 기준 |

- 현재 설명(앞 250자): Discover an unparalleled gaming experience with Xallking. Elevate your experience effortlessly with the XALLKING X3PRO. True champions adopt a winning mentality, and this top-tier ergonomic chair makes it happen. It blends a futuristic cyberpunk styl
- **확인 필요**: 헤드레스트 값 없음(없는 모델이면 "없음" 명시); 갤러리 영상 없음

### Sihoo DORO S100 Ergonomic Office Chair

- handle `/products/sihoo-doro-s100-ergonomic-office-chair` · 패밀리 Doro Series · 현 템플릿 `s100-2` · 설명 0단어 · 미디어 8장(영상 0, alt 8/8) · SEO 타이틀 있음 · 리뷰 2.0 (4건) · 데이터 출처: US 스펙표(inch→cm 환산) — AU 메타필드 없음
- 변형(SKU / 판매가 / 정가 / 재고 / 배송중량): Dark Grey `S100-M301` $499.00 / $789.00 / 5 / 22kg; Grey Mesh `S100-M302` $499.00 / $789.00 / 0 / 22kg

| 항목 | 정규화 값 | 원문(sc_attributes) |
|---|---|---|
| 권장 신장 | – cm | — |
| 최대 하중 | 150 kg | — |
| 시트 높이 | – cm | — |
| 시트 폭 | 51 cm | — |
| 시트 깊이 | 38.5–43.5 cm | — |
| 전체 높이 | – cm | — |
| 리클라인 | — | — |
| 순중량 | 22.3 kg | — |
| 팔걸이 | 4D | — |
| 럼바 | — | — |
| 헤드레스트 | — | — |
| 메커니즘 | — | — |
| 메시/소재 | — | — |
| 시트 쿠션 · 서스펜션 | — | — · — |
| 인증 · 가스리프트 | — · — | 설명/메타필드 내 언급 기준 |

- 현재 설명(앞 250자): **(비어 있음)**
- **확인 필요**: AU 메타필드 전무: US 환산값 임시, 본사 스펙시트로 확정 필요(시트 높이·권장 신장 미확인); 메커니즘 값 없음; 헤드레스트 값 없음(없는 모델이면 "없음" 명시); 상품 설명 비어 있음 → 초안 필요; 갤러리 영상 없음

### Sihoo M59AS Ergonomic Office Chair

- handle `/products/sihoo-m59as-ergonomic-office-chair` · 패밀리 Core Ergonomic (M/V) · 현 템플릿 `m59` · 설명 0단어 · 미디어 12장(영상 0, alt 12/12) · SEO 타이틀 있음 · 리뷰 2.5 (2건) · 데이터 출처: US 스펙표(inch→cm 환산) — AU 메타필드 없음
- 변형(SKU / 판매가 / 정가 / 재고 / 배송중량): Gray `M59AS-M301` $349.00 / $499.00 / 4 / 0kg; Black `M59AS-M302` $349.00 / $499.00 / 9 / 0kg

| 항목 | 정규화 값 | 원문(sc_attributes) |
|---|---|---|
| 권장 신장 | – cm | — |
| 최대 하중 | 150 kg | — |
| 시트 높이 | – cm | — |
| 시트 폭 | 50.5 cm | — |
| 시트 깊이 | 43.5–43.5 cm | — |
| 전체 높이 | 113.5–134.5 cm | — |
| 리클라인 | — | — |
| 순중량 | 16.6 kg | — |
| 팔걸이 | 3D | — |
| 럼바 | — | — |
| 헤드레스트 | — | — |
| 메커니즘 | — | — |
| 메시/소재 | — | — |
| 시트 쿠션 · 서스펜션 | — | — · — |
| 인증 · 가스리프트 | — · — | 설명/메타필드 내 언급 기준 |

- 현재 설명(앞 250자): **(비어 있음)**
- **확인 필요**: AU 메타필드 전무: US 환산값 임시, 본사 스펙시트로 확정 필요(시트 높이·권장 신장 미확인); 메커니즘 값 없음; 헤드레스트 값 없음(없는 모델이면 "없음" 명시); 상품 설명 비어 있음 → 초안 필요; 갤러리 영상 없음

### Sihoo DORO-C300 Pro V2 Ergonomic Office Chair

- handle `/products/sihoo-a3-doro-c300-pro-v2-ergonomic-office-chair` · 패밀리 Doro Series · 현 템플릿 `c300-pro-2` · 설명 0단어 · 미디어 16장(영상 0, alt 0/16) · SEO 타이틀 **없음** · 리뷰 4.6 (5건) · 데이터 출처: AU sc_attributes 메타필드
- 변형(SKU / 판매가 / 정가 / 재고 / 배송중량): Black / Standard Version `C300-PRO-V2-B101` $779.00 / $1099.00 / 0 / 0kg; Black / Footrest Version `C300-PRO-V2-B101-JT` $799.00 / $1099.00 / -5 / 0kg; White / Standard Version `C300-PRO-V2-B102` $779.00 / $1099.00 / -3 / 0kg; White / Footrest Version `C300-PRO-V2-B102-JT` $799.00 / $1099.00 / -3 / 0kg

| 항목 | 정규화 값 | 원문(sc_attributes) |
|---|---|---|
| 권장 신장 | 150–190 cm | 150 cm to 190 cm (approximately 5'0" to 6'3") |
| 최대 하중 | 150 kg | 150 kg / 330 lbs |
| 시트 높이 | 46–56.7 cm | 46 cm to 56.7 cm (SGS Class 4 gas lift) |
| 시트 폭 | 52.1 cm | 52.1 cm / 20.5" |
| 시트 깊이 | 42.9–47 cm | 42.9 cm – 47.0 cm / 16.9" – 18.5" |
| 전체 높이 | 106–130 cm | 106 cm to 130 cm |
| 리클라인 | 105/120/135° | 105°, 120° and 135° |
| 순중량 | 27.05 kg | 27.05 kg |
| 팔걸이 | 8D | 8D Bionic Armrests |
| 럼바 | — | Domino™ Sacral-Lumbar Support / Self-Adaptive Dynamic Lumbar Support 2.0 |
| 헤드레스트 | — | Ultra-wide 3D adjustable headrest |
| 메커니즘 | — | SyncroFlex™ Back-Glide System |
| 메시/소재 | — | Premium elastic mesh back and seat with soft PU-coated armrests |
| 시트 쿠션 · 서스펜션 | TRUE | Pressure-relief waterfall seat with 4 cm / 1.6" seat depth adjustment · DynaCore™ Full-Body Support System |
| 인증 · 가스리프트 | BIFMA, SGS · SGS Class 4 | 설명/메타필드 내 언급 기준 |

- 현재 설명(앞 250자): **(비어 있음)**
- **확인 필요**: 상품 설명 비어 있음 → 초안 필요; 갤러리 영상 없음; 이미지 alt 누락 16/16; SEO 타이틀 없음