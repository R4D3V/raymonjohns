import { notFound } from "next/navigation";
import SectionHeading from "@/components/section-heading";
import ProductForm from "@/components/admin/product-form";
import { getProductBySlug, getAllCategories } from "@/lib/db/queries";

export const dynamic = "force-dynamic";

export default async function EditProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [product, categories] = await Promise.all([
    getProductBySlug(slug),
    getAllCategories(),
  ]);

  if (!product) notFound();

  return (
    <div className="flex flex-col gap-10">
      <SectionHeading eyebrow="Admin" title={`Edit ${product.name}`} />
      <ProductForm product={product} categories={categories} />
    </div>
  );
}
