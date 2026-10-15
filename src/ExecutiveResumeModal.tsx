import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import {
  X,
  Printer,
  Copy,
  Check,
  Award,
  Briefcase,
  CheckCircle2,
  MapPin,
  Mail,
  Linkedin,
  Github,
  Link2,
  Sparkles
} from 'lucide-react';

/*
 * Source-of-truth rule: every claim in this resume must trace back to the site's own
 * data (EXPERIENCE, AWARDS, CERTIFICATIONS in App.tsx). Do not add facts here that are
 * not on the site — recruiters cross-check this page against LinkedIn and the timeline.
 */

const EXECUTIVE_BIO_TEXT = `Enrique Chan is a Staff AI Technical Deployment Lead (TDL) for Google Cloud Delta and an Outbound Product Manager for Gemini Enterprise App & Agent Platform, based in Seattle, WA. With 15+ years across Google Cloud, AWS, and Accenture, he turns frontier LLMs into production-grade, governed agentic workflows for large enterprises.

Highlights:
• $2B+ multi-year deal scope; Forward Deployed Engineering operating-model lead for 15 top-qualified enterprise accounts.
• Led technical RFIs and live demos for 4 consecutive Google Cloud analyst Leader recognitions in 2026 (Gartner® MQ Enterprise AI Assistants, Gartner® MQ Cloud-Native Application Platforms, The Forrester Wave™: AI Platforms, Gartner® MQ AI Application Development Platforms).
• Owned technical strategy for NBC's Paris 2024 Olympic Games chatbot (40M viewers, 90M queries) and led Disney+ global cloud scaling (100M+ users) at Accenture.
• Co-led Advent of Agents (32,000+ developers, Top 5 global GitHub repo, Silver Google AI Award) and co-authored the Executive "Intro to Agents" whitepaper for Kaggle's course (1.5M registered attendees).
• Multi-cloud certified: 8x Google Cloud and 6x AWS.

Contact: enriq@google.com | enriquekalven@gmail.com | linkedin.com/in/enriquechan | enriquekchan.web.app/resume`;

const LEADERSHIP_FOCUS = [
  'Forward Deployed Engineering (FDE) Leadership',
  'Principal / Staff AI Architecture',
  'AI Product Management & GTM Strategy',
  'Enterprise Agent Governance (ADK / A2A)',
  'Executive Keynotes & CXO Advisory'
];

const METRICS = [
  { metric: '$2B+', label: 'Multi-Year Deal Scope' },
  { metric: '4x', label: 'Gartner® & Forrester™ Leader Wins' },
  { metric: '40M+', label: 'Olympic Viewers Served (NBC)' },
  { metric: '32K+', label: 'Developers (Advent of Agents)' },
  { metric: '1.5M', label: 'Kaggle Course Registrants' }
];

const ROLES: { role: string; company: string; period: string; note?: string; bullets: string[] }[] = [
  {
    role: 'Staff Technical Deployment Lead (TDL), Delta',
    company: 'Google Cloud',
    period: 'Jun 2026 — Present',
    bullets: [
      'Forward Deployed Engineering (FDE) operating-model lead for 15 top-qualified enterprise accounts (including Ford and Intel); scoped FDE opportunities based on high-impact AI use cases.',
      'Deal team capturing a $2B multi-year commit, generating $63M in Google Services Funds, $5M in Learning, and $32M in Partner Services Funds.'
    ]
  },
  {
    role: 'Outbound Product Manager, Gemini Enterprise App & Agent Platform',
    company: 'Google Cloud AI',
    period: 'Dec 2025 — Present',
    note: 'Full-time rotation through Jun 2026; 20% rotation since',
    bullets: [
      'Led technical RFIs, architectural proof points, and live demos for 4 consecutive Google Cloud analyst Leader recognitions (2026): Gartner® MQ Enterprise AI Assistants (Inaugural Leader), Gartner® MQ Cloud-Native Application Platforms (3rd consecutive year), The Forrester Wave™: AI Platforms (Top Strategy Score), and Gartner® MQ AI Application Development Platforms (Highest Ability to Execute).',
      'Co-led Advent of Agents Seasons 1 & 2 (32,000+ developers, Top 5 global GitHub repo, 5T tokens driven to Gemini; Silver Google AI Award) and co-authored the Executive "Intro to Agents" whitepaper for the Kaggle course (1.5M registered attendees).',
      'Envisioned and built AgentOps Cockpit (Governance-as-Code); directed a security audit of 44 enterprise agents, hardened 450+ sample agents, and launched GA Agent Governance for Gemini Enterprise App.'
    ]
  },
  {
    role: 'Senior AI Consultant (2023–2025) · Senior Data Consultant (2021–2023), Professional Services (PSO)',
    company: 'Google Cloud',
    period: 'Jun 2021 — Dec 2025',
    bullets: [
      'Delivered AI solutions for 24 customer projects ($14.6M revenue, 81% utilization, 100% CSAT) and closed 21 customer deals ($11M revenue).',
      'Owned technical strategy for the NBC Paris 2024 Olympic Games chatbot (40M viewers, 90M queries; 0.5% error rate on Vertex AI Provisioned Throughput).',
      'Engineered a custom RLHF solution with 4 production pipelines for Warner Bros. Discovery captions and translation ($960K Phase 3 revenue); scaled the Boeing Analytical Platform from 1 to 29 tenants.'
    ]
  },
  {
    role: 'Senior Cloud Architect, ProServe Public Sector',
    company: 'Amazon Web Services (AWS)',
    period: 'May 2020 — May 2021',
    bullets: [
      'Administered Well-Architected Framework reviews; built TypeScript/CDK microservices, Control Tower landing zones, and Kinesis-to-Splunk centralized logging.'
    ]
  },
  {
    role: 'Senior Manager, Cloud Strategy & Data Analytics',
    company: 'Accenture',
    period: 'May 2011 — May 2020',
    bullets: [
      'Sold $10M+ in delivery work and generated $25M+ in pre-sales pipeline (final 5 years); managed 5 direct reports.',
      'Led Disney+ global cloud scaling (100M+ users) and MyMagic+ (FastPass+ & MagicBands) product development for Walt Disney World.'
    ]
  }
];

const AWARDS = [
  'Silver Google AI Award (SWIFTY, 2026 Q3) — Advent of Agents',
  'Cloud GTM Excellence Award (2025) — Wayfair retail agentic use cases',
  'GTM Cloud Tech Impact Award (2024) — NBC Olympics concierge',
  'Customer Empathy Award from Google Cloud CEO Thomas Kurian (H2 2024)'
];

type CopyState = 'idle' | 'copied' | 'failed';

const sectionHeadingStyle = {
  fontSize: '13px',
  fontWeight: 800,
  textTransform: 'uppercase' as const,
  letterSpacing: '1px',
  color: 'var(--accent-cyan)',
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  marginBottom: '10px'
};

const boxStyle = {
  padding: '16px 20px',
  borderRadius: '14px',
  background: 'rgba(255,255,255,0.02)',
  border: '1px solid var(--border-subtle)'
};

export function ExecutiveResumeModal({ onClose }: { onClose: () => void }) {
  const [bioState, setBioState] = useState<CopyState>('idle');
  const [linkState, setLinkState] = useState<CopyState>('idle');
  const sheetRef = useRef<HTMLDivElement>(null);
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    const body = document.body;
    const previousOverflow = body.style.overflow;
    body.classList.add('resume-open'); // print stylesheet hides everything except the resume
    body.style.overflow = 'hidden'; // lock background scroll while the modal is open
    sheetRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onCloseRef.current();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      body.classList.remove('resume-open');
      body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  const copyText = (text: string, setState: (state: CopyState) => void) => {
    const write = navigator.clipboard?.writeText(text) ?? Promise.reject(new Error('Clipboard unavailable'));
    write
      .then(() => setState('copied'), () => setState('failed'))
      .finally(() => window.setTimeout(() => setState('idle'), 2500));
  };

  const copyLabel = (state: CopyState, idle: string, done: string) =>
    state === 'copied' ? done : state === 'failed' ? 'Copy failed — select text instead' : idle;

  return createPortal(
    <div
      className="resume-modal-backdrop"
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.88)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1250,
        padding: '24px'
      }}
      onClick={onClose}
    >
      <motion.div
        ref={sheetRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="resume-title"
        tabIndex={-1}
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="modal-content resume-printable-sheet"
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'var(--bg-secondary)',
          border: '1px solid var(--border-subtle)',
          maxWidth: '920px',
          width: '100%',
          maxHeight: '88dvh',
          overflowY: 'auto',
          borderRadius: '24px',
          position: 'relative',
          padding: '36px',
          boxShadow: '0 24px 70px rgba(0,0,0,0.65)',
          outline: 'none'
        }}
      >
        {/* Action bar (hidden when printing) */}
        <div
          className="no-print"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
            paddingBottom: '20px',
            marginBottom: '24px',
            borderBottom: '1px solid var(--border-subtle)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Sparkles size={16} style={{ color: 'var(--accent-cyan)' }} />
            <span style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1.5px', color: 'var(--accent-cyan)' }}>
              Executive Resume
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
            <button
              onClick={() => copyText(`${window.location.origin}/resume`, setLinkState)}
              className="cta-button-outline"
              style={{ padding: '8px 14px', fontSize: '12.5px', fontWeight: 700 }}
              title="Copy a shareable link to this resume"
            >
              {linkState === 'copied' ? <Check size={14} /> : <Link2 size={14} />}
              {copyLabel(linkState, 'Copy Link', 'Link Copied!')}
            </button>

            <button
              onClick={() => copyText(EXECUTIVE_BIO_TEXT, setBioState)}
              className="cta-button-outline"
              style={{
                padding: '8px 14px',
                fontSize: '12.5px',
                fontWeight: 700,
                borderColor: bioState === 'copied' ? '#4ade80' : undefined,
                color: bioState === 'copied' ? '#4ade80' : undefined
              }}
            >
              {bioState === 'copied' ? <Check size={14} /> : <Copy size={14} />}
              {copyLabel(bioState, 'Copy Executive Bio', 'Bio Copied!')}
            </button>

            <button onClick={() => window.print()} className="cta-button" style={{ padding: '8px 16px', fontSize: '12.5px', fontWeight: 800 }}>
              <Printer size={14} /> Print / Save PDF
            </button>

            <button
              onClick={onClose}
              aria-label="Close Executive Resume"
              style={{
                background: 'var(--border-subtle)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '50%',
                padding: '8px',
                cursor: 'pointer',
                color: 'var(--text-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Header */}
        <div style={{ marginBottom: '20px' }}>
          <h2 id="resume-title" className="resume-accent" style={{ fontSize: '30px', fontWeight: 800, margin: '0 0 6px', color: 'var(--text-primary)' }}>
            Enrique Chan
          </h2>
          <p className="resume-accent" style={{ fontSize: '16px', fontWeight: 700, color: 'var(--accent-cyan)', margin: '0 0 8px' }}>
            Staff AI Technical Deployment Lead (Delta) &amp; Outbound Product Manager · Google Cloud
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', fontSize: '13px', color: 'var(--text-secondary)' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <MapPin size={13} style={{ color: 'var(--accent-cyan)' }} /> Seattle, WA
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Mail size={13} style={{ color: 'var(--accent-cyan)' }} /> enriq@google.com • enriquekalven@gmail.com
            </span>
            <a href="https://www.linkedin.com/in/enriquechan/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--accent-cyan)', fontWeight: 600 }}>
              <Linkedin size={13} /> linkedin.com/in/enriquechan
            </a>
            <a href="https://github.com/enriquekalven" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--accent-cyan)', fontWeight: 600 }}>
              <Github size={13} /> github.com/enriquekalven
            </a>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Link2 size={13} style={{ color: 'var(--accent-cyan)' }} /> enriquekchan.web.app/resume
            </span>
          </div>
        </div>

        {/* Summary & focus */}
        <div
          className="resume-block"
          style={{ background: 'rgba(56, 189, 248, 0.06)', border: '1px solid var(--border-subtle)', borderRadius: '16px', padding: '18px 22px', marginBottom: '20px' }}
        >
          <p style={{ fontSize: '14px', lineHeight: 1.65, color: 'var(--text-primary)', marginBottom: '12px' }}>
            <strong>Executive Summary:</strong> 15+ years leading Enterprise Cloud, Data, and Agentic AI transformations across{' '}
            <strong>Google Cloud</strong>, <strong>AWS</strong>, and <strong>Accenture</strong> — spanning executive deal strategy ($2B+ multi-year deal
            scope), analyst leadership (technical RFI and demo lead for 4 Gartner® &amp; Forrester™ Leader wins), and hands-on production engineering
            (40M+ Olympic viewers served, 32K+ developers enabled).
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
            <span className="resume-accent" style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', color: 'var(--accent-cyan)', letterSpacing: '0.8px' }}>
              Leadership Focus:
            </span>
            {LEADERSHIP_FOCUS.map((pill) => (
              <span
                key={pill}
                style={{ fontSize: '11.5px', fontWeight: 600, padding: '3px 10px', borderRadius: '999px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-subtle)', color: 'var(--text-secondary)' }}
              >
                {pill}
              </span>
            ))}
          </div>
        </div>

        {/* Key metrics */}
        <div className="resume-block resume-metrics" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '12px', marginBottom: '24px' }}>
          {METRICS.map((item) => (
            <div key={item.label} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-subtle)', borderRadius: '14px', padding: '12px 14px', textAlign: 'center' }}>
              <div className="resume-accent" style={{ fontSize: '22px', fontWeight: 800, color: 'var(--accent-cyan)' }}>{item.metric}</div>
              <div style={{ fontSize: '11.5px', color: 'var(--text-secondary)', fontWeight: 600 }}>{item.label}</div>
            </div>
          ))}
        </div>

        {/* Experience */}
        <div style={{ marginBottom: '24px' }}>
          <h3 className="resume-accent" style={{ ...sectionHeadingStyle, fontSize: '16px', letterSpacing: '1.2px', marginBottom: '14px' }}>
            <Briefcase size={16} /> Career Experience
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {ROLES.map((job) => (
              <div key={job.role} className="resume-block" style={boxStyle}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '8px', marginBottom: '8px' }}>
                  <div>
                    <span style={{ fontWeight: 800, fontSize: '15px', color: 'var(--text-primary)' }}>{job.role}</span>
                    <span className="resume-accent" style={{ color: 'var(--accent-cyan)', fontWeight: 700, fontSize: '13.5px', marginLeft: '8px' }}>
                      • {job.company}
                    </span>
                    {job.note && <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '2px' }}>{job.note}</div>}
                  </div>
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: 700 }}>{job.period}</span>
                </div>
                <ul style={{ paddingLeft: '18px', margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {job.bullets.map((bullet) => (
                    <li key={bullet} style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Awards & certifications */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
          <div className="resume-block" style={boxStyle}>
            <h4 className="resume-accent" style={sectionHeadingStyle}>
              <Award size={15} /> Awards
            </h4>
            <ul style={{ paddingLeft: '16px', margin: 0, fontSize: '12.5px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              {AWARDS.map((award) => (
                <li key={award}>{award}</li>
              ))}
            </ul>
          </div>

          <div className="resume-block" style={boxStyle}>
            <h4 className="resume-accent" style={sectionHeadingStyle}>
              <CheckCircle2 size={15} /> Cloud &amp; AI Certifications
            </h4>
            <p style={{ fontSize: '12.5px', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
              <strong>Google Cloud (8):</strong> Professional ML Engineer, Cloud Architect, Cloud Security Engineer, Cloud Database Engineer, Network
              Engineer, Workspace Administrator; Associate Cloud Engineer; Cloud Digital Leader.
              <br />
              <strong>AWS (6):</strong> Solutions Architect Professional &amp; Associate, Security Specialty, Data Analytics Specialty, Developer Associate,
              SysOps Administrator Associate.
              <br />
              <strong>Also:</strong> Scaled Agile SAFe 4 · Splunk Certified Power User.
            </p>
          </div>
        </div>
      </motion.div>
    </div>,
    document.body
  );
}
