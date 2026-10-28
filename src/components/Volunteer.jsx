import { useRef } from 'react'
import { useScrollRevealAll } from '../hooks/useScrollReveal'
import { volunteer } from '../data/portfolio'
import { LeafSprig } from './decor'
import '../styles/volunteer.css'

function Volunteer() {
  const sectionRef = useRef(null)
  useScrollRevealAll(sectionRef)

  return (
    <section id="volunteer" ref={sectionRef}>
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

        <div className="volunteer-card reveal reveal-delay-2">
          <div className="volunteer-role">{volunteer.role}</div>
          <div className="volunteer-org">{volunteer.organization}</div>
          <ul className="volunteer-list">
            {volunteer.responsibilities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Volunteer
