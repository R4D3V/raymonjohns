import type { Metadata } from "next";
import SoftwarePlatformPage from "@/components/software-platform-page";
import { softwarePlatforms } from "@/lib/data";

export const metadata: Metadata = {
  title: "Android Software — RaymonJohns",
  description: "Curated Android apps for productivity, development, and device tools.",
};

export default function AndroidSoftwarePage() {
  const platform = softwarePlatforms.find((p) => p.slug === "android")!;
  return <SoftwarePlatformPage platform={platform} />;
}
