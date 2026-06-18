import type { Metadata } from "next";
import SoftwarePlatformPage from "@/components/software-platform-page";
import { softwarePlatforms } from "@/lib/data";

export const metadata: Metadata = {
  title: "Windows Software — RaymonJohns",
  description: "Curated Windows tools for development, design, and device management.",
};

export default function WindowsSoftwarePage() {
  const platform = softwarePlatforms.find((p) => p.slug === "windows")!;
  return <SoftwarePlatformPage platform={platform} />;
}
