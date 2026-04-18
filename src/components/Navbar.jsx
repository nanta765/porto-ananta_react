import { useEffect, useState, useCallback } from 'react'
import { useTheme } from '../context/ThemeContext'
import { navLinks, personalInfo } from '../data/portfolio'
import '../styles/navbar.css'

function Navbar() {
  const { isDark, toggleTheme } = useTheme()
  const [activeSection, setActiveSection] = useState('')

  const handleScroll = useCallback(() => {
    const sections = document.querySelectorAll('section[id]')
    let current = ''
    sections.forEach((section) => {
      if (window.scrollY >= section.offsetTop - 110) {
        current = section.id
      }
    })
    setActiveSection(current)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <nav id="navbar">
      <a href="#hero" className="nav-logo">
        {personalInfo.navLogo}<span>.</span>
      </a>
      <div className="nav-links">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={activeSection === link.href.slice(1) ? 'active' : ''}
          >
            {link.label}
          </a>
        ))}
        <button
          className="theme-btn"
          onClick={toggleTheme}
          title="Toggle dark mode"
          aria-label="Toggle dark mode"
        >
          {isDark ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
