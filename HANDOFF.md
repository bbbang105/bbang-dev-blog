# astro-blog — 핸드오프 문서

bbang.dev 개인 기술 블로그. Quartz 4(레거시) 리디자인 프로토타입을
독립 Astro 프로젝트로 분리한 것. 이 문서 하나로 인계 가능하도록 작성.

작성일: 2026-05-18
최종 갱신: 2026-05-18 (세션 인계)

---

## 0. 현재 상태 (최신 — 새 세션은 여기부터)

완료:
- 독립 Astro 프로젝트, GitHub `github.com/bbbang105/bbang-dev-blog` (Public) 연결, `main` 푸시 중
- 원본 콘텐츠 142편 이관 (원본 파일명 기반 안전 슬러그, 카테고리 폴더 보존)
- 에셋 이관 완료: `public/Assets/` (백준·이미지1·인터스텔라 등 21개), 본문 `../Assets/`→`/Assets/` 정규화, 렌더링 검증됨
- `.github` 이식 (CODEOWNERS·auto-assign·commit-labeler·PR템플릿·ci.yml, kikoai 기준·deploy-dev 제외)
- GitHub 라벨 22개 클론 (kikoai 동일), `PERSONAL_TOKEN` 시크릿 등록됨
- 패키지매니저 pnpm, **CI(green) 통과 확인**

남은 핵심 (P0):
1. 도메인 구매 (사용자) → `astro.config.mjs`의 `site`를 실도메인으로 교체
2. 호스팅 연결: Vercel 권장 — 레포 import → 자동 빌드(pnpm), 커스텀 도메인+HTTPS 연결
3. 옵시디언→Astro 콘텐츠 갱신 파이프라인 설계 (현재는 1회 수동 이관 상태)
4. 옵시디언 전용 문법(`[[ ]]`,`![[ ]]`,`> [!callout]`) 렌더링 정책 — 현재 미처리

그다음 (P1): SEO/GEO 풀세팅(도메인 확정 후 일괄), favicon/PWA/GA
참고(비차단): CI에 Node20 액션 deprecation 경고 어노테이션 있음(2026-06 이후 적용, 실패 아님)


---

## 1. 이게 뭔가

- 기존 실사이트: `~/Desktop/obsidian-quartz-blog` (Quartz 4, `bbbang105.github.io`) — **건드리지 않음, 그대로 살아있음**
- 이 프로젝트: 그 리디자인을 **Astro로 새로 구현**한 결과물을 독립 분리한 것
- 콘텐츠 모델: Markdown + frontmatter (옵시디언 볼트의 .md를 그대로 사용. 옵시디언 "연동"이 아니라 .md 파일을 올려 렌더링하는 방식)
- 디자인 컨셉: 풀 모노스페이스 · 순수 흑백 · 점선 구분선 · gallery98풍 긱 + 잡지 에디토리얼

## 2. 기술 스택

- Astro 6 (정적 출력, 외부 integration 없음 — 손으로 쓴 CSS, 의존성 최소)
- TypeScript, Content Collections(Zod 스키마 검증)
- Shiki 듀얼 테마(github-light / tokyo-night), 폰트: Sarasa Mono K (self-host woff2)
- JS 거의 없음(아일랜드만): 클라이언트 페이지네이션·검색·목차 드로어·진행바·코드복사

## 3. 디렉터리

```
src/
  pages/         index / collections / about / posts/[...slug] / page/[page] / 404 / cover/[...id].svg.ts
  layouts/Base.astro    공통 셸(헤더 2단 반응형, 푸터, 테마/언어 토글)
  components/T.astro     ko/en 분기 컴포넌트
  content/posts/<카테고리>/<safe-slug>.md   글 142개 (원본 파일명→안전 슬러그, 폴더=카테고리)
  content.config.ts      frontmatter 스키마(title/date/tags/description/category/thumbnail/bodyImage)
  styles/global.css      전체 디자인 시스템(단일 파일)
  i18n.ts                UI 문자열 ko/en
  lib/                   feed 유틸(fmtDate 등)
public/fonts, public/assets, public/favicon ...
astro.config.mjs         site URL + Shiki 설정
```

## 4. 로컬 실행

```
pnpm install
pnpm dev          # http://localhost:4321
pnpm build        # dist/ 정적 출력 (146 페이지, 0 에러)
pnpm lint         # astro check (타입)
```

## 5. 완료된 것 (그대로 사용 가능)

- 홈: 번호 원장형 글 피드 + 클라이언트 사이드 전체 검색 + 15개 페이지네이션(숫자만, 중앙정렬, 모바일 5+말줄임)
- 글 인덱스 절대값(2페이지 16부터, 리셋 안 됨)
- Collections: 카테고리 아코디언(접힘 기본), 영문 A-Z → 한글 가나다 정렬
- About 포트폴리오 페이지
- 헤더: 데스크톱 1줄 / 모바일 2존(브랜드+작은 KO·◐ 버튼 / 링크 / 풀폭 검색), 진짜 390 뷰포트 무오버플로우 검증 완료
- 포스트: 우측 목차(데스크톱 sticky 레일 + 스크롤 하이라이트 / 모바일 우측 슬라이드 드로어), 본문은 "목차 제외 영역 중앙" 정렬, post-nav 동일 정렬
- 읽기 진행바(상단 2px), 코드 복사 버튼(`✓ [copied]`, execCommand 폴백+낙관적 UI)
- ko/en 토글(기본 en), 다크/라이트 토글(무플래시)
- 푸터: GitHub·LinkedIn·Instagram(bbang_dev)·Threads·X·Email

### 알려진 미해결
- 일부 글 본문 이미지가 깨짐: 옵시디언/Quartz Assets 경로(`/Assets/`, `../Assets/` 등)를 Astro `public/`로 아직 매핑 안 함. 프로토타입이라 일부만 처리됨 → 콘텐츠 마이그레이션 시 일괄 해결 필요

## 6. 남은 작업 (우선순위)

### P0 — 배포 전 필수
1. **도메인**: 사용자가 구매 예정. 확정되면 `astro.config.mjs`의 `site`를 실제 도메인으로 교체(현재 `https://bbbang105.github.io` placeholder). `public/CNAME`(GitHub Pages 시) 또는 호스팅 DNS 설정
2. **호스팅 선택 + 배포 CI**: Vercel(권장)/Cloudflare Pages/GitHub Pages/Netlify 중 결정. GitHub 새 레포 생성 후 연결. 배포 워크플로 작성(없음). GitHub Pages면 base 경로 처리 주의
3. **콘텐츠 동기화** (1회 전체 이관 완료: Quartz 볼트 142편 → 원본 파일명 기반 안전 슬러그, 카테고리 폴더 보존, title/category frontmatter 주입). 남은 것: (a) 옵시디언→Astro 갱신 파이프라인(스크립트/CI) 설계, (b) 옵시디언 전용 문법(`[[위키링크]]`,`![[임베드]]`,`> [!callout]`,블록참조) 렌더링 정책 — 현재 미처리, 사용 시 remark 플러그인/전처리 필요
4. **이미지 경로 정리**: 깨진 본문 이미지 일괄 매핑(`public/assets/`로 이동 + frontmatter/본문 경로 치환 규칙)

### P1 — 출시 직후
5. **SEO/GEO 풀세팅** (도메인 확정 후 일괄): canonical·OG·Twitter, OG 이미지 동적 생성 확장, `@astrojs/sitemap`, `@astrojs/rss`, robots.txt, JSON-LD(BlogPosting/Person sameAs/Breadcrumb/WebSite), `llms.txt`/`llms-full.txt`, hreflang(ko/en)
6. **favicon/PWA/Analytics**: 파비콘 세트, manifest, GA(기존 G-BKNGY77L23 재사용 여부 결정)

### P2 — 개선(디자인 톤 유지)
7. 접근성: `:focus-visible` 점선 아웃라인 일관 적용
8. 검색 결과 키워드 `<mark>` 강조
9. 본문 이미지 라이트박스(드로어 패턴 재사용)
10. `prefers-reduced-motion` 확장(드로어/진행바 트랜지션 비활성)
11. 헤딩 hover 시 `#` 앵커, 예상 읽기 시간, 테마 토글 상태 텍스트

## 7. 의사결정 대기 (사용자 확인 필요)

- 도메인 문자열(예: bbang.dev) 및 등록처
- 호스팅 플랫폼(권장: Vercel)
- Quartz 실사이트 운영 정책: 완전 대체 / 병행 / 스테이징
- 콘텐츠 동기화 방식(자동 파이프라인 vs 1회 복사)
- GA 등 기존 자산 재사용 여부

## 8. 작업 규칙 / 검증

- 화면 작업은 헤드리스 Chrome 스크린샷 + 직접 확인 루프 사용. 좁은 모바일 폭은 `--window-size`가 부정확 → **CDP(`--remote-debugging-port` + `Emulation.setDeviceMetricsOverride`)로 실측** (node 글로벌 WebSocket 사용)
- Git: `git add -A` 금지(명시적 추가), push는 사용자 승인 후, force push 금지
- 디자인 톤(모노·흑백·점선) 유지가 기본 제약

## 9. 레거시 참고

- 원본 Quartz: `~/Desktop/obsidian-quartz-blog` (실사이트, 무손상)
- 원본 프로토타입(분리 전): `~/Desktop/obsidian-quartz-blog/astro-prototype` (보존됨, 향후 삭제 가능)
