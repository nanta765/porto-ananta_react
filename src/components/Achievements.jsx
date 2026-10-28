import { useRef, useState } from 'react'
import { useScrollRevealAll } from '../hooks/useScrollReveal'
import { achievements } from '../data/portfolio'
import ImageWithFallback from './ImageWithFallback'
import Modal from './Modal'
import '../styles/achievements.css'

function Achievements() {
  const sectionRef = useRef(null)
  const [selected, setSelected] = useState(null)
  useScrollRevealAll(sectionRef)

  const handleKeyDown = (e, achievement) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setSelected(achievement)
    }
  }

  return (
    <section id="achievements" ref={sectionRef}>
      <div className="container">
        <div className="section-label reveal">Certificates &amp; Awards</div>
        <h2 className="section-title reveal reveal-delay-1">
          Recognition &amp; <span className="it">Growth.</span>
        </h2>
        <div className="achievements-grid">
          {achievements.map((achievement, index) => {
            const clickable = !!achievement.image
            return (
              <div
                key={achievement.title}
                className={`achievement-card reveal reveal-delay-${index + 2}${clickable ? ' achievement-card-clickable' : ''}`}
                {...(clickable
                  ? {
                      role: 'button',
                      tabIndex: 0,
                      onClick: () => setSelected(achievement),
                      onKeyDown: (e) => handleKeyDown(e, achievement),
                    }
                  : {})}
              >
                <ImageWithFallback
                  src={achievement.image}
                  alt={achievement.title}
                  className="achievement-image"
                  fallback={
                    <div className="achievement-icon-row">
                      <div className="achievement-icon">{achievement.icon}</div>
                    </div>
                  }
                />
                <div className="achievement-title">{achievement.title}</div>
                {achievement.issuer && (
                  <div className="achievement-issuer">{achievement.issuer}</div>
                )}
                {achievement.note && (
                  <div className="achievement-desc">{achievement.note}</div>
                )}
                <div className="achievement-year">{achievement.date}</div>
              </div>
            )
          })}
        </div>
      </div>

      <Modal
        isOpen={!!selected}
        onClose={() => setSelected(null)}
        labelledById="achievement-lightbox-title"
      >
        {selected && (
          <div className="achievement-lightbox">
            <h3
              id="achievement-lightbox-title"
              className="achievement-lightbox-title"
            >
              {selected.title}
            </h3>
            <ImageWithFallback
              src={selected.image}
              alt={selected.title}
              className="achievement-lightbox-image"
              fallback={
                <div className="achievement-lightbox-placeholder">
                  Certificate image coming soon
                </div>
              }
            />
          </div>
        )}
      </Modal>
    </section>
  )
}

export default Achievements
