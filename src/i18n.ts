// Simple ko/en string map for this prototype.
// Scope: UI chrome + the /about portfolio page only.
// Article bodies and feed post titles/excerpts are authored Korean content
// and are NOT included here (intentionally untranslated).

export type Lang = "en" | "ko";

export const ui = {
  en: {
    brandTag: "tech log",
    navHome: "Home",
    navAbout: "About",
    themeToggle: "◐ Theme",
    // Home intro
    introLabel: "// Latest writing",
    introHeading: "In the power of records, and of people.",
    introSub:
      "Development is only a means — toward more human outcomes. Understanding people matters most, so my writing is grounded in reflection.",
    sectionPosts: "Posts",
    postsCount: "entries ported",
    footCtaLabel: "// More",
    footCtaText: "Curious what I build?",
    footCtaLink: "About →",
    // Footer
    footCopy: "© {year} Sangho Han — bbang.dev",
    // Post page meta
    metaPublished: "Published",
    metaTags: "Tags",
    metaCategory: "Category",
    backToPosts: "← Back to all posts",
    // Pager
    pagerPrev: "< PREV",
    pagerNext: "NEXT >",
    pagerPage: "PAGE",
    // 404
    notFoundLabel: "// 404",
    notFoundHeading: "There's nothing here.",
    notFoundSub: "The page you requested could not be found.",
    notFoundLink: "Back to home →",
  },
  ko: {
    brandTag: "tech log",
    navHome: "홈",
    navAbout: "소개",
    themeToggle: "◐ 테마",
    introLabel: "// 최근 글",
    introHeading: "기록과 사람의 힘을 믿습니다.",
    introSub:
      "개발은 수단일 뿐, 더 인간적인 결과를 만들기 위해 노력합니다. 사람을 이해하는 일이 가장 중요하기에, 사유가 담긴 글을 씁니다.",
    sectionPosts: "글",
    postsCount: "편 이전됨",
    footCtaLabel: "// 더 보기",
    footCtaText: "제가 무엇을 만드는 사람인지 궁금하다면",
    footCtaLink: "소개 →",
    footCopy: "© {year} 한상호 (Sangho Han) — bbang.dev",
    metaPublished: "작성일",
    metaTags: "태그",
    metaCategory: "분류",
    backToPosts: "← 전체 글로 돌아가기",
    pagerPrev: "< 이전",
    pagerNext: "다음 >",
    pagerPage: "페이지",
    notFoundLabel: "// 404",
    notFoundHeading: "여기엔 아무것도 없습니다.",
    notFoundSub: "요청한 페이지를 찾을 수 없습니다.",
    notFoundLink: "홈으로 돌아가기 →",
  },
} as const;

// About page bilingual content.
export const about = {
  whoLabel: { en: "// Who I am", ko: "// 저는" },
  kikoBadge: {
    en: "Now building · Pre-launch startup",
    ko: "Now building · 창업 준비 중",
  },
  kikoOneLiner: {
    en: "An AI-native service I'm building. What I focus on most right now.",
    ko: "AI 네이티브로 만들고 있는 서비스. 지금 가장 집중하는 것.",
  },
  kikoSolves: {
    en: "I know how to work with AI. An engineer who built 3 products solo full-stack through vibe coding and designed/implemented the backend of a RAG-based AICC solution is building the next product.",
    ko: "AI와 함께 일하는 방법을 압니다. 바이브코딩으로 3개 프로덕트를 1인 풀스택으로 만들고, RAG 기반 AICC 솔루션의 백엔드를 설계·구현해 온 엔지니어가 다음 제품을 만들고 있습니다.",
  },
  selfBuiltHeading: { en: "Self-built", ko: "직접 만든 것" },
  careerHeading: { en: "Career", ko: "경력" },
  certsHeading: { en: "Certifications", ko: "자격증" },
  showcase: [
    {
      name: "OneTime",
      role: {
        en: "Solo full-stack · plan, build, operate",
        ko: "1인 풀스택 · 기획·개발·운영",
      },
      one: {
        en: "A web service for coordinating schedules across many people with one shared link.",
        ko: "링크 공유 한 번으로 여러 사람과 일정을 맞추는 웹 서비스.",
      },
      impact: {
        en: [
          "25K+ cumulative users / 2K+ MAU",
          "N+1 removed 18.38s → 0.35s (98%↓), Bulk Insert 16.56s → 0.41s",
          "AWS monthly cost $83 → under $50 (40%↓)",
        ],
        ko: [
          "누적 25K+ 유저 / MAU 2K+",
          "N+1 제거 18.38s → 0.35s (98%↓), Bulk Insert 16.56s → 0.41s",
          "AWS 월 비용 $83 → $50 미만 (40%↓)",
        ],
      },
      links: [
        { label: "Live", href: "https://www.onetime-with-members.com/" },
        { label: "GitHub", href: "https://github.com/onetime-with-members" },
      ],
    },
    {
      name: "Hazel",
      role: {
        en: "Solo full-stack (AI Vibe Coding)",
        ko: "1인 풀스택 (AI Vibe Coding)",
      },
      one: {
        en: "Flower-shop sales/customer/reservation SaaS. Paper ledger → digital.",
        ko: "꽃집 매출·고객·예약 관리 SaaS. 종이 장부 → 디지털 전환.",
      },
      impact: {
        en: [
          "1:N multi-pickup reservation system design",
          "PWA + Web Push reservation reminders",
          "Accounts-receivable management built",
        ],
        ko: [
          "1:N 멀티 픽업 예약 시스템 설계",
          "PWA + Web Push 예약 리마인더",
          "미수 매출 관리 체계 구축",
        ],
      },
      links: [
        {
          label: "GitHub",
          href: "https://github.com/bbbang105/flowershop-admin",
        },
      ],
    },
    {
      name: "kusting",
      role: {
        en: "Solo full-stack (AI Vibe Coding)",
        ko: "1인 풀스택 (AI Vibe Coding)",
      },
      one: {
        en: "Blog-study operations automation platform. Discord bot + web dashboard.",
        ko: "블로그 스터디 운영 자동화 플랫폼. Discord 봇 + 웹 대시보드.",
      },
      impact: {
        en: [
          "Full automation of 30+ member study ops",
          "RSS every 5 min → attendance → fines → alerts",
          "FCM web push + 4 board-vote types",
        ],
        ko: [
          "30+명 스터디 운영 전 과정 자동화",
          "RSS 5분 주기 → 출석 → 벌금 → 알림",
          "FCM 웹 푸시 + 게시판 투표 4종",
        ],
      },
      links: [
        { label: "GitHub", href: "https://github.com/bbbang105/study-admin" },
      ],
    },
  ],
  career: [
    {
      company: { en: "LOGOS AI", ko: "(주)로고스AI" },
      period: { en: "2025.08 — Present", ko: "2025.08 — 현재" },
      role: "Backend & Infrastructure Engineer",
      desc: {
        en: "Backend/infra for 'OptiGen', a RAG-based AICC solution. LLM streaming API (SseEmitter), Spring Batch chunking, AWS POC infra design, LiteLLM+Datadog LLM Observability.",
        ko: "RAG 기반 AICC 솔루션 'OptiGen' 백엔드·인프라. LLM 스트리밍 API(SseEmitter), Spring Batch 청킹, AWS POC 인프라 설계, LiteLLM+Datadog LLM Observability 구축.",
      },
    },
    {
      company: { en: "Ribella Realty", ko: "(주)리벨라리얼티" },
      period: { en: "2025.06 — 2025.08", ko: "2025.06 — 2025.08" },
      role: "Backend & Infrastructure Engineer",
      desc: {
        en: "Backend/infra for 'FindIt', a realtor matching platform. AWS migration in 3 days: $300+/mo → $108 (66%↓), GitLab CI/CD, FastAPI REST API.",
        ko: "부동산 중개 매칭 'FindIt' 백엔드·인프라. 3일 내 AWS 마이그레이션으로 월 $300+ → $108 (66%↓), GitLab CI/CD 구축, FastAPI REST API.",
      },
    },
  ],
  certs: [
    { en: "Linux Master Lv.2 (2026.01)", ko: "리눅스마스터 2급 (2026.01)" },
    {
      en: "Network Admin Lv.2 (2025.12)",
      ko: "네트워크관리사 2급 (2025.12)",
    },
    { en: "AWS SAA (2025.10)", ko: "AWS SAA (2025.10)" },
    { en: "SQLD (2023.10)", ko: "SQLD (2023.10)" },
    { en: "ADsP (2022.09)", ko: "ADsP (2022.09)" },
  ],
} as const;
