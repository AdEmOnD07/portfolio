import React from 'react'

function Home({ onNavigate }) {
  return (
    <div className="home-container">
      <section className="hero-section">
        {/* Left Side: Copy */}
        <div className="hero-content">
          <div className="hero-tagline">welcome to my workspace</div>
          <h1 className="hero-title">
            Designing <span style={{ color: 'var(--color-orange)' }}>clean</span> code.<br />
            Building <span style={{ color: 'var(--color-orange)' }}>scalable</span> systems.
          </h1>
          <p className="hero-description">
            I am a full-stack engineer and interface designer. I build high-performance web applications using React, Node.js, and custom cloud-native architectures.
          </p>
          <div className="hero-ctas">
            <button className="btn btn-primary" onClick={() => onNavigate('projects')}>
              Explore Projects
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
            <button className="btn btn-secondary" onClick={() => onNavigate('contact')}>
              Let's Connect
            </button>
            <button className="btn btn-code" onClick={() => onNavigate('about')}>
              cat resume.md
            </button>
          </div>
        </div>

        {/* Right Side: Interactive Terminal */}
        <div className="terminal-wrapper">
          <div className="terminal-mock glass-panel">
            <div className="terminal-header">
              <div className="terminal-dot red"></div>
              <div className="terminal-dot yellow"></div>
              <div className="terminal-dot green"></div>
              <div className="terminal-title">developer@workspace: ~/portfolio</div>
            </div>
            <div className="terminal-body">
              <div className="terminal-line">
                <span className="terminal-prompt">$</span>
                <span className="terminal-highlight">neofetch</span>
              </div>
              <div className="terminal-line">
                <span style={{ color: 'var(--color-orange)', fontWeight: 'bold' }}>ademond07</span>@github.com
              </div>
              <div className="terminal-line">
                <span className="terminal-comment">-------------------------</span>
              </div>
              <div className="terminal-line">
                <span className="terminal-prompt">OS:</span> React Engine OS 18.3
              </div>
              <div className="terminal-line">
                <span className="terminal-prompt">Shell:</span> bash v5.2.15
              </div>
              <div className="terminal-line">
                <span className="terminal-prompt">Stack:</span> React, Vite, Node, CSS Grid, Express
              </div>
              <div className="terminal-line">
                <span className="terminal-prompt">Focus:</span> Sleek aesthetics & micro-interactions
              </div>
              <div className="terminal-line">
                <span className="terminal-prompt">Status:</span> Available for interesting contracts
              </div>
              <div className="terminal-line" style={{ marginTop: '16px' }}>
                <span className="terminal-prompt">$</span>
                <span className="terminal-highlight">node -v</span>
              </div>
              <div className="terminal-line">
                <span className="terminal-success">v20.12.2 (LTS)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-grid">
        <div className="stat-item">
          <div className="stat-value">05+</div>
          <div className="stat-label">Years Exp</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">30+</div>
          <div className="stat-label">Projects Done</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">99%</div>
          <div className="stat-label">Build Success</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">1.4k</div>
          <div className="stat-label">Git Commits</div>
        </div>
      </section>
    </div>
  )
}

export default Home
