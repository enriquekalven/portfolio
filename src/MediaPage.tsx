import { useState, useEffect } from 'react';
import { PlayCircle, ExternalLink, ChevronRight, Sun, Moon, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import './App.css';
import { motion } from 'framer-motion';
import { ContactModal } from './App';
import { ExecutiveResumeModal } from './ExecutiveResumeModal';

const MEDIA = [
  {
    id: "b542qAXlnwc",
    title: "[Agent Garden] Economic Research Agent",
    description: "Live-API Economic Intelligence Agent querying FRED, Census, HUD & Real Estate Yields via ADK 2.0 with zero math drift.",
    type: "Agent Garden",
    category: "Architecture & Protocols"
  },
  {
    id: "FrfaAwq0YNg",
    title: "Advent of Agents Day 20 - Kaggle Capstone",
    description: "Kaggle Capstone Winners Highlight. Deep dive into the most innovative agentic solutions.",
    type: "Highlight",
    category: "Keynotes & Strategy"
  },
  {
    id: "zvNJqZNaKNY",
    title: "Why 80% of AI Agents Fail",
    description: "Technical post-mortem on agentic failures and the architectural patterns to fix them.",
    type: "Mini-Talk",
    category: "Keynotes & Strategy"
  },
  {
    id: "cvija7Qc-Gg",
    title: "Cloud API Registry + ADK Integration",
    description: "Day 18 - Real-world integration between Cloud API registries and the Agent Development Kit.",
    type: "Technical Demo",
    category: "Demos & Tutorials"
  },
  {
    id: "qCuGWmghmII",
    title: "4 Pillars of AI Agent Trust",
    description: "The ultimate guide to building high-quality, reliable, and trustworthy AI agents for enterprise.",
    type: "Strategy",
    category: "Keynotes & Strategy"
  },
  {
    id: "YgCv8PXuaT4",
    title: "Why AI Chatbots Forget Everything",
    description: "Solving the memory problem in AI agents using persistence and state management.",
    type: "Deep Dive",
    category: "Architecture & Protocols"
  },
  {
    id: "ZMIAlxx-Jx4",
    title: "Advent of Agents Day 15 - A2UI",
    description: "Demonstrating the Agentic-Adaptive User Interface (A2UI) protocol.",
    type: "Demo",
    category: "Architecture & Protocols"
  },
  {
    id: "AuJcu_fQfBY",
    title: "MCP: The Protocol Your Agents Need",
    description: "Why AI agents are useless without standardized tool communication. MCP explained.",
    type: "Protocol",
    category: "Architecture & Protocols"
  },
  {
    id: "sh3MVcihm-E",
    title: "Day 10 - Context Compaction",
    description: "Techniques for context compaction and caching to optimize LLM usage.",
    type: "Optimization",
    category: "Architecture & Protocols"
  },
  {
    id: "UAPn-y0bIiM",
    title: "The Power of Prompt Chaining",
    description: "Stop writing giant prompts. Learn how to chain prompts for robust agent workflows.",
    type: "Tutorial",
    category: "Demos & Tutorials"
  },
  {
    id: "HQziDQrvzHg",
    title: "Why You Need the Routing Pattern",
    description: "Stop using one LLM. The architectural pattern for multi-model agent systems.",
    type: "Architecture",
    category: "Architecture & Protocols"
  },
  {
    id: "nZa5-WyN-rE",
    title: "From Talking to Doing: Agentic AI",
    description: "Thought leadership on the rise of autonomous agents and the shift from chat to action.",
    type: "Talk",
    category: "Keynotes & Strategy"
  },
  {
    id: "9FQh-Pw2sfE",
    title: "Advent of Agents - Day 9 - Time Travel",
    description: "Implementing temporal logic and flashback capabilities in AI agents.",
    type: "Demo",
    category: "Demos & Tutorials"
  },
  {
    id: "DWPR8xPizOQ",
    title: "SOTA Context Management",
    description: "Day 8 - State of the art patterns for managing infinite context windows.",
    type: "Deep Dive",
    category: "Architecture & Protocols"
  },
  {
    id: "Ep8usBDUTtA",
    title: "Antigravity / IDE Integration",
    description: "How agentic IDEs like Antigravity are transforming developer productivity.",
    type: "Tooling",
    category: "Demos & Tutorials"
  },
  {
    id: "pk16GR2C18Q",
    title: "Day 7 - Code Execution",
    description: "Safe and scalable code execution sandbox integration for autonomous agents.",
    type: "Technical",
    category: "Demos & Tutorials"
  },
  {
    id: "1_GhQzzXRvU",
    title: "Time Travel for Your AI (Part 2)",
    description: "Advanced implementation of agentic recall and state reconstruction.",
    type: "Demo",
    category: "Demos & Tutorials"
  }
];

const CATEGORIES = ["All", "Keynotes & Strategy", "Architecture & Protocols", "Demos & Tutorials"];

function MediaPage() {
  const [showContact, setShowContact] = useState(false);
  const [showResume, setShowResume] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [playingVideos, setPlayingVideos] = useState<Record<string, boolean>>({});
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    return (localStorage.getItem('theme') as 'dark' | 'light') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const filteredMedia = activeCategory === "All"
    ? MEDIA
    : MEDIA.filter(item => item.category === activeCategory);

  const handlePlayVideo = (id: string) => {
    setPlayingVideos(prev => ({ ...prev, [id]: true }));
  };

  return (
    <div className="app">
      <nav className="navbar scrolled">
        <div className="nav-container">
          <Link to="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
            <div style={{ width: '38px', height: '38px', borderRadius: '50%', overflow: 'hidden', border: '2px solid var(--accent-cyan)', boxShadow: '0 0 12px rgba(56,189,248,0.3)' }}>
              <img src="/profile_bubble.jpg" alt="Enrique Chan" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <span style={{ fontWeight: 800 }}>Enrique Chan</span>
          </Link>
          <div className="nav-links">
            <Link to="/">Home</Link>
          </div>
          <div className="media-nav-actions" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="theme-toggle-btn hide-on-small"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setShowResume(true)}
              className="cta-button-outline"
              style={{ padding: '9px 14px', fontSize: '13px', cursor: 'pointer' }}
              aria-label="Executive Resume"
              title="Executive Resume"
            >
              <FileText size={15} /> <span className="hide-on-xs">Resume</span>
            </button>
            <button
              onClick={() => setShowContact(true)}
              className="cta-button"
              style={{ padding: '10px 20px', fontSize: '14px', border: 'none', cursor: 'pointer', whiteSpace: 'nowrap' }}
            >
              Work with Me
            </button>
          </div>
        </div>
      </nav>

      <section style={{ paddingTop: '140px' }}>
        <div className="section-header">
          <span className="section-tag">Media Center</span>
          <h1 className="section-title">Talks &amp; Technical Demos</h1>
          <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-secondary)', fontSize: '17px', lineHeight: 1.6 }}>
            A comprehensive library of technical demonstrations, keynotes, and thought leadership on
            <span style={{ color: 'var(--accent-cyan)', fontWeight: 700 }}> Agentic Workflows</span>.
          </p>

          {/* Category Filter Pills */}
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '24px' }}>
            {CATEGORIES.map(category => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  style={{
                    padding: '8px 18px',
                    borderRadius: '100px',
                    fontSize: '13px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    border: isActive ? '1px solid var(--accent-cyan)' : '1px solid var(--border-subtle)',
                    background: isActive ? 'rgba(56, 189, 248, 0.14)' : 'var(--bg-card)',
                    color: isActive ? 'var(--accent-cyan)' : 'var(--text-secondary)'
                  }}
                >
                  {category} {category === "All" ? `(${MEDIA.length})` : `(${MEDIA.filter(m => m.category === category).length})`}
                </button>
              );
            })}
          </div>
        </div>

        <div className="cards-grid">
          {filteredMedia.map((item, idx) => {
            const isPlaying = !!playingVideos[item.id];
            return (
              <motion.div
                key={item.id}
                className="service-card"
                style={{ padding: '0', overflow: 'hidden' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(idx * 0.04, 0.3) }}
              >
                <div style={{ position: 'relative', paddingTop: '56.25%', background: '#000' }}>
                  {isPlaying ? (
                    <iframe
                      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                      src={`https://www.youtube.com/embed/${item.id}?autoplay=1`}
                      title={item.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <button
                      onClick={() => handlePlayVideo(item.id)}
                      aria-label={`Play ${item.title}`}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        border: 'none',
                        padding: 0,
                        cursor: 'pointer',
                        background: '#000',
                        overflow: 'hidden',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <img
                        src={`https://i.ytimg.com/vi/${item.id}/hqdefault.jpg`}
                        alt={item.title}
                        loading="lazy"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          opacity: 0.85,
                          transition: 'transform 0.3s ease, opacity 0.3s ease'
                        }}
                      />
                      <div
                        style={{
                          position: 'absolute',
                          width: '60px',
                          height: '60px',
                          borderRadius: '50%',
                          background: 'rgba(10, 14, 23, 0.82)',
                          border: '2px solid var(--accent-cyan)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--accent-cyan)',
                          boxShadow: '0 8px 25px rgba(0, 0, 0, 0.6)'
                        }}
                      >
                        <PlayCircle size={32} />
                      </div>
                    </button>
                  )}
                </div>
                <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
                    <span
                      style={{
                        background: 'rgba(56, 189, 248, 0.12)',
                        color: 'var(--accent-cyan)',
                        padding: '4px 12px',
                        borderRadius: '100px',
                        fontSize: '11px',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        letterSpacing: '1px'
                      }}
                    >
                      {item.type}
                    </span>
                    <PlayCircle size={20} style={{ color: 'var(--accent-cyan)' }} />
                  </div>
                  <h3 className="card-title" style={{ fontSize: '20px', marginBottom: '10px' }}>{item.title}</h3>
                  <p className="card-description" style={{ fontSize: '14px', lineHeight: '1.6', marginBottom: '20px' }}>{item.description}</p>
                  <a
                    href={`https://youtube.com/watch?v=${item.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontWeight: 800,
                      color: 'var(--accent-cyan)',
                      marginTop: 'auto',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '12px'
                    }}
                  >
                    WATCH ON YOUTUBE <ExternalLink size={12} />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Media Call to Action */}
      <section
        style={{
          textAlign: 'center',
          padding: '80px 24px',
          background: 'var(--bg-card)',
          borderTop: '1px solid var(--border-subtle)',
          borderBottom: '1px solid var(--border-subtle)',
          borderRadius: '24px',
          maxWidth: '1200px',
          margin: '40px auto 80px'
        }}
      >
        <h2 style={{ fontSize: '34px', marginBottom: '16px', color: 'var(--text-primary)' }}>Looking for custom enablement?</h2>
        <p style={{ maxWidth: '620px', margin: '0 auto 32px', fontSize: '17px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
          I deliver customized workshops and keynotes for executive leadership teams on transitioning from POC to production-grade AI agents.
        </p>
        <button
          onClick={() => setShowContact(true)}
          className="cta-button"
          style={{ border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
        >
          Book a Workshop <ChevronRight size={18} />
        </button>
      </section>

      <footer className="footer">
        <div className="footer-logo">Enrique Chan</div>
        <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>© {new Date().getFullYear()} Enrique Chan. Built for the future of AI.</p>
      </footer>

      {showContact && <ContactModal onClose={() => setShowContact(false)} onOpenResume={() => setShowResume(true)} />}
      {showResume && <ExecutiveResumeModal onClose={() => setShowResume(false)} />}
    </div>
  );
}

export default MediaPage;
