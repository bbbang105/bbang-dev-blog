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
  introName: {
    en: "Hi, I'm Sangho Han — a developer.",
    ko: "안녕하세요, 개발자 한상호입니다.",
  },
  introLines: {
    en: [
      'I know how to work with AI. I designed my own division of labor with coding agents like Claude Code, and shipped <a class="ab-jump" href="#ab-pj-플로리">flori</a> — 5 codebases (web · app · API · AI server · homepage) — solo, to production. Judgment, design and final review stay human; implementation, tests and docs go to the agents.',
      'I turn what customers need into working software. Understanding user friction and solving it proactively is the essence of development — I practice it by operating <a class="ab-jump" href="#ab-pj-OneTime">OneTime</a> (30K+ cumulative users) and by founding a flower-shop operations SaaS around a problem I discovered firsthand.',
      'I believe in the power of records and people. Over 3 years I\'ve written 140+ technical posts and have run a <a class="ab-jump" href="#ab-pj-큐스팅">blog study group</a> for 2 years.',
    ],
    ko: [
      'AI와 함께 일하는 방법을 압니다. Claude Code 등 코딩 에이전트와의 분업 체계를 직접 설계해, 웹·앱·API·AI 서버·홈페이지 5개 코드베이스로 이뤄진 <a class="ab-jump" href="#ab-pj-플로리">플로리</a>를 혼자 개발하고 정식 출시했습니다. 판단·설계·최종 리뷰는 사람이, 구현·테스트·문서화는 에이전트가 맡습니다.',
      '고객이 원하는 가치를 기술로 구현합니다. 사용자가 겪는 불편함을 이해하고 주도적으로 해결하는 것이 개발의 본질이라고 생각합니다. 누적 3만 명 이상이 사용한 <a class="ab-jump" href="#ab-pj-OneTime">OneTime</a>을 운영해 왔고, 지금은 꽃집의 운영 문제를 직접 찾아 창업하며 이를 실천하고 있습니다.',
      '기록과 사람의 힘을 믿습니다. 3년 넘게 140개 이상의 기술 블로그 글을 작성하고, <a class="ab-jump" href="#ab-pj-큐스팅">블로그 스터디</a>를 2년째 운영하고 있습니다. 모든 성장은 결국 좋은 사람들과의 연결에서 시작된다고 믿습니다.',
    ],
  },
  // Keyword headline for each intro line — drives the 3-up strengths grid.
  introKeys: {
    en: ["AI-native", "Shipping & Operating", "People & Connection"],
    ko: ["AI 네이티브", "서비스 운영", "사람, 연결"],
  },
  links: [
    { label: "GitHub", href: "https://github.com/bbbang105" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/bbangdev/" },
  ],
  selfBuiltHeading: { en: "Products", ko: "프로덕트" },
  careerHeading: { en: "Career", ko: "경력" },
  activitiesHeading: { en: "Activities", ko: "활동" },
  educationHeading: { en: "Education", ko: "학력" },
  certsHeading: { en: "Certifications", ko: "자격증" },
  moreHeading: { en: "Background", ko: "배경" },
  awardsHeading: { en: "Awards", ko: "수상" },
  contactEmail: "hchsa77@gmail.com",
  // Bottom full-width inverted contact block.
  ctaTitle: {
    en: "Good products start with good conversations.",
    ko: "좋은 대화에서, 좋은 프로덕트가 시작됩니다.",
  },
  ctaSub: {
    en: "Collaborations, commissions, coffee chats — I reply within a day.",
    ko: "협업·의뢰·커피챗, 무엇이든 하루 안에 답장합니다.",
  },
  career: [
    {
      company: { en: "Generative Lab", ko: "(주)제너러티브랩" },
      url: "https://generativelab.co.kr/",
      period: { en: "2026.09 — Present", ko: "2026.09 — 현재" },
      role: "Backend Engineer",
      desc: { en: "", ko: "" },
      points: { en: [], ko: [] },
      tags: [],
    },
    {
      company: { en: "flori", ko: "플로리" },
      url: "https://flori.ai.kr",
      period: { en: "2026.06 — Present", ko: "2026.06 — 현재" },
      role: "Founder",
      desc: { en: "", ko: "" },
      points: { en: [], ko: [] },
      tags: [],
    },
    {
      company: { en: "LOGOS AI", ko: "(주)로고스에이아이" },
      url: "https://logosai.co.kr/",
      period: { en: "2025.08 — 2026.05", ko: "2025.08 — 2026.05" },
      role: "Backend Engineer",
      desc: {
        en: "Backend for a RAG-based AICC (AI contact center) solution platform.",
        ko: "RAG 기반 AICC(AI 컨택센터) 솔루션 플랫폼의 백엔드.",
      },
      points: {
        en: [
          "Designed & built REST APIs for core domains — statistics, RAG document management, org-level access control",
          "Spring Batch document chunking/preprocessing pipeline + FastAPI·Docling parsing microservice",
          "Multi-LLM serving on AWS GPU servers with vLLM — model loading cut from 5+ min to 8–32 s (≈100×)",
          "Solo-designed AWS infra for 2 enterprise PoCs (LG·SOLUM); LiteLLM·LangSmith·Datadog LLM gateway & observability",
        ],
        ko: [
          "통계·RAG 문서 관리·조직 접근 제어 등 핵심 도메인의 REST API 설계·구현",
          "Spring Batch 문서 청킹·전처리 파이프라인 + FastAPI·Docling 파싱 마이크로서비스 구축",
          "AWS GPU 서버 vLLM 멀티 LLM 서빙 — 모델 로딩 5분+ → 8~32초(약 100배) 개선",
          "LG·SOLUM PoC 2건의 AWS 인프라 단독 설계·구축, LiteLLM·LangSmith·Datadog 게이트웨이·관측 환경",
        ],
      },
      tags: [
        "Java",
        "Spring Boot",
        "Spring Batch",
        "MyBatis",
        "MySQL",
        "NGINX",
        "AWS",
        "NCP",
        "vLLM",
        "LiteLLM",
        "Datadog",
        "LLM",
      ],
    },
    {
      company: { en: "Ribella Realty", ko: "(주)리벨라리얼티" },
      url: "https://service.findit.im/home",
      period: { en: "2025.06 — 2025.08", ko: "2025.06 — 2025.08" },
      role: "Backend Engineer",
      desc: {
        en: "Backend & infra for 'FindIt', a realtor-matching proptech platform.",
        ko: "부동산 중개사 연결 프롭테크 플랫폼 'FindIt'의 백엔드·인프라.",
      },
      points: {
        en: [
          "Built initial dev infrastructure on a KVM-based on-premise virtualization environment",
          "Led AWS cloud migration of dev infra, focused on cost optimization and high availability",
          "FastAPI (Python) REST APIs + infra architecture / ops manual documentation",
        ],
        ko: [
          "KVM 기반 온프레미스 가상화 환경에서 초기 개발 인프라 구축",
          "비용 최적화·고가용성에 초점을 맞춰 개발 인프라의 AWS 클라우드 마이그레이션 주도",
          "FastAPI(Python) 기반 REST API 구현 및 인프라 아키텍처·운영 매뉴얼 문서화",
        ],
      },
      tags: [
        "Python",
        "FastAPI",
        "MySQL",
        "SQLAlchemy",
        "Docker Swarm",
        "AWS",
        "GitLab CI",
        "Linux",
      ],
    },
  ],
  showcase: [
    {
      name: "플로리",
      nameEn: "flori",
      role: {
        en: "Founder · Solo full-cycle · 2026.06 — Present",
        ko: "창립자 · 1인 풀사이클 · 2026.06 — 현재",
      },
      slogan: {
        en: "Focus on the flowers — flori handles the rest.",
        ko: "꽃에만 집중하세요, 운영은 플로리가 챙길게요.",
      },
      one: {
        en: "A B2B SaaS where flower-shop owners manage reservations, sales, customers and photos in one app. Web, iOS/Android app and homepage all shipped — live with real users and real payments.",
        ko: "꽃집 사장님이 예약·매출·고객·사진을 하나의 앱에서 관리하는 B2B SaaS. 웹·iOS/Android 앱·홈페이지를 동시 출시했고, 실제 사용자가 쓰고 결제가 발생하는 서비스로 운영 중입니다.",
      },
      // Plate shots — masked landing/product captures from the live app.
      shots: [
        {
          src: "/images/flori/shot-feature-banner.png",
          caption: { en: "One app to run a flower shop", ko: "꽃집 사장님을 위한 단 하나의 운영 앱" },
        },
        {
          src: "/images/flori/shot-app-store.webp",
          caption: { en: "iOS · Android app", ko: "iOS · Android 앱" },
        },
        {
          src: "/images/flori/shot-ai-chat.png",
          caption: { en: "AI assistant chat", ko: "AI 비서" },
        },
        {
          src: "/images/flori/shot-ledger.webp",
          caption: { en: "Sales & expense ledger", ko: "매출·지출 장부" },
        },
        {
          src: "/images/flori/shot-calendar.webp",
          caption: { en: "Reservation calendar", ko: "예약 캘린더" },
        },
        {
          src: "/images/flori/shot-customers.webp",
          caption: { en: "Customer management", ko: "고객 관리" },
        },
      ],
      // "What I built" ledger — contribution | impact value.
      built: [
        {
          text: {
            en: "AI assistant — 'register by photo': one screenshot fills reservation·ledger·customer·photo at once, plus analytics over real sales data",
            ko: "AI 비서 — 「사진으로 예약 등록」 캡처 한 장이면 예약·장부·고객·사진이 한 번에, 실제 매출 데이터 분석",
          },
          value: {
            en: "1 photo → 4 records at once",
            ko: "사진 1장 → 네 가지가 한 번에",
          },
        },
        {
          text: {
            en: "5 codebases (web · app · API · AI · homepage) built and shipped solo — both app-store reviews passed, Toss Payments PG subscription billing integrated",
            ko: "웹·앱·API·AI·홈페이지 5개 코드베이스 1인 개발·정식 출시 — 양대 앱스토어 심사 통과, 토스페이먼츠 PG 구독 결제 연동",
          },
          value: {
            en: "revenue without funding",
            ko: "투자 없이 매출 발생",
          },
        },
        {
          text: {
            en: "Human–agent division of labor: PR-finishing automation, mandatory Playwright e2e on UI changes, docs auto-synced across repos",
            ko: "에이전트 분업 체계 — PR 마무리 자동화, UI 변경 시 Playwright e2e 강제, 레포 간 문서 자동 동기화",
          },
          value: {
            en: "solo speed that doesn't collapse",
            ko: "무너지지 않는 1인 개발 속도",
          },
        },
        {
          text: {
            en: "Store-review and legal requirements (Korean telecom law) designed into the code itself",
            ko: "양대 앱스토어 심사와 정보통신망법 같은 법적 요건을 코드 레벨에서 준수하도록 설계",
          },
          value: {
            en: "compliant by design",
            ko: "심사·법규 대응 내재화",
          },
        },
      ],
      tags: [
        "TypeScript",
        "Next.js",
        "Spring Boot",
        "FastAPI",
        "MySQL",
        "Docker",
        "AWS",
        "AWS Bedrock",
        "LiteLLM",
        "Langfuse",
      ],
      links: [
        { label: "Live", href: "https://flori.ai.kr" },
        {
          label: "App Store",
          href: "https://apps.apple.com/kr/app/id6788602719",
        },
        {
          label: "Google Play",
          href: "https://play.google.com/store/apps/details?id=kr.ai.flori.app",
        },
        {
          label: "Instagram",
          href: "https://www.instagram.com/flori.ai.official/",
        },
      ],
    },
    {
      name: "OneTime",
      shots: [
        {
          src: "/images/onetime/banner.png",
          caption: { en: "Group scheduling service", ko: "다인원 일정 조율 서비스" },
        },
        {
          srcKo: "/images/onetime/time-block-board-ko.png",
          srcEn: "/images/onetime/time-block-board-en.png",
          caption: { en: "Time block board", ko: "시간 블록 보드" },
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
          srcKo: "/images/onetime/confirm-schedule-ko.png",
          srcEn: "/images/onetime/confirm-schedule-en.png",
          caption: { en: "Schedule confirmation", ko: "일정 확정" },
        },
        {
          srcKo: "/images/onetime/fixed-schedule-ko.png",
          srcEn: "/images/onetime/fixed-schedule-en.png",
          caption: {
            en: "Fixed schedules · Everytime timetable import",
            ko: "고정 스케줄 · 에브리타임 시간표 연동",
          },
        },
        {
          src: "/images/onetime/admin-dashboard.png",
          caption: { en: "Ops admin", ko: "운영 어드민" },
        },
      ],
      role: {
        en: "Backend & Infra · plan, build, operate · 2024.08 — Present",
        ko: "백엔드·인프라 · 기획·개발·운영 · 2024.08 — 현재",
      },
      slogan: {
        en: "Share a link once — find the time that works for everyone.",
        ko: "링크 공유 한번으로, 여러 사람과 쉽게 일정을 맞추세요.",
      },
      one: {
        en: "A scheduling service that gathers everyone's availability and finds the best time.",
        ko: "모두의 빈 시간을 모아 가장 적합한 시간을 찾아주는 일정 조율 서비스.",
      },
      stats: [
        { value: { en: "30K+", ko: "3만+" }, label: { en: "total users", ko: "누적 사용자" } },
        { value: { en: "2yr+", ko: "2년+" }, label: { en: "in operation", ko: "운영" } },
      ],
      built: [
        {
          text: {
            en: "AWS infra re-architecture cut monthly cost 46% ($83 → $45); AWS Activate credits $1,000 secured",
            ko: "AWS 인프라 구조 개선으로 월 비용 46% 절감($83→$45), AWS Activate 크레딧 $1,000 확보",
          },
          posts: ["/posts/onetime/원타임-인프라-개선-도전기/"],
          value: {
            en: "server costs covered",
            ko: "운영 서버 비용 확보",
          },
        },
        {
          text: {
            en: "Fail2ban firewall — abnormal-access detection, auto IP ban, Discord alerts",
            ko: "Fail2ban 방화벽 — 비정상 접근 탐지·IP 자동 차단·Discord 알림 자동화",
          },
          posts: ["/posts/onetime/웹-스캐닝-공격-9개월간의-fail2ban-로그-분석/"],
          value: {
            en: "675+ IPs blocked",
            ko: "675건+ IP 차단",
          },
        },
        {
          text: {
            en: "Everytime timetable import — built on crawling, load-tested, then switched to direct API calls, removing the crawling server",
            ko: "에브리타임 시간표 연동 — 크롤링 기반으로 개발·부하 테스트 후, API 직접 호출 구조로 전환해 크롤링 서버 제거",
          },
          posts: [
            "/posts/onetime/에브리타임-시간표를-원타임으로/",
            "/posts/onetime/에브리타임-시간표를-더-빠르게-가져오기/",
          ],
          value: {
            en: "3–4s → instant · crawler retired",
            ko: "3~4초 → 즉시 응답 · 크롤링 서버 제거",
          },
        },
        {
          text: {
            en: "Solo full-stack ops admin — user·event·retention stats dashboards, marketing targeting, email delivery & banner management",
            ko: "운영 어드민 풀스택 단독 구축 — 유저·이벤트·리텐션 통계 대시보드, 마케팅 타겟·이메일 발송·배너 관리",
          },
          value: {
            en: "7 stat domains · data-driven ops",
            ko: "통계 7종 · 데이터 기반 운영",
          },
        },
      ],
      tags: [
        "Java",
        "Spring Boot",
        "Spring Security",
        "MySQL",
        "QueryDSL",
        "Thymeleaf",
        "Tailwind CSS",
        "AWS",
        "GitHub Actions",
        "Nginx",
        "Docker",
      ],
      links: [
        { label: "Live", href: "https://www.onetime-with-members.com/" },
        { label: "GitHub", href: "https://github.com/onetime-with-members" },
        {
          label: "Instagram",
          href: "https://www.instagram.com/one.time.official/",
        },
      ],
    },
    {
      name: "큐스팅",
      nameEn: "Kusting",
      slogan: {
        en: "Write together, grow together.",
        ko: "함께 쓰고, 함께 성장하다.",
      },
      role: {
        en: "AI full-stack · study founder & operator · 2026.02 — Present",
        ko: "AI 풀스택 · 스터디 창립·운영 · 2026.02 — 현재",
      },
      one: {
        en: "The platform behind my 30-member blog study — moved off Notion + KakaoTalk, with the whole workflow automated by a Discord bot and a custom web dashboard.",
        ko: "2년째 운영해 온 30~35명 블로그 스터디를 노션+카톡의 한계에서 꺼내, Discord 봇 + 자체 웹 대시보드로 전 과정을 자동화한 플랫폼.",
      },
      shots: [
        {
          src: "/images/kusting/banner.png",
          caption: { en: "Write together, grow together", ko: "함께 쓰고, 함께 성장하다" },
        },
        {
          src: "/images/kusting/dashboard.png",
          caption: { en: "My dashboard — round & activity points", ko: "내 대시보드 — 회차 현황·활동 점수" },
        },
        {
          src: "/images/kusting/posts.png",
          caption: { en: "Post feed — popularity ranking & reactions", ko: "포스트 피드 — 인기 랭킹·리액션" },
        },
        {
          src: "/images/kusting/ranking.png",
          caption: { en: "Ranking podium", ko: "랭킹 포디움" },
        },
        {
          src: "/images/kusting/admin-home.png",
          caption: { en: "Admin dashboard", ko: "관리자 대시보드" },
        },
        {
          src: "/images/kusting/bot.png",
          caption: { en: "Bot ops — automation jobs & alert logs", ko: "봇 관리 — 자동화 작업·알림 로그" },
        },
      ],
      built: [
        {
          text: {
            en: "Round creation → RSS polling every 5 min → attendance grading → fines → round report & weekly-ranking alerts",
            ko: "회차 생성 → RSS 5분 주기 수집 → 출석 판정 → 벌금 부과 → 회차 리포트·주간 랭킹 알림",
          },
          value: {
            en: "the whole cycle runs itself",
            ko: "운영 전 과정 무인 자동화",
          },
        },
        {
          text: {
            en: "Gamification — activity points for writing·commenting·reading, ranking podium & rank changes",
            ko: "게이미피케이션 설계 — 포스팅·댓글·조회 활동 점수, 랭킹 포디움·순위 변동",
          },
          value: {
            en: "keeps members writing",
            ko: "꾸준함을 만드는 장치",
          },
        },
        {
          text: {
            en: "Post feed & community board — comment and react with emoji on each other's posts, polls in 4 types, secret posts + PWA web push",
            ko: "포스트 피드·커뮤니티 게시판 — 서로의 글에 댓글·이모지 리액션, 투표 4종·비밀글 + PWA 웹 푸시",
          },
          value: {
            en: "community built in-house",
            ko: "커뮤니티까지 자체 구축",
          },
        },
        {
          text: {
            en: "Admin console — members, rounds, attendance, fines & scores managed in one place, with alert-delivery logs",
            ko: "관리자 콘솔 — 멤버·회차·출석·벌금·점수 관리부터 알림 발송 로그 추적까지",
          },
          value: {
            en: "run the whole study from one screen",
            ko: "한 화면에서 운영 완결",
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
        { label: "Live", href: "https://kusting-web.vercel.app/" },
        { label: "GitHub", href: "https://github.com/bbbang105/study-admin" },
      ],
    },
    {
      name: "일단",
      nameEn: "ILLDAN",
      slogan: {
        en: "Plan less, act fast.",
        ko: "계획은 적게, 행동은 빠르게",
      },
      role: {
        en: "Backend & Infra · team side project · 2025.01 — Present",
        ko: "백엔드·인프라 · 팀 사이드 프로젝트 · 2025.01 — 현재",
      },
      one: {
        en: "A to-do app for spontaneous planners — capture tasks fast, without overthinking. Live on the App Store and Google Play.",
        ko: "MBTI P를 위한 투두 앱 — 긴 고민 없이 빠르게 추가하는 일정 관리. iOS·Android 스토어 동시 출시, 운영 중.",
      },
      shots: [
        {
          src: "/images/illdan/shot-1.webp",
          caption: { en: "Plan less, act fast — ILLDAN", ko: "계획은 적게, 행동은 빠르게 — 일단 해!" },
        },
        {
          src: "/images/illdan/shot-2.webp",
          caption: { en: "Capture to-dos the moment they come up", ko: "할 일이 생기면 일단 바로 기록" },
        },
        {
          src: "/images/illdan/shot-3.webp",
          caption: { en: "Swipe to build today's to-do list", ko: "스와이프로 만드는 오늘의 투두리스트" },
        },
        {
          src: "/images/illdan/shot-4.webp",
          caption: { en: "Repeat · priority · D-day — just the essentials", ko: "반복·중요·D-day — 필요한 기능만" },
        },
      ],
      built: [
        {
          text: {
            en: "AWS CodeDeploy Blue/Green zero-downtime deploy pipeline; AWS Activate credits $1,000 secured",
            ko: "AWS CodeDeploy Blue/Green 무중단 배포 파이프라인 구축, AWS Activate 크레딧 $1,000 확보",
          },
          value: {
            en: "zero-downtime releases",
            ko: "다운타임 0 배포",
          },
        },
        {
          text: {
            en: "Async event architecture (@TransactionalEventListener + @Async) piping user feedback to Notion & Discord",
            ko: "@TransactionalEventListener + @Async 비동기 이벤트 — 유저 의견을 노션·디스코드로 실시간 연동",
          },
          posts: [
            "/posts/일단/고객의-의견-노션-디스코드로-바로-받아보기-feat-비동기-이벤트-처리/",
          ],
          value: {
            en: "transactions decoupled from external APIs",
            ko: "트랜잭션-외부 API 분리",
          },
        },
        {
          text: {
            en: "Scheduler-driven to-do lifecycle — unfinished tasks roll into the backlog at midnight, routines regenerate, deadline & unfinished-task push alerts",
            ko: "스케줄러 기반 투두 라이프사이클 — 자정마다 미완료 할 일 백로그 이월, 루틴 자동 생성, 마감·미완료 푸시 알림",
          },
          value: {
            en: "today's list, ready every morning",
            ko: "매일 아침, 오늘 할 일이 준비됨",
          },
        },
      ],
      tags: [
        "Java",
        "Spring Boot",
        "MySQL",
        "Redis",
        "Docker",
        "Nginx",
        "AWS CodeDeploy",
        "GitHub Actions",
        "FCM",
      ],
      links: [
        {
          label: "App Store",
          href: "https://apps.apple.com/kr/app/%EC%9D%BC%EB%8B%A8/id6740790261",
        },
        {
          label: "Google Play",
          href: "https://play.google.com/store/apps/details?id=com.poptato.app",
        },
        { label: "GitHub", href: "https://github.com/realchillguyclub" },
      ],
    },
  ],
  activities: [
    {
      title: {
        en: "Hyundai WIA Learning Lab — vibe-coding assistant coach",
        ko: "현대위아 러닝랩 바이브코딩 교육 보조강사",
      },
      period: { en: "2026.07", ko: "2026.07" },
      desc: {
        en: "Assisted a Claude Code vibe-coding program for Hyundai WIA employees — ran small-group coaching on the chatbot track and 1:1 mentoring across varied skill levels, non-developers included.",
        ko: "현대위아 임직원 대상 Claude Code 기반 바이브코딩 교육에 보조강사로 참여 — 챗봇 트랙 소그룹 순회 코칭과 개별 멘토링을 진행하며, 비개발자를 포함한 다양한 기술 수준에 맞춰 코칭했습니다.",
      },
    },
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
        en: "KUSITMS (Korean University Students IT, Management Society)",
        ko: "KUSITMS (한국대학생IT경영학회)",
      },
      period: { en: "2024", ko: "2024" },
      links: [
        { label: { en: "LIVE", ko: "LIVE" }, href: "https://www.kusitms.com/" },
        {
          label: { en: "retrospective", ko: "회고" },
          href: "/posts/큐시즘/30기/반년-간의-부학회장을-마무리하며/",
        },
      ],
      desc: {
        en: "Joined as backend dev in a planner/designer collaboration project; led 70+ members as 30th-term vice president.",
        ko: "기획자·디자이너 협업 프로젝트에 백엔드 개발자로 참여하고, 30기 부학회장으로서 70명 이상의 학회원을 이끌었습니다.",
      },
    },
  ],
  awards: [
    {
      name: { en: "NClouder of the Month", ko: "이달의 NClouder" },
      date: "2024.07",
      desc: {
        en: "Naver Cloud Platform — selected for contribution to cloud tech content.",
        ko: "Naver Cloud Platform — 클라우드 기술 콘텐츠 기여로 선정.",
      },
      post: "/posts/ncp/네이버-클로바-스튜디오로-챗봇-기능-구현하기/",
    },
    {
      name: {
        en: "Dongguk Univ. Capstone Design — Dean's Award (2nd place)",
        ko: "동국대학교 캡스톤디자인 원장상 (2위)",
      },
      date: "2024.06",
      desc: {
        en: "Awarded for BAMOWL, a crypto backtesting & auto-trading service.",
        ko: "가상화폐 백테스팅·자동매매 서비스 BAMOWL로 수상.",
      },
      post: "/posts/회고/프로젝트/가상화폐-백테스팅-자동매매-서비스-bamowl-개발기/",
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
      post: "/posts/자격증/리눅스마스터-2급-합격-후기/",
    },
    {
      name: { en: "Network Admin Lv.2", ko: "네트워크관리사 2급" },
      issuer: { en: "ICQA", ko: "한국정보통신자격협회" },
      date: "2025.12",
      post: "/posts/자격증/네트워크관리사-2급-합격-후기/",
    },
    {
      name: {
        en: "AWS Solutions Architect Associate",
        ko: "AWS SAA",
      },
      issuer: { en: "Amazon Web Services", ko: "Amazon Web Services" },
      date: "2025.10",
      post: "/posts/자격증/aws-saa-자격증-합격-후기/",
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
