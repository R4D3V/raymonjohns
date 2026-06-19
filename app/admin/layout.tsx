import Link from "next/link";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-8 py-12 sm:py-16">
      <div className="neu-inset rounded-neu-md p-4 text-xs leading-relaxed text-ink-muted">
        <span className="font-mono uppercase tracking-wider text-accent-coral">
          Local only —{" "}
        </span>
        this dashboard edits <code className="font-mono">lib/products.ts</code> directly on
        disk. It only works while running <code className="font-mono">pnpm dev</code> on your
        machine — it will not save changes on a deployed site. After saving, review the diff
        and commit/push to deploy.
      </div>

      <nav className="flex flex-wrap gap-2">
        <Link
          href="/admin/products"
          className="neu-pressable neu-focus px-4 py-2 font-mono text-xs uppercase tracking-wider text-ink-muted hover:text-accent-blue"
        >
          Products
        </Link>
        <Link
          href="/admin/categories"
          className="neu-pressable neu-focus px-4 py-2 font-mono text-xs uppercase tracking-wider text-ink-muted hover:text-accent-blue"
        >
          Categories
        </Link>
      </nav>

      {children}
    </div>
  );
}
