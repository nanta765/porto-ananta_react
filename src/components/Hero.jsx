import { useTypingEffect } from '../hooks/useTypingEffect'
import { personalInfo, typingPhrases } from '../data/portfolio'
import { BranchDecor, OakTree } from './decor'
import '../styles/hero.css'

function Hero() {
  const typedText = useTypingEffect(typingPhrases)

  return (
    <section id="hero" className="paper-grain">
      <div className="hero-bg"></div>
      <div className="hero-grid"></div>
      <div className="decor decor-oak hero-oak">
        <OakTree />
      </div>
      <div className="decor decor-branch hero-branch">
        <BranchDecor />
      </div>
      <div className="hero-content">
        <div className="hero-badge">Open to Opportunities</div>
        <div className="hero-role">{personalInfo.heroSubtitle}</div>
        <h1 className="hero-title">
          Building Reliable Software with<br />
          <span className="name-italic">Full-Stack Development.</span>
        </h1>
        <p className="hero-supporting">
          Designing and developing modern web applications, backend systems,
          and database-driven solutions.
        </p>
        <div className="hero-typing">
          <span id="typingText">{typedText}</span>
          <span className="cursor"></span>
        </div>
        <p className="hero-desc">{personalInfo.heroSupporting}</p>
        <div className="hero-ctas">
          <a href="#projects" className="btn-primary">Explore My Work</a>
          <a href="#contact" className="btn-outline">Get in Touch</a>
          <a
            href={personalInfo.cvUrl}
            download
            className="btn-cv"
            aria-label="Download CV Ananta"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download CV
          </a>
        </div>
        <div className="hero-caption">
          A portfolio of projects, skills, and continuous learning.
        </div>
      </div>
      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  )
}

export default Hero
