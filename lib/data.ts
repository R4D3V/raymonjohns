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
  slug: "windows" | "macos" | "android";
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
