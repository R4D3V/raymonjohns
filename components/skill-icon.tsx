type IconProps = { className?: string };

function FrontendIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className}>
      <rect x="6" y="10" width="52" height="36" rx="6" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <line x1="6" y1="20" x2="58" y2="20" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="13" cy="15" r="1.6" fill="currentColor" />
      <circle cx="19" cy="15" r="1.6" fill="currentColor" />
      <path d="M20 33 L14 38 L20 43" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M44 33 L50 38 L44 43" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="36" y1="30" x2="29" y2="46" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="6" y1="54" x2="58" y2="54" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

function DesignSystemsIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className}>
      <circle cx="24" cy="24" r="13" fill="none" stroke="currentColor" strokeWidth="2.5" opacity="0.9" />
      <circle cx="40" cy="24" r="13" fill="none" stroke="currentColor" strokeWidth="2.5" opacity="0.55" />
      <circle cx="32" cy="40" r="13" fill="none" stroke="currentColor" strokeWidth="2.5" opacity="0.3" />
      <path d="M14 56 L20 46 L26 56 Z" fill="currentColor" opacity="0.8" />
    </svg>
  );
}

function AnimationIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className}>
      <circle cx="20" cy="44" r="5" fill="currentColor" />
      <path
        d="M20 44 C20 26 44 26 44 12"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeDasharray="5 5"
        strokeLinecap="round"
      />
      <path d="M38 8 L48 12 L40 18 Z" fill="currentColor" />
      <circle cx="20" cy="44" r="11" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.35" />
    </svg>
  );
}

function ToolingIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className}>
      <rect x="8" y="14" width="48" height="34" rx="5" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <path d="M16 30 L23 37 L16 44" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="28" y1="44" x2="40" y2="44" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="48" cy="22" r="3" fill="currentColor" opacity="0.6" />
    </svg>
  );
}

const map: Record<string, (p: IconProps) => React.ReactElement> = {
  "Frontend Engineering": FrontendIcon,
  "Design Systems": DesignSystemsIcon,
  "Animation & Interaction": AnimationIcon,
  "Tooling & Delivery": ToolingIcon,
};

export default function SkillIcon({
  label,
  className = "h-7 w-7",
}: {
  label: string;
  className?: string;
}) {
  const Icon = map[label];
  if (!Icon) return null;
  return <Icon className={className} />;
}
