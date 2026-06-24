export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/software", label: "Software" },
  { href: "/contact", label: "Contact" },
];

export type Project = {
  slug: string;
  name: string;
  category: string;
  year: string;
  summary: string;
  stack: string[];
  role: string;
  accent: "blue" | "coral" | "green";
  liveUrl?: string;
  description: string[];
  highlights: string[];
};

export const projects: Project[] = [
  {
    slug: "aliciarides",
    name: "AliciaRides",
    category: "Transport & Logistics",
    year: "2026",
    summary:
      "A booking-focused site for a Uganda-based ride service — covering airport transfers, upcountry trips, and event transport, with WhatsApp booking built in throughout.",
    stack: ["Next.js", "Tailwind CSS", "Vercel"],
    role: "Design & Development",
    accent: "green",
    liveUrl: "https://aliciarides.vercel.app",
    description: [
      "AliciaRides needed a site that felt as safe and dependable as the service itself — warm and approachable rather than corporate, with the brand's green identity carried through every section.",
      "Three core service lines anchor the build, each with its own page: airport transfers, upcountry trips, and kukyala & special events, with wedding and corporate rides folded into the events line.",
      "Booking friction was the priority — a persistent call line, a stats strip covering client volume and availability, and a WhatsApp deep link that opens with a pre-filled booking message rather than a generic contact form.",
    ],
    highlights: [
      "Three dedicated service pages: airport, upcountry, and special events",
      "Stats strip surfacing client volume, availability, and trust signals",
      "One-tap WhatsApp booking with a pre-filled message link",
    ],
  },
  {
    slug: "skills-tech",
    name: "Skills & Tech Service Center",
    category: "Device Repair & Retail",
    year: "2026",
    summary:
      "A full-service website for a Entebbe-based phone and laptop repair center — covering services, a product shop, diagnostics, and customer enquiries.",
    stack: ["Next.js", "Tailwind CSS", "Netlify"],
    role: "Design & Development",
    accent: "coral",
    liveUrl: "https://skills-tech.netlify.app",
    description: [
      "Skills & Tech Service Center offers phone repair, laptop and desktop services, battery and charging port repair, diagnostics, and software troubleshooting from a single Kampala location. The site needed to cover all of that without feeling cluttered.",
      "Six service pages were built out individually under the /services route — each with its own scope, pricing context, and CTA — alongside a product shop at /products for accessories and parts.",
      "Same-day repair and free diagnostics are the two headline offers; both are surfaced prominently on the homepage hero alongside a stats strip showing monthly repair volume, underpinned by customer testimonials from real clients.",
    ],
    highlights: [
      "Six dedicated service pages plus a product shop",
      "Free diagnostics and same-day repair positioned as lead offers",
      "Customer testimonials with real client names and device models",
    ],
  },
  {
    slug: "kings-key-tech",
    name: "Kings Key Tech",
    category: "Business & Training Site",
    year: "2026",
    summary:
      "A full multi-page site for a tech services and training business, with five service sub-pages and a printable certificate system for graduating students.",
    stack: ["Next.js", "Tailwind CSS v4", "Framer Motion"],
    role: "Design & Development",
    accent: "coral",
    liveUrl: "https://kings-key-tech.vercel.app",
    description: [
      "Kings Key Tech needed a brand system that read as established and technical at once — navy paired with a confident gold (#D4A843), Bebas Neue and Barlow carrying the type voice, full gold sweep hover states, number watermarks, and corner-bracket decorators borrowed from automotive-grade design references.",
      "Five service sub-pages were built out individually, each with its own sample gallery, rather than templated into a single generic services grid — every service line does different work and reads differently.",
      "The most recent addition was a printable HTML completion certificate for the Computer Lessons Programme: navy-and-gold branding, the company's monogram, and layout tuned specifically for print rather than screen.",
    ],
    highlights: [
      "Five distinct service sub-pages, not one templated grid",
      "Navy and gold brand system with custom hover states",
      "Print-tuned HTML certificate generator for students",
    ],
  },
  {
    slug: "mbuni-safaris",
    name: "Mbuni African Safaris",
    category: "Travel & Tourism",
    year: "2026",
    summary:
      "Migrated from Vite/React into Next.js, upgraded through two major framework versions, and now mid-redesign toward a cinematic, editorial safari brand.",
    stack: ["Next.js", "Tailwind CSS v4", "React 19"],
    role: "Development & Migration",
    accent: "green",
    liveUrl: "https://mbuniafricansafaris.vercel.app",
    description: [
      "The original site was a Vite/React build. The first phase moved it into Next.js 15 with Tailwind v4 — same content, a routing and rendering foundation built for growth.",
      "From there, dependencies were pushed forward to Next.js 16 and React 19.2, keeping the project current rather than letting it drift.",
      "The redesign now in progress moves away from the original look toward a dark, editorial palette with Cormorant paired against Syne — aiming for something that feels closer to a travel film than a booking form.",
    ],
    highlights: [
      "Vite/React to Next.js migration, not a rebuild from scratch",
      "Kept current through two major dependency upgrades",
      "Cinematic redesign direction in progress",
    ],
  },
  {
    slug: "matta-motors",
    name: "Matta Motors Uganda",
    category: "Automotive Business",
    year: "2026",
    summary:
      "A multi-page marketing site for a Uganda-based car dealership and automotive services company — built to showcase services, brands, and drive enquiries.",
    stack: ["Next.js", "Tailwind CSS", "Vercel"],
    role: "Design & Development",
    accent: "blue",
    liveUrl: "https://mattamotors.vercel.app",
    description: [
      "Matta Motors Uganda has been in the automotive industry since 2015, offering vehicle repair, maintenance, parts, and after-sales support. The site needed to carry that weight of experience while remaining approachable and conversion-focused.",
      "The build covers the full service offering across dedicated pages — Home, About, Brands, Customer Approach, Gallery, and Contact — with a vehicle showcase carousel on the homepage and an embedded video section telling the company story.",
      "A prominent quote request CTA runs throughout, reinforced by a persistent contact strip with WhatsApp, email, and call links, matching how the business actually receives enquiries.",
    ],
    highlights: [
      "Six-page site covering the full Matta Motors service range",
      "Vehicle image carousel and brand showcase on the homepage",
      "Embedded video section and persistent WhatsApp / call CTAs",
    ],
  },
  {
    slug: "mashtech-solutions",
    name: "Mashtech Solutions",
    category: "Tech Agency",
    year: "2026",
    summary:
      "A bold agency site for a technology solutions provider — built to showcase their creative and technical capabilities and convert inbound leads.",
    stack: ["Next.js", "Tailwind CSS", "Vercel"],
    role: "Design & Development",
    accent: "green",
    liveUrl: "https://mashtechsolutions.vercel.app",
    description: [
      "Mashtech Solutions specialises in turning ideas into reality — combining creative design with technical execution across web apps, UI/UX, and digital strategy. The site needed to reflect that positioning without looking like every other agency template.",
      "The build leads with a strong value proposition and moves through a structured process narrative — research, design, development, launch — using the company's own workflow as the content architecture.",
      "Client testimonials are surfaced prominently, reinforcing the agency's track record, and the site closes with a direct contact prompt to reduce friction between interest and enquiry.",
    ],
    highlights: [
      "Process-led narrative structure mirrors Mashtech's actual workflow",
      "Testimonials integrated as social proof throughout key conversion points",
      "Strong CTA architecture from homepage through to contact",
    ],
  },
  {
    slug: "ice-age-gaming",
    name: "Ice Age Gaming",
    category: "Gaming & Entertainment",
    year: "2026",
    summary:
      "A gaming brand site built for a Uganda-based gaming community — designed to carry an energetic, dark visual identity and serve as a hub for the brand.",
    stack: ["Next.js", "Tailwind CSS", "Vercel"],
    role: "Design & Development",
    accent: "blue",
    liveUrl: "https://iceagegaming.vercel.app",
    description: [
      "Ice Age Gaming needed a site that matched the energy of the brand — bold, fast, and unmistakably gaming-first. The design direction leaned into dark backgrounds, high-contrast type, and the visual language of the gaming world rather than pulling from a standard business template.",
      "The site serves as the brand's online home: establishing identity, building community presence, and giving the gaming venture a professional anchor on the web.",
      "Built on Next.js and deployed to Vercel for performance, with a mobile-first approach given the predominantly mobile-device audience.",
    ],
    highlights: [
      "Dark, high-contrast gaming-first visual identity",
      "Community brand hub for a Uganda-based gaming venture",
      "Mobile-first build on Next.js with Vercel deployment",
    ],
  },
];

export type SkillGroup = {
  label: string;
  value: number;
  items: string[];
  accent: "blue" | "coral" | "green" | "violet";
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Frontend Engineering",
    value: 92,
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    accent: "blue",
  },
  {
    label: "Design Systems",
    value: 85,
    items: ["Brand identity", "Type systems", "Neumorphic & editorial UI"],
    accent: "violet",
  },
  {
    label: "Animation & Interaction",
    value: 80,
    items: ["Framer Motion", "Scroll choreography", "Micro-interactions"],
    accent: "coral",
  },
  {
    label: "Tooling & Delivery",
    value: 78,
    items: ["pnpm", "Git", "Vercel deployments", "Performance audits"],
    accent: "green",
  },
  {
    label: "Device Repair & Flashing",
    value: 88,
    items: [
      "Phone & laptop repair",
      "Stock firmware flashing",
      "IMEI & bootloader unlock",
      "Board-level diagnostics",
    ],
    accent: "coral",
  },
  {
    label: "OS & Software Installation",
    value: 84,
    items: [
      "Windows install & activation",
      "macOS install & Hackintosh",
      "App installation & licensing",
      "System migration",
    ],
    accent: "violet",
  },
  {
    label: "Training & Computer Lessons",
    value: 82,
    items: [
      "Beginner to advanced curriculum",
      "MS Office & productivity tools",
      "Cybersecurity & networking basics",
      "Touch typing & web research",
    ],
    accent: "green",
  },
  {
    label: "Software Reselling & Tool Access",
    value: 80,
    items: [
      "UnlockTool & Pandora activations",
      "ChimeraTool licensing",
      "BorneoSchematics & GiveMeROM access",
      "Setup & first-use support",
    ],
    accent: "blue",
  },
];

export type Service = {
  title: string;
  description: string;
  deliverables: string[];
  accent: "blue" | "coral" | "green" | "violet";
};

export const services: Service[] = [
  {
    title: "Web Design & Development",
    description:
      "Custom-built sites on Next.js, from marketing pages to multi-page client portals — designed and shipped by the same person.",
    deliverables: [
      "Information architecture",
      "Responsive UI build",
      "App Router & TypeScript",
    ],
    accent: "blue",
  },
  {
    title: "Phone Flashing",
    description:
      "Stock firmware restoration, custom ROM installation, IMEI repair, and bootloader unlocking — handled with the right tools for your exact device model.",
    deliverables: [
      "Stock firmware flashing (MTK & Qualcomm)",
      "Custom ROM & recovery installation",
      "IMEI & baseband repair",
      "Bootloader unlock & FRP bypass",
    ],
    accent: "coral",
  },
  {
    title: "Software Reselling",
    description:
      "Licensed access to the GSM repair tools technicians rely on daily — UnlockTool, Pandora, BorneoSchematics, Chimera Tool, and GiveMeROM — activated and ready to use.",
    deliverables: [
      "UnlockTool, Pandora & Chimera activations",
      "BorneoSchematics & GiveMeROM access",
      "Setup, login & first-use support",
    ],
    accent: "blue",
  },
  {
    title: "Computer Lessons",
    description:
      "Structured computer training covering theory and hands-on practice, from absolute beginner to advanced — one-on-one or in groups, with a certificate on completion.",
    deliverables: [
      "Beginner, Intermediate & Advanced training levels",
      "MS Office, internet skills & productivity tools",
      "Cybersecurity, networking & cloud computing basics",
      "Touch typing, web research & basic HTML",
    ],
    accent: "green",
  },
  {
    title: "Brand Identity",
    description:
      "Logo systems, color and type direction, and the kind of brand guidelines that actually get followed.",
    deliverables: [
      "Logo & monogram systems",
      "Color & type direction",
      "Brand guideline docs",
    ],
    accent: "violet",
  },
  {
    title: "Graphic Design",
    description:
      "Print and digital collateral — certificates, social assets, presentation decks — built to match the brand, not just fill space.",
    deliverables: [
      "Certificates & print layouts",
      "Social & marketing assets",
      "Presentation decks",
    ],
    accent: "coral",
  },
  {
    title: "Site Migration & Performance",
    description:
      "Moving legacy builds onto a modern stack — Vite or CRA into Next.js, Tailwind v3 into v4 — without losing what already worked.",
    deliverables: [
      "Framework migrations",
      "Dependency upgrades",
      "Performance audits",
    ],
    accent: "green",
  },
  {
    title: "Phone Repair",
    description:
      "Screen replacements, battery swaps, charging port fixes, camera repairs, and everything in between — diagnosed properly before anything is touched.",
    deliverables: [
      "Free diagnostic before any repair",
      "Screen & display replacement",
      "Battery & charging port repair",
      "Camera, speaker & mic fixes",
    ],
    accent: "blue",
  },

  {
    title: "Windows Installation",
    description:
      "Clean Windows installs, driver setup, activation, and optimisation — leaving you with a fast, bloat-free system ready to use from day one.",
    deliverables: [
      "Clean Windows 10 / 11 installation",
      "Driver installation & hardware setup",
      "Windows activation",
      "Post-install optimisation & updates",
    ],
    accent: "violet",
  },
  {
    title: "macOS Installation",
    description:
      "Fresh macOS installs, reinstalls, and system recovery — including Hackintosh setups and migration from an old Mac to a new one.",
    deliverables: [
      "macOS clean install & recovery",
      "Hackintosh EFI setup",
      "Mac-to-Mac data migration",
      "System preferences & iCloud setup",
    ],
    accent: "green",
  },
  {
    title: "App Installation",
    description:
      "Getting the right software onto your Windows or macOS machine — including licensed tools, productivity suites, creative apps, and developer toolchains.",
    deliverables: [
      "Productivity & office suite setup",
      "Creative & design app installation",
      "Developer toolchain configuration",
      "Software activation & licensing help",
    ],
    accent: "coral",
  },
];

// ─── Software ────────────────────────────────────────────────────────────────

export type SoftwareItem = {
  id: string;
  name: string;
  description: string;
  version: string;
  size: string;
  category: string;
  downloadUrl: string;
  free: boolean;
};

export type SoftwarePlatform = {
  slug: "windows" | "macos" | "android" | "linux";
  label: string;
  description: string;
  accent: "blue" | "coral" | "green";
  items: SoftwareItem[];
};

export const softwarePlatforms: SoftwarePlatform[] = [
  {
    slug: "windows",
    label: "Windows",
    accent: "blue",
    description:
      "Curated Windows utilities and tools I actually use day-to-day — productivity, development, and system management picks that earn their place on a clean install.",
    items: [
      {
        id: "vscode",
        name: "Visual Studio Code",
        description:
          "The code editor I live in. Lightweight, extensible, and fast enough to open a 5MB JSON file without a spin for five seconds.",
        version: "1.90",
        size: "96 MB",
        category: "Development",
        downloadUrl: "https://code.visualstudio.com/download",
        free: true,
      },
      {
        id: "windows-terminal",
        name: "Windows Terminal",
        description:
          "Microsoft's modern terminal — tabs, panes, GPU-accelerated rendering, and proper Unicode support. Replaces the old CMD in every way that matters.",
        version: "1.19",
        size: "8 MB",
        category: "Development",
        downloadUrl: "https://aka.ms/terminal",
        free: true,
      },
      {
        id: "git-windows",
        name: "Git for Windows",
        description:
          "Git, bash, and a credential manager bundled together. The default install gets you everything you need to run a pnpm-based workflow from day one.",
        version: "2.45",
        size: "56 MB",
        category: "Development",
        downloadUrl: "https://git-scm.com/download/win",
        free: true,
      },
      {
        id: "nodejs",
        name: "Node.js LTS",
        description:
          "The current Long Term Support release. Required for Next.js, Tailwind CLI, and most of the toolchain. Install via nvm-windows if you switch Node versions regularly.",
        version: "20.14 LTS",
        size: "29 MB",
        category: "Development",
        downloadUrl: "https://nodejs.org/en/download",
        free: true,
      },
      {
        id: "figma-windows",
        name: "Figma",
        description:
          "Design, prototype, and hand off — all in one place. The desktop app runs noticeably faster than the browser version for large component files.",
        version: "116",
        size: "140 MB",
        category: "Design",
        downloadUrl: "https://www.figma.com/downloads/",
        free: true,
      },
      {
        id: "sp-flash-tool",
        name: "SP Flash Tool",
        description:
          "MediaTek's scatter-file flashing utility. Essential for firmware flashing on MTK Android devices. Use the correct scatter file for your exact device model.",
        version: "5.1952",
        size: "48 MB",
        category: "Device Tools",
        downloadUrl: "https://spflashtool.com/download/",
        free: true,
      },
      {
        id: "7zip",
        name: "7-Zip",
        description:
          "The only archiver you actually need. Opens and creates ZIP, 7z, RAR, and a dozen other formats — and the right-click context menu integration alone is worth the install.",
        version: "26.01",
        size: "1.7 MB",
        category: "Utilities",
        downloadUrl: "https://www.7-zip.org/download.html",
        free: true,
      },
      {
        id: "chrome-windows",
        name: "Google Chrome",
        description:
          "The default browser for most client work — DevTools, broad extension support, and the rendering engine most sites are actually tested against.",
        version: "126",
        size: "90 MB",
        category: "Productivity",
        downloadUrl: "https://www.google.com/chrome/",
        free: true,
      },
      {
        id: "vlc-windows",
        name: "VLC Media Player",
        description:
          "Plays literally anything you throw at it — no codec packs, no fuss. The first thing installed on a fresh machine before any video work happens.",
        version: "3.0.21",
        size: "44 MB",
        category: "Utilities",
        downloadUrl: "https://www.videolan.org/vlc/",
        free: true,
      },
      {
        id: "adobe-reader-windows",
        name: "Adobe Acrobat Reader",
        description:
          "Still the most reliable PDF reader for forms, annotations, and digital signatures — the apps clients actually expect to open shared documents in.",
        version: "2024",
        size: "180 MB",
        category: "Productivity",
        downloadUrl: "https://get.adobe.com/reader/",
        free: true,
      },
      {
        id: "malwarebytes-windows",
        name: "Malwarebytes",
        description:
          "A second-opinion scanner that catches adware and PUPs Windows Defender often misses. Run after any repair job involving a previously-infected machine.",
        version: "5.1",
        size: "85 MB",
        category: "Utilities",
        downloadUrl: "https://www.malwarebytes.com/mwb-download",
        free: true,
      },
      // ── Browsers & VPN ──────────────────────────────────────────────────
      {
        id: "cloudflare-warp",
        name: "Cloudflare WARP",
        description:
          "A fast, privacy-focused VPN from Cloudflare that routes traffic through their 1.1.1.1 network. Improves connection speed and adds a layer of privacy without a complex setup.",
        version: "2025.10.186",
        size: "12 MB",
        category: "Browsers & VPN",
        downloadUrl: "https://1.1.1.1/",
        free: true,
      },
      {
        id: "freedom-vpn",
        name: "Freedom VPN",
        description:
          "A lightweight VPN client for bypassing regional restrictions and encrypting internet traffic. Simple to set up and useful for accessing geo-blocked content.",
        version: "2019",
        size: "6 MB",
        category: "Browsers & VPN",
        downloadUrl: "https://www.freedomvpn.net/",
        free: true,
      },
      {
        id: "ultrasurf-vpn",
        name: "Ultra Surf VPN",
        description:
          "A portable, no-install VPN tool that tunnels through firewalls and censorship filters. Just run the .exe — no account, no setup required.",
        version: "23.04",
        size: "3 MB",
        category: "Browsers & VPN",
        downloadUrl: "https://ultrasurf.us/download/",
        free: true,
      },
      {
        id: "psiphon3",
        name: "Psiphon 3",
        description:
          "An open-source censorship circumvention tool combining SSH, VPN, and HTTP proxy to provide unrestricted access. Widely used where internet access is restricted.",
        version: "3.167",
        size: "8 MB",
        category: "Browsers & VPN",
        downloadUrl: "https://psiphon.ca/en/download.html",
        free: true,
      },
      {
        id: "utorrent-windows",
        name: "uTorrent",
        description:
          "A lightweight BitTorrent client that stays out of the way. Small on disk, fast on downloads, and includes a scheduler for managing bandwidth during active hours.",
        version: "3.6",
        size: "4 MB",
        category: "Browsers & VPN",
        downloadUrl: "https://www.utorrent.com/downloads/win",
        free: true,
      },
      {
        id: "freedownloadmanager",
        name: "Free Download Manager",
        description:
          "A full-featured download accelerator with torrent support, YouTube downloads, and scheduled queues. A clean, ad-free alternative to IDM for everyday use.",
        version: "6.24",
        size: "38 MB",
        category: "Browsers & VPN",
        downloadUrl: "https://www.freedownloadmanager.org/download.htm",
        free: true,
      },
      {
        id: "honeygain",
        name: "Honeygain",
        description:
          "A passive income app that pays you for sharing unused internet bandwidth. Set it up once and let it run in the background — no interaction needed after setup.",
        version: "2024",
        size: "42 MB",
        category: "Browsers & VPN",
        downloadUrl: "https://www.honeygain.com/download/",
        free: true,
      },
      // ── Media & Creativity ───────────────────────────────────────────────
      {
        id: "mpc-hc",
        name: "MPC-HC",
        description:
          "A lightweight open-source media player with built-in codec support for virtually every format. Preferred over VLC by those who want a minimalist, no-fuss playback experience.",
        version: "2.2.1",
        size: "18 MB",
        category: "Media & Creativity",
        downloadUrl: "https://github.com/clsid2/mpc-hc/releases",
        free: true,
      },
      {
        id: "obs-studio-windows",
        name: "OBS Studio",
        description:
          "The industry-standard free and open-source software for video recording and live streaming. Highly configurable with a massive plugin ecosystem and scene-based layout system.",
        version: "30.2",
        size: "285 MB",
        category: "Media & Creativity",
        downloadUrl: "https://obsproject.com/download",
        free: true,
      },
      {
        id: "screen-recorder",
        name: "Screen Recorder",
        description:
          "A capable screen recording tool with annotation tools, webcam overlay, and area selection. Good for quick client walkthroughs and tutorial recordings.",
        version: "10.4.1",
        size: "44 MB",
        category: "Media & Creativity",
        downloadUrl: "https://icecreamapps.com/Screen-Recorder/",
        free: true,
      },
      {
        id: "streamlabs-obs",
        name: "Streamlabs OBS",
        description:
          "OBS with an integrated alerts overlay, scene editor, and streaming dashboard built in. Easier to set up for live content creators who want everything in one app.",
        version: "1.14",
        size: "340 MB",
        category: "Media & Creativity",
        downloadUrl: "https://streamlabs.com/streamlabs-live-streaming-software",
        free: true,
      },
      {
        id: "kdenlive-windows",
        name: "Kdenlive",
        description:
          "A powerful free and open-source video editor with multi-track editing, transitions, and effects. A solid non-linear editing alternative to Premiere on Windows.",
        version: "23.04",
        size: "195 MB",
        category: "Media & Creativity",
        downloadUrl: "https://kdenlive.org/en/download/",
        free: true,
      },
      {
        id: "gimp-windows",
        name: "GIMP",
        description:
          "The GNU Image Manipulation Program — a free, open-source alternative to Photoshop. Handles retouching, compositing, and image editing across most creative workflows.",
        version: "2.10.38",
        size: "230 MB",
        category: "Media & Creativity",
        downloadUrl: "https://www.gimp.org/downloads/",
        free: true,
      },
      {
        id: "picasa",
        name: "Picasa",
        description:
          "Google's discontinued photo organiser — still widely used for its fast browsing, face tagging, and light editing on large local photo libraries.",
        version: "3.9",
        size: "14 MB",
        category: "Media & Creativity",
        downloadUrl: "https://picasa.google.com/",
        free: true,
      },
      {
        id: "format-factory",
        name: "Format Factory",
        description:
          "A free all-in-one multimedia converter covering video, audio, and image format conversion. Handles batch jobs and common format conversions without touching a command line.",
        version: "5.11.0",
        size: "98 MB",
        category: "Media & Creativity",
        downloadUrl: "http://www.pcfreetime.com/formatfactory/",
        free: true,
      },
      {
        id: "poweriso",
        name: "PowerISO",
        description:
          "An ISO image tool for creating, editing, mounting, and burning disc images. Includes a virtual drive and compression support for common archive formats.",
        version: "8",
        size: "6 MB",
        category: "Media & Creativity",
        downloadUrl: "https://www.poweriso.com/download.php",
        free: false,
      },
      {
        id: "ultraiso",
        name: "UltraISO",
        description:
          "A disc image editor for opening, editing, and converting ISO, BIN, IMG, and other image formats. Commonly used for creating bootable USB drives from ISO files.",
        version: "9.7.2",
        size: "4 MB",
        category: "Media & Creativity",
        downloadUrl: "https://www.ultraiso.com/download.html",
        free: false,
      },
      {
        id: "winrar",
        name: "WinRAR",
        description:
          "The standard RAR archive manager for Windows. Creates and extracts RAR, ZIP, 7z, and more — with a trial that most people extend indefinitely.",
        version: "5.90",
        size: "3 MB",
        category: "Media & Creativity",
        downloadUrl: "https://www.rarlab.com/download.htm",
        free: false,
      },
      // ── Utilities & System Tools ─────────────────────────────────────────
      {
        id: "cpu-z-windows",
        name: "CPU-Z",
        description:
          "A lightweight system profiler that identifies your CPU, motherboard, RAM, and GPU in real time. Essential for spec verification before and after any hardware change.",
        version: "2.10",
        size: "2 MB",
        category: "Utilities & System",
        downloadUrl: "https://www.cpuid.com/softwares/cpu-z.html",
        free: true,
      },
      {
        id: "hard-disk-sentinel",
        name: "Hard Disk Sentinel",
        description:
          "A comprehensive HDD and SSD health monitoring tool with real-time temperature, S.M.A.R.T. analysis, and early-warning alerts. Catches failing drives before data is lost.",
        version: "6.30",
        size: "25 MB",
        category: "Utilities & System",
        downloadUrl: "https://www.hdsentinel.com/download.php",
        free: false,
      },
      {
        id: "fat32-format",
        name: "SmartDisk FAT32 Format Tool",
        description:
          "A simple GUI for formatting drives larger than 32GB as FAT32 — something Windows' built-in formatter won't do. Essential for console and device compatibility setups.",
        version: "1.0",
        size: "< 1 MB",
        category: "Utilities & System",
        downloadUrl: "https://ridgecrop.co.uk/index.htm?guiformat.htm",
        free: true,
      },
      {
        id: "paragon",
        name: "Paragon Disk Manager",
        description:
          "A partition management suite for resizing, merging, converting, and migrating disks without data loss. Handles what Windows Disk Management simply can't.",
        version: "17.9.1",
        size: "120 MB",
        category: "Utilities & System",
        downloadUrl: "https://www.paragon-software.com/free/pm-express/",
        free: false,
      },
      {
        id: "easybcd",
        name: "EasyBCD",
        description:
          "A boot manager editor for Windows that lets you add, remove, and configure boot entries — including Linux, macOS, and legacy Windows — without touching the command line.",
        version: "2.4",
        size: "5 MB",
        category: "Utilities & System",
        downloadUrl: "https://neosmart.net/EasyBCD/",
        free: true,
      },
      {
        id: "powertoys",
        name: "Microsoft PowerToys",
        description:
          "A set of power-user utilities from Microsoft — FancyZones for window management, PowerRename, Color Picker, File Explorer add-ons, and a dozen other quality-of-life tools.",
        version: "0.82",
        size: "180 MB",
        category: "Utilities & System",
        downloadUrl: "https://github.com/microsoft/PowerToys/releases",
        free: true,
      },
      {
        id: "snappy-driver",
        name: "Snappy Driver Installer",
        description:
          "An offline driver installation tool that updates drivers on a freshly installed Windows without internet access. Carries driver packs for most common hardware.",
        version: "R712",
        size: "7 MB",
        category: "Utilities & System",
        downloadUrl: "https://sdi-tool.org/download/",
        free: true,
      },
      {
        id: "vcredist-2015",
        name: "Visual C++ Redistributable 2015",
        description:
          "Microsoft's runtime library package required by thousands of Windows applications. If a program throws a missing DLL error on a fresh install, this usually fixes it.",
        version: "2015",
        size: "14 MB",
        category: "Utilities & System",
        downloadUrl: "https://www.microsoft.com/en-us/download/details.aspx?id=48145",
        free: true,
      },
      {
        id: "speccy",
        name: "Speccy",
        description:
          "Piriform's system information tool. Gives a clear, readable breakdown of CPU, RAM, motherboard, GPU, storage, and temperatures — all in a single view.",
        version: "1.32",
        size: "6 MB",
        category: "Utilities & System",
        downloadUrl: "https://www.ccleaner.com/speccy/download",
        free: true,
      },
      {
        id: "wumt",
        name: "Windows Update Management Tool",
        description:
          "A standalone utility for controlling Windows Update — enabling, disabling, and checking for updates outside of the Settings app. Useful on restricted or offline machines.",
        version: "1.0",
        size: "< 1 MB",
        category: "Utilities & System",
        downloadUrl: "https://www.majorgeeks.com/files/details/wu_management_tool.html",
        free: true,
      },
      {
        id: "telegram-windows",
        name: "Telegram Desktop",
        description:
          "The full-featured Telegram desktop client for Windows — fast, synced across devices, and supports large file transfers up to 2 GB without compression.",
        version: "5.6",
        size: "58 MB",
        category: "Utilities & System",
        downloadUrl: "https://desktop.telegram.org/",
        free: true,
      },
      // ── Remote Desktop & Management ──────────────────────────────────────
      {
        id: "anydesk-windows",
        name: "AnyDesk",
        description:
          "A fast remote desktop tool with sub-second latency. Reliable for client support sessions, remote access to office machines, and unattended device management.",
        version: "8.0",
        size: "4 MB",
        category: "Remote Desktop",
        downloadUrl: "https://anydesk.com/en/downloads/windows",
        free: true,
      },
      {
        id: "ultraviewer",
        name: "UltraViewer",
        description:
          "A lightweight remote desktop app built for tech support — easy for non-technical clients to install and share access without any account or configuration.",
        version: "6.6.124",
        size: "2 MB",
        category: "Remote Desktop",
        downloadUrl: "https://www.ultraviewer.net/en/download.html",
        free: true,
      },
      {
        id: "teamviewer-windows",
        name: "TeamViewer",
        description:
          "The industry-standard remote desktop and collaboration platform. Covers remote control, file transfer, VPN, and unattended access — with strong cross-platform support.",
        version: "15",
        size: "56 MB",
        category: "Remote Desktop",
        downloadUrl: "https://www.teamviewer.com/en/download/windows/",
        free: true,
      },
      {
        id: "ivms-4200",
        name: "iVMS-4200",
        description:
          "Hikvision's surveillance management platform for monitoring IP cameras, DVRs, and NVRs. Handles live view, recorded footage playback, and multi-channel management.",
        version: "3.8.0",
        size: "220 MB",
        category: "Remote Desktop",
        downloadUrl: "https://www.hikvision.com/en/support/download/software/ivms-4200/",
        free: true,
      },
      // ── PDF & Office Tools ───────────────────────────────────────────────
      {
        id: "nitro-pdf",
        name: "Nitro PDF Pro",
        description:
          "A feature-complete PDF editor covering creation, editing, form filling, e-signatures, and conversion to and from Office formats. A capable Acrobat Pro alternative.",
        version: "14.42",
        size: "310 MB",
        category: "PDF & Office",
        downloadUrl: "https://www.gonitro.com/pdf-pro",
        free: false,
      },
      {
        id: "easeus-recovery",
        name: "EaseUS Data Recovery",
        description:
          "A reliable file recovery tool for deleted, formatted, or corrupted drives. Supports HDDs, SSDs, USB drives, and SD cards with a scan-and-preview workflow.",
        version: "19",
        size: "108 MB",
        category: "PDF & Office",
        downloadUrl: "https://www.easeus.com/data-recovery-software/drw-free.htm",
        free: false,
      },
      {
        id: "idm",
        name: "Internet Download Manager",
        description:
          "A download accelerator that splits downloads into parallel segments and resumes broken connections. Integrates directly into browsers and speeds up large file downloads significantly.",
        version: "6.42",
        size: "12 MB",
        category: "PDF & Office",
        downloadUrl: "https://www.internetdownloadmanager.com/download.html",
        free: false,
      },
      {
        id: "megasync-windows",
        name: "MEGAsync",
        description:
          "The official MEGA desktop sync client — keeps local folders in sync with MEGA cloud storage. Supports selective sync, encrypted transfers, and bandwidth throttling.",
        version: "5.4",
        size: "45 MB",
        category: "PDF & Office",
        downloadUrl: "https://mega.io/desktop",
        free: true,
      },
      // ── Developer / Tech Tools ───────────────────────────────────────────
      {
        id: "python-windows",
        name: "Python",
        description:
          "The go-to scripting language for automation, data work, and general-purpose tooling. Install via the official installer and add to PATH during setup to avoid headaches later.",
        version: "3.13",
        size: "26 MB",
        category: "Developer Tools",
        downloadUrl: "https://www.python.org/downloads/",
        free: true,
      },
      {
        id: "flashget",
        name: "FlashGet",
        description:
          "A download manager using multi-threading and MMS technology to maximise download speeds. A classic Windows utility still useful on lower-bandwidth connections.",
        version: "3.7",
        size: "5 MB",
        category: "Developer Tools",
        downloadUrl: "https://www.flashget.com/",
        free: true,
      },
      {
        id: "combined-codec",
        name: "Combined Community Codec Pack",
        description:
          "A curated codec bundle for Windows that installs DirectShow filters for playing back virtually any audio or video format in Windows Media Player and other apps.",
        version: "2023",
        size: "30 MB",
        category: "Developer Tools",
        downloadUrl: "https://www.filehorse.com/download-combined-community-codec-pack/",
        free: true,
      },
      {
        id: "explorer-plus-plus",
        name: "Explorer++",
        description:
          "A tabbed file explorer for Windows with a familiar interface and added power — multi-tab browsing, dual-pane view, bookmarks, and a customisable toolbar.",
        version: "1.3.5",
        size: "3 MB",
        category: "Developer Tools",
        downloadUrl: "https://explorerplusplus.com/download",
        free: true,
      },
      {
        id: "notepadplusplus",
        name: "Notepad++",
        description:
          "A fast, extensible text and code editor for Windows with syntax highlighting for 80+ languages and a plugin system powerful enough to replace most lightweight IDE use.",
        version: "8.6",
        size: "4 MB",
        category: "Developer Tools",
        downloadUrl: "https://notepad-plus-plus.org/downloads/",
        free: true,
      },
      {
        id: "metatrader5-windows",
        name: "MetaTrader 5",
        description:
          "The industry-standard trading platform for forex and CFD markets. Features real-time charts, automated trading via Expert Advisors, and multi-asset market support.",
        version: "5",
        size: "68 MB",
        category: "Developer Tools",
        downloadUrl: "https://www.metatrader5.com/en/download",
        free: true,
      },
      {
        id: "tradingview-windows",
        name: "TradingView",
        description:
          "A powerful charting and analysis platform for stocks, crypto, and forex. Available as a desktop app with cloud-synced charts, screeners, and a large community of shared ideas.",
        version: "Desktop",
        size: "120 MB",
        category: "Developer Tools",
        downloadUrl: "https://www.tradingview.com/desktop/",
        free: true,
      },
    ],
  },
  {
    slug: "macos",
    label: "macOS",
    accent: "coral",
    description:
      "macOS picks for development and design work — tools that integrate cleanly with the OS rather than fighting it.",
    items: [
      {
        id: "vscode-mac",
        name: "Visual Studio Code",
        description:
          "Same editor, native Apple Silicon build. Installs via the .dmg or through Homebrew — both work, Homebrew makes updates easier.",
        version: "1.90",
        size: "103 MB",
        category: "Development",
        downloadUrl: "https://code.visualstudio.com/download",
        free: true,
      },
      {
        id: "homebrew",
        name: "Homebrew",
        description:
          "The missing package manager for macOS. Everything else on this list can be installed and updated through brew — strongly recommended as a first step on any fresh Mac.",
        version: "4.3",
        size: "< 1 MB",
        category: "Development",
        downloadUrl: "https://brew.sh/",
        free: true,
      },
      {
        id: "warp",
        name: "Warp Terminal",
        description:
          "A modern terminal built for developers — block-based output, AI command lookup, and shared runbooks. Noticeably more ergonomic than iTerm2 for daily dev work.",
        version: "2024",
        size: "95 MB",
        category: "Development",
        downloadUrl: "https://www.warp.dev/",
        free: true,
      },
      {
        id: "figma-mac",
        name: "Figma",
        description:
          "Native desktop app for the design tools I reach for on every brand or UI project. The variable font support in recent versions is worth updating for alone.",
        version: "116",
        size: "135 MB",
        category: "Design",
        downloadUrl: "https://www.figma.com/downloads/",
        free: true,
      },
      {
        id: "imageoptim",
        name: "ImageOptim",
        description:
          "Lossless image compression with a simple drag-and-drop interface. Run every project's image assets through this before they go into the Next.js public folder.",
        version: "1.9.2",
        size: "12 MB",
        category: "Design",
        downloadUrl: "https://imageoptim.com/mac",
        free: true,
      },
      {
        id: "arc",
        name: "Arc Browser",
        description:
          "A genuinely different take on the browser — spaces, command bar, and a sidebar that makes tab sprawl manageable. Worth trying for a week before judging it.",
        version: "1.55",
        size: "214 MB",
        category: "Productivity",
        downloadUrl: "https://arc.net/download",
        free: true,
      },
      {
        id: "the-unarchiver",
        name: "The Unarchiver",
        description:
          "Opens RAR, 7z, ZIP, and the dozen other formats macOS's built-in Archive Utility refuses to touch. Free on the Mac App Store, no fuss.",
        version: "4.3.9",
        size: "8 MB",
        category: "Utilities",
        downloadUrl: "https://theunarchiver.com/",
        free: true,
      },
      {
        id: "vlc-mac",
        name: "VLC Media Player",
        description:
          "Native Apple Silicon build that plays anything — no missing codecs, no fiddly settings. Still the most reliable media player on macOS.",
        version: "3.0.21",
        size: "55 MB",
        category: "Utilities",
        downloadUrl: "https://www.videolan.org/vlc/download-macosx.html",
        free: true,
      },
      {
        id: "rectangle",
        name: "Rectangle",
        description:
          "Free, open-source window snapping for macOS — keyboard shortcuts for the half-screen and quarter-screen tiling Windows users take for granted.",
        version: "0.79",
        size: "4 MB",
        category: "Productivity",
        downloadUrl: "https://rectangleapp.com/",
        free: true,
      },
      {
        id: "adobe-reader-mac",
        name: "Adobe Acrobat Reader",
        description:
          "For the PDF forms and signatures that Preview handles inconsistently — still the safest default when a client needs to fill and return a document.",
        version: "2024",
        size: "330 MB",
        category: "Productivity",
        downloadUrl: "https://get.adobe.com/reader/",
        free: true,
      },
      // ── Browsers & VPN ──────────────────────────────────────────────────
      {
        id: "chrome-mac",
        name: "Google Chrome",
        description:
          "The default browser for most client and dev work on macOS. DevTools, broad extension support, and the rendering engine most sites are actually tested against.",
        version: "126",
        size: "215 MB",
        category: "Browsers & VPN",
        downloadUrl: "https://www.google.com/chrome/",
        free: true,
      },
      {
        id: "cloudflare-warp-mac",
        name: "Cloudflare WARP",
        description:
          "A fast, privacy-focused VPN from Cloudflare that routes traffic through their 1.1.1.1 network. Pairs well with macOS's built-in network settings and adds zero friction.",
        version: "2025.10.186",
        size: "15 MB",
        category: "Browsers & VPN",
        downloadUrl: "https://1.1.1.1/",
        free: true,
      },
      {
        id: "psiphon3-mac",
        name: "Psiphon 3",
        description:
          "An open-source censorship circumvention tool combining SSH, VPN, and HTTP proxy for unrestricted access. Available natively on macOS for the same experience as the Windows version.",
        version: "3.167",
        size: "10 MB",
        category: "Browsers & VPN",
        downloadUrl: "https://psiphon.ca/en/download.html",
        free: true,
      },
      {
        id: "utorrent-mac",
        name: "uTorrent",
        description:
          "A lightweight BitTorrent client for macOS. Small footprint, fast on downloads, and a built-in bandwidth scheduler for keeping transfers from crowding other traffic.",
        version: "3.6",
        size: "12 MB",
        category: "Browsers & VPN",
        downloadUrl: "https://www.utorrent.com/downloads/mac",
        free: true,
      },
      {
        id: "freedownloadmanager-mac",
        name: "Free Download Manager",
        description:
          "A capable download accelerator for macOS with torrent support, YouTube downloads, and scheduled queuing. Native macOS app with a clean interface.",
        version: "6.24",
        size: "52 MB",
        category: "Browsers & VPN",
        downloadUrl: "https://www.freedownloadmanager.org/download.htm",
        free: true,
      },
      {
        id: "honeygain-mac",
        name: "Honeygain",
        description:
          "A passive income app that pays you for sharing unused internet bandwidth. Runs in the background on macOS with no interaction needed after the initial setup.",
        version: "2024",
        size: "38 MB",
        category: "Browsers & VPN",
        downloadUrl: "https://www.honeygain.com/download/",
        free: true,
      },
      // ── Media & Creativity ───────────────────────────────────────────────
      {
        id: "obs-studio-mac",
        name: "OBS Studio",
        description:
          "The industry-standard free and open-source recording and live streaming software — now with native Apple Silicon support. Scene-based layout with a full plugin ecosystem.",
        version: "30.2",
        size: "120 MB",
        category: "Media & Creativity",
        downloadUrl: "https://obsproject.com/download",
        free: true,
      },
      {
        id: "streamlabs-mac",
        name: "Streamlabs OBS",
        description:
          "OBS with integrated streaming alerts, a built-in scene editor, and a live dashboard. Easier for content creators who want all streaming controls in one place on macOS.",
        version: "1.14",
        size: "280 MB",
        category: "Media & Creativity",
        downloadUrl: "https://streamlabs.com/streamlabs-live-streaming-software",
        free: true,
      },
      {
        id: "gimp-mac",
        name: "GIMP",
        description:
          "The GNU Image Manipulation Program — free, open-source, and a capable Photoshop alternative. The native macOS build handles most retouching and compositing workflows.",
        version: "2.10.38",
        size: "200 MB",
        category: "Media & Creativity",
        downloadUrl: "https://www.gimp.org/downloads/",
        free: true,
      },
      {
        id: "kdenlive-mac",
        name: "Kdenlive",
        description:
          "A free, open-source video editor with multi-track editing, transitions, and effects. The macOS build brings solid non-linear editing without a subscription.",
        version: "23.04",
        size: "175 MB",
        category: "Media & Creativity",
        downloadUrl: "https://kdenlive.org/en/download/",
        free: true,
      },
      // ── Utilities & System Tools ─────────────────────────────────────────
      {
        id: "telegram-mac",
        name: "Telegram Desktop",
        description:
          "The full-featured Telegram desktop client for macOS — fast, synced across devices, and supports large file transfers up to 2 GB without compression.",
        version: "5.6",
        size: "65 MB",
        category: "Utilities & System",
        downloadUrl: "https://telegram.org/",
        free: true,
      },
      // ── Remote Desktop & Management ──────────────────────────────────────
      {
        id: "anydesk-mac",
        name: "AnyDesk",
        description:
          "A fast remote desktop tool with sub-second latency. Reliable for client support sessions and unattended access — works seamlessly on macOS without Accessibility permission friction.",
        version: "8.0",
        size: "6 MB",
        category: "Remote Desktop",
        downloadUrl: "https://anydesk.com/en/downloads/mac",
        free: true,
      },
      {
        id: "teamviewer-mac",
        name: "TeamViewer",
        description:
          "The industry-standard remote access and collaboration platform. Covers remote control, file transfer, and unattended access — with the same feature set as the Windows version.",
        version: "15",
        size: "68 MB",
        category: "Remote Desktop",
        downloadUrl: "https://www.teamviewer.com/en/download/mac-os/",
        free: true,
      },
      // ── PDF & Office Tools ───────────────────────────────────────────────
      {
        id: "easeus-recovery-mac",
        name: "EaseUS Data Recovery",
        description:
          "A reliable file recovery tool for deleted, formatted, or corrupted Mac drives. Supports HFS+, APFS, and external storage with a scan-and-preview workflow.",
        version: "19",
        size: "95 MB",
        category: "PDF & Office",
        downloadUrl: "https://www.easeus.com/mac-data-recovery-software/",
        free: false,
      },
      {
        id: "megasync-mac",
        name: "MEGAsync",
        description:
          "The official MEGA desktop sync client for macOS — keeps local folders in sync with MEGA cloud storage. Supports selective sync, encrypted transfers, and bandwidth throttling.",
        version: "5.4",
        size: "48 MB",
        category: "PDF & Office",
        downloadUrl: "https://mega.io/desktop",
        free: true,
      },
      // ── Developer / Tech Tools ───────────────────────────────────────────
      {
        id: "python-mac",
        name: "Python",
        description:
          "The go-to scripting language for automation, data work, and tooling. On macOS, install via python.org or Homebrew — Homebrew makes version management easier over time.",
        version: "3.13",
        size: "40 MB",
        category: "Developer Tools",
        downloadUrl: "https://www.python.org/downloads/",
        free: true,
      },
      {
        id: "metatrader5-mac",
        name: "MetaTrader 5",
        description:
          "The industry-standard trading platform for forex and CFD markets. The macOS version delivers the same real-time charts, Expert Advisors, and multi-asset support as Windows.",
        version: "5",
        size: "75 MB",
        category: "Developer Tools",
        downloadUrl: "https://www.metatrader5.com/en/download",
        free: true,
      },
      {
        id: "tradingview-mac",
        name: "TradingView",
        description:
          "A powerful charting and analysis platform for stocks, crypto, and forex. The native macOS app syncs charts and watchlists with your web account seamlessly.",
        version: "Desktop",
        size: "130 MB",
        category: "Developer Tools",
        downloadUrl: "https://www.tradingview.com/desktop/",
        free: true,
      },
    ],
  },
  {
    slug: "android",
    label: "Android",
    accent: "green",
    description:
      "Android picks for productivity and developer tooling — plus the diagnostic and flashing apps I rely on for device repair and firmware work.",
    items: [
      {
        id: "adb-wireless",
        name: "ADB & Fastboot Tools",
        description:
          "Connect to any Android device wirelessly over your local network for shell access, file transfer, and sideloading — no USB cable required once you've paired once.",
        version: "34",
        size: "18 MB",
        category: "Device Tools",
        downloadUrl:
          "https://play.google.com/store/apps/details?id=com.majeur.androiddebugbridge",
        free: true,
      },
      {
        id: "mtk-engineer",
        name: "MTK Engineering Mode",
        description:
          "MediaTek's hidden diagnostic menu, surfaced as a standalone app. Useful for checking band config, baseband version, and a handful of hardware tests on MTK devices.",
        version: "Various",
        size: "8 MB",
        category: "Device Tools",
        downloadUrl:
          "https://apkpure.com/mtk-engineering-mode/com.mediatek.engineermode",
        free: true,
      },
      {
        id: "solid-explorer",
        name: "Solid Explorer",
        description:
          "A dual-pane file manager with root support, archive browsing, and cloud storage integration. The most capable file manager on Android by a significant margin.",
        version: "2.8.39",
        size: "23 MB",
        category: "Productivity",
        downloadUrl:
          "https://play.google.com/store/apps/details?id=pl.solidexplorer2",
        free: false,
      },
      {
        id: "termux",
        name: "Termux",
        description:
          "A full Linux terminal environment on Android, no root required. Run bash, Python, Node, git, and most Unix tools directly on your phone or tablet.",
        version: "0.118",
        size: "30 MB",
        category: "Development",
        downloadUrl: "https://f-droid.org/en/packages/com.termux/",
        free: true,
      },
      {
        id: "cpu-z-android",
        name: "CPU-Z",
        description:
          "Hardware identification and benchmarking. Reliable for reading SoC model, RAM type, and battery specs on devices where specs sheets are vague or wrong.",
        version: "1.47",
        size: "9 MB",
        category: "Device Tools",
        downloadUrl:
          "https://play.google.com/store/apps/details?id=com.cpuid.cpu_z",
        free: true,
      },
      {
        id: "apk-pure",
        name: "APKPure",
        description:
          "A reliable APK mirror for sideloading older app versions or installing apps not available in your region's Play Store. Useful when downgrading before a flash.",
        version: "3.20",
        size: "14 MB",
        category: "Utilities",
        downloadUrl: "https://apkpure.com/apkpure/com.apkpure.aegon",
        free: true,
      },
    ],
  },
  {
    slug: "linux",
    label: "Linux",
    accent: "green",
    description:
      "Free and open-source Linux picks across development, productivity, creative work, system administration, and everyday use — every single tool here costs nothing.",
    items: [
      // ── Development ─────────────────────────────────────────────────────
      {
        id: "vscode-linux",
        name: "Visual Studio Code",
        description:
          "The go-to code editor on Linux. Installs cleanly via .deb, .rpm, or the Snap / Flatpak stores. Extensions, IntelliSense, and integrated terminal work identically to the Windows version.",
        version: "1.90",
        size: "96 MB",
        category: "Development",
        downloadUrl: "https://code.visualstudio.com/download",
        free: true,
      },
      {
        id: "neovim-linux",
        name: "Neovim",
        description:
          "A modern, extensible rewrite of Vim. Lua-based config, built-in LSP, and a huge plugin ecosystem. The go-to terminal editor for developers who want speed and full keyboard control.",
        version: "0.10",
        size: "5 MB",
        category: "Development",
        downloadUrl: "https://github.com/neovim/neovim/releases/latest",
        free: true,
      },
      {
        id: "git-linux",
        name: "Git",
        description:
          "Version control that ships with most distros. If it isn't installed, one package-manager command fixes that. The foundation of every modern development workflow.",
        version: "2.45",
        size: "30 MB",
        category: "Development",
        downloadUrl: "https://git-scm.com/download/linux",
        free: true,
      },
      {
        id: "nodejs-linux",
        name: "Node.js (via nvm)",
        description:
          "Install Node.js through nvm so you can switch versions without sudo. Required for Next.js, Tailwind CLI, and most of the modern JS toolchain.",
        version: "20 LTS",
        size: "50 MB",
        category: "Development",
        downloadUrl: "https://github.com/nvm-sh/nvm#installing-and-updating",
        free: true,
      },
      {
        id: "python-linux",
        name: "Python 3",
        description:
          "Ships pre-installed on most Linux distros. Use pyenv for clean version management. Essential for scripting, automation, data work, and AI tooling.",
        version: "3.12",
        size: "25 MB",
        category: "Development",
        downloadUrl: "https://www.python.org/downloads/source/",
        free: true,
      },
      {
        id: "docker-linux",
        name: "Docker Engine",
        description:
          "Container runtime that runs best on Linux — no VM overhead like on Windows or macOS. Spin up isolated dev environments, databases, and services in seconds.",
        version: "26",
        size: "80 MB",
        category: "Development",
        downloadUrl: "https://docs.docker.com/engine/install/",
        free: true,
      },
      {
        id: "postman-linux",
        name: "Postman",
        description:
          "API testing and development client available as a native Linux app. Test REST, GraphQL, and WebSocket endpoints with a clean UI and collection sharing.",
        version: "11",
        size: "210 MB",
        category: "Development",
        downloadUrl: "https://www.postman.com/downloads/",
        free: true,
      },
      {
        id: "dbeaver-linux",
        name: "DBeaver Community",
        description:
          "Universal database client supporting PostgreSQL, MySQL, SQLite, MongoDB, and dozens more. The community edition is fully free and runs well on Linux.",
        version: "24",
        size: "120 MB",
        category: "Development",
        downloadUrl: "https://dbeaver.io/download/",
        free: true,
      },
      // ── Terminal & System ────────────────────────────────────────────────
      {
        id: "alacritty-linux",
        name: "Alacritty",
        description:
          "A GPU-accelerated terminal emulator written in Rust. Blazing fast, highly configurable via YAML/TOML, and no Electron overhead. Pairs perfectly with tmux.",
        version: "0.13",
        size: "8 MB",
        category: "Terminal & System",
        downloadUrl: "https://github.com/alacritty/alacritty/releases/latest",
        free: true,
      },
      {
        id: "tmux-linux",
        name: "tmux",
        description:
          "Terminal multiplexer — split panes, multiple windows, and persistent sessions that survive SSH drops. Once you build the muscle memory, single-window terminals feel broken.",
        version: "3.4",
        size: "1 MB",
        category: "Terminal & System",
        downloadUrl: "https://github.com/tmux/tmux/releases",
        free: true,
      },
      {
        id: "htop-linux",
        name: "htop",
        description:
          "Interactive process viewer that makes top look primitive. Shows CPU per-core, memory, swap, and lets you sort, filter, and kill processes with keyboard shortcuts.",
        version: "3.3",
        size: "0.2 MB",
        category: "Terminal & System",
        downloadUrl: "https://htop.dev/",
        free: true,
      },
      {
        id: "timeshift-linux",
        name: "Timeshift",
        description:
          "System restore tool for Linux. Takes incremental snapshots of your root filesystem using rsync or BTRFS. Saved many systems after a bad update or misconfigured boot.",
        version: "24",
        size: "8 MB",
        category: "Terminal & System",
        downloadUrl: "https://github.com/linuxmint/timeshift/releases/latest",
        free: true,
      },
      {
        id: "gparted-linux",
        name: "GParted",
        description:
          "The definitive graphical partition editor for Linux. Resize, move, create, delete, and format partitions across all major filesystem types without touching the CLI.",
        version: "1.6",
        size: "15 MB",
        category: "Terminal & System",
        downloadUrl: "https://gparted.org/download.php",
        free: true,
      },
      {
        id: "stacer-linux",
        name: "Stacer",
        description:
          "System optimizer and monitor with a modern UI. Manage startup apps, clear caches, monitor resources, and uninstall packages — all from one clean dashboard.",
        version: "1.1",
        size: "30 MB",
        category: "Terminal & System",
        downloadUrl: "https://github.com/oguzhaninan/Stacer/releases/latest",
        free: true,
      },
      // ── Productivity ─────────────────────────────────────────────────────
      {
        id: "libreoffice-linux",
        name: "LibreOffice",
        description:
          "Full Microsoft Office-compatible suite — Writer, Calc, Impress, Draw, Base, and Math. Reads and writes .docx, .xlsx, and .pptx. The productivity foundation of any Linux install.",
        version: "24.2",
        size: "280 MB",
        category: "Productivity",
        downloadUrl: "https://www.libreoffice.org/download/libreoffice-fresh/",
        free: true,
      },
      {
        id: "obsidian-linux",
        name: "Obsidian",
        description:
          "A local-first markdown note-taking app with bidirectional linking and a graph view. Your notes stay as plain-text files on disk — no proprietary format lock-in.",
        version: "1.6",
        size: "90 MB",
        category: "Productivity",
        downloadUrl: "https://obsidian.md/download",
        free: true,
      },
      {
        id: "joplin-linux",
        name: "Joplin",
        description:
          "Open-source note-taking with end-to-end encrypted sync via Nextcloud, WebDAV, Dropbox, or OneDrive. Great Evernote replacement with full markdown support.",
        version: "2.14",
        size: "145 MB",
        category: "Productivity",
        downloadUrl: "https://joplinapp.org/",
        free: true,
      },
      {
        id: "thunderbird-linux",
        name: "Thunderbird",
        description:
          "Mozilla email client — now with a modern redesign. Handles multiple accounts, calendars via Lightning, and has solid PGP encryption support built in.",
        version: "115",
        size: "80 MB",
        category: "Productivity",
        downloadUrl: "https://www.thunderbird.net/",
        free: true,
      },
      {
        id: "pdfarranger-linux",
        name: "PDF Arranger",
        description:
          "Lightweight GUI tool to merge, split, rotate, and reorder PDF pages. Does one job well — rearranging PDF content without a heavy suite.",
        version: "1.10",
        size: "3 MB",
        category: "Productivity",
        downloadUrl: "https://github.com/pdfarranger/pdfarranger/releases/latest",
        free: true,
      },
      // ── Web & Internet ───────────────────────────────────────────────────
      {
        id: "firefox-linux",
        name: "Firefox",
        description:
          "The privacy-respecting browser that ships by default on most Linux distros. Best developer tools in the browser market, and the only major browser with a truly independent engine.",
        version: "127",
        size: "55 MB",
        category: "Web & Internet",
        downloadUrl: "https://www.mozilla.org/en-US/firefox/new/",
        free: true,
      },
      {
        id: "chrome-linux",
        name: "Google Chrome",
        description:
          "The most widely used browser. Available as a .deb or .rpm from Google directly. Useful for cross-browser testing alongside Firefox.",
        version: "126",
        size: "85 MB",
        category: "Web & Internet",
        downloadUrl: "https://www.google.com/chrome/",
        free: true,
      },
      {
        id: "brave-linux",
        name: "Brave Browser",
        description:
          "Chromium-based browser with built-in ad blocking, fingerprint protection, and a Tor private window mode. One of the strongest privacy-focused browsers available.",
        version: "1.67",
        size: "90 MB",
        category: "Web & Internet",
        downloadUrl: "https://brave.com/linux/",
        free: true,
      },
      {
        id: "filezilla-linux",
        name: "FileZilla",
        description:
          "Reliable FTP, FTPS, and SFTP client. Drag-and-drop file transfers, site manager for saved connections, and directory comparison make it the standard for server file work.",
        version: "3.67",
        size: "18 MB",
        category: "Web & Internet",
        downloadUrl: "https://filezilla-project.org/download.php?type=client",
        free: true,
      },
      {
        id: "transmission-linux",
        name: "Transmission",
        description:
          "A minimal, fast BitTorrent client. Low resource usage, clean UI, and a web interface for remote control. The best torrent client on Linux by a wide margin.",
        version: "4.0",
        size: "12 MB",
        category: "Web & Internet",
        downloadUrl: "https://transmissionbt.com/download",
        free: true,
      },
      // ── Creative & Media ─────────────────────────────────────────────────
      {
        id: "gimp-linux",
        name: "GIMP",
        description:
          "The GNU Image Manipulation Program — a full-featured raster graphics editor comparable to Photoshop for most tasks. Layers, masks, scripts, and a wide plugin ecosystem.",
        version: "2.10",
        size: "90 MB",
        category: "Creative & Media",
        downloadUrl: "https://www.gimp.org/downloads/",
        free: true,
      },
      {
        id: "inkscape-linux",
        name: "Inkscape",
        description:
          "Professional vector graphics editor with native SVG support. Handles logo design, illustrations, diagrams, and print work. A genuine alternative to Illustrator.",
        version: "1.3",
        size: "130 MB",
        category: "Creative & Media",
        downloadUrl: "https://inkscape.org/release/",
        free: true,
      },
      {
        id: "kdenlive-linux",
        name: "Kdenlive",
        description:
          "A powerful non-linear video editor built on MLT. Multi-track editing, effects, transitions, audio mixing, and proxy clips for smoother editing on slower hardware.",
        version: "24",
        size: "120 MB",
        category: "Creative & Media",
        downloadUrl: "https://kdenlive.org/en/download/",
        free: true,
      },
      {
        id: "obs-linux",
        name: "OBS Studio",
        description:
          "The standard for screen recording and live streaming on Linux. Scenes, sources, audio mixing, and direct RTMP streaming to YouTube, Twitch, or any server.",
        version: "30",
        size: "85 MB",
        category: "Creative & Media",
        downloadUrl: "https://obsproject.com/wiki/install-instructions/linux",
        free: true,
      },
      {
        id: "vlc-linux",
        name: "VLC Media Player",
        description:
          "Plays virtually every audio and video format without needing additional codecs. Hardware-accelerated decoding, subtitles, streaming, and network playback all included.",
        version: "3.0",
        size: "35 MB",
        category: "Creative & Media",
        downloadUrl: "https://www.videolan.org/vlc/download-debian.html",
        free: true,
      },
      {
        id: "audacity-linux",
        name: "Audacity",
        description:
          "Multi-track audio editor and recorder. Great for podcast editing, noise reduction, format conversion, and simple audio production tasks.",
        version: "3.5",
        size: "30 MB",
        category: "Creative & Media",
        downloadUrl: "https://www.audacityteam.org/download/linux/",
        free: true,
      },
      {
        id: "darktable-linux",
        name: "Darktable",
        description:
          "An open-source Lightroom alternative with a non-destructive RAW workflow. Colour grading, lens correction, masking, and export to any format — serious photography tool.",
        version: "4.8",
        size: "100 MB",
        category: "Creative & Media",
        downloadUrl: "https://www.darktable.org/install/",
        free: true,
      },
      {
        id: "blender-linux",
        name: "Blender",
        description:
          "World-class 3D creation suite — modelling, sculpting, rigging, animation, rendering, VFX, and video editing. Runs extremely well on Linux with CUDA and OpenCL GPU support.",
        version: "4.1",
        size: "230 MB",
        category: "Creative & Media",
        downloadUrl: "https://www.blender.org/download/",
        free: true,
      },
      // ── Communication ────────────────────────────────────────────────────
      {
        id: "signal-linux",
        name: "Signal Desktop",
        description:
          "End-to-end encrypted messaging that pairs with the mobile app. The most trusted private messenger available, with a native Linux package from Signal's own apt repository.",
        version: "7.15",
        size: "120 MB",
        category: "Communication",
        downloadUrl: "https://signal.org/download/linux/",
        free: true,
      },
      {
        id: "telegram-linux",
        name: "Telegram Desktop",
        description:
          "Fast, feature-rich messaging with large group support, bots, file sharing up to 2 GB, and channels. The official Linux client is snappy and well-maintained.",
        version: "5.1",
        size: "55 MB",
        category: "Communication",
        downloadUrl: "https://desktop.telegram.org/",
        free: true,
      },
      {
        id: "discord-linux",
        name: "Discord",
        description:
          "Voice, video, and text communication for communities and teams. Available as a .deb or via Flatpak. The Vesktop fork is a popular alternative with better Linux support.",
        version: "0.0.61",
        size: "70 MB",
        category: "Communication",
        downloadUrl: "https://discord.com/download",
        free: true,
      },
      // ── Remote Access ────────────────────────────────────────────────────
      {
        id: "remmina-linux",
        name: "Remmina",
        description:
          "The best remote desktop client on Linux. Supports RDP, VNC, SSH, SPICE, and NX protocols in one app. Great for managing Windows machines remotely from a Linux host.",
        version: "1.4",
        size: "20 MB",
        category: "Remote Access",
        downloadUrl: "https://remmina.org/how-to-install-remmina/",
        free: true,
      },
      {
        id: "anydesk-linux",
        name: "AnyDesk",
        description:
          "Low-latency remote desktop with a free personal tier. Native Linux client, cross-platform connections, and file transfer. Good alternative to TeamViewer.",
        version: "8",
        size: "5 MB",
        category: "Remote Access",
        downloadUrl: "https://anydesk.com/en/downloads/linux",
        free: true,
      },
      {
        id: "openssh-linux",
        name: "OpenSSH",
        description:
          "The standard SSH client and server on Linux. Already installed on most distros. Everything you need for secure remote terminal access, tunnelling, and key-based auth.",
        version: "9.7",
        size: "2 MB",
        category: "Remote Access",
        downloadUrl: "https://www.openssh.com/",
        free: true,
      },
      // ── Utilities ────────────────────────────────────────────────────────
      {
        id: "flameshot-linux",
        name: "Flameshot",
        description:
          "The best screenshot tool on Linux. Capture, annotate, blur, and copy or upload directly to Imgur — all from a single shortcut. Replaces the basic GNOME screenshot instantly.",
        version: "12",
        size: "5 MB",
        category: "Utilities",
        downloadUrl: "https://flameshot.org/#download",
        free: true,
      },
      {
        id: "keepassxc-linux",
        name: "KeePassXC",
        description:
          "A local, open-source password manager. Stores credentials in an encrypted .kdbx vault on your machine — no cloud, no subscription. Browser integration via a companion extension.",
        version: "2.7",
        size: "22 MB",
        category: "Utilities",
        downloadUrl: "https://keepassxc.org/download/",
        free: true,
      },
      {
        id: "veracrypt-linux",
        name: "VeraCrypt",
        description:
          "Disk and container encryption that creates volumes readable across Linux, Windows, and macOS. Supports hidden volumes for plausible deniability.",
        version: "1.26",
        size: "10 MB",
        category: "Utilities",
        downloadUrl: "https://www.veracrypt.fr/en/Downloads.html",
        free: true,
      },
      {
        id: "balena-etcher-linux",
        name: "balenaEtcher",
        description:
          "Flash OS images to USB drives or SD cards with a dead-simple three-step UI. Validates the write automatically. The go-to tool for creating Linux bootable drives.",
        version: "1.19",
        size: "140 MB",
        category: "Utilities",
        downloadUrl: "https://etcher.balena.io/",
        free: true,
      },
      {
        id: "bleachbit-linux",
        name: "BleachBit",
        description:
          "System cleaner that removes cache files, logs, temp files, and browser history. Frees disk space and covers a wide range of applications.",
        version: "4.6",
        size: "5 MB",
        category: "Utilities",
        downloadUrl: "https://www.bleachbit.org/download/linux",
        free: true,
      },
      {
        id: "virtualbox-linux",
        name: "VirtualBox",
        description:
          "Free virtualisation platform from Oracle. Run Windows, another Linux distro, or macOS in isolated VMs. Snapshots, shared folders, and USB passthrough included.",
        version: "7.0",
        size: "120 MB",
        category: "Utilities",
        downloadUrl: "https://www.virtualbox.org/wiki/Linux_Downloads",
        free: true,
      },
      {
        id: "megasync-linux",
        name: "MEGAsync",
        description:
          "Desktop sync client for MEGA cloud storage. 20 GB free tier, end-to-end encrypted, and the Linux client works across Debian, Fedora, and Arch-based systems.",
        version: "4.10",
        size: "22 MB",
        category: "Utilities",
        downloadUrl: "https://mega.io/desktop",
        free: true,
      },
      {
        id: "nextcloud-linux",
        name: "Nextcloud Desktop",
        description:
          "Self-hosted cloud sync client. Pairs with your own Nextcloud server for file sync, calendar, contacts, and notes — total control over your data.",
        version: "3.12",
        size: "50 MB",
        category: "Utilities",
        downloadUrl: "https://nextcloud.com/install/#install-clients",
        free: true,
      },
    ],
  },
];

// ─── Software Reselling Tools ──────────────────────────────────────────────

export type ResellTool = {
  slug: string;
  name: string;
  tagline: string;
  image: string;
  summary: string;
  body: string[];
  features: string[];
  bestFor: string;
};

export const resellTools: ResellTool[] = [
  {
    slug: "unlocktool",
    name: "UnlockTool",
    tagline: "Best value multi-brand unlocking",
    image:
      "https://static.dhrufusion.net/257c64eb-d0d3-4c38-91fe-fdf46654c863/2025/03/27/2IMlNaPk_logo.png",
    summary:
      "A fast-moving, budget-friendly unlock and flashing tool with strong coverage for Chinese brands and one of the few multi-brand tools that also handles iPhone workflows.",
    body: [
      "UnlockTool is a professional GSM servicing tool used for Android account service, flashing, factory reset, and bootloader operations — with particularly strong support for Xiaomi, Redmi, POCO, OPPO, vivo, and Realme.",
      "It runs on a time-based digital license (3, 6, or 12 months) rather than a physical dongle, and updates land frequently — new chipset support and bug fixes typically ship every few weeks.",
      "It's widely considered the best price-to-value option in this category, and is one of the few multi-brand tools that also covers some iPhone workflows alongside Android.",
    ],
    features: [
      "Account service & factory reset",
      "MTK and Qualcomm flashing",
      "Bootloader unlock operations",
      "Strong Xiaomi / OPPO / vivo / Realme coverage",
      "Frequent updates and new model support",
    ],
    bestFor:
      "Technicians who want the most affordable entry point into multi-brand servicing, especially for Chinese-brand devices.",
  },
  {
    slug: "pandora-tool",
    name: "Pandora Tool",
    tagline: "Advanced MTK unlocking & flashing",
    image: "https://z3x-team.com/wp-content/uploads/2020/12/logo.png",
    summary:
      "A technician-favourite for MediaTek (MTK) and Unisoc chipset work — unlocking, flashing, and FRP removal with a straightforward interface.",
    body: [
      "Pandora Tool (by Z3X Team) is built specifically for phones and tablets on MediaTek and Unisoc chipsets, with direct access to bootloaders, preloaders, and memory regions for deeper repair work than most flashing tools allow.",
      "It can read device service info, unlock network locks, repair bootlooped devices, erase FRP, format flash memory, and make or restore full device backups.",
      "Available either as the original aluminium-boxed hardware unit or as an online activation that skips the box entirely — the same supported model list either way.",
    ],
    features: [
      "MTK & Unisoc chipset specialist",
      "FRP erase & network unlocking",
      "Bootloop & preloader repair",
      "Device backup & restore",
      "Online activation, no box required",
    ],
    bestFor:
      "Shops doing high volumes of MediaTek-based repairs who want a tool built specifically for that chipset family.",
  },
  {
    slug: "borneoschematics",
    name: "BorneoSchematics",
    tagline: "Schematics & hardware repair data",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgmta3mUW6MmaepUCydPiIkJfJYp8rTdwzfynlP-AwEBmm76DGK0R20ZB3hDeEDLtPqcCUrTh5jMFYGylw4TCB8iPLI4RhAwj_xI-14GJkQMQw5HCfgvB5xtW9p1O9ypVStjhhbIUtGtjI/s1600/logo.png",
    summary:
      "A daily-updated library of circuit diagrams, PCB bitmaps, and component-level hardware solutions for phones, tablets, and laptops.",
    body: [
      "BorneoSchematics isn't a flashing tool — it's a hardware reference library. It provides circuit diagrams, board layouts, bitmap motherboard images, and component datasheets for a constantly growing list of phone and laptop models.",
      "Technicians use it to trace the exact circuit responsible for a fault — charging failure, no power, bootloop, dead board — instead of testing components one by one with a multimeter and guesswork.",
      "The database is refreshed daily with new models, and access works through a desktop app for Windows and macOS plus a companion website.",
    ],
    features: [
      "Daily-updated schematic database",
      "PCB bitmaps & board layouts",
      "Component datasheets & voltage points",
      "Covers phones, tablets & laptops",
      "Windows & macOS app access",
    ],
    bestFor:
      "Anyone doing board-level hardware diagnosis who needs to know exactly where to test, not just which tool to flash with.",
  },
  {
    slug: "chimera-tool",
    name: "Chimera Tool",
    tagline: "All-in-one Android repair suite",
    image: "https://chimeratool.com/images/og.png",
    summary:
      "A professional-grade, all-in-one tool covering bootloader unlock/relock, FRP removal, IMEI repair, and firmware work across 10,000+ models.",
    body: [
      "ChimeraTool is an all-in-one mobile repair suite supporting over 10,000 phone models from 30+ manufacturers, with no hardware dongle required to get started.",
      "Core functions include IMEI repair, MAC repair, certificate patching, FRP/account lock removal, network factory reset, online code reading, firmware updates, and one-click bootloader unlock or relock.",
      "Licensing is tiered (Basic, Professional, Premium) so individual technicians and full repair shops can pick a plan that matches their monthly repair volume, with the option to upgrade later.",
    ],
    features: [
      "IMEI & MAC repair",
      "FRP / account lock removal",
      "Bootloader unlock & relock",
      "Firmware update across 30+ brands",
      "No hardware box required",
    ],
    bestFor:
      "Shops that want one broad tool covering unlocking, FRP, IMEI, and firmware work across the widest range of brands.",
  },
  {
    slug: "givemerom",
    name: "GiveMeROM",
    tagline: "Firmware & stock ROM access",
    image: "https://www.givemerom.com/media/site/1-01778059525.png",
    summary:
      "A firmware access service for sourcing stock ROMs, dump files, and official firmware packages by exact device model and region.",
    body: [
      "GiveMeROM is a firmware download service rather than a flashing tool — it hosts official stock ROMs, EMMC/UFS dump files, NV/QCN files, schematic diagrams, and flashing tool downloads for a huge range of devices.",
      "New files are added daily across brands like Samsung, Xiaomi, vivo, OPPO, Realme, and Tecno, so the right regional firmware build is usually just a search away instead of a forum hunt.",
      "Access works on a package/credit system — pay for a plan, then download the specific firmware files needed for the job at hand.",
    ],
    features: [
      "Official stock ROMs by exact model & region",
      "EMMC/UFS dump & QCN files",
      "Daily-updated file library",
      "Schematic & test-point downloads included",
      "Package-based access, pay for what you use",
    ],
    bestFor:
      "Technicians who already have a flashing tool but keep losing time hunting for the correct firmware file.",
  },
];
