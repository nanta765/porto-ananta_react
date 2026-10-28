import { useRef, useState, useCallback } from 'react'
import { useScrollRevealAll } from '../hooks/useScrollReveal'
import { personalInfo, contactLinks } from '../data/portfolio'
import '../styles/contact.css'

function Contact() {
  const sectionRef = useRef(null)
  const [sent, setSent] = useState(false)
  useScrollRevealAll(sectionRef)

  const handleSend = useCallback(() => {
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }, [])

  return (
    <section id="contact" ref={sectionRef}>
      <div className="container">
        <div className="contact-grid">
          {/* Left: links */}
          <div>
            <div className="section-label reveal">Hubungi Saya</div>
            <h2 className="section-title reveal reveal-delay-1">
              Mari kita<br />berkolaborasi <span className="it">bersama.</span>
            </h2>
            <p
              className="reveal reveal-delay-2"
              style={{
                color: 'var(--text2)',
                lineHeight: 1.82,
                marginBottom: '2rem',
              }}
            >
              I'm open to internship opportunities and collaboration on
              full-stack projects. Feel free to reach out — I'd love to connect
              and build something together.
            </p>
            <div className="contact-links">
              {contactLinks.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`contact-link reveal reveal-delay-${Math.min(index + 2, 4)}`}
                  {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  <div className="contact-link-icon">{link.icon}</div>
                  <div>
                    <div className="contact-link-label">{link.label}</div>
                    <div className="contact-link-value">{link.value}</div>
                  </div>
                  <span className="contact-link-arrow">↗</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="contact-form-side reveal reveal-delay-2">
            <p>
              Kirim pesan langsung dan saya akan membalas dalam waktu 24 jam.
            </p>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="contact-name">Nama</label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="Nama kamu"
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact-email">Email</label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="email@kamu.com"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="contact-subject">Subjek</label>
              <input
                id="contact-subject"
                type="text"
                placeholder="Ini tentang apa?"
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact-message">Pesan</label>
              <textarea
                id="contact-message"
                placeholder="Ceritakan tentang proyek atau kebutuhanmu..."
              ></textarea>
            </div>
            <button
              className="btn-primary"
              onClick={handleSend}
              style={{ width: '100%', justifyContent: 'center' }}
              disabled={sent}
            >
              {sent ? '✓ Pesan Terkirim!' : 'Kirim Pesan ↗'}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
