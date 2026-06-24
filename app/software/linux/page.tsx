import type { Metadata } from "next";
import SoftwarePlatformPage from "@/components/software-platform-page";
import { softwarePlatforms } from "@/lib/data";

export const metadata: Metadata = {
  title: "Linux Software — RaymonJohns",
  description: "Curated free Linux tools for development, productivity, creative work, and system administration.",
};

export default function LinuxSoftwarePage() {
  const platform = softwarePlatforms.find((p) => p.slug === "linux")!;
  return <SoftwarePlatformPage platform={platform} />;
}
