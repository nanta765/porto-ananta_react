/**
 * A slender hand-drawn tree with a few leaves — a quiet botanical accent for
 * section edges. Purely decorative: aria-hidden, non-focusable, never
 * interactive. Stroke/fill follow the palette tokens so it adapts to themes.
 */
function TreeDecor({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 140"
      fill="none"
      stroke="var(--olive)"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      role="presentation"
    >
      {/* trunk */}
      <path d="M50 138 C 49 112, 50 92, 50 66" />
      {/* branches */}
      <path d="M50 96 C 42 90, 36 82, 32 72" />
      <path d="M50 84 C 58 78, 64 70, 68 60" />
      <path d="M50 72 C 44 66, 40 58, 38 48" />
      <path d="M50 60 C 57 54, 62 46, 64 38" />
      <path d="M50 50 C 50 40, 51 30, 52 20" />
      {/* leaves — small sage/olive fills along the branches */}
      <path
        d="M32 72 C 26 68, 20 70, 18 76 C 24 80, 30 78, 32 72 Z"
        fill="var(--sage)"
        stroke="none"
      />
      <path
        d="M68 60 C 74 56, 80 58, 82 64 C 76 68, 70 66, 68 60 Z"
        fill="var(--olive)"
        stroke="none"
      />
      <path
        d="M38 48 C 32 44, 26 46, 24 52 C 30 56, 36 54, 38 48 Z"
        fill="var(--olive)"
        stroke="none"
      />
      <path
        d="M64 38 C 70 34, 76 36, 78 42 C 72 46, 66 44, 64 38 Z"
        fill="var(--sage)"
        stroke="none"
      />
      <path
        d="M52 20 C 48 13, 50 6, 56 4 C 60 10, 58 17, 52 20 Z"
        fill="var(--sage)"
        stroke="none"
      />
    </svg>
  )
}

export default TreeDecor
