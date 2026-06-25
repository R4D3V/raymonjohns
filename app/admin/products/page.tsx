import SectionHeading from "@/components/section-heading";
import ProductsTable from "@/components/admin/products-table";
import { getAllProducts, getAllCategories } from "@/lib/db/queries";

export const dynamic = "force-dynamic";

export default async function AdminProductsPage() {
  const [products, categories] = await Promise.all([
    getAllProducts(),
    getAllCategories(),
  ]);

  return (
    <div className="flex flex-col gap-10">
      <SectionHeading
        eyebrow="Admin"
        title="Manage products"
        description={`${products.length} products across ${categories.length} categories.`}
      />
      <ProductsTable products={products} categories={categories} />
    </div>
  );
}
