import type { Metadata } from "next";
import ProductList from "@/components/products/ProductList";

export const metadata: Metadata = {
  title: "Products | The Soul System",
  description: "Browse our collection of learning materials and tools",
};

export default function ProductsPage() {
  return (
    <div className="container py-8">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold">All Products</h1>
          <p className="text-muted-foreground mt-2">
            Browse our collection of learning materials and tools
          </p>
        </div>
        <ProductList />
      </div>
    </div>
  );
}
