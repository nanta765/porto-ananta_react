/**
 * Delicate botanical branch with a few leaves. Purely decorative:
 * aria-hidden, non-focusable, never interactive. Stroke/fill follow the
 * palette tokens so it adapts to light/dark themes.
 */
function BranchDecor({ className }) {
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
      {/* main stem */}
      <path d="M12 94 C 30 78, 44 58, 56 34 C 62 22, 68 14, 78 8" />
      {/* side branch */}
      <path d="M44 56 C 54 52, 62 46, 68 36" />
      <path d="M30 76 C 38 74, 46 70, 52 62" />
      {/* leaves — small sage/olive fills */}
      <path
        d="M56 34 C 62 28, 72 28, 78 34 C 72 40, 62 40, 56 34 Z"
        fill="var(--olive)"
        stroke="none"
      />
      <path
        d="M68 36 C 72 30, 80 30, 84 34 C 80 40, 72 40, 68 36 Z"
        fill="var(--sage)"
        stroke="none"
      />
      <path
        d="M52 62 C 56 56, 64 56, 68 60 C 64 66, 56 66, 52 62 Z"
        fill="var(--olive)"
        stroke="none"
      />
      <path d="M78 8 C 82 10, 86 14, 88 20" />
    </svg>
  )
}

export default BranchDecor
