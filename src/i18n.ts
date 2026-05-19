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
  // Intro / masthead
  introLabel: { en: "// Who I am", ko: "// 저는" },
  introName: { en: "Sangho Han", ko: "한상호" },
  introRole: {
    en: "Backend & Infrastructure Engineer",
    ko: "백엔드·인프라 엔지니어",
  },
  introLines: {
    en: [
      "I know how to work with AI. I've built 3 products as a solo full-stack developer through vibe coding, while designing and building the backend for a RAG-based AICC solution.",
      "I believe the essence of development is understanding the friction users feel and proactively solving it. I put this into practice by planning, building, and operating OneTime — a service used by 25,000+ people.",
      "I believe in the power of records and people. Over 2 years I've written 140+ technical posts and have run a blog study group for 1.5+ years.",
    ],
    ko: [
      "AI와 함께 일하는 방법을 압니다. 바이브코딩으로 3개 프로덕트를 1인 풀스택으로 개발하고, RAG 기반 AICC 솔루션의 백엔드를 설계·구현하고 있습니다.",
      "사용자가 겪는 불편함을 이해하고 주도적으로 해결하는 것이 개발의 본질이라고 생각합니다. 2만 5천 명 이상이 사용하는 서비스 OneTime을 직접 기획·개발·운영하며 이를 실천합니다.",
      "기록과 사람의 힘을 믿습니다. 2년간 140개 이상의 기술 블로그 글을 작성하고, 블로그 스터디를 1년 6개월 이상 운영해왔습니다.",
    ],
  },
  links: [
    { label: "GitHub", href: "https://github.com/bbbang105" },
    { label: "Blog", href: "https://bbbang105.github.io" },
    { label: "OneTime", href: "https://www.onetime-with-members.com" },
  ],
  // kiko — kept as a "Now building" highlight under the intro
  kikoBadge: {
    en: "Now building · Pre-launch startup",
    ko: "Now building · 창업 준비 중",
  },
  kikoOneLiner: {
    en: "An AI-native service I'm building. What I focus on most right now.",
    ko: "AI 네이티브로 만들고 있는 서비스. 지금 가장 집중하는 것.",
  },
  kikoSolves: {
    en: "The next product from an engineer who shipped 3 products solo full-stack through vibe coding and built the backend of a RAG-based AICC solution.",
    ko: "바이브코딩으로 3개 프로덕트를 1인 풀스택으로 출시하고, RAG 기반 AICC 솔루션의 백엔드를 구축해 온 엔지니어가 만드는 다음 제품.",
  },
  selfBuiltHeading: { en: "Self-built", ko: "직접 만든 것" },
  careerHeading: { en: "Career", ko: "경력" },
  activitiesHeading: { en: "Activities", ko: "활동" },
  educationHeading: { en: "Education", ko: "학력" },
  certsHeading: { en: "Certifications", ko: "자격증" },
  career: [
    {
      company: { en: "LOGOS AI", ko: "(주)로고스AI" },
      period: { en: "2025.08 — Present", ko: "2025.08 — 현재" },
      role: "Backend & Infrastructure Engineer",
      desc: {
        en: "Backend & infra for 'OptiGen', a RAG-based AICC solution — LLM streaming, document batch pipeline, AWS infrastructure.",
        ko: "RAG 기반 AICC 솔루션 'OptiGen'의 백엔드·인프라 — LLM 스트리밍, 문서 배치 파이프라인, AWS 인프라.",
      },
      points: {
        en: [
          "Built LLM streaming API (RestClient + SseEmitter) and a Spring Batch RAG chunking batch system",
          "FastAPI document-parsing tool + multi-tenant security (@PreAuthorize, userUid migration)",
          "POC AWS infra design + GitHub Actions auto-deploy across 4 services; LiteLLM·Datadog LLM Observability",
        ],
        ko: [
          "LLM 스트리밍 API(RestClient+SseEmitter)와 Spring Batch RAG 청킹 배치 시스템 구축",
          "FastAPI 문서 파싱 도구 + 멀티테넌트 보안(@PreAuthorize, userUid 마이그레이션) 구현",
          "POC AWS 인프라 설계 + GitHub Actions 4개 서비스 자동 배포, LiteLLM·Datadog LLM Observability 구축",
        ],
      },
      tags: [
        "Java",
        "Spring Boot",
        "Spring Batch",
        "MySQL",
        "AWS",
        "LLM",
        "RAG",
        "GitHub Actions",
        "Datadog",
        "LiteLLM",
        "Asterisk",
        "Python",
        "FastAPI",
        "vLLM",
      ],
    },
    {
      company: { en: "Ribella Realty", ko: "(주)리벨라리얼티" },
      period: { en: "2025.06 — 2025.08", ko: "2025.06 — 2025.08" },
      role: "Backend & Infrastructure Engineer",
      desc: {
        en: "Backend & infra for 'FindIt', a realtor-matching platform.",
        ko: "부동산 중개사 연결 플랫폼 'FindIt'의 백엔드·인프라.",
      },
      points: {
        en: [
          "AWS migration in 3 days: $300+/mo → $108 (66%↓), GitLab CI/CD automation",
          "Python·FastAPI REST API + Swagger docs; infra ops manuals shortened team onboarding",
        ],
        ko: [
          "3일 내 AWS 마이그레이션으로 월 $300+ → $108 (66%↓), GitLab CI/CD 자동화",
          "Python·FastAPI REST API 구현·Swagger 문서화, 인프라 운영 매뉴얼로 팀 온보딩 단축",
        ],
      },
      tags: [
        "Python",
        "FastAPI",
        "MySQL",
        "Docker Swarm",
        "AWS",
        "GitLab CI",
        "Linux",
      ],
    },
  ],
  showcase: [
    {
      name: "OneTime",
      featured: true,
      gallery: [
        {
          ko: "/images/onetime/time-block-board-ko.png",
          en: "/images/onetime/time-block-board-en.png",
          alt: {
            ko: "시간 블록 보드 — 가능한 시간대 선택 화면",
            en: "Time block board — selecting available time slots",
          },
        },
        {
          ko: "/images/onetime/fixed-schedule-ko.png",
          en: "/images/onetime/fixed-schedule-en.png",
          alt: {
            ko: "고정 스케줄 등록 화면",
            en: "Fixed schedule registration",
          },
        },
        {
          ko: "/images/onetime/recommend-and-participant-ko.png",
          en: "/images/onetime/recommend-and-participant-en.png",
          alt: {
            ko: "추천 시간과 참여자 현황 화면",
            en: "Recommended times and participant status",
          },
        },
      ],
      role: {
        en: "Backend & Infra · plan, build, operate · 2024.08 — Present",
        ko: "백엔드·인프라 · 기획·개발·운영 · 2024.08 — 현재",
      },
      one: {
        en: "A web service to align schedules with many people from a single shared link. 25K+ users / 2K+ MAU.",
        ko: "링크 공유 한 번으로 여러 사람과 쉽게 일정을 맞추는 웹 서비스. 25K+ 유저 / 2K+ MAU.",
      },
      impact: {
        en: [
          "N+1 removed via QueryDSL fetch join + composite index: 18.38s → 0.35s (98%↓)",
          "Event creation Bulk INSERT + async QR: 16.56s → 0.41s (97.5%↓)",
          "Fail2ban security response: 675 attacks from 425 IPs blocked over 9 months",
          "Solo-designed admin dashboard: 7 stat domains / 26 APIs + SQS email system",
          "AWS cost $83 → under $50/mo (40%↓); secured $1K+ AWS Activate credits",
        ],
        ko: [
          "QueryDSL fetch join + 복합 인덱스로 N+1 제거: 18.38s → 0.35s (98%↓)",
          "이벤트 생성 Bulk INSERT + 비동기 QR 생성: 16.56s → 0.41s (97.5%↓)",
          "Fail2ban 보안 대응: 9개월간 425개 IP에서 675건 공격 차단",
          "7개 통계 도메인·26개 API 어드민 대시보드 단독 설계·구현 + SQS 이메일 시스템",
          "AWS 월 비용 $83 → $50 미만 (40%↓), AWS Activate 크레딧 140만원 획득",
        ],
      },
      tags: [
        "Java",
        "Spring Boot",
        "Spring Security",
        "MySQL",
        "QueryDSL",
        "AWS",
        "GitHub Actions",
        "Nginx",
        "Docker",
      ],
      links: [
        { label: "Live", href: "https://www.onetime-with-members.com/" },
        { label: "GitHub", href: "https://github.com/onetime-with-members" },
      ],
    },
    {
      name: "kusting",
      featured: false,
      role: {
        en: "Solo full-stack (AI Vibe Coding) · 2026.02 — Present",
        ko: "1인 풀스택 (AI Vibe Coding) · 2026.02 — 현재",
      },
      one: {
        en: "Hit the limits of running a 30+ member blog study on Notion + KakaoTalk, so I automated the whole flow with a Discord bot + custom web dashboard.",
        ko: "30~35명 블로그 스터디를 노션+카톡으로 운영하다 한계를 느껴, Discord 봇 + 자체 웹 대시보드로 전 과정을 자동화한 플랫폼.",
      },
      impact: {
        en: [
          "RSS every 5 min → attendance → late/absence fines → Discord alerts",
          "Board votes (4 types) + FCM web push (5 alert types)",
          "Discord alert-log system tracking all 16 alert types with admin UI",
        ],
        ko: [
          "RSS 5분 주기 자동 수집 → 출석 → 지각/결석 벌금 자동 부과 → Discord 알림",
          "게시판 투표 4종(단일/복수/날짜/익명) + FCM 웹 푸시 5종 알림",
          "Discord 알림 로그 시스템 (16종 알림 전수 추적, 관리자 UI)",
        ],
      },
      tags: [
        "Next.js",
        "React 19",
        "TypeScript",
        "Drizzle ORM",
        "Supabase",
        "PostgreSQL",
        "discord.js",
        "Vercel",
        "PWA",
        "FCM",
      ],
      links: [
        { label: "GitHub", href: "https://github.com/bbbang105/study-admin" },
      ],
    },
    {
      name: "Hazel",
      featured: false,
      role: {
        en: "Solo full-stack (AI Vibe Coding) · 2026.01 — Present",
        ko: "1인 풀스택 (AI Vibe Coding) · 2026.01 — 현재",
      },
      one: {
        en: "Saw my sister run her flower shop on paper, so I planned and built a SaaS for the digital shift — solo full-stack with Claude vibe coding.",
        ko: "친누나가 운영하는 꽃집의 수기 매출·예약 관리를 보고, 디지털 전환을 위해 직접 기획·개발한 SaaS. Claude 바이브코딩 1인 풀스택.",
      },
      impact: {
        en: [
          "Unified sales/customers/reservations/photos; 1:N multi-pickup reservation system",
          "PWA + bottom navigation for a native-app feel; Web Push reservation reminders",
          "Accounts-receivable (unpaid sales) tracking system",
        ],
        ko: [
          "매출·고객·예약·사진을 하나로 통합, 1:N 멀티 픽업 예약 시스템 설계",
          "PWA + Bottom Navigation으로 네이티브 앱 경험, Web Push 예약 리마인더",
          "외상(미수) 매출 관리 체계 구축",
        ],
      },
      tags: [
        "Next.js",
        "React 19",
        "TypeScript",
        "Supabase",
        "PostgreSQL",
        "Cloudflare R2",
        "Vercel",
        "PWA",
        "Web Push",
        "shadcn/ui",
      ],
      links: [
        {
          label: "GitHub",
          href: "https://github.com/bbbang105/flowershop-admin",
        },
      ],
    },
  ],
  activities: [
    {
      title: { en: "Blog study group", ko: "블로그 스터디" },
      period: { en: "2024.06 — Present", ko: "2024.06 — 현재" },
      desc: {
        en: "Running a blog study group for 1.5+ years, encouraging consistent writing and knowledge sharing.",
        ko: "1년 6개월 이상 블로그 스터디를 운영하며 꾸준한 기록과 지식 공유를 독려하고 있습니다.",
      },
    },
    {
      title: { en: "Tech blog", ko: "기술 블로그" },
      period: { en: "2023 — Present", ko: "2023 — 현재" },
      desc: {
        en: "Wrote 140+ technical posts over 2 years (Spring, Database, Infra, Troubleshooting).",
        ko: "2년간 140개 이상의 기술 포스트를 작성했습니다 (Spring · Database · Infra · Troubleshooting).",
      },
    },
    {
      title: {
        en: "KUSITMS (Korea Univ. IT Management Society)",
        ko: "KUSITMS (한국대학생IT경영학회)",
      },
      period: { en: "2024", ko: "2024" },
      desc: {
        en: "Joined as backend dev in a planner/designer collaboration project; led 70+ members as 30th-term vice president.",
        ko: "기획자·디자이너 협업 프로젝트에 백엔드 개발자로 참여하고, 30기 부학회장으로서 70명 이상의 학회원을 이끌었습니다.",
      },
    },
  ],
  education: [
    {
      school: { en: "Dongguk University", ko: "동국대학교" },
      period: { en: "2018 — 2025", ko: "2018 — 2025" },
      desc: {
        en: "Double major in Management Information Systems & Convergence Software",
        ko: "경영정보학 / 융합소프트웨어 복수전공",
      },
    },
  ],
  certs: [
    {
      en: "AWS Solutions Architect Associate (2025.10)",
      ko: "AWS SAA (2025.10)",
    },
    { en: "Linux Master Lv.2 (2026.01)", ko: "리눅스마스터 2급 (2026.01)" },
    {
      en: "Network Admin Lv.2 (2025.12)",
      ko: "네트워크관리사 2급 (2025.12)",
    },
    { en: "SQLD (2023.10)", ko: "SQLD (2023.10)" },
    { en: "ADsP (2022.09)", ko: "ADsP (2022.09)" },
  ],
} as const;
