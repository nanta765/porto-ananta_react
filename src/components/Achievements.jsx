import { useRef } from 'react'
import { useScrollRevealAll } from '../hooks/useScrollReveal'
import { achievements } from '../data/portfolio'
import '../styles/achievements.css'

function Achievements() {
  const sectionRef = useRef(null)
  useScrollRevealAll(sectionRef)

  return (
    <section id="achievements" ref={sectionRef}>
      <div className="container">
        <div className="section-label reveal">Pencapaian</div>
        <h2 className="section-title reveal reveal-delay-1">
          Prestasi yang<br /><span className="it">membanggakan.</span>
        </h2>
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.title}
              className={`achievement-card reveal reveal-delay-${index + 2}`}
            >
              {achievement.image ? (
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  className="achievement-image"
                />
              ) : (
                <div className="achievement-icon-row">
                  <div className="achievement-icon">{achievement.icon}</div>
                  <div className="achievement-badge-type">{achievement.type}</div>
                </div>
              )}
              <div className="achievement-title">{achievement.title}</div>
              <div className="achievement-desc">{achievement.desc}</div>
              <div className="achievement-year">{achievement.year}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements
