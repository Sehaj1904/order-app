"use client"

import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"
import type { CartItem } from "@/types"

interface AddToCartButtonProps {
  item: CartItem
}

export default function AddToCartButton({ item }: AddToCartButtonProps) {
  const { addItem, items } = useCart()

  const isInCart = items.some((cartItem) => cartItem.id === item.id && cartItem.type === item.type)

  return (
    <Button onClick={() => addItem(item)} disabled={isInCart} className="w-full">
      <ShoppingCart className="mr-2 h-4 w-4" />
      {isInCart ? "Added to Cart" : "Add to Cart"}
    </Button>
  )
}

