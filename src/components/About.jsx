import { useRef } from 'react'
import { useScrollRevealAll } from '../hooks/useScrollReveal'
import { personalInfo, skills } from '../data/portfolio'
import '../styles/about.css'

function About() {
  const sectionRef = useRef(null)
  useScrollRevealAll(sectionRef)

  return (
    <section id="about" ref={sectionRef}>
      <div className="container">
        <div className="about-grid">
          <div className="about-image-wrap reveal">
            <div className="about-image-frame">
              {personalInfo.profileImage ? (
                <img 
                  src={personalInfo.profileImage} 
                  alt={personalInfo.name} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              ) : (
                <div className="about-placeholder">
                  <div className="about-placeholder-icon">👤</div>
                  <div className="about-placeholder-label">Foto Profil</div>
                </div>
              )}
            </div>
            <div className="about-corner-tag">Back-End Dev</div>
          </div>

          {/* Text side */}
          <div className="about-text">
            <div className="section-label reveal">Tentang Saya</div>
            <h2 className="section-title reveal reveal-delay-1">
              Sistem yang andal<br />dimulai dari{' '}
              <span className="it">backend.</span>
            </h2>
            <div className="reveal reveal-delay-2">
              {personalInfo.aboutBio.map((paragraph, index) => (
                <p
                  key={index}
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ))}
            </div>
            <div className="skills-grid reveal reveal-delay-3">
              {skills.map((skill) => (
                <div key={skill} className="skill-item">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
