function WindowsThumb() {
  return (
    <svg viewBox="0 0 400 220" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="220" fill="#0c1a2e" />
      <rect x="0" y="0" width="400" height="220" fill="url(#win-grad)" opacity="0.4" />
      <defs>
        <linearGradient id="win-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#5e78b2" />
          <stop offset="100%" stopColor="#0c1a2e" />
        </linearGradient>
      </defs>
      {/* taskbar */}
      <rect x="0" y="186" width="400" height="34" fill="#111e33" opacity="0.9" />
      {/* start button squares */}
      <rect x="12" y="195" width="7" height="7" rx="1" fill="#5e78b2" opacity="0.9" />
      <rect x="21" y="195" width="7" height="7" rx="1" fill="#5e78b2" opacity="0.65" />
      <rect x="12" y="204" width="7" height="7" rx="1" fill="#5e78b2" opacity="0.65" />
      <rect x="21" y="204" width="7" height="7" rx="1" fill="#5e78b2" opacity="0.4" />
      {/* windows */}
      <rect x="30" y="24" width="200" height="140" rx="6" fill="#182236" stroke="#5e78b2" strokeWidth="1" strokeOpacity="0.4" />
      <rect x="30" y="24" width="200" height="26" rx="6" fill="#1e2f48" />
      <circle cx="46" cy="37" r="4" fill="#e2766c" opacity="0.8" />
      <circle cx="58" cy="37" r="4" fill="#f4a33c" opacity="0.8" />
      <circle cx="70" cy="37" r="4" fill="#6fb37f" opacity="0.8" />
      <rect x="44" y="62" width="100" height="8" rx="3" fill="#5e78b2" opacity="0.55" />
      <rect x="44" y="76" width="160" height="8" rx="3" fill="#8d93a6" opacity="0.3" />
      <rect x="44" y="90" width="140" height="8" rx="3" fill="#8d93a6" opacity="0.25" />
      <rect x="44" y="116" width="70" height="20" rx="10" fill="#5e78b2" opacity="0.7" />
      {/* floating card */}
      <rect x="200" y="80" width="170" height="110" rx="10" fill="#182236" stroke="#5e78b2" strokeWidth="1" strokeOpacity="0.3" />
      <rect x="215" y="100" width="140" height="60" rx="4" fill="#0c1a2e" opacity="0.6" />
      <rect x="225" y="112" width="60" height="8" rx="3" fill="#5e78b2" opacity="0.6" />
      <rect x="225" y="126" width="100" height="6" rx="3" fill="#8d93a6" opacity="0.3" />
      <rect x="225" y="138" width="80" height="6" rx="3" fill="#8d93a6" opacity="0.2" />
    </svg>
  );
}

function MacOSThumb() {
  return (
    <svg viewBox="0 0 400 220" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="mac-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2a1a1a" />
          <stop offset="100%" stopColor="#1a1015" />
        </linearGradient>
      </defs>
      <rect width="400" height="220" fill="url(#mac-grad)" />
      {/* menubar */}
      <rect x="0" y="0" width="400" height="22" fill="#111" opacity="0.9" />
      <circle cx="16" cy="11" r="3" fill="white" opacity="0.5" />
      <rect x="26" y="7" width="30" height="8" rx="3" fill="white" opacity="0.12" />
      <rect x="62" y="7" width="22" height="8" rx="3" fill="white" opacity="0.08" />
      <rect x="90" y="7" width="28" height="8" rx="3" fill="white" opacity="0.08" />
      <rect x="340" y="7" width="50" height="8" rx="3" fill="white" opacity="0.1" />
      {/* dock */}
      <rect x="80" y="188" width="240" height="26" rx="13" fill="#222" opacity="0.7" />
      {[ "#e2766c", "#f4a33c", "#6fb37f", "#5e78b2", "#7c5cfc"].map((c, i) => (
        <circle key={i} cx={112 + i * 44} cy={201} r={9} fill={c} opacity={0.85} />
      ))}
      {/* finder window */}
      <rect x="40" y="30" width="230" height="150" rx="10" fill="#1e1e1e" />
      <rect x="40" y="30" width="230" height="34" rx="10" fill="#2a2a2a" />
      <rect x="40" y="54" width="230" height="10" fill="#2a2a2a" />
      <circle cx="56" cy="47" r="5" fill="#e2766c" opacity="0.9" />
      <circle cx="70" cy="47" r="5" fill="#f4a33c" opacity="0.9" />
      <circle cx="84" cy="47" r="5" fill="#6fb37f" opacity="0.9" />
      <rect x="55" y="75" width="60" height="80" rx="6" fill="#2a2a2a" />
      <rect x="125" y="75" width="130" height="8" rx="3" fill="#e2766c" opacity="0.5" />
      <rect x="125" y="90" width="130" height="6" rx="3" fill="#8d93a6" opacity="0.25" />
      <rect x="125" y="102" width="100" height="6" rx="3" fill="#8d93a6" opacity="0.2" />
      <rect x="125" y="120" width="50" height="18" rx="9" fill="#e2766c" opacity="0.6" />
      {/* floating pill */}
      <rect x="240" y="100" width="130" height="60" rx="12" fill="#1e1e1e" stroke="#e2766c" strokeWidth="1" strokeOpacity="0.25" />
      <rect x="254" y="116" width="60" height="6" rx="3" fill="#e2766c" opacity="0.5" />
      <rect x="254" y="128" width="90" height="6" rx="3" fill="#8d93a6" opacity="0.2" />
    </svg>
  );
}

function AndroidThumb() {
  return (
    <svg viewBox="0 0 400 220" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="and-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0d1f14" />
          <stop offset="100%" stopColor="#071209" />
        </linearGradient>
      </defs>
      <rect width="400" height="220" fill="url(#and-grad)" />
      {/* phone frame */}
      <rect x="130" y="10" width="140" height="200" rx="20" fill="#111f15" stroke="#6fb37f" strokeWidth="1.5" strokeOpacity="0.5" />
      <rect x="145" y="26" width="110" height="170" rx="12" fill="#0d1a0f" />
      {/* notch */}
      <rect x="175" y="18" width="50" height="6" rx="3" fill="#0d1a0f" opacity="0.9" />
      {/* status bar dots */}
      <circle cx="165" cy="22" r="2" fill="#6fb37f" opacity="0.6" />
      <rect x="330" y="22" width="22" height="5" rx="2" fill="#6fb37f" opacity="0.3" />
      {/* home screen grid */}
      {[0,1,2,3].map(col => [0,1,2].map(row => (
        <rect
          key={`${col}-${row}`}
          x={155 + col * 26}
          y={42 + row * 40}
          width={20}
          height={20}
          rx="6"
          fill="#6fb37f"
          opacity={0.1 + (col + row) * 0.06}
        />
      )))}
      {/* featured app icon */}
      <rect x="163" y="154" width="74" height="26" rx="13" fill="#6fb37f" opacity="0.7" />
      <text x="200" y="171" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fontWeight="700" fill="#0d1a0f">
        Download
      </text>
      {/* side floating card */}
      <rect x="10" y="48" width="112" height="60" rx="10" fill="#0d1a0f" stroke="#6fb37f" strokeWidth="1" strokeOpacity="0.3" />
      <rect x="22" y="62" width="45" height="6" rx="3" fill="#6fb37f" opacity="0.6" />
      <rect x="22" y="74" width="80" height="5" rx="3" fill="#8d93a6" opacity="0.25" />
      <rect x="22" y="85" width="60" height="5" rx="3" fill="#8d93a6" opacity="0.2" />
      {/* right floating card */}
      <rect x="280" y="48" width="112" height="60" rx="10" fill="#0d1a0f" stroke="#6fb37f" strokeWidth="1" strokeOpacity="0.3" />
      <rect x="292" y="62" width="45" height="6" rx="3" fill="#6fb37f" opacity="0.6" />
      <rect x="292" y="74" width="80" height="5" rx="3" fill="#8d93a6" opacity="0.25" />
      <rect x="292" y="85" width="60" height="5" rx="3" fill="#8d93a6" opacity="0.2" />
    </svg>
  );
}

function LinuxThumb() {
  return (
    <svg viewBox="0 0 400 220" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="linux-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0b1f10" />
          <stop offset="100%" stopColor="#061209" />
        </linearGradient>
        <radialGradient id="linux-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#6fb37f" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#6fb37f" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="220" fill="url(#linux-grad)" />
      <rect width="400" height="220" fill="url(#linux-glow)" />
      {/* terminal window */}
      <rect x="30" y="20" width="220" height="160" rx="8" fill="#0f2016" stroke="#6fb37f" strokeWidth="1" strokeOpacity="0.45" />
      <rect x="30" y="20" width="220" height="28" rx="8" fill="#172b1e" />
      <rect x="30" y="38" width="220" height="10" fill="#172b1e" />
      <circle cx="48" cy="34" r="4" fill="#e2766c" opacity="0.8" />
      <circle cx="62" cy="34" r="4" fill="#f4a33c" opacity="0.8" />
      <circle cx="76" cy="34" r="4" fill="#6fb37f" opacity="0.8" />
      {/* terminal text lines */}
      <rect x="46" y="58" width="12" height="7" rx="1" fill="#6fb37f" opacity="0.9" />
      <rect x="62" y="58" width="80" height="7" rx="3" fill="#8d93a6" opacity="0.35" />
      <rect x="46" y="72" width="12" height="7" rx="1" fill="#6fb37f" opacity="0.9" />
      <rect x="62" y="72" width="110" height="7" rx="3" fill="#6fb37f" opacity="0.45" />
      <rect x="46" y="86" width="12" height="7" rx="1" fill="#6fb37f" opacity="0.9" />
      <rect x="62" y="86" width="65" height="7" rx="3" fill="#8d93a6" opacity="0.3" />
      <rect x="46" y="100" width="12" height="7" rx="1" fill="#6fb37f" opacity="0.9" />
      <rect x="62" y="100" width="140" height="7" rx="3" fill="#6fb37f" opacity="0.35" />
      <rect x="46" y="114" width="12" height="7" rx="1" fill="#6fb37f" opacity="0.9" />
      <rect x="62" y="114" width="90" height="7" rx="3" fill="#8d93a6" opacity="0.25" />
      {/* blinking cursor */}
      <rect x="46" y="130" width="8" height="12" rx="1" fill="#6fb37f" opacity="0.85" />
      {/* floating info card */}
      <rect x="265" y="30" width="115" height="80" rx="10" fill="#0f2016" stroke="#6fb37f" strokeWidth="1" strokeOpacity="0.3" />
      <rect x="279" y="46" width="50" height="7" rx="3" fill="#6fb37f" opacity="0.65" />
      <rect x="279" y="60" width="85" height="6" rx="3" fill="#8d93a6" opacity="0.25" />
      <rect x="279" y="72" width="70" height="6" rx="3" fill="#8d93a6" opacity="0.2" />
      <rect x="279" y="84" width="40" height="14" rx="7" fill="#6fb37f" opacity="0.6" />
      {/* second card */}
      <rect x="265" y="122" width="115" height="60" rx="10" fill="#0f2016" stroke="#6fb37f" strokeWidth="1" strokeOpacity="0.2" />
      <rect x="279" y="136" width="60" height="6" rx="3" fill="#6fb37f" opacity="0.5" />
      <rect x="279" y="150" width="85" height="6" rx="3" fill="#8d93a6" opacity="0.2" />
      <rect x="279" y="162" width="50" height="6" rx="3" fill="#8d93a6" opacity="0.15" />
      {/* bottom bar */}
      <rect x="0" y="196" width="400" height="24" fill="#0d1a0f" opacity="0.8" />
      <circle cx="14" cy="208" r="4" fill="#6fb37f" opacity="0.6" />
      <rect x="24" y="204" width="40" height="8" rx="4" fill="#6fb37f" opacity="0.2" />
      <rect x="70" y="204" width="30" height="8" rx="4" fill="#8d93a6" opacity="0.15" />
      <rect x="340" y="204" width="50" height="8" rx="4" fill="#8d93a6" opacity="0.12" />
    </svg>
  );
}

const map: Record<string, () => React.ReactElement> = {
  windows: WindowsThumb,
  macos: MacOSThumb,
  android: AndroidThumb,
  linux: LinuxThumb,
};

export default function SoftwareThumbnail({ slug, className = "" }: { slug: string; className?: string }) {
  const Thumb = map[slug];
  if (!Thumb) return null;
  return <div className={`overflow-hidden ${className}`}><Thumb /></div>;
}
