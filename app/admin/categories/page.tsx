import SectionHeading from "@/components/section-heading";
import CategoriesManager from "@/components/admin/categories-manager";
import { getAllCategories } from "@/lib/db/queries";

export const dynamic = "force-dynamic";

export default async function AdminCategoriesPage() {
  const categories = await getAllCategories();
  return (
    <div className="flex flex-col gap-10">
      <SectionHeading eyebrow="Admin" title="Manage categories" />
      <CategoriesManager categories={categories} />
    </div>
  );
}
