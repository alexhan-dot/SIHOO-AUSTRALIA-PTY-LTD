# 서비스 페이지 검토 + 같은 맥락으로 수정할 페이지 목록 (2026-10-07)

> 모바일 3줄 요약
> 1. Assembly Service 페이지: 가격·커버리지 주장은 운영 확인 필요(8개 주·준주 전부, 지역도 동일 $50, 최소 5개). 기술 오류 3건은 바로 고쳐야 함 — "Talk to the Commercial Team" 버튼 404(`/pages/contact` → `/pages/contact-us`), 견적 버튼 앵커 불일치(`#assembly-enquiry` vs 폼 id `requirements-form`), 파트너 로고 9개 사용 승인 여부.
> 2. 같은 사실(배송·창고·워런티·조립 서비스·주소·연락처)을 말하는 페이지 16곳이 서로 다르게 적혀 있음. 특히 체크아웃 배송 정책($15–$50 유료 배송, 창고 3곳, 0499 번호), FAQ("조립 서비스 제공 안 함"), About Us(3년 보증만)가 신규 페이지와 정면 충돌.
> 3. 테마 상태: LIVE 테마가 오늘(10/7)까지 계속 편집 중이고 DEV 테마 2개가 새로 생김. 9/9 드래프트(WORK)는 한 달 전 기준이라 그대로 게시하면 그 사이 라이브 변경(서비스 페이지 섹션 등)이 사라짐 → 게시 전 재동기화 필요.

---

## 0. 스토어·테마 현재 상태

| 항목 | 확인 결과 |
|---|---|
| 스토어 | SIHOO Australia · sihoo.myshopify.com · sihoo.com.au · support@sihoo.com.au · AUD |
| LIVE 테마 | "LIVE - SIHOO (Symmetry)" 181013971235, 마지막 수정 2026-10-07 02:08Z (10/6에 assembly-service·disposal-service 템플릿 추가) |
| 9/9 작업 드래프트 | "WORK - SIHOO Symmetry 2026-09 fixes DRAFT" 187727839523, 마지막 수정 2026-09-09 08:20Z — 미게시 |
| 다른 작업 테마 | "DEV - SIHOO (Symmetry)" 188174401827 (9/13), 188323594531 (9/20) — 누가 무엇을 하는지 확인 필요 |
| 라이브에 이미 반영된 것 | 상품명·SEO·태그·컬렉션 통일(9/9), 메타필드 콘텐츠(새 템플릿 게시 전까지 비노출) |
| 미공개 대기 | 비교 페이지 `compare-sihoo-chairs`, 창고 블로그 글 |

**게시 전 필요한 것**: 라이브 테마를 다시 복제 → 9/9 변경(섹션 20개·템플릿·스니펫, 리포 `theme/work-theme-187727839523/`)을 그 위에 재적용 → 검증 → 게시. 그대로 187727839523을 게시하면 10/6 서비스 페이지 섹션(assembly-*, disposal-*, trusted-partners, requirement-foirm)과 9/9 이후 라이브 편집이 모두 사라짐.

## 1. Office Chair Assembly Service 페이지 검토 (`/pages/office-chair-assembly-service`, 10/6 생성)

### 1.1 운영 확인이 필요한 주장 (HQ/운영팀 확답 전까지 노출 보류 권장)

| # | 페이지 문구 | 확인할 것 |
|---|---|---|
| 1 | "$50 per chair, GST included. Same rate in every Australian state, metro or regional" | 실제 단가, GST 포함 여부, 지역 할증 없음이 맞는지. 창고는 시드니·멜번·브리즈번·퍼스 4곳인데 애들레이드·호바트·다윈·지방까지 같은 가격으로 인력 보내는 체계가 있는지 |
| 2 | "covers NSW, VIC, QLD, WA, SA, TAS, ACT, NT" + "Adelaide CBD, Canberra Civic and Barton, Hobart CBD and Darwin CBD are all serviced" | 실제 서비스 가능 지역. 보수적으로는 창고 4개 도시 메트로 + "other areas on request" |
| 3 | "We regularly assemble in the Sydney CBD, North Sydney, Parramatta, Macquarie Park … Perth CBD and West Perth" | "regularly"는 실적 주장. 실제 시공 이력이 있는 지역만 |
| 4 | "assembled on site by our team" / "Our team, same standard" / "Assembled by the supplier" | 자사 인력인지 외주 계약업체인지. 외주면 "our assembly partners" 등으로 |
| 5 | "Minimum booking of 5 chairs" | 최소 수량·개인 고객(1–4개) 처리 방식. 체크아웃 배송정책은 "assembly service for an additional charge, ring for a quote"라고 돼 있어 개인도 가능한 것처럼 읽힘 |
| 6 | "Packaging and cardboard removed when we leave" | 포장재 회수 포함 여부 |
| 7 | "Warranty alignment: build errors sit with you (DIY) vs Assembled by the supplier" | 조립 서비스 이용 시 보증 범위가 실제로 달라지는지. 다르지 않으면 소비자법상 오해 소지 → 문구 완화 |
| 8 | "17 hours saved per 50 chairs … Independent testing by TechRadar Pro" | 출처 링크 확인 후 각주로 |
| 9 | "May qualify as a deductible business expense" / "Is assembly tax deductible?" | 회계 면책 문구는 있음. 유지 가능하나 "Check with your accountant" 위치를 답변 첫 줄로 |
| 10 | "Trusted Partners" 로고 9개: Blink Property, Costco, Harvey Norman, Woolworths, Workspaces, Sydney Tools, TCS, Bunnings, JB Hi-Fi | 조립 서비스 고객인지, 단순 유통 파트너인지. 로고 사용 동의 없으면 삭제. 조립 페이지 맥락에서는 "조립 서비스를 쓴 고객"으로 읽힘 |
| 11 | 비교표 "Airtasker or similar" 열 | 경쟁사 명시 비교. 근거(가격 변동, 포장 미처리)가 일반론이면 "Marketplace taskers"로 |
| 12 | 폼 선택지 "Monitor Arms, Accessories" | 판매하지 않는 품목 → 제거 |

### 1.2 바로 고칠 기술 오류

| # | 문제 | 수정 |
|---|---|---|
| T1 | "Talk to the Commercial Team" → `/pages/contact` (404) | `/pages/contact-us` 또는 `/pages/commercial` |
| T2 | 견적 버튼 3개 `#assembly-enquiry` ↔ 폼 섹션 anchor `requirements-form` | 폼 `section_anchor_id`를 `assembly-enquiry`로 |
| T3 | 폼이 Formspree(`xwvrrnzn`)로 전송 | 수신 메일·스팸함·자동응답 확인. 기존 상업 문의 폼과 같은 ID인지 |
| T4 | 페이지 `body` 비어 있음(내용 전부 테마 템플릿) | 검색엔진용으로 body에 요약 2–3문장 + SEO title/description 설정(현재 미설정) |
| T5 | 메타필드 FAQ 스키마 없음 | 페이지 FAQ 6문항은 섹션 블록 → FAQPage JSON-LD 미출력. 필요 시 `faqs` 메타오브젝트로 |

### 1.3 Office Chair Disposal Service (`/pages/office-chair-disposal-service`) — 같은 검토 + 추가

- 1.1의 1·2·3·4·5·10·11 동일 적용 ($30/chair, 전국 동일, 최소 5개, 로고).
- "handled through our waste contractor" — 계약 폐기업체 유무, 재활용/매립 처리 방식 확인(환경 주장 아님이라 리스크 낮음).
- 통계 "30,000 tonnes … 95 per cent to landfill (DCCEEW)" — 출처 링크 필요.
- **복붙 오류**: "Sectors we serve" 6개 카드 문구가 조립 페이지 것 그대로("We assemble whole rows…", "misplaced lumbar settings") → 폐기 서비스 문구로 교체.
- 버튼 `#disposal-enquiry` ↔ 폼 anchor `requirements-form` 불일치, `/pages/contact` 404 동일.

## 2. 같은 맥락으로 수정해야 할 페이지 목록

기준: 배송·창고·워런티·반품·조립 서비스·주소·연락처·쇼룸 등 "운영 사실"을 적은 페이지. 우선순위 = 고객이 결제 전후 실제로 보는 순서.

### A. 즉시 (신규 서비스 페이지와 정면 충돌)

| 페이지 | 현재 문구 | 충돌/문제 | 수정 방향 |
|---|---|---|---|
| **체크아웃 Shipping policy** (Settings → Policies) | "Flat Rate Delivery $15 NSW / $20 VIC·ACT / $25 QLD·SA·TAS / $45 WA / $50 NT", "warehouses located in Sydney, Brisbane and Melbourne", "within 5 business days", "call 0499 642 442", "SIHOO Furniture Australia", "assembly service … ring to obtain a quote" | 사이트 전체가 무료배송·창고 4곳·1–3일인데 결제 단계 정책만 유료·3곳·5일. 고객 분쟁 시 이 문서가 기준이 됨 | `/pages/shipping-policy` 내용으로 교체 + 조립 서비스 문단에 신규 페이지 링크·"from 5 chairs, $50/chair" |
| **체크아웃 Refund policy** | "buyer has to pay for freight", "30% restocking fees", "cannot accept returns on sale items" | 상품 페이지·About Us "30-day free returns", FAQ "hassle-free" 와 충돌. 세일 상품 반품 불가는 거의 모든 상품이 세일가라 사실상 반품 불가로 읽힘 | 실제 정책 하나로 확정 후 체크아웃·`/pages/returns`·FAQ·About·상품 배지 동일 문구 |
| **FAQ** `/pages/faq` (라이브 버전) | "Currently, we do not offer professional assembly services", "Delivery typically takes 2-7 business days", "Shipping fees vary … calculate at checkout" | 조립 서비스 페이지와 정면 충돌. 9/9 드래프트 FAQ(무료배송·1–3일·창고 4곳)는 미게시 | 라이브 FAQ 6번 조립 답변을 "Yes — $50/chair on site, from 5 chairs, [link]"로, 4번 배송 답변 교체 |
| **Shipping Policy** `/pages/shipping-policy` | "warehouses in Sydney, Brisbane, and Melbourne", "within 5 business days", "dispatch within 2 business days", "Optional Assembly Service … contact us to obtain a quote" | 창고 4곳(퍼스 누락)·익일 발송·1–3일과 불일치 | 창고 4곳, 익일 발송, 1–3일(지방 더 걸림), 조립 서비스 문단에 가격·링크 |
| **Contact Us** `/pages/contact-us` & **Repair Request** `/pages/repair-request` (같은 FAQ 블록 공유) | "warranty ranging from 3 years up to 10 years", "delivered within 1-5 business days", "establishing showrooms in QLD, SA, WA", 멜번 "Sample Chair Display Partner 44 Greens Rd, Dandenong South +61 3 9793 1222" | 워런티는 3/5/10년 체계로 명시 필요. 쇼룸 추진 문구는 기한 없는 약속. 멜번 디스플레이 파트너 현황 확인 | 워런티 표(M/X 3년·Doro 5년·데스크 10년), 배송 1–3일, 쇼룸 문구는 사실만, 조립 서비스 링크 추가 |

### B. 이번 주 (사실 불일치·오래된 수치)

| 페이지 | 문제 | 수정 방향 |
|---|---|---|
| **About Us** `/pages/about-us` | "3-year warranty and 30-day free returns" (Doro 5년·데스크 10년 누락), "2.6 million+ chairs/year", "85+ countries", "2,000 media outlets", "513,00…" 등 글로벌 수치 출처 없음 | 워런티 체계 반영, 수치는 HQ 자료 연도 표기 |
| **Warranty Policy** `/pages/warranty-policy` | "All SIHOO office chairs … 3-year warranty", 주소 오타 "South Granvill" | Doro 5년·데스크 10년·XALLKING 3년 표 추가, 오타, 조립 서비스 이용 시 보증 영향(있다면) |
| **Commercial Use Warranty Policy** | "3-year warranty" 단일 | 상업용 보증 기간이 정말 동일한지(보통 상업용은 짧음). B2B 페이지 6곳이 "Extended coverage available"이라 함 → 실제 조건 명시 |
| **Return and Refund Policy** `/pages/returns` | 체크아웃 정책과 동일 내용(30% 재입고비, 세일 상품 불가) | A의 Refund 결정과 함께 |
| **Commercial** `/pages/commercial` | 가격표 25개 하드코딩(Sihoo M18 $279 …, Sidiz 5종 포함 — Sidiz는 DRAFT 상품) | 가격은 상품 링크로 동적 처리하거나 "from" 제거, Sidiz 행 삭제, 조립·폐기 서비스 섹션 추가 |
| **B2B 섹터 페이지 6개** (corporate-offices, fitout-construction, architecture-interior-design, coworking-spaces, government-education, customer-service-office-chairs) | 폼에 "Installation Required" 선택지만 있고 조립 서비스 안내·가격 없음; "Extended coverage available"; "AFRDI L…" 인증 언급(인증 보유 확인); 폼 품목 "Monitor Arms/Accessories" | 각 페이지에 "Assembly $50/chair · Disposal $30/chair" 블록 + 링크, 인증 문구는 보유 인증만(BIFMA·SGS), 폼 선택지 정리 |
| **Installation Guides** `/pages/all-product-installation-tutorials` | M90C·M18·M57·V1 4종만, "15 to 30 minutes" | 전 모델 매뉴얼(이미 `custom.manual_pdf`·영상 메타필드 있음), 상단에 "Prefer us to build it? Assembly service" 링크 |

### C. 확인만 (구조·법무)

| 페이지 | 비고 |
|---|---|
| **Terms of Service** `/pages/policy-terms` + 체크아웃 Terms | 사업자명 "SIHOO Furniture Australia" ↔ 다른 곳 "SIHOO Australia Pty Ltd (ABN 56 652 621 451)". 법인명·ABN 통일 |
| **Privacy Policy** | "Last updated 1/02/2021", 공유 대상 "Facebook, Google and Sendle"(현재 택배사 아님), 쿠키 표 구식 | 갱신 |
| **Become a Distributor** / **Wholesale**(미공개) | 내용 1KB 미만. 상업 페이지와 역할 중복 → 통합 또는 리다이렉트 |
| **Compare products** `/pages/compare-products` (앱) vs 신규 `compare-sihoo-chairs`(미공개) | 둘 중 하나로 |
| **세일 페이지 20여 개**(미공개 다수) | 배송·반품 문구 포함 시 동일 규칙. 끝난 캠페인은 비공개 유지 또는 삭제 |
| 상품 페이지 27개 (드래프트 템플릿) | 배송·반품·워런티 아코디언이 위 정책과 같은 문구여야 함. "30-Day Returns" 배지는 Refund 정책 확정 후 유지/수정 |

## 3. 권장 진행 순서

1. **사실 확정** (운영/HQ): 조립·폐기 서비스 지역·단가·최소수량·인력 형태, 반품 조건(재입고비·세일 상품), 워런티 기간 체계, 창고 4곳, 멜번 디스플레이 파트너, 파트너 로고 사용 동의.
2. **단일 사실표(Source of truth) 문서** 1장 작성 → 모든 페이지가 이 표를 따름 (리포 `docs/store-facts.md` 로 관리 제안).
3. A그룹 5곳 수정 → B그룹 → C그룹.
4. 조립·폐기 페이지 기술 오류(T1–T5) 수정은 사실 확정과 무관하게 지금 가능.
5. 테마: 라이브 재복제 후 9/9 작업 재적용 → 게시.
