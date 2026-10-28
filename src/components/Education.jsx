import { useRef } from 'react'
import { useScrollRevealAll } from '../hooks/useScrollReveal'
import { education } from '../data/portfolio'
import { Divider } from './decor'
import '../styles/education.css'

function Education() {
  const sectionRef = useRef(null)
  useScrollRevealAll(sectionRef)

  return (
    <section id="education" ref={sectionRef}>
      <div className="container">
        <div className="section-label reveal">Learning &amp; Milestones</div>
        <h2 className="section-title reveal reveal-delay-1">
          Learning &amp; <span className="it">Milestones.</span>
        </h2>

        <div className="education-card reveal reveal-delay-2">
          <div className="education-university">{education.university}</div>
          <div className="education-degree">{education.degree}</div>
          <div className="education-detail-grid">
            <div className="education-detail">
              <span className="education-detail-label">Status</span>
              <span className="education-detail-value">{education.status}</span>
            </div>
            <div className="education-detail">
              <span className="education-detail-label">Expected Graduation</span>
              <span className="education-detail-value">
                {education.graduation}
              </span>
            </div>
            <div className="education-detail">
              <span className="education-detail-label">Specialization</span>
              <span className="education-detail-value">
                {education.specialization}
              </span>
            </div>
          </div>
        </div>
        <Divider className="decor-divider" />
      </div>
    </section>
  )
}

export default Education
