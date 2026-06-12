# 글 작성 컨벤션

Obsidian vault에서 작성한 `.md`를 `src/content/posts/<카테고리>/<슬러그>.md`로 복사하고, 이미지를 `public/assets/`에 넣은 뒤 commit·push하면 Vercel이 재빌드한다.

## 1. Frontmatter

```yaml
---
title: "글 제목"            # 필수 (string)
date: 2026-04-01           # 필수 (date — 문자열이어도 z.coerce.date()로 변환)
description: 한 줄 요약     # 선택 — meta/OG/RSS + 제목 아래 표시
category: "AI"             # 선택 — meta 라벨 (실제 분류는 폴더가 결정)
tags: [ai, llm]            # 선택 — meta + 클릭 시 /?q=tag 검색
thumbnail: /assets/x.png   # 선택 — 리스트 카드 썸네일 (1단계 폴백)
---
```

- Zod 검증: `title`/`date` 누락·오타는 **빌드 실패**. 모르는 키는 무시된다.
- 썸네일 폴백 체인(`lib/thumbs.ts`): frontmatter `thumbnail` > dropped file > 본문 첫 이미지(`bodyImage`) > 생성 placeholder SVG.

## 2. 폴더 = 카테고리 = URL

- 글이 들어있는 최상위 폴더가 곧 카테고리이자 URL: `posts/infra/nas란.md` → `/posts/infra/nas란/`
- 새 카테고리는 폴더만 만들면 된다. 한글 폴더/슬러그 허용(%-인코딩은 자동).

## 3. 본문 규칙

- 이미지 경로는 **소문자 `/assets/`** (대문자 `Assets`는 로컬 dev에서 깨짐)
- 헤딩은 `#`(섹션) / `##`(서브) / `###`(상세)를 일관되게 — TOC가 이 구조를 그대로 따른다
- **Obsidian 전용 문법 금지**: `[[ ]]`, `![[ ]]`, `> [!callout]` — 표준 Markdown + GFM(표)만
- 읽기 시간·헤딩 앵커·canonical·OG·JSON-LD는 자동 생성 — 본문에서 신경 쓸 것 없음
