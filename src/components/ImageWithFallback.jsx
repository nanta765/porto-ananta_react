import { useState } from 'react'

/**
 * Renders an <img>, falling back to a provided node when the src is falsy or
 * the image fails to load. This is the single graceful-degradation mechanism
 * for the missing /public images.
 */
function ImageWithFallback({ src, alt, className, style, fallback }) {
  const [failed, setFailed] = useState(false)

  if (!src || failed) {
    return fallback ?? null
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      onError={() => setFailed(true)}
    />
  )
}

export default ImageWithFallback
