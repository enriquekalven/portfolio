import { useState } from 'react';
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
  Sparkles
} from 'lucide-react';

const EXECUTIVE_BIO_TEXT = `Enrique Chan is a Staff AI Technical Deployment Lead (TDL) for Google Cloud Delta and Outbound Product Manager for Gemini Enterprise & Agent Platform in Seattle, WA. With 15+ years of experience across Google Cloud, AWS, and Accenture, he specializes in turning frontier LLMs into production-grade, governed Agentic Workflows for Fortune 500 enterprises.

Key Highlights:
• $2B+ Multi-Year Deal Scope: Core deal & technical scoping team for marquee enterprise AI transformations (including Ford and Intel), generating $63M in Google Services Funds and $32M in Partner Services Funds.
• 4x Gartner® & Forrester™ Leader Wins (2026): Technical RFI & Live Demo Lead for Gartner MQ Enterprise AI Assistants (Inaugural Leader), Gartner MQ CNAP (3rd consecutive year), The Forrester Wave: AI Platforms (Top Strategy Score), and Gartner MQ AIADP (Highest Ability to Execute).
• Marquee Production Scale: Owned technical strategy for the NBC Paris 2024 Olympic Games AI Concierge (40M+ viewers, 90M+ queries, 0.5% error rate on Vertex AI) and engineered Disney+ global cloud scaling (100M+ users).
• Global Developer & Thought Leadership: Co-led Advent of Agents (32,000+ developers, Top 5 global GitHub repo, 5T Gemini tokens, Silver Google AI Award) and co-authored the Kaggle "Intro to Agents" Executive Whitepaper (1.5M+ registered learners).
• 19x Multi-Cloud Certifications: 8x Google Cloud (including Professional ML Engineer & Cloud Architect) and 6x AWS (including Solutions Architect Professional & Security Specialty).

Contact: enriq@google.com | enriquekalven@gmail.com | linkedin.com/in/enriquechan | enriquekchan.web.app`;

export function ExecutiveResumeModal({ onClose }: { onClose: () => void }) {
  const [bioCopied, setBioCopied] = useState(false);

  const handleCopyBio = () => {
    navigator.clipboard.writeText(EXECUTIVE_BIO_TEXT);
    setBioCopied(true);
    setTimeout(() => setBioCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="resume-modal-backdrop"
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
        zIndex: 1250,
        padding: '24px'
      }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 20 }}
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
          boxShadow: '0 24px 70px rgba(0,0,0,0.65)'
        }}
      >
        {/* Top Action Bar (Hidden when printing) */}
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
            <span
              style={{
                fontSize: '11px',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                color: 'var(--accent-cyan)'
              }}
            >
              Recruiter &amp; Executive Brief (ATS-Friendly)
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
            <button
              onClick={handleCopyBio}
              className="cta-button-outline"
              style={{
                padding: '8px 14px',
                fontSize: '12.5px',
                fontWeight: 700,
                borderColor: bioCopied ? '#4ade80' : undefined,
                color: bioCopied ? '#4ade80' : undefined
              }}
            >
              {bioCopied ? (
                <>
                  <Check size={14} /> Copied Executive Bio!
                </>
              ) : (
                <>
                  <Copy size={14} /> Copy Executive Bio
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="cta-button"
              style={{
                padding: '8px 16px',
                fontSize: '12.5px',
                fontWeight: 800
              }}
            >
              <Printer size={14} /> Print / Save PDF
            </button>

            <button
              onClick={onClose}
              aria-label="Close Executive Resume"
              style={{
                background: 'rgba(255,255,255,0.08)',
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

        {/* Printable Executive Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '20px',
            marginBottom: '24px'
          }}
        >
          <div>
            <h2 style={{ fontSize: '30px', fontWeight: 800, margin: '0 0 6px', color: 'var(--text-primary)' }}>
              Enrique Chan
            </h2>
            <p style={{ fontSize: '16px', fontWeight: 700, color: 'var(--accent-cyan)', margin: '0 0 8px' }}>
              Staff AI Technical Deployment Lead (Delta) &amp; Outbound Product Manager @ Google Cloud
            </p>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '14px',
                fontSize: '13px',
                color: 'var(--text-secondary)'
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <MapPin size={13} style={{ color: 'var(--accent-cyan)' }} /> Seattle, WA
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Mail size={13} style={{ color: 'var(--accent-cyan)' }} /> enriq@google.com • enriquekalven@gmail.com
              </span>
              <a
                href="https://www.linkedin.com/in/enriquechan/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--accent-cyan)', fontWeight: 600 }}
              >
                <Linkedin size={13} /> linkedin.com/in/enriquechan
              </a>
              <a
                href="https://github.com/enriquekalven"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--accent-cyan)', fontWeight: 600 }}
              >
                <Github size={13} /> github.com/enriquekalven
              </a>
            </div>
          </div>
        </div>

        {/* Executive Summary & Target Domains */}
        <div
          style={{
            background: 'rgba(56, 189, 248, 0.06)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '16px',
            padding: '18px 22px',
            marginBottom: '24px'
          }}
        >
          <p style={{ fontSize: '14px', lineHeight: 1.65, color: 'var(--text-primary)', marginBottom: '12px' }}>
            <strong>Executive Summary:</strong> 15+ years leading large-scale Enterprise Cloud, Data, and Agentic AI transformations across <strong>Google Cloud</strong>, <strong>AWS</strong>, and <strong>Accenture</strong>. Proven track record bridging executive deal strategy ($2B+ multi-year commits), market-defining analyst leadership (4x Gartner® &amp; Forrester™ Leader wins), and hands-on production engineering (40M+ Olympic viewers served, 32K+ developers enabled).
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
            <span style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', color: 'var(--accent-cyan)', letterSpacing: '0.8px' }}>
              Leadership Focus:
            </span>
            {[
              'Forward Deployed Engineering (FDE) Leadership',
              'Principal / Staff AI Architecture',
              'AI Product Management & GTM Strategy',
              'Enterprise Agent Governance (ADK / A2A)',
              'Executive Keynotes & CXO Advisory'
            ].map((pill) => (
              <span
                key={pill}
                style={{
                  fontSize: '11.5px',
                  fontWeight: 600,
                  padding: '3px 10px',
                  borderRadius: '999px',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-secondary)'
                }}
              >
                {pill}
              </span>
            ))}
          </div>
        </div>

        {/* Key Quantified Metrics Bar */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '12px',
            marginBottom: '28px'
          }}
        >
          {[
            { metric: '$2B+', label: 'Multi-Year Cloud Commit Scope' },
            { metric: '4x', label: 'Gartner® & Forrester™ Leader Wins' },
            { metric: '40M+', label: 'NBC Paris Olympic Viewers Served' },
            { metric: '32K+', label: 'Developers (Advent of Agents)' },
            { metric: '1.5M+', label: 'Kaggle Whitepaper Learners' }
          ].map((item) => (
            <div
              key={item.label}
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '14px',
                padding: '12px 14px',
                textAlign: 'center'
              }}
            >
              <div style={{ fontSize: '22px', fontWeight: 800, color: 'var(--accent-cyan)' }}>{item.metric}</div>
              <div style={{ fontSize: '11.5px', color: 'var(--text-secondary)', fontWeight: 600 }}>{item.label}</div>
            </div>
          ))}
        </div>

        {/* Career Timeline Highlights */}
        <div style={{ marginBottom: '28px' }}>
          <h3
            style={{
              fontSize: '16px',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '1.2px',
              color: 'var(--accent-cyan)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '16px'
            }}
          >
            <Briefcase size={16} /> Career Experience Summary
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              {
                role: 'Staff Technical Deployment Lead (TDL) | Delta & Outbound PM (Gemini Enterprise)',
                company: 'Google Cloud',
                period: 'Dec 2025 — Present',
                bullets: [
                  'Lead Forward Deployed Engineering (FDE) operating model across 15 top Fortune 500 accounts (including Ford and Intel); core deal team capturing $2B+ multi-year commitment ($63M Google Services, $32M Partner Services).',
                  'Technical RFI & Live Demo Lead for 4 consecutive Analyst Leader recognitions: Gartner® MQ Enterprise AI Assistants (Inaugural Leader), Gartner® MQ CNAP (3rd yr), Forrester Wave™: AI Platforms (Top Strategy Score), and Gartner® MQ AIADP (Highest Ability to Execute).',
                  'Co-led Advent of Agents Seasons 1 & 2 (32,000+ developers, Top 5 Global GitHub repo, 5T Gemini tokens, Silver Google AI Award) and co-authored Kaggle Executive "Intro to Agents" Whitepaper (1.5M+ registered learners).',
                  'Architected AgentOps Cockpit (Governance-as-Code), audited 44 enterprise agents, hardened 450+ sample agents, and launched GA Agent Governance for Gemini Enterprise App.'
                ]
              },
              {
                role: 'Senior AI & Data Consultant | Cloud Professional Services (PSO)',
                company: 'Google Cloud',
                period: 'Jun 2021 — Dec 2025',
                bullets: [
                  'Delivered 24 enterprise AI customer engagements ($14.6M delivery revenue, 100% CSAT) and partnered to close 21 enterprise AI deals ($11M revenue).',
                  'Owned technical strategy for the NBC Paris 2024 Olympic Games AI Concierge (40M+ viewers, 90M+ queries, 0.5% error rate on Vertex AI Provisioned Throughput).',
                  'Engineered custom RLHF localization & captioning pipelines for Warner Bros. Discovery ($960K expansion) and scaled Boeing Analytical Platform from 1 to 29 business units via Data Mesh.'
                ]
              },
              {
                role: 'Senior Cloud Architect | ProServe Public Sector',
                company: 'Amazon Web Services (AWS)',
                period: 'May 2020 — May 2021',
                bullets: [
                  'Led AWS Well-Architected Framework reviews, distributed TypeScript/CDK microservices, Control Tower multi-account Landing Zones, and Kinesis-to-Splunk observability.'
                ]
              },
              {
                role: 'Senior Manager | Cloud Strategy & Data Analytics',
                company: 'Accenture',
                period: 'May 2011 — May 2020',
                bullets: [
                  'Sold $10M+ in delivery work and generated $25M+ in pre-sales pipeline; engineered Disney+ global cloud scaling (100M+ users) and Walt Disney World MyMagic+ (FastPass+ & MagicBands).'
                ]
              }
            ].map((job) => (
              <div
                key={job.role}
                style={{
                  padding: '16px 20px',
                  borderRadius: '14px',
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    flexWrap: 'wrap',
                    gap: '8px',
                    marginBottom: '8px'
                  }}
                >
                  <div>
                    <span style={{ fontWeight: 800, fontSize: '15px', color: 'var(--text-primary)' }}>{job.role}</span>
                    <span style={{ color: 'var(--accent-cyan)', fontWeight: 700, fontSize: '13.5px', marginLeft: '8px' }}>
                      • {job.company}
                    </span>
                  </div>
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: 700 }}>{job.period}</span>
                </div>
                <ul style={{ paddingLeft: '18px', margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {job.bullets.map((b, i) => (
                    <li key={i} style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications & Executive Recognition */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
          <div
            style={{
              padding: '16px 20px',
              borderRadius: '14px',
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid var(--border-subtle)'
            }}
          >
            <h4
              style={{
                fontSize: '13px',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                color: 'var(--accent-cyan)',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                marginBottom: '10px'
              }}
            >
              <Award size={15} /> Executive Awards
            </h4>
            <ul style={{ paddingLeft: '16px', margin: 0, fontSize: '12.5px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              <li>Silver Google AI Award (SWIFTY, 2026 Q3) — Advent of Agents</li>
              <li>Google Cloud CEO Thomas Kurian Customer Empathy Award (2024)</li>
              <li>Google Cloud GTM Tech Impact Award (NBC Olympics Concierge)</li>
              <li>Google Cloud GTM Excellence Award (Wayfair Agentic Retail)</li>
            </ul>
          </div>

          <div
            style={{
              padding: '16px 20px',
              borderRadius: '14px',
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid var(--border-subtle)'
            }}
          >
            <h4
              style={{
                fontSize: '13px',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                color: 'var(--accent-cyan)',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                marginBottom: '10px'
              }}
            >
              <CheckCircle2 size={15} /> 19x Cloud &amp; AI Certifications
            </h4>
            <p style={{ fontSize: '12.5px', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
              <strong>8x Google Cloud Professional:</strong> Machine Learning Engineer, Cloud Architect, Data Engineer, Security Engineer, Database Engineer, Network Engineer, Workspace Admin, Associate Cloud Engineer.
              <br />
              <strong>6x AWS Certified:</strong> Solutions Architect Pro, Security Specialty, Data Analytics Specialty, Developer, SysOps, SAA.
              <br />
              <strong>Agile &amp; Data:</strong> Scaled Agile SAFe 4, Splunk Power User.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
