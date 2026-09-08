# 변경 리포트 3 — P3 전 상품 콘텐츠 이관 + FAQ·블로그 연결 + 수정 요청 반영 (2026-09-08 저녁)

> 모바일 3줄 요약
> 1. 활성 상품 27개 전부 새 템플릿(Doro/M/X/Desk)용 콘텐츠 이관 완료. 프리뷰 27개 모두 Liquid 오류 0.
> 2. 요청 반영: 리뷰 출처 문구 삭제, Doro 5년 워런티(데스크 10년), 익일 발송·1–3일, C300 V2 영상 Shopify 호스팅(21:9·560px)·아이콘 복구, FAQ 12문항 추가, 블로그↔상품 양방향 연결.
> 3. 아직 라이브 아님. 드래프트 테마 프리뷰 링크는 §4. 게시(P5)는 Alex 확인 후.

---

## 1. 요청 항목별 처리 결과

| 요청 | 처리 | 확인 방법 |
|---|---|---|
| B100 가격 미정 보류, 페이지만 정확하게 | DRAFT 유지. specs.* 재검토(US 페이지에 치수표 없음 → 시트 높이·사용자 키는 미기재로 유지, `needs_confirmation`에 기록). 가격은 자리표시(320/352/416) 그대로 — 확정 전 활성화 금지 | Admin → Products → B100 |
| 배송 = 익일 발송, 보통 1–3일 | 메인 섹션 배송 문구, delivery-promise 4도시, 상품 FAQ 27개, FAQ 페이지, 블로그 초안 모두 "dispatched the next business day … usually 1–3 business days" | 프리뷰 어느 상품이든 가격 아래 문구 |
| C300 V2 아이콘 누락 | product-highlights 섹션이 `list.file_reference`를 `[i]`로 못 읽던 버그 → for-loop 선택으로 수정. 하이라이트 이미지 6/6 렌더 | V2 프리뷰 "Why you'll like it" |
| 영상 높이·화질 | 히어로 영상·스토리 영상을 Shopify Files에 업로드(1080p, `hero_video_file`/`video_file`), 섹션에 비율(21:9)·최대 높이(560px) 옵션 추가 | V2 프리뷰 히어로 |
| 리뷰 CSV 호주식 영어 재가공 → 등록 | `data/reviews/*-au-english.csv` 4종(M59AS·S100·C300 Pro V2·B100). Loox 임포트는 API가 없어 Admin → Apps → Loox → Import에서 수동 업로드 필요 | repo `data/reviews/` |
| "About these reviews…" 문구 삭제 | `custom.review_source_note` 값 삭제 + 템플릿 4종에서 섹션 제거 | 프리뷰 어디에도 문구 없음 |
| 호주식 영어·폰트 재확인 | 이관 콘텐츠 전부 AU 스펠링·미터법. 폰트: 헤딩·본문·내비·로고 모두 Inter, 본문 16px | settings_data.json |
| Doro 워런티 5년 | Doro 6개 `specs.warranty_years=5`, doro 템플릿 배지 "5-Year Warranty", FAQ·설명 5년. S300 SEO 설명의 "3-year" 잔재 수정. 데스크는 설명서대로 10년으로 desk 템플릿 수정 | 프리뷰 배지·FAQ |
| 다른 제품들도 진행 | 아래 §2 | |
| 블로그 ↔ 관련 제품 연결 | 상품 28개 `custom.related_article_paths`(상품→글) + 블로그 글 16개 `custom.related_products`(글→상품) | 상품 프리뷰 "Guides and reviews" / 블로그 글 하단 "Shop products from this article" |
| FAQ 추가·활성화(SEO) | 상품별 FAQ 6–9문항(전부 ACTIVE, FAQPage JSON-LD 자동) + FAQ 페이지 12문항 추가 | §3 |
| 다른 제품 비교 섹션 | 27개 전부 `compare_products`(2–3개) + `compare_intro`. 데스크는 desk 템플릿에 비교표 없음(스펙 키 미정의) | 프리뷰 "Compare" |

## 2. 상품별 이관 결과 (27개 + B100)

각 상품의 사진/텍스트 분리표는 `docs/migration/<handle>.md` (Doro C300 Pro V2는 앞선 리포트 2에서 US 기준 재작성). 공통으로 설정: highlights(5–6)·highlight_images·best_for·feature_stories(4–7)·faqs·compare_products·compare_intro·lifestyle_images. 제목·가격·변형·갤러리·templateSuffix·status는 변경하지 않음.

| 시리즈 | 상품 | 스토리 | FAQ | 히어로 영상 | 특이사항(확인 필요) |
|---|---|---|---|---|---|
| Doro | C300 Pro V2 | 7 (영상 5) | 5 | Shopify mp4 | — |
| Doro | C300 Pro | 6 | 8 | 없음(US 영상 세로 UGC) | 설명의 "mesh 3-year" 문구는 기존 보증 조건 그대로 |
| Doro | S300 | 6 | 8 | 있음 | SEO 설명 5년으로 수정 |
| Doro | C500 | 6 | 6 | 있음 | 설치 영상(Video/40969510224163)은 YouTube가 아니라 video-gallery 미지원 |
| Doro | C100 | 6 | 6 | 있음 | 템플릿 136 kg/152–190 cm vs specs 150 kg/150–190 cm → specs 사용, 확인 요 |
| Doro | S100 | 6 | 8 | 없음 | specs.* US 페이지에서 변환해 신규 입력(비교표용) — 시트 깊이·전고 도면/텍스트 불일치 기록 |
| M | M59AS | 6 | 8 | 없음 | specs.* 신규 입력; 사용자 키 미공개. AU 배경영상 B2uD_VkSB_E(글로벌 채널)은 승인 시 연결 가능 |
| M | M18 | 5 | 9 | 없음 | specs가 M18 Pro와 동일하게 들어가 있어 설명(136 kg, 110–126°)과 충돌 → 확인 요 |
| M | M18 Pro | 6 | 9 | 없음 | 하이라이트 이미지 없음(정사각 소재 없음); 설명표 110 kg vs specs 150 kg |
| M | M16 | 5 | 8 | 없음 | 기존 custom.faqs가 블로그용 컨테이너라 새 `faqs-m16`으로 교체 |
| M | M56 | 6 | 8 | Shopify mp4 | 템플릿 155–185 cm vs specs 150–190 |
| M | M57 | 6 | 8 | 없음(조립 영상은 video-gallery) | 헤드레스트 9.9 cm vs specs 8 cm |
| M | M57 Pro | 6 | 8 | Shopify mp4(M57C) | 설명 90–130° vs specs 109/122/134 |
| M | M57 풋레스트 | 6 | 8 | 없음 | 갤러리 사이즈표 alt "M81" |
| M | M57 Pro 풋레스트 | 6 | 8 | Shopify mp4 | 라이프스타일은 스튜디오 컷 |
| M | M59 | 5 | 8 | 없음 | 설명 150 kg/90° 암레스트 vs specs 136 kg/80° → specs 사용 |
| M | Vito M90 | 6 | 8 | YouTube(ibVZ7wA42cg, SIHOO_AU) | 설명 150 kg·3D·165–188 cm vs specs 136 kg·2D·150–190 cm; 설명에 인치 수치 잔존 |
| M | Vito M90 풋레스트 | 6 | 9 | YouTube(SIHOO_AU) | specs 암레스트 4D vs M90 2D(같은 의자) |
| M | M76 | 6 | 8 | 없음 | 설명 150–175 cm/130 kg vs specs 150–180/136 kg |
| M | V1 | 6 | 9 | YouTube(A_dat3yLMBk, SIHOO_AU) | v1 템플릿 HIGH DEMAND(5–7일 추가) 기본 표시 → 실제 지연 변형에만 쓰도록 결정 필요 |
| X | X5 Pro | 6 | 8 | Shopify mp4 | 페이지 150 kg vs specs 136 kg |
| X | X5C | 5 | 8 | Shopify mp4 | 설명 150 kg vs specs 136 kg |
| X | X5F | 6 | 8 | Shopify mp4 | 템플릿 이미지 라벨 "X5FS" |
| X | X5S | 5 | 8 | Shopify mp4 | 갤러리 마지막 컷이 X5 Pro |
| X | X3 Pro | 6 | 8 | 미설정(X3S 영상 첫 프레임 검정 — 승인 시 연결) | 헤드레스트 없음(waterfall back) |
| Desk | Desker 화이트 | 6 | 9 | 없음 | 승강 속도 32 vs 36 mm/s(설명 36 사용) |
| Desk | Carbon Fibre 블랙 | 6 | 9 | 없음 | 미사용 변형 "Black / With Footrest" $699, 갤러리에 방석 사진 |
| — | B100 (DRAFT) | 5 | 5 | 없음 | 가격 확정 대기 |

## 3. FAQ 페이지 추가 문항 (드래프트 테마 `templates/page.faq.json`)

5 워런티: Doro 5년/M·X 3년 명시(기존 답 수정), "How long is the warranty on Doro chairs?", "Is the warranty in addition to my Australian Consumer Law rights?" · 10 선택: "best for back pain", "Doro vs M series", "gaming chair or office chair" · 14 키: "best for tall people", "shorter users" · 15 결제: Afterpay/Zip · 4 배송: 추적, 파손 대응 · 3 조정: 메쉬 청소 · 11 하중: 모델별 150/136 kg 정리. 수치는 specs.* 메타필드와 대조.

## 4. 프리뷰 링크 (드래프트 테마 187727839523, `view=` 파라미터는 렌더만 바꿈)

| 상품 | 링크 |
|---|---|
| C300 Pro V2 | https://sihoo.com.au/products/sihoo-a3-doro-c300-pro-v2-ergonomic-office-chair?view=doro&preview_theme_id=187727839523 |
| C300 Pro | https://sihoo.com.au/products/sihoo-a3-doro-c300-ergonomic-office-chair?view=doro&preview_theme_id=187727839523 |
| S300 | https://sihoo.com.au/products/sihoo-doro-s300-ergonomic-office-chair?view=doro&preview_theme_id=187727839523 |
| C500 | https://sihoo.com.au/products/sihoo-doro-c500-ergonomic-office-chair?view=doro&preview_theme_id=187727839523 |
| C100 | https://sihoo.com.au/products/sihoo-a3-doro-c100-ergonomic-office-chair?view=doro&preview_theme_id=187727839523 |
| S100 | https://sihoo.com.au/products/sihoo-doro-s100-ergonomic-office-chair?view=doro&preview_theme_id=187727839523 |
| M59AS | https://sihoo.com.au/products/sihoo-m59as-ergonomic-office-chair?view=m&preview_theme_id=187727839523 |
| M18 | https://sihoo.com.au/products/sihoo-m18-ergonomics-task-office-chair?view=m&preview_theme_id=187727839523 |
| M18 Pro | https://sihoo.com.au/products/sihoo-m18-pro-ergonomic-office-chair?view=m&preview_theme_id=187727839523 |
| M16 | https://sihoo.com.au/products/sihoo-m16-ergonomics-office-chair?view=m&preview_theme_id=187727839523 |
| M56 | https://sihoo.com.au/products/sihoo-m56-ergonomic-office-chair?view=m&preview_theme_id=187727839523 |
| M57 | https://sihoo.com.au/products/sihoo-m57-ergonomic-office-chair?view=m&preview_theme_id=187727839523 |
| M57 Pro | https://sihoo.com.au/products/sihoo-m57-pro-ergonomic-office-chair?view=m&preview_theme_id=187727839523 |
| M57 풋레스트 | https://sihoo.com.au/products/sihoo-m57-ergonomic-office-chair-with-built-in-footrest?view=m&preview_theme_id=187727839523 |
| M57 Pro 풋레스트 | https://sihoo.com.au/products/sihoo-m57-pro-ergonomic-office-chair-with-built-in-footrest?view=m&preview_theme_id=187727839523 |
| M59 | https://sihoo.com.au/products/sihoo-m59-ergonomic-office-chair?view=m&preview_theme_id=187727839523 |
| M90 | https://sihoo.com.au/products/sihoo-vito-m90-ergonomic-office-chair?view=m&preview_theme_id=187727839523 |
| M90 풋레스트 | https://sihoo.com.au/products/sihoo-vito-m90-ergonomic-office-chair-with-footrest?view=m&preview_theme_id=187727839523 |
| M76 | https://sihoo.com.au/products/sihoo-m76-ergonomics-office-chair?view=m&preview_theme_id=187727839523 |
| V1 | https://sihoo.com.au/products/sihoo-v1-ergonomic-office-chair?view=m&preview_theme_id=187727839523 |
| X5 Pro | https://sihoo.com.au/products/xallking-x5pro-ergonomic-gaming-chair?view=x&preview_theme_id=187727839523 |
| X5C | https://sihoo.com.au/products/xallking-x5c-ergonomic-gaming-chair?view=x&preview_theme_id=187727839523 |
| X5F | https://sihoo.com.au/products/xallking-x5f-ergonomic-gaming-chair?view=x&preview_theme_id=187727839523 |
| X5S | https://sihoo.com.au/products/xallking-x5s-ergonomic-gaming-chair?view=x&preview_theme_id=187727839523 |
| X3 Pro | https://sihoo.com.au/products/xallking-x3pro-premium-ergonomic-gaming-chair?view=x&preview_theme_id=187727839523 |
| Desker 화이트 | https://sihoo.com.au/products/desker-height-adjustable-dual-motor-sit-stand-desk?view=desk&preview_theme_id=187727839523 |
| Carbon Fibre 블랙 | https://sihoo.com.au/products/desker-motion-desk-control-switch-black?view=desk&preview_theme_id=187727839523 |
| B100 (DRAFT, Admin 로그인 필요) | https://sihoo.com.au/products/sihoo-b100-ergonomic-office-chair?view=m&preview_theme_id=187727839523 |
| FAQ 페이지 | https://sihoo.com.au/pages/faq?preview_theme_id=187727839523 |
| 블로그 초안 | Admin → Blog posts → "Four Australian warehouses…" (비공개, 관련 상품 8개 연결) |

## 5. 결정·확인 필요

1. 스펙 충돌 목록(§2 "특이사항") — 각 상품의 `specs.needs_confirmation`에 기록. 특히 M18(136 vs 150 kg), C100, X5 Pro/X5C 하중.
2. B100 가격, 활성화 시점.
3. Loox 임포트: `data/reviews/*-au-english.csv` 4개 수동 업로드(Loox → Import reviews). HQ(Doris) 회신 대기.
4. 히어로 영상 승인: M59AS(글로벌 채널 영상), X3 Pro(X3S 영상), M57(조립 영상 4S5hM_AlfnM).
5. 데스크: 스펙 키(상판·높이 범위·모터·하중) 정의하면 desk 템플릿에도 스펙표·비교표 추가 가능.
6. 게시(P5): 상품별 templateSuffix 전환 → 기존 커스텀 리뷰 섹션·Specs&Compare 블록 제거 → Rich Results 확인 → 테마 게시. Alex 승인 후 진행.
