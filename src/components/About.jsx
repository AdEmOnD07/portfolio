
import React from 'react'

function About() {
  const skills = {
    frontend: ['React / Next.js', 'JavaScript (ES6+)', 'HTML5 / CSS Grid', 'CSS Modules / Sass', 'Responsive Design'],
    backend: ['Node.js', 'Express', 'RESTful APIs', 'SQL / NoSQL', 'Authentication (JWT)'],
    tools: ['Git / GitHub', 'Webpack / Vite', 'Docker', 'AWS / Vercel', 'Postman']
  }

  const experiences = [
    {
      role: 'Lead Developer',
      company: 'PixelForge Studios',
      duration: '2024 - Present',
      desc: 'Architecting frontend systems, directing code reviews, and optimizing build pipelines for SaaS applications. Reduced loading times by 40% using Vite and code-splitting.'
    },
    {
      role: 'Senior Full-Stack Engineer',
      company: 'NexusTech Labs',
      duration: '2022 - 2024',
      desc: 'Developed REST APIs using Node.js and created custom dashboards with React. Maintained database migrations and improved querying speed of MongoDB schemas.'
    },
    {
      role: 'Full-Stack Developer',
      company: 'SyncMedia Inc.',
      duration: '2021 - 2022',
      desc: 'Implemented frontend features and UI components. Styled responsive page elements and integrated third-party payment gateways (Stripe).'
    }
  ]

  return (
    <section className="about-section">
      {/* Left Column: Interactive SVG Avatar & Quick Info */}
      <div className="profile-card glass-panel">
        <div className="profile-img-wrapper" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0d0f12' }}>
          {/* Cyberpunk SVG Profile Graphic */}
          <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="orangeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff5500" />
                <stop offset="100%" stopColor="#ffb380" />
              </linearGradient>
              <linearGradient id="cyberGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#101216" />
                <stop offset="100%" stopColor="#1e222b" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Background Grid inside avatar */}
            <rect width="200" height="200" fill="url(#cyberGrad)" />
            <path d="M 0 40 L 200 40 M 0 80 L 200 80 M 0 120 L 200 120 M 0 160 L 200 160" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
            <path d="M 40 0 L 40 200 M 80 0 L 80 200 M 120 0 L 120 200 M 160 0 L 160 200" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />

            {/* Glowing developer code brackets decoration */}
            <text x="15" y="45" fill="rgba(255, 85, 0, 0.15)" fontSize="28" fontFamily="monospace" fontWeight="bold">&lt;&gt;</text>
            <text x="150" y="170" fill="rgba(255, 85, 0, 0.15)" fontSize="28" fontFamily="monospace" fontWeight="bold">&lt;/&gt;</text>

            {/* Diagonal tech line decorations */}
            <line x1="20" y1="180" x2="60" y2="180" stroke="var(--color-orange)" strokeWidth="2" strokeDasharray="4 2" />
            <line x1="180" y1="20" x2="180" y2="60" stroke="var(--color-orange)" strokeWidth="2" strokeDasharray="4 2" />

            {/* Central Glowing Shield / Face */}
            <circle cx="100" cy="90" r="45" stroke="var(--color-border)" strokeWidth="2" fill="rgba(25, 29, 36, 0.6)" />
            <circle cx="100" cy="90" r="35" stroke="var(--color-orange-border)" strokeWidth="1" strokeDasharray="5 3" />

            {/* Glowing center nodes */}
            <g filter="url(#glow)">
              <circle cx="100" cy="90" r="15" fill="url(#orangeGrad)" opacity="0.8" />
              <polygon points="100,82 108,94 92,94" fill="#fff" />
              <line x1="100" y1="45" x2="100" y2="135" stroke="var(--color-orange)" strokeWidth="1.5" />
              <line x1="55" y1="90" x2="145" y2="90" stroke="var(--color-orange)" strokeWidth="1.5" />
            </g>

            {/* Outer border decoration */}
            <rect x="5" y="5" width="190" height="190" stroke="var(--color-border)" strokeWidth="1" />
            <rect x="10" y="10" width="180" height="180" stroke="var(--color-orange)" strokeWidth="1" strokeDasharray="20 160" />
          </svg>
        </div>
        <div className="profile-details">
          <h3>Adeniyi Raymond</h3>
          <p>// Full Stack Engineer</p>
          <ul className="profile-details-list">
            <li>
              <span>Location:</span>
              <span>Akure, Nigeria</span>
            </li>
            <li>
              <span>Email:</span>
              <span>adeniyiraymond04@gmail.com</span>
            </li>
            <li>
              <span>Freelance:</span>
              <span style={{ color: '#10b981' }}>Available</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Right Column: Bio, Skills & Timeline */}
      <div className="about-content">
        <div className="section-subtitle">
          <span>[ 01 ]</span>
          <span>About Me</span>
        </div>
        <h2 className="section-title">Who is Adeniyi?</h2>
        <p className="about-bio">
          I am a software engineer focused on building fast, elegant web layouts. I have a passion for visual aesthetics, clean architecture, and clean components. I specialize in designing modular React structures, developing optimized backend API layers, and setting up stable server deployments.
        </p>

        {/* Technical Skills Categorized */}
        <div className="skills-wrapper">
          <h3 className="skills-category-title">
            <span style={{ color: 'var(--color-orange)' }}>#</span> Frontend Stack
          </h3>
          <div className="skills-grid">
            {skills.frontend.map((skill, index) => (
              <div key={index} className="skill-tag">
                <span>{skill}</span>
              </div>
            ))}
          </div>

          <h3 className="skills-category-title" style={{ marginTop: '30px' }}>
            <span style={{ color: 'var(--color-orange)' }}>#</span> Backend & Databases
          </h3>
          <div className="skills-grid">
            {skills.backend.map((skill, index) => (
              <div key={index} className="skill-tag">
                <span>{skill}</span>
              </div>
            ))}
          </div>

          <h3 className="skills-category-title" style={{ marginTop: '30px' }}>
            <span style={{ color: 'var(--color-orange)' }}>#</span> Tools & Platforms
          </h3>
          <div className="skills-grid">
            {skills.tools.map((skill, index) => (
              <div key={index} className="skill-tag">
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="section-subtitle" style={{ marginTop: '60px' }}>
          <span>[ 02 ]</span>
          <span>Career Path</span>
        </div>
        <h2 className="section-title" style={{ marginBottom: '40px' }}>Experience</h2>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-meta">
                <span className="timeline-duration">{exp.duration}</span>
                <span className="timeline-company">{exp.company}</span>
              </div>
              <h3 className="timeline-title">{exp.role}</h3>
              <p className="timeline-desc">{exp.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
