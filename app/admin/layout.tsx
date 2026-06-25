import Link from "next/link";
import { headers } from "next/headers";
import { LogOut, ShieldCheck } from "lucide-react";
import { createClient } from "@/utils/supabase/server";
import { signOut } from "@/lib/admin/auth-actions";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Read the current path to know if we're on the login page
  const headersList = await headers();
  const pathname = headersList.get("x-invoke-path") ?? "";
  const isLoginPage =
    pathname === "/admin/login" || pathname.endsWith("/admin/login");

  // On the login page just render children — no chrome needed
  if (!user || isLoginPage) {
    return <>{children}</>;
  }

  return (
    <div className="flex flex-col gap-8 py-12 sm:py-16">
      {/* Top bar */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="neu-inset flex items-center gap-3 rounded-neu-sm px-4 py-3">
          <ShieldCheck size={15} className="shrink-0 text-accent-blue" />
          <span className="font-mono text-[11px] uppercase tracking-wider text-accent-blue">
            Supabase connected —{" "}
          </span>
          <span className="text-xs text-ink-muted">
            changes save instantly and appear within 60 seconds.
          </span>
        </div>

        {/* User + sign-out */}
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-ink-muted">
            {user.email}
          </span>
          <form action={signOut}>
            <button
              type="submit"
              className="neu-pressable neu-focus neu-raised flex items-center gap-2 rounded-neu-pill px-4 py-2 font-mono text-[11px] uppercase tracking-wider text-ink-muted transition-colors hover:text-accent-coral"
            >
              <LogOut size={13} />
              Sign out
            </button>
          </form>
        </div>
      </div>

      {/* Nav */}
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
