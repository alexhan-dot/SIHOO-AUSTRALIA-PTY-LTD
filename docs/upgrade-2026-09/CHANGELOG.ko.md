# DRAFT 업그레이드 변경 기록

## 2026-09-08 — U01/U02

- 최신 `origin/main` b479ce2를 기반으로 `codex/draft-theme-upgrade` 시작.
- 작업지시서와 전체 템플릿 연결 대장 작성.
- U02 사양 섹션만 변경. 기존 섹션/설정 ID 및 템플릿 연결 유지.
- 원격 사양 섹션과 저장소 내용은 줄바꿈 차이 외 동일함을 확인한 뒤 편집.
- M59 템플릿, 리뷰 관련 최신 작업, 상품 데이터, LIVE 테마 변경 없음.
- 설정 ID 중복 검사와 LiquidJS 10.29.0 렌더링 6개 시나리오 통과: 정상 범위, 검토 대기 고객 화면, 검토 대기 편집기 화면, 상한 누락, 사양 없음, Fit guide 설정 해제. LiquidJS는 Shopify 렌더러의 근사 검증이다.
- 전체 Theme Check 결과는 기존과 같은 오류 120 / 경고 319. 수정한 `specs-table.liquid`에는 진단 없음. 전체 테마 통과를 주장하지 않는다.
- 업로드 직전 원격 한 파일을 재수집해 시작 원본 SHA-256과 일치 확인. `--only sections/specs-table.liquid --nodelete`로 DRAFT 187727839523에 업로드 완료, role=unpublished 확인.
- 업로드 후 재수집한 원격 파일과 수정본이 줄바꿈 정규화 후 동일함을 확인.
- 실제 DRAFT 프리뷰 M57/M18/C300 Pro V2에서 사양표 표시, 검토 대기 Fit guide 숨김, 고객 화면에 Editor note 미노출 확인. M57에서 DRAFT 프리뷰 바도 확인.
- C300 Pro V2 모바일 폭 390px에서 사양 섹션 375px/표 345px로 측정. 전체 모바일·구매 회귀 통과를 의미하지 않는다.
- Theme Editor의 새 이름/도움말 표시 및 직접 설정 조작은 추가 수동 검수 대상. 편집기 전용 안내는 로컬 렌더링으로 검증했다.

### 프리뷰

- [M57](https://sihoo.com.au/products/sihoo-m57-ergonomic-office-chair?preview_theme_id=187727839523)
- [M18](https://sihoo.com.au/products/sihoo-m18-ergonomics-task-office-chair?preview_theme_id=187727839523)
- [C300 Pro V2](https://sihoo.com.au/products/sihoo-a3-doro-c300-pro-v2-ergonomic-office-chair?preview_theme_id=187727839523)

### 재현과 복원

격리된 임시 폴더에 `liquidjs@10.29.0` 설치 후 `node scripts/test-specs-section.mjs <임시 런타임 폴더>` 실행. 임시 node_modules는 저장소에 포함하지 않는다.

복원 원본은 b479ce2의 `theme/work-theme-187727839523/sections/specs-table.liquid`다. 원격 최신본과 이번 수정본을 비교해 후속 관리자 변경이 없는지 확인한 뒤 원본 한 파일만 DRAFT에 복원한다. LIVE 게시·상품 데이터·템플릿 할당 변경은 수행하지 않았다.
