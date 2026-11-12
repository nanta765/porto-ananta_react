import { useRef } from 'react'
import { useScrollRevealAll } from '../hooks/useScrollReveal'
import { personalInfo, skillCategories } from '../data/portfolio'
import ImageWithFallback from './ImageWithFallback'
import { LeafSprig, CornerFlourish, OakTree } from './decor'
import '../styles/about.css'

function About() {
  const sectionRef = useRef(null)
  useScrollRevealAll(sectionRef)

  return (
    <section id="about" ref={sectionRef}>
      <div className="decor decor-oak decor-oak-section about-oak">
        <OakTree />
      </div>
      <div className="container">
        <div className="about-grid">
          <div className="about-image-wrap reveal">
            <div className="decor decor-flourish about-flourish">
              <CornerFlourish />
            </div>
            <div className="about-image-frame">
              <ImageWithFallback
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%' }}
                fallback={
                  <div className="about-placeholder">
                    <div className="about-placeholder-icon">👤</div>
                    <div className="about-placeholder-label">Foto Profil</div>
                  </div>
                }
              />
            </div>
            <div className="about-corner-tag">Full-Stack Dev</div>
          </div>

          {/* Text side */}
          <div className="about-text">
            <div className="decor decor-sprig about-sprig">
              <LeafSprig />
            </div>
            <div className="section-label reveal">A Little About Me</div>
            <h2 className="section-title reveal reveal-delay-1">
              A Little <span className="it">About Me.</span>
            </h2>
            <div className="reveal reveal-delay-2">
              {personalInfo.aboutBio.map((paragraph, index) => (
                <p
                  key={index}
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ))}
            </div>
            <div className="reveal reveal-delay-3">
              <div className="skills-subhead">The Tools Behind the Work</div>
              {skillCategories.map((group) => (
                <div key={group.category} className="skill-category">
                  <div className="skill-category-label">{group.category}</div>
                  <div className="skills-grid">
                    {group.items.map((skill) => (
                      <div key={skill} className="skill-item">
                        {skill}
                      </div>
                    ))}
                  </div>
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
