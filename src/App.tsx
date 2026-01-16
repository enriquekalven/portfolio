import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { ArrowUpRight, Layers, Linkedin, Mail, PlayCircle, BookOpen, Presentation } from 'lucide-react';
import MediaPage from './MediaPage';

/* --- Data --- */
const EXPERIENCE = [
  {
    company: 'Google Cloud',
    role: 'Outbound Product Manager, Cloud AI',
    period: 'Nov 2025 — Present',
    description: 'Co-authored "Intro to Agents" whitepaper (1.5M+ attendees). Leading governance strategy between Gemini Enterprise and Agent Builder (ADK & Agent Engine).',
    skills: ['Gen AI', 'Product Strategy', 'Agent Governance', 'Whitepapers']
  },
  {
    company: 'Google Cloud',
    role: 'Senior AI Consultant, PSO',
    period: 'Jun 2023 — Nov 2025',
    description: 'Led delivery of the 2024 Olympic Games "Oli Chatbot" (40M viewers, 90M queries). Pioneered DIY Vertex AI solutions for WBD translation/captioning. Secured $1.3M revenue commitment for Gemini throughput.',
    skills: ['Vertex AI', 'RLHF', 'Gemini', 'Large Scale Systems']
  },
  {
    company: 'Google Cloud',
    role: 'Senior Data Consultant, PSO',
    period: 'May 2021 — Jun 2023',
    description: 'Led Boeing\'s massive analytics migration to BigQuery (Source Oriented Mesh Architecture). Developed 6 technical assets for EDW modernization. Launched gShadowPSO dashboard.',
    skills: ['BigQuery', 'Data Mesh', 'EDW Modernization', 'TeraData Migration']
  }
];

const TECH_TALKS = [
  {
    title: "Google Cloud Next '25",
    location: "Las Vegas",
    topic: "Enterprise Agent Orchestration",
    description: "Deep dive into multi-agent systems and governance for global scales.",
    icon: Presentation
  },
  {
    title: "Google Cloud Next '24",
    location: "Las Vegas",
    topic: "Building the Oli Chatbot",
    description: "Architecture and scaling lessons from the 2024 Olympic Games AI launch.",
    icon: Presentation
  },
  {
    title: "Tech Immersion",
    location: "Mountain View",
    topic: "Generative AI in Production",
    description: "Hands-on workshops on RLHF and model tuning for enterprise use cases.",
    icon: Layers
  }
];

const PUBLICATIONS = [
  {
    title: 'Intro to Agents Whitepaper',
    platform: 'Kaggle / Google Cloud',
    description: 'The definitive guide on autonomous agents, co-authored for over 1.5M readers.',
    link: '#',
    tech: ['Whitepaper', 'Agentic AI']
  },
  {
    title: 'Register to Gemini Enterprise A2A',
    platform: 'Medium',
    description: 'A technical guide on setting up Agent-to-Agent communication in 3 commands.',
    link: 'https://medium.com/@enriq/register-to-gemini-enterprise-a2a-with-3-commands-688af024d9bb',
    tech: ['Medium', 'A2A', 'Gemini']
  },
  {
    title: 'Modernizing Data Mesh for Boeing',
    platform: 'Google Cloud Blog',
    description: 'Architecting Source Oriented Mesh for complex ITAR environments.',
    link: '#',
    tech: ['Data Mesh', 'BigQuery']
  }
];

const PROJECTS = [
  {
    title: 'Advent of Agents',
    description: 'A holiday-themed AI challenge site featuring autonomous agents. Built with advanced agentic workflows.',
    link: 'https://adventofagents.com/',
    type: 'Featured Product',
    image: 'https://adventofagents.com/og-image.png',
    tech: ['AI Agents', 'React', 'Agentic Workflow']
  },
  {
    title: 'Oli AI Chatbot',
    description: 'Official AI assistant for the 2024 Paris Olympics. Served 90M queries with sub-second latency.',
    link: '#',
    type: 'High Scale',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=800&auto=format&fit=crop',
    tech: ['Vertex AI', 'Gen AI', 'Gemini']
  }
];

function LandingPage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="app"
      style={{
        background: `radial-gradient(1000px at ${mousePos.x}px ${mousePos.y}px, rgba(52, 66, 88, 0.4), transparent 80%)`
      }}
    >
      <img
        src="https://media.licdn.com/dms/image/v2/D5603AQGRHW0BEJvVIg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1683008109054?e=2147483647&v=beta&t=fxcWMUZyarFigKAjBOU9mP5IHmuabaR5iwMGgGipyyk"
        alt="Enrique Chan"
        className="profile-bubble"
        onClick={() => window.open('https://www.linkedin.com/in/enriquechan/', '_blank')}
      />
      <div className="layout">
        {/* LEFT COLUMN */}
        <header className="header">
          <div>
            <h1 className="name">Enrique Chan</h1>
            <h2 className="role">Outbound Product Manager, Cloud AI at Google</h2>
            <p className="bio">
              I leverage <span className="highlight-orange">Tech, Data & AI</span> to transform how people experience the world.
            </p>

            <nav className="nav">
              <a href="#about" className="nav-link">
                <span className="nav-indicator"></span>
                <span className="nav-text">About</span>
              </a>
              <a href="#experience" className="nav-link">
                <span className="nav-indicator"></span>
                <span className="nav-text">Experience</span>
              </a>
              <a href="#talks" className="nav-link">
                <span className="nav-indicator"></span>
                <span className="nav-text">Tech Talks</span>
              </a>
              <a href="#publications" className="nav-link">
                <span className="nav-indicator"></span>
                <span className="nav-text">Publications</span>
              </a>
              <a href="#work" className="nav-link">
                <span className="nav-indicator"></span>
                <span className="nav-text">Work</span>
              </a>
              <Link to="/media" className="nav-link media-nav-link">
                <span className="nav-indicator"></span>
                <span className="nav-text">Media & Gallery</span>
                <PlayCircle size={14} className="ml-2 inline-block opacity-70" />
              </Link>
            </nav>
          </div>

          <ul className="socials">
            <li>
              <a href="https://www.linkedin.com/in/enriquechan/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={24} />
              </a>
            </li>
            <li>
              <a href="mailto:enriquekalven@gmail.com" aria-label="Email">
                <Mail size={24} />
              </a>
            </li>
          </ul>
        </header>

        {/* RIGHT COLUMN */}
        <main className="content">
          <section id="about" className="section">
            <h3 className="section-title-mobile">About</h3>
            <p className="text-body">
              With over 15 years of experience, I build production-grade AI systems that impact millions.
              Mentorship and people-centric leadership are at the core of my <span className="highlight-orange">philosophy</span>.
            </p>
          </section>

          <section id="experience" className="section">
            <h3 className="section-title-mobile">Experience</h3>
            <div className="experience-list">
              {EXPERIENCE.map((exp, idx) => (
                <div key={idx} className="card experience-card">
                  <div className="card-period">{exp.period}</div>
                  <div className="card-content">
                    <h3 className="card-title">
                      {exp.role} · <span className="company">{exp.company}</span>
                      <ArrowUpRight size={14} className="arrow-icon" />
                    </h3>
                    <p className="card-desc">{exp.description}</p>
                    <div className="skill-tags">
                      {exp.skills.map(skill => <span key={skill} className="tag">{skill}</span>)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="talks" className="section">
            <h3 className="section-title-mobile">Tech Talks</h3>
            <div className="experience-list">
              {TECH_TALKS.map((talk, idx) => (
                <div key={idx} className="card experience-card">
                  <div className="card-period">{talk.title}</div>
                  <div className="card-content">
                    <h3 className="card-title">
                      {talk.topic}
                      {talk.icon && <talk.icon size={16} className="ml-2 text-accent-secondary" />}
                    </h3>
                    <p className="card-desc" style={{ color: 'var(--white)' }}>{talk.location}</p>
                    <p className="card-desc">{talk.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="publications" className="section">
            <h3 className="section-title-mobile">Publications</h3>
            <div className="project-list">
              {PUBLICATIONS.map((pub, idx) => (
                <a key={idx} href={pub.link} target="_blank" className="card experience-card">
                  <div className="card-period">{pub.platform}</div>
                  <div className="card-content">
                    <h3 className="card-title">
                      {pub.title}
                      <BookOpen size={14} className="arrow-icon" />
                    </h3>
                    <p className="card-desc">{pub.description}</p>
                    <div className="skill-tags">
                      {pub.tech.map(t => <span key={t} className="tag">{t}</span>)}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </section>

          <section id="work" className="section">
            <h3 className="section-title-mobile">Work</h3>
            <div className="project-list">
              {PROJECTS.map((proj, idx) => (
                <a key={idx} href={proj.link} target="_blank" className="card project-card">
                  <div className="project-image-wrapper">
                    <img src={proj.image} alt={proj.title} className="project-thumb" />
                  </div>
                  <div className="card-content">
                    <h3 className="card-title">
                      {proj.title}
                      <ArrowUpRight size={14} className="arrow-icon" />
                    </h3>
                    <p className="card-desc">{proj.description}</p>
                    <div className="skill-tags">
                      {proj.tech.map(t => <span key={t} className="tag">{t}</span>)}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </section>

          <footer className="footer">
            <div className="footer-content">
              <p>
                Aesthetic inspired by <a href="https://cloudrace.info/" target="_blank" className="highlight-orange">CloudRace</a>.
              </p>
              <p className="footer-sub">
                © {new Date().getFullYear()} Enrique Chan. Built with React & Vite.
              </p>
            </div>
          </footer>
        </main>
      </div>
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
