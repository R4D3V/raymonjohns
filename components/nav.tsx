"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/lib/data";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full px-4 sm:px-6 pt-4">
      <div className="mx-auto max-w-6xl">
        <div className="neu-raised flex items-center justify-between gap-4 px-4 sm:px-6 py-3">
          <Link
            href="/"
            className="neu-focus rounded-neu-sm font-display text-lg font-bold tracking-tight text-ink"
            onClick={() => setOpen(false)}
          >
            RaymonJohns<span className="text-accent-blue">.</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`neu-focus neu-pressable rounded-neu-pill px-4 py-2 font-mono text-xs uppercase tracking-wider transition-colors ${
                    active
                      ? "neu-inset-sm text-accent-blue"
                      : "text-ink-muted hover:text-ink"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="neu-raised-sm neu-pressable neu-focus flex h-10 w-10 items-center justify-center md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="md:hidden mt-3 overflow-hidden"
            >
              <div className="neu-raised flex flex-col gap-1 p-3">
                {navLinks.map((link) => {
                  const active =
                    link.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(link.href);
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`neu-focus rounded-neu-sm px-4 py-3 font-mono text-xs uppercase tracking-wider ${
                        active ? "neu-inset-sm text-accent-blue" : "text-ink-muted"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
