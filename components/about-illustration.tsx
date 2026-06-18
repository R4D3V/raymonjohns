export default function AboutIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 800 220" className={className} preserveAspectRatio="xMidYMid meet">
      {/* left half: code editor */}
      <g>
        <rect x="30" y="20" width="330" height="180" rx="18" fill="none" stroke="#5e78b2" strokeWidth="2" opacity="0.35" />
        <line x1="30" y1="50" x2="360" y2="50" stroke="#5e78b2" strokeWidth="1.5" opacity="0.35" />
        <circle cx="48" cy="35" r="3.5" fill="#e2766c" opacity="0.7" />
        <circle cx="60" cy="35" r="3.5" fill="#f4a33c" opacity="0.7" />
        <circle cx="72" cy="35" r="3.5" fill="#6fb37f" opacity="0.7" />

        <rect x="50" y="68" width="120" height="10" rx="5" fill="#5e78b2" opacity="0.55" />
        <rect x="50" y="86" width="180" height="10" rx="5" fill="#1b1e2b" opacity="0.5" />
        <rect x="70" y="104" width="150" height="10" rx="5" fill="#e2766c" opacity="0.45" />
        <rect x="70" y="122" width="110" height="10" rx="5" fill="#1b1e2b" opacity="0.4" />
        <rect x="50" y="140" width="90" height="10" rx="5" fill="#6fb37f" opacity="0.5" />

        <text x="50" y="178" fontFamily="monospace" fontSize="11" letterSpacing="2" fill="#5e78b2" opacity="0.8">
          npm run dev
        </text>
      </g>

      {/* connector */}
      <path
        d="M360 110 C 390 110, 410 110, 440 110"
        fill="none"
        stroke="#8d93a6"
        strokeWidth="2"
        strokeDasharray="4 6"
        opacity="0.6"
      />
      <circle cx="400" cy="110" r="4" fill="#7c5cfc" opacity="0.6" />

      {/* right half: device repair */}
      <g>
        <rect x="440" y="20" width="330" height="180" rx="18" fill="none" stroke="#f4a33c" strokeWidth="2" opacity="0.35" />

        <rect x="480" y="48" width="80" height="140" rx="14" fill="none" stroke="#1b1e2b" strokeWidth="2.5" opacity="0.7" />
        <line x1="500" y1="60" x2="540" y2="60" stroke="#1b1e2b" strokeWidth="2" opacity="0.4" />
        <rect x="492" y="80" width="56" height="80" rx="4" fill="#1b1e2b" opacity="0.08" />

        {/* screwdriver */}
        <line x1="610" y1="170" x2="660" y2="120" stroke="#5b6072" strokeWidth="5" strokeLinecap="round" />
        <rect x="655" y="108" width="22" height="22" rx="3" fill="#f4a33c" opacity="0.85" transform="rotate(45 666 119)" />

        {/* circuit dots */}
        <circle cx="700" cy="70" r="3" fill="#6fb37f" opacity="0.7" />
        <circle cx="720" cy="90" r="3" fill="#6fb37f" opacity="0.5" />
        <circle cx="690" cy="100" r="3" fill="#6fb37f" opacity="0.6" />
        <line x1="700" y1="70" x2="720" y2="90" stroke="#6fb37f" strokeWidth="1.5" opacity="0.4" />
        <line x1="690" y1="100" x2="720" y2="90" stroke="#6fb37f" strokeWidth="1.5" opacity="0.4" />

        <text x="480" y="38" fontFamily="monospace" fontSize="11" letterSpacing="2" fill="#f4a33c" opacity="0.8">
          flashing firmware
        </text>
      </g>
    </svg>
  );
}
