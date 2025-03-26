"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"
import { useCart } from "@/context/CartContext"
import CheckoutDetails from "@/components/checkout/CheckoutDetails"
import CheckoutSummary from "@/components/checkout/CheckoutSummary"
import OrderConfirmation from "@/components/checkout/OrderConfirmation"
import EmptyCheckout from "@/components/checkout/EmptyCheckout"

export default function CheckoutForm() {
  const router = useRouter()
  const { data: session } = useSession()
  const { items, clearCart } = useCart()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  // Redirect to login if not authenticated
  if (!session && typeof window !== "undefined") {
    router.push("/auth/login")
    return null
  }

  if (items.length === 0 && !isComplete) {
    return <EmptyCheckout />
  }

  if (isComplete) {
    return <OrderConfirmation />
  }

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true)

    try {
      // Submit to API route
      const response = await fetch("/api/checkout", {
        method: "POST",
        body: JSON.stringify({
          items,
          customer: {
            firstName: formData.get("firstName"),
            lastName: formData.get("lastName"),
            email: formData.get("email") || session?.user?.email,
            address: formData.get("address"),
            city: formData.get("city"),
            postalCode: formData.get("postalCode"),
          },
          payment: {
            cardNumber: formData.get("cardNumber"),
            expiryDate: formData.get("expiryDate"),
            cvc: formData.get("cvc"),
          },
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })

      if (response.ok) {
        setIsComplete(true)
        clearCart()
      } else {
        console.error("Checkout failed")
      }
    } catch (error) {
      console.error("Error during checkout:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <CheckoutDetails
            onSubmit={handleSubmit}
            isSubmitting={isSubmitting}
            defaultEmail={session?.user?.email || ""}
          />
        </div>
        <div>
          <CheckoutSummary items={items} />
        </div>
      </div>
    </div>
  )
}

