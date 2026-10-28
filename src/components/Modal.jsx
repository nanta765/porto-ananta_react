import { useEffect, useRef } from 'react'
import '../styles/modal.css'

/**
 * Reusable accessible overlay. Reused by the project detail view and the
 * certificate lightbox. Closes on Escape and backdrop click, locks body
 * scroll while open, moves focus into the panel on open and restores it on
 * close.
 */
function Modal({ isOpen, onClose, labelledById, children }) {
  const panelRef = useRef(null)
  const previouslyFocused = useRef(null)

  useEffect(() => {
    if (!isOpen) return

    previouslyFocused.current = document.activeElement

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const panel = panelRef.current
    if (panel) {
      const closeBtn = panel.querySelector('.modal-close')
      ;(closeBtn || panel).focus()
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
      if (previouslyFocused.current && previouslyFocused.current.focus) {
        previouslyFocused.current.focus()
      }
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose()
  }

  return (
    <div className="modal-backdrop" onMouseDown={handleBackdropClick}>
      <div
        className="modal-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledById || undefined}
        tabIndex={-1}
        ref={panelRef}
      >
        <button
          type="button"
          className="modal-close"
          aria-label="Close"
          onClick={onClose}
        >
          ✕
        </button>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  )
}

export default Modal
