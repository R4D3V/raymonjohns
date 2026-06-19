import SectionHeading from "@/components/section-heading";
import ProductForm from "@/components/admin/product-form";
import { productCategories } from "@/lib/products";

export default function NewProductPage() {
  return (
    <div className="flex flex-col gap-10">
      <SectionHeading eyebrow="Admin" title="Add a product" />
      <ProductForm categories={productCategories} />
    </div>
  );
}
