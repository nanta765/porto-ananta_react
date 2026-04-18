import { useRef, useEffect, useCallback } from 'react'
import { useScrollRevealAll } from '../hooks/useScrollReveal'
import { stats } from '../data/portfolio'
import '../styles/stats.css'

function animateCounter(el) {
  const target = parseInt(el.dataset.target)
  let current = 0
  const step = Math.ceil(target / 40)
  const interval = setInterval(() => {
    current = Math.min(current + step, target)
    el.textContent = current + (target === 100 ? '%' : '+')
    if (current >= target) clearInterval(interval)
  }, 38)
}

function Stats() {
  const sectionRef = useRef(null)
  useScrollRevealAll(sectionRef)

  const handleIntersection = useCallback((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target
          .querySelectorAll('.stat-number[data-target]')
          .forEach(animateCounter)
        observer.unobserve(entry.target)
      }
    })
  }, [])

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.3,
    })
    observer.observe(section)

    return () => observer.disconnect()
  }, [handleIntersection])

  return (
    <section id="stats" ref={sectionRef}>
      <div className="container">
        <div className="section-label">Rekam Jejak</div>
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`stat-item reveal${index > 0 ? ` reveal-delay-${index}` : ''}`}
            >
              <div className="stat-number" data-target={stat.target}>
                0
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
