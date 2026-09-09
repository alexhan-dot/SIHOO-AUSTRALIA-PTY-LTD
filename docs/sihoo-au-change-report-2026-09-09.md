# 변경 리포트 4 — 문구 복원 · M18 Pro 136 kg · SEO/AI 노출 통일 · 게시 준비 (2026-09-09)

> 모바일 3줄 요약
> 1. 배송·반품 문구는 어제 지시대로 복원(익일 발송·1–3일·무료배송·30일 반품·창고 4곳 그리드·아마존 배지 ON). 외부 편집이 넣은 코드 개선(품절 변형 처리, Loox 평점 소스, 주장 토글)은 유지.
> 2. 27개 상품의 **이름·SEO 제목·설명·태그·유형**을 한 규칙으로 통일하고, 컬렉션 14개 SEO 정리(라이브 반영). 구조화 데이터에 스펙·유사 제품·영상 추가, robots.txt에 AI 크롤러 명시 허용, 전 모델 비교 페이지 신설.
> 3. 드래프트 테마는 Publish 한 번으로 전환. 게시 후 데스크 2개 템플릿 `desk` 전환 + 비교 페이지·창고 블로그 공개만 남음.

---

## 1. 요청 항목 처리

| 요청 | 처리 |
|---|---|
| 어제 문구(익일 발송·1–3일)로 복원 | 템플릿 4종(doro/m/x/desk) + 레거시 템플릿 20개 + FAQ 페이지 배송·반품 답변 7개 복원. 배송 섹션 `show_warehouse_grid`, 소셜프루프 `show_verified_claims`·`show_amazon_badge` = true. 스펙표의 "미확인 항목 있으면 핏 가이드 숨김" 게이트 제거 |
| M18 Pro 136 kg | `specs.max_load_kg` 136, 상품 설명 2곳(110 kg→136 kg), 하이라이트·비교 인트로·FAQ 2·스토리 1, M18 쪽 교차 언급 2곳 수정 |
| 검색엔진·AI 상위 노출 | §2 |
| 제품 노출 방식 통일 | §3 |

## 2. SEO / AI(답변 엔진) 노출 작업

**라이브 데이터 (즉시 반영)**
- 상품명 27개 통일: `SIHOO <모델> Ergonomic Office Chair[ with Footrest]` / `XALLKING <모델> Ergonomic Gaming Chair` / `Desker … Electric Sit-Stand Desk`. "Sihoo/VIto/DORO-C300/A3/Ergonomics" 표기 혼재 제거. URL(handle)은 그대로.
- SEO 제목 27개: `<모델> Ergonomic Office Chair | SIHOO Australia`(≤60자). SEO 설명 27개: 핵심 기능 2개 + 하중 + 워런티 + 무료배송(130–155자, 가격·이모지·리뷰 수 없음 → 오래돼도 틀리지 않음).
- productType 통일(Ergonomic Office Chair / Ergonomic Gaming Chair / Standing Desk), 태그 추가(ergonomic chair · office chair · 시리즈 · with footrest · headrest · N-year warranty) → 컬렉션 필터·내부 검색·피드 일관성.
- 컬렉션 14개: SEO 제목 `… | SIHOO Australia`, 설명에서 이모지·오래된 가격·리뷰 수 제거, 비어 있던 9개 컬렉션에 소개문 2단락(내부 링크 포함).
- M59AS 히어로 영상 연결(모델 전용 영상).

**드래프트 테마 (게시 시 반영)**
- 상품 JSON-LD 강화: `additionalProperty`(하중·사용자 키·시트 높이·리클라인·암레스트·요추·인증·워런티), `material`, `manufacturer`, `audience`(Australia), `isSimilarTo`(비교 제품), `subjectOf` VideoObject(히어로 영상). 기존 ProductGroup·Offer(무료배송·30일 반품)·AggregateRating·FAQPage·BreadcrumbList·Organization(sameAs 6개)·컬렉션 ItemList 유지.
- `robots.txt`: GPTBot·OAI-SearchBot·ClaudeBot·PerplexityBot·Google-Extended·Applebot-Extended·Amazonbot·CCBot 등 15종에 상품·컬렉션·블로그·페이지 명시 허용, 장바구니·결제·계정·검색 차단.
- 새 페이지 **"Compare every SIHOO ergonomic office chair"** (`/pages/compare-sihoo-chairs`, 미공개): 의자 29종 + XALLKING 표(사용자 키·하중·시트 높이·리클라인·암레스트·요추·워런티·가격) + ItemList JSON-LD + 선택 가이드 FAQ. AI가 "호주에서 어떤 SIHOO 의자가 맞나"에 답할 때 인용하기 좋은 단일 페이지.
- 상품 페이지마다 FAQ 6–9(FAQPage 스키마), 관련 블로그 글, 비교표, 스펙표가 동일 구조로 들어감 → 크롤러·LLM이 모델별 사실을 같은 자리에서 읽음.

**직접 못 한 것 / 권장**
- Google Search Console·Merchant Center 재크롤 요청, Bing Webmaster IndexNow — 게시 후 Alex 계정에서.
- Lighthouse는 이 환경에서 실행 불가(프록시 TLS) → Chrome DevTools에서 프리뷰 URL로 확인.
- Google Business Profile·Trustpilot/ProductReview.com.au 등 외부 신호는 별도 작업.

## 3. 제품 노출 통일 상태

| 항목 | 27개 상태 |
|---|---|
| 템플릿 | Doro 6 · M/V 13 · X 5 · Desk 2 — 4개 템플릿, 같은 섹션 순서 |
| 이름·SEO·태그·유형 | 한 규칙 (§2) |
| 하이라이트·스토리·FAQ·비교·라이프스타일·관련 글·배송 | 전부 있음 (M18 Pro·M16 하이라이트 이미지, M16 라이프스타일만 소재 없음) |
| 히어로 영상 | 16개 있음. 없음: C300 Pro, S100, M18, M18 Pro, M16, M57, M57 풋레스트, M59, M76, X3 Pro(X3S 영상 확인 필요), 데스크 2 |
| 스펙 | 페이지 문구 기준 정렬 완료, M18 Pro 136 kg |

## 4. 남은 절차 (Alex)

1. 프리뷰 확인 → **Publish**.
2. 데스크 2개 Products → Theme template `desk`.
3. Pages → "Compare every SIHOO ergonomic office chair" 공개, Blog → "Four Australian warehouses…" 공개, 메뉴/푸터에 비교 페이지 링크 추가(선택).
4. Search Console URL 검사(대표 상품 3–4개·비교 페이지), Merchant Center 피드 재가져오기(상품명 변경 반영).
5. Loox → Import reviews(`data/reviews/*-au-english.csv`).

## 5. 참고 문서
- `docs/seo-unification-2026-09-09.md` — 상품명·SEO·태그·컬렉션 전/후 표
- `docs/publish-checklist-2026-09-09.md` — 게시 절차·롤백
- `docs/migration/*.md` — 상품별 이관·스펙 정렬 기록
