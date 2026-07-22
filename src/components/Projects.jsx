import React, { useState } from 'react'

function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'HashDash Analytics',
      category: 'fullstack',
      tags: ['React', 'Node.js', 'Express', 'Recharts'],
      desc: 'A premium developer dashboard featuring live log streams, performance tracking, server status analytics, and custom database reports.',
      demoLink: 'https://github.com',
      codeLink: 'https://github.com',
      svgMarkup: (
        <svg width="100%" height="100%" viewBox="0 0 340 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="340" height="200" fill="#0d0f12" />
          <path d="M 0 20 L 340 20 M 0 40 L 340 40 M 0 80 L 340 80 M 0 120 L 340 120 M 0 160 L 340 160" stroke="rgba(255,255,255,0.015)" strokeWidth="1" />
          <path d="M 20 0 L 20 200 M 40 0 L 40 200 M 80 0 L 80 200 M 120 0 L 120 200 M 160 0 L 160 200 M 200 0 L 200 200 M 240 0 L 240 200 M 280 0 L 280 200" stroke="rgba(255,255,255,0.015)" strokeWidth="1" />
          {/* Mock Dashboard Layout */}
          <rect x="15" y="15" width="310" height="170" rx="4" stroke="rgba(255,255,255,0.05)" strokeWidth="1" fill="rgba(16, 18, 22, 0.5)" />
          {/* Header Row */}
          <line x1="15" y1="40" x2="325" y2="40" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
          <circle cx="28" cy="27" r="4" fill="#ff5500" />
          <rect x="40" y="24" width="60" height="6" rx="2" fill="rgba(255,255,255,0.2)" />
          {/* Mini Cards */}
          <rect x="25" y="50" width="80" height="36" rx="3" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.05)" />
          <rect x="25" y="58" width="40" height="4" rx="2" fill="var(--color-orange)" fillOpacity="0.4" />
          <rect x="25" y="68" width="50" height="8" rx="2" fill="#fff" fillOpacity="0.8" />
          
          <rect x="115" y="50" width="80" height="36" rx="3" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.05)" />
          <rect x="115" y="58" width="40" height="4" rx="2" fill="var(--color-orange)" />
          <rect x="115" y="68" width="50" height="8" rx="2" fill="#fff" fillOpacity="0.8" />
          
          <rect x="205" y="50" width="110" height="36" rx="3" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.05)" />
          <rect x="205" y="58" width="40" height="4" rx="2" fill="rgba(255,255,255,0.2)" />
          <rect x="205" y="68" width="70" height="8" rx="2" fill="#fff" fillOpacity="0.8" />
          
          {/* Main Dashboard Chart */}
          <rect x="25" y="98" width="290" height="75" rx="3" fill="rgba(255,255,255,0.01)" stroke="rgba(255,255,255,0.05)" />
          {/* Gridlines in chart */}
          <line x1="25" y1="120" x2="315" y2="120" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
          <line x1="25" y1="145" x2="315" y2="145" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
          {/* Spline Area Chart */}
          <path d="M 30 160 L 70 120 L 110 140 L 150 110 L 190 135 L 230 90 L 270 115 L 310 80" stroke="var(--color-orange)" strokeWidth="2" strokeLinecap="round" />
          <path d="M 30 160 L 70 120 L 110 140 L 150 110 L 190 135 L 230 90 L 270 115 L 310 80 L 310 170 L 30 170 Z" fill="url(#orangeGradChart)" opacity="0.1" />
          
          <defs>
            <linearGradient id="orangeGradChart" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ff5500" />
              <stop offset="100%" stopColor="#ff5500" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      )
    },
    {
      id: 2,
      title: 'NovaForm Cloud Core',
      category: 'backend',
      tags: ['Express', 'Node.js', 'MongoDB', 'JWT'],
      desc: 'An automated backend server processing secure HTML forms without client-side setup. Featuring spam filtering (Akismet) and JSON API integrations.',
      demoLink: 'https://github.com',
      codeLink: 'https://github.com',
      svgMarkup: (
        <svg width="100%" height="100%" viewBox="0 0 340 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="340" height="200" fill="#0d0f12" />
          {/* Code IDE structure */}
          <rect x="15" y="15" width="310" height="170" rx="4" stroke="rgba(255,255,255,0.05)" strokeWidth="1" fill="rgba(16, 18, 22, 0.5)" />
          {/* File Tab */}
          <rect x="25" y="25" width="80" height="18" rx="2" fill="rgba(255, 85, 0, 0.05)" stroke="rgba(255, 85, 0, 0.15)" />
          <circle cx="34" cy="34" r="3" fill="var(--color-orange)" />
          <rect x="42" y="32" width="45" height="4" rx="2" fill="rgba(255,255,255,0.4)" />
          {/* Lines panel */}
          <line x1="15" y1="43" x2="325" y2="43" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
          {/* Code lines */}
          <text x="25" y="65" fill="#5c6270" fontFamily="monospace" fontSize="9">1</text>
          <text x="25" y="80" fill="#5c6270" fontFamily="monospace" fontSize="9">2</text>
          <text x="25" y="95" fill="#5c6270" fontFamily="monospace" fontSize="9">3</text>
          <text x="25" y="110" fill="#5c6270" fontFamily="monospace" fontSize="9">4</text>
          <text x="25" y="125" fill="#5c6270" fontFamily="monospace" fontSize="9">5</text>
          <text x="25" y="140" fill="#5c6270" fontFamily="monospace" fontSize="9">6</text>
          <text x="25" y="155" fill="#5c6270" fontFamily="monospace" fontSize="9">7</text>
          
          <g fontFamily="monospace" fontSize="9" fill="rgba(255,255,255,0.8)">
            <text x="45" y="65"><tspan fill="var(--color-orange)">import</tspan> express <tspan fill="var(--color-orange)">from</tspan> <tspan fill="#a3be8c">'express'</tspan></text>
            <text x="45" y="80"><tspan fill="var(--color-orange)">const</tspan> app = express()</text>
            <text x="45" y="95"><tspan fill="#8fbcbb">app</tspan>.post(<tspan fill="#a3be8c">'/v1/submit'</tspan>, (req, res) =&gt; &#123;</text>
            <text x="65" y="110"><tspan fill="var(--color-orange)">const</tspan> &#123; name, email &#125; = req.body</text>
            <text x="65" y="125"><tspan fill="var(--color-orange)">await</tspan> db.save(&#123; name, email &#125;)</text>
            <text x="65" y="140">res.status(<tspan fill="#b48ead">200</tspan>).json(&#123; ok: <tspan fill="#b48ead">true</tspan> &#125;)</text>
            <text x="45" y="155">&#125;)</text>
          </g>
        </svg>
      )
    },
    {
      id: 3,
      title: 'OrangeGrid Builder',
      category: 'frontend',
      tags: ['React', 'CSS Grid', 'HTML5', 'LocalStorage'],
      desc: 'An interactive drag-and-drop CSS Grid code generator. Design complex layouts and instantly copy clean, cross-browser CSS and HTML output.',
      demoLink: 'https://github.com',
      codeLink: 'https://github.com',
      svgMarkup: (
        <svg width="100%" height="100%" viewBox="0 0 340 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="340" height="200" fill="#0d0f12" />
          <rect x="15" y="15" width="310" height="170" rx="4" stroke="rgba(255,255,255,0.05)" strokeWidth="1" fill="rgba(16, 18, 22, 0.5)" />
          {/* Mock Grid editor panel */}
          <rect x="25" y="25" width="200" height="150" rx="2" fill="rgba(255,255,255,0.01)" stroke="rgba(255,255,255,0.04)" strokeDasharray="3 3" />
          
          {/* Grid Blocks */}
          <rect x="30" y="30" width="90" height="40" rx="2" fill="var(--color-orange)" fillOpacity="0.15" stroke="var(--color-orange)" strokeWidth="1" />
          <text x="75" y="52" fill="#fff" fontFamily="monospace" fontSize="8" textAnchor="middle">header</text>
          
          <rect x="125" y="30" width="95" height="40" rx="2" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          <text x="172" y="52" fill="rgba(255,255,255,0.4)" fontFamily="monospace" fontSize="8" textAnchor="middle">nav</text>
          
          <rect x="30" y="75" width="55" height="95" rx="2" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          <text x="57" y="125" fill="rgba(255,255,255,0.4)" fontFamily="monospace" fontSize="8" textAnchor="middle">aside</text>
          
          <rect x="90" y="75" width="130" height="95" rx="2" fill="var(--color-orange)" fillOpacity="0.05" stroke="var(--color-orange-border)" strokeWidth="1" />
          <text x="155" y="125" fill="var(--color-orange)" fontFamily="monospace" fontSize="8" textAnchor="middle">main-content</text>
          
          {/* Right Editor bar */}
          <rect x="235" y="25" width="80" height="150" rx="2" fill="rgba(0,0,0,0.2)" stroke="rgba(255,255,255,0.05)" />
          {/* Slider line mock */}
          <line x1="245" y1="40" x2="305" y2="40" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeLinecap="round" />
          <circle cx="280" cy="40" r="4" fill="var(--color-orange)" />
          
          <line x1="245" y1="60" x2="305" y2="60" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeLinecap="round" />
          <circle cx="255" cy="60" r="4" fill="var(--color-orange)" />
          
          {/* Code print box */}
          <rect x="242" y="85" width="66" height="80" rx="2" fill="#090a0c" />
          <text x="248" y="98" fill="#5c6270" fontFamily="monospace" fontSize="6">CSS Code</text>
          <text x="248" y="110" fill="var(--color-orange)" fontFamily="monospace" fontSize="6">display: grid;</text>
          <text x="248" y="120" fill="rgba(255,255,255,0.7)" fontFamily="monospace" fontSize="6">grid-gap: 5px;</text>
          <text x="248" y="130" fill="rgba(255,255,255,0.7)" fontFamily="monospace" fontSize="6">grid-template-</text>
          <text x="248" y="140" fill="rgba(255,255,255,0.7)" fontFamily="monospace" fontSize="6">columns: 1fr;</text>
        </svg>
      )
    },
    {
      id: 4,
      title: 'VeloChat Shell',
      category: 'fullstack',
      tags: ['React', 'WebSockets', 'Node.js', 'Tailwind'],
      desc: 'A super-responsive real-time chat client styled as a terminal command-line prompt. Features room creation, direct messaging, and custom themes.',
      demoLink: 'https://github.com',
      codeLink: 'https://github.com',
      svgMarkup: (
        <svg width="100%" height="100%" viewBox="0 0 340 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="340" height="200" fill="#0d0f12" />
          <rect x="15" y="15" width="310" height="170" rx="4" stroke="rgba(255,255,255,0.05)" strokeWidth="1" fill="rgba(16, 18, 22, 0.5)" />
          {/* Chat header */}
          <line x1="15" y1="40" x2="325" y2="40" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
          <circle cx="28" cy="27" r="3" fill="#10b981" />
          <rect x="36" y="24" width="70" height="6" rx="2" fill="rgba(255,255,255,0.3)" />
          
          {/* Chat bubbles (Left/Right) */}
          <path d="M 25 50 h 100 a 4 4 0 0 1 4 4 v 16 a 4 4 0 0 1 -4 4 h -96 l -4 4 z" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.05)" />
          <rect x="32" y="58" width="80" height="4" rx="2" fill="rgba(255,255,255,0.6)" />
          
          <path d="M 315 88 h -120 a 4 4 0 0 0 -4 4 v 16 a 4 4 0 0 0 4 4 h 116 l 4 4 z" fill="var(--color-orange-glow)" stroke="var(--color-orange-border)" />
          <rect x="198" y="96" width="100" height="4" rx="2" fill="#fff" />
          
          <path d="M 25 126 h 80 a 4 4 0 0 1 4 4 v 16 a 4 4 0 0 1 -4 4 h -76 l -4 4 z" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.05)" />
          <rect x="32" y="134" width="60" height="4" rx="2" fill="rgba(255,255,255,0.6)" />
          
          {/* Chat Input */}
          <line x1="15" y1="160" x2="325" y2="160" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
          <text x="25" y="172" fill="var(--color-orange)" fontFamily="monospace" fontSize="8" fontWeight="bold">&gt;</text>
          <rect x="35" y="167" width="100" height="6" rx="2" fill="rgba(255,255,255,0.1)" />
          <rect x="138" y="167" width="1" height="6" fill="var(--color-orange)" />
        </svg>
      )
    }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter)

  return (
    <div className="projects-wrapper">
      <div className="projects-header animate-fade-in">
        <div className="section-subtitle">
          <span>[ 03 ]</span>
          <span>My Projects</span>
        </div>
        <h2 className="section-title">Selected Works</h2>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem' }}>
          Explore some of the applications and modules I have developed.
        </p>
      </div>

      {/* Filter Bar */}
      <div className="filter-bar">
        <button 
          className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
          onClick={() => setActiveFilter('all')}
        >
          // all_projects
        </button>
        <button 
          className={`filter-btn ${activeFilter === 'frontend' ? 'active' : ''}`}
          onClick={() => setActiveFilter('frontend')}
        >
          // frontend
        </button>
        <button 
          className={`filter-btn ${activeFilter === 'backend' ? 'active' : ''}`}
          onClick={() => setActiveFilter('backend')}
        >
          // backend
        </button>
        <button 
          className={`filter-btn ${activeFilter === 'fullstack' ? 'active' : ''}`}
          onClick={() => setActiveFilter('fullstack')}
        >
          // full_stack
        </button>
      </div>

      {/* Projects Cards Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <article key={project.id} className="project-card glass-panel">
            <div className="project-img-wrapper">
              {project.svgMarkup}
            </div>
            <div className="project-content">
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="project-tag">{tag}</span>
                ))}
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.desc}</p>
              
              <div className="project-links">
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="project-link">
                  <button className="btn btn-secondary" style={{ width: '100%', padding: '8px 12px', fontSize: '0.85rem' }}>
                    Live Demo
                  </button>
                </a>
                <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="project-link">
                  <button className="btn btn-code" style={{ width: '100%', padding: '8px 12px', fontSize: '0.85rem', borderStyle: 'solid' }}>
                    Source Code
                  </button>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Projects
