# 9/9 작업 재적용 — 새 작업 테마 "WORK - SIHOO Symmetry 2026-10 reapply DRAFT" (2026-10-07)

> 모바일 3줄 요약
> 1. 오늘 라이브 테마를 복제해 새 작업 테마(188857614627)를 만들고, 9/9 변경(섹션 17·스니펫 14·템플릿 7·레이아웃·설정·robots)을 그 위에 다시 올렸다. 9/9 이후 라이브에 들어간 것(조립·폐기 서비스 페이지, S300 랜딩, GTM, 10/5 설정, 9/30 상품 템플릿 재작성)은 전부 보존.
> 2. 전략 변경: 레거시 상품 템플릿 20개를 덮어쓰지 않는다(9/30에 다른 작업자가 전부 다시 만들었음). 대신 게시 직후 상품 27개의 Theme template을 `doro/m/x/desk`로 전환(API 1분, 표는 §3).
> 3. 옛 드래프트(187727839523)는 더 이상 게시 후보가 아님. 삭제하지 말고 보관.

## 1. 라이브에서 9/9 이후 바뀐 것 (복제본에 그대로 있음)

| 날짜 | 내용 |
|---|---|
| 9/13 | `custom-main-product.liquid` 재저장(내용은 포크 시점과 동일 → 우리 버전으로 교체해도 손실 없음, 30개 hunk 전부 우리 변경) |
| 9/14–9/30 | 상품 템플릿 20개 전부 재작성(`product.m57.json` 등 구조: main-product + custom-main-product 병행, 레거시 카피 섹션). 새 템플릿 `m59-2`, `m59s`, `m76`, `vitom90`, `vitom90-footrest` 추가, 상품 4개의 suffix 변경(M59→m59-2, M90→vitom90, M90 풋레스트→vitom90-footrest, M76→m76) |
| 9/21–9/23 | S300 랜딩 2종(`page.s300-landing*`, s300-* 섹션 30개), `theme.liquid`에 GTM + s300 변형 noindex |
| 9/30 | 헤더 그룹, Oktoberfest 세일 페이지, article.json |
| 10/5 | `settings_data.json`(LCP 이미지·Klaviyo 다이제스트 배너) |
| 10/6 | 조립·폐기 서비스 페이지 섹션 22개 + 템플릿 2개 + 에셋 |
| 10/7 | index.json, media-shoutouts 페이지 |

## 2. 재적용 방식

| 파일 | 처리 |
|---|---|
| 새 섹션 15·스니펫 10·템플릿 5(doro/m/x/desk/range-compare) | 그대로 업로드(라이브에 없던 파일) |
| 포크 이후 라이브가 안 건드린 파일(faq-accordion, faq, collapsible-tabs, breadcrumbs, canonical-urls, doc-head-core/social, podium-widget, structured-data-header/product, page.faq.json, robots.txt) | 우리 버전으로 덮어씀 |
| `custom-main-product.liquid` | 라이브 vs 우리 diff가 전부 우리 hunk → 우리 버전 |
| `layout/theme.liquid` | 라이브 버전 기준으로 우리 편집 3건만 적용(상업 페이지 meta-refresh 6블록 제거, EOFY ItemList 제거, breadcrumbs 스키마 render). GTM·s300 noindex 유지 |
| `config/settings_data.json` | 라이브 버전에 키 2개만 적용(`button_style: normal`, `font_size_base_int: 16`). LCP·Klaviyo 등 캠페인 값은 라이브 유지 |
| 레거시 상품 템플릿 20개 | **건드리지 않음**(9/30 라이브 버전 유지). 전환은 §3 |
| `settings_schema.json`, `header-group.json`, `index.json`, `article.json`, `page.spring-sale.json`, `main-product.liquid`, `sihoo-spring-*`, `sihoo-product-highlights` | 옛 드래프트에서 9/7 오후 다른 작업자가 바꾼 파일 — 라이브 버전 유지(우리 템플릿과 무관) |

## 3. 게시 직후 상품 템플릿 전환표 (productUpdate templateSuffix)

| 상품 | 현재 suffix (롤백값) | 새 suffix |
|---|---|---|
| Doro C300 Pro V2 10264258281763 | c300-pro-2 | doro |
| Doro C300 Pro 8060533801251 | doro-series-template | doro |
| Doro S300 8968609431843 | s300 | doro |
| Doro C500 9882185040163 | c500 | doro |
| Doro C100 9360837837091 | c100 | doro |
| Doro S100 10184342208803 | s100-2 | doro |
| M18 6048691126466 | m-18 | m |
| M18 Pro 9883536228643 | m18-pro | m |
| M16 6103810703554 | m-16 | m |
| M56 6137598509250 | m56-v1 | m |
| M57 6074824392898 | m57 | m |
| M57 Pro 9882207650083 | m57-pro | m |
| M57 풋레스트 7479130194114 | (기본) | m |
| M57 Pro 풋레스트 9902935507235 | m57-pro | m |
| M59 6137612665026 | m59-2 | m |
| M59AS 10184342307107 | m59 | m |
| Vito M90 7480195449026 | vitom90 | m |
| Vito M90 풋레스트 8757046018339 | vitom90-footrest | m |
| M76 8739162390819 | m76 | m |
| V1 6080377258178 | v1 | m |
| X5 Pro 9660749807907 | x5-pro | x |
| X5C 10130002739491 | x5c | x |
| X5F 10130722029859 | x5f | x |
| X5S 10130731139363 | x5s | x |
| X3 Pro 10130735268131 | x3-pro | x |
| Desker 화이트 8170139156771 | aftership.994c81c7 | desk |
| Carbon Fibre 블랙 8860338553123 | aftership.994c81c7 | desk |

롤백: 이전 테마 재게시 + 위 "현재 suffix"로 되돌리기(두 작업 모두 API로 1분).

## 4. 게시 절차 (갱신)

1. 프리뷰(`?preview_theme_id=188857614627&view=doro|m|x|desk`)로 확인 — 게시 전에는 `view=` 파라미터가 있어야 새 템플릿이 보임.
2. Publish 188857614627.
3. 전환표대로 27개 suffix 변경(요청 시 내가 실행).
4. 비교 페이지·창고 블로그 공개, Search Console·Merchant Center 재크롤.
