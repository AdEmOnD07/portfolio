import { useState, useEffect } from 'react'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  const [activeTab, setActiveTab] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Add scroll listener to make header look sleek when scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when tab changes
  const handleTabChange = (tabId) => {
    setActiveTab(tabId)
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Render the active component
  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home onNavigate={handleTabChange} />
      case 'about':
        return <About />
      case 'projects':
        return <Projects />
      case 'contact':
        return <Contact />
      default:
        return <Home onNavigate={handleTabChange} />
    }
  }

  return (
    <div className="app-wrapper">
      {/* Sleek sticky header with glassmorphism */}
      <header className={`app-header glass-panel ${scrolled ? 'scrolled' : ''}`} style={{
        backgroundColor: scrolled ? 'rgba(9, 10, 12, 0.85)' : 'rgba(9, 10, 12, 0.4)',
        borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent'
      }}>
        <div className="container header-container">
          <div className="logo-wrapper" onClick={() => handleTabChange('home')}>
            <span className="logo-hash">#</span>
            <span>AdEmOnD</span>
          </div>

          {/* Navigation Links */}
          <nav>
            <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
              <li>
                <div 
                  className={`nav-link ${activeTab === 'home' ? 'active' : ''}`} 
                  onClick={() => handleTabChange('home')}
                >
                  // home
                </div>
              </li>
              <li>
                <div 
                  className={`nav-link ${activeTab === 'about' ? 'active' : ''}`} 
                  onClick={() => handleTabChange('about')}
                >
                  // about
                </div>
              </li>
              <li>
                <div 
                  className={`nav-link ${activeTab === 'projects' ? 'active' : ''}`} 
                  onClick={() => handleTabChange('projects')}
                >
                  // projects
                </div>
              </li>
              <li>
                <div 
                  className={`nav-link ${activeTab === 'contact' ? 'active' : ''}`} 
                  onClick={() => handleTabChange('contact')}
                >
                  // contact
                </div>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {menuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </>
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Main Body */}
      <main className="app-main container">
        <div key={activeTab} className="page-wrapper animate-fade-in">
          {renderContent()}
        </div>
      </main>

      {/* Modern Developer Footer */}
      <footer className="app-footer">
        <div className="container footer-container">
          <div className="footer-text">
            <span style={{ fontFamily: 'var(--font-mono)' }}>© {new Date().getFullYear()} AdEmOnD. All rights reserved.</span>
          </div>
          <div className="footer-socials">
            <a href="https://github.com/ademond07" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="https://twitter.com/adeademond" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Twitter">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
