/**
 * Line-art contact icons that match the fine-art / editorial theme, replacing
 * the previous emoji glyphs. Decorative-but-labelled: the parent link already
 * carries the accessible label, so these are aria-hidden.
 *
 * Pick an icon by the `name` prop (email | github | linkedin | phone). Falls
 * back to a small dot if an unknown name is passed, so nothing ever crashes.
 */
function ContactIcon({ name, className }) {
  const common = {
    className,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
    focusable: false,
    role: 'presentation',
  }

  switch (name) {
    case 'email':
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3.5 7l8.5 6 8.5-6" />
        </svg>
      )
    case 'github':
      return (
        <svg {...common}>
          <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.3 4.3 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12 12 0 0 0-6.2 0C6.9 2.3 5.8 2.6 5.8 2.6a4.3 4.3 0 0 0-.1 3.2A4.6 4.6 0 0 0 4.4 9c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
        </svg>
      )
    case 'linkedin':
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M8 10v7" />
          <path d="M8 7v.01" />
          <path d="M12 17v-4a2 2 0 0 1 4 0v4" />
          <path d="M12 13v4" />
        </svg>
      )
    case 'phone':
      return (
        <svg {...common}>
          <path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 5 5L19 13l2 5v3a1 1 0 0 1-1 1 16 16 0 0 1-15-15 1 1 0 0 1 1-1z" />
        </svg>
      )
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="3" />
        </svg>
      )
  }
}

export default ContactIcon
