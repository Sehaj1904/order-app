import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import AddToCartButton from "@/components/cart/AddToCartButton";
import type { Product } from "@/types";

interface ProductCardWithActionProps {
  product: Product;
}

export default function ProductCardWithAction({
  product,
}: ProductCardWithActionProps) {
  return (
    <Card>
      <div className="aspect-square relative">
        <Image
          src={product.image || "/placeholder.jpeg"}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-base">{product.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{product.description}</p>
        <p className="font-bold mt-2">${product.price.toFixed(2)}</p>
      </CardContent>
      <CardFooter className="flex flex-col gap-2">
        <Link href={`/products/${product.id}`} className="w-full">
          <Button variant="outline" className="w-full">
            View Details
          </Button>
        </Link>
        <AddToCartButton
          item={{
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            type: "product",
          }}
        />
      </CardFooter>
    </Card>
  );
}
