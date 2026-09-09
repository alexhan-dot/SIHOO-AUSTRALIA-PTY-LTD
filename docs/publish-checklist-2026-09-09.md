# 게시 준비 체크리스트 — WORK 드래프트 테마 → LIVE (2026-09-09)

> 모바일 3줄 요약
> 1. 드래프트 테마(187727839523)는 이제 **원클릭 게시 가능** 상태: 상품 27개의 기존 templateSuffix가 그대로 새 템플릿을 가리키도록 레거시 템플릿 파일을 덮어썼다(상품 데이터 변경 없음).
> 2. specs 충돌은 전부 **페이지 문구 기준**으로 메타필드·FAQ·하이라이트를 맞췄다.
> 3. 게시 전 결정 1건: 2026-09-08 16:18Z에 외부에서 반영된 **보수적 배송·반품 문구**(무료배송·1–3일·30일 반품 삭제, 창고 그리드·아마존 배지 숨김)를 그대로 갈지, 어제 지시한 "익일 발송·1–3일" 문구로 되돌릴지.

---

## 1. 게시 전 상태 (이 세션이 만든 것)

| 항목 | 상태 |
|---|---|
| 새 템플릿 4종 (`product.doro/m/x/desk.json`) | 드래프트 테마에 존재, 27개 프리뷰 Liquid 오류 0 |
| 레거시 템플릿 20개 (`product.c100.json` … `product.json`) | 새 템플릿 내용으로 덮어씀 → 상품의 templateSuffix를 바꾸지 않아도 게시 즉시 새 페이지 |
| 데스크 `product.aftership.994c81c7.liquid` | **미완료** — API 정책이 테마 파일 삭제를 차단(themeFilesDelete blocked). 게시 직후 데스크 2개의 templateSuffix를 `desk`로 바꾸면 끝(§2 3단계). 라이브 게시 전에는 바꾸지 말 것(라이브에 desk 템플릿이 없어 기본 템플릿으로 떨어짐) |
| 레거시 템플릿 원본 | `theme/legacy-templates-2026-09-09/` 에 보관(롤백용) |
| 기존 Specs&Compare 블록·커스텀 리뷰 섹션 | 레거시 템플릿을 덮어쓰면서 자동 제거. `review-source-note.liquid`는 미참조 상태로 남음(삭제 API 차단, 무해). `custom-product-reviews`(컬렉션 2개)·`reviews-grid`(페이지 2개)는 상품 외 템플릿이 쓰므로 유지 |
| 구조화 데이터 | BreadcrumbList · Organization · ProductGroup(aggregateRating) · FAQPage 4종 출력 확인 |
| 프리뷰 검증 (view= 없이, 실제 suffix) | 의자 25개 전부 새 템플릿 렌더, Liquid 오류 0, 비교표 15행, FAQ·스토리·관련 글 정상. 데스크 2개는 아직 AfterShip 템플릿 |
| Lighthouse | 이 환경의 Chromium이 프록시 TLS 인터스티셜에 막혀 실행 불가 → Chrome DevTools에서 프리뷰 URL로 수동 실행 권장 |
| specs 충돌 | 23개 상품을 페이지 문구 기준으로 메타필드·FAQ·하이라이트·비교 인트로 정렬 완료(`docs/migration/*.md` 의 'Specs alignment 2026-09-09' 절). FAQ 페이지 하중 답변도 갱신 |
| 폰트 | Inter 단일, 본문 16px |

## 2. 게시 절차 (Alex)

1. Online Store → Themes → "WORK - SIHOO Symmetry 2026-09 fixes DRAFT" → **Preview** 로 상품 2–3개 최종 확인 (아래 §4 링크).
2. 같은 카드의 ⋯ → **Publish**. (templateSuffix 변경·상품 편집 불필요.)
3. 게시 직후 **데스크 2개** Products → Theme template 을 `desk` 로 변경(Desker 화이트 8170139156771, Carbon Fibre 블랙 8860338553123). 그 다음 라이브에서 C300 Pro V2, M57, X5S, Desker 데스크를 열어 섹션 렌더 확인.
4. Loox → Import reviews 에 `data/reviews/*-au-english.csv` 업로드(선택).
5. Blog posts → "Four Australian warehouses…" 공개 여부 결정(배송 문구 결정과 함께).

## 3. 롤백

- Themes 목록에서 이전 라이브 테마(181013971235)를 다시 Publish 하면 즉시 원복. 상품 데이터(메타필드)는 새 테마에서만 읽으므로 라이브에 영향 없음.
- 레거시 템플릿 파일만 되돌리려면 `theme/legacy-templates-2026-09-09/` 의 파일을 드래프트 테마에 다시 업로드.

## 4. 게시 후 정리 (선택, 별도 PR)

- 상품 templateSuffix를 `doro` / `m` / `x` / `desk` 로 일괄 전환한 뒤 중복 레거시 템플릿 파일 삭제 → 이후 템플릿 수정은 4개 파일만.
- 미사용 템플릿(`product.m56.json`, `product.s100.json`, `product.c300-pro.json`, `product.story.json`, `product.m57-high-convert-pp.json`, `product.sihoo-m18.json`) 정리.
- 데스크 스펙 키 정의 후 desk 템플릿에 스펙표·비교표 추가.

## 5. 결정 필요 — 외부 편집분 (2026-09-08 16:18Z)

이 리포 밖에서 드래프트 테마가 편집됐다(섹션 5개·템플릿 4개·FAQ 페이지). 내용은 ACCC 관점의 보수화:

| 위치 | 어제 지시(리포 기준) | 현재 드래프트 테마 |
|---|---|---|
| 가격 아래 배송 문구 | "Free delivery Australia-wide, usually 1–3 business days" / "Dispatched next business day…" | "Delivery timing depends on stock and your postcode" |
| 신뢰 배지 | 30-Day Returns · Free AU Shipping | Returns: conditions apply · Australian delivery |
| 배송·반품 아코디언 | 무료배송·익일 발송·30일 반품 | 재고·우편번호에 따라 다름, 반품 정책 링크 |
| delivery-promise 섹션 | 창고 4곳 그리드 + 1–3일 | 그리드 숨김(`show_warehouse_grid: false`), 문구 보수화 |
| social-proof | 아마존 배지·판매량·인증 표시 | `show_verified_claims`/`show_amazon_badge` 기본 false |
| FAQ 페이지 4번 배송 | 무료·4개 창고·1–3일 | 서비스 가능 지역·정책 링크 |
| 리뷰 섹션 | Loox `apps` 섹션 | `sihoo-product-reviews` 래퍼(출처 문구 토글 off) |

리포는 현재 테마 상태로 동기화했고, 레거시 템플릿 덮어쓰기도 **현재(보수적) 버전**을 기준으로 했다. 되돌리려면 테마 에디터에서 토글 2개(`show_warehouse_grid`, `show_verified_claims`)와 문구 4곳만 바꾸면 되고, 리포의 `git show f9064e6^:theme/work-theme-187727839523/templates/product.doro.json` 에 어제 버전이 있다.
