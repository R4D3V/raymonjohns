type Props = {
  slug: string;
  className?: string;
};

function DumaniThumb() {
  return (
    <svg
      viewBox="0 0 400 300"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="400" height="300" fill="#0d0d0d" />
      <circle cx="350" cy="40" r="90" fill="#5e78b2" opacity="0.08" />
      <text
        x="28"
        y="44"
        fontFamily="Sora, sans-serif"
        fontWeight="700"
        fontSize="20"
        fill="#f4f5f7"
      >
        DM
      </text>
      <line x1="28" y1="56" x2="64" y2="56" stroke="#5e78b2" strokeWidth="2" />

      <rect x="28" y="96" width="220" height="22" rx="4" fill="#f4f5f7" />
      <rect
        x="28"
        y="128"
        width="160"
        height="22"
        rx="4"
        fill="#f4f5f7"
        opacity="0.85"
      />
      <rect x="28" y="166" width="240" height="8" rx="4" fill="#5e78b2" />

      <g opacity="0.9">
        <rect
          x="28"
          y="206"
          width="100"
          height="64"
          rx="10"
          fill="#1a1a1a"
          stroke="#2a2a2a"
        />
        <rect
          x="138"
          y="206"
          width="100"
          height="64"
          rx="10"
          fill="#1a1a1a"
          stroke="#2a2a2a"
        />
        <rect
          x="248"
          y="206"
          width="100"
          height="64"
          rx="10"
          fill="#1a1a1a"
          stroke="#2a2a2a"
        />
        <rect
          x="42"
          y="220"
          width="72"
          height="8"
          rx="3"
          fill="#5e78b2"
          opacity="0.6"
        />
        <rect
          x="152"
          y="220"
          width="72"
          height="8"
          rx="3"
          fill="#e2766c"
          opacity="0.6"
        />
        <rect
          x="262"
          y="220"
          width="72"
          height="8"
          rx="3"
          fill="#6fb37f"
          opacity="0.6"
        />
      </g>
    </svg>
  );
}

function KingsKeyThumb() {
  return (
    <svg
      viewBox="0 0 400 300"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="400" height="300" fill="#0c1726" />
      <polygon
        points="260,0 400,0 400,300 340,300"
        fill="#d4a843"
        opacity="0.08"
      />
      <text
        x="340"
        y="290"
        textAnchor="end"
        fontFamily="monospace"
        fontWeight="700"
        fontSize="120"
        fill="#d4a843"
        opacity="0.07"
      >
        01
      </text>

      <text
        x="28"
        y="50"
        fontFamily="sans-serif"
        fontWeight="800"
        fontSize="22"
        letterSpacing="1"
        fill="#d4a843"
      >
        KKT
      </text>
      <line x1="28" y1="62" x2="80" y2="62" stroke="#d4a843" strokeWidth="2" />

      <rect x="28" y="100" width="200" height="20" rx="2" fill="#eef1f6" />
      <rect
        x="28"
        y="128"
        width="140"
        height="20"
        rx="2"
        fill="#eef1f6"
        opacity="0.85"
      />

      <rect
        x="28"
        y="176"
        width="150"
        height="46"
        rx="8"
        fill="none"
        stroke="#d4a843"
        strokeWidth="1.5"
        opacity="0.7"
      />
      <text
        x="44"
        y="204"
        fontFamily="sans-serif"
        fontWeight="700"
        fontSize="13"
        fill="#d4a843"
      >
        Branding →
      </text>

      {/* corner brackets */}
      <path
        d="M370 20 L388 20 L388 38"
        stroke="#d4a843"
        strokeWidth="2"
        fill="none"
        opacity="0.8"
      />
      <path
        d="M30 280 L12 280 L12 262"
        stroke="#d4a843"
        strokeWidth="2"
        fill="none"
        opacity="0.5"
      />
    </svg>
  );
}

function MbuniThumb() {
  return (
    <svg
      viewBox="0 0 400 300"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="mbuniSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2a2118" />
          <stop offset="55%" stopColor="#4a3621" />
          <stop offset="100%" stopColor="#1b1410" />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill="url(#mbuniSky)" />
      <circle cx="300" cy="90" r="34" fill="#f4a33c" opacity="0.85" />

      <rect x="0" y="200" width="400" height="100" fill="#15100c" />
      <path
        d="M0 200 Q100 184 200 200 T400 196 V300 H0 Z"
        fill="#1d1611"
        opacity="0.9"
      />

      {/* acacia silhouette */}
      <g fill="#0f0b08">
        <rect x="120" y="170" width="6" height="40" />
        <ellipse cx="123" cy="160" rx="46" ry="14" />
        <ellipse cx="100" cy="170" rx="26" ry="9" />
        <ellipse cx="150" cy="172" rx="28" ry="9" />
      </g>

      <text
        x="28"
        y="252"
        fontFamily="Georgia, serif"
        fontStyle="italic"
        fontWeight="700"
        fontSize="26"
        fill="#f4ede1"
      >
        Mbuni
      </text>
      <text
        x="28"
        y="272"
        fontFamily="sans-serif"
        fontSize="10"
        letterSpacing="3"
        fill="#f4a33c"
      >
        AFRICAN SAFARIS
      </text>
    </svg>
  );
}

function SkillsTechThumb() {
  return (
    <svg
      viewBox="0 0 400 300"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="400" height="300" fill="#111318" />
      {/* subtle grid lines */}
      <line
        x1="0"
        y1="150"
        x2="400"
        y2="150"
        stroke="#e2766c"
        strokeWidth="0.4"
        opacity="0.15"
      />
      <line
        x1="200"
        y1="0"
        x2="200"
        y2="300"
        stroke="#e2766c"
        strokeWidth="0.4"
        opacity="0.15"
      />
      {/* glow blob */}
      <circle cx="60" cy="260" r="100" fill="#e2766c" opacity="0.06" />

      {/* monogram */}
      <text
        x="28"
        y="48"
        fontFamily="monospace"
        fontWeight="700"
        fontSize="22"
        fill="#e2766c"
      >
        S&amp;T
      </text>
      <line x1="28" y1="58" x2="76" y2="58" stroke="#e2766c" strokeWidth="2" />

      {/* headline bars */}
      <rect x="28" y="88" width="210" height="18" rx="3" fill="#f0f2f5" />
      <rect
        x="28"
        y="114"
        width="150"
        height="18"
        rx="3"
        fill="#f0f2f5"
        opacity="0.7"
      />

      {/* service pills */}
      <rect
        x="28"
        y="152"
        width="88"
        height="28"
        rx="14"
        fill="#e2766c"
        opacity="0.15"
        stroke="#e2766c"
        strokeWidth="1"
      />
      <text x="46" y="171" fontFamily="sans-serif" fontSize="10" fill="#e2766c">
        Repair
      </text>

      <rect
        x="124"
        y="152"
        width="88"
        height="28"
        rx="14"
        fill="#e2766c"
        opacity="0.15"
        stroke="#e2766c"
        strokeWidth="1"
      />
      <text
        x="138"
        y="171"
        fontFamily="sans-serif"
        fontSize="10"
        fill="#e2766c"
      >
        Diagnostics
      </text>

      <rect
        x="220"
        y="152"
        width="88"
        height="28"
        rx="14"
        fill="#e2766c"
        opacity="0.15"
        stroke="#e2766c"
        strokeWidth="1"
      />
      <text
        x="242"
        y="171"
        fontFamily="sans-serif"
        fontSize="10"
        fill="#e2766c"
      >
        Shop
      </text>

      {/* stat strip */}
      <rect x="28" y="204" width="344" height="60" rx="10" fill="#1c2028" />
      <rect
        x="44"
        y="220"
        width="60"
        height="10"
        rx="3"
        fill="#e2766c"
        opacity="0.5"
      />
      <rect
        x="44"
        y="236"
        width="40"
        height="6"
        rx="3"
        fill="#f0f2f5"
        opacity="0.2"
      />
      <rect
        x="164"
        y="220"
        width="60"
        height="10"
        rx="3"
        fill="#e2766c"
        opacity="0.5"
      />
      <rect
        x="164"
        y="236"
        width="40"
        height="6"
        rx="3"
        fill="#f0f2f5"
        opacity="0.2"
      />
      <rect
        x="284"
        y="220"
        width="60"
        height="10"
        rx="3"
        fill="#e2766c"
        opacity="0.5"
      />
      <rect
        x="284"
        y="236"
        width="40"
        height="6"
        rx="3"
        fill="#f0f2f5"
        opacity="0.2"
      />
    </svg>
  );
}

function MattaMotorsThumb() {
  return (
    <svg
      viewBox="0 0 400 300"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="400" height="300" fill="#0a0c0f" />
      {/* chrome sweep */}
      <polygon
        points="280,0 400,0 400,300 380,300"
        fill="#5e78b2"
        opacity="0.07"
      />
      {/* large muted year watermark */}
      <text
        x="360"
        y="280"
        textAnchor="end"
        fontFamily="monospace"
        fontWeight="700"
        fontSize="110"
        fill="#5e78b2"
        opacity="0.05"
      >
        26
      </text>

      {/* monogram */}
      <text
        x="28"
        y="50"
        fontFamily="sans-serif"
        fontWeight="800"
        fontSize="22"
        letterSpacing="2"
        fill="#f0f2f5"
      >
        MM
      </text>
      <line x1="28" y1="62" x2="78" y2="62" stroke="#5e78b2" strokeWidth="2" />

      {/* headline bars */}
      <rect x="28" y="92" width="215" height="18" rx="3" fill="#f0f2f5" />
      <rect
        x="28"
        y="118"
        width="155"
        height="18"
        rx="3"
        fill="#f0f2f5"
        opacity="0.7"
      />

      {/* stylised car side-view silhouette */}
      <g opacity="0.55" fill="#5e78b2">
        {/* body */}
        <path d="M28 190 Q60 158 130 155 Q180 152 230 158 Q270 162 290 175 L295 190 Z" />
        {/* roof */}
        <path
          d="M90 155 Q120 130 180 128 Q220 127 250 140 L255 155 Z"
          fill="#3d5a99"
        />
        {/* wheels */}
        <circle
          cx="90"
          cy="192"
          r="18"
          fill="#0a0c0f"
          stroke="#5e78b2"
          strokeWidth="3"
        />
        <circle
          cx="240"
          cy="192"
          r="18"
          fill="#0a0c0f"
          stroke="#5e78b2"
          strokeWidth="3"
        />
        <circle cx="90" cy="192" r="7" fill="#5e78b2" opacity="0.4" />
        <circle cx="240" cy="192" r="7" fill="#5e78b2" opacity="0.4" />
      </g>

      {/* CTA pill */}
      <rect
        x="28"
        y="240"
        width="140"
        height="38"
        rx="8"
        fill="none"
        stroke="#5e78b2"
        strokeWidth="1.5"
        opacity="0.7"
      />
      <text
        x="44"
        y="264"
        fontFamily="sans-serif"
        fontWeight="700"
        fontSize="13"
        fill="#5e78b2"
      >
        Get a Quote →
      </text>

      {/* corner bracket */}
      <path
        d="M370 20 L388 20 L388 38"
        stroke="#5e78b2"
        strokeWidth="2"
        fill="none"
        opacity="0.6"
      />
    </svg>
  );
}

function MashtechThumb() {
  return (
    <svg
      viewBox="0 0 400 300"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="400" height="300" fill="#0d1a12" />
      {/* glow blob */}
      <circle cx="340" cy="50" r="110" fill="#6fb37f" opacity="0.07" />

      {/* monogram */}
      <text
        x="28"
        y="48"
        fontFamily="sans-serif"
        fontWeight="800"
        fontSize="22"
        letterSpacing="1"
        fill="#6fb37f"
      >
        MST
      </text>
      <line x1="28" y1="60" x2="82" y2="60" stroke="#6fb37f" strokeWidth="2" />

      {/* headline bars */}
      <rect x="28" y="90" width="220" height="18" rx="3" fill="#eef5f0" />
      <rect
        x="28"
        y="116"
        width="160"
        height="18"
        rx="3"
        fill="#eef5f0"
        opacity="0.7"
      />

      {/* process steps */}
      <line
        x1="44"
        y1="172"
        x2="356"
        y2="172"
        stroke="#6fb37f"
        strokeWidth="1"
        opacity="0.25"
        strokeDasharray="4 4"
      />
      <circle
        cx="44"
        cy="172"
        r="10"
        fill="#6fb37f"
        stroke="#6fb37f"
        strokeWidth="1.5"
      />
      <circle cx="44" cy="172" r="4" fill="#0d1a12" />
      <circle
        cx="138"
        cy="172"
        r="10"
        fill="#1a2e1f"
        stroke="#6fb37f"
        strokeWidth="1.5"
      />
      <circle
        cx="232"
        cy="172"
        r="10"
        fill="#1a2e1f"
        stroke="#6fb37f"
        strokeWidth="1.5"
      />
      <circle
        cx="326"
        cy="172"
        r="10"
        fill="#1a2e1f"
        stroke="#6fb37f"
        strokeWidth="1.5"
      />
      <text
        x="44"
        y="194"
        textAnchor="middle"
        fontFamily="sans-serif"
        fontSize="9"
        fill="#6fb37f"
        opacity="0.7"
      >
        Research
      </text>
      <text
        x="138"
        y="194"
        textAnchor="middle"
        fontFamily="sans-serif"
        fontSize="9"
        fill="#6fb37f"
        opacity="0.7"
      >
        Design
      </text>
      <text
        x="232"
        y="194"
        textAnchor="middle"
        fontFamily="sans-serif"
        fontSize="9"
        fill="#6fb37f"
        opacity="0.7"
      >
        Build
      </text>
      <text
        x="326"
        y="194"
        textAnchor="middle"
        fontFamily="sans-serif"
        fontSize="9"
        fill="#6fb37f"
        opacity="0.7"
      >
        Launch
      </text>

      {/* testimonial card */}
      <rect
        x="28"
        y="218"
        width="344"
        height="56"
        rx="10"
        fill="#121f16"
        stroke="#2a3d2e"
      />
      <rect
        x="44"
        y="232"
        width="180"
        height="8"
        rx="3"
        fill="#6fb37f"
        opacity="0.3"
      />
      <rect
        x="44"
        y="248"
        width="120"
        height="6"
        rx="3"
        fill="#eef5f0"
        opacity="0.15"
      />
      <text
        x="338"
        y="260"
        fontFamily="Georgia, serif"
        fontSize="36"
        fill="#6fb37f"
        opacity="0.2"
      >
        "
      </text>
    </svg>
  );
}

function IceAgeGamingThumb() {
  return (
    <svg
      viewBox="0 0 400 300"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="iceGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#050d1a" />
          <stop offset="100%" stopColor="#091422" />
        </linearGradient>
        <radialGradient id="iceGlow" cx="70%" cy="30%" r="50%">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="300" fill="url(#iceGrad)" />
      <rect width="400" height="300" fill="url(#iceGlow)" />

      {/* ice shard decorators */}
      <polygon points="370,10 388,40 352,40" fill="#38bdf8" opacity="0.12" />
      <polygon points="20,260 36,290 4,290" fill="#38bdf8" opacity="0.08" />

      {/* monogram */}
      <text
        x="28"
        y="52"
        fontFamily="monospace"
        fontWeight="700"
        fontSize="24"
        letterSpacing="2"
        fill="#38bdf8"
      >
        IAG
      </text>
      <line x1="28" y1="64" x2="86" y2="64" stroke="#38bdf8" strokeWidth="2" />

      {/* headline bars */}
      <rect x="28" y="94" width="225" height="20" rx="3" fill="#e8f4ff" />
      <rect
        x="28"
        y="122"
        width="165"
        height="20"
        rx="3"
        fill="#e8f4ff"
        opacity="0.65"
      />

      {/* controller icon */}
      <rect
        x="130"
        y="155"
        width="140"
        height="60"
        rx="30"
        fill="#0d1f35"
        stroke="#38bdf8"
        strokeWidth="1.5"
      />
      {/* d-pad */}
      <rect
        x="145"
        y="177"
        width="22"
        height="8"
        rx="2"
        fill="#38bdf8"
        opacity="0.5"
      />
      <rect
        x="152"
        y="169"
        width="8"
        height="24"
        rx="2"
        fill="#38bdf8"
        opacity="0.5"
      />
      {/* buttons */}
      <circle
        cx="245"
        cy="177"
        r="6"
        fill="none"
        stroke="#38bdf8"
        strokeWidth="1.5"
        opacity="0.6"
      />
      <circle
        cx="258"
        cy="187"
        r="6"
        fill="none"
        stroke="#38bdf8"
        strokeWidth="1.5"
        opacity="0.6"
      />
      <circle
        cx="232"
        cy="187"
        r="6"
        fill="none"
        stroke="#38bdf8"
        strokeWidth="1.5"
        opacity="0.6"
      />
      <circle
        cx="245"
        cy="197"
        r="6"
        fill="none"
        stroke="#38bdf8"
        strokeWidth="1.5"
        opacity="0.6"
      />

      {/* tag line */}
      <text
        x="28"
        y="262"
        fontFamily="monospace"
        fontSize="10"
        letterSpacing="3"
        fill="#38bdf8"
        opacity="0.6"
      >
        GAMING · KAMPALA · UG
      </text>
    </svg>
  );
}

const map: Record<string, () => React.ReactElement> = {
  "dumani-media": DumaniThumb,
  "kings-key-tech": KingsKeyThumb,
  "mbuni-safaris": MbuniThumb,
  "skills-tech": SkillsTechThumb,
  "matta-motors": MattaMotorsThumb,
  "mashtech-solutions": MashtechThumb,
  "ice-age-gaming": IceAgeGamingThumb,
};

export default function ProjectThumbnail({ slug, className = "" }: Props) {
  const Thumb = map[slug];
  if (!Thumb) return null;

  return (
    <div className={`overflow-hidden ${className}`}>
      <Thumb />
    </div>
  );
}
