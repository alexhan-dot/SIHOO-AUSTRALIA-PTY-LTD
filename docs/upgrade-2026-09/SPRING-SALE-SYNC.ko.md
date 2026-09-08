# LIVE → DRAFT Spring Sale 동기화 및 구매 오류 수정

2026-09-08 Sydney. LIVE 181013971235와 DRAFT 187727839523의 원격 원본을 새로 받아 비교했다. LIVE는 변경하지 않았다.

## 확인한 차이

| 위치 | LIVE | 작업 전 DRAFT | 처리 |
|---|---|---|---|
| 홈 배너 | Spring Sale 데스크톱/모바일 이미지와 링크 | Father’s Day 이미지/링크 | 봄 이미지·링크 적용, 전용 배너 섹션으로 분리 |
| 공지 바 | Spring Sale | Father’s Day | 봄 행사 안내로 변경 |
| 기본 블로그 글 광고 | Spring Sale 이미지/문구/링크 | Father’s Day | 봄 광고로 동기화 |
| `page.spring-sale` | 전용 랜딩 템플릿 있음 | 파일 없음 | 템플릿 추가, 기존 페이지 할당 유지 |
| 컬렉션 템플릿 49개 | 기존 구성 | LIVE와 동일 | 파일 복사 불필요. 공통 공지와 대표 컬렉션 동작 검수 |
| 사양·리뷰·SEO·구조화 데이터 | 기존 LIVE | DRAFT 개선 포함 | DRAFT 개선 유지 |

LIVE의 49%·역대 최저가 문구를 그대로 복제하지 않았다. 확보한 AU 상품 스냅샷에서 48.9% 할인 옵션은 품절 C100뿐이었고, 과거 전체 가격 이력을 검증하지 않았다. DRAFT HTML 광고는 현재 상품별 가격을 비교하는 안내로 변경했다. 가격·재고·할인 설정 자체는 수정하지 않았다.

## 재현한 중대한 구매 문제

LIVE 랜딩에 같은 M57이 세 구역에서 반복된다. 두 번째 카드에서 Grey Mesh를 고르면 첫 번째 카드의 가격/장바구니 variant가 Grey로 바뀌고, 두 번째 카드의 가격/장바구니 variant는 Black으로 남았다. 고객의 선택과 실제 담기는 옵션이 어긋날 수 있다.

원인: 기존 `product-static-grid`가 `document.querySelector`로 첫 동일 상품을 찾고, 섹션마다 전역 `const imageCache`를 선언한다. LIVE 콘솔에서 중복 선언 오류 5회도 확인했다.

수정은 기존 공통 그리드를 바꾸는 대신 `sihoo-spring-grid`로 분리했다. 새 스크립트는 사용자가 변경한 카드 내부만 갱신하며, 초기화가 반복돼도 커스텀 요소를 중복 등록하지 않는다. 기본 Shopify POST 장바구니 폼에 선택 variant를 전달한다. 상품 가격/할인액 문자열은 Liquid에서 제공받아 사용하며 숫자 문자열을 임의로 해석하지 않는다.

## 적용 파일 7개

1. `sections/header-group.json`: 공지 한 항목. 나머지 LIVE/DRAFT 설정이 같은 것을 확인했다.
2. `templates/index.json`: 최신 봄 이미지·링크, 첫 슬라이드 섹션 type과 접근성 설명.
3. `templates/article.json`: 봄 광고 이미지·문구·링크.
4. `templates/page.spring-sale.json`: 전용 랜딩, 6개 상품 구역을 전용 그리드에 연결, 확인되지 않은 최상급/49% 문구 제거.
5. `sections/sihoo-spring-banner.liquid`: 기존 slideshow 설정/블록 ID 유지, 이미지 링크에 접근 가능한 이름 추가.
6. `sections/sihoo-spring-grid.liquid`: 기존 상품 선택·스타일 설정 유지, 옵션 이름·이미지 크기·POST 폼 제공.
7. `assets/sihoo-spring-grid.js`: 카드 범위 내 옵션/가격/이미지/할인/장바구니 갱신.

기존 `slideshow`, `product-static-grid`, M59, specs-table, 리뷰 섹션, 상품/페이지/컬렉션 데이터는 변경하지 않았다. 향후 봄 전용 디자인 변경은 새 섹션에서 진행한다.

## 검증 결과

- 적용 전 7개 원격 경로를 재수집해 시작 원본과 충돌 없음 확인. 새 파일 경로도 기존 원격에 없음을 확인.
- `--only` 7개 경로와 `--nodelete`, DRAFT ID를 명시해 업로드. 테마 role=unpublished 확인.
- 적용 후 7개 파일 재수집: Liquid/JS 내용 동일, JSON은 Shopify가 추가한 자동 생성 주석을 제외한 구조·값 동일.
- 새 섹션 schema JSON 및 setting ID 중복 검사 통과. JavaScript 구문 검사 통과.
- `test-spring-grid.mjs`: 같은 상품의 다른 카드 불변, 선택 카드 가격/할인/이미지/form variant 변경, 품절 상태, 반복 스크립트 로드 검사 통과.
- 전체 Theme Check는 기존과 같은 오류 120/경고 319. 새 banner/grid 섹션·스크립트·랜딩 템플릿 진단 없음. 전체 테마의 기존 오류 해결을 뜻하지 않는다.
- DRAFT 랜딩에서 상품 그리드 6개/장바구니 폼 32개 렌더링 확인. 두 번째 M57 선택이 첫 번째/세 번째 카드에 영향을 주지 않음.
- 실제 장바구니 시험: 시작 전 빈 장바구니 → 두 번째 M57 Grey Mesh 선택 → Grey Mesh 1개/A$339/variant 37687100997826 확인 → 테스트 항목 제거 → 빈 장바구니 복원. 결제·주문 생성 없음.
- 홈 Spring Sale 배너 클릭으로 정확한 랜딩 진입 확인. 배너 링크에 접근 가능한 이름 있음.
- 실제 390px 모바일에서 랜딩 가로 넘침 없음(pageWidth 375px), 카드 폭 310px, CTA에서 상품 구역 이동 확인.
- 종료 시각 `2026-09-21T23:59:59+10:00` 및 상품 앵커 존재 확인.
- ergonomic-chairs 컬렉션: Spring 공지 표시, 품절 제외 16→14개, 가격 오름차순 A$279/329/339/349 순서 확인.
- 기본 블로그 글에서 Spring 광고 문구와 랜딩 링크 2개 확인.
- 데스크톱 홈 배너와 블로그 Ad_2 이미지 원본을 시각 확인: 할인율이 이미지 안에 고정 인쇄되어 있지 않음. 390px 홈에서 모바일 전용 `Homepage_Web_Banner_751_x_1362.jpg` 로딩 및 가로 넘침 없음 확인.
- 새 검수 탭에서 Spring 랜딩 콘솔 오류 0개, 상품 카드 32개, 기존 전역 imageCache 인라인 스크립트 0개 확인.

## 남은 운영 검증

Afterpay 실제 결제/승인·배송 지역별 비용·선주문 일정은 이번 테마 동기화만으로 검증되지 않는다. LIVE에서 가져온 해당 운영 안내는 상품/정책 담당자의 확인이 필요하다. 일반 정책 모순, 리뷰 출처, 상품 사양 검증은 기존 작업지시서의 별도 항목이다. 모바일 채팅/리뷰 앱 팝업은 여전히 표시될 수 있다.

9월 21일 종료 후 홈/공지/블로그 문구 전환은 운영 일정에 포함해야 한다. 타이머가 끝나는 것만으로 할인이나 모든 배너가 자동 종료되는 것은 아니다. 전 상품·전 옵션·전 브라우저·실결제 통과를 선언하지 않는다.

## 프리뷰 및 복원

- [DRAFT 홈](https://sihoo.com.au/?preview_theme_id=187727839523)
- [DRAFT Spring Sale](https://sihoo.com.au/pages/spring-sale-ergonomic-office-chairs?preview_theme_id=187727839523)
- [DRAFT 컬렉션](https://sihoo.com.au/collections/ergonomic-chairs?preview_theme_id=187727839523)

복원은 해당 7개 경로에 한정한다. 세 기존 JSON의 작업 전 원본은 `theme/rollback-spring-2026-09-08/`에, 파일별 전후 SHA-256은 이 문서 옆 `spring-file-manifest.json`에 보존했다. 최신 원격 변경을 비교한 뒤 복원하고, 새 랜딩/전용 섹션/JS는 참조를 먼저 확인한다. 최신 관리자 작업을 덮어쓰거나 새 파일을 일괄 삭제하지 않는다. LIVE 게시에는 별도 판단이 필요하다.

자동 회귀는 격리된 런타임에 jsdom을 설치하고 `node scripts/test-spring-grid.mjs <런타임 폴더>`로 실행한다. 테스트 런타임 자체는 저장소에 포함하지 않았다.
