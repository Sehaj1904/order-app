import { getAllProducts } from "@/lib/products"
import ProductCardWithAction from "@/components/products/ProductCardWithAction"

export default async function ProductList() {
  const products = await getAllProducts()

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCardWithAction key={product.id} product={product} />
      ))}
    </div>
  )
}

