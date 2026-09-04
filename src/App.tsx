import { useState, useEffect, useRef, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
import {
  ArrowRight,
  Linkedin,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  MessageSquare,
  Mail,
  ExternalLink,
  Github,
  Award,
  BookOpen,
  X,
  ArrowLeft,
  Sparkles,
  Zap,
  CheckCircle2,
  Copy,
  Check,
  MapPin
} from 'lucide-react';
import MediaPage from './MediaPage';
import confetti from 'canvas-confetti';
// @ts-expect-error: konami-code-js does not have type definitions
import Konami from 'konami-code-js';

/* --- Data --- */
const EXPERIENCE = [
  {
    company: 'Google Cloud Delta ⚡',
    logo: 'https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg',
    role: 'Staff Technical Deployment Lead (TDL) | Delta',
    period: 'Jun 2026 — Present',
    description: 'Staff AI Technical Deployment Lead (TDL) for Google Cloud Delta & AI Activation / Forward Deployed Engineering (FDE) team.',
    highlights: [
      'Forward Deployed Engineer (FDE) Operating Model lead for 15 top-qualified enterprise accounts (including Ford and Intel).',
      'Defined forward operating model across GTM FDE, Delta FDE, TDL, PSO, GSD, PL, and CALs to accelerate enterprise AI activation.',
      'Scoped forward-deployed engineering opportunities for Ford and Intel based on high-impact AI use cases.',
      'Deal team capturing $2B multi-year commit generating $63M Google Services Funds, $5M Learning, and $32M Partner Services Funds.'
    ],
    skills: ['Technical Deployment', 'FDE Operating Model', 'Enterprise Transformation', 'Strategic Deal Scoping']
  },
  {
    company: 'Google Cloud AI 🎯',
    logo: 'https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg',
    role: 'Outbound Product Manager | 20% Rotator | Gemini Enterprise App',
    period: 'Jun 2026 — Present',
    description: 'Outbound Product Manager driving competitive strategy and General Availability (GA) Agent Governance for Gemini Enterprise App.',
    highlights: [
      'Led tiger team and escalation sessions for Google Cloud competitive battlecards against Claude Cowork; featured on GTM Prompt Live Seminar.',
      'Led field team training enablement and captured customer feedback on Agent Identity, Agent Registry, and Agent Gateway for Gemini Enterprise App GA Launch.',
      'Partnered closely with inbound PM and engineering teams to prioritize enterprise governance features on the core product roadmap.'
    ],
    skills: ['Competitive Strategy', 'Agent Governance', 'Field Enablement', 'Product Strategy']
  },
  {
    company: 'Google Cloud AI 🚀',
    logo: 'https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg',
    role: 'Outbound Product Manager | 100% Rotator | GE Agent Platform & Gemini Enterprise App',
    period: 'Dec 2025 — Jun 2026',
    description: 'Outbound Product Manager leading developer ecosystem scale, Gartner Magic Quadrant response, and enterprise agent governance strategy.',
    highlights: [
      'Co-led Advent of Agents Seasons 1 & 2 developer campaigns reaching over 32,000 developers, trending as a Top 5 global GitHub repo, and driving 5 Trillion tokens to Gemini. Delivered SOL331 talk at Cloud Next \'26.',
      'Co-authored Executive "Intro to Agents" whitepaper for Kaggle course reaching 1.5M registered attendees, setting the industry standard for LLM Ops & Agent Orchestration.',
      'Led Gartner® Magic Quadrant response for RFI and Demo resulting in Google recognized as a Leader in AI Application Development Platforms.',
      'Co-authored pivotal cross-org RFC on Agent Governance, securing VP and Director-level roadmap alignment across 5 distinct product areas (Apigee, Workspace, Gemini Enterprise, Agent Platform, Agent Builder).',
      'Authored "Gemini Enterprise Governance at Scale" and presented to Top 50 enterprise customers (McKinsey, Accenture, Wells Fargo, Pfizer, Cision, CGC).',
      'Envisioned and developed AgentOps Cockpit to transition fleet management to Governance-as-Code; directed global security audit of 44 active enterprise agents and embedded OpenTelemetry tracing into ADK.',
      'Authored rapid-response playbook defending 34,000-seat Gemini Enterprise opportunity with DoorDash and Telus positioning.',
      'Standardized official GenAI FDE Interview Guide and wrote question banks for Professional ML Engineer exam.'
    ],
    skills: ['Developer Ecosystem', 'Gartner Magic Quadrant', 'AgentOps Cockpit', 'Enterprise Governance', 'ADK & A2A']
  },
  {
    company: 'Google Cloud AI Services 🧪',
    logo: 'https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg',
    role: 'Senior AI Consultant | Cloud Professional Services (PSO)',
    period: 'Jun 2023 — Dec 2025',
    description: 'Delivered AI solutions for 24 customer projects ($14.6M revenue, 81% utilization, 100% CSAT). Closed 21 customer deals ($11M revenue).',
    highlights: [
      'NBC Olympic Games Oli Chatbot: Owned technical strategy for Paris 2024 Olympic Games chatbot (40M viewers, 90M queries), autonomously devising Vertex AI Provisioned Throughput adoption strategy before GA with 0.5% error rate.',
      'WBD Localization & RLHF Architecture: Engineered custom DIY RLHF solution with 4 production-grade pipelines for captions/translation, saving deal from 2-week delay and securing $960K Phase 3 revenue.',
      'Launched Agent Center of Enablement globally across CEs, TAMs, and GCC.'
    ],
    skills: ['Vertex AI', 'RLHF / SFT', 'Provisioned Throughput', 'Enterprise MLOps', 'High-Scale Chatbots']
  },
  {
    company: 'Google Cloud AI Services 📊',
    logo: 'https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg',
    role: 'Senior Data Consultant | Cloud Professional Services (PSO)',
    period: 'Jun 2021 — Jun 2023',
    description: 'Quarterbacked technical delivery for marquee analytics migrations and source-mesh architecture.',
    highlights: [
      'Boeing Analytical Platform: Reshaped single-tenant migration into Source Oriented Mesh Architecture, scaling from 1 tenant to 29 tenants.',
      'Offering Lead for EDW Modernization into Delivery Navigator.',
      'Launched gShadowPSO dashboard as part of Hackathon Q3 2022 winning team.'
    ],
    skills: ['BigQuery', 'Data Architecture', 'Source Mesh', 'Migration Strategy']
  },
  {
    company: 'Amazon Web Services (AWS) ☁️',
    logo: 'https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg',
    role: 'Senior Cloud Architect | ProServe Public Sector',
    period: 'May 2020 — May 2021',
    description: 'Administered AWS Well-Architected Framework reviews, built TypeScript/CDK microservices, landing zones with Control Tower, and Kinesis-to-Splunk centralized logging.',
    highlights: [
      'Administered Well-Architected Framework reviews for enterprise AWS platforms with a serverless lens.',
      'Built distributed microservices architecture with TypeScript and AWS CDK.',
      'Designed Landing Zones with Control Tower and Transit Gateway with security-first posture.'
    ],
    skills: ['AWS Architecture', 'TypeScript / CDK', 'Control Tower', 'Enterprise Scaling']
  },
  {
    company: 'Accenture 💼',
    logo: 'https://www.vectorlogo.zone/logos/accenture/accenture-icon.svg',
    role: 'Senior Manager | Cloud Strategy & Data Analytics',
    period: 'May 2011 — May 2020',
    description: 'Sold over $10M in delivery work and generated $25M in pre-sales pipeline. Managed 5 direct reports. Led Disney+ global cloud scaling & MyMagic+ (FastPass+/MagicBands) product development.',
    highlights: [
      'Sold $10M+ in delivery work & generated $25M+ in pre-sales pipeline in final 5 years.',
      'Disney+ Global Scaling: Engineered cloud strategy for 100M+ users.',
      'MyMagic+ (FastPass+ & MagicBands): Key product development architect for Walt Disney World.'
    ],
    skills: ['Cloud Strategy', 'Disney+ / MyMagic+', 'DevSecOps', 'Leadership']
  }
];

const SERVICES = [
  {
    title: 'Delta AI Activation ⚡',
    description: 'Leading Forward Deployed Engineering (FDE) operating models for marquee accounts to activate production AI and turn multi-year commits into real ARR.',
    icon: Zap,
    color: '#38bdf8'
  },
  {
    title: 'Enterprise AI Governance 🛡️',
    description: 'Architecting robust frameworks for Agent-to-Agent (A2A) orchestration, Agent Identity, Agent Gateway, and Governance-as-Code fleets.',
    icon: ShieldCheck,
    color: '#818cf8'
  },
  {
    title: 'Technical Evangelism & Enablement 🎤',
    description: 'Keynote speaker at Google Cloud Next, Build with Gemini, & NorthAm Tech Immersion, co-author of Intro to Agents (1.5M attendees) and Advent of Agents (32k+ devs).',
    icon: MessageSquare,
    color: '#ff7e5f'
  }
];

const RECENT_WORK = [
  {
    title: 'Economic Research Agent (Agent Garden) 📈',
    tag: 'ADK 2.0 / Econometrics',
    description: 'Autonomous Econometrician on Agent Garden bridging natural language inquiries with deterministic math modeling across FRED, Census, & HUD APIs.',
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1200&auto=format&fit=crop',
    link: 'https://economic-research.web.app/',
    details: {
      highlights: [
        "Live-API Grounding: Queries FRED, US Census Bureau, HUD, and Real Estate Yield APIs in real time with zero math drift.",
        "ADK 2.0 Quantitative Tools: Solves LLM math hallucinations and county FIPS code lookup barriers using 5 deterministic econometric tools.",
        "Agent Garden Showcase: Featured on Google Cloud Agent Garden (console.cloud.google.com/agent-platform/agent-garden).",
        "Open-Source Framework: Included in official Google ADK samples repository (google/adk-samples) and economic-research-skills."
      ],
      strategy: "Rather than publishing centralized think-tank insights, this agent provides an open-source, fully transparent econometric framework for analysts in real estate, labor, and regional development to run live intelligence pipelines.",
      team: "Enrique Chan, Casey Justus"
    }
  },
  {
    title: 'Lily & Robo Story Agent 🤖👧📖',
    tag: 'GenAI / AlphaEvolve',
    description: "Autonomous AI children's book publishing engine leveraging Gemini 2.5 Flash and AlphaEvolve algorithms for fixed-layout EPUB & PDF creation.",
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1200&auto=format&fit=crop',
    link: 'https://curious-little-minds.web.app/',
    details: {
      highlights: [
        "Evolved Narrative Engine: Uses Gemini 2.5 Flash & AlphaEvolve (climbing 7.45 → 8.91 in narrative virality and visual consistency).",
        "Unified Artwork Ecosystem: Automatically generates consistent, textless watercolor visual prompts for recurring characters (Lily & Robo).",
        "Multilingual Translation: Typesets & overlays local editions dynamically across 8 languages (English, Spanish, French, Japanese, etc.).",
        "Turnkey Compilers: Renders fixed-layout EPUB eBooks and print-ready PDF manuscripts directly to Google Drive."
      ],
      strategy: "Bridging creative AI storytelling with production-grade compilation pipelines. Using evolutionary algorithms (AlphaEvolve) to refine prompt structures continuously, ensuring original story arcs and strict character asset consistency.",
      team: "Enrique Chan"
    }
  },
  {
    title: 'SafeKids Portal 🛡️👶',
    tag: 'Parenting Tech / Family Blueprint',
    description: 'Research-backed parent action plan, low-stimulus channel directory, and technical lockdown guides for algorithm-free kids media.',
    image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=1200&auto=format&fit=crop',
    link: 'https://safe-kids.web.app/',
    details: {
      highlights: [
        "Parent Decision Framework: Actionable guidance across Zero Screen Time (0–3), Curated Media Rips (PBS Kids/Plex), and Approval Bots.",
        "Low-Stimulus Channel Directory: 18+ vetted, overstimulation-free channel and series recommendations categorized by age group.",
        "Open-Source Tools Comparison: Detailed architectural and UX breakdown of 6 parent-controlled tools (BrainRotGuard, KidzTV, YouTubeWhitelist, KidTube).",
        "Technical Lockdown Blueprints: Step-by-step hardened configuration guides for iOS Guided Access, Android Screen Pinning, and Fire Tablets."
      ],
      strategy: "As a father of 3, I engineered SafeKids Portal to give parents a practical, research-backed blueprint for eliminating algorithmic overstimulation and reclaiming intentional family screen time.",
      team: "Enrique Chan"
    }
  },
  {
    title: 'AgentOps Cockpit 🕹️',
    tag: 'Open Source / Core Ops',
    description: 'The professional logic layer for Agentic Apps. Multi-cloud governance, automated SME audits, and protocol-level optimization.',
    image: '/cockpit.png',
    link: 'https://agent-cockpit.web.app/',
    details: {
      highlights: [
        "Governance as Code: Automated auditing against the Google Well-Architected framework.",
        "Adversarial Audits: Real-time citations and reviews by specialized FinOps, SecOps, and Architecture personas.",
        "92% Cost Optimization: Standardized logic layer for managing and securing agents across LLM ecosystems.",
        "A2A Connectivity: Secure swarm orchestration through the Agent-to-Agent Transmission Standard."
      ],
      strategy: "Agent Cockpit provides the 'Intelligence' to match the infrastructure 'Pipes'. By moving beyond basic prompt engineering to framework-agnostic governance and safety, we enable strategic autonomy for enterprise AI fleets.",
      team: "Enrique Chan (Lead), Agentic Trinity Working Group"
    }
  },
  {
    title: 'NBC Olympic Concierge 🏅',
    tag: 'Marquee / High Scale',
    description: 'Served 40M viewers with sub-second latency via Vertex AI Provisioned Throughput during Paris 2024.',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1200&auto=format&fit=crop',
    link: '#',
    details: {
      highlights: [
        "Served 40M Viewers: Scaled global AI concierge to handle massive traffic during Paris 2024 Olympic Games.",
        "90M+ Queries Handled: Achieved sub-second latency for natural language schedules and event discovery with 0.5% error rate.",
        "Vertex AI Provisioned Throughput: Orchestrated multi-region deployment to ensure 99.99% availability.",
        "Hyper-Personalized Discovery: Enabled fans to find events by athlete, country, and specific sporting moments."
      ],
      strategy: "The goal was to solve the discovery problem for 7,000+ hours of live content. We implemented OLI, an AI-powered logic system that synthesized real-time data into a conversational UI. By using Gemini Pro on Vertex AI, we delivered production-grade reliability at a scale never before seen in sports broadcasting.",
      team: "Abraham Gomez, Enrique Chan, Huge Inc, Google PSO",
      caseStudyImage: "/nbcu_oli_case_study.png"
    }
  },
  {
    title: 'Advent of Agents 🎄',
    tag: 'Community / SOP',
    description: '32k+ developers, Top 5 global GitHub repo, 5 Trillion tokens driven to Gemini.',
    image: '/advent_of_agents.png',
    link: 'https://adventofagents.com/',
    details: {
      highlights: [
        "Global Dev Reach: Reached 32,000+ developers across Seasons 1 & 2.",
        "High-Intent Engagement: Driven by daily 'Katas', hosting 165k+ visits with a 22% daily return rate.",
        "Record Adoption Velocity: Onboarded active enterprise customers using ADK.",
        "Open Source Standard: Agent Starter Pack repo surged into Top 5 global repos on GitHub."
      ],
      strategy: "We validated that a 'Code-First' content strategy is highly effective. By shipping daily 'Katas' (deployable skills) instead of static content, we solved the friction between learning and building.",
      team: "Abraham Gomez, Alan Blount, Elia Secchi, Enrique Chan, Shubham Saboo"
    }
  },
  {
    title: 'Disney+ Global Scaling 🏰',
    tag: 'Strategic Product',
    description: 'Scaling the digital future of entertainment through the worldwide rollout of Disney+ for 100M+ users.',
    image: 'https://images.unsplash.com/photo-1594908900066-3f47337549d8?q=80&w=1200&auto=format&fit=crop',
    link: 'https://www.disneyplus.com/'
  },
  {
    title: 'MyMagic+ & MagicBands ✨',
    tag: 'UX Innovation / IoT',
    description: 'Launching transformational guest tech (FastPass+, MagicBands) at Walt Disney World.',
    image: 'https://images.unsplash.com/photo-1505833115364-e28c42c41f97?q=80&w=1200&auto=format&fit=crop',
    link: '#'
  },
  {
    title: 'WBD Caption AI 🎬',
    tag: 'Advanced MLOps',
    description: 'Production-grade STT/Translation pipelines using human feedback (RLHF) and fine-tuning, securing $960K Phase 3 revenue.',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1200&auto=format&fit=crop',
    link: '#'
  }
];

const AWARDS = [
  {
    title: "Winner: Cards Against Humanity Agent 🃏",
    organization: "AIS Offsite Hackathon",
    detail: "Nov 2025 — Boulder, CO. Developed an autonomous agent capable of high-context humor and game logic using advanced prompt engineering.",
    tags: ["Hackathon Winner", "Nov 2025"]
  },
  {
    title: "Cloud GTM Excellence Award 2025 🌟",
    organization: "Google",
    detail: "Awarded for pioneering work on Wayfair retail agentic use cases, establishing the future of AI-driven commerce experiences.",
    tags: ["2025", "Strategic Excellence"]
  },
  {
    title: "GTM Cloud Tech Impact Award 2024 🏆",
    organization: "Google",
    detail: "Awarded for NBCU OLI Olympic Chatbot. Recognizing the technical innovation and business impact of the NBC Olympic Concierge solution which served over 40 million viewers.",
    image: "/cloud_tech_impact_award.jpg",
    tags: ["Technical Innovation", "Business Impact"]
  },
  {
    title: "GTM Cloud Function Flying-in-Formation 🤝",
    organization: "Google",
    detail: "H2 2024 — Recognized for excellence in collaborative cross-functional execution and team alignment.",
    tags: ["H2 2024", "Collaboration"]
  },
  {
    title: "GTM Cloud Excellence: Connecting Teams 🖇️",
    organization: "Google",
    detail: "H2 2024 — For outstanding project leadership in bridging technical and business units.",
    tags: ["H2 2024", "Excellence"]
  },
  {
    title: "Customer Empathy Award ❤️",
    organization: "Google Cloud CEO Thomas Kurian",
    detail: "H2 2024 — Awarded for deep customer-centric solutioning and improving the UX lifecycle for marquee clients.",
    tags: ["H2 2024", "Customer Success"]
  },
  {
    title: "PSO Noogler Shadow Dashboard 📈",
    organization: "PSO Hackathon",
    detail: "2022 — NorthAm Regional Winner. Developed a dashboard to optimize the mentorship and shadowing lifecycle for new Google starters.",
    tags: ["Regional Winner", "2022"]
  }
];

const CERTIFICATIONS = [
  {
    provider: 'Google Cloud (Professional)',
    logo: 'https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg',
    certs: [
      'Machine Learning Engineer (PMLE)',
      'Cloud Database Engineer (PCDE)',
      'Cloud Architect (PCA)',
      'Cloud Security Engineer (PCSE)',
      'Network Engineer (PNE)',
      'Workspace Administrator (GWA)',
      'Associate Cloud Engineer',
      'Cloud Digital Leader'
    ]
  },
  {
    provider: 'Amazon Web Services',
    logo: 'https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg',
    certs: [
      'Solutions Architect Professional',
      'Solutions Architect Associate',
      'Developer Associate',
      'Security Specialty',
      'Data Analytics Specialty',
      'SysOps Administrator Associate'
    ]
  },
  {
    provider: 'Agile & Data',
    logo: 'https://www.vectorlogo.zone/logos/splunk/splunk-icon.svg',
    certs: [
      'Scaled Agile SAFe 4',
      'Splunk Certified Power User'
    ]
  }
];

const PUBLICATIONS = [
  {
    title: '[Agent Garden] Solving LLM Hallucinations & Math Drift via ADK 2.0 📈',
    platform: 'Medium',
    image: '/a2ui_blog.png',
    description: 'How we built the Economic Research Agent to bridge natural language inquiries with live FRED, Census, and HUD APIs.',
    link: 'https://medium.com/@enriq/agent-garden-solving-llm-hallucinations-math-drift-and-obscure-identifiers-via-adk-2-0-5047985bfc46',
  },
  {
    title: 'I Built a Live-API Economic Research Agent 🌐',
    platform: 'google.dev',
    image: '/kaggle_whitepaper.png',
    description: 'Deep dive into live economic data querying, FIPS code resolution, and real estate yield calculations.',
    link: 'https://discuss.google.dev/t/i-built-a-live-api-economic-research-agent-fred-census-hud-real-estate-yields/379128',
  },
  {
    title: 'Building with A2UI: Why I Blew Up My Portfolio to Build a "Living" UI ✍️',
    platform: 'Medium',
    image: '/fun_factor_a2ui.png',
    description: "In the AI world, we've spent the last two years obsessed with RAG. Here's why declarative A2UI changes everything...",
    link: 'https://medium.com/@enriq/the-fun-factor-developing-at-the-speed-of-thought-024085b290dd?postPublishedType=repub',
  },
  {
    title: 'Building the Future of Agentic Interfaces ✍️',
    platform: 'Medium',
    image: '/a2ui_blog.png',
    description: 'Introducing the Agent UI Starter Pack (A2UI) for declarative agentic experiences.',
    link: 'https://medium.com/@enriq/building-the-future-of-agentic-interfaces-introducing-the-agent-ui-starter-pack-94d8fed86ca7',
  },
  {
    title: 'Introducing the Agent Optimizer 🛠️',
    platform: 'Medium',
    image: '/agent_optimizer_guide.png',
    description: 'How to use Google ADK to optimize agent performance and cost by up to 73%.',
    link: 'https://medium.com/@enriq/introducing-the-agent-optimizer-for-google-adk-3872856e6d7b',
  },
  {
    title: 'Architect\'s Guide: BigQuery AI Agent Ecosystem 📑',
    platform: 'Medium',
    image: '/bigquery_ai_ecosystem.png',
    description: 'What to recommend and when for data-driven agentic architectures.',
    link: 'https://medium.com/@enriq/the-architects-guide-to-the-bigquery-ai-agent-ecosystem-what-to-recommend-and-when-030b5116295a',
  },
  {
    title: 'Executive Whitepaper: Introduction to Agents 📖',
    platform: 'Kaggle',
    image: '/kaggle_whitepaper.png',
    description: 'Co-authored whitepaper for 1.5M registered attendees defining standard LLM Ops and agent orchestration patterns.',
    link: 'https://www.kaggle.com/whitepaper-introduction-to-agents',
  }
];

const TESTIMONIALS = [
  {
    quote: "Thank you for your work and commitment to leading with customer empathy. Your team's story is a great example of how we work together to best support our customers and support each other.",
    author: "Thomas Kurian",
    role: "CEO Google Cloud"
  },
  {
    quote: "GTM Cloud Excellence Connecting Teams Award: Congratulations on being awarded a GTM Cloud Regional Award. On behalf of Michael Clark and the Leadership Team we thank you for your dedication and impactful work!",
    author: "Michael Clark",
    role: "President Google Cloud NorthAm"
  },
  {
    quote: "Enrique was central to influencing the customer on Google's ability to deliver on their solution… he maintained leadership of Google's solution with deep dives, workshops, and direct executive engagements.",
    author: "Amar Raol",
    role: "Director Global Strategic Initiatives, Google"
  },
  {
    quote: "Amazing work for GCC at Next'24! Your expertise and impactful engagement were instrumental in the GenAI workshop's success.",
    author: "Lee Moore",
    role: "VP Google Cloud Consulting"
  },
  {
    quote: "Thank you for your willingness to review Day 1 whitepaper for Kaggle 5days of AI agents. Your insights were helpful in guiding us to a great whitepaper.",
    author: "Brian Delahunty",
    role: "VP Agents Platform"
  }
];

interface SpeakingEvent {
  title: string;
  event: string;
  session: string;
  time: string;
  location: string;
  image: string;
  images?: string[];
  link: string;
  status: string;
}

const SPEAKING: SpeakingEvent[] = [
  {
    title: "Build with Gemini: AI for Enterprise Builders 🚀",
    event: "Build with Gemini",
    session: "Keynote & Hands-On Architecture",
    time: "August 20, 2026",
    location: "Bellevue, WA",
    image: "/build_with_gemini_bellevue.jpg",
    link: "#",
    status: "COMPLETED"
  },
  {
    title: "Build with Gemini: AI for Business Builders 🚀",
    event: "Build with Gemini",
    session: "Keynote & Live Demo (215+ Guests)",
    time: "August 6, 2026",
    location: "Seattle, WA",
    image: "/build_with_gemini_seattle.jpg",
    images: ["/build_with_gemini_seattle.jpg", "/build_with_gemini_seattle_wide.jpg"],
    link: "#",
    status: "COMPLETED"
  },
  {
    title: "Architecting AI Agents 🏗️",
    event: "Google Cloud Next '26",
    session: "Keynote / Speaker",
    time: "April 22 - 24, 2026",
    location: "Mandalay Bay, Las Vegas",
    image: "/next_26_session.png",
    link: "https://cloud.withgoogle.com/next",
    status: "COMPLETED"
  },
  {
    title: "Architecting gen AI agents from LLM ops to advanced techniques 📢",
    event: "Google Cloud Next '25",
    session: "SOL308",
    time: "April 2025",
    location: "Solution Talks 1",
    image: "/next_25_session.png",
    link: "https://cloud.withgoogle.com/next",
    status: "COMPLETED"
  },
  {
    title: "Retail Concierge GenAI Gotchas: Production Pitfalls to Avoid ⚠️",
    event: "NorthAm Tech Immersion",
    session: "900+ Registrations (AMER & LATAM)",
    time: "February 2025",
    location: "Los Angeles, CA",
    image: "/tech_immersion_la.png",
    link: "#",
    status: "COMPLETED"
  },
  {
    title: "Gen AI Production Fuel Up Friday ⛽",
    event: "AIML SME Academy",
    session: "328 Technical Googlers — On-Demand Path",
    time: "November 2024",
    location: "Global Internal Training",
    image: "/gen_ai_fuel_up_friday.png",
    link: "#",
    status: "COMPLETED"
  },
  {
    title: "Agentic Workflow Real World Wednesday 🌍",
    event: "AIML SME Academy",
    session: "328 Technical Googlers — On-Demand Path",
    time: "November 2024",
    location: "Global Internal Training",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop",
    link: "#",
    status: "COMPLETED"
  },
  {
    title: "Generative AI Overcoming barriers to drive adoption 🪜",
    event: "Google Cloud Next '24",
    session: "6 sessions — Fully booked (30 C-level Executives each)",
    time: "April 2024",
    location: "Mandalay Bay, Las Vegas",
    image: "/cloud_next_24.png",
    link: "#",
    status: "COMPLETED"
  }
];

function SpeakingCardItem({ speech }: { speech: SpeakingEvent }) {
  const images = speech.images && speech.images.length > 0 ? speech.images : [speech.image];
  const [activeImgIdx, setActiveImgIdx] = useState(0);

  return (
    <motion.div
      className="speaking-card"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      exit={{ opacity: 0, scale: 0.98 }}
      layout
    >
      <div style={{ flex: '1.2', padding: '40px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
          <Award size={18} style={{ color: 'var(--accent-cyan)' }} />
          <span style={{ fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '11px', color: 'var(--accent-cyan)' }}>
            {speech.status} SESSION
          </span>
        </div>
        <h3 style={{ fontSize: '28px', marginBottom: '20px', lineHeight: '1.3' }}>{speech.title}</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '20px', marginBottom: '24px' }}>
          <div>
            <p style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Event</p>
            <p style={{ fontSize: '16px', fontWeight: 600 }}>{speech.event}</p>
          </div>
          <div>
            <p style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Session</p>
            <p style={{ fontSize: '16px', fontWeight: 600 }}>{speech.session}</p>
          </div>
          <div>
            <p style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Date & Location</p>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{speech.time} • {speech.location}</p>
          </div>
        </div>
      </div>
      <div style={{ flex: '0.8', minHeight: '260px', position: 'relative', overflow: 'hidden' }}>
        <img
          src={images[activeImgIdx]}
          alt={speech.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'all 0.3s ease' }}
        />
        {images.length > 1 && (
          <div style={{
            position: 'absolute',
            bottom: '16px',
            right: '16px',
            display: 'flex',
            gap: '8px',
            background: 'rgba(0, 0, 0, 0.7)',
            backdropFilter: 'blur(8px)',
            padding: '6px 12px',
            borderRadius: '20px',
            zIndex: 2
          }}>
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveImgIdx(i)}
                style={{
                  width: activeImgIdx === i ? '20px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  background: activeImgIdx === i ? 'var(--accent-cyan)' : 'rgba(255, 255, 255, 0.4)',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'all 0.2s ease'
                }}
                title={`View Photo ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export function ContactModal({ onClose }: { onClose: () => void }) {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0,0,0,0.88)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1200,
        padding: '24px'
      }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 20 }}
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'var(--bg-secondary)',
          border: '1px solid var(--border-subtle)',
          maxWidth: '560px',
          width: '100%',
          borderRadius: '24px',
          position: 'relative',
          padding: '36px',
          boxShadow: '0 20px 60px rgba(0,0,0,0.6)'
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            right: '20px',
            top: '20px',
            background: 'rgba(255,255,255,0.08)',
            border: 'none',
            borderRadius: '50%',
            padding: '8px',
            cursor: 'pointer',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background 0.2s ease'
          }}
        >
          <X size={18} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
          <div style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '2px solid var(--accent-cyan)',
            boxShadow: '0 0 16px rgba(56,189,248,0.35)',
            flexShrink: 0
          }}>
            <img src="/profile_bubble.jpg" alt="Enrique Chan" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div>
            <span style={{ fontSize: '11px', fontWeight: 800, color: 'var(--accent-cyan)', textTransform: 'uppercase', letterSpacing: '1.5px' }}>
              DIRECT CONTACT
            </span>
            <h2 style={{ fontSize: '24px', margin: '4px 0 0', fontWeight: 800 }}>Let's Build Together ⚡</h2>
          </div>
        </div>

        <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '28px' }}>
          Reach out for Enterprise AI Transformation, Forward Deployed Engineering, keynote speaking, or advisory engagements.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '28px' }}>
          {/* Work Email */}
          <div style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '16px',
            padding: '16px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ background: 'rgba(56,189,248,0.15)', color: 'var(--accent-cyan)', padding: '10px', borderRadius: '12px' }}>
                <Mail size={18} />
              </div>
              <div>
                <p style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Google Cloud / Work</p>
                <p style={{ fontSize: '15px', fontWeight: 600, color: '#f8fafc' }}>enriq@google.com</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                onClick={() => handleCopy('enriq@google.com', 'work')}
                style={{
                  background: copiedKey === 'work' ? 'rgba(74,222,128,0.2)' : 'rgba(255,255,255,0.08)',
                  border: `1px solid ${copiedKey === 'work' ? '#4ade80' : 'var(--border-subtle)'}`,
                  color: copiedKey === 'work' ? '#4ade80' : 'white',
                  borderRadius: '10px',
                  padding: '8px 12px',
                  fontSize: '12px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'all 0.2s ease'
                }}
              >
                {copiedKey === 'work' ? <><Check size={14} /> Copied</> : <><Copy size={14} /> Copy</>}
              </button>
              <a
                href="mailto:enriq@google.com"
                style={{
                  background: 'var(--accent-cyan)',
                  color: '#0b1120',
                  borderRadius: '10px',
                  padding: '8px 14px',
                  fontSize: '12px',
                  fontWeight: 800,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  textDecoration: 'none'
                }}
              >
                Send <ArrowRight size={14} />
              </a>
            </div>
          </div>

          {/* Personal Email */}
          <div style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '16px',
            padding: '16px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ background: 'rgba(255,126,95,0.15)', color: 'var(--accent-coral)', padding: '10px', borderRadius: '12px' }}>
                <Mail size={18} />
              </div>
              <div>
                <p style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Direct / Advisory</p>
                <p style={{ fontSize: '15px', fontWeight: 600, color: '#f8fafc' }}>enriquekalven@gmail.com</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                onClick={() => handleCopy('enriquekalven@gmail.com', 'personal')}
                style={{
                  background: copiedKey === 'personal' ? 'rgba(74,222,128,0.2)' : 'rgba(255,255,255,0.08)',
                  border: `1px solid ${copiedKey === 'personal' ? '#4ade80' : 'var(--border-subtle)'}`,
                  color: copiedKey === 'personal' ? '#4ade80' : 'white',
                  borderRadius: '10px',
                  padding: '8px 12px',
                  fontSize: '12px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'all 0.2s ease'
                }}
              >
                {copiedKey === 'personal' ? <><Check size={14} /> Copied</> : <><Copy size={14} /> Copy</>}
              </button>
              <a
                href="mailto:enriquekalven@gmail.com"
                style={{
                  background: 'var(--accent-coral)',
                  color: '#0b1120',
                  borderRadius: '10px',
                  padding: '8px 14px',
                  fontSize: '12px',
                  fontWeight: 800,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  textDecoration: 'none'
                }}
              >
                Send <ArrowRight size={14} />
              </a>
            </div>
          </div>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/enriquechan/"
            target="_blank"
            rel="noreferrer"
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '16px',
              padding: '16px 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              textDecoration: 'none',
              transition: 'border-color 0.2s ease'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ background: 'rgba(129,140,248,0.15)', color: '#818cf8', padding: '10px', borderRadius: '12px' }}>
                <Linkedin size={18} />
              </div>
              <div>
                <p style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>LinkedIn Professional</p>
                <p style={{ fontSize: '15px', fontWeight: 600, color: '#f8fafc' }}>linkedin.com/in/enriquechan</p>
              </div>
            </div>
            <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--accent-cyan)', display: 'flex', alignItems: 'center', gap: '4px' }}>
              Connect <ExternalLink size={14} />
            </span>
          </a>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '16px', borderTop: '1px solid var(--border-subtle)', fontSize: '12px', color: 'var(--text-muted)' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <MapPin size={14} style={{ color: 'var(--accent-cyan)' }} /> Seattle, WA
          </span>
          <span>Open for Keynotes & Advisory</span>
        </div>
      </motion.div>
    </div>
  );
}

function Navbar({ onEasterEgg, comicUnlocked, onShowComic, onContact }: { onEasterEgg: () => void, comicUnlocked: boolean, onShowComic: () => void, onContact: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [tapCount, setTapCount] = useState(0);
  const lastTap = useRef<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTap = () => {
    const now = Date.now();
    if (now - lastTap.current < 600) {
      const newCount = tapCount + 1;
      if (newCount === 3) {
        onEasterEgg();
        setTapCount(0);
      } else {
        setTapCount(newCount);
      }
    } else {
      setTapCount(1);
    }
    lastTap.current = now;
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div 
          className="logo"
          onClick={handleTap}
          style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}
        >
          <div style={{ width: '38px', height: '38px', borderRadius: '50%', overflow: 'hidden', border: '2px solid var(--accent-cyan)', boxShadow: '0 0 12px rgba(56,189,248,0.3)' }}>
            <img src="/profile_bubble.jpg" alt="Enrique Chan" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <span style={{ fontWeight: 800 }}>Enrique Chan</span>
        </div>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#work">Work</a>
          <a href="#speaking">Speaking</a>
          <a href="#articles">Writing</a>
          <Link to="/media" style={{ color: 'var(--accent-cyan)', fontWeight: 600 }}>Gallery</Link>
          {comicUnlocked && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={onShowComic}
              style={{
                background: 'rgba(255,126,95,0.15)',
                border: '1px solid var(--accent-coral)',
                color: 'var(--accent-coral)',
                fontWeight: 700,
                cursor: 'pointer',
                fontFamily: 'inherit',
                fontSize: '13px',
                padding: '4px 12px',
                borderRadius: '100px'
              }}
            >
              Comic 🕵️‍♂️
            </motion.button>
          )}
        </div>

        <button onClick={onContact} className="cta-button" style={{ border: 'none', cursor: 'pointer' }}>
          Get in Touch <ArrowRight size={16} />
        </button>
      </div>
    </nav>
  );
}

function WhatsNewBanner() {
  return (
    <a href="#speaking" className="whats-new-banner">
      <span className="banner-tag">NEWS</span>
      <span>Enrique completed Build with Gemini sessions in Seattle & Bellevue 🚀</span>
      <ArrowRight size={14} />
    </a>
  );
}

interface Comic {
  name: string;
  file: string;
}

interface Project {
  title: string;
  tag: string;
  description: string;
  image: string;
  link: string;
  details?: {
    highlights: string[];
    strategy: string;
    team: string;
    caseStudyImage?: string;
  };
}

function LandingPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showComic, setShowComic] = useState(false);
  const [activeComic, setActiveComic] = useState<Comic | null>(null);
  const [comicUnlocked, setComicUnlocked] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [projectsExpanded, setProjectsExpanded] = useState(false);
  const [speakingExpanded, setSpeakingExpanded] = useState(false);

  const displayedProjects = projectsExpanded ? RECENT_WORK : RECENT_WORK.slice(0, 4);
  const displayedSpeaking = speakingExpanded ? SPEAKING : SPEAKING.slice(0, 3);

  const triggerEasterEgg = useCallback(() => {
    if (comicUnlocked) return;

    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#38bdf8', '#ff7e5f', '#818cf8', '#ffffff']
    });
    setComicUnlocked(true);
  }, [comicUnlocked]);

  useEffect(() => {
    new Konami(() => {
      triggerEasterEgg();
    });
  }, [comicUnlocked, triggerEasterEgg]);

  return (
    <div className="app">
      <WhatsNewBanner />
      <Navbar
        onEasterEgg={triggerEasterEgg}
        comicUnlocked={comicUnlocked}
        onShowComic={() => setShowComic(true)}
        onContact={() => setShowContact(true)}
      />

      {/* Hero Section */}
      <section className="hero" id="about">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="role-badge">
            <Sparkles size={16} /> Staff AI Technical Deployment Lead | Delta @ Google Cloud
          </div>

          <h1 className="hero-title">
            Architecting the next era of <span className="highlight-gradient">Enterprise AI</span> & agentic workflows.
          </h1>

          <div className="hero-quote">
            "I listen, I take ownership to get things done, and I care about making people's lives easier."
          </div>

          <p className="hero-subtitle">
            Husband & father of 3 👨‍👩‍👧‍👦 • Real Estate Investor 🏠 • Based in Seattle, WA 📍.
            <br />
            With 15+ years of experience across <strong>Google, AWS, and Accenture</strong>, I specialize in taking high-stakes, forward-deployed engineering initiatives from zero to multi-billion dollar scale.
          </p>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
            <a href="#experience" className="cta-button">
              Explore Career Journey <ChevronRight size={16} />
            </a>
            <a href="#work" className="cta-button-outline">
              View Key Work
            </a>
            <a href="https://www.linkedin.com/in/enriquechan/" target="_blank" rel="noreferrer" className="cta-button-outline" style={{ padding: '10px 16px' }}>
              <Linkedin size={18} />
            </a>
            <a href="https://github.com/enriquekalven" target="_blank" rel="noreferrer" className="cta-button-outline" style={{ padding: '10px 16px' }}>
              <Github size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="profile-bubble">
            <img src="/hero_profile.jpg" alt="Enrique Chan" />
          </div>
        </motion.div>
      </section>

      {/* Social Proof Logos */}
      <section className="social-proof">
        <p className="social-proof-title">Impact Across Industry Giants & Global Platforms</p>
        <div className="logo-bar">
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" />
          <img src="https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-white.svg" alt="AWS" style={{ height: '28px', filter: 'brightness(0) invert(1)' }} />
          <img src="https://www.vectorlogo.zone/logos/disney/disney-ar21.svg" alt="Disney" style={{ height: '38px', filter: 'brightness(0) invert(1)' }} />
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Olympic_rings_without_rims.svg" alt="Olympics" style={{ height: '36px' }} />
          <img src="https://www.vectorlogo.zone/logos/kaggle/kaggle-icon.svg" alt="Kaggle" style={{ height: '32px' }} />
          <img src="https://www.vectorlogo.zone/logos/medium/medium-icon.svg" alt="Medium" style={{ height: '30px', filter: 'brightness(0) invert(1)' }} />
        </div>
      </section>

      {/* Impact Metrics Banner */}
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>
        <div className="metrics-grid">
          <motion.div className="metric-card" whileHover={{ y: -4 }}>
            <div className="metric-value">$2B+</div>
            <div className="metric-label">Multi-Year Enterprise Commit Captured</div>
          </motion.div>
          <motion.div className="metric-card" whileHover={{ y: -4 }}>
            <div className="metric-value">40M+</div>
            <div className="metric-label">Olympic Viewers Served (0.5% Error Rate)</div>
          </motion.div>
          <motion.div className="metric-card" whileHover={{ y: -4 }}>
            <div className="metric-value">1.5M+</div>
            <div className="metric-label">Whitepaper Readers ("Intro to Agents")</div>
          </motion.div>
          <motion.div className="metric-card" whileHover={{ y: -4 }}>
            <div className="metric-value">32K+</div>
            <div className="metric-label">Developers Engaged (Advent of Agents)</div>
          </motion.div>
          <motion.div className="metric-card" whileHover={{ y: -4 }}>
            <div className="metric-value">19x</div>
            <div className="metric-label">Multi-Cloud Certifications</div>
          </motion.div>
        </div>
      </div>

      {/* Core Expertise / Services */}
      <section id="services">
        <div className="section-header">
          <span className="section-tag">Strategic Value</span>
          <h2 className="section-title">Forward Operating & Agentic Strategy ⚡</h2>
        </div>
        <div className="cards-grid">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={idx}
              className="service-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="card-icon" style={{ background: service.color }}>
                <service.icon size={26} />
              </div>
              <h3 className="card-title">{service.title}</h3>
              <p className="card-description">{service.description}</p>
              <button
                onClick={() => setShowContact(true)}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                  fontWeight: 700,
                  color: 'var(--accent-cyan)',
                  marginTop: 'auto',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '14px',
                  fontFamily: 'inherit'
                }}
              >
                Collaborate <ArrowRight size={14} />
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Career Experience Timeline */}
      <section id="experience">
        <div className="section-header">
          <span className="section-tag">Professional Ledger</span>
          <h2 className="section-title">Career Experience 💎</h2>
        </div>

        <div className="timeline">
          {EXPERIENCE.map((exp, idx) => (
            <motion.div
              key={idx}
              className="timeline-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <div className="timeline-dot" />
              <div className="timeline-card">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-role">{exp.role}</h3>
                    <p className="timeline-company">{exp.company}</p>
                  </div>
                  <span className="timeline-period">{exp.period}</span>
                </div>

                <p style={{ fontSize: '15px', color: 'var(--text-secondary)', marginBottom: '16px', lineHeight: '1.6' }}>
                  {exp.description}
                </p>

                <ul className="bullet-list">
                  {exp.highlights.map((item, hIdx) => (
                    <li key={hIdx}>{item}</li>
                  ))}
                </ul>

                <div className="skill-tags">
                  {exp.skills.map((skill) => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Work Section */}
      <section id="work">
        <div className="section-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <span className="section-tag">Featured Delivery</span>
            <h2 className="section-title" style={{ margin: 0 }}>Marquee Projects & Innovations 🚀</h2>
          </div>
          <button
            onClick={() => setProjectsExpanded(!projectsExpanded)}
            className="cta-button-outline"
            style={{
              padding: '8px 18px',
              fontSize: '13px',
              fontWeight: 700,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              borderRadius: '100px',
              cursor: 'pointer'
            }}
          >
            {projectsExpanded ? (
              <>
                Collapse to Featured (4) <ChevronUp size={16} />
              </>
            ) : (
              <>
                View All Projects ({RECENT_WORK.length}) <ChevronDown size={16} />
              </>
            )}
          </button>
        </div>
        <div className="work-grid">
          <AnimatePresence initial={false}>
            {displayedProjects.map((work) => (
              <motion.div
                key={work.title}
                className="work-card"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                layout
                onClick={() => work.details && setSelectedProject(work as Project)}
                style={{ cursor: work.details ? 'pointer' : 'default' }}
              >
                <img src={work.image} alt={work.title} />
                <div className="work-info">
                  <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 800, color: 'var(--accent-cyan)', marginBottom: '8px' }}>
                    {work.tag}
                  </span>
                  <h3 className="card-title" style={{ fontSize: '24px', marginBottom: '8px' }}>{work.title}</h3>
                  <p className="card-description" style={{ marginBottom: '20px' }}>{work.description}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: 'auto' }}>
                    {work.details && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProject(work as Project);
                        }}
                        className="cta-button-outline"
                        style={{ padding: '6px 16px', fontSize: '13px' }}
                      >
                        Case Study <ArrowRight size={14} />
                      </button>
                    )}
                    {work.link !== '#' && (
                      <a
                        href={work.link}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 700, color: 'var(--accent-cyan)' }}
                      >
                        Visit <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '36px' }}>
          <button
            onClick={() => {
              if (projectsExpanded) {
                document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
              }
              setProjectsExpanded(!projectsExpanded);
            }}
            className="cta-button-outline"
            style={{
              padding: '12px 28px',
              fontSize: '14px',
              fontWeight: 700,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              borderRadius: '100px',
              cursor: 'pointer',
              background: 'rgba(255, 255, 255, 0.03)',
              borderColor: 'var(--border-subtle)',
              transition: 'all 0.2s ease'
            }}
          >
            {projectsExpanded ? (
              <>
                Collapse Projects <ChevronUp size={16} />
              </>
            ) : (
              <>
                Show More Projects ({RECENT_WORK.length - 4} More) <ChevronDown size={16} />
              </>
            )}
          </button>
        </div>
      </section>

      {/* Speaking Section */}
      <section id="speaking">
        <div className="section-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <span className="section-tag">Thought Leadership</span>
            <h2 className="section-title" style={{ margin: 0 }}>Keynotes & Speaking 🎤</h2>
          </div>
          <button
            onClick={() => setSpeakingExpanded(!speakingExpanded)}
            className="cta-button-outline"
            style={{
              padding: '8px 18px',
              fontSize: '13px',
              fontWeight: 700,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              borderRadius: '100px',
              cursor: 'pointer'
            }}
          >
            {speakingExpanded ? (
              <>
                Collapse to Recent (3) <ChevronUp size={16} />
              </>
            ) : (
              <>
                View All Keynotes ({SPEAKING.length}) <ChevronDown size={16} />
              </>
            )}
          </button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <AnimatePresence initial={false}>
            {displayedSpeaking.map((speech) => (
              <SpeakingCardItem key={speech.title + speech.time} speech={speech} />
            ))}
          </AnimatePresence>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '36px' }}>
          <button
            onClick={() => {
              if (speakingExpanded) {
                document.getElementById('speaking')?.scrollIntoView({ behavior: 'smooth' });
              }
              setSpeakingExpanded(!speakingExpanded);
            }}
            className="cta-button-outline"
            style={{
              padding: '12px 28px',
              fontSize: '14px',
              fontWeight: 700,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              borderRadius: '100px',
              cursor: 'pointer',
              background: 'rgba(255, 255, 255, 0.03)',
              borderColor: 'var(--border-subtle)',
              transition: 'all 0.2s ease'
            }}
          >
            {speakingExpanded ? (
              <>
                Collapse Keynotes <ChevronUp size={16} />
              </>
            ) : (
              <>
                Show All Keynotes & Past Talks ({SPEAKING.length - 3} More) <ChevronDown size={16} />
              </>
            )}
          </button>
        </div>
      </section>

      {/* Publications Section */}
      <section id="articles">
        <div className="section-header">
          <span className="section-tag">Articles & Research</span>
          <h2 className="section-title">Writing & Whitepapers ✍️</h2>
        </div>
        <div className="cards-grid">
          {PUBLICATIONS.map((pub, idx) => (
            <motion.a
              key={idx}
              href={pub.link}
              target="_blank"
              rel="noreferrer"
              className="service-card"
              style={{ padding: '0', overflow: 'hidden' }}
              whileHover={{ y: -6 }}
            >
              {pub.image && (
                <div style={{ width: '100%', height: '180px', overflow: 'hidden' }}>
                  <img src={pub.image} alt={pub.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              )}
              <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-cyan)', marginBottom: '12px' }}>
                  <BookOpen size={16} />
                  <span style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700 }}>{pub.platform}</span>
                </div>
                <h3 className="card-title" style={{ fontSize: '19px', lineHeight: '1.4' }}>{pub.title}</h3>
                <p className="card-description" style={{ fontSize: '14px', marginBottom: '20px' }}>{pub.description}</p>
                <span style={{ color: 'var(--accent-cyan)', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', marginTop: 'auto' }}>
                  Read Publication <ArrowRight size={14} />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Testimonials Marquee */}
      <div className="testimonial-section">
        <div className="section-header" style={{ marginBottom: '48px' }}>
          <span className="section-tag">Executive Endorsements</span>
          <h2 className="section-title">Kind Words from Google Leadership 💬</h2>
        </div>
        <div style={{ overflow: 'hidden' }}>
          <motion.div
            animate={{ x: [0, "-50%"] }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ display: 'flex', gap: '24px', width: 'max-content', padding: '0 24px' }}
          >
            {[...TESTIMONIALS, ...TESTIMONIALS].map((t, idx) => (
              <div key={idx} className="testimonial-card">
                <p style={{ fontSize: '15px', fontStyle: 'italic', marginBottom: '20px', color: '#e2e8f0', lineHeight: '1.7' }}>
                  "{t.quote}"
                </p>
                <div style={{ marginTop: 'auto' }}>
                  <p style={{ fontWeight: 800, fontSize: '15px', color: 'var(--accent-cyan)' }}>{t.author}</p>
                  <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{t.role}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Awards & Certifications */}
      <section id="awards">
        <div className="section-header">
          <span className="section-tag">Accreditation</span>
          <h2 className="section-title">Awards & Certifications 🏆</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '60px' }}>
          {AWARDS.map((award, idx) => (
            <motion.div
              key={idx}
              className="glass-card"
              style={{ padding: '28px' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                <Award size={28} style={{ color: 'var(--accent-cyan)' }} />
                <div style={{ display: 'flex', gap: '6px' }}>
                  {award.tags?.map(tag => (
                    <span key={tag} style={{ fontSize: '10px', fontWeight: 800, color: 'var(--accent-cyan)', textTransform: 'uppercase', letterSpacing: '1px' }}>{tag}</span>
                  ))}
                </div>
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '8px' }}>{award.title}</h3>
              <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '12px', fontWeight: 700 }}>{award.organization}</p>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>{award.detail}</p>
            </motion.div>
          ))}
        </div>

        <h3 style={{ fontSize: '26px', marginBottom: '28px', textAlign: 'center' }}>Professional Multi-Cloud Certifications</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {CERTIFICATIONS.map((group, idx) => (
            <motion.div key={idx} className="glass-card" style={{ padding: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <img src={group.logo} alt={group.provider} style={{ height: '24px' }} />
                <h4 style={{ fontSize: '17px', fontWeight: 800 }}>{group.provider}</h4>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {group.certs.map(cert => (
                  <span key={cert} style={{ fontSize: '12px', background: 'rgba(255,255,255,0.04)', padding: '5px 12px', borderRadius: '8px', border: '1px solid var(--border-subtle)', color: 'var(--text-secondary)' }}>
                    <CheckCircle2 size={12} style={{ display: 'inline', marginRight: '4px', color: 'var(--accent-cyan)' }} />
                    {cert}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Case Study Modal */}
      {selectedProject && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.85)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '24px'
          }}
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-subtle)',
              maxWidth: '760px',
              width: '100%',
              borderRadius: '24px',
              position: 'relative',
              maxHeight: '85dvh',
              overflowY: 'auto',
              padding: '36px'
            }}
          >
            <button
              onClick={() => setSelectedProject(null)}
              style={{ position: 'absolute', right: '20px', top: '20px', background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '50%', padding: '8px', cursor: 'pointer', color: 'white' }}
            >
              <X size={20} />
            </button>
            <span style={{ color: 'var(--accent-cyan)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '11px' }}>{selectedProject.tag}</span>
            <h2 style={{ fontSize: '32px', margin: '8px 0 20px', lineHeight: 1.2 }}>{selectedProject.title} Case Study</h2>

            {selectedProject.details?.caseStudyImage && (
              <div style={{ width: '100%', marginBottom: '24px', borderRadius: '16px', overflow: 'hidden' }}>
                <img src={selectedProject.details.caseStudyImage} alt={selectedProject.title} style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>
            )}

            {selectedProject.details && (
              <>
                <div style={{ marginBottom: '28px' }}>
                  <h4 style={{ fontSize: '17px', marginBottom: '14px', fontWeight: 800, color: 'var(--accent-cyan)' }}>Key Highlights</h4>
                  <div style={{ display: 'grid', gap: '12px' }}>
                    {selectedProject.details.highlights.map((h: string, i: number) => (
                      <div key={i} style={{ display: 'flex', gap: '10px', fontSize: '15px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                        <div style={{ width: '6px', height: '6px', background: 'var(--accent-cyan)', borderRadius: '50%', marginTop: '8px', flexShrink: 0 }} />
                        <p>{h}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ marginBottom: '28px' }}>
                  <h4 style={{ fontSize: '17px', marginBottom: '10px', fontWeight: 800, color: 'var(--accent-cyan)' }}>Strategic Win</h4>
                  <p style={{ fontSize: '15px', lineHeight: '1.6', color: 'var(--text-secondary)' }}>{selectedProject.details.strategy}</p>
                </div>

                <div>
                  <h4 style={{ fontSize: '17px', marginBottom: '8px', fontWeight: 800, color: 'var(--accent-cyan)' }}>Delivery Team</h4>
                  <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>{selectedProject.details.team}</p>
                </div>
              </>
            )}
          </motion.div>
        </div>
      )}

      {/* Easter Egg Modal */}
      {showComic && (
        <div
          style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(0,0,0,0.92)', display: 'flex', alignItems: 'center',
            justifyContent: 'center', zIndex: 1100, padding: '24px'
          }}
          onClick={() => setShowComic(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{
              maxWidth: activeComic ? '950px' : '750px', width: '100%', position: 'relative',
              background: 'var(--bg-secondary)', border: '1px solid var(--border-subtle)',
              borderRadius: '24px', overflow: 'hidden', padding: '32px'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => {
                setShowComic(false);
                setActiveComic(null);
              }}
              style={{ position: 'absolute', right: '20px', top: '20px', background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '50%', padding: '8px', cursor: 'pointer', color: 'white' }}
            >
              <X size={20} />
            </button>

            {activeComic ? (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <button
                    onClick={() => setActiveComic(null)}
                    style={{
                      background: 'rgba(255,255,255,0.08)',
                      border: '1px solid var(--border-subtle)',
                      color: 'white',
                      padding: '8px 16px',
                      borderRadius: '100px',
                      cursor: 'pointer',
                      fontSize: '13px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    <ArrowLeft size={16} /> Back to Secret Library
                  </button>
                  <h3 style={{ fontSize: '18px', fontWeight: 800, margin: 0 }}>{activeComic.name}</h3>
                </div>
                <div style={{ width: '100%', height: '65dvh', background: 'white', borderRadius: '12px', overflow: 'hidden' }}>
                  <iframe src={`/${activeComic.file}#toolbar=0`} style={{ width: '100%', height: '100%', border: 'none' }} title={activeComic.name} />
                </div>
              </div>
            ) : (
              <>
                <h3 style={{ fontSize: '26px', fontWeight: 800, textAlign: 'center', marginBottom: '8px' }}>
                  UNLOCKED: THE AGENTIC ADVENTURES 📂
                </h3>
                <p style={{ opacity: 0.8, fontSize: '14px', textAlign: 'center', marginBottom: '28px' }}>
                  Architect's Classified Series. Select an edition to read.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '12px' }}>
                  {[
                    { name: 'Business Leaders Edition', file: 'agent_adventures_business_leaders.pdf' },
                    { name: 'Issue #1: Origin', file: 'agent_adventures_part_1.pdf' },
                    { name: 'Issue #2: Core', file: 'agent_adventures_part_2.pdf' },
                    { name: 'Issue #3: Evolution', file: 'agent_adventures_part_3.pdf' },
                    { name: 'Issue #4: Horizon', file: 'agent_adventures_part_4.pdf' }
                  ].map((doc, i) => (
                    <div
                      key={i}
                      onClick={() => setActiveComic(doc)}
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid var(--border-subtle)',
                        padding: '16px',
                        borderRadius: '16px',
                        cursor: 'pointer',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '10px',
                        textAlign: 'center'
                      }}
                    >
                      <BookOpen size={24} style={{ color: 'var(--accent-cyan)' }} />
                      <span style={{ fontSize: '13px', fontWeight: 600 }}>{doc.name}</span>
                    </div>
                  ))}
                </div>
              </>
            )}
          </motion.div>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="footer-logo">Enrique Chan</div>
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#work">Work</a>
          <a href="#speaking">Speaking</a>
          <a href="#articles">Writing</a>
          <Link to="/media">Gallery</Link>
        </div>
        <div className="footer-socials">
          <a href="https://github.com/enriquekalven" target="_blank" rel="noreferrer" className="social-icon"><Github size={20} /></a>
          <a href="https://www.linkedin.com/in/enriquechan/" target="_blank" rel="noreferrer" className="social-icon"><Linkedin size={20} /></a>
          <button onClick={() => setShowContact(true)} className="social-icon" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', display: 'flex', alignItems: 'center', justifyContent: 'center' }} title="Contact Enrique"><Mail size={20} /></button>
        </div>
        <p style={{ marginTop: '48px', fontSize: '13px', color: 'var(--text-muted)' }}>
          © {new Date().getFullYear()} ENRIQUE CHAN • STAFF AI TECHNICAL DEPLOYMENT LEAD • DELTA
        </p>
      </footer>

      {/* Contact Modal */}
      {showContact && <ContactModal onClose={() => setShowContact(false)} />}

      {/* Easter Egg Hint */}
      <motion.div
        animate={{ rotate: [0, -10, 10, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 4 }}
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          fontSize: '28px',
          cursor: 'pointer',
          zIndex: 100,
          filter: 'drop-shadow(0 0 12px rgba(56,189,248,0.4))'
        }}
        onClick={() => {
          setShowHint(true);
          setTimeout(() => setShowHint(false), 3000);
        }}
      >
        🎁
        {showHint && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'absolute',
              bottom: '100%',
              right: '0',
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-primary)',
              padding: '10px 16px',
              borderRadius: '12px',
              fontSize: '13px',
              fontWeight: 600,
              boxShadow: '0 8px 30px rgba(0,0,0,0.5)',
              whiteSpace: 'nowrap',
              marginBottom: '12px'
            }}
          >
            Looking for a secret? Try Konami code or triple-tap the logo! 🤫
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/media" element={<MediaPage />} />
      </Routes>
    </Router>
  );
}

export default App;
