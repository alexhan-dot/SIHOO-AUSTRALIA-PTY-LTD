# SIHOO Australia — sihoo.com.au 개선 프로젝트

sihoo.com.au(Shopify, Symmetry 테마)의 SEO·GEO·상품페이지·테마 업그레이드 작업 기록. 모든 테마 수정은 **미공개 작업 테마 `WORK - SIHOO Symmetry 2026-09 fixes DRAFT` (ID 187727839523)** 에서 하고, 프리뷰 링크로 확인 후 Alex 가 게시한다. 라이브 테마는 손대지 않는다.

## 시작하기

- 최신 수정 결과: [2026-09-09 리뷰·비교표·정책 안내 수정 리포트](docs/sihoo-au-fix-report-2026-09-09.md) · [27개 상품 프리뷰 검수표](docs/fixes-2026-09-09/product-preview-checks.ko.md)
- DRAFT 업그레이드 작업지시서: [docs/upgrade-2026-09/WORK-ORDER.ko.md](docs/upgrade-2026-09/WORK-ORDER.ko.md)
- Spring Sale 동기화·구매 오류 수정: [변경 범위와 검증 결과](docs/upgrade-2026-09/SPRING-SALE-SYNC.ko.md)
- 상품페이지·리뷰 통합: [실행 목록·US 대응표·미검증 범위](docs/upgrade-2026-09/PDP-REVIEWS-WORKLIST.ko.md)
- 관리자 공동 편집용 [템플릿 연결 대장](docs/upgrade-2026-09/TEMPLATE-MAP.ko.md) · [업그레이드 변경 기록](docs/upgrade-2026-09/CHANGELOG.ko.md)

- 현재 상태와 다음 할 일: [docs/sihoo-au-vs-us-site-audit-2026-09.md](docs/sihoo-au-vs-us-site-audit-2026-09.md) §8 작업 리스트
- 오늘 무엇이 바뀌었나: [docs/sihoo-au-change-report-2026-09-07.md](docs/sihoo-au-change-report-2026-09-07.md) (§6 추가/변경/삭제 구분, §7 프리뷰 링크)
- 제품 스펙 단일 소스: [docs/sihoo-au-product-spec-sheet-2026-09.md](docs/sihoo-au-product-spec-sheet-2026-09.md) + [data/sihoo-au-product-specs-import.csv](data/sihoo-au-product-specs-import.csv)
- 본사 확인 요청(2026-09-07 발송): [docs/hq-spec-confirmation-request-2026-09.md](docs/hq-spec-confirmation-request-2026-09.md) + [data/sihoo-au-spec-sheet-hq-review-2026-09.xlsx](data/sihoo-au-spec-sheet-hq-review-2026-09.xlsx)

## 프리뷰 링크 (작업 테마)

| 페이지 | 링크 |
|---|---|
| 홈 | https://sihoo.com.au/?preview_theme_id=187727839523 |
| M57 새 M 템플릿 | https://sihoo.com.au/products/sihoo-m57-ergonomic-office-chair?view=m&preview_theme_id=187727839523 |
| C300 Pro V2 새 Doro 템플릿 | https://sihoo.com.au/products/sihoo-a3-doro-c300-pro-v2-ergonomic-office-chair?view=doro&preview_theme_id=187727839523 |
| Doro 컬렉션 | https://sihoo.com.au/collections/doro-series?preview_theme_id=187727839523 |
| FAQ | https://sihoo.com.au/pages/faq?preview_theme_id=187727839523 |

## 폴더

```
docs/     감사·스펙·본사 요청·변경 리포트
data/     임포트 CSV, 본사 검토 엑셀, Lighthouse 결과, 실행한 Admin mutation 원문
theme/
  work-theme-187727839523/   작업 테마에서 수정·신규된 파일 (게시 후보)
  originals-live-2026-09-06/ 같은 파일의 LIVE 원본 (diff 용)
```

`theme/work-theme-187727839523`는 전체 테마가 아닌 부분 스냅샷이다. 배포 전 원격을 다시 받고 해당 작업의 파일 manifest로 대조한 후, 명시한 파일만 `--nodelete`로 DRAFT에 적용한다. 폴더 전체를 그대로 덮어쓰거나 누락 파일을 삭제하지 않는다. 과거 LIVE 원본과의 diff는 그 시점에 보관한 파일 범위의 비교다.

## 규칙

1. 라이브 테마 파일은 절대 직접 수정하지 않는다. 작업 테마에 적용 → 프리뷰 검증 → Alex 게시.
2. 상품 데이터(Admin) 변경은 즉시 라이브에 반영되므로 변경 전 값을 리포트에 남긴다.
3. 스펙은 `specs.*` 메타필드가 단일 소스. `sc_attributes.*` 는 읽기 전용 잔재.
4. 매 작업 후 변경 리포트를 갱신하고 프리뷰 링크를 공유한다.
