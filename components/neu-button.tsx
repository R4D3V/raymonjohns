import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ButtonHTMLAttributes } from "react";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "raised" | "inset";
  withArrow?: boolean;
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "raised",
  withArrow = false,
  className = "",
}: ButtonLinkProps) {
  const base =
    "neu-pressable neu-focus inline-flex items-center gap-2 rounded-neu-pill px-6 py-3 font-mono text-xs uppercase tracking-wider transition-colors";
  const skin =
    variant === "raised"
      ? "neu-raised text-ink hover:text-accent-blue"
      : "neu-inset text-accent-blue";

  return (
    <Link href={href} className={`${base} ${skin} ${className}`}>
      {children}
      {withArrow && <ArrowRight size={14} />}
    </Link>
  );
}

type NeuButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "raised" | "inset";
};

export function NeuButton({
  children,
  variant = "raised",
  className = "",
  ...props
}: NeuButtonProps) {
  const base =
    "neu-pressable neu-focus inline-flex items-center justify-center gap-2 rounded-neu-pill px-6 py-3 font-mono text-xs uppercase tracking-wider transition-colors";
  const skin =
    variant === "raised"
      ? "neu-raised text-ink hover:text-accent-blue"
      : "neu-inset text-accent-blue";

  return (
    <button className={`${base} ${skin} ${className}`} {...props}>
      {children}
    </button>
  );
}
