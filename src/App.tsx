import { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './App.css';
import {
  ArrowRight,
  Linkedin,
  Youtube,
  Twitter,
  ChevronRight,
  Brain,
  ShieldCheck,
  MessageSquare,
  Mail,
  ExternalLink,
  Github,
  Award,
  BookOpen,
  Calendar,
  MapPin,
  X,
  ArrowLeft
} from 'lucide-react';
import MediaPage from './MediaPage';
import confetti from 'canvas-confetti';
// @ts-ignore
import Konami from 'konami-code-js';

/* --- Data --- */
const EXPERIENCE = [
  {
    company: 'Google Cloud 🚀',
    logo: 'https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg',
    role: 'Outbound Product Manager, Cloud AI',
    period: 'Nov 2025 — Present',
    description: 'Leading vision and strategy for the AI Agents Enablement Center of Excellence. Co-authored global "Intro to Agents" whitepaper. Drove adoption of "Build Agentic Workflows" offering across the ecosystem.',
    skills: ['Product Strategy', 'Agent Governance', 'Ecosystem Enablement']
  },
  {
    company: 'Google Cloud 🧪',
    logo: 'https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg',
    role: 'Senior AI Consultant, PSO',
    period: 'Jun 2023 — Nov 2025',
    description: 'Lead Consultant for NBC Olympic Concierge (served 40M viewers, 90M queries). Architected WBD Caption AI solution using RLHF and SFT, securing $960K Phase 3 expansion.',
    skills: ['Vertex AI', 'RLHF / SFT', 'Provisioned Throughput', 'Enterprise MLOps']
  },
  {
    company: 'Google Cloud 📊',
    logo: 'https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg',
    role: 'Senior Data Consultant, PSO',
    period: 'May 2021 — Jun 2023',
    description: 'Quarterbacked technical delivery for marquee analytics migrations (Boeing, WBD). Developed core assets for EDW modernization and BigQuery optimization at scale.',
    skills: ['BigQuery', 'Data Architecture', 'Migration Strategy']
  },
  {
    company: 'Amazon Web Services (AWS) ☁️',
    logo: 'https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg',
    role: 'Senior Cloud Architect',
    period: 'Prior to Google',
    description: 'Designed and deployed large-scale cloud architectures for enterprise clients, focusing on scalability and reliability.',
    skills: ['AWS Architecture', 'Cloud Infrastructure', 'Enterprise Scaling']
  },
  {
    company: 'Accenture 💼',
    logo: 'https://www.vectorlogo.zone/logos/accenture/accenture-icon.svg',
    role: 'Lead, Cloud Strategy & Data Analytics',
    period: '10-Year Tenure',
    description: 'Led Cloud Strategy, Data Analytics Modernization, SRE, and DevOps engagements across multiple industry sectors.',
    skills: ['Cloud Strategy', 'Data Modernization', 'SRE / DevOps', 'Leadership']
  }
];

const SERVICES = [
  {
    title: 'Agentic Transformations 🤖',
    description: 'Helping enterprises shift from traditional LLM chat to autonomous agentic workflows that drive measurable ARR.',
    icon: Brain,
    color: '#ff7e5f'
  },
  {
    title: 'Enterprise AI Governance 🛡️',
    description: 'Architecting robust frameworks for Agent-to-Agent (A2A) orchestration, brand safety, and provisioned throughput.',
    icon: ShieldCheck,
    color: '#a8c0ff'
  },
  {
    title: 'Technical Evangelism 🎤',
    description: 'Speaking at Google Cloud Next and NorthAm Tech Immersion on productionizing GenAI for global audiences.',
    icon: MessageSquare,
    color: '#d4fc79'
  }
];

const RECENT_WORK = [
  {
    title: 'NBC Olympic Concierge 🏅',
    tag: 'Marquee / High Scale',
    description: 'Served 40M viewers with sub-second latency via Vertex AI Provisioned Throughput.',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1200&auto=format&fit=crop',
    link: '#',
    details: {
      highlights: [
        "Served 40M Viewers: Scaled global AI concierge to handle massive traffic during Paris 2024 Olympic Games.",
        "90M+ Queries Handled: Achieved sub-second latency for natural language schedules and event discovery.",
        "Vertex AI Provisioned Throughput: Orchestrated multi-region deployment to ensure 99.99% availability.",
        "Hyper-Personalized Discovery: Enabled fans to find events by athlete, country, and specific sporting moments."
      ],
      strategy: "The goal was to solve the discovery problem for 7,000+ hours of live content. We implemented OLI, an AI-powered logic system that synthesis'd real-time data into a conversational UI. By using Gemini Pro on Vertex AI, we delivered production-grade reliability at a scale never before seen in sports broadcasting.",
      team: "Abraham Gomez, Enrique Chan, Huge Inc, Google PSO",
      caseStudyImage: "/nbcu_oli_case_study.png"
    }
  },
  {
    title: 'Disney+ Global Scaling 🏰',
    tag: 'Strategic Product',
    description: 'Scaling the digital future of entertainment through the worldwide rollout of Disney+.',
    image: 'https://images.unsplash.com/photo-1594908900066-3f47337549d8?q=80&w=1200&auto=format&fit=crop',
    link: 'https://www.disneyplus.com/'
  },
  {
    title: 'MyMagic+ & MagicBands ✨',
    tag: 'UX Innovation / IoT',
    description: 'Launching transformational guest tech (FastPass+, MagicBands) from WDW to Disneyland.',
    image: 'https://images.unsplash.com/photo-1505833115364-e28c42c41f97?q=80&w=1200&auto=format&fit=crop',
    link: '#'
  },
  {
    title: 'WBD Caption AI 🎬',
    tag: 'Advanced MLOps',
    description: 'Production-grade STT/Translation pipelines using human feedback (RLHF) and fine-tuning.',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1200&auto=format&fit=crop',
    link: '#'
  },
  {
    title: 'Wayfair Agentspace 🏠',
    tag: 'Connectivity',
    description: 'Implementation across 10+ enterprise connectors (Workday, ServiceNow, GitHub).',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200&auto=format&fit=crop',
    link: '#'
  },
  {
    title: 'Advent of Agents 🎄',
    tag: 'Community / SOP',
    description: '1.05M social impressions. 165k+ visits. A record-breaking holiday challenge for autonomous agents.',
    image: '/advent_of_agents.png',
    link: 'https://adventofagents.com/',
    details: {
      highlights: [
        "Dominated Share of Voice: Generated 1.05 Million social impressions, breaking out of the \"GCP bubble\" to reach a broader developer audience.",
        "High-Intent Engagement: Driven by daily \"Katas\", the hub hosted 165k+ visits with a 22% daily return rate and 1.5M events.",
        "Record Adoption Velocity: Onboarded 600+ new active customers using ADK in one month (Samsung, Home Depot, VW, Atlassian).",
        "Open Source Standard: Agent Starter Pack repo surged +62% (5,200 stars), trending in Top 5 global repos on GitHub."
      ],
      strategy: "We validated that a \"Code-First\" content strategy is highly effective. By shipping daily \"Katas\" (deployable skills) instead of static content, we solved the friction between learning and building. As Data Scientist Kriti C. Parikh noted, it provided \"a clear path from experimenting locally to thinking about production-ready agents\".",
      team: "Abraham Gomez, Alan Blount, Elia Secchi, Enrique Chan, Shubham Saboo"
    }
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
    organization: "Google",
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
    description: 'A comprehensive guide for leadership on the architecture and strategy behind production-grade AI agents.',
    link: 'https://www.kaggle.com/whitepaper-introduction-to-agents',
  },
  {
    title: 'From OpenAI to Gemini Enterprise 🔄',
    platform: 'Medium',
    image: '/gemini_migration.png',
    description: 'Automating agent migration with Antigravity for seamless ecosystem transitions.',
    link: 'https://medium.com/@enriq/from-openai-to-gemini-enterprise-automating-agent-migration-with-antigravity-76b41c5d8364',
  },
  {
    title: 'Register to Gemini A2A in 3 Commands ⚡',
    platform: 'Medium',
    image: '/gemini_3_commands.png',
    description: 'A technical guide on setting up Agent-to-Agent communication flows.',
    link: 'https://medium.com/@enriq/register-to-gemini-enterprise-a2a-with-3-commands-688af024d9bb',
  }
];

const TESTIMONIALS = [
  {
    quote: "Enrique was central to influencing the customer on Google's ability to deliver on their solution… he maintained leadership of Google's solution with deep dives, workshops, and direct executive engagements to continue to build confidence on our architecture.",
    author: "Amar Raol",
    role: "Director Global Strategic Intiatives, Google"
  },
  {
    quote: "Amazing work for GCC at Next'24! Your expertise and impactful engagement were instrumental in the GenAI workshop's success. We were so impressed by your ability to go above and beyond to ensure a valuable learning experience.",
    author: "Lee Moore",
    role: "VP Google Cloud Consulting"
  },
  {
    quote: "Thank you for your work and commitment to leading with customer empathy. Your team's story is a great example of how we work together to best support our customers and support each other. I am thrilled to recognize you as a Customer Empathy Award winner.",
    author: "Thomas Kurian",
    role: "CEO Google Cloud"
  },
  {
    quote: "GTM Cloud Excellence Connecting Teams Award: Congratulations on being awarded a GTM Cloud Regional Award. On behalf of Michael Clark and the Leadership Team we thank you for your dedication and impactful work!",
    author: "Michael Clark",
    role: "President Google Cloud NorthAm"
  },
  {
    quote: "By preventing pilots from derailing due to technical hurdles, he secured the future of the Agentspace engagement and paved the way for broader adoption within Wayfair.",
    author: "Wayfair CAL",
    role: "Marquee Engagement Lead"
  },
  {
    quote: "Enrique, thank you so much for developing and delivering two insightful customer case study for the Gen AI Production Fuel Up Friday session and the Agentic Workflow Real World Wednesday session Your presentation helped ramp up 328 technically-advanced, customer-facing Googlers on these important topics. This impactful training will now reach an even wider audience as an on-demand learning path for Cloud Googlers.",
    author: "SME Academy Team",
    role: "Cloud Enablement & Training, Google"
  },
  {
    quote: "Thank you for your willingness to review Day 1 whitepaper for Kaggle 5days of AI agents. Your insights were helpful in guiding us to a great whitepaper",
    author: "Brian Delahunty",
    role: "VP Agents platform"
  }
];

const SPEAKING = [
  {
    title: "Exploring and transferring family language in a world of AI 👨‍👩‍👧‍👦",
    event: "MIXED Googlers — Parenting Committee",
    session: "Speaker Panel",
    time: "November 2025",
    location: "Virtual Engagement",
    image: "/mixed_googlers_ai.png",
    link: "https://go/mgp-nov-event",
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
    title: "Unleashing the Power of Data and AI ⚡",
    event: "NorthAm Tech Immersion",
    session: "Curriculum Authoring — 900+ Registrations",
    time: "February 2025",
    location: "Los Angeles, CA",
    image: "/tech_immersion_wide.png",
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
    title: "GenAI Live Labs: Hands-on with Vertex AI 🎓",
    event: "Internal Enablement",
    session: "Technical Workshop Series",
    time: "August 2023",
    location: "Los Angeles, CA",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop",
    link: "#",
    status: "COMPLETED"
  }
];

function Navbar({ onEasterEgg, comicUnlocked, onShowComic }: { onEasterEgg: () => void, comicUnlocked: boolean, onShowComic: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [tapCount, setTapCount] = useState(0);
  const lastTap = useRef<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTap = (_e: React.MouseEvent) => {
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
          <div style={{ width: '40px', height: '40px', borderRadius: '50%', overflow: 'hidden', border: '2px solid white', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
            <img src="/profile_bubble.jpg" alt="Enrique Chan" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          Enrique Chan
        </div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#speaking">Speaking</a>
          <a href="#work">Projects</a>
          <a href="#experience">Career</a>
          <a href="#articles">Writing</a>
          <Link to="/media">Gallery</Link>
          {comicUnlocked && (
            <motion.button
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={onShowComic}
              className="nav-special-link"
              style={{ 
                background: 'none',
                border: 'none',
                color: 'var(--accent-coral)',
                fontWeight: 700,
                cursor: 'pointer',
                fontFamily: 'inherit',
                fontSize: 'inherit',
                padding: '4px 8px'
              }}
            >
              Comic 🕵️‍♂️
            </motion.button>
          )}
        </div>
        <a href="mailto:enriquekalven@gmail.com" className="cta-button" style={{ padding: '12px 24px', fontSize: '14px' }}>
          Work with Me
        </a>
      </div>
    </nav>
  );
}

function LandingPage() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [showComic, setShowComic] = useState(false);
  const [activeComic, setActiveComic] = useState<any>(null);
  const [comicUnlocked, setComicUnlocked] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const triggerEasterEgg = () => {
    if (comicUnlocked) return; // Already unlocked

    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ff4d4d', '#ffffff', '#000000', '#00a3ff']
    });
    setComicUnlocked(true);
    // Alert or subtle visual feedback that something happened
    console.log("CLASSIFIED ACCESS GRANTED: Check the navbar.");
  };

  useEffect(() => {
    new Konami(() => {
      triggerEasterEgg();
    });
  }, []);

  return (
    <div className="app">
      <Navbar
        onEasterEgg={triggerEasterEgg}
        comicUnlocked={comicUnlocked}
        onShowComic={() => setShowComic(true)}
      />

      {/* Hero Section */}
      <section className="hero" id="about">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="section-tag" style={{ textAlign: 'left', marginBottom: '8px' }}>⚡ Outbound Product Manager, Cloud AI @ Google</div>
          <div style={{ display: 'flex', gap: '16px', marginBottom: '24px', fontSize: '14px', fontWeight: 600 }}>
            <a href="https://cloud.google.com/gemini" target="_blank" style={{ color: 'var(--accent-coral)', textDecoration: 'none' }}>Gemini Enterprise ↗</a>
            <span style={{ opacity: 0.3 }}>|</span>
            <a href="https://github.com/GoogleCloudPlatform/agent-development-kit" target="_blank" style={{ color: 'var(--accent-coral)', textDecoration: 'none' }}>ADK ↗</a>
            <span style={{ opacity: 0.3 }}>|</span>
            <a href="https://cloud.google.com/vertex-ai/docs/agents/overview" target="_blank" style={{ color: 'var(--accent-coral)', textDecoration: 'none' }}>Agent Engine ↗</a>
          </div>
          <h1 className="hero-title">
            I help enterprises build <span className="highlight-underline">production-grade</span> AI systems.
          </h1>
          <p className="hero-subtitle" style={{ marginBottom: '8px' }}>
            Husband, father of 3 👨‍👩‍👧‍👦, and Real Estate Investor 🏠 based in Seattle, WA 📍.
          </p>
          <p className="hero-subtitle" style={{ marginTop: 0 }}>
            With 15+ years of experience across Google, AWS, and Accenture, I am passionate about scaling transformational technologies—from Disney's MagicBands and Disney+ worldwide to the future of agentic AI.
          </p>
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <motion.a
              href="#work"
              className="cta-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              See Selected Work <ChevronRight size={18} />
            </motion.a>
            <a href="https://www.linkedin.com/in/enriquechan/" target="_blank" className="social-link" style={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px', opacity: 0.8 }}>
              <Linkedin size={20} /> LinkedIn
            </a>
            <a href="https://github.com/enriquekalven" target="_blank" className="social-link" style={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px', opacity: 0.8 }}>
              <Github size={20} /> GitHub
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="profile-bubble">
            <img
              src="/hero_profile.jpg"
              alt="Enrique Chan"
            />
          </div>
        </motion.div>
      </section>

      {/* Social Proof */}
      <section className="social-proof">
        <p className="social-proof-title">Trusted by / Featured in</p>
        <div className="logo-bar">
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" />
          <img src="https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-white.svg" alt="AWS" style={{ height: '30px', filter: 'brightness(0)' }} />
          <img src="https://www.vectorlogo.zone/logos/disney/disney-ar21.svg" alt="Disney" style={{ height: '40px' }} />
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Olympic_rings_without_rims.svg" alt="Olympics" style={{ height: '45px' }} />
          <img src="https://www.vectorlogo.zone/logos/kaggle/kaggle-icon.svg" alt="Kaggle" style={{ height: '35px' }} />
          <img src="https://www.vectorlogo.zone/logos/medium/medium-icon.svg" alt="Medium" style={{ height: '35px' }} />
        </div>
      </section>

      {/* Speaking Section */}
      <section id="speaking" style={{ background: '#f8f9fa', padding: '100px 0' }}>
        <div className="section-header">
          <span className="section-tag">Keynotes & Speaking</span>
          <h2 className="section-title">Sharing Insights at Scale 🎤</h2>
          <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '18px', opacity: 0.7 }}>Featured sessions and keynotes on the future of Agentic AI.</p>
        </div>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'flex', flexDirection: 'column', gap: '48px' }}>
          {SPEAKING.map((speech, idx) => (
            <motion.div
              key={idx}
              className="speaking-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div style={{ flex: '1.2', padding: '60px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                  <Award size={20} style={{ color: 'var(--accent-coral)' }} />
                  <span style={{ fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '12px', color: '#666' }}>Featured Speaker</span>
                </div>
                <h3 style={{ fontSize: '36px', marginBottom: '32px', lineHeight: '1.2' }}>{speech.title}</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px', marginBottom: '48px' }}>
                  <div>
                    <p style={{ fontSize: '12px', fontWeight: 700, color: '#999', textTransform: 'uppercase', marginBottom: '8px' }}>Event</p>
                    <p style={{ fontSize: '18px', fontWeight: 600 }}>{speech.event}</p>
                  </div>
                  <div>
                    <p style={{ fontSize: '12px', fontWeight: 700, color: '#999', textTransform: 'uppercase', marginBottom: '8px' }}>Session</p>
                    <p style={{ fontSize: '18px', fontWeight: 600 }}>{speech.session}</p>
                  </div>
                  <div>
                    <p style={{ fontSize: '12px', fontWeight: 700, color: '#999', textTransform: 'uppercase', marginBottom: '8px' }}>Date & Time</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Calendar size={16} />
                      <p style={{ fontSize: '16px' }}>{speech.time}</p>
                    </div>
                  </div>
                  <div>
                    <p style={{ fontSize: '12px', fontWeight: 700, color: '#999', textTransform: 'uppercase', marginBottom: '8px' }}>Location</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <MapPin size={16} />
                      <p style={{ fontSize: '16px' }}>{speech.location}</p>
                    </div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-coral)', fontWeight: 700, fontSize: '14px' }}>
                  <ExternalLink size={16} /> SESSION {speech.status || 'UPCOMING'}
                </div>
              </div>
              <div style={{ flex: '0.8', position: 'relative', minHeight: '400px' }}>
                <img src={speech.image} alt={speech.title} style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services">
        <div className="section-header">
          <span className="section-tag">Value Proposition</span>
          <h2 className="section-title">Enabling the Agentic Shift 🤖</h2>
        </div>
        <div className="cards-grid">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={idx}
              className="service-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="card-icon" style={{ background: service.color }}>
                <service.icon size={30} />
              </div>
              <h3 className="card-title">{service.title}</h3>
              <p className="card-description">{service.description}</p>
              <a href="mailto:enriquekalven@gmail.com" style={{ fontWeight: 700, color: 'var(--accent-coral)', marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px' }}>
                LEARN MORE <ArrowRight size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Work Section */}
      <section id="work">
        <div className="section-header">
          <span className="section-tag">Marquee Projects</span>
          <h2 className="section-title">Impact at Scale 🚀</h2>
        </div>
        <div className="work-grid">
          {RECENT_WORK.map((work, idx) => (
            <motion.div
              key={idx}
              className="work-card"
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => work.details && setSelectedProject(work)}
              style={{ cursor: work.details ? 'pointer' : 'default' }}
            >
              <img src={work.image} alt={work.title} />
              <div className="work-info">
                <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '2.5px', fontWeight: 700, opacity: 0.9 }}>{work.tag}</span>
                <h3 className="work-title" style={{ fontSize: '30px' }}>{work.title}</h3>
                <p style={{ opacity: 0.8, fontSize: '14px', marginBottom: '16px' }}>{work.description}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <button
                    onClick={(e) => {
                      if (work.details) {
                        e.stopPropagation();
                        setSelectedProject(work);
                      }
                    }}
                    style={{ background: 'none', border: 'none', color: 'inherit', padding: 0, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: 600 }}
                  >
                    Case Study <ArrowRight size={14} />
                  </button>
                  {work.link !== '#' && (
                    <a
                      href={work.link}
                      target="_blank"
                      onClick={(e) => e.stopPropagation()}
                      style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: 600, color: 'var(--accent-coral)' }}
                    >
                      Visit Site <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ background: '#121212', color: 'white', borderRadius: '60px', margin: '40px 24px' }}>
        <div className="section-header" style={{ marginBottom: '60px' }}>
          <span className="section-tag" style={{ color: 'var(--accent-coral)' }}>Social Capital</span>
          <h2 className="section-title" style={{ color: 'white' }}>Kind Words from Google Leadership 💬</h2>
        </div>
        <div className="marquee-container" style={{ overflow: 'hidden', padding: '40px 0 80px' }}>
          <motion.div
            className="marquee-track"
            animate={{ x: [0, "-50%"] }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ display: 'flex', gap: '30px', width: 'max-content' }}
          >
            {[...TESTIMONIALS, ...TESTIMONIALS].map((t, idx) => (
              <div
                key={idx}
                className="testimonial-card"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: 'white',
                  padding: '40px',
                  borderRadius: '32px',
                  width: '400px',
                  flexShrink: 0,
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <p style={{ fontSize: '18px', fontStyle: 'italic', marginBottom: '24px', opacity: 0.9, lineHeight: '1.7' }}>"{t.quote}"</p>
                <div style={{ marginTop: 'auto' }}>
                  <p style={{ fontWeight: 800, fontSize: '16px' }}>{t.author}</p>
                  <p style={{ fontSize: '13px', opacity: 0.6 }}>{t.role}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience">
        <div className="section-header">
          <span className="section-tag">Career Journey</span>
          <h2 className="section-title">The "invisible force" quarterbacking AI delivery 💎</h2>
        </div>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          {EXPERIENCE.map((exp, idx) => (
            <motion.div
              key={idx}
              className="experience-item"
              style={{ paddingBottom: '60px', borderLeft: '1px solid #eee', paddingLeft: '40px', position: 'relative' }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div style={{ position: 'absolute', left: '-6px', top: '0', width: '12px', height: '12px', background: 'var(--accent-coral)', borderRadius: '50%' }}></div>
              <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                {exp.logo && <img src={exp.logo} alt={exp.company} style={{ width: '40px', height: '40px', objectFit: 'contain', marginTop: '4px' }} />}
                <div style={{ flex: 1 }}>
                  <span style={{ fontSize: '13px', fontWeight: 700, color: '#999' }}>{exp.period}</span>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '8px 0 16px' }}>
                    <h3 style={{ fontSize: '26px' }}>{exp.role}</h3>
                    <p style={{ fontWeight: 800, fontSize: '18px', color: 'var(--accent-coral)' }}>{exp.company}</p>
                  </div>
                  <p className="card-description" style={{ fontSize: '18px', maxWidth: '800px' }}>{exp.description}</p>
                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '24px' }}>
                    {exp.skills.map(skill => (
                      <span key={skill} style={{ fontSize: '12px', background: 'white', border: '1px solid #ddd', padding: '6px 16px', borderRadius: '100px', fontWeight: 600 }}>{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Publications Section */}
      <section id="articles" style={{ background: '#fdfaf7' }}>
        <div className="section-header">
          <span className="section-tag">Publications & Ledger</span>
          <h2 className="section-title">The Architect's Ledger ✍️</h2>
        </div>
        <div className="cards-grid">
          {PUBLICATIONS.map((pub, idx) => (
            <motion.a
              key={idx}
              href={pub.link}
              target="_blank"
              className="service-card"
              style={{ textDecoration: 'none', padding: pub.image ? '0' : '50px', overflow: 'hidden' }}
              whileHover={{ y: -8 }}
            >
              {pub.image && (
                <div style={{ width: '100%', height: '200px', overflow: 'hidden', marginBottom: '32px' }}>
                  <img src={pub.image} alt={pub.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              )}
              <div style={{ padding: pub.image ? '0 40px 40px' : '0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#888', marginBottom: '16px' }}>
                  <BookOpen size={16} />
                  <span style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700 }}>{pub.platform}</span>
                </div>
                <h3 className="card-title" style={{ fontSize: '22px', lineHeight: '1.4' }}>{pub.title}</h3>
                <p className="card-description" style={{ fontSize: '15px' }}>{pub.description}</p>
                <span style={{ color: 'var(--accent-coral)', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px' }}>
                  READ MORE <ArrowRight size={14} />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" style={{ padding: '100px 0', background: 'white' }}>
        <div className="section-header">
          <span className="section-tag">Recognition & Impact</span>
          <h2 className="section-title">Awards & Honors 🏆</h2>
        </div>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          {/* Featured Award (The one with the image) */}
          {(() => {
            const featured = AWARDS.find(a => a.image);
            if (!featured) return null;
            return (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '60px', alignItems: 'center', marginBottom: '80px' }}>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  style={{ borderRadius: '32px', overflow: 'hidden', boxShadow: '0 40px 80px rgba(0,0,0,0.1)' }}
                >
                  <img src={featured.image} alt={featured.title} style={{ width: '100%', height: 'auto', display: 'block' }} />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--accent-coral)', fontWeight: 700, marginBottom: '16px' }}>
                    <Award size={24} /> {featured.organization}
                  </div>
                  <h3 style={{ fontSize: '42px', marginBottom: '24px', letterSpacing: '-1px' }}>{featured.title}</h3>
                  <p style={{ fontSize: '20px', lineHeight: '1.6', opacity: 0.8, marginBottom: '32px' }}>{featured.detail}</p>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    {featured.tags?.map(tag => (
                      <span key={tag} style={{ padding: '8px 20px', borderRadius: '100px', background: '#f8f9fa', fontSize: '14px', fontWeight: 600 }}>{tag}</span>
                    ))}
                  </div>
                </motion.div>
              </div>
            );
          })()}

          <div className="cards-grid">
            {AWARDS.filter(a => !a.image).map((award, idx) => (
              <motion.div
                key={idx}
                className="service-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                style={{ background: '#fdfaf7', border: 'none' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#888', marginBottom: '16px' }}>
                  <Award size={18} />
                  <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>{award.organization}</span>
                </div>
                <h3 className="card-title" style={{ fontSize: '24px' }}>{award.title}</h3>
                <p className="card-description" style={{ fontSize: '16px' }}>{award.detail}</p>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: 'auto' }}>
                  {award.tags?.map(tag => (
                    <span key={tag} style={{ fontSize: '11px', background: 'white', padding: '4px 12px', borderRadius: '100px', border: '1px solid #eee', fontWeight: 600 }}>{tag}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div style={{ marginTop: '100px' }}>
            <h3 style={{ fontSize: '32px', marginBottom: '40px', textAlign: 'center' }}>Professional Certifications</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
              {CERTIFICATIONS.map((group, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  style={{ background: '#f8f9fa', padding: '40px', borderRadius: '24px' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                    <img src={group.logo} alt={group.provider} style={{ height: '24px' }} />
                    <h4 style={{ fontSize: '18px', fontWeight: 800 }}>{group.provider}</h4>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                    {group.certs.map(cert => (
                      <span key={cert} style={{ fontSize: '13px', background: 'white', padding: '6px 14px', borderRadius: '8px', border: '1px solid #eee', fontWeight: 500 }}>
                        {cert}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section Removed */}

      {/* Project Modal */}
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
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="modal-content responsive-modal"
            onClick={(e) => e.stopPropagation()}
            style={{
              background: 'white',
              maxWidth: '800px',
              width: '95%',
              borderRadius: '24px',
              position: 'relative',
              maxHeight: '90dvh',
              overflowY: 'auto',
              boxShadow: '0 30px 60px rgba(0,0,0,0.2)'
            }}
          >
            <button
              onClick={() => setSelectedProject(null)}
              style={{ position: 'absolute', right: '20px', top: '20px', background: '#f8f9fa', border: 'none', borderRadius: '50%', padding: '8px', cursor: 'pointer', zIndex: 10 }}
            >
              <X size={20} />
            </button>
            <div className="modal-inner-padding" style={{ padding: '40px' }}>
              <span style={{ color: 'var(--accent-coral)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '12px' }}>{selectedProject.tag}</span>
              <h2 className="modal-title" style={{ fontSize: '36px', margin: '12px 0 24px', letterSpacing: '-0.5px', lineHeight: 1.2 }}>{selectedProject.title} Case Study</h2>

              {selectedProject.details.caseStudyImage && (
                <div style={{ width: '100%', marginBottom: '32px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                  <img src={selectedProject.details.caseStudyImage} alt={selectedProject.title} style={{ width: '100%', height: 'auto', display: 'block' }} />
                </div>
              )}

              <div style={{ marginBottom: '40px' }}>
                <h4 style={{ fontSize: '18px', marginBottom: '16px', fontWeight: 800 }}>Key Highlights</h4>
                <div style={{ display: 'grid', gap: '16px' }}>
                  {selectedProject.details.highlights.map((h: string, i: number) => (
                    <div key={i} style={{ display: 'flex', gap: '12px', fontSize: '16px', lineHeight: '1.5', opacity: 0.8 }}>
                      <div style={{ width: '6px', height: '6px', background: 'var(--accent-coral)', borderRadius: '50%', marginTop: '8px', flexShrink: 0 }}></div>
                      <p>{h}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: '40px' }}>
                <h4 style={{ fontSize: '18px', marginBottom: '12px', fontWeight: 800 }}>Strategic Win</h4>
                <p style={{ fontSize: '16px', lineHeight: '1.6', opacity: 0.8 }}>{selectedProject.details.strategy}</p>
              </div>

              <div>
                <h4 style={{ fontSize: '18px', marginBottom: '12px', fontWeight: 800 }}>Lean Operation</h4>
                <p style={{ fontSize: '14px', opacity: 0.6 }}>Delivered by: <span style={{ fontWeight: 600 }}>{selectedProject.details.team}</span></p>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Konami Easter Egg Modal (Comic) */}
      {showComic && (
        <div
          style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(0,0,0,0.95)', display: 'flex', alignItems: 'center',
            justifyContent: 'center', zIndex: 1100, padding: '24px'
          }}
          onClick={() => setShowComic(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            style={{
              maxWidth: activeComic ? '1000px' : '800px', width: '100%', position: 'relative',
              boxShadow: '0 50px 100px rgba(0,0,0,0.5)', borderRadius: '20px', overflow: 'hidden',
              transition: 'max-width 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => {
                setShowComic(false);
                setActiveComic(null);
              }}
              style={{ position: 'absolute', right: '20px', top: '20px', background: 'rgba(255,255,255,0.9)', border: 'none', borderRadius: '50%', padding: '10px', cursor: 'pointer', zIndex: 10 }}
            >
              <X size={20} />
            </button>
            {!activeComic && <img src="/agent_comic.png" alt="Agentic Adventures Comic" style={{ width: '100%', height: 'auto', display: 'block' }} />}

            <div style={{ background: 'var(--gradient-main)', padding: '24px', color: 'white' }}>
              {activeComic ? (
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                    <button
                      onClick={() => setActiveComic(null)}
                      style={{
                        background: 'rgba(255,255,255,0.2)',
                        border: 'none',
                        color: 'white',
                        padding: '8px 16px',
                        borderRadius: '100px',
                        cursor: 'pointer',
                        fontSize: '14px',
                        fontWeight: 600,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}
                    >
                      <ArrowLeft size={16} /> Back to Library
                    </button>
                    <h3 style={{ fontSize: '20px', fontWeight: 800, margin: 0 }}>{activeComic.name}</h3>
                  </div>
                  <div style={{
                    width: '100%',
                    height: '70dvh',
                    background: 'white',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    WebkitOverflowScrolling: 'touch'
                  }}>
                    <iframe
                      src={`/${activeComic.file}#toolbar=0`}
                      style={{ width: '100%', height: '100%', border: 'none' }}
                      title={activeComic.name}
                    />
                  </div>
                </div>
              ) : (
                <>
                  <h3 style={{ fontSize: '28px', fontWeight: 800, margin: 0, textAlign: 'center' }}>UNLOCKED: THE AGENTIC ADVENTURES 📂</h3>
                  <p style={{ opacity: 0.9, fontSize: '15px', marginTop: '8px', textAlign: 'center', marginBottom: '32px' }}>
                    You've discovered the Architect's Secret Files. Access the full series below.
                  </p>

                    <div className="comic-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '12px' }}>
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
                        className="classified-doc"
                        style={{
                          background: 'rgba(255,255,255,0.1)',
                          border: '1px solid rgba(255,255,255,0.2)',
                          padding: '12px',
                          borderRadius: '12px',
                          cursor: 'pointer',
                          color: 'white',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          gap: '8px',
                          transition: 'all 0.3s ease',
                          textAlign: 'center'
                        }}
                      >
                        <BookOpen size={24} />
                        <span style={{ fontSize: '12px', fontWeight: 600, lineHeight: 1.2 }}>{doc.name}</span>
                      </div>
                    ))}
                    </div>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="footer-logo">Enrique Chan</div>
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#speaking">Speaking</a>
          <a href="#work">Projects</a>
          <a href="#experience">Career</a>
          <a href="#articles">Writing</a>
          <Link to="/media">Gallery</Link>
        </div>
        <div className="footer-socials">
          <a href="https://github.com/enriquekalven" target="_blank" className="social-icon"><Github size={22} /></a>
          <a href="https://www.linkedin.com/in/enriquechan/" target="_blank" className="social-icon"><Linkedin size={22} /></a>
          <a href="mailto:enriquekalven@gmail.com" className="social-icon"><Mail size={22} /></a>
          <a href="#" className="social-icon"><Twitter size={22} /></a>
          <a href="#" className="social-icon"><Youtube size={22} /></a>
        </div>
        <p style={{ marginTop: '80px', fontSize: '14px', color: '#999', letterSpacing: '1px' }}>
          © {new Date().getFullYear()} ENRIQUE CHAN PORTFOLIO. BUILT FOR THE AGENTIC AGE.
        </p>
      </footer>

      {/* Hidden Easter Egg Hint */}
      <motion.div
        animate={{
          rotate: [0, -10, 10, -10, 10, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatDelay: 3
        }}
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          fontSize: '32px',
          cursor: 'pointer',
          zIndex: 100,
          filter: 'drop-shadow(0 0 10px rgba(255,126,95,0.3))'
        }}
        onClick={() => {
          setShowHint(true);
          setTimeout(() => setShowHint(false), 3000);
          console.log("Looking for something? Maybe an old school code or a triple tap...");
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
              background: '#fff',
              color: '#000',
              padding: '12px 18px',
              borderRadius: '12px',
              fontSize: '14px',
              fontWeight: 600,
              boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
              whiteSpace: 'nowrap',
              marginBottom: '15px'
            }}
          >
            Looking for a secret? Try an old school code or a triple-tap! 🤫
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
