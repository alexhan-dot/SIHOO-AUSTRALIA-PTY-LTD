# SIHOO AU 상품페이지·리뷰 통합 작업지시서

검수일: 2026-09-08. 대상: `sihoo.myshopify.com`, DRAFT `187727839523`.
LIVE `181013971235`는 게시·수정 대상이 아니다. 상품의 templateSuffix, 가격, 재고, 앱의 리뷰 원본 데이터는 이번 작업에서 변경하지 않는다.

## 확인한 문제와 이번 적용

활성 상품 27개 중 SIHOO 브랜드 20개가 JSON 템플릿 15개를 사용한다. 나머지는 XALLKING 5개와 Desker 계열 2개다. 전체 상품 템플릿 44개를 삭제하거나 상품을 새 템플릿에 재할당하지 않았다. 현재 파일명을 호환용으로 유지하면서 반복 기능의 구현을 공통화했다.

| 우선순위 | 문제 | 작업 및 완료 기준 | 상태 |
|---|---|---|---|
| P0 | M18 상단 346개, 본문 Klaviyo 30개로 불일치 | 동일 상품의 Loox 평점·건수를 상단과 본문에서 사용. 실제 M18 4.6/346 일치 | DRAFT 적용·브라우저 확인 |
| P0 | 리뷰 앱·너비·페이지당 건수·링크가 템플릿마다 다름 | 15개 템플릿에 `SIHOO Product reviews` 한 개. product-only, 모든 평점/텍스트 포함, 10개씩, 최대 1160px | DRAFT 적용 |
| P0 | 빈 리뷰에서 별점 기본값이 사용될 수 있음 | 리뷰가 없으면 별점·건수를 만들지 않고 리뷰 확인/작성 링크 표시 | 공통 요약 구현·테스트 통과 |
| P0 | M56 Loox 메타필드 10개 vs 본문 위젯 11개 | 앱 원장·캐시·메타필드 동기화를 확인. 숫자를 테마에 덮어쓰지 않음 | 미해결; 앱 관리자 확인 필요 |
| P0 | 미국 리뷰 이전 완료를 주장하는 기존 안내 | M59AS/S100/V2의 이전 완료·동일 사양 문구는 증빙 미확인. DRAFT에서 승인된 출처 안내를 켜는 설정을 기본 OFF로 변경 | DRAFT 적용; 공유 메타필드 원문 유지 |
| P1 | 긴 설명 전에 모델의 선택 기준이 불명확 | 미국 최신 구조를 참고한 공통 `SIHOO Product highlights`: 핵심 특징 3개, 옵션 안내, 리뷰·AU 상담·배송 링크 | M18/M57/M59AS/V2 적용 |
| P1 | M18 사진의 발받침을 기본 구성으로 오인 | Black with Leg Rest에만 포함됨을 구매 영역 다음에 명시 | DRAFT 적용 |

리뷰 데이터 증량이나 리뷰 가져오기는 실행하지 않았다. Klaviyo를 사용하던 4개 템플릿은 DRAFT의 표시 위젯을 Loox로 교체했다. Klaviyo 계정의 리뷰를 삭제하거나 원본을 수정하지 않았다. 두 앱 사이의 리뷰별 중복·누락 대조는 별도 작업으로 남아 있다.

## 미국 목록과 AU 대응

`sihoooffice.com`은 현재 `https://www.sihoo.com/`으로 연결된다. 공개 상품 목록의 1페이지에서 19개 상품, 2페이지에서 0개를 확인했다. 이는 확인 시점의 공개 판매 목록이며, 단종·비공개·지역별 상품 전체를 뜻하지 않는다.

| AU 상품 | AU 템플릿 | 현재 미국 공개 목록 대응 | 적용 판단 |
|---|---|---|---|
| M18 | m-18 | [M18](https://www.sihoo.com/products/m18-ergonomic-chair) | 핵심 구조 적용. 치수·하중·각도는 AU 내 충돌이 있어 복사 금지 |
| M57 | m57 | [M57](https://www.sihoo.com/products/m57-ergonomic-chair) | 핵심 구조 적용. 헤드레스트 조절량 US 3.9in / AU 8cm 차이 확인 필요 |
| M59AS | m59 | [M59AS](https://www.sihoo.com/products/sihoo-m59as-ergonomic-office-chair) | 플립업 팔걸이·분리형 등받이·메시를 간단히 안내. 생산 SKU 동일성은 별도 확인 |
| Doro C300 Pro V2 | c300-pro-2 | [C300 Pro V2](https://www.sihoo.com/products/doro-c300-pro-v2) | 지원 시스템·좌판 깊이·팔걸이 안내 적용. US 풋레스트 옵션 자동 추가 금지 |
| Doro C300 Pro | doro-series-template | [C300 Pro](https://www.sihoo.com/products/sihoo-doro-c300-pro-ergonomic-chair) | 모델명 대응. AU URL은 c300으로 남아 있어 주문 SKU와 모델 세대 확인 후 상세 확장 |
| Doro S100 | s100-2 | [S100](https://www.sihoo.com/products/sihoo-doro-s100-ergonomic-office-chair-with-dual-dynamic-lumbar-support) | 상세 확인. 동적 요추·좌판 조절 중심 구성 후보, AU 사양 확정 후 반영 |
| Doro S300 | s300 | [S300](https://www.sihoo.com/products/sihoo-doro-s300-gravity-defying-ergonomic-chair) | 상세 확인. 리클라인 구조 중심 구성 후보, AU 사양 확정 후 반영 |
| M16 | m-16 | 해당 모델 없음 | AU 자료 유지·리뷰 통합 |
| V1 | v1 | 해당 모델 없음 | AU 자료 유지·리뷰 통합 |
| M56 | m56-v1 | M56B/M56C만 존재 | 같은 모델로 취급하지 않음 |
| M59 | 기본 product | M59AS만 존재 | 같은 모델로 취급하지 않음 |
| M57 Footrest | 기본 product | 독립된 동일 모델 확인 못함 | 일반 M57 리뷰와 합산하지 않음 |
| Vito M90 | 기본 product | 해당 모델 없음 | AU 자료 유지·리뷰 통합 |
| M76 | 기본 product | 해당 모델 없음 | AU 자료 유지·리뷰 통합 |
| Vito M90 Footrest | 기본 product | 해당 모델 없음 | M90 기본형과 리뷰 합산하지 않음 |
| Doro C100 | c100 | 해당 모델 없음 | AU 자료 유지·리뷰 통합 |
| Doro C500 | c500 | 미국 판매 목록에 없음 | [본사 도매 C500](https://wholesale.sihoo.com/products/c500/)은 보조 자료. US PDP로 오인하지 않음 |
| M57 Pro | m57-pro | 해당 모델 없음 | M57과 혼합 금지 |
| M57 Pro Footrest | m57-pro | 해당 모델 없음 | 같은 템플릿이어도 product.id별 리뷰 유지 |
| M18 Pro | m18-pro | 해당 모델 없음 | M18과 혼합 금지 |

미국의 가격·USD 할인·Affirm/Klarna·미국 배송·무료 반품·보증 조건·고객 수·매체 추천·건강 효과를 AU의 사실로 복제하지 않는다. 최신 미국 페이지도 오류 가능성이 있다. 원문 전체 또는 모델별 이미지를 일괄 복제하지 않고, AU 설명과 교차 확인되는 핵심 내용만 새 문장으로 작성했다.

## 다음 실행 순서와 인수 기준

아래 시간은 실행 계획용 예상 작업량이며, 자료·권한 대기 시간은 제외한다.

| 순서 | 구체 작업 | 담당/예상량 | 인수 기준 및 의존성 |
|---|---|---|---|
| 1 | M18 사양 충돌 해결: FAQ의 하중 136kg vs 표 150kg, 좌판 높이 46–55 vs 43–53cm, 깊이 46 vs 42cm 등 | AU 상품 담당 + 개발, 0.5–1일 | 현재 입고 SKU의 매뉴얼·실측/공급사 서면값 확정. FAQ와 사양표 동일 값. 임의로 US 값 선택 금지 |
| 2 | Klaviyo↔Loox 리뷰 원장 비교 | AU 앱 관리자, 0.5–1일 | 4개 이전 템플릿의 product ID별 원본 export 비교. 별점·작성일·본문·미디어·verified 상태와 누락 여부 확인. 누락이 있으면 출처를 유지한 추가 이전 계획 |
| 3 | Loox 정렬·사진·평점 필터·더 보기·작성 양식 검수 | QA, 0.5일 | 데스크톱/390px에서 높은·낮은 평점 모두 접근. 리뷰 작성은 테스트 계정·전용 절차로 실제 고객 데이터와 구분. 정렬 기본값 변경은 앱 공통 설정 영향 확인 후 |
| 4 | 남은 3개 US 대응 모델(C300 Pro/S100/S300)의 상세 확장 | 콘텐츠 + 개발, 1–2일 | 각 AU SKU 검증표 승인 후 공통 highlights에 특징 3개. 조절 영상·설치 안내·치수·FAQ가 제품별로 맞음 |
| 5 | 상품페이지 3개 계열로 정리 | 개발, 2–3일 | standard-mesh / cushioned / doro 구조. 구매 블록·리뷰·사양·FAQ는 공통 코드, 차이는 모델 데이터. 20개 상품 스크린샷과 기능 비교 후 templateSuffix 재할당을 게시 계획과 함께 실행 |
| 6 | 중복 콘텐츠와 오래된 문구 제거 | 콘텐츠 + 개발, 1–2일 | 숫자로 고정된 리뷰 건수·가격 차이·작업시간 추천 문구, placeholder, 중복 FAQ 목록을 전수 대조. 비활성 섹션도 목록화 후 보관/삭제 판단 |
| 7 | 해외 리뷰 추가 | HQ + AU 앱 관리자, 자료 후 1–2일 | HQ 서면 허가·공식 export·동일 SKU 증빙·중복 제거·개인정보 필드 확인·출처 안내 확보. 모든 평점 유지. 가져오기는 앱 공통 데이터이므로 LIVE 영향 검토 필요 |
| 8 | 사진·영상 리뷰 수집 개선 | AU CRM 담당, 1일 | 현재 발송 흐름과 중복 여부 조사, 배송 완료 기준 요청 시점 설계, 인센티브 있으면 공개. 초안 검토 후 발송. 이번 작업에서는 고객에게 메시지 발송 안 함 |
| 9 | 전환 측정 | AU 분석 담당 + 개발, 0.5–1일 | GA4에서 리뷰 이동/상세 보기/장바구니 이벤트를 중복 없이 측정, 모델·기기별 기준선 확보. 유입·재고·프로모션 차이를 통제해 평가 |

템플릿 수를 즉시 줄이는 것보다 현재 상품의 올바른 내용·리뷰·옵션을 유지한 채 공통 기능을 먼저 묶는 것이 이번 단계의 인수 기준이다. 기존 44개 파일 중 미사용·비공개·외부 앱 생성 템플릿은 현재 15개 변경과 별개로 정리한다. 상품 재할당은 모든 테마에 영향을 주므로 DRAFT 테스트 목적으로 실행하지 않는다.

## 관리자 운영 방식

- Theme Editor의 `SIHOO Product reviews`: 한 상품 템플릿에 한 개. Loox app block의 상품별 표시를 유지한다. 앱 전체 리뷰 합산이나 사진 리뷰만 표시하는 설정은 사용하지 않는다.
- `SIHOO Review summary` / `Use SIHOO unified Loox summary`: 같은 상품의 `loox.num_reviews`, `loox.avg_rating`을 사용한다. 별점이나 건수를 직접 입력하지 않는다.
- `SIHOO Product highlights`: 모델마다 검증된 특징 3개와 선택 안내만 수정한다. 공통 레이아웃 수정은 이 섹션 파일 한 곳에서 한다.
- `Show approved import disclosure`: 실제 이전 기록과 동일 SKU 검증이 완료됐을 때만 켠다. 현재는 OFF다. 공유 `custom.review_source_note` 값은 이번에 수정하지 않았다.
- 기존 Spring Sale 배너·컬렉션·프로모션 JS와 사양 Fit guide 개선은 보존한다. 업로드는 명시 파일 목록 + DRAFT ID + `--nodelete`로 제한한다.
- 변경 전 소스는 `theme/rollback-pdp-2026-09-08`에 보관한다. 되돌릴 때도 변경 대상 17개 기존 파일만 검토해 복원한다. 새 공통 파일 3개는 참조가 제거되면 미사용 상태로 남겨도 된다. 롤백 직전 다른 관리자의 최신 변경을 다시 비교한다.

## 검증 범위와 남은 한계

- 20개 활성 SIHOO 상품을 브라우저로 열어 공통 리뷰 섹션 1개와 상품별 요약 표시를 확인했다. 최초 DOM에 iframe이 없던 M16/M56/C500은 로드 후 재확인했다. M16 위젯 72개, C500 28개, M56 11개를 확인했다. M56 상단의 10개와 차이는 미해결이다.
- 모바일 390px에서 M59AS 특징 1열·가로 넘침 없음·출처 안내 OFF를 확인했다. 실제 리뷰 3.3/3 및 2점 리뷰가 유지된다. 모바일 상담 말풍선이 일부 리뷰를 가리는 기존 UX는 후속 앱 표시 설정 검토 항목이다.
- M18은 실제 Loox iframe에서 346개·4.6점을 확인했다. 상단 리뷰 링크의 도착을 확인했으며, 최초 위젯 로딩 중 레이아웃 이동은 별도 성능 검수 항목이다.
- 자동 회귀 검증: 15개 템플릿, 관련 없는 섹션 보존, 4개 schema 중복 ID, 5개 평점 시나리오(0개·1개·낮은 평점·타 앱 값 혼재), 출처 문자열 escape.
- 전체 Theme Check는 기존 오류 120개·경고 319개가 남는다. 이번 신규 공통 섹션/스니펫의 추가 진단은 없다. 전체 테마 정상 판정을 의미하지 않는다.
- Shopify가 C500의 기존 앱 경로 `spec-compare`를 `specs-compare`로 정규화했다. 블록 UUID·설정은 같으며 내려받은 정규 경로를 소스에 반영했다.
- 코드만으로는 리뷰 진위·HQ 허가·앱 간 모든 리뷰의 중복·누락을 검증할 수 없다. 앱 iframe 내부 정렬/필터 전 조합, 실제 리뷰 제출, 스크린리더, 결제·배송·반품 응답, 전체 기기의 성능, GA4 전환 개선은 미검증이다.
- DRAFT 적용을 LIVE 게시나 전체 사이트 전수검수 완료로 표기하지 않는다. 게시 전 위의 P0 사양 충돌과 리뷰 이전 기록 대조를 해결해야 한다.

구현 근거: [Shopify app blocks](https://shopify.dev/docs/storefronts/themes/architecture/blocks/app-blocks), [Loox 위젯 설정](https://help.loox.io/article/646-the-loox-product-reviews-widget), [Loox 평점 스니펫](https://help.loox.io/support/solutions/articles/501000162408-displaying-the-star-rating-widget-on-vintage-themes). 본문은 표준 app block, 상단은 Loox 공식 코드 방식의 공통 스니펫을 사용한다. 원본 숫자는 Loox 메타필드에서 읽는다. 가짜 리뷰 카드·별도 리뷰 데이터베이스·미국 평점 하드코딩을 만들지 않는다.
