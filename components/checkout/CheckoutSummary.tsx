import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { formatPrice } from "@/lib/Utils"
import type { CartItem } from "@/types"

interface CheckoutSummaryProps {
  items: CartItem[]
}

export default function CheckoutSummary({ items }: CheckoutSummaryProps) {
  const totalPrice = items.reduce((total, item) => total + item.price, 0)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
        <CardDescription>
          {items.length} {items.length === 1 ? "item" : "items"} in cart
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          {items.map((item) => (
            <div key={`${item.type}-${item.id}`} className="flex justify-between">
              <span className="text-sm truncate max-w-[200px]">{item.name}</span>
              <span className="text-sm font-medium">${item.price.toFixed(2)}</span>
            </div>
          ))}
          <Separator className="my-2" />
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>{formatPrice(totalPrice)}</span>
          </div>
          <div className="flex justify-between">
            <span>Taxes</span>
            <span>{formatPrice(totalPrice * 0.1)}</span>
          </div>
          <Separator className="my-2" />
          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span>{formatPrice(totalPrice * 1.1)}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

