import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function EmptyCheckout() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col items-center justify-center py-12">
            <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
            <p className="text-muted-foreground mb-4">Add some courses or products to checkout</p>
            <Link href="/">
              <Button>Return to Home</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

