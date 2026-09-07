# US 사이트·아마존 리뷰를 sihoo.com.au 로 가져올 수 있는가 — 검토 결과 (2026-09-07)

> 3줄 요약
> 1. **sihoo.com (US) 리뷰는 가져올 수 있다.** 같은 브랜드 스토어이고, US 는 Okendo · 우리는 Loox 인데 Loox 가 Okendo CSV 임포트를 공식 지원한다. M59AS 118건·S100 189건·C300 Pro V2 22건이 대상.
> 2. **아마존 리뷰는 사실상 불가.** 아마존 이용약관이 수집·재게시를 금지하고, 2026-05 이후 리뷰 본문이 공개 페이지에서 제거돼 기술적으로도 못 읽는다. Brand Registry 대시보드도 대량 내보내기가 없다.
> 3. **호주 소비자법(ACCC) 기준을 지키려면** 출처 표시("SIHOO US 고객 리뷰 포함"), 부정 리뷰 포함 전량 임포트, 평점 옆 리뷰 수 표기가 필요하다. 본사(Doris) 승인 + 공식 Okendo export 를 받은 뒤 진행. **아직 아무것도 임포트하지 않았다.**

---

## 1. 현황 — 세 제품의 리뷰 수와 평점

| 제품 | AU (Loox, 현재) | US sihoo.com (Okendo) | Amazon.com (US) | Amazon.com.au |
|---|---|---|---|---|
| M59AS | **3건 · 3.3점** | 118건 · 4.81점 (5★96 / 4★22), verified 108, 사진 34건, 2024-10 ~ 2026-07 | 4.3점 (ASIN B0DFGB4YRG; 본문 미공개) | 미확인 (샌드박스에서 503) |
| Doro S100 | **4건 · 2.0점** | 189건 · 4.83점 (5★158 / 4★29 / 3★2), verified 162, 사진 44건, 2024-01 ~ 2026-05 | 약 4.0점 (ASIN B0CTSDG3VD 등 6개 리스팅) | 미확인 |
| Doro C300 Pro V2 | **0건** | 22건 · 4.14점 (5★13 / 4★5 / 2★2 / 1★2), 전부 Shop 앱 경유, verified 0, 2026-04 ~ 2026-09 | 리스팅 6개 (평점 미확인) | 미확인 |
| (참고) M57 | 885건 · 4.6점 | 1,431건 · 4.84점 | — | 리스팅 있음 (판매자 SIHOO AU) |
| (참고) M18 | — | 1,600건 · 4.87점 | — | 리스팅 있음 (판매자 SIHOO AU) |

- US 데이터 출처: Okendo 공개 위젯 API (`api.okendo.io/v1/stores/eb1bc8c6-…/products/shopify-<id>/reviews`). 게시된(published) 리뷰만 나오며 이메일 등 PII 는 포함되지 않는다. 검증용으로만 조회했고 원본 JSON 은 repo 에 넣지 않았다.
- AU 의 S100 은 4건 중 저평점이 많아 **2.0점이 상품 페이지와 Google 리치 결과에 그대로 노출**되고 있다. 이 상태가 US 189건·4.83점과 나란히 있는 것이 현재 가장 큰 전환 손실 요인이다.
- C300 Pro V2 는 AU 리뷰 0건 → 구조화 데이터에 aggregateRating 자체가 없다.

## 2. 앱 호환성

| 항목 | 확인 결과 |
|---|---|
| US 리뷰 앱 | Okendo (subscriber `eb1bc8c6-9e12-4255-bc70-775461000354`) |
| AU 리뷰 앱 | Loox (widget `4kWx8-NUG3`, shop `sihoo.myshopify.com`) |
| Okendo → Loox | Loox 에 **Okendo 전용 임포터** 있음 (Manage Reviews → Import Reviews → Okendo → Okendo 에서 export 한 CSV 를 "exactly as exported" 업로드). 실패 건은 이메일로 오류 CSV 회신. |
| 커스텀 CSV | Loox custom template: 필수 `product_handle, rating(1-5 정수), author, body, created_at(YYYY-MM-DD)`, 선택 `product_id, email, photo_url(쉼표 구분, 최대 5장, JPG/PNG), reply, replied_at, verified_purchase(TRUE), incentivized(TRUE)`. 스토어당 10만 건, 파일 15 MB, 텍스트·사진 리뷰만. |
| Okendo 멀티스토어 syndication | Okendo 끼리만(Power 플랜 이상), 우리는 Loox 라 해당 없음. 장기적으로 AU 도 Okendo 로 옮기면 SKU/handle 매칭으로 US 와 자동 동기화 가능 — 별도 결정. |
| 아마존 → Loox | Loox 에 아마존 임포터 없음 (AliExpress 만). 서드파티 "Amazon review importer" 앱은 아마존 약관 위반을 대행하는 것이라 제외. |
| 핸들 매칭 | M59AS 는 US·AU 핸들이 동일(`sihoo-m59as-ergonomic-office-chair`). S100·C300 Pro V2 는 다르므로 **Okendo export 를 그대로 올리면 실패** → 커스텀 CSV 로 AU 핸들을 넣어 올리는 방식이 안전하다(초안 파일 §5). |

## 3. 아마존이 안 되는 이유 (기술 + 약관)

1. **약관**: Amazon Conditions of Use 는 "data mining, robots, or similar data gathering and extraction tools" 사용을 금지하고, 리뷰 콘텐츠의 재사용 라이선스는 리뷰어가 아마존에 부여한 것이지 브랜드에 부여한 것이 아니다. 브랜드 오너라도 예외가 없다.
2. **기술**: 2026-05 이후 `/product-reviews/<ASIN>` 은 로그아웃 상태에서 Not Found, 상품 페이지 HTML 에서도 리뷰 본문이 제거됐다. 실제로 M59AS 페이지(B0DFGB4YRG)를 받아 보면 별점·리뷰 수는 있으나 `review-text-content` 블록이 0개다.
3. **공식 경로**: Brand Registry 의 Customer Reviews 대시보드는 열람·답글만 되고 대량 export 가 없다. SP-API 도 리뷰 본문을 주지 않는다(Customer Feedback API 는 주간 집계 인사이트만).
4. **할 수 있는 것**: Amazon.com.au 의 SIHOO 리스팅은 판매자가 "SIHOO AU" 다. 우리 Seller Central 로 리뷰를 **읽고** 제품 개선·FAQ 소재로 쓰는 것, 그리고 아마존 구매 고객에게 사이트 리뷰를 **새로 요청**하는 것(Loox 리뷰 요청 링크)은 문제가 없다. 아마존 리뷰를 복사해 오는 것만 안 된다.

## 4. 호주 시장 기준 — 반드시 지킬 것 (ACCC)

ACCC 온라인 리뷰 가이드와 2023-12 인터넷 스윕 결과의 요지:

- 리뷰는 실제 사용자의 진정한 의견이어야 하고, **출처 비공개·다른 소스에서 모아 온 평점을 표시 없이 합산·긍정 리뷰만 선별 노출** 이 지적 사항이었다.
- 별점은 **근거 리뷰 수와 함께** 표시("4.8 stars – 121 reviews").
- 상업적 관계·리뷰가 실리는 경위를 숨기면 오도 행위가 될 수 있다.

따라서 US 리뷰를 가져올 때의 운영 규칙:

| 규칙 | 적용 방법 |
|---|---|
| 출처 공개 | 상품 페이지 리뷰 위젯 바로 위에 고정 문구: **"Reviews include verified purchases from SIHOO's US store (sihoo.com). Product specifications are identical; prices and delivery times shown in reviews may refer to the US."** 드래프트 테마 `main-product` 하단 텍스트 블록 또는 Loox 위젯 wrapper 에 추가(승인 후 작업). |
| 전량 임포트 | 별점 무관하게 **전부** 가져온다. 1~3점 리뷰 M59AS 0건, S100 2건, C300 Pro V2 4건 포함. |
| 제외 규칙은 별점과 무관하게 | 호주 고객에게 오해를 줄 수 있는 문장(USD 가격, 미국 배송·FedEx, Shop 앱 프로모션)이 있는 리뷰는 **별점을 보지 않고 동일 규칙으로** 제외하거나 그대로 둔다. 해당 건수: M59AS 가격 6·배송 3, S100 가격 5·배송 6·아마존 언급 1, C300 Pro V2 가격 1·배송 2. 제외 목록은 source-map 파일에 사유와 함께 남긴다. 권장: **제외하지 않고 그대로 두고 출처 문구로 설명** — 선별 자체가 리스크. |
| Verified 배지 | US 에서 `isVerified=true` 인 것만 `verified_purchase=TRUE`. C300 Pro V2 22건은 전부 미검증이므로 배지 없음. |
| 리뷰어 이름 | Okendo 표시명(예: "Brian P.") 그대로. 이메일은 가져오지 않는다(Loox 선택 항목, 개인정보 최소화). |
| 사진 | Okendo CDN 원본 URL 을 `photo_url` 로 전달 → Loox 가 자체 저장. US 스토어 자산이므로 본사 승인 범위에 포함. |
| 날짜 | 원래 작성일 유지(`created_at`). 오늘 날짜로 바꾸면 오도. |
| 평점 표기 | Loox 가 `reviews.rating` / `reviews.rating_count` 메타필드를 갱신하므로 드래프트 테마 JSON-LD(ProductGroup aggregateRating)와 컬렉션 카드 별점은 자동 반영. 임포트 후 프리뷰에서 리뷰 수가 함께 나오는지 확인. |
| 단위 | 리뷰 본문에 lbs/inch 가 있는 건(M59AS 7, S100 15)은 손대지 않는다. 리뷰 원문 수정은 금지. |

## 5. 준비한 파일 (아직 업로드 안 함)

`data/reviews/` — Okendo 공개 데이터를 Loox custom template 형식으로 변환한 **초안**. 컬럼: `product_handle(AU 핸들), product_id(AU), rating, author, body, created_at, photo_url, verified_purchase, reply, replied_at, source_note`.

| 파일 | 제품 | 행 | 비고 |
|---|---|---|---|
| `loox-import-m59as-from-sihoo-us-okendo-2026-09-07.csv` | M59AS → `sihoo-m59as-ergonomic-office-chair` (10184342307107) | 118 | |
| `loox-import-doro-from-sihoo-us-okendo-2026-09-07.csv` | **S100** → `sihoo-doro-s100-ergonomic-office-chair` (10184342208803) | 189 | 파일명의 `doro` 는 S100 을 뜻함(생성 스크립트 명명 오류, 내용은 정상). 업로드 전 `…-s100-…` 로 이름만 바꿀 것 |
| `loox-import-c300-pro-v2-from-sihoo-us-okendo-2026-09-07.csv` | C300 Pro V2 → `sihoo-a3-doro-c300-pro-v2-ergonomic-office-chair` (10264258281763) | 22 | verified 0 |

업로드 전 손볼 것:
1. `source_note` 열(Okendo reviewId 추적용)은 Loox 템플릿에 없는 열이므로 **삭제 후 업로드**하고, 삭제 전 사본을 `source-map-*.csv` 로 보관.
2. 본사 공식 export 가 오면 이 초안을 버리고 공식 파일 기준으로 다시 만든다(공개 API 는 게시된 리뷰만 보여 주므로 본사 파일과 건수가 다를 수 있음).
3. 제목(`title`)이 "5 Stars" 같은 자동 문구가 아닌 경우에만 본문 첫 줄로 합쳤다.

## 6. 진행 절차 (승인 후)

1. **Alex 결정** — §7 의 세 가지.
2. **Doris 에게 요청** (§8 초안) — (a) US 리뷰의 AU 사이트 재게시 서면 승인, (b) Okendo Settings → Import/Export → Reviews export (All time) CSV, (c) 리뷰 사진 사용 승인.
3. Okendo export 를 받으면 AU 핸들로 매핑한 최종 CSV 생성, 행 수·별점 분포를 §1 표와 대조.
4. Loox → Manage Reviews → Import Reviews → **Custom file** 업로드 (핸들이 같은 M59AS 는 Okendo 임포터로도 가능하지만 세 제품 방식을 통일). 임포트 요약 메일의 성공/실패 건수 기록.
5. 드래프트 테마에 출처 문구 블록 추가 → 프리뷰 확인 → 리뷰 수·평점·JSON-LD 검증 → change report 갱신.
6. 임포트는 **앱 데이터라 즉시 라이브에 반영**된다(테마 드래프트와 무관). 그래서 출처 문구가 라이브 테마에 먼저 있어야 한다 → 순서: 라이브 테마에 문구 블록만 먼저 게시(테마 에디터에서 텍스트 블록 1개) → 임포트.
7. 되돌리기: Loox 에서 임포트 배치 단위 삭제 가능. source-map 으로 건별 식별.

## 7. Alex 가 결정할 것

1. **제외 규칙**: USD 가격·미국 배송 언급 리뷰를 (A) 그대로 두고 출처 문구로 설명 [권장] / (B) 별점 무관 규칙으로 제외.
2. **범위**: 세 제품만 먼저 할지, M57(US 1,431건)·M18(1,600건) 등 전 제품으로 확대할지. 전 제품이면 AU 평점이 US 로 사실상 덮이므로 출처 문구를 사이트 전역(리뷰 페이지·FAQ)에도 둔다.
3. **장기**: Loox 유지 + 연 1회 수동 임포트 vs AU 도 Okendo 로 전환해 자동 syndication (앱 비용·마이그레이션 필요, 별도 견적).

## 8. Doris 에게 보낼 요청 초안 (English)

**Subject:** SIHOO AU — permission to republish sihoo.com customer reviews on sihoo.com.au (M59AS, S100, C300 Pro V2)

Hi Doris,

Our Australian product pages for M59AS, Doro S100 and Doro C300 Pro V2 currently show 3, 4 and 0 reviews, while sihoo.com shows 118, 189 and 22 for the same models. We would like to display the US reviews on sihoo.com.au, with a clear note that they were collected on SIHOO's US store, as Australian consumer law requires.

Could you please:
1. Confirm in writing that SIHOO Australia may republish sihoo.com product reviews (text, star rating, reviewer display name, review date and review photos) on sihoo.com.au.
2. Export the reviews from Okendo: Settings → Import/Export → Reviews → "All time" → Request Export, and send us the CSV. We only need the three models above for now; a full export is also fine.
3. Confirm the AU-stock M59AS, S100 and C300 Pro V2 are the same specification as the US products, so the reviews apply.

We will import all reviews for those products, including lower-rated ones, keep the original dates and names, and add the source note on each product page. We will not import customer emails.

Thank you,
Alex Han, SIHOO Australia

## 9. 참고 링크

- Loox custom file import: https://help.loox.io/support/solutions/articles/501000162508-importing-reviews-using-a-custom-file
- Loox Okendo import: https://help.loox.io/article/662-importing-reviews-from-okendo-to-loox
- Loox 지원 임포트 소스: https://help.loox.io/support/solutions/articles/501000162446-importing-reviews-to-loox
- Okendo export: https://support.okendo.io/en/articles/2057320-importing-reviews-using-the-okendo-import-template (Import/Export 화면), 스토어 간 sync: https://support.okendo.io/en/articles/1364635-how-does-review-syncing-between-stores-work
- ACCC 온라인 리뷰 가이드: https://www.accc.gov.au/business/advertising-and-promotions/online-reviews-for-product-and-services · 2023 스윕 결과: https://www.accc.gov.au/system/files/online-review-and-testimonials.pdf
- Amazon Customer Feedback API(리뷰 본문 미제공): https://developer-docs.amazon.com/sp-api/docs/customer-feedback-api
