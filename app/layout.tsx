import type { Metadata, Viewport } from "next";
import { Sora, Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import RegisterSW from "@/components/register-sw";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jbm = JetBrains_Mono({
  variable: "--font-jbm",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "RaymonJohns — Frontend Developer",
  description:
    "Frontend developer building soft, tactile, neumorphic interfaces with Next.js, Tailwind CSS, and Framer Motion.",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "RaymonJohns",
  },
};

export const viewport: Viewport = {
  themeColor: "#e9ecf3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`${sora.variable} ${inter.variable} ${jbm.variable} antialiased`}
      >
        <RegisterSW />
        <Nav />
        <main className="px-4 sm:px-6">
          <div className="mx-auto max-w-6xl">{children}</div>
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
