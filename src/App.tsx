import { useState, useEffect } from 'react';
import './App.css';
import { ArrowUpRight, Award, Layers, Linkedin, Mail, PlayCircle } from 'lucide-react';

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
  },
  {
    company: 'Amazon Web Services',
    role: 'Senior Cloud Architect',
    period: 'May 2020 — May 2021',
    description: 'Administered AWS Well-Architected reviews. Built distributed microservices with TypeScript/CDK. Designed secure landing zones with Control Tower.',
    skills: ['AWS CDK', 'Serverless', 'Control Tower', 'Splunk']
  },
  {
    company: 'Accenture',
    role: 'Senior Manager, Cloud Strategy',
    period: 'Nov 2018 — May 2020',
    description: 'Sold over $10M in delivery work. Led "Journey to Cloud" workshops and gold-standard architecture patterns. Managed career growth for 5 direct reports.',
    skills: ['Cloud Strategy', 'DevSecOps', 'Sales', 'Team Leadership']
  },
  {
    company: 'Accenture',
    role: 'Manager & Tech Consultant',
    period: 'May 2011 — Nov 2018',
    description: 'Launched Disney MyMagic+ (FastPass+, MagicBands). Service Delivery Lead for SRE/Monitoring teams. Automated continuous improvement workflows.',
    skills: ['SRE', 'Disney MyMagic+', 'Automation', 'apm']
  }
];

const PROJECTS = [
  {
    title: 'Advent of Agents',
    description: 'A holiday-themed AI challenge site featuring autonomous agents. Built with advanced agentic workflows.',
    link: 'https://adventofagents.com/',
    type: 'Featured Product',
    image: 'https://adventofagents.com/og-image.png', // Assuming or specific placeholder if needed. Or I will use a generic one if this breaks
    tech: ['AI Agents', 'React', 'Agentic Workflow']
  },
  {
    title: 'Gemini Enterprise A2A',
    description: 'A comprehensive guide on setting up Agent-to-Agent communication using Gemini. The definitive resource for enterprise AI orchestration.',
    link: 'https://medium.com/@enriq/register-to-gemini-enterprise-a2a-with-3-commands-688af024d9bb',
    type: 'Featured Writing',
    image: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Hotp-D9eC9c9b9b9b9b9b.png',
    tech: ['Gemini', 'ADK', 'Medium']
  },
  {
    title: '2024 Olympics "Oli" Chatbot',
    description: 'Led delivery of the official AI chatbot serving 40M viewers. Handled 90M queries with sub-second latency using Vertex AI.',
    link: '#',
    type: 'Major Launch',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=800&auto=format&fit=crop',
    tech: ['Vertex AI', 'Gen AI', 'High Scale']
  },
  {
    title: 'Boeing Analytics Modernization',
    description: 'Reshaped a single-tenant migration into a Source Oriented Mesh Architecture. Enabled analytics for 29 tenants in a strictly compliant ITAR environment.',
    link: '#',
    type: 'Enterprise Arch',
    image: 'https://images.unsplash.com/photo-1559067515-bf7d799b6d42?q=80&w=800&auto=format&fit=crop',
    tech: ['BigQuery', 'Data Mesh', 'ITAR']
  }
];

const MEDIA = [
  {
    id: 'nZa5-WyN-rE',
    title: 'Intro to Agents (Thought Leadership)',
    description: "Deep dive into the future of autonomous agents and their impact on enterprise workflows.",
    type: 'Talk'
  },
  {
    id: 'AuJcu_fQfBY',
    title: 'Building Autonomous Agents',
    description: "Technical demo showcasing the architecture and implementation of modern AI agents.",
    type: 'Demo'
  }
];

const CERTIFICATIONS = [
  '10x Google Cloud Certified',
  '7x AWS Certified',
  '2x Microsoft Azure Certified',
  'Scaled Agile Certified SAFe 4 Agilist'
];

const EDUCATION = [
  {
    school: 'University of Florida',
    degree: 'BS Aerospace Engineering & BS Mechanical Engineering',
    honors: 'Cum Laude Honors',
    year: '2006 — 2011'
  }
];

const RELEASE_NOTES = [
  {
    version: 'v2.1.0',
    date: 'Dec 11, 2025',
    title: 'Content Expansion',
    changes: [
      'Added "Media" section featuring YouTube talks and demos.',
      'Highlighted "Advent of Agents" as a featured project.',
      'Updated professional experience timeline (15 years).'
    ]
  },
  {
    version: 'v2.0.0',
    date: 'Dec 10, 2025',
    title: 'Spotlight Redesign',
    changes: [
      'Implemented "Spotlight" visual theme with mouse-tracking gradients.',
      'Dark mode overhaul (Navy/Slate palette).',
      'Migrated to split-screen sticky layout for better readability.'
    ]
  },
  {
    version: 'v1.2.1',
    date: 'Dec 11, 2025',
    title: 'Security Patch (CVE-2025-55182)',
    changes: [
      'Updated React to v19.2.1 to resolve critical security vulnerability.',
      'Refreshed Firebase configuration for enhanced security.'
    ]
  }
];

function App() {
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
        background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`
      }}
    >
      <div className="layout">
        {/* LEFT COLUMN (Fixed/Sticky) */}
        <header className="header">
          <div>
            <h1 className="name">Enrique Chan</h1>
            <h2 className="role">Outbound Product Manager, Cloud AI at Google</h2>
            <p className="bio">
              I leverage <strong>Tech, Data & AI</strong> to transform how people experience the world.
              <br /><br />
              From launching <strong>Disney's MyMagic+ (MagicBands)</strong> to architecting the <strong>2024 Olympic Games AI Chatbot</strong>,
              I build production-grade systems that impact millions.
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
              <a href="#projects" className="nav-link">
                <span className="nav-indicator"></span>
                <span className="nav-text">Selected Work</span>
              </a>
              <a href="#media" className="nav-link">
                <span className="nav-indicator"></span>
                <span className="nav-text">Media</span>
              </a>
              <a href="#releases" className="nav-link">
                <span className="nav-indicator"></span>
                <span className="nav-text">Releases</span>
              </a>
            </nav>
          </div>

          <ul className="socials">
            <li>
              <a href="https://www.linkedin.com/in/enriquechan/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={24} />
              </a>
            </li>
            <li>
              <a href="https://medium.com/@enriq" target="_blank" rel="noopener noreferrer" aria-label="Medium">
                <Layers size={24} />
              </a>
            </li>
            <li>
              <a href="mailto:enriquekalven@gmail.com" aria-label="Email">
                <Mail size={24} />
              </a>
            </li>
          </ul>
        </header>

        {/* RIGHT COLUMN (Scrollable) */}
        <main className="content">

          <section id="about" className="section">
            <h3 className="section-title-mobile">About</h3>
            <p className="text-body">
              With over <strong>15 years</strong> of experience in IT, Cloud, and Data, I specialize in the entire lifecycle of <strong>MLOps</strong>,
              <strong>Virtual Assistants</strong>, and <strong>Generative AI</strong>. My strategic vision is simple:
              use technology to leverage business impact and create a fairer, evolved world.
            </p>
            <p className="text-body">
              Recently, I co-authored the "Intro to Agents" whitepaper and led the delivery of the <strong>Oli Chatbot</strong> for the 2024 Paris Olympics.
              I thrive on "mission impossible" projects—like ramping up a delayed modernization for Boeing or launching Disney+ worldwide.
            </p>
            <p className="text-body">
              <em>"A team is only as strong as its weakest player."</em> — My work philosophy is centered on mentorship, people-centric leadership, and elevating everyone around me.
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

          <section id="projects" className="section">
            <h3 className="section-title-mobile">Selected Work</h3>
            <div className="project-list">
              {PROJECTS.map((proj, idx) => (
                <a key={idx} href={proj.link} target="_blank" className="card project-card">
                  <div className="project-image-wrapper">
                    {proj.image && !proj.image.includes('placeholder') ? (
                      <img src={proj.image} alt={proj.title} className="project-thumb" />
                    ) : (
                      <div className="project-thumb-placeholder" />
                    )}
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

          <section id="media" className="section">
            <h3 className="section-title-mobile">Media</h3>
            <div className="project-list">
              {MEDIA.map((item, idx) => (
                <div key={idx} className="card project-card video-card">
                  <div className="video-wrapper">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${item.id}`}
                      title={item.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="card-content">
                    <h3 className="card-title">
                      {item.title}
                      <PlayCircle size={14} className="arrow-icon" />
                    </h3>
                    <p className="card-desc">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="education" className="section">
            <h3 className="section-title-mobile">Education</h3>
            {EDUCATION.map((edu, idx) => (
              <div key={idx} className="card experience-card">
                <div className="card-period">{edu.year}</div>
                <div className="card-content">
                  <h3 className="card-title">{edu.school}</h3>
                  <p className="card-desc">{edu.degree}</p>
                  <p className="card-desc" style={{ color: 'var(--accent)' }}>{edu.honors}</p>
                </div>
              </div>
            ))}
          </section>

          <section id="certs" className="section">
            <h3 className="section-title-mobile">Certifications</h3>
            <div className="certs-list">
              {CERTIFICATIONS.map((cert, idx) => (
                <div key={idx} className="cert-item">
                  <Award size={16} className="cert-icon" />
                  <span>{cert}</span>
                </div>
              ))}
            </div>
          </section>

          <section id="releases" className="section">
            <h3 className="section-title-mobile">Release Notes</h3>
            <div className="experience-list">
              {RELEASE_NOTES.map((note, idx) => (
                <div key={idx} className="card experience-card">
                  <div className="card-period">{note.date}</div>
                  <div className="card-content">
                    <h3 className="card-title">
                      {note.version}
                      <span className="company"> · {note.title}</span>
                    </h3>
                    <ul className="card-desc" style={{ listStyleType: 'disc', paddingLeft: '1rem', marginTop: '0.5rem' }}>
                      {note.changes.map((change, cIdx) => (
                        <li key={cIdx}>{change}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <footer className="footer">
            <p>
              Designed in the style of
              <a href="https://brittanychiang.com/" target="_blank" className="highlight"> Brittany Chiang</a>.
              Built with React, Vite & Firebase.
            </p>
          </footer>

        </main>
      </div>
    </div>
  );
}

export default App;
