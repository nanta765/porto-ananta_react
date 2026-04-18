import { useState, useEffect, useRef, useCallback } from 'react'

/**
 * Custom hook for typing animation effect.
 * @param {string[]} phrases - Array of strings to type
 * @param {object} options - Configuration options
 * @returns {string} The current displayed text
 */
export function useTypingEffect(phrases, options = {}) {
  const {
    typeSpeed = 78,
    deleteSpeed = 38,
    pauseDuration = 2200,
    startDelay = 1200,
  } = options

  const [text, setText] = useState('')
  const phraseIdx = useRef(0)
  const charIdx = useRef(0)
  const isDeleting = useRef(false)
  const hasStarted = useRef(false)

  const typeLoop = useCallback(() => {
    const phrase = phrases[phraseIdx.current]

    if (!isDeleting.current) {
      charIdx.current++
      setText(phrase.slice(0, charIdx.current))

      if (charIdx.current === phrase.length) {
        isDeleting.current = true
        return pauseDuration
      }
      return typeSpeed
    } else {
      charIdx.current--
      setText(phrase.slice(0, charIdx.current))

      if (charIdx.current === 0) {
        isDeleting.current = false
        phraseIdx.current = (phraseIdx.current + 1) % phrases.length
      }
      return deleteSpeed
    }
  }, [phrases, typeSpeed, deleteSpeed, pauseDuration])

  useEffect(() => {
    if (hasStarted.current) return
    hasStarted.current = true

    let timeoutId

    const run = () => {
      const delay = typeLoop()
      timeoutId = setTimeout(run, delay)
    }

    timeoutId = setTimeout(run, startDelay)

    return () => clearTimeout(timeoutId)
  }, [typeLoop, startDelay])

  return text
}
