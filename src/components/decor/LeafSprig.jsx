/**
 * A small 3-leaf sprig for section corners. Decorative only.
 */
function LeafSprig({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      stroke="var(--sage)"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      role="presentation"
    >
      {/* stem */}
      <path d="M20 86 C 34 70, 46 52, 54 30" />
      {/* leaves */}
      <path
        d="M54 30 C 60 22, 72 22, 78 28 C 72 36, 60 36, 54 30 Z"
        fill="var(--sage)"
        stroke="none"
      />
      <path
        d="M40 54 C 46 48, 56 48, 60 52 C 56 60, 46 60, 40 54 Z"
        fill="var(--olive)"
        stroke="none"
      />
      <path
        d="M28 74 C 32 68, 42 68, 46 72 C 42 80, 32 80, 28 74 Z"
        fill="var(--sage)"
        stroke="none"
      />
    </svg>
  )
}

export default LeafSprig
