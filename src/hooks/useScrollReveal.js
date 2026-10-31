import { useEffect, useRef } from 'react'

/**
 * Respect the user's reduced-motion preference: when set, elements are shown
 * immediately and never animated in/out on scroll.
 */
const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Custom hook for scroll-triggered reveal animation.
 * Returns a ref to attach to the element.
 *
 * Two-way: elements fade/slide in when they enter the viewport and fade/slide
 * back out when they leave it (scrolling up again re-hides them), for a
 * smooth, reversible scroll experience.
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (prefersReducedMotion()) {
      el.classList.add('visible')
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('visible', entry.isIntersecting)
        })
      },
      {
        threshold: options.threshold ?? 0.15,
        // Trigger a little before fully on-screen / after leaving, so the
        // transition feels smooth rather than abrupt at the edges.
        rootMargin: options.rootMargin ?? '0px 0px -8% 0px',
      }
    )

    observer.observe(el)

    return () => observer.disconnect()
  }, [options.threshold, options.rootMargin])

  return ref
}

/**
 * Observe all .reveal elements within a container ref.
 *
 * Two-way reveal: toggles `visible` as each element enters/leaves the
 * viewport so the animation plays on the way down and reverses on the way up.
 */
export function useScrollRevealAll(containerRef, deps = []) {
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const elements = container.querySelectorAll('.reveal')

    if (prefersReducedMotion()) {
      elements.forEach((el) => el.classList.add('visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('visible', entry.isIntersecting)
        })
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -8% 0px',
      }
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, deps)
}
