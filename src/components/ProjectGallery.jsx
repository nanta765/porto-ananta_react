import { useEffect, useMemo, useRef, useState } from 'react'

/**
 * Swipeable image gallery for a project's detail view.
 *
 * - Accepts an array of image paths. Images that fail to load (e.g. a
 *   placeholder path with no file in public/) are dropped automatically,
 *   so only real photos are ever shown.
 * - If no valid images remain, renders the provided `fallback` node
 *   (gradient + icon), matching the single-image behaviour elsewhere.
 * - Slide to the side with the arrow buttons, the dots, swipe/drag, or the
 *   left/right arrow keys.
 */
function ProjectGallery({ images, alt, fallback }) {
  // Probe each candidate path once; keep only the ones that load.
  const candidates = useMemo(
    () => (images || []).filter(Boolean),
    [images]
  )
  const [loaded, setLoaded] = useState({}) // path -> true/false (undefined = pending)
  const [index, setIndex] = useState(0)
  const trackRef = useRef(null)
  const touchStartX = useRef(null)

  useEffect(() => {
    let cancelled = false
    candidates.forEach((src) => {
      const img = new Image()
      img.onload = () => {
        if (!cancelled) setLoaded((prev) => ({ ...prev, [src]: true }))
      }
      img.onerror = () => {
        if (!cancelled) setLoaded((prev) => ({ ...prev, [src]: false }))
      }
      img.src = src
    })
    return () => {
      cancelled = true
    }
  }, [candidates])

  const valid = candidates.filter((src) => loaded[src] === true)
  const stillProbing = candidates.some((src) => loaded[src] === undefined)

  // Keep the active index within bounds as images resolve.
  useEffect(() => {
    if (index > valid.length - 1) setIndex(Math.max(0, valid.length - 1))
  }, [valid.length, index])

  const go = (next) => {
    if (valid.length === 0) return
    setIndex((prev) => (next + valid.length) % valid.length)
  }

  const onKeyDown = (e) => {
    if (valid.length < 2) return
    if (e.key === 'ArrowRight') {
      e.preventDefault()
      go(index + 1)
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault()
      go(index - 1)
    }
  }

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }
  const onTouchEnd = (e) => {
    if (touchStartX.current == null) return
    const delta = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(delta) > 40) go(index + (delta < 0 ? 1 : -1))
    touchStartX.current = null
  }

  // While probing and nothing valid yet, keep the area empty (no flicker).
  if (valid.length === 0) {
    if (stillProbing) {
      return <div className="project-gallery project-gallery-empty" aria-hidden="true" />
    }
    return fallback ?? null
  }

  const multiple = valid.length > 1

  return (
    <div
      className="project-gallery"
      role="group"
      aria-roledescription="carousel"
      aria-label={`${alt} images`}
      tabIndex={0}
      onKeyDown={onKeyDown}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div
        className="project-gallery-track"
        ref={trackRef}
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {valid.map((src, i) => (
          <div className="project-gallery-slide" key={src}>
            <img
              src={src}
              alt={`${alt} — foto ${i + 1}`}
              className="project-gallery-image"
              draggable={false}
            />
          </div>
        ))}
      </div>

      {multiple && (
        <>
          <button
            type="button"
            className="project-gallery-arrow project-gallery-arrow-prev"
            onClick={() => go(index - 1)}
            aria-label="Foto sebelumnya"
          >
            ‹
          </button>
          <button
            type="button"
            className="project-gallery-arrow project-gallery-arrow-next"
            onClick={() => go(index + 1)}
            aria-label="Foto berikutnya"
          >
            ›
          </button>

          <div className="project-gallery-dots" role="tablist">
            {valid.map((src, i) => (
              <button
                key={src}
                type="button"
                className={`project-gallery-dot${i === index ? ' is-active' : ''}`}
                aria-label={`Lihat foto ${i + 1}`}
                aria-selected={i === index}
                role="tab"
                onClick={() => setIndex(i)}
              />
            ))}
          </div>

          <div className="project-gallery-count">
            {index + 1} / {valid.length}
          </div>
        </>
      )}
    </div>
  )
}

export default ProjectGallery
