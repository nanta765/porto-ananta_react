import { useRef, useState, useCallback } from 'react'
import { useScrollRevealAll } from '../hooks/useScrollReveal'
import { personalInfo, contactLinks } from '../data/portfolio'
import { BranchDecor } from './decor'
import ContactIcon from './ContactIcon'
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
          <div className="contact-intro">
            <div className="decor decor-branch contact-branch">
              <BranchDecor />
            </div>
            <div className="section-label reveal">Get in Touch</div>
            <h2 className="section-title reveal reveal-delay-1">
              Let's Create Something{' '}
              <span className="it">Meaningful.</span>
            </h2>
            <p
              className="reveal reveal-delay-2"
              style={{
                color: 'var(--text2)',
                lineHeight: 1.82,
                marginBottom: '2rem',
              }}
            >
              Have a project idea, an opportunity, or simply want to connect?
              I'd be happy to hear from you.
            </p>
            <div className="contact-links">
              {contactLinks.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`contact-link reveal reveal-delay-${Math.min(index + 2, 4)}`}
                  {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  <div className="contact-link-icon">
                    {link.iconName ? (
                      <ContactIcon
                        name={link.iconName}
                        className="contact-link-svg"
                      />
                    ) : (
                      link.icon
                    )}
                  </div>
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
            <p>Send a message and I'll reply within 24 hours.</p>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="contact-name">Name</label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="Your name"
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
              <label htmlFor="contact-subject">Subject</label>
              <input
                id="contact-subject"
                type="text"
                placeholder="What's this about?"
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                placeholder="Tell me about your project or idea…"
              ></textarea>
            </div>
            <button
              className="btn-primary"
              onClick={handleSend}
              style={{ width: '100%', justifyContent: 'center' }}
              disabled={sent}
            >
              {sent ? '✓ Message Sent!' : 'Send Message ↗'}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
