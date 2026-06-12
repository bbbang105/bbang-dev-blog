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
      "I know how to work with AI. I've built products as a solo full-stack developer through vibe coding, while designing and building the backend for a RAG-based AICC solution.",
      "I believe the essence of development is understanding the friction users feel and proactively solving it. I put this into practice by planning, building, and operating OneTime — a service with 30,000+ cumulative users, run for 22+ months.",
      "I believe in the power of records and people. Over 2 years I've written 140+ technical posts and have run a blog study group for 2 years.",
    ],
    ko: [
      "AI와 함께 일하는 방법을 압니다. 바이브코딩으로 프로덕트를 1인 풀스택으로 개발하고, RAG 기반 AICC 솔루션의 백엔드를 설계·구현해왔습니다.",
      "사용자가 겪는 불편함을 이해하고 주도적으로 해결하는 것이 개발의 본질이라고 생각합니다. 누적 사용자 3만 명 이상, 22개월 이상 운영 중인 서비스 OneTime을 직접 기획·개발·운영하며 이를 실천합니다.",
      "기록과 사람의 힘을 믿습니다. 2년간 140개 이상의 기술 블로그 글을 작성하고, 블로그 스터디를 2년째 운영하고 있습니다.",
    ],
  },
  // Headline numbers — rendered as the KPI strip right under the masthead.
  // postsLabel's value is computed at build time (content collection count).
  kpis: [
    {
      value: "30K+",
      label: { en: "Cumulative users", ko: "누적 사용자" },
    },
    {
      value: "22mo+",
      label: { en: "Service in operation", ko: "서비스 운영" },
    },
    {
      value: "__POSTS__", // replaced with the live post count in about.astro
      label: { en: "Technical posts", ko: "기술 포스트" },
    },
    {
      value: "2yr",
      label: { en: "Study group run", ko: "블로그 스터디 운영" },
    },
  ],
  links: [
    { label: "GitHub", href: "https://github.com/bbbang105" },
    { label: "Blog", href: "https://bbbang105.github.io" },
    { label: "OneTime", href: "https://www.onetime-with-members.com" },
  ],
  // flori — the "Now building" highlight under the intro (current business)
  nowTitle: "flori",
  nowBadge: {
    en: "Now building · In business",
    ko: "Now building · 사업 진행 중",
  },
  nowOneLiner: {
    en: "An all-in-one operations SaaS for flower shops. What I focus on most right now.",
    ko: "꽃집을 위한 올인원 운영 SaaS. 지금 가장 집중하는 것.",
  },
  nowDetail: {
    en: "Sales, expenses, customers, reservations and insights in one admin — started from my sister's flower shop, now being built into a business.",
    ko: "매출·지출·고객·예약·인사이트를 하나의 어드민으로 — 친누나의 꽃집에서 시작한 문제를 사업으로 키우고 있습니다.",
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
      name: "flori",
      featured: false,
      badge: { en: "Now building", ko: "빌딩 중" },
      role: {
        en: "Founder · Solo full-stack · 2026.01 — Present",
        ko: "창업 · 1인 풀스택 · 2026.01 — 현재",
      },
      one: {
        en: "An all-in-one operations SaaS for flower shops — sales, expenses, customers, reservations, insights. Started from my sister's shop; now building it as a business.",
        ko: "꽃집을 위한 올인원 운영 SaaS — 매출·지출·고객·예약·인사이트. 친누나의 가게에서 시작해 사업으로 키우고 있습니다.",
      },
      impact: {
        en: [
          "Multi-tenant architecture where a Kotlin BFF owns data & auth — one API shared by web and mobile",
          "Social OAuth (Kakao·Google·Naver) with httpOnly JWT cookies + S3 presigned upload pipeline",
          "Self-hosted on AWS (Docker → ECR → EC2) with GitHub Actions CI/CD + Playwright e2e on a mock BFF",
        ],
        ko: [
          "Kotlin BFF가 데이터·인증을 단일 소유하는 멀티테넌트 아키텍처 — web·모바일이 같은 API 사용",
          "소셜 OAuth(카카오·구글·네이버) + httpOnly JWT 쿠키 인증, S3 presigned 업로드 파이프라인",
          "AWS 자체 호스팅(Docker → ECR → EC2) + GitHub Actions CI/CD, mock BFF 기반 Playwright e2e",
        ],
      },
      tags: [
        "Kotlin",
        "Spring Boot",
        "Next.js",
        "React 19",
        "TypeScript",
        "PostgreSQL",
        "AWS",
        "Tailwind CSS",
        "Playwright",
      ],
      links: [{ label: "Live", href: "https://flori.ai.kr" }],
    },
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
        en: "Backend, Infra & Admin · plan, build, operate · 2024.08 — Present",
        ko: "백엔드·인프라·어드민 · 기획·개발·운영 · 2024.08 — 현재",
      },
      one: {
        en: "A web service to align schedules with many people from a single shared link. 30K+ cumulative users · 22+ months in operation.",
        ko: "링크 공유 한 번으로 여러 사람과 쉽게 일정을 맞추는 웹 서비스. 누적 사용자 3만+ · 22개월+ 운영.",
      },
      impact: {
        en: [
          "N+1 removed via QueryDSL fetch join + composite index: 18.38s → 0.35s (98%↓)",
          "Event creation Bulk INSERT + async QR: 16.56s → 0.41s (97.5%↓)",
          "Solo-designed admin dashboard: 7 stat domains / 26 APIs + SQS email system",
        ],
        ko: [
          "QueryDSL fetch join + 복합 인덱스로 N+1 제거: 18.38s → 0.35s (98%↓)",
          "이벤트 생성 Bulk INSERT + 비동기 QR 생성: 16.56s → 0.41s (97.5%↓)",
          "7개 통계 도메인·26개 API 어드민 대시보드 단독 설계·구현 + SQS 이메일 시스템",
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
        en: "I've run a 30+ member blog study for 2 years; after hitting the limits of Notion + KakaoTalk, I automated the whole flow with a Discord bot + custom web dashboard.",
        ko: "2년째 운영해 온 30~35명 블로그 스터디를 노션+카톡의 한계에서 꺼내, Discord 봇 + 자체 웹 대시보드로 전 과정을 자동화한 플랫폼.",
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
  ],
  activities: [
    {
      title: { en: "Blog study group", ko: "블로그 스터디" },
      period: { en: "2024.06 — Present", ko: "2024.06 — 현재" },
      desc: {
        en: "Running a blog study group for 2 years, encouraging consistent writing and knowledge sharing.",
        ko: "2년째 블로그 스터디를 운영하며 꾸준한 기록과 지식 공유를 독려하고 있습니다.",
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
  // Rendered as a ledger table: name | issuer | date.
  certs: [
    {
      name: {
        en: "AWS Solutions Architect Associate",
        ko: "AWS SAA",
      },
      issuer: { en: "Amazon Web Services", ko: "Amazon Web Services" },
      date: "2025.10",
    },
    {
      name: { en: "Linux Master Lv.2", ko: "리눅스마스터 2급" },
      issuer: { en: "KAIT", ko: "한국정보통신진흥협회" },
      date: "2026.01",
    },
    {
      name: { en: "Network Admin Lv.2", ko: "네트워크관리사 2급" },
      issuer: { en: "ICQA", ko: "한국정보통신자격협회" },
      date: "2025.12",
    },
    {
      name: { en: "SQLD", ko: "SQLD" },
      issuer: { en: "Kdata", ko: "한국데이터산업진흥원" },
      date: "2023.10",
    },
    {
      name: { en: "ADsP", ko: "ADsP" },
      issuer: { en: "Kdata", ko: "한국데이터산업진흥원" },
      date: "2022.09",
    },
  ],
} as const;
