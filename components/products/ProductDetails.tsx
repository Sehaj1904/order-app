import Image from "next/image";
import AddToCartButton from "@/components/cart/AddToCartButton";
import type { Product } from "@/types";

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  return (
    <div className="container py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative aspect-square overflow-hidden rounded-lg">
          <Image
            src={product.image || "/placeholder.jpeg"}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold">
              ${product.price.toFixed(2)}
            </span>
          </div>
          <p className="text-muted-foreground">{product.description}</p>
          <div className="mt-4">
            <AddToCartButton
              item={{
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                type: "product",
              }}
            />
          </div>
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Product Details</h2>
        <div className="prose max-w-none">
          <p>{product.fullDescription}</p>
          <h3>Features</h3>
          <ul>
            {product.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
