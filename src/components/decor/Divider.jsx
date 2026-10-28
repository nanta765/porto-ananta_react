/**
 * Thin organic horizontal divider with a center leaf/bud. Sits between two
 * adjacent sections of the same tone. Decorative only.
 */
function Divider({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      aria-hidden="true"
      focusable="false"
      role="presentation"
    >
      <path d="M4 12 H 86" />
      <path d="M114 12 H 196" />
      {/* center bud */}
      <path
        d="M100 4 C 106 8, 106 16, 100 20 C 94 16, 94 8, 100 4 Z"
        fill="currentColor"
        stroke="none"
        opacity="0.85"
      />
      <path d="M86 12 C 92 10, 96 11, 100 12" />
      <path d="M114 12 C 108 10, 104 11, 100 12" />
    </svg>
  )
}

export default Divider
