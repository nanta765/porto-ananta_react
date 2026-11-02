import { useRef } from 'react'
import { useScrollRevealAll } from '../hooks/useScrollReveal'
import { volunteer } from '../data/portfolio'
import { LeafSprig, OakTree } from './decor'
import '../styles/volunteer.css'

function Volunteer() {
  const sectionRef = useRef(null)
  useScrollRevealAll(sectionRef)

  return (
    <section id="volunteer" ref={sectionRef}>
      <div className="decor decor-oak decor-oak-section volunteer-oak">
        <OakTree />
      </div>
      <div className="container">
        <div className="volunteer-head">
          <div className="decor decor-sprig volunteer-sprig">
            <LeafSprig />
          </div>
          <div className="section-label reveal">Beyond the Screen</div>
          <h2 className="section-title reveal reveal-delay-1">
            Beyond the <span className="it">Screen.</span>
          </h2>
        </div>

        <div className="volunteer-grid">
          {volunteer.map((item, index) => (
            <div
              key={item.role}
              className={`volunteer-card reveal reveal-delay-${Math.min(index + 2, 4)}`}
            >
              {item.category && (
                <div className="volunteer-category">{item.category}</div>
              )}
              <div className="volunteer-role">{item.role}</div>
              <div className="volunteer-org">{item.organization}</div>
              <ul className="volunteer-list">
                {item.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Volunteer
