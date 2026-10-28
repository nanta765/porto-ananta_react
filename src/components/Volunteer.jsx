import { useRef } from 'react'
import { useScrollRevealAll } from '../hooks/useScrollReveal'
import { volunteer } from '../data/portfolio'
import '../styles/volunteer.css'

function Volunteer() {
  const sectionRef = useRef(null)
  useScrollRevealAll(sectionRef)

  return (
    <section id="volunteer" ref={sectionRef}>
      <div className="container">
        <div className="section-label reveal">Kerelawanan</div>
        <h2 className="section-title reveal reveal-delay-1">
          Berbagi dampak<br />yang <span className="it">bermakna.</span>
        </h2>

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
