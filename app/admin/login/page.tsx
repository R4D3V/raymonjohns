"use client";

import { useState, FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { Lock, Mail, Eye, EyeOff, LogIn, AlertCircle } from "lucide-react";
import { signIn } from "@/lib/admin/auth-actions";

export default function AdminLoginPage() {
  const searchParams = useSearchParams();
  const next = searchParams.get("next") ?? "/admin/products";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      await signIn(email, password, next);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-[80vh] items-center justify-center py-12">
      <div className="w-full max-w-sm">
        {/* Header */}
        <div className="mb-10 text-center">
          <div className="neu-raised mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-neu-md">
            <Lock size={24} className="text-accent-blue" />
          </div>
          <h1 className="font-display text-3xl font-bold text-ink">
            Admin Access
          </h1>
          <p className="mt-2 text-sm text-ink-muted">
            Sign in to manage your shop and content.
          </p>
        </div>

        {/* Form */}
        <div className="neu-raised rounded-neu-lg p-8">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Email */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="font-mono text-[11px] uppercase tracking-wider text-ink-muted"
              >
                Email
              </label>
              <div className="relative">
                <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-faint">
                  <Mail size={15} />
                </span>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="neu-inset w-full rounded-neu-sm py-3 pl-10 pr-4 text-sm text-ink placeholder:text-ink-faint focus:outline-none focus:ring-2 focus:ring-accent-blue/40"
                />
              </div>
            </div>

            {/* Password */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="password"
                className="font-mono text-[11px] uppercase tracking-wider text-ink-muted"
              >
                Password
              </label>
              <div className="relative">
                <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-faint">
                  <Lock size={15} />
                </span>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="neu-inset w-full rounded-neu-sm py-3 pl-10 pr-12 text-sm text-ink placeholder:text-ink-faint focus:outline-none focus:ring-2 focus:ring-accent-blue/40"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-ink-faint transition-colors hover:text-ink-muted"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
            </div>

            {/* Error message */}
            {error && (
              <div className="neu-inset flex items-start gap-3 rounded-neu-sm p-3">
                <AlertCircle
                  size={15}
                  className="mt-0.5 shrink-0 text-accent-coral"
                />
                <p className="text-xs leading-relaxed text-accent-coral">
                  {error}
                </p>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="neu-pressable neu-focus neu-raised mt-2 flex w-full items-center justify-center gap-2 rounded-neu-pill py-3 font-mono text-xs uppercase tracking-wider text-ink transition-colors hover:text-accent-blue disabled:pointer-events-none disabled:opacity-60"
            >
              {loading ? (
                <>
                  <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-ink-faint border-t-accent-blue" />
                  Signing in…
                </>
              ) : (
                <>
                  <LogIn size={14} />
                  Sign in
                </>
              )}
            </button>
          </form>
        </div>

        <p className="mt-6 text-center text-xs text-ink-faint">
          Create your admin account via{" "}
          <span className="font-mono text-ink-muted">
            Supabase → Authentication → Users
          </span>
        </p>
      </div>
    </div>
  );
}
