import SectionHeading from "@/components/section-heading";
import ProductsTable from "@/components/admin/products-table";
import { products, productCategories } from "@/lib/products";

export default function AdminProductsPage() {
  return (
    <div className="flex flex-col gap-10">
      <SectionHeading
        eyebrow="Admin"
        title="Manage products"
        description={`${products.length} products across ${productCategories.length} categories.`}
      />
      <ProductsTable products={products} categories={productCategories} />
    </div>
  );
}
