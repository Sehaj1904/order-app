import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function EmptyCart() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col items-center justify-center py-12">
            <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
            <p className="text-muted-foreground mb-4">Add some courses or products to get started</p>
            <div className="flex gap-4">
              <Link href="/courses">
                <Button variant="outline">Browse Courses</Button>
              </Link>
              <Link href="/products">
                <Button variant="outline">Browse Products</Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

