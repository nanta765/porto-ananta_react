import { useTypingEffect } from '../hooks/useTypingEffect'
import { personalInfo, typingPhrases } from '../data/portfolio'
import '../styles/hero.css'

function Hero() {
  const typedText = useTypingEffect(typingPhrases)

  return (
    <section id="hero">
      <div className="hero-bg"></div>
      <div className="hero-grid"></div>
      <div className="hero-content">
        <div className="hero-badge">Open to Opportunities</div>
        <div className="hero-role">{personalInfo.heroSubtitle}</div>
        <h1 className="hero-title">
          Building Digital Solutions Through<br />
          <span className="name-italic">Full-Stack Development.</span>
        </h1>
        <div className="hero-typing">
          <span id="typingText">{typedText}</span>
          <span className="cursor"></span>
        </div>
        <p className="hero-desc">{personalInfo.heroSupporting}</p>
        <div className="hero-ctas">
          <a href="#projects" className="btn-primary">View My Projects ↓</a>
          <a href="#contact" className="btn-outline">Contact Me →</a>
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
