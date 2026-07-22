import React, { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Quick validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({ type: 'error', message: '// All fields are required.' })
      return
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setStatus({ type: 'error', message: '// Please enter a valid email address.' })
      return
    }

    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false)
      setStatus({ type: 'success', message: '// Success! Your message has been sent. I will get back to you shortly.' })
      setFormData({ name: '', email: '', message: '' })
    }, 1500)
  }

  return (
    <div className="contact-wrapper">
      <div className="projects-header">
        <div className="section-subtitle">
          <span>[ 04 ]</span>
          <span>Contact Me</span>
        </div>
        <h2 className="section-title">Let's Collaborate</h2>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem' }}>
          Have a project in mind, looking for a freelancer, or just want to chat? Drop me a message!
        </p>
      </div>

      <div className="contact-section">
        {/* Left Side: Info */}
        <div className="contact-info">
          <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>Direct Communication</h3>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '24px' }}>
            Prefer writing an email directly or connecting on social networks? Feel free to reach out via these platforms.
          </p>

          <div className="contact-info-cards">
            <div className="info-card glass-panel">
              <div className="info-icon-wrapper">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div className="info-details">
                <h4>Email Address</h4>
                <p><a href="mailto:adeniyiraymond04@gmail.com">adeniyiraymond04@gmail.com</a></p>
              </div>
            </div>

            <div className="info-card glass-panel">
              <div className="info-icon-wrapper">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div className="info-details">
                <h4>Current Location</h4>
                <p>Akure, Nigeria</p>
              </div>
            </div>

            <div className="info-card glass-panel">
              <div className="info-icon-wrapper">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <div className="info-details">
                <h4>Working Hours</h4>
                <p>Mon - Fri: 09:00 - 18:00 BST</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="contact-form-wrapper glass-panel">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="name">// sender_name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange}
                placeholder="Enter your name" 
                className="form-input"
                disabled={isSubmitting}
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="email">// sender_email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange}
                placeholder="Enter your email" 
                className="form-input"
                disabled={isSubmitting}
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="message">// transmission_payload</label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message} 
                onChange={handleChange}
                placeholder="Write your message here..." 
                className="form-input"
                disabled={isSubmitting}
              />
            </div>

            {status.message && (
              <div className={`form-status ${status.type}`}>
                {status.message}
              </div>
            )}

            <button 
              type="submit" 
              className="btn btn-primary" 
              style={{ width: '100%', padding: '14px 20px' }}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span>Sending Transmission...</span>
              ) : (
                <>
                  <span>Send Message</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
