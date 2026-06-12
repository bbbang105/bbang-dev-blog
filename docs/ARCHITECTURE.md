# bbang.dev - 아키텍처 & 기술 선정 이유

> 최종 업데이트: 2026-06-12 | MoAI-ADK 제거 → pure Claude Code 전환, docs/ 신설

이 문서는 bbang.dev의 기술 스택과 아키텍처를 설명한다. 단순히 "무엇을 쓰는가"가 아니라 **"왜 이것을 골랐는가"**에 초점을 맞춘다. 모든 선택에는 "개인 기술 블로그 — 글이 주인공, 유지보수는 한 사람"이라는 맥락이 반영되어 있다.

---

## 아키텍처 개요

```
Obsidian vault (.md 작성)
   │  복사
   ▼
src/content/posts/<카테고리>/<슬러그>.md
   │  pnpm build (Astro 6, Content Collections + Zod 검증)
   ▼
dist/ (완전 정적 HTML ~146 pages)
   │  git push (main)
   ▼
Vercel (자동 빌드 · TLS · CDN) ── bbang.dev
```

핵심 원칙: **빌드 타임에 전부 끝낸다.** 서버·DB·API가 없고, 런타임 JS는 검색/TOC 같은 순수 편의 기능(islands)뿐이다. 글 발행은 `.md` 복사 + commit + push가 전부다.

---

## 기술 스택 선정 이유

### Astro 6 (static, 통합 0개)

**왜 Astro인가:**

- **콘텐츠 우선**: Content Collections가 `.md` 디렉터리를 그대로 타입 안전한 데이터 소스로 만들어 준다. 폴더 구조(`posts/<카테고리>/`)가 곧 카테고리·URL이 되는 규칙을 loader 한 줄로 구현했다.
- **Zero-JS 기본**: Astro는 기본적으로 JS를 출력하지 않는다. 블로그 본문에 프레임워크 런타임이 끼어들 이유가 없다.
- **`is:inline` islands**: 테마 토글·검색·TOC 같은 동적 기능은 페이지에 인라인된 vanilla JS로 충분하다. 번들러 설정도, hydration 비용도 없다.

**왜 통합(integration)을 안 쓰는가:** sitemap·RSS·OG·JSON-LD 전부 손으로 쓴 `.ts` 엔드포인트/레이아웃 코드 ~수십 줄이다. 플러그인은 업데이트 추적 비용이 생기고, 한글 슬러그 %-인코딩 같은 세부 제어가 어렵다. 의존성은 `astro` 하나(+ dev에 `@astrojs/check`, `typescript`)다.

| 탈락 후보 | 이유 |
|-----------|------|
| Quartz (이전 사이트) | Obsidian 종속 문법·테마 커스텀 한계. 현 사이트는 표준 Markdown만 받는다 |
| Next.js | 정적 블로그에 서버 런타임·React가 과잉. 빌드 산출물도 무겁다 |
| Hugo/Jekyll | 템플릿 언어보다 TypeScript + Zod 검증이 콘텐츠 안전성에 유리 |

### 손으로 쓴 단일 CSS (no Tailwind)

`src/styles/global.css` 하나에 토큰부터 컴포넌트까지 전부 들어 있다 (~2,400줄).

- **디자인이 곧 정체성**: gallery98.org의 모노/대시드/흑백 골격 × simplethread.com의 본문 가독성. 유틸리티 클래스 조합으로는 나오지 않는 손맛이 목표였다.
- **순수 흑백 원칙**: `--accent`가 `--ink`로 매핑된다 — 색이 없고, 어포던스는 밑줄(dashed → solid)로 표현한다. 다크 모드는 색 반전(`#fff ↔ #161616`)일 뿐 색을 더하지 않는다. 썸네일(콘텐츠)만 원본 컬러를 유지한다.
- **고정폭 한글 폰트**: Sarasa Mono K self-host — Latin(Iosevka)과 한글이 모두 고정폭이라 "터미널/장부" 미감이 한·영 혼용 본문에서 깨지지 않는다.

### Content Collections + Zod

frontmatter 오타(`title` 누락, 잘못된 `date`)가 **빌드 실패**로 잡힌다. 146개 글을 한 사람이 관리하는 상황에서 런타임 검증보다 빌드 게이트가 안전하다. `thumbnail`/`bodyImage`는 옵셔널 — `lib/thumbs.ts`의 4단 폴백 체인(frontmatter > dropped file > 본문 첫 이미지 > 생성 SVG placeholder)이 빈 구멍을 메운다.

### Vercel

- main push → 자동 빌드·배포·TLS. 정적 산출물이라 비용은 사실상 0.
- `.dev` TLD는 HSTS-preload라 HTTPS가 강제된다.
- CI(GitHub Actions)는 배포와 별개로 `pnpm lint` + `pnpm build` 그린을 PR 게이트로 요구한다.

---

## 디렉터리 구조와 데이터 흐름

```
content.config.ts ─ posts 컬렉션 정의 (glob loader + Zod)
        │
        ▼
lib/feed.ts ─ 전체 글 정렬·피드 가공 ──▶ pages/index.astro · page/[page].astro
lib/thumbs.ts ─ 썸네일 폴백 결정     ──▶ 피드 카드 · cover/[...id].svg.ts
        │
        ▼
pages/posts/[...slug].astro ─ 본문 렌더 + TOC + 메타
layouts/Base.astro ─ 모든 페이지 공통 head(SEO)·헤더·푸터
```

- **검색**: 빌드 시 전체 글의 title/tags/description을 홈에 인라인 → 클라이언트에서 즉시 필터(`<mark>` 하이라이트). 별도 인덱스 파일·서비스 없음.
- **i18n**: URL 분리 없는 단일 URL + 클라이언트 토글. 크롬은 항상 영어, About 본문만 `.about-i18n` 스코프에서 ko/en 전환. hreflang은 의도적으로 생략(언어별 URL이 아니므로).

---

## 의도적으로 안 하는 것들

| 항목 | 이유 |
|------|------|
| 댓글 | 외부 위젯(JS·트래킹) 비용 > 효용. 피드백은 SNS/이메일로 |
| CMS | Obsidian이 에디터. `.md` 복사가 곧 발행 파이프라인 |
| 이미지 최적화 파이프라인 | 수동 관리(`public/assets/`)로 충분한 규모. 필요해지면 Astro assets 검토 |
| 다크모드 컬러 팔레트 | 흑백 반전만. 색을 더하는 순간 정체성이 무너진다 |
