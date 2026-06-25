import { getProductBySlugStatic } from "@/lib/products";

type Props = {
  slug: string;
  className?: string;
};

// Real product photo URLs. Add a URL here to swap that product's
// thumbnail from the illustrated SVG icon to an actual photo.
const imageMap: Record<string, string> = {
  "braided-usbc-cable-2m":
    "https://i.ebayimg.com/images/g/VTsAAOSwGrdlE923/s-l960.webp",
  "slimline-android-phone-128gb":
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80",
  "midrange-phone-256gb-5g":
    "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=900&q=80",
  "rugged-outdoor-phone-128gb":
    "https://images.unsplash.com/photo-1605236453806-6ff36851218e?auto=format&fit=crop&w=900&q=80",
  "budget-entry-phone-64gb":
    "https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=900&q=80",
  "compact-flagship-phone-256gb":
    "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=900&q=80",
  "everyday-laptop-14-256gb":
    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=80",
  "creator-laptop-15-512gb":
    "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=80",
  "ultraportable-laptop-13-512gb":
    "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?auto=format&fit=crop&w=900&q=80",
  "budget-student-laptop-14-128gb":
    "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=900&q=80",
  "business-laptop-14-1tb":
    "https://images.unsplash.com/photo-1525373698358-041e3a460346?auto=format&fit=crop&w=900&q=80",
};

const accentMap: Record<string, string> = {
  "fastcharge-65w-gan": "#5e78b2",
  "braided-usbc-cable-2m": "#e2766c",
  "magsafe-power-bank-10k": "#7c5cfc",
  "anc-wireless-earbuds": "#6fb37f",
  "bluetooth-mini-speaker": "#5e78b2",
  "tempered-glass-screen-protector": "#e2766c",
  "shockproof-case-clear": "#6fb37f",
  "microsd-256gb": "#7c5cfc",
  "usb-c-flash-drive-128gb": "#5e78b2",
  "replacement-battery-universal": "#e2766c",
  "replacement-screen-universal": "#6fb37f",
};

const bgMap: Record<string, string> = {
  "fastcharge-65w-gan": "#0e1320",
  "braided-usbc-cable-2m": "#1c1210",
  "magsafe-power-bank-10k": "#160f24",
  "anc-wireless-earbuds": "#0d1a12",
  "bluetooth-mini-speaker": "#0e1320",
  "tempered-glass-screen-protector": "#1c1210",
  "shockproof-case-clear": "#0d1a12",
  "microsd-256gb": "#160f24",
  "usb-c-flash-drive-128gb": "#0e1320",
  "replacement-battery-universal": "#1c1210",
  "replacement-screen-universal": "#0d1a12",
};

function Wrap({
  accent,
  bg,
  children,
}: {
  accent: string;
  bg: string;
  children: React.ReactNode;
}) {
  return (
    <svg
      viewBox="0 0 400 300"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="400" height="300" fill={bg} />
      <circle cx="340" cy="50" r="120" fill={accent} opacity="0.07" />
      {children}
    </svg>
  );
}

function ChargerThumb({ accent, bg }: { accent: string; bg: string }) {
  return (
    <Wrap accent={accent} bg={bg}>
      <rect
        x="150"
        y="90"
        width="100"
        height="130"
        rx="14"
        fill="none"
        stroke={accent}
        strokeWidth="3"
      />
      <rect x="170" y="200" width="14" height="28" fill={accent} opacity="0.7" />
      <rect x="216" y="200" width="14" height="28" fill={accent} opacity="0.7" />
      <path
        d="M210 110 L188 152 L202 152 L194 192 L222 144 L206 144 Z"
        fill={accent}
      />
      <text
        x="200"
        y="252"
        textAnchor="middle"
        fontFamily="monospace"
        fontSize="12"
        letterSpacing="2"
        fill={accent}
        opacity="0.7"
      >
        65W GaN
      </text>
    </Wrap>
  );
}

function CableThumb({ accent, bg }: { accent: string; bg: string }) {
  return (
    <Wrap accent={accent} bg={bg}>
      <path
        d="M70 240 Q140 100 200 180 T330 70"
        fill="none"
        stroke={accent}
        strokeWidth="6"
        strokeLinecap="round"
        opacity="0.85"
      />
      <rect x="52" y="226" width="30" height="20" rx="5" fill={accent} />
      <rect x="316" y="56" width="30" height="20" rx="5" fill={accent} />
      <text
        x="200"
        y="262"
        textAnchor="middle"
        fontFamily="monospace"
        fontSize="12"
        letterSpacing="2"
        fill={accent}
        opacity="0.7"
      >
        BRAIDED · 2M
      </text>
    </Wrap>
  );
}

function PowerBankThumb({ accent, bg }: { accent: string; bg: string }) {
  return (
    <Wrap accent={accent} bg={bg}>
      <rect
        x="140"
        y="80"
        width="120"
        height="150"
        rx="18"
        fill="none"
        stroke={accent}
        strokeWidth="3"
      />
      <circle cx="200" cy="140" r="28" fill="none" stroke={accent} strokeWidth="2.5" opacity="0.7" />
      <circle cx="200" cy="140" r="10" fill={accent} opacity="0.5" />
      <rect x="170" y="184" width="60" height="10" rx="3" fill={accent} opacity="0.4" />
      <rect x="170" y="200" width="40" height="8" rx="3" fill={accent} opacity="0.25" />
      <text
        x="200"
        y="252"
        textAnchor="middle"
        fontFamily="monospace"
        fontSize="12"
        letterSpacing="2"
        fill={accent}
        opacity="0.7"
      >
        10,000 mAh
      </text>
    </Wrap>
  );
}

function EarbudsThumb({ accent, bg }: { accent: string; bg: string }) {
  return (
    <Wrap accent={accent} bg={bg}>
      <rect x="140" y="110" width="50" height="68" rx="20" fill="none" stroke={accent} strokeWidth="3" />
      <circle cx="165" cy="130" r="9" fill={accent} opacity="0.6" />
      <path d="M150 168 Q150 196 168 200" fill="none" stroke={accent} strokeWidth="3" opacity="0.5" />

      <rect x="210" y="110" width="50" height="68" rx="20" fill="none" stroke={accent} strokeWidth="3" />
      <circle cx="235" cy="130" r="9" fill={accent} opacity="0.6" />
      <path d="M250 168 Q250 196 232 200" fill="none" stroke={accent} strokeWidth="3" opacity="0.5" />

      <text
        x="200"
        y="252"
        textAnchor="middle"
        fontFamily="monospace"
        fontSize="12"
        letterSpacing="2"
        fill={accent}
        opacity="0.7"
      >
        ANC · BT 5.3
      </text>
    </Wrap>
  );
}

function SpeakerThumb({ accent, bg }: { accent: string; bg: string }) {
  return (
    <Wrap accent={accent} bg={bg}>
      <rect x="150" y="90" width="100" height="120" rx="20" fill="none" stroke={accent} strokeWidth="3" />
      <circle cx="200" cy="150" r="34" fill="none" stroke={accent} strokeWidth="2.5" opacity="0.7" />
      <circle cx="200" cy="150" r="16" fill={accent} opacity="0.4" />
      <circle cx="200" cy="105" r="3" fill={accent} opacity="0.6" />
      <path
        d="M268 130 Q280 150 268 170"
        fill="none"
        stroke={accent}
        strokeWidth="2.5"
        opacity="0.5"
      />
      <path
        d="M282 118 Q300 150 282 182"
        fill="none"
        stroke={accent}
        strokeWidth="2.5"
        opacity="0.3"
      />
      <text
        x="200"
        y="252"
        textAnchor="middle"
        fontFamily="monospace"
        fontSize="12"
        letterSpacing="2"
        fill={accent}
        opacity="0.7"
      >
        10W · BT 5.0
      </text>
    </Wrap>
  );
}

function ScreenProtectorThumb({ accent, bg }: { accent: string; bg: string }) {
  return (
    <Wrap accent={accent} bg={bg}>
      <rect x="150" y="80" width="100" height="160" rx="16" fill="none" stroke={accent} strokeWidth="3" opacity="0.4" />
      <rect x="160" y="68" width="100" height="160" rx="16" fill="none" stroke={accent} strokeWidth="3" />
      <rect x="172" y="84" width="76" height="128" rx="6" fill={accent} opacity="0.12" />
      <line x1="172" y1="120" x2="248" y2="100" stroke={accent} strokeWidth="2" opacity="0.5" />
      <text
        x="200"
        y="252"
        textAnchor="middle"
        fontFamily="monospace"
        fontSize="12"
        letterSpacing="2"
        fill={accent}
        opacity="0.7"
      >
        9H TEMPERED
      </text>
    </Wrap>
  );
}

function CaseThumb({ accent, bg }: { accent: string; bg: string }) {
  return (
    <Wrap accent={accent} bg={bg}>
      <rect x="145" y="70" width="110" height="170" rx="22" fill="none" stroke={accent} strokeWidth="3" opacity="0.85" />
      <rect x="158" y="84" width="84" height="142" rx="12" fill={accent} opacity="0.08" />
      <circle cx="226" cy="98" r="14" fill="none" stroke={accent} strokeWidth="2.5" opacity="0.6" />
      <circle cx="226" cy="98" r="5" fill={accent} opacity="0.6" />
      <path d="M145 90 Q137 90 137 100 L137 118" fill="none" stroke={accent} strokeWidth="3" opacity="0.4" />
      <text
        x="200"
        y="262"
        textAnchor="middle"
        fontFamily="monospace"
        fontSize="12"
        letterSpacing="2"
        fill={accent}
        opacity="0.7"
      >
        DROP-TESTED
      </text>
    </Wrap>
  );
}

function MicroSDThumb({ accent, bg }: { accent: string; bg: string }) {
  return (
    <Wrap accent={accent} bg={bg}>
      <path
        d="M165 80 H230 L250 100 V220 H165 Z"
        fill="none"
        stroke={accent}
        strokeWidth="3"
      />
      <rect x="178" y="96" width="50" height="14" rx="2" fill={accent} opacity="0.5" />
      <rect x="178" y="120" width="60" height="60" rx="3" fill={accent} opacity="0.1" />
      <line x1="182" y1="134" x2="228" y2="134" stroke={accent} strokeWidth="2" opacity="0.4" />
      <line x1="182" y1="148" x2="218" y2="148" stroke={accent} strokeWidth="2" opacity="0.3" />
      <text
        x="200"
        y="252"
        textAnchor="middle"
        fontFamily="monospace"
        fontSize="12"
        letterSpacing="2"
        fill={accent}
        opacity="0.7"
      >
        256GB · U3/A2
      </text>
    </Wrap>
  );
}

function FlashDriveThumb({ accent, bg }: { accent: string; bg: string }) {
  return (
    <Wrap accent={accent} bg={bg}>
      <rect x="150" y="120" width="100" height="50" rx="10" fill="none" stroke={accent} strokeWidth="3" />
      <rect x="120" y="135" width="30" height="20" rx="4" fill={accent} opacity="0.7" />
      <rect x="250" y="135" width="30" height="20" rx="4" fill="none" stroke={accent} strokeWidth="2.5" opacity="0.6" />
      <circle cx="200" cy="145" r="4" fill={accent} opacity="0.5" />
      <text
        x="200"
        y="252"
        textAnchor="middle"
        fontFamily="monospace"
        fontSize="12"
        letterSpacing="2"
        fill={accent}
        opacity="0.7"
      >
        128GB · C+A
      </text>
    </Wrap>
  );
}

function BatteryThumb({ accent, bg }: { accent: string; bg: string }) {
  return (
    <Wrap accent={accent} bg={bg}>
      <rect x="140" y="110" width="120" height="80" rx="10" fill="none" stroke={accent} strokeWidth="3" />
      <rect x="260" y="135" width="10" height="30" rx="3" fill={accent} opacity="0.6" />
      <rect x="150" y="120" width="30" height="60" rx="3" fill={accent} opacity="0.5" />
      <path
        d="M205 122 L188 152 L202 152 L196 178 L218 142 L204 142 Z"
        fill={accent}
      />
      <text
        x="200"
        y="252"
        textAnchor="middle"
        fontFamily="monospace"
        fontSize="12"
        letterSpacing="2"
        fill={accent}
        opacity="0.7"
      >
        FITTED IN-STORE
      </text>
    </Wrap>
  );
}

function ScreenThumb({ accent, bg }: { accent: string; bg: string }) {
  return (
    <Wrap accent={accent} bg={bg}>
      <rect x="150" y="70" width="100" height="160" rx="14" fill="none" stroke={accent} strokeWidth="3" />
      <rect x="162" y="86" width="76" height="128" rx="4" fill={accent} opacity="0.1" />
      <path
        d="M170 150 L200 110 L185 150 L210 150 L180 195"
        fill="none"
        stroke={accent}
        strokeWidth="2.5"
        strokeLinejoin="round"
        opacity="0.7"
      />
      <text
        x="200"
        y="252"
        textAnchor="middle"
        fontFamily="monospace"
        fontSize="12"
        letterSpacing="2"
        fill={accent}
        opacity="0.7"
      >
        GLASS + DIGITISER
      </text>
    </Wrap>
  );
}

function GenericThumb({
  accent,
  bg,
  label,
}: {
  accent: string;
  bg: string;
  label: string;
}) {
  return (
    <Wrap accent={accent} bg={bg}>
      <rect
        x="120"
        y="78"
        width="160"
        height="150"
        rx="18"
        fill="none"
        stroke={accent}
        strokeWidth="3"
        opacity="0.55"
      />
      <circle cx="200" cy="148" r="34" fill={accent} opacity="0.12" />
      <text
        x="200"
        y="158"
        textAnchor="middle"
        fontFamily="monospace"
        fontWeight="bold"
        fontSize="26"
        fill={accent}
        opacity="0.85"
      >
        {label}
      </text>
      <text
        x="200"
        y="252"
        textAnchor="middle"
        fontFamily="monospace"
        fontSize="11"
        letterSpacing="2"
        fill={accent}
        opacity="0.6"
      >
        IN STOCK
      </text>
    </Wrap>
  );
}

const componentMap: Record<
  string,
  (p: { accent: string; bg: string }) => React.ReactElement
> = {
  "fastcharge-65w-gan": ChargerThumb,
  "braided-usbc-cable-2m": CableThumb,
  "magsafe-power-bank-10k": PowerBankThumb,
  "anc-wireless-earbuds": EarbudsThumb,
  "bluetooth-mini-speaker": SpeakerThumb,
  "tempered-glass-screen-protector": ScreenProtectorThumb,
  "shockproof-case-clear": CaseThumb,
  "microsd-256gb": MicroSDThumb,
  "usb-c-flash-drive-128gb": FlashDriveThumb,
  "replacement-battery-universal": BatteryThumb,
  "replacement-screen-universal": ScreenThumb,
};

export default function ProductThumbnail({ slug, className = "" }: Props) {
  const photoUrl = imageMap[slug];

  if (photoUrl) {
    return (
      <div className={`overflow-hidden ${className}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photoUrl}
          alt={slug}
          className="h-full w-full object-cover"
        />
      </div>
    );
  }

  const Thumb = componentMap[slug];
  if (Thumb) {
    const accent = accentMap[slug] ?? "#5e78b2";
    const bg = bgMap[slug] ?? "#0e1320";
    return (
      <div className={`overflow-hidden ${className}`}>
        <Thumb accent={accent} bg={bg} />
      </div>
    );
  }

  // Fallback: products without a dedicated photo or hand-drawn icon get a
  // generic illustrated thumbnail, coloured by the product's accent and
  // labelled with its category initials.
  const product = getProductBySlugStatic(slug);
  if (!product) return null;

  const namedAccentHex: Record<string, string> = {
    blue: "#5e78b2",
    coral: "#e2766c",
    green: "#6fb37f",
    violet: "#7c5cfc",
  };
  const namedBgHex: Record<string, string> = {
    blue: "#0e1320",
    coral: "#1c1210",
    green: "#0d1a12",
    violet: "#160f24",
  };
  const accent = namedAccentHex[product.accent] ?? "#5e78b2";
  const bg = namedBgHex[product.accent] ?? "#0e1320";
  const label = product.category
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();

  return (
    <div className={`overflow-hidden ${className}`}>
      <GenericThumb accent={accent} bg={bg} label={label} />
    </div>
  );
}
