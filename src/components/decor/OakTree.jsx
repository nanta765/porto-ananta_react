/**
 * OakTree — a hand-drawn-style oak rendered as original inline SVG, inspired
 * by a vintage ink/watercolour sketch: a curved, textured trunk rising from
 * the bottom-left that forks into fine branches, topped with loose clusters
 * of small oak leaves in sepia / ochre with a few cool-gray accents.
 *
 * Purely decorative: aria-hidden, non-focusable, never interactive. All colour
 * comes from palette tokens (--bark, --foliage, ...) so it adapts to themes.
 * Kept lightweight — leaf clusters are drawn as scattered dots/dabs rather
 * than hundreds of individual paths.
 */
function OakTree({ className }) {
  // A reusable leaf-cluster: a soft scatter of little dabs around (cx, cy).
  // Deterministic offsets keep the render stable and cheap.
  const cluster = (cx, cy, r, fill, key) => {
    const dabs = [
      [0, 0, 3.2],
      [r * 0.6, -r * 0.4, 2.6],
      [-r * 0.5, -r * 0.5, 2.4],
      [r * 0.4, r * 0.5, 2.8],
      [-r * 0.6, r * 0.3, 2.3],
      [r * 0.9, r * 0.1, 2.1],
      [-r * 0.9, -r * 0.1, 2.2],
      [r * 0.2, -r * 0.9, 2.0],
      [-r * 0.2, r * 0.9, 2.4],
      [r * 0.7, -r * 0.8, 1.8],
      [-r * 0.7, r * 0.7, 1.9],
    ]
    return (
      <g key={key} fill={fill} stroke="none">
        {dabs.map(([dx, dy, rr], i) => (
          <circle key={i} cx={cx + dx} cy={cy + dy} r={rr} />
        ))}
      </g>
    )
  }

  return (
    <svg
      className={className}
      viewBox="0 0 360 520"
      fill="none"
      aria-hidden="true"
      focusable="false"
      role="presentation"
    >
      {/* ── Trunk & bark texture ── */}
      <g
        stroke="var(--bark)"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      >
        {/* main trunk, curving up from the bottom-left */}
        <path
          d="M70 520 C 78 440, 96 380, 120 330 C 134 300, 150 272, 150 240"
          strokeWidth="9"
        />
        {/* trunk inner highlight */}
        <path
          d="M92 512 C 100 440, 116 384, 136 338"
          strokeWidth="2"
          stroke="var(--bark-light)"
        />
        {/* bark cross-hatch texture near the base */}
        <g strokeWidth="1" stroke="var(--bark-light)" opacity="0.7">
          <path d="M66 470 C 78 466, 90 466, 100 470" />
          <path d="M70 440 C 82 436, 94 436, 104 440" />
          <path d="M76 410 C 88 406, 100 406, 110 410" />
          <path d="M82 382 C 94 378, 106 378, 116 382" />
          <path d="M90 352 C 100 350, 110 350, 120 354" />
        </g>

        {/* primary fork */}
        <path
          d="M150 260 C 150 232, 142 208, 120 184 C 104 166, 86 150, 70 128"
          strokeWidth="6"
        />
        <path
          d="M150 268 C 160 240, 178 214, 204 192 C 226 172, 250 154, 268 128"
          strokeWidth="6"
        />
        {/* secondary branches */}
        <path d="M150 300 C 134 286, 118 276, 98 270" strokeWidth="3.4" />
        <path d="M150 320 C 166 310, 184 304, 206 302" strokeWidth="3.4" />
        <path d="M120 200 C 104 190, 90 182, 74 168" strokeWidth="2.6" />
        <path d="M204 196 C 222 182, 240 172, 258 156" strokeWidth="2.6" />
        <path d="M132 232 C 118 222, 106 216, 92 212" strokeWidth="2.4" />
        <path d="M172 224 C 190 214, 206 206, 224 200" strokeWidth="2.4" />
        {/* fine twigs reaching into the canopy */}
        <g strokeWidth="1.4" stroke="var(--bark-light)">
          <path d="M70 128 C 58 116, 48 104, 42 90" />
          <path d="M70 128 C 76 112, 80 98, 82 82" />
          <path d="M268 128 C 280 116, 290 104, 296 90" />
          <path d="M268 128 C 262 112, 258 98, 256 82" />
          <path d="M150 240 C 150 216, 150 196, 150 176" />
          <path d="M150 176 C 142 160, 136 146, 132 130" />
          <path d="M150 176 C 160 160, 168 146, 174 130" />
        </g>
      </g>

      {/* ── Foliage: layered leaf clusters, cool accents first (behind) ── */}
      <g opacity="0.85">
        {cluster(44, 86, 16, 'var(--foliage-cool)', 'c1')}
        {cluster(296, 86, 16, 'var(--foliage-cool)', 'c2')}
        {cluster(150, 150, 15, 'var(--foliage-cool)', 'c3')}
        {cluster(96, 258, 13, 'var(--foliage-cool)', 'c4')}
      </g>
      <g>
        {cluster(60, 96, 20, 'var(--foliage)', 'f1')}
        {cluster(96, 70, 18, 'var(--foliage2)', 'f2')}
        {cluster(132, 96, 19, 'var(--foliage)', 'f3')}
        {cluster(174, 92, 18, 'var(--foliage2)', 'f4')}
        {cluster(214, 112, 20, 'var(--foliage)', 'f5')}
        {cluster(256, 90, 18, 'var(--foliage2)', 'f6')}
        {cluster(286, 118, 17, 'var(--foliage)', 'f7')}
        {cluster(118, 132, 17, 'var(--foliage2)', 'f8')}
        {cluster(196, 150, 18, 'var(--foliage)', 'f9')}
        {cluster(150, 176, 16, 'var(--foliage2)', 'f10')}
        {cluster(226, 182, 15, 'var(--foliage)', 'f11')}
        {cluster(206, 300, 14, 'var(--foliage2)', 'f12')}
      </g>
    </svg>
  )
}

export default OakTree
