import type { Metadata } from "next";
import { Sora, Inter, JetBrains_Mono } from "next/font/google";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
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
        <Nav />
        <main className="px-4 sm:px-6">
          <div className="mx-auto max-w-6xl">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
