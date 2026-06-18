type IconProps = { className?: string };

function WindowsIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="currentColor">
      <rect x="8" y="8" width="23" height="23" rx="2" />
      <rect x="33" y="8" width="23" height="23" rx="2" opacity="0.75" />
      <rect x="8" y="33" width="23" height="23" rx="2" opacity="0.75" />
      <rect x="33" y="33" width="23" height="23" rx="2" opacity="0.5" />
    </svg>
  );
}

function MacOSIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2.5">
      <path
        d="M32 10 C32 10, 20 10, 14 22 C8 34, 10 50, 20 55 C24 57, 28 54, 32 54 C36 54, 40 57, 44 55 C54 50, 56 34, 50 22 C44 10, 32 10, 32 10 Z"
        strokeLinejoin="round"
      />
      <path
        d="M32 10 C32 6, 36 4, 38 7"
        strokeLinecap="round"
      />
      <line x1="22" y1="30" x2="42" y2="30" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

function AndroidIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="currentColor">
      <path d="M20 28 Q20 16, 32 16 Q44 16, 44 28 L44 42 Q44 48, 38 48 L36 48 L36 54 Q36 58, 32 58 Q28 58, 28 54 L28 48 L26 48 Q20 48, 20 42 Z" opacity="0.9" />
      <circle cx="28" cy="22" r="1.8" fill="white" />
      <circle cx="36" cy="22" r="1.8" fill="white" />
      <path d="M14 28 Q10 28, 10 32 L10 42 Q10 46, 14 46 Q18 46, 18 42 L18 32 Q18 28, 14 28 Z" />
      <path d="M50 28 Q46 28, 46 32 L46 42 Q46 46, 50 46 Q54 46, 54 42 L54 32 Q54 28, 50 28 Z" />
      <line x1="22" y1="12" x2="17" y2="7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="42" y1="12" x2="47" y2="7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

const map: Record<string, (p: IconProps) => React.ReactElement> = {
  windows: WindowsIcon,
  macos: MacOSIcon,
  android: AndroidIcon,
};

export default function PlatformIcon({
  slug,
  className = "h-10 w-10",
}: {
  slug: string;
  className?: string;
}) {
  const Icon = map[slug];
  if (!Icon) return null;
  return <Icon className={className} />;
}
