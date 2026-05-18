# bbang.dev

[https://bbang.dev](https://bbang.dev) — 한상호(Sangho Han)의 개인 기술 블로그.

백엔드·인프라·AI/LLM 서빙·보안 대응·엔지니어링 회고를 기록합니다. 2년간 142편.
Velog → Obsidian/Quartz를 거쳐, 풀 모노스페이스 · 순수 흑백 · 점선 에디토리얼
컨셉으로 Astro에 직접 구현한 결과물입니다.

## 기술 스택

- **Astro 6** — 정적 출력, 외부 integration 0개 (의존성 최소 원칙)
- **TypeScript** + Content Collections (Zod 스키마 검증)
- **Shiki** 듀얼 테마 코드 하이라이트 (github-light / tokyo-night)
- 손으로 쓴 단일 CSS (`src/styles/global.css`), 폰트 Sarasa Mono K (self-host)
- 클라이언트 JS는 아일랜드만 — 검색·페이지네이션·목차·진행바·복사·라이트박스
- 배포: **Vercel** (자동 빌드, TLS 자동 발급). `.dev`는 HSTS preload → HTTPS 강제

## 디렉터리

```
src/
  pages/         index · collections · about · posts/[...slug]
                 404 · cover/[...id].svg.ts · sitemap.xml.ts · rss.xml.ts
  layouts/Base.astro      공통 셸(헤더·푸터·테마/언어·SEO·GA·맨위로)
  components/T.astro       ko/en 이중 렌더 컴포넌트
  content/posts/<카테고리>/<슬러그>.md   글 142편 (폴더=카테고리=URL)
  content.config.ts        frontmatter 스키마
  styles/global.css        전체 디자인 시스템 (단일 파일)
  i18n.ts                  UI 문자열 ko/en
  lib/                     feed·thumb 유틸
public/assets/             본문 이미지 (반드시 소문자 assets)
public/fonts, public/og, public/favicon* ...
astro.config.mjs           site=https://bbang.dev + Shiki
```

## 로컬 실행

```bash
pnpm install
pnpm dev      # http://localhost:4321
pnpm build    # dist/ 정적 출력 (146 페이지)
pnpm preview  # 빌드 결과 미리보기
pnpm lint     # astro check (타입)
```

## 글 작성

옵시디언 볼트(`~/Desktop/obsidian-quartz-blog/content`)에서 작성 →
이 레포 `src/content/posts/<카테고리>/<슬러그>.md` 로 복사 →
이미지는 `public/assets/...` 에 → 커밋·푸시 → Vercel 자동 재배포.
(옵시디언과 실시간 연동 아님 — `.md` 파일을 렌더링하는 방식)

### Frontmatter

```yaml
---
title: "글 제목"            # 필수 (문자열)
date: 2026-04-01            # 필수 (날짜)
description: 한 줄 요약       # 선택 — 메타·OG·RSS·제목 아래 (없으면 사이트 기본값)
category: "AI"              # 선택 — 메타 라벨
tags: [ai, llm]             # 선택 — 메타 + 클릭 시 /?q=태그 검색
thumbnail: /assets/x.png    # 선택 — 목록 카드 썸네일
---
```

- 검증은 Zod. `title`/`date` 누락·타입 오류 시 빌드 실패. 모르는 키는 무시.
- 파일 위치 폴더 = URL(`/posts/<폴더>/<파일명>/`) = 컬렉션 분류.
- 이미지 경로는 **반드시 소문자 `/assets/`** (대문자 `Assets` 금지 — 로컬 dev 깨짐).
- 본문 헤딩은 `#`(섹션)·`##`(하위)·`###`(세부)로 일관되게.
- 옵시디언 전용 문법(`[[ ]]`·`![[ ]]`·`> [!callout]`) 미지원 — 표준 마크다운 + GFM(표).
- 읽기 시간·앵커·canonical·OG·JSON-LD는 전부 자동.

## 기능

- 홈: 번호 원장형 글 피드 + 클라이언트 전체 검색(키워드 `<mark>` 강조) + 페이지네이션
- 컬렉션: 카테고리 아코디언 / 메타 태그 클릭 → `/?q=태그` 필터
- 포스트: 목차(데스크톱 sticky 레일 / 모바일 드로어), 스크롤스파이,
  헤딩 링크 앵커(섹션 URL 복사), 글 링크 복사, 읽기 시간, 읽기 진행바,
  코드 복사, 이미지 라이트박스, 맨 위로 버튼
- 테마: 라이트 기본(무플래시), 다크 토글 — 소프트 반전(`#fff↔#0a0a0a`/`#f4f4f4`)
- 다국어: 헤더·푸터는 항상 영어, About 페이지만 자체 ko/en 토글(스코프 분리)
- 접근성: `prefers-reduced-motion` 존중, `:focus-visible` 점선, 단일 h1 지향
- About: kiko 소개 + 셀프빌드/커리어/자격증 포트폴리오

## SEO / GEO

- canonical(한글 슬러그 %인코딩) · OG · Twitter Card
- JSON-LD `@graph`: WebSite + Person(sameAs) + 글은 BlogPosting(article)
- `sitemap.xml`(전 URL) · `rss.xml`(전 글) · `robots.txt` · `llms.txt`
- Google Analytics 4
- 손수 엔드포인트로 구현(의존성 0). hreflang은 단일 URL 클라이언트 토글
  구조라 의도적으로 제외.

## 배포

GitHub `bbbang105/bbang-dev-blog` → Vercel 연동(push 시 자동 빌드).
커스텀 도메인 `bbang.dev`(apex primary, `www`→apex 307), DNS는 등록처에서
A/CNAME 레코드. CI: `pnpm lint` + `pnpm build` (green 필수).

## 디자인 원칙

풀 모노스페이스 · 순수 흑백 · 점선 구분선 · gallery98풍 긱 + 잡지 에디토리얼.
색은 쓰지 않고 흑백/점선/굵기/박스로만 위계 표현. 의존성·JS 최소.

---

© 2026 bbang.dev
