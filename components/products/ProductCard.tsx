import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import type { Product } from "@/types"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
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
        <p className="font-bold">${product.price.toFixed(2)}</p>
      </CardContent>
      <CardFooter>
        <Link href={`/products/${product.id}`} className="w-full">
          <Button variant="outline" className="w-full">
            View Product
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

