// Simple ko/en string map for this prototype.
// Scope: UI chrome + the /about portfolio page only.
// Article bodies and feed post titles/excerpts are authored Korean content
// and are NOT included here (intentionally untranslated).

export type Lang = "en" | "ko";

export const ui = {
  en: {
    brandTag: "tech log",
    navHome: "Posts",
    navAbout: "About",
    themeToggle: "◐ Theme",
    // Home intro
    introLabel: "// Latest writing",
    introHeading: "In the power of records, and of people.",
    introSub:
      "Development is only a means — toward more human outcomes. Understanding people matters most, so my writing is grounded in reflection.",
    sectionPosts: "Posts",
    postsCount: "posts",
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
    navHome: "글",
    navAbout: "소개",
    themeToggle: "◐ 테마",
    introLabel: "// 최근 글",
    introHeading: "기록과 사람의 힘을 믿습니다.",
    introSub:
      "개발은 수단일 뿐, 더 인간적인 결과를 만들기 위해 노력합니다. 사람을 이해하는 일이 가장 중요하기에, 사유가 담긴 글을 씁니다.",
    sectionPosts: "글",
    postsCount: "편",
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
  introName: {
    en: "Hi, I'm Sangho Han — a developer.",
    ko: "안녕하세요, 개발자 한상호입니다.",
  },
  introRole: {
    en: "AI-Native Engineer",
    ko: "AI 네이티브 엔지니어",
  },
  introLines: {
    en: [
      "I know how to work with AI. Using Claude Code, I move solo full-stack — from planning to building, operating, and marketing — as an engineer.",
      'I believe the essence of development is understanding the friction users feel and proactively solving it. I put this into practice by planning, building, and operating <a class="ab-jump" href="#ab-pj-OneTime">OneTime</a> — a service with 30,000+ cumulative users, run for 22+ months.',
      'I believe in the power of records and people. Over 3 years I\'ve written 140+ technical posts and have run a <a class="ab-jump" href="#ab-pj-kusting">blog study group</a> for 2 years.',
    ],
    ko: [
      "AI와 함께 일하는 법을 압니다. Claude Code로 기획부터 개발·운영·마케팅까지 1인 풀스택으로 움직이는 엔지니어입니다.",
      '사용자가 겪는 불편함을 이해하고 주도적으로 해결하는 것이 개발의 본질이라고 생각합니다. 누적 사용자 3만 명 이상, 22개월 이상 운영 중인 서비스 <a class="ab-jump" href="#ab-pj-OneTime">OneTime</a>을 직접 기획·개발·운영하며 이를 실천합니다.',
      '기록과 사람의 힘을 믿습니다. 3년간 140개 이상의 기술 블로그 글을 작성하고, <a class="ab-jump" href="#ab-pj-kusting">블로그 스터디</a>를 2년째 운영하고 있습니다.',
    ],
  },
  // Keyword headline for each intro line — drives the 3-up strengths grid.
  introKeys: {
    en: ["AI-native", "Operating", "People"],
    ko: ["AI 네이티브", "서비스 운영", "사람"],
  },
  links: [
    { label: "GitHub", href: "https://github.com/bbbang105" },
    { label: "Blog", href: "https://bbbang105.github.io" },
    { label: "OneTime", href: "https://www.onetime-with-members.com" },
  ],
  // flori — the "Now building" highlight under the intro (current business)
  nowTitle: "flori",
  nowBadge: {
    en: "Now building",
    ko: "Now building",
  },
  nowOneLiner: {
    en: "An all-in-one operations SaaS for flower shops.",
    ko: "꽃집을 위한 올인원 운영 SaaS",
  },
  nowDetail: {
    en: "One admin for sales, expenses, customers, reservations and insights — topped with a premium AI assistant: analytics chat, reservation OCR from KakaoTalk screenshots, a voice assistant, and proactive suggestions. Started from my sister's flower shop, now growing it into a freemium SaaS.",
    ko: "매출·지출·고객·예약·인사이트를 한 어드민에서 관리하고, 그 위에 데이터 분석 챗·카톡 예약 OCR·음성 비서·선제 제안까지 — 사장님을 위한 프리미엄 AI 비서를 얹었습니다. 친누나의 꽃집에서 시작한 문제를 freemium SaaS로 키우고 있습니다.",
  },
  selfBuiltHeading: { en: "Products", ko: "프로덕트" },
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
        en: "A premium AI assistant + store-operations admin SaaS for flower shops. Started from my sister's shop (formerly Hazel); I design and build it solo across 5 repos — web/api/ai/mobile/homepage.",
        ko: "꽃집 사장님을 위한 프리미엄 AI 비서 + 매장 운영 어드민 SaaS. 친누나의 가게(구 Hazel)에서 출발해 web/api/ai/mobile/homepage 5개 레포를 1인 풀스택으로 직접 설계·개발하고 있습니다.",
      },
      // Filmstrip — product screenshots (landing assets reused).
      shots: [
        {
          src: "/images/flori/feature-sales-1.png",
          caption: { en: "Sales tracking", ko: "매출 기록" },
        },
        {
          src: "/images/flori/feature-calendar.png",
          caption: { en: "Reservation calendar", ko: "예약 캘린더" },
        },
        {
          src: "/images/flori/feature-customers.png",
          caption: { en: "Customer management", ko: "고객 관리" },
        },
        {
          src: "/images/flori/feature-gallery.png",
          caption: { en: "Photo gallery", ko: "사진첩" },
        },
      ],
      // "What I built" ledger — contribution | impact value.
      built: [
        {
          text: {
            en: "AI assistant ×4 — read-only analytics chat, KakaoTalk-screenshot OCR → reservation, real-time voice, proactive suggestions",
            ko: "AI 비서 4종 — 읽기전용 분석 챗 · 카톡 스크린샷 OCR→예약 · 실시간 음성 · 선제 제안",
          },
          value: {
            en: "writes are human-in-loop",
            ko: "쓰기는 human-in-loop",
          },
        },
        {
          text: {
            en: "Re-architected Next.js + Supabase (client-to-DB) into a Kotlin/Spring BFF — server owns the DB as single SSOT",
            ko: "Next.js+Supabase 직결 구조를 Kotlin/Spring BFF로 재설계 — DB는 server만 소유하는 단일 SSOT",
          },
          value: {
            en: "3,200+ lines of debt cut",
            ko: "부채 3,200줄+ 삭제",
          },
        },
        {
          text: {
            en: "Contract-first OpenAPI (84 paths/119 ops) + Playwright e2e 0→21 safety net + super-admin console (3-gate auth)",
            ko: "계약-우선 OpenAPI(84 path/119 op) + Playwright e2e 0→21 안전망 + 슈퍼어드민 콘솔(3중 권한 게이트)",
          },
          value: {
            en: "web coverage 6.6% → 94.4%",
            ko: "web 커버리지 6.6%→94.4%",
          },
        },
      ],
      tags: [
        "Next.js",
        "React 19",
        "TypeScript",
        "Kotlin",
        "Spring Boot",
        "PostgreSQL",
        "FastAPI",
        "LangChain",
        "AWS Bedrock",
        "React Native",
        "Playwright",
      ],
      links: [{ label: "Live", href: "https://flori.ai.kr" }],
    },
    {
      name: "OneTime",
      featured: true,
      shots: [
        {
          srcKo: "/images/onetime/time-block-board-ko.png",
          srcEn: "/images/onetime/time-block-board-en.png",
          caption: { en: "Time block board", ko: "시간 블록 보드" },
        },
        {
          srcKo: "/images/onetime/fixed-schedule-ko.png",
          srcEn: "/images/onetime/fixed-schedule-en.png",
          caption: { en: "Fixed schedules", ko: "고정 스케줄" },
        },
        {
          srcKo: "/images/onetime/recommend-and-participant-ko.png",
          srcEn: "/images/onetime/recommend-and-participant-en.png",
          caption: {
            en: "Recommended times & participants",
            ko: "추천 시간·참여자 현황",
          },
        },
        {
          todo: true,
          caption: { en: "Admin statistics dashboard", ko: "어드민 통계 대시보드" },
          note: {
            en: "Capture: admin → statistics dashboard with the 7 stat domains visible",
            ko: "캡처: 어드민 → 통계 대시보드 (7개 도메인 그래프가 보이는 화면)",
          },
        },
        {
          todo: true,
          caption: { en: "Event creation", ko: "이벤트 생성" },
          note: {
            en: "Capture: event creation form (pairs with the Bulk INSERT improvement)",
            ko: "캡처: 이벤트 생성 폼 (Bulk INSERT 성능 개선과 짝)",
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
      built: [
        {
          text: {
            en: "N+1 removed via QueryDSL fetch join + composite index",
            ko: "QueryDSL fetch join + 복합 인덱스로 N+1 제거",
          },
          value: {
            en: "18.38s → 0.35s (98%↓)",
            ko: "18.38s → 0.35s (98%↓)",
          },
        },
        {
          text: {
            en: "Event creation Bulk INSERT + async QR generation",
            ko: "이벤트 생성 Bulk INSERT + 비동기 QR 생성",
          },
          value: {
            en: "16.56s → 0.41s (97.5%↓)",
            ko: "16.56s → 0.41s (97.5%↓)",
          },
        },
        {
          text: {
            en: "Solo-designed admin dashboard + SQS email system",
            ko: "어드민 대시보드 단독 설계·구현 + SQS 이메일 시스템",
          },
          value: {
            en: "7 stat domains · 26 APIs",
            ko: "통계 7종 · API 26개",
          },
        },
      ],
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
        en: "Solo full-stack · 2026.02 — Present",
        ko: "1인 풀스택 · 2026.02 — 현재",
      },
      one: {
        en: "I've run a 30+ member blog study for 2 years; after hitting the limits of Notion + KakaoTalk, I automated the whole flow with a Discord bot + custom web dashboard.",
        ko: "2년째 운영해 온 30~35명 블로그 스터디를 노션+카톡의 한계에서 꺼내, Discord 봇 + 자체 웹 대시보드로 전 과정을 자동화한 플랫폼.",
      },
      shots: [
        {
          todo: true,
          caption: { en: "Attendance dashboard", ko: "출석 현황 대시보드" },
          note: {
            en: "Capture: /dashboard — attendance status + ranking summary cards",
            ko: "캡처: /dashboard — 출석 현황·랭킹 요약 카드가 보이게",
          },
        },
        {
          todo: true,
          caption: { en: "Admin attendance", ko: "어드민 출석 관리" },
          note: {
            en: "Capture: /admin/attendance — RSS auto-collected attendance table",
            ko: "캡처: /admin/attendance — RSS 자동 수집된 출석 테이블",
          },
        },
        {
          todo: true,
          caption: { en: "Automated fines", ko: "벌금 자동 부과" },
          note: {
            en: "Capture: /admin/fines — late/absence fine records",
            ko: "캡처: /admin/fines — 지각·결석 벌금 내역",
          },
        },
        {
          todo: true,
          caption: { en: "Board polls", ko: "게시판 투표" },
          note: {
            en: "Capture: /board — a post with a poll (single/multi/date/anonymous)",
            ko: "캡처: /board — 투표(단일/복수/날짜/익명)가 붙은 게시글",
          },
        },
      ],
      built: [
        {
          text: {
            en: "RSS every 5 min → attendance → late/absence fines → Discord alerts",
            ko: "RSS 5분 주기 수집 → 출석 → 벌금 자동 부과 → Discord 알림",
          },
          value: {
            en: "ops fully automated",
            ko: "운영 전 과정 자동화",
          },
        },
        {
          text: {
            en: "Board polls (4 types) + FCM web push (5 alert types)",
            ko: "게시판 투표 4종(단일/복수/날짜/익명) + FCM 웹 푸시 5종",
          },
          value: {
            en: "PWA notifications",
            ko: "PWA 알림",
          },
        },
        {
          text: {
            en: "Discord alert-log system with admin UI",
            ko: "Discord 알림 로그 시스템 + 관리자 UI",
          },
          value: {
            en: "all 16 alert types tracked",
            ko: "16종 알림 전수 추적",
          },
        },
      ],
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
      href: "https://www.linkedin.com/school/dongguk/",
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
      name: {
        en: "AWS Solutions Architect Associate",
        ko: "AWS SAA",
      },
      issuer: { en: "Amazon Web Services", ko: "Amazon Web Services" },
      date: "2025.10",
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
