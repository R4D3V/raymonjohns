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

function PhoneRepairIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className}>
      <rect x="18" y="4" width="28" height="48" rx="5" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <rect x="22" y="8" width="20" height="32" rx="2" fill="currentColor" opacity="0.12" />
      <circle cx="32" cy="46" r="2.5" fill="currentColor" opacity="0.6" />
      <line x1="28" y1="6.5" x2="36" y2="6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
      <path d="M26 20 L30 24 L38 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PhoneFlashingIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className}>
      <rect x="18" y="4" width="28" height="48" rx="5" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <rect x="22" y="8" width="20" height="32" rx="2" fill="currentColor" opacity="0.12" />
      <circle cx="32" cy="46" r="2.5" fill="currentColor" opacity="0.6" />
      <polygon points="35,14 27,26 32,26 29,38 37,26 32,26 35,14" fill="currentColor" opacity="0.8" />
    </svg>
  );
}

function WindowsInstallIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className}>
      <rect x="8" y="10" width="48" height="36" rx="3" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <line x1="8" y1="46" x2="56" y2="46" stroke="currentColor" strokeWidth="2.5" />
      <line x1="24" y1="50" x2="40" y2="50" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <rect x="14" y="16" width="14" height="12" rx="1.5" fill="currentColor" opacity="0.7" />
      <rect x="30" y="16" width="14" height="12" rx="1.5" fill="currentColor" opacity="0.4" />
      <rect x="14" y="30" width="14" height="12" rx="1.5" fill="currentColor" opacity="0.4" />
      <rect x="30" y="30" width="14" height="12" rx="1.5" fill="currentColor" opacity="0.7" />
    </svg>
  );
}

function MacOSInstallIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className}>
      <rect x="8" y="8" width="48" height="36" rx="5" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <line x1="8" y1="44" x2="56" y2="44" stroke="currentColor" strokeWidth="2" opacity="0.4" />
      <line x1="20" y1="52" x2="44" y2="52" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="32" y1="44" x2="32" y2="52" stroke="currentColor" strokeWidth="2" />
      <circle cx="14" cy="16" r="2" fill="currentColor" opacity="0.5" />
      <circle cx="20" cy="16" r="2" fill="currentColor" opacity="0.3" />
      <circle cx="26" cy="16" r="2" fill="currentColor" opacity="0.2" />
      <path d="M32 20 C28 20 24 23 24 27 C24 31 27 33 30 33 C31 33 31.5 32.5 32 32 C32.5 32.5 33 33 34 33 C37 33 40 31 40 27 C40 23 36 20 32 20 Z" fill="currentColor" opacity="0.7" />
      <path d="M29 18 C29 16 31 15 32 17" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function AppInstallIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className}>
      <rect x="6" y="6" width="22" height="22" rx="5" fill="currentColor" opacity="0.7" />
      <rect x="36" y="6" width="22" height="22" rx="5" fill="none" stroke="currentColor" strokeWidth="2.5" opacity="0.5" />
      <rect x="6" y="36" width="22" height="22" rx="5" fill="none" stroke="currentColor" strokeWidth="2.5" opacity="0.5" />
      <rect x="36" y="36" width="22" height="22" rx="5" fill="currentColor" opacity="0.35" />
      <line x1="47" y1="42" x2="47" y2="52" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="42" y1="47" x2="52" y2="47" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function SoftwareResellingIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className}>
      <rect x="8" y="10" width="48" height="32" rx="4" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <rect x="14" y="16" width="36" height="20" rx="2" fill="currentColor" opacity="0.12" />
      <path d="M22 22 L17 26 L22 30" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M42 22 L47 26 L42 30" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="29" y1="32" x2="35" y2="20" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" opacity="0.7" />
      <line x1="22" y1="48" x2="42" y2="48" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="32" y1="42" x2="32" y2="48" stroke="currentColor" strokeWidth="2" />
      <circle cx="50" cy="46" r="9" fill="currentColor" opacity="0.85" />
      <path d="M46.5 46 L49 48.5 L54 43" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const map: Record<string, (p: IconProps) => React.ReactElement> = {
  "Web Design & Development": WebDesignIcon,
  "Brand Identity": BrandIdentityIcon,
  "Graphic Design": GraphicDesignIcon,
  "Site Migration & Performance": MigrationIcon,
  "Phone Repair": PhoneRepairIcon,
  "Phone Flashing": PhoneFlashingIcon,
  "Windows Installation": WindowsInstallIcon,
  "macOS Installation": MacOSInstallIcon,
  "App Installation": AppInstallIcon,
  "Software Reselling": SoftwareResellingIcon,
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
