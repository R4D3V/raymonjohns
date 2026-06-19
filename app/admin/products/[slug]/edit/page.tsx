import { notFound } from "next/navigation";
import SectionHeading from "@/components/section-heading";
import ProductForm from "@/components/admin/product-form";
import { getProductBySlug, productCategories } from "@/lib/products";

export default async function EditProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  return (
    <div className="flex flex-col gap-10">
      <SectionHeading eyebrow="Admin" title={`Edit ${product.name}`} />
      <ProductForm product={product} categories={productCategories} />
    </div>
  );
}
