import { ArrowLeft, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

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

function MediaPage() {
  return (
    <div className="app media-page">
      <div className="layout">
        <header className="header">
          <div>
            <Link to="/" className="back-link">
              <ArrowLeft size={20} />
              <span>Back to Portfolio</span>
            </Link>
            <h1 className="name">Media & Talks</h1>
            <p className="bio">
              A collection of technical demos, thought leadership talks, and presentations on
              <span className="highlight-orange"> Agentic AI</span> and Cloud Infrastructure.
            </p>
          </div>
        </header>

        <main className="content">
          <section className="section">
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
                    <span className="tag">{item.type}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default MediaPage;
