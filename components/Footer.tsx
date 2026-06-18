import Link from "next/link";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { navLinks } from "@/lib/data";

const socials = [
  { href: "mailto:raymonjohns@gmail.com", label: "Email", icon: Mail },

  { href: "tel:+256751621506", label: "Call me", icon: Phone },
  {
    href: "https://wa.me/256751621506",
    label: "WhatsApp",
    icon: MessageCircle,
  },
];

export default function Footer() {
  return (
    <footer className="px-4 sm:px-6 pb-10 pt-6">
      <div className="mx-auto max-w-6xl">
        <div className="neu-raised flex flex-col gap-8 p-6 sm:p-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="font-display text-xl font-bold text-ink">
              RaymonJohns<span className="text-accent-blue">.</span>
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              Frontend developer building soft, tactile interfaces — and
              tinkering with the hardware underneath them when the screen is
              off.
            </p>
          </div>

          <div className="flex gap-8 sm:gap-12">
            <div>
              <p className="eyebrow mb-3">Pages</p>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="neu-focus rounded-neu-sm text-sm text-ink-muted hover:text-accent-blue"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="eyebrow mb-3">Elsewhere</p>
              <ul className="space-y-3">
                {socials.map(({ href, label, icon: Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="neu-focus rounded-neu-sm flex items-center gap-2 text-sm text-ink-muted hover:text-accent-blue"
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noreferrer" : undefined}
                    >
                      <Icon size={15} />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <p className="mt-6 text-center font-mono text-xs uppercase tracking-wider text-ink-faint">
          © {new Date().getFullYear()} RaymonJohns — Based in entebbe, Uganda
        </p>
      </div>
    </footer>
  );
}
