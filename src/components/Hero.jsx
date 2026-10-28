import { useTypingEffect } from '../hooks/useTypingEffect'
import { personalInfo, typingPhrases } from '../data/portfolio'
import { BranchDecor } from './decor'
import '../styles/hero.css'

function Hero() {
  const typedText = useTypingEffect(typingPhrases)

  return (
    <section id="hero" className="paper-grain">
      <div className="hero-bg"></div>
      <div className="hero-grid"></div>
      <div className="decor decor-branch hero-branch">
        <BranchDecor />
      </div>
      <div className="hero-content">
        <div className="hero-badge">Open to Opportunities</div>
        <div className="hero-role">{personalInfo.heroSubtitle}</div>
        <h1 className="hero-title">
          Where Art Meets<br />
          <span className="name-italic">Technology.</span>
        </h1>
        <p className="hero-supporting">
          Building thoughtful digital experiences through Full-Stack
          Development.
        </p>
        <div className="hero-typing">
          <span id="typingText">{typedText}</span>
          <span className="cursor"></span>
        </div>
        <p className="hero-desc">{personalInfo.heroSupporting}</p>
        <div className="hero-ctas">
          <a href="#projects" className="btn-primary">Explore My Work</a>
          <a href="#contact" className="btn-outline">Get in Touch</a>
        </div>
        <div className="hero-caption">
          A portfolio of code, ideas, and exploration.
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
