# CLAUDE.md

이 파일은 Claude Code가 이 프로젝트에서 작업할 때 참조하는 가이드입니다.

---

## 프로젝트 개요

**bbang.dev** — 한상호(Sangho Han)의 개인 기술 블로그. [https://bbang.dev](https://bbang.dev)

Astro 6 기반 완전 정적 사이트. **외부 통합 0개(minimal-deps 원칙)** — Tailwind·React·플러그인 없이 손으로 쓴 단일 CSS와 인라인 islands JS만 사용한다. 콘텐츠는 Obsidian에서 작성한 `.md`를 `src/content/posts/`로 복사해 배포한다.

### 기술 스택

| 구분 | 기술 |
|------|------|
| Framework | Astro 6 (static output, 통합 0개) |
| Language | TypeScript + Content Collections (Zod 스키마 검증) |
| Styling | 손으로 쓴 단일 CSS (`src/styles/global.css`, ~2,400줄) — Tailwind 없음 |
| Font | Sarasa Mono K (self-hosted woff2, Latin Iosevka + 한글 고정폭) |
| Code Highlight | Astro 내장 Shiki 듀얼 테마 (github-light / tokyo-night) |
| Client JS | islands만 — 검색·TOC·진행바·코드 복사·라이트박스·back-to-top (인라인 `<script is:inline>`) |
| i18n | `src/i18n.ts` ko/en 문자열 맵 — 크롬(헤더/푸터)은 항상 영어, About만 스코프 토글 |
| SEO/GEO | canonical·OG·Twitter Card·JSON-LD `@graph`·sitemap·RSS·robots·llms.txt 전부 수제 (0 deps) |
| Analytics | Google Analytics 4 (`G-BKNGY77L23`, Base.astro 인라인) |
| Deploy | Vercel (main push 시 자동 빌드, `.dev` HSTS-preload → HTTPS 강제) |
| CI | GitHub Actions `ci.yml` — `pnpm lint` + `pnpm build` 그린 필수 |

---

## 빌드 및 실행

```bash
pnpm install
pnpm dev      # 로컬 개발 (http://localhost:4321)
pnpm build    # 정적 빌드 → dist/ (~146 pages)
pnpm preview  # 빌드 결과 서빙
pnpm lint     # astro check (타입 검사)
```

> 의존성 추가는 최소화 원칙. 새 패키지를 넣기 전에 손으로 쓸 수 있는지 먼저 검토할 것.

---

## 프로젝트 구조

```
src/
├── layouts/Base.astro       # 공용 레이아웃 — head(SEO/OG/JSON-LD/GA4) + 마스트헤드 + 푸터 + 테마/검색 스크립트
├── pages/
│   ├── index.astro          # 홈 — 넘버링 ledger 피드 + 클라이언트 검색 (히어로 없음, 단일 페이지)
│   ├── page/[page].astro    # 페이지네이션 스텁 — getStaticPaths() 빈 배열, /page/N 라우트 없음
│   ├── posts/[...slug].astro # 포스트 상세 — TOC(스크롤스파이)·진행바·앵커·코드복사·라이트박스
│   ├── collections.astro    # 카테고리 아코디언
│   ├── about.astro          # 소개/포트폴리오 — 자체 ko/en 토글(.about-i18n)
│   ├── 404.astro
│   ├── cover/[...id].svg.ts # 썸네일 없는 글의 타이포그래픽 placeholder SVG 생성
│   ├── rss.xml.ts           # RSS (수제)
│   └── sitemap.xml.ts       # sitemap (수제, 한글 슬러그 %-인코딩)
├── content/posts/<카테고리>/<슬러그>.md  # 글 본문 — 폴더명 = 카테고리 = URL
├── content.config.ts        # posts 컬렉션 Zod 스키마 (title/date 필수)
├── components/T.astro       # <T en ko> 언어 분기 인라인 컴포넌트
├── i18n.ts                  # ko/en UI 문자열 맵 (크롬 + About 전용)
├── lib/
│   ├── feed.ts              # 포스트 정렬·피드 데이터
│   └── thumbs.ts            # 썸네일 폴백 체인: frontmatter > dropped file > 본문 이미지 > 생성 placeholder
└── styles/global.css        # 유일한 스타일시트 — 디자인 토큰부터 컴포넌트까지 전부

public/                      # 폰트(woff2)·이미지(assets/)·OG 커버·favicon·robots·llms.txt
```

### URL 규칙

- 포스트: `/posts/<카테고리 폴더>/<슬러그>/` — 글이 들어있는 폴더가 곧 카테고리이자 URL
- 한글 슬러그는 canonical/sitemap에서 %-인코딩으로 통일
- 페이지네이션: 비활성 — 홈이 전체 글을 단일 페이지로 렌더링한다 (`page/[page].astro`는 빈 스텁)

---

## 코딩 컨벤션

> 상세 내용은 `docs/conventions/` 참조

| 컨벤션 | 핵심 규칙 | 상세 문서 |
|--------|-----------|-----------|
| 글 작성 | frontmatter `title`/`date` 필수(Zod), 이미지 소문자 `/assets/`, Obsidian 전용 문법 금지 | `26-06-12-post-writing-convention.md` |
| CSS/UI | 디자인 토큰(`--ink`/`--paper` 등) 사용, 색상 하드코딩 금지, `prefers-reduced-motion` 존중, `:focus-visible` 유지 | `26-06-12-css-and-ui-convention.md` |
| 클라이언트 JS | 인라인 `<script is:inline>` islands만, 프레임워크/번들 의존 금지, try/catch로 localStorage 가드 | `26-06-12-css-and-ui-convention.md` |
| 접근성 | 아이콘 버튼 `aria-label` 필수, `aria-current`로 현재 페이지 표시, 의미 있는 `alt` | `26-06-12-css-and-ui-convention.md` |

---

## 주요 파일 위치

| 용도 | 위치 |
|------|------|
| SEO/OG/JSON-LD/GA4 | `src/layouts/Base.astro` (head 전체) |
| 디자인 토큰 | `src/styles/global.css` 상단 `:root` / `:root[data-theme="dark"]` |
| 테마 no-flash | `Base.astro` 인라인 스크립트 (`localStorage.theme` → `data-theme`) |
| 검색 | 홈 피드가 소유(라이브 검색, 단일 페이지), 타 페이지는 Enter → `/?q=` 점프 |
| 썸네일 폴백 | `src/lib/thumbs.ts` + `src/pages/cover/[...id].svg.ts` |
| 콘텐츠 스키마 | `src/content.config.ts` |
| i18n 문자열 | `src/i18n.ts` (+ `src/components/T.astro`) |

---

## 참고 문서

```
docs/
├── ARCHITECTURE.md   # 시스템 아키텍처 & 기술 선정 이유
└── conventions/      # 코딩·글쓰기 컨벤션 (작업 전 필독)
```

### docs 파일명 컨벤션

`yy-mm-dd-{설명}.md` — 예: `26-06-12-post-writing-convention.md`
- 설명은 다른 문서와 구분될 정도로 구체적으로 (kebab-case)
- 단, `docs/ARCHITECTURE.md`는 제외하며 업데이트 시에도 네이밍을 그대로 유지
