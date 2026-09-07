# 본사 스펙 확인 요청 — 이메일 초안 (2026-09-07)

> 첨부: [`sihoo-au-spec-sheet-hq-review-2026-09.xlsx`](../data/sihoo-au-spec-sheet-hq-review-2026-09.xlsx) — 시트 1 "Spec Sheet (all products)" 활성 27개 전 제품, 노랑 = 공백, 주황 = 확인 필요, 파랑 = US 사이트 환산 임시값 / 시트 2 "Gaps to confirm" 공백·확인 항목 90행 체크리스트(HQ answer 열 비움) / 시트 3 "Content assets requested" 영상·매뉴얼·alt 요청.
> 회신 데이터는 [sihoo-au-product-spec-sheet-2026-09.md](./sihoo-au-product-spec-sheet-2026-09.md) §4 확인 목록을 닫고 `data/sihoo-au-product-specs-import.csv` 에 반영한 뒤 Matrixify 임포트(작업 B2).

## 상태

- **2026-09-07 발송 완료** — Alex 가 Doris(본사) 에게 메시지로 전달. 회신 목표 2026-09-21. 회신 시 아래 "회신 후 처리 절차" 대로 진행.

## 한국어 요약 (내부용)

- 요청 대상: 본사 제품/QC 팀(스펙시트 소유 부서). 참조: AU 마케팅.
- 요청 범위: 27개 전 제품 스펙 시트를 보내되, **공백 60셀과 확인 항목 30건은 별도 시트로 분리**해 채워달라고 요청. 핵심은 S100·M59AS(AU 데이터 전무), M18·S300(US 와 상이), C300 Pro(리클라인 오타), V1(리클라인 표기), M59/M76/X5C(팔걸이 분류), M56(=M56C 여부).
- 함께 요청: 제품 영상(현재 V1 1개뿐), 설치·조정 영상, 매뉴얼 PDF, 공식 이미지, 브랜드 통계 공식값(국가 수·연간 판매량·설립 연도).
- 회신 기한 제안: 10 영업일. 우선순위: S100·M59AS·C300 Pro V2 3종 먼저(플래그십 + 공백).

---

## Email draft (English)

**To:** SIHOO HQ Product / QC team
**Cc:** SIHOO Australia marketing
**Subject:** SIHOO AU — product specification confirmation (27 models, 60 blank fields) — reply requested by 21 Sep

Hi team,

SIHOO Australia is rebuilding every product page on sihoo.com.au onto a single template that reads specifications from structured data (metafields) instead of hand-written text. Before we import, we need the official specification for each model we sell in Australia so that the numbers on our site, on Google Shopping and in AI shopping assistants are the ones HQ stands behind.

Attached is a spreadsheet with all 27 active AU products. Most fields are already filled from our current site data. We are asking you to (1) fill the blanks and (2) confirm or correct the flagged values. Everything else can stay as is unless you spot an error.

**What is in the file**

- Sheet 1 "Spec Sheet (all products)" — one row per model with 21 specification fields in cm / kg, SKUs, AU prices and shipping weights. Cells are colour-coded: yellow = blank (please fill), orange = present but needs confirmation, blue = provisional value we converted from www.sihoo.com because AU had no data.
- Sheet 2 "Gaps to confirm" — the same blanks and confirmation items as a checklist, 90 rows, with an empty "HQ answer" column for you to complete.
- Sheet 3 "Content assets requested" — product video, install/adjustment video and manual PDF per model.

**Priority items (please answer these first)**

1. **Doro S100 and M59AS** — AU has no specification data at all. The blue values are converted from the US site; we especially need seat height range, recommended user height range, overall height and recline positions.
2. **Doro C300 Pro V2** — spec is complete but we need the official product description copy, product video and image set with alt text (our listing currently has none).
3. **M18** — AU lists seat depth 42 cm and net weight 18.5 kg; the US site lists 45.5 cm and 16.8 kg. Which is correct for current AU stock?
4. **Doro S300** — AU lists minimum seat depth 40 cm; the US site lists 43.5 cm.
5. **Doro C300 Pro** — our recline field read "1105°" (typo). Please confirm 105° / 120° / 135°.
6. **V1** — recline is recorded as 0° / 9° / 18° / 27° (tilt). Please give seat-to-back angles and the mechanism name.
7. **M59, M76, XALLKING X5C** — please classify armrests as 1D / 2D / 3D.
8. **Vito M90, M59, M76, XALLKING X3 Pro** — headrest and/or mechanism fields are empty; please state the value or "none".
9. **M56** — is the AU M56 the same product as the US M56C?
10. **Desker standing desks (2)** — chair fields do not apply; please provide desktop size, height range, motor count, stages, max load and warranty.

**Also requested**

- Product videos: only V1 has one on our site. Any official product, feature or installation video links for the 25 other models would help conversion and search.
- Manual PDFs and installation guides for the Doro and XALLKING ranges (we only hold M90C, M18, M57 and V1).
- Official brand statistics to align both sites: countries served (AU site says 85+, US site says 122+), annual units (2.6M vs 1.9M) and founding year (14 vs 15 years).
- Any 3rd-party reviewer video we are allowed to embed (Linus Tech Tips, TechRadar, Creative Bloq) — please confirm licence or share the approved assets.

**How to reply**

Please edit only the coloured cells in the attached file and send it back, or reply with the corrections in this thread. If a value differs by market, tell us the AU-stock value. A reply by **Monday 21 September** lets us complete the template rollout this quarter.

Thank you,

Alex Han
SIHOO Australia
support@sihoo.com.au · 1300 002 580

---

## 회신 후 처리 절차

1. 회신 값을 `data/sihoo-au-product-specs-import.csv` 에 반영, `specs.needs_confirmation` 열 비우기.
2. 스펙 문서 §4 확인 목록 상태 갱신(닫힌 항목 취소선).
3. Matrixify dry run → 임포트(Metafields only) → 드래프트 테마에서 `specs.*` 렌더 확인.
4. 영상·매뉴얼 URL 은 `custom.install_video` / `custom.adjust_video` / `custom.manual_pdf` 에 입력.
