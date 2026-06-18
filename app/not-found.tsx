import { ButtonLink } from "@/components/neu-button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center gap-6 py-24 text-center sm:py-32">
      <span className="gradient-number text-6xl">404</span>
      <h1 className="font-display text-3xl font-bold text-ink sm:text-4xl">
        This page didn&apos;t make the build.
      </h1>
      <p className="max-w-sm text-ink-muted">
        Whatever you were looking for isn&apos;t at this address. It might
        have moved, or it might never have existed.
      </p>
      <ButtonLink href="/" withArrow>
        Back to home
      </ButtonLink>
    </div>
  );
}
