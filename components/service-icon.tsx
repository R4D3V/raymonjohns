type IconProps = { className?: string };

function WebDesignIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className}>
      <rect
        x="6"
        y="10"
        width="52"
        height="44"
        rx="6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <line
        x1="6"
        y1="22"
        x2="58"
        y2="22"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <circle cx="13" cy="16" r="1.6" fill="currentColor" />
      <circle cx="19" cy="16" r="1.6" fill="currentColor" />
      <circle cx="25" cy="16" r="1.6" fill="currentColor" />
      <rect
        x="13"
        y="29"
        width="16"
        height="18"
        rx="2"
        fill="currentColor"
        opacity="0.18"
      />
      <line
        x1="34"
        y1="31"
        x2="51"
        y2="31"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <line
        x1="34"
        y1="38"
        x2="51"
        y2="38"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.6"
      />
      <line
        x1="34"
        y1="45"
        x2="46"
        y2="45"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.35"
      />
    </svg>
  );
}

function BrandIdentityIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className}>
      <path
        d="M32 6 L54 18 V42 L32 58 L10 42 V18 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M32 22 L42 28 V38 L32 44 L22 38 V28 Z"
        fill="currentColor"
        opacity="0.25"
      />
      <text
        x="32"
        y="35"
        textAnchor="middle"
        fontSize="11"
        fontWeight="700"
        fill="currentColor"
      >
        D
      </text>
    </svg>
  );
}

function GraphicDesignIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className}>
      <rect
        x="14"
        y="10"
        width="38"
        height="46"
        rx="3"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.4"
      />
      <rect
        x="10"
        y="6"
        width="38"
        height="46"
        rx="3"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <circle cx="29" cy="20" r="5" fill="currentColor" opacity="0.7" />
      <path
        d="M14 38 L24 28 L31 35 L40 24 L44 38 Z"
        fill="currentColor"
        opacity="0.3"
      />
      <line
        x1="14"
        y1="44"
        x2="40"
        y2="44"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MigrationIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className}>
      <rect
        x="6"
        y="14"
        width="20"
        height="16"
        rx="3"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        opacity="0.5"
      />
      <rect
        x="38"
        y="34"
        width="20"
        height="16"
        rx="3"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <path
        d="M26 22 H44 a6 6 0 0 1 6 6 v4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path d="M44 22 L52 22 L48 16 Z" fill="currentColor" />
    </svg>
  );
}

const map: Record<string, (p: IconProps) => React.ReactElement> = {
  "Web Design & Development": WebDesignIcon,
  "Brand Identity": BrandIdentityIcon,
  "Graphic Design": GraphicDesignIcon,
  "Site Migration & Performance": MigrationIcon,
};

export default function ServiceIcon({
  title,
  className = "h-8 w-8",
}: {
  title: string;
  className?: string;
}) {
  const Icon = map[title];
  if (!Icon) return null;
  return <Icon className={className} />;
}
