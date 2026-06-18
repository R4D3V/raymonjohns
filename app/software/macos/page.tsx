import type { Metadata } from "next";
import SoftwarePlatformPage from "@/components/software-platform-page";
import { softwarePlatforms } from "@/lib/data";

export const metadata: Metadata = {
  title: "macOS Software — RaymonJohns",
  description: "Curated macOS tools for development, design, and productivity.",
};

export default function MacOSSoftwarePage() {
  const platform = softwarePlatforms.find((p) => p.slug === "macos")!;
  return <SoftwarePlatformPage platform={platform} />;
}
