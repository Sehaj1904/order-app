"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useCart } from "@/context/CartContext"
import CartItemList from "@/components/cart/CartItemList"
import CartSummary from "@/components/cart/CartSummary"
import EmptyCart from "@/components/cart/EmptyCart"

export default function CartContent() {
  const { items, clearCart } = useCart()

  if (items.length === 0) {
    return <EmptyCart />
  }

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Items ({items.length})</CardTitle>
            </CardHeader>
            <CardContent>
              <CartItemList />
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={clearCart}>
                Clear Cart
              </Button>
              <Link href="/">
                <Button variant="outline">Continue Shopping</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
        <div>
          <CartSummary />
        </div>
      </div>
    </div>
  )
}

