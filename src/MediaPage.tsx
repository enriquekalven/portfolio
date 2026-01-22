import { ArrowLeft, PlayCircle, ExternalLink, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './App.css';
import { motion } from 'framer-motion';

const MEDIA = [
  {
    id: "FrfaAwq0YNg",
    title: "Advent of Agents Day 20 - Kaggle Capstone",
    description: "Kaggle Capstone Winners Highlight. Deep dive into the most innovative agentic solutions.",
    type: "Highlight"
  },
  {
    id: "zvNJqZNaKNY",
    title: "Why 80% of AI Agents Fail",
    description: "Technical post-mortem on agentic failures and the architectural patterns to fix them.",
    type: "Mini-Talk"
  },
  {
    id: "cvija7Qc-Gg",
    title: "Cloud API Registry + ADK Integration",
    description: "Day 18 - Real-world integration between Cloud API registries and the Agent Development Kit.",
    type: "Technical Demo"
  },
  {
    id: "qCuGWmghmII",
    title: "4 Pillars of AI Agent Trust",
    description: "The ultimate guide to building high-quality, reliable, and trustworthy AI agents for enterprise.",
    type: "Strategy"
  },
  {
    id: "YgCv8PXuaT4",
    title: "Why AI Chatbots Forget Everything",
    description: "Solving the memory problem in AI agents using persistence and state management.",
    type: "Deep Dive"
  },
  {
    id: "ZMIAlxx-Jx4",
    title: "Advent of Agents Day 15 - A2UI",
    description: "Demonstrating the Agentic-Adaptive User Interface (A2UI) protocol.",
    type: "Demo"
  },
  {
    id: "AuJcu_fQfBY",
    title: "MCP: The Protocol Your Agents Need",
    description: "Why AI agents are useless without standardized tool communication. MCP explained.",
    type: "Protocol"
  },
  {
    id: "sh3MVcihm-E",
    title: "Day 10 - Context Compaction",
    description: "Techniques for context compaction and caching to optimize LLM usage.",
    type: "Optimization"
  },
  {
    id: "UAPn-y0bIiM",
    title: "The Power of Prompt Chaining",
    description: "Stop writing giant prompts. Learn how to chain prompts for robust agent workflows.",
    type: "Tutorial"
  },
  {
    id: "HQziDQrvzHg",
    title: "Why You Need the Routing Pattern",
    description: "Stop using one LLM. The architectural pattern for multi-model agent systems.",
    type: "Architecture"
  },
  {
    id: "nZa5-WyN-rE",
    title: "From Talking to Doing: Agentic AI",
    description: "Thought leadership on the rise of autonomous agents and the shift from chat to action.",
    type: "Talk"
  },
  {
    id: "9FQh-Pw2sfE",
    title: "Advent of Agents - Day 9 - Time Travel",
    description: "Implementing temporal logic and flashback capabilities in AI agents.",
    type: "Demo"
  },
  {
    id: "DWPR8xPizOQ",
    title: "SOTA Context Management",
    description: "Day 8 - State of the art patterns for managing infinite context windows.",
    type: "Deep Dive"
  },
  {
    id: "Ep8usBDUTtA",
    title: "Antigravity / IDE Integration",
    description: "How agentic IDEs like Antigravity are transforming developer productivity.",
    type: "Tooling"
  },
  {
    id: "pk16GR2C18Q",
    title: "Day 7 - Code Execution",
    description: "Safe and scalable code execution sandbox integration for autonomous agents.",
    type: "Technical"
  },
  {
    id: "1_GhQzzXRvU",
    title: "Time Travel for Your AI (Part 2)",
    description: "Advanced implementation of agentic recall and state reconstruction.",
    type: "Demo"
  }
];

function MediaPage() {
  return (
    <div className="app">
      <nav className="navbar scrolled">
        <div className="nav-container">
          <Link to="/" className="logo">Enrique Chan</Link>
          <div className="nav-links">
            <Link to="/">Home</Link>
          </div>
          <a href="mailto:enriquekalven@gmail.com" className="cta-button" style={{ padding: '10px 20px', fontSize: '14px' }}>
            Work with Me
          </a>
        </div>
      </nav>

      <section style={{ paddingTop: '160px' }}>
        <div className="section-header">
          <span className="section-tag">Media Center</span>
          <h1 className="section-title">Talks & Technical Demos</h1>
          <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-secondary)', fontSize: '18px' }}>
            A comprehensive library of technical demonstrations, keynotes, and thought leadership on
            <span style={{ color: 'var(--accent-coral)', fontWeight: 700 }}> Agentic Workflows</span>.
          </p>
        </div>

        <div className="cards-grid">
          {MEDIA.map((item, idx) => (
            <motion.div
              key={idx}
              className="service-card"
              style={{ padding: '0', overflow: 'hidden' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
            >
              <div style={{ position: 'relative', paddingTop: '56.25%', background: '#000' }}>
                <iframe
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                  src={`https://www.youtube.com/embed/${item.id}`}
                  title={item.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div style={{ padding: '30px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                  <span className="tag" style={{ background: 'rgba(0,0,0,0.05)', padding: '4px 12px', borderRadius: '100px', fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>{item.type}</span>
                  <PlayCircle size={20} style={{ color: 'var(--accent-coral)' }} />
                </div>
                <h3 className="card-title" style={{ fontSize: '20px', marginBottom: '12px' }}>{item.title}</h3>
                <p className="card-description" style={{ fontSize: '14px', lineHeight: '1.6', marginBottom: '20px' }}>{item.description}</p>
                <a href={`https://youtube.com/watch?v=${item.id}`} target="_blank" style={{ fontWeight: 800, color: 'var(--accent-coral)', marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px' }}>
                  WATCH ON YOUTUBE <ExternalLink size={12} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Media Call to Action */}
      <section style={{ textAlign: 'center', padding: '100px 24px', background: '#fdfaf7', borderTop: '1px solid #eee' }}>
        <h2 style={{ fontSize: '36px', marginBottom: '20px' }}>Looking for custom enablement?</h2>
        <p style={{ maxWidth: '600px', margin: '0 auto 40px', fontSize: '18px', opacity: 0.8 }}>
          I deliver customized workshops and keynotes for executive leadership teams on transitioning from POC to production-grade AI agents.
        </p>
        <a href="mailto:enriquekalven@gmail.com" className="cta-button">
          Book a Workshop <ChevronRight size={18} />
        </a>
      </section>

      <footer className="footer">
        <div className="footer-logo">Enrique Chan</div>
        <p style={{ opacity: 0.5, fontSize: '14px' }}>© {new Date().getFullYear()} Enrique Chan. Built for the future of AI.</p>
      </footer>
    </div>
  );
}

export default MediaPage;
