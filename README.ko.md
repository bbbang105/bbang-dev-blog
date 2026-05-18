[English](./README.md) · **한국어**

# bbang.dev

[bbang.dev](https://bbang.dev) — 한상호의 개인 기술 블로그.
백엔드·인프라·AI/LLM 서빙·보안 기록. 약 142편.
풀 모노스페이스 · 순수 흑백 · 점선 에디토리얼 디자인.

## 스택

Astro 6 (정적, integration 0) · TypeScript + Content Collections ·
Shiki 듀얼 테마 · 손으로 쓴 단일 CSS · Vercel 배포.

## 로컬 실행

```bash
pnpm install
pnpm dev      # localhost:4321
pnpm build    # 정적 dist/
pnpm lint     # astro check
```

## 글 작성

`src/content/posts/<카테고리>/<슬러그>.md` 추가. 이미지는
`public/assets/`(소문자)에 두고 `/assets/...`로 참조.
표준 마크다운 + GFM만 (옵시디언 문법 미지원).

```yaml
---
title: "제목"            # 필수
date: 2026-04-01          # 필수
description: 한 줄 요약     # 선택 — 메타/OG/RSS
category: "AI"            # 선택 — 라벨
tags: [ai, llm]           # 선택 — 클릭 시 /?q=태그
thumbnail: /assets/x.png  # 선택 — 카드 썸네일
---
```

폴더 = URL(`/posts/<폴더>/<슬러그>/`) = 컬렉션 분류. 읽기 시간·
헤딩 앵커·canonical·OG·JSON-LD는 전부 자동.

## 기능

클라이언트 검색 · 카테고리 컬렉션 · sticky/드로어 목차 ·
헤딩·글 링크 복사 · 읽기 진행바 · 코드 복사 · 이미지 라이트박스 ·
라이트/다크 · 맨 위로 · About 전용 EN/KO 토글 · RSS · sitemap ·
llms.txt · GA4. 전부 의존성 없이 구현.

## 배포

`main` 푸시 → Vercel 자동 빌드. 커스텀 도메인 `bbang.dev`
(apex 기본, `www` → apex). CI: `pnpm lint` + `pnpm build`.

---

© 2026 bbang.dev
