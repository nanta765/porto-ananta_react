/**
 * Quarter-frame vine for framed panels (e.g. behind the profile photo mat).
 * Decorative only.
 */
function CornerFlourish({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      stroke="var(--sage)"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      role="presentation"
    >
      {/* vine tracing a top-left corner */}
      <path d="M6 70 C 6 36, 36 6, 70 6" />
      <path d="M18 60 C 24 54, 30 52, 38 52" />
      <path d="M60 18 C 54 24, 52 30, 52 38" />
      {/* small leaves along the vine */}
      <path
        d="M38 52 C 44 48, 52 50, 54 56 C 48 60, 40 58, 38 52 Z"
        fill="var(--olive)"
        stroke="none"
      />
      <path
        d="M52 38 C 48 44, 50 52, 56 54 C 60 48, 58 40, 52 38 Z"
        fill="var(--sage)"
        stroke="none"
      />
    </svg>
  )
}

export default CornerFlourish
