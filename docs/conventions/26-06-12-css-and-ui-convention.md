# CSS / UI / 클라이언트 JS 컨벤션

스타일시트는 `src/styles/global.css` 하나뿐이다. 새 CSS 파일·CSS-in-JS·Tailwind를 추가하지 않는다.

## 1. 디자인 토큰

- 색·폰트·간격은 반드시 `:root` 토큰을 사용한다 — `var(--ink)`, `var(--paper)`, `var(--muted)`, `var(--hair)`, `var(--accent-soft)` 등. **hex 하드코딩 금지** (다크 모드가 토큰 반전으로 동작하므로).
- 타이포 스케일: `--fs-mega`~`--fs-label`, 본문 행간 `--lh-body: 1.78`(한글 장문 기준), 리듬 `--rhythm`.
- 본문 컬럼 폭은 `--measure: 70ch`.

## 2. 흑백 원칙 (정체성)

- UI 크롬은 **순수 흑백** — `--accent`는 `--ink`로 매핑되어 있고, 색을 더하지 않는다.
- 링크 어포던스는 색이 아니라 **밑줄**(dashed → hover 시 solid)로 표현한다.
- 콘텐츠(글 썸네일·본문 이미지)만 원본 컬러를 유지한다.
- 다크 모드는 `data-theme="dark"` 토큰 반전(`#fff ↔ #0a0a0a`)일 뿐이다.

## 3. 접근성 (a11y)

| 대상 | 규칙 |
|------|------|
| 아이콘 버튼 | `aria-label` 필수 (예: 테마 토글) |
| 현재 페이지 내비 | `aria-current="page"` |
| 이미지 | 의미 있는 `alt` (장식이 아닌 한 `alt=""` 금지) |
| 포커스 | dotted `:focus-visible` 아웃라인 유지 — 제거 금지 |
| 모션 | `prefers-reduced-motion: reduce` 존중 — 애니메이션·smooth scroll 분기 필수 |

## 4. 클라이언트 JS (islands)

- 동적 기능은 페이지/레이아웃의 인라인 `<script is:inline>` vanilla JS로만 작성한다 — 프레임워크·번들 의존 금지.
- `localStorage`/`matchMedia` 접근은 항상 `try/catch` 가드 (프라이빗 모드 대비).
- 테마·언어처럼 페인트 전에 적용돼야 하는 것은 `<head>`의 no-flash 인라인 스크립트 패턴을 따른다 (`data-theme`/`data-lang` 어트리뷰트 방식).
- 페이지 간 상태 공유는 URL 쿼리(`/?q=검색어`)로 — 전역 스토어 없음.

## 5. i18n

- 헤더/푸터 등 크롬 문자열은 **항상 영어**, `src/i18n.ts`에 정의.
- 마크업 분기는 `<T en="..." ko="..." />` 컴포넌트 또는 `data-lang-en`/`data-lang-ko` 어트리뷰트.
- 페이지 단위 ko/en 토글이 필요하면 About의 `.about-i18n` 스코프 패턴을 따른다.
