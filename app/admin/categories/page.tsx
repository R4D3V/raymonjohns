import SectionHeading from "@/components/section-heading";
import CategoriesManager from "@/components/admin/categories-manager";
import { productCategories } from "@/lib/products";

export default function AdminCategoriesPage() {
  return (
    <div className="flex flex-col gap-10">
      <SectionHeading eyebrow="Admin" title="Manage categories" />
      <CategoriesManager categories={productCategories} />
    </div>
  );
}
