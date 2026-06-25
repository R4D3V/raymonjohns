import SectionHeading from "@/components/section-heading";
import ProductForm from "@/components/admin/product-form";
import { getAllCategories } from "@/lib/db/queries";

export const dynamic = "force-dynamic";

export default async function NewProductPage() {
  const categories = await getAllCategories();
  return (
    <div className="flex flex-col gap-10">
      <SectionHeading eyebrow="Admin" title="Add a product" />
      <ProductForm categories={categories} />
    </div>
  );
}
