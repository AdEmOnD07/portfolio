
import React from 'react'
import profileImg from '../assets/Me.jpg'

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
        <div className="profile-img-wrapper">
          <img src={profileImg} className="profile-img" alt="Adeniyi Raymond" />
        </div>
        <div className="profile-details">
          <h3>Adeniyi Raymond</h3>
          <p>Full Stack Engineer</p>
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
              <span>WhatsApp / Call:</span>
              <span><a href="tel:+2349160143639" style={{ color: 'var(--color-orange)' }}>+234 916 014 3639</a></span>
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
