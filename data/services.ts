export type ServiceFAQ = {
  q: string;
  a: string;
};

export type ServiceProcess = {
  step: string;
  title: string;
  desc: string;
};

export type ServiceUseCase = {
  title: string;
  desc: string;
};

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  heroHeadline: string;
  summary: string;
  explanation: string;
  image: string;
  caps: string[];
  problems: string[];
  deliverables: string[];
  useCases: ServiceUseCase[];
  process: ServiceProcess[];
  faqs: ServiceFAQ[];
  techStack: string[];
  note?: string;
};

export const services: Service[] = [
  {
    slug: "website-development",
    title: "Website Development",
    shortTitle: "Websites",
    heroHeadline: "Modern, High-Performance Websites Built for Real Business Impact.",
    summary:
      "We design, build, and deploy fast, accessible, and responsive websites for companies, startups, and established businesses.",
    explanation:
      "A modern corporate website is far more than a digital brochure — it is the primary engine of your credibility, customer discovery, and conversion. At ALFRIX TECH, we engineer custom websites with clean semantic architecture, blazing fast load times, and intuitive responsive interfaces. Whether you need a high-converting landing page, an e-commerce storefront, or a multi-page corporate presence, we ensure your site is built to modern web standards, indexed cleanly by search engines, and designed for effortless user engagement on every screen size.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80",
    caps: [
      "Corporate & business company websites",
      "High-converting campaign landing pages",
      "E-commerce storefronts & product showcases",
      "Interactive restaurant menus & booking flows",
      "Complete site redesigns & modern migration",
      "SEO-conscious semantic architecture",
      "Accessibility (WCAG) & Core Web Vitals optimization",
    ],
    problems: [
      "Outdated visual design that undermines customer credibility",
      "Slow loading speeds that drive potential clients to competitors",
      "Broken layouts and difficult navigation on mobile devices",
      "Lack of online ordering, reservation, or lead capture mechanisms",
      "Poor search engine visibility and missing metadata",
    ],
    deliverables: [
      "Custom, component-driven responsive frontend codebase (Next.js & Tailwind)",
      "Fully configured domain, SSL certificate, and deployment pipeline",
      "Structured SEO metadata, sitemap.xml, and social sharing OpenGraph previews",
      "Interactive contact, inquiry, or ordering mechanisms",
      "Fast global CDN delivery via Vercel or Netlify",
    ],
    useCases: [
      {
        title: "Corporate Engineering & Construction",
        desc: "Showcase large-scale civil engineering capabilities, tender portfolios, and client certifications with an authoritative dark-aesthetic digital presence.",
      },
      {
        title: "Artisanal Bakeries & Restaurants",
        desc: "Display culinary menus, enable customer pre-orders for fresh bakes, and accept table bookings directly from mobile phones.",
      },
      {
        title: "Luxury Salons & Wellness Spas",
        desc: "Highlight treatment catalogues, pricing tiers, stylist portfolios, and streamline client appointment bookings.",
      },
      {
        title: "Real Estate & Property Management",
        desc: "Present premium property listings with high-resolution visual galleries, architectural specs, and direct acquisition inquiries.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Discovery & Structure",
        desc: "We analyze your audience, content hierarchy, and conversion goals to map out a clear sitemap and wireframe layout.",
      },
      {
        step: "02",
        title: "Design System & Prototyping",
        desc: "We craft visual styling, typographic scales, dark-mode lighting, and interactive components aligned with your brand identity.",
      },
      {
        step: "03",
        title: "Engineering & Integration",
        desc: "We code the website using Next.js, TypeScript, and Tailwind CSS, integrating contact mechanisms and dynamic data.",
      },
      {
        step: "04",
        title: "Testing & Performance Audit",
        desc: "We audit cross-browser compatibility, mobile responsiveness, accessibility standards, and Core Web Vitals metrics.",
      },
      {
        step: "05",
        title: "Launch & Domain Setup",
        desc: "We configure DNS records, SSL encryption, sitemap indexing, and hand over complete access and documentation.",
      },
    ],
    faqs: [
      {
        q: "How long does it typically take to develop a website?",
        a: "Timelines depend on scope. A focused corporate landing page or business site typically takes 2 to 3 weeks, while comprehensive multi-page platforms with custom workflows take 4 to 6 weeks.",
      },
      {
        q: "Will our website be optimized for mobile smartphones?",
        a: "Yes. Every website we build is developed mobile-first, ensuring fluid performance, touch-friendly navigation, and readable typography across Android, iOS, tablets, and wide desktop screens.",
      },
      {
        q: "Do you build on templates or create custom code?",
        a: "We engineer bespoke websites using clean Next.js and Tailwind CSS code. This ensures zero template bloat, lightning-fast load speeds, high security, and complete flexibility for future enhancements.",
      },
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel", "Netlify"],
  },
  {
    slug: "web-applications",
    title: "Web Applications & Custom Software",
    shortTitle: "Web Applications",
    heroHeadline: "Custom Web Software Engineered to Automate and Scale Operations.",
    summary:
      "We build bespoke software platforms, administrative dashboards, customer portals, and internal tools tailored to your workflows.",
    explanation:
      "When off-the-shelf software falls short or becomes prohibitively expensive with per-user seat fees, custom web applications give your business complete ownership of your tools. ALFRIX TECH designs and builds secure, scalable web applications that eliminate spreadsheet chaos and automate repetitive operations. From role-based management dashboards and booking engines to custom SaaS platforms and institutional management systems, we engineer software built around your exact business logic.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80",
    caps: [
      "Custom SaaS platforms and client portals",
      "Administrative back-office dashboards & analytics",
      "Booking, reservation, and ticketing workflows",
      "School, student, and institutional management systems",
      "Inventory tracking, order fulfillment, and sales software",
      "Secure authentication, authorization, and role-based permissions",
      "Robust REST & GraphQL API architecture and third-party integrations",
    ],
    problems: [
      "Core business operations scattered across fragile spreadsheets and paper logs",
      "Commercial software that forces your team to alter proven workflows",
      "High recurring monthly subscription fees for rigid third-party SaaS",
      "Lack of centralized role permissions and real-time operational reporting",
      "Customer data trapped in silos that cannot communicate with other tools",
    ],
    deliverables: [
      "Full-stack custom application with structured database schema (PostgreSQL/MySQL)",
      "Secure user authentication (OAuth, JWT, role-based access control)",
      "Responsive administrative portal with data visualization and search filters",
      "Comprehensive API documentation and export capabilities",
      "Automated deployment on secure cloud infrastructure",
    ],
    useCases: [
      {
        title: "Order & Kitchen Management Portals",
        desc: "Enable food businesses to monitor incoming pickup and delivery tickets, manage menu availability, and track fulfillment in real time.",
      },
      {
        title: "Institutional School Management",
        desc: "Centralize student enrollments, academic terms, grading reports, attendance registers, and parent communications in one secure system.",
      },
      {
        title: "Client Service Dashboards",
        desc: "Provide clients with authenticated accounts where they can view ongoing project statuses, upload documentation, and request adjustments.",
      },
      {
        title: "Inventory & Dispatch Systems",
        desc: "Track stock movements, low-inventory alerts, purchase orders, and supplier information without relying on error-prone spreadsheets.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Workflow & Data Architecture",
        desc: "We dissect your operational processes, map relational data entities, and define strict user permission hierarchies.",
      },
      {
        step: "02",
        title: "API Design & Prototyping",
        desc: "We architect resilient REST endpoints and create interactive wireframes for desktop dashboards and mobile views.",
      },
      {
        step: "03",
        title: "Sprint Development",
        desc: "We build database models, backend controllers, and reactive frontend interfaces in structured milestones.",
      },
      {
        step: "04",
        title: "Security & Validation",
        desc: "We test input sanitisation, authentication flows, database query performance, and error recovery safeguards.",
      },
      {
        step: "05",
        title: "Staged Rollout & Training",
        desc: "We deploy to a staging environment for your team's validation before pushing to production with full administrator walkthroughs.",
      },
    ],
    faqs: [
      {
        q: "How do you ensure our business data remains secure?",
        a: "We enforce industry standard security best practices: encrypted password hashing, JWT/session management, strict role-based access control, parameterised queries preventing SQL injection, and environment-variable secrets management.",
      },
      {
        q: "Can the application scale as our company expands?",
        a: "Yes. By building on modern, decoupled stacks (Next.js, Node.js, PostgreSQL), your application can handle growing user bases, database records, and concurrent sessions without fundamental rewrites.",
      },
      {
        q: "Who owns the code and database once the project is finished?",
        a: "You retain 100% ownership of your codebase, database, and intellectual property upon full project completion.",
      },
    ],
    techStack: ["Next.js", "Node.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS", "Docker"],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile Application Development",
    shortTitle: "Mobile Apps",
    heroHeadline: "Intuitive Cross-Platform Mobile Applications for iOS and Android.",
    summary:
      "We engineer responsive, native-feeling mobile applications for smartphones and tablets using React Native and Expo.",
    explanation:
      "Modern users expect fast, responsive mobile experiences that work seamlessly wherever they go. ALFRIX TECH designs and engineers cross-platform mobile applications using React Native and Expo. This methodology delivers native performance and access to device features — camera, geolocation, biometric login, and push notifications — while sharing a unified codebase for both Android and iOS. The result is faster time-to-market, lower maintenance overhead, and a consistent, polished experience for your users.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&auto=format&fit=crop&q=80",
    caps: [
      "Cross-platform iOS and Android mobile development (React Native & Expo)",
      "Native device integration: push notifications, camera, geolocation, biometrics",
      "Offline-first caching and local database synchronisation",
      "Secure mobile authentication, session management, and OAuth",
      "REST & GraphQL API consumption and real-time state synchronisation",
      "Automated continuous integration (CI) & APK/AAB build pipelines",
      "App Store & Google Play preparation and submission guidance",
    ],
    problems: [
      "Mobile web limitations when customers require offline access or hardware features",
      "Prohibitive costs and duplicated effort of maintaining separate Swift and Kotlin codebases",
      "Low user retention without reliable native push notification mechanisms",
      "Sluggish hybrid wrappers that frustrate users with poor frame rates and unresponsive touches",
      "Difficulty managing automated APK builds and deployment distribution",
    ],
    deliverables: [
      "Unified React Native / Expo application codebase with strict TypeScript typing",
      "Installable Android APK / AAB production packages and iOS development builds",
      "Configured push notification backend service (Expo / Firebase Cloud Messaging)",
      "Secure local storage implementation for fast offline-resilient access",
      "Step-by-step app store release documentation and build artifacts",
    ],
    useCases: [
      {
        title: "Mobile Commerce & Point-of-Sale (ShopFlow)",
        desc: "Empower retail staff and customers with rapid barcode scanning, inventory lookups, offline carts, and instant checkout sync.",
      },
      {
        title: "Healthcare & Patient Tracking (Hackers Medicare)",
        desc: "Enable medication schedule reminders, push alerts, vital health tracking, and confidential clinical communication.",
      },
      {
        title: "Automated Build & Client Distribution (Fiorio)",
        desc: "Deploy cross-platform applications through automated GitHub Actions CI pipelines, delivering testable APKs to stakeholders within minutes.",
      },
      {
        title: "On-the-Go Field Operations",
        desc: "Equip mobile technicians and inspectors to record site data, take geocoded photographs, and submit reports from areas with spotty internet.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Mobile Journey & UX Architecture",
        desc: "We chart user navigation flows, bottom-sheet interactions, thumb-zone ergonomics, and offline fallbacks.",
      },
      {
        step: "02",
        title: "Component & UI Design",
        desc: "We design native-compliant screens adhering to Apple Human Interface Guidelines and Google Material Design.",
      },
      {
        step: "03",
        title: "React Native Implementation",
        desc: "We construct screens, integrate device APIs, bind remote endpoints, and implement robust local state handling.",
      },
      {
        step: "04",
        title: "Physical Device Testing",
        desc: "We test on real Android smartphones and iOS devices to verify gesture smoothness, battery usage, and network resilience.",
      },
      {
        step: "05",
        title: "Build Automation & Distribution",
        desc: "We compile optimized binaries (APK/AAB/IPA) using automated cloud build pipelines ready for testing and store distribution.",
      },
    ],
    faqs: [
      {
        q: "Why use React Native and Expo instead of two native apps?",
        a: "React Native compiles to native UI components while allowing up to 90% shared business logic across iOS and Android. This dramatically reduces development costs, speeds up delivery, and eliminates feature discrepancies between platforms.",
      },
      {
        q: "Can the mobile app function when the user has no internet connection?",
        a: "Yes. We can architect offline-first caching using local SQLite or persistent storage, enabling users to view data and queue actions that sync automatically once connection returns.",
      },
      {
        q: "Do you help publish the application to the App Store and Google Play?",
        a: "We prepare all necessary production signing keys, store assets, privacy disclosures, and provide guided assistance through the submission and review process.",
      },
    ],
    techStack: ["React Native", "Expo", "TypeScript", "Tailwind / NativeWind", "SQLite", "GitHub Actions"],
  },
  {
    slug: "blockchain-development",
    title: "Blockchain Development",
    shortTitle: "Blockchain",
    heroHeadline: "Web3 Engineering and Decentralised Solutions for Genuine Use Cases.",
    summary:
      "We architect decentralised application frontends, wallet integrations, and on-chain data connections where decentralisation adds verifiable value.",
    explanation:
      "Blockchain technology is not an answer to every problem, but where transparency, cryptographic immutability, or non-custodial asset control provide a genuine advantage, it is transformative. ALFRIX TECH builds Web3 applications, dApp frontends, and on-chain integrations that bridge user-friendly web interfaces with distributed ledgers. We connect your software to Ethereum, Polygon, Arbitrum, Base, and other EVM-compatible ecosystems, ensuring seamless wallet connection, responsive transaction handling, and robust data synchronisation.",
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&auto=format&fit=crop&q=80",
    caps: [
      "Decentralised application (dApp) frontend engineering",
      "Non-custodial wallet connections (MetaMask, Coinbase Wallet, WalletConnect)",
      "EVM network integrations (Ethereum, Polygon, Arbitrum, Base, BSC)",
      "On-chain event monitoring, indexing, and state synchronisation",
      "Token-related application interfaces and balance dashboards",
      "Cryptographic signature verification and decentralised authentication (SIWE)",
      "Web3 library integration using modern Viem, Wagmi, and Ethers.js",
    ],
    problems: [
      "Clunky Web3 onboarding that confuses non-technical users and causes high bounce rates",
      "Unreliable RPC node connections that lead to failed transactions and desynchronised UI states",
      "Need for verifiable, tamper-evident audit trails that traditional centralised databases cannot guarantee",
      "Inability to bridge existing web platforms with on-chain assets and decentralized protocols",
    ],
    deliverables: [
      "Responsive dApp interface with polished wallet connection modals and network switchers",
      "Robust state management reflecting pending, confirmed, and failed on-chain transactions",
      "Integration with reliable RPC infrastructure and block indexers",
      "Cryptographic authentication flows for wallet-based account access",
      "End-to-end testing on EVM testnets (Sepolia / Base Sepolia)",
    ],
    useCases: [
      {
        title: "Decentralised Asset & Credential Registry",
        desc: "Issue tamper-proof certificates, property titles, or membership credentials that can be verified by anyone globally without relying on a central authority.",
      },
      {
        title: "Token-Gated Community & Access Portals",
        desc: "Restrict exclusive services, downloads, or business portals to verified holders of specific on-chain tokens or badges.",
      },
      {
        title: "Transparent Escrow & Settlement Interfaces",
        desc: "Provide clients and suppliers with transparent on-chain interfaces that disburse funds automatically once milestone criteria are met.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Use Case & Feasibility Review",
        desc: "We rigorously evaluate whether decentralisation provides a tangible operational advantage or if a traditional database is better suited.",
      },
      {
        step: "02",
        title: "Network & Architecture Selection",
        desc: "We select the optimal EVM chain based on transaction throughput, gas economics, and developer ecosystem support.",
      },
      {
        step: "03",
        title: "dApp Frontend Construction",
        desc: "We build intuitive Web3 user interfaces utilizing Wagmi, Viem, and Next.js with clear transaction feedback states.",
      },
      {
        step: "04",
        title: "Testnet Staging & Stress Testing",
        desc: "We simulate network latency, wallet rejection handling, gas fluctuations, and edge cases on public testnets.",
      },
      {
        step: "05",
        title: "Mainnet Integration & RPC Redundancy",
        desc: "We connect production contracts, configure resilient fallback RPC providers, and provide complete operating guidelines.",
      },
    ],
    faqs: [
      {
        q: "Does my business really need blockchain?",
        a: "Not necessarily. We will never sell you blockchain development for the sake of hype. We only recommend blockchain when your project genuinely requires trustless verification, immutable records, or decentralised token interactions.",
      },
      {
        q: "Which blockchain networks do you support?",
        a: "We specialise in EVM-compatible networks, including Ethereum mainnet, Polygon, Arbitrum, Base, Optimism, and BNB Chain.",
      },
      {
        q: "How do you handle wallet connection for users who are new to Web3?",
        a: "We design clean connection flows that support popular browser extensions (MetaMask), mobile wallet QR codes (WalletConnect), and social wallet login abstractions where appropriate.",
      },
    ],
    techStack: ["Solidity", "TypeScript", "Next.js", "Viem", "Wagmi", "Ethers.js", "WalletConnect"],
    note: "Blockchain is a specialised engineering discipline. We build for verified use cases where decentralisation provides a genuine architectural advantage.",
  },
  {
    slug: "smart-contracts",
    title: "Smart Contract Development",
    shortTitle: "Smart Contracts",
    heroHeadline: "Robust, Tested Smart Contracts Built to Exact Technical Requirements.",
    summary:
      "We develop secure Solidity smart contracts with automated test suites, gas optimization, and formal verification preparation.",
    explanation:
      "Smart contracts execute autonomously on distributed ledgers. Because on-chain code is immutable once deployed, mistakes are permanent. ALFRIX TECH approaches smart contract development with rigorous engineering discipline. We draft clear functional specifications, implement standards-compliant Solidity contracts (ERC-20, ERC-721, ERC-1155, custom logic), optimize gas execution costs, and author exhaustive automated test suites. We guide you from local testnet simulation through to testnet staging and preparation for independent security reviews.",
    image:
      "https://images.unsplash.com/photo-1622979135225-d2ba269bc1df?w=1200&auto=format&fit=crop&q=80",
    caps: [
      "Custom Solidity smart contract architecture and design",
      "Token implementation (ERC-20, ERC-721, ERC-1155, Soulbound tokens)",
      "Automated escrow, payment routing, and revenue splitting mechanics",
      "Exhaustive unit and integration testing suites (Hardhat / Foundry)",
      "Static analysis and vulnerability scanning (Slither / Mythril)",
      "Gas optimization to reduce user transaction costs",
      "Testnet deployment, Etherscan contract verification, and documentation",
    ],
    problems: [
      "Counterparty risks in commercial agreements requiring automated programmatic settlement",
      "Smart contracts written without exhaustive testing that remain vulnerable to logic exploits",
      "Excessive gas consumption making on-chain transactions unviable for end users",
      "Unverified contract source code that destroys user confidence and protocol transparency",
    ],
    deliverables: [
      "Clean, modular, thoroughly commented Solidity contract codebase",
      "Automated test suite achieving comprehensive branch and statement coverage",
      "Automated deployment and upgrade scripts with parameter validation",
      "Static analysis reports highlighting clean vulnerability scans",
      "Verified contract source code on block explorers with ABI documentation",
    ],
    useCases: [
      {
        title: "Milestone-Based Escrow Contracts",
        desc: "Lock funds programmatically and disburse payments to service providers only upon mutual digital approval or proof submission.",
      },
      {
        title: "Automated Royalty & Revenue Sharing",
        desc: "Split incoming payments proportionally across multiple partner wallets in a single transaction without manual accounting.",
      },
      {
        title: "Decentralised Access Tokens & Memberships",
        desc: "Mint non-fungible or soulbound verification tokens that prove identity, course completion, or accreditation status.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Specification Freezing",
        desc: "We define immutable rules, state variables, privileged roles, and edge-case exceptions before writing a single line of contract code.",
      },
      {
        step: "02",
        title: "Modular Implementation",
        desc: "We build contracts adhering to battle-tested OpenZeppelin standards, avoiding unproven code patterns.",
      },
      {
        step: "03",
        title: "Exhaustive Automated Testing",
        desc: "We write unit and fuzz tests covering every function modifier, boundary condition, and failure scenario.",
      },
      {
        step: "04",
        title: "Static Analysis & Gas Optimization",
        desc: "We run Slither security analysers, refactor storage layouts, and prune unnecessary bytecode execution.",
      },
      {
        step: "05",
        title: "Testnet Verification & Audit Prep",
        desc: "We deploy to public testnets, verify contract bytecode on block explorers, and prepare complete audit-ready documentation.",
      },
    ],
    faqs: [
      {
        q: "Can a smart contract be modified once it is deployed?",
        a: "By default, smart contracts are immutable. If your business model requires future upgrades, we can architect secure, transparent proxy patterns (such as UUPS or Transparent Upgradeable Proxies) with strict multi-sig governance.",
      },
      {
        q: "Do you perform third-party security audits?",
        a: "We conduct thorough internal security audits, unit testing, and static analysis scans. For production contracts handling significant financial value, we always recommend and facilitate an independent third-party audit.",
      },
      {
        q: "How do you minimize gas fees for users interacting with the contract?",
        a: "We optimize variable packing in storage slots, minimize external calls, leverage memory over storage where applicable, and implement efficient algorithmic patterns.",
      },
    ],
    techStack: ["Solidity", "Foundry", "Hardhat", "OpenZeppelin", "Slither", "TypeScript", "Etherscan API"],
    note: "Production smart contracts should always undergo rigorous testing and an independent security audit before handling client capital.",
  },
  {
    slug: "bot-automation",
    title: "Bots & Business Automation",
    shortTitle: "Bot Automation",
    heroHeadline: "Intelligent Bots and Automated Workflows That Eliminate Repetitive Work.",
    summary:
      "We engineer custom Telegram bots, official WhatsApp Business workflows, and API automation pipelines that save time and capture leads.",
    explanation:
      "Businesses spend hundreds of hours every month on manual, repetitive tasks: responding to identical customer inquiries, chasing leads, entering order details, and sending reminder notifications. ALFRIX TECH builds purpose-built automation bots and integrations that run 24/7. We develop custom Telegram bots, official WhatsApp Business Platform integrations via Meta's Cloud API, and webhook pipelines that connect your messaging channels directly into your CRM, database, or order fulfillment systems.",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80",
    caps: [
      "Custom Telegram bots for customer service, order capture, and notifications",
      "Official WhatsApp Business Platform integrations (Meta Cloud API)",
      "Automated lead qualification and instant dispatch to human representatives",
      "Order tracking, booking confirmations, and automated payment alerts",
      "Webhook pipelines connecting messaging apps to databases & CRMs",
      "Internal administrative bots for staff notifications and quick database queries",
      "Scheduled cron tasks for daily reports, inventory alerts, and reminder dispatches",
    ],
    problems: [
      "Customer support staff overwhelmed answering the same repetitive questions daily",
      "Valuable sales leads going cold because inquiries received after-hours sit unread",
      "Manual data entry errors when copying customer orders from chat into spreadsheets",
      "Lack of immediate automated transaction receipts and order confirmation messages",
      "Inefficient manual dispatch of reminders and follow-up communications",
    ],
    deliverables: [
      "Dedicated bot application with webhook endpoints running on high-availability cloud servers",
      "Custom conversation flows, interactive inline keyboards, and command menus",
      "Database integration to store lead details, customer queries, and order tickets",
      "Admin alert channel forwarding hot leads directly to your sales team's phone",
      "Complete deployment guide, API credentials documentation, and maintenance handbook",
    ],
    useCases: [
      {
        title: "Automated Food Ordering via Telegram",
        desc: "Customers browse categorized dishes, select quantities, enter pickup times, and place orders directly in Telegram with instant kitchen alerts.",
      },
      {
        title: "Official WhatsApp Support & Lead Routing",
        desc: "Qualify prospective clients via WhatsApp interactive messages, capture project requirements, and automatically notify your engineers.",
      },
      {
        title: "Real-Time Payment & Transaction Alerts",
        desc: "Automatically notify internal managers or customers the second an invoice is settled, a property viewed, or a booking scheduled.",
      },
      {
        title: "Internal Operations Bot",
        desc: "Allow staff to query current stock, check appointment bookings, or submit daily shift reports directly from Telegram or WhatsApp.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Conversation & Workflow Mapping",
        desc: "We script out every conversation branch, user command, error fallback, and database interaction.",
      },
      {
        step: "02",
        title: "Platform Setup & API Provisioning",
        desc: "We register official bot tokens (Telegram BotFather) or configure Meta WhatsApp Business Cloud API developer accounts.",
      },
      {
        step: "03",
        title: "Webhook & Business Logic Coding",
        desc: "We build resilient backend services (Node.js/Python) that handle incoming webhooks, query databases, and return instant replies.",
      },
      {
        step: "04",
        title: "Edge-Case Testing",
        desc: "We test rapid message bursts, malformed inputs, timeout retries, and ensure smooth fallback to human support.",
      },
      {
        step: "05",
        title: "Cloud Deployment & Monitoring",
        desc: "We deploy the bot on 24/7 cloud infrastructure with error telemetry, logging, and automated process recovery.",
      },
    ],
    faqs: [
      {
        q: "Do you use unofficial WhatsApp tools that risk phone number bans?",
        a: "No. We exclusively engineer WhatsApp automations using the official Meta WhatsApp Business Platform (Cloud API). This protects your business phone number from bans and ensures 100% compliance with platform policies.",
      },
      {
        q: "Can a bot hand over a conversation to a real human?",
        a: "Yes. When a user requests to speak with a person, or when an inquiry falls outside predefined options, the bot can instantly ping your team and pause automated replies for that user.",
      },
      {
        q: "Where does the bot run?",
        a: "We host bots on secure cloud environments (e.g. Render, Railway, AWS, or DigitalOcean) configured with automatic restarts and zero-downtime webhook handling.",
      },
    ],
    techStack: ["Node.js", "Python", "Telegram Bot API", "Meta WhatsApp Cloud API", "PostgreSQL", "Webhooks"],
    note: "We build messaging automations exclusively using official, authorized APIs to guarantee longevity and account security.",
  },
];
