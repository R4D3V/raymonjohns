import type { Metadata } from "next";
import SectionHeading from "@/components/section-heading";
import ShopBrowser from "@/components/shop-browser";
import { getAllProducts, getAllCategories } from "@/lib/db/queries";
import { getPrimaryImages } from "@/lib/db/queries";

export const metadata: Metadata = {
  title: "Shop — RaymonJohns",
  description:
    "Accessories, audio, protection, storage, and repair parts — picked the same way the software and tools are: things actually worth using.",
};

// Revalidate this page every 60 seconds so new products appear quickly
// without needing a full redeploy.
export const revalidate = 60;

export default async function ShopPage() {
  const [products, categories] = await Promise.all([
    getAllProducts(),
    getAllCategories(),
  ]);

  const slugs = products.map((p) => p.slug);
  const productImages = await getPrimaryImages(slugs);

  return (
    <div className="flex flex-col gap-16 py-12 sm:py-16">
      <SectionHeading
        eyebrow="The shop"
        title="Accessories and parts, picked deliberately"
        description="A small catalog of chargers, audio, protection, storage, and repair parts — the same things that come up across phone and laptop repair work."
      />
      <ShopBrowser
        initialProducts={products}
        initialCategories={categories}
        productImages={productImages}
      />
    </div>
  );
}
