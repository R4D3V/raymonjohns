# RaymonJohns — Portfolio

A neumorphic developer portfolio built on Next.js 16.2.9 (App Router) and Tailwind CSS 4.3.1, with Framer Motion for the hero typewriter, floating tech chips, and reveal animations.

## Stack

- **Next.js 16.2.9** — App Router, TypeScript, Turbopack
- **Tailwind CSS 4.3.1** — CSS-first theming via `@theme` in `app/globals.css`
- **Framer Motion** — typewriter cursor, device-panel chip float, gauge fill, mobile nav
- **lucide-react** — icons
- **Fonts** — Sora (display), Inter (body), JetBrains Mono (eyebrows/tags/labels) via `next/font/google`

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000. The dev/build process needs internet access once to fetch the Google Fonts used by `next/font/google` — this works automatically on Vercel or any normal machine with a connection.

## Structure

```
app/
  page.tsx                    Home — hero, skills teaser, featured work, CTA
  about/page.tsx
  projects/page.tsx           Work index
  projects/[slug]/page.tsx    Case study sub-pages (dumani-media, kings-key-tech, mbuni-safaris)
  skills/page.tsx
  services/page.tsx
  contact/page.tsx
  not-found.tsx
components/
  nav.tsx, footer.tsx, typewriter.tsx, device-panel.tsx,
  radial-gauge.tsx, project-card.tsx, section-heading.tsx,
  neu-button.tsx, contact-form.tsx
lib/
  data.ts      All editable content: nav links, projects, skills, services
  accent.ts    Literal Tailwind class map for accent colors
```

## What to edit before going live

1. **`lib/data.ts`** — every bit of copy (project summaries, skill percentages, service descriptions) is a placeholder based on what's known about your real projects. Rewrite freely; it's all in one file.
2. **Contact email & socials** — `components/footer.tsx` and `app/contact/page.tsx` use `hello@raymonjohns.dev` and placeholder GitHub/LinkedIn URLs. Swap in your real ones.
3. **Contact form submission** — `components/contact-form.tsx` currently just logs to the console and shows a success state. Wire `handleSubmit` up to a real endpoint (an API route, Resend, Formspree, etc.) before launch.
4. **Project links** — only the Dumani Media case study has a live `liveUrl` set. Add real URLs for the others in `lib/data.ts` once they're public.

## Design notes

- True neumorphism: cards share the page background color (`--bg`); depth comes only from the dual-tone box-shadow pairs defined in `app/globals.css` (`.neu-raised`, `.neu-inset`, etc.), not from a different surface color.
- Numbered sequences (project index, timeline) are used only where the order is real information — not as decoration.
- Respects `prefers-reduced-motion`: the typewriter types instantly and the floating chips stop animating.
