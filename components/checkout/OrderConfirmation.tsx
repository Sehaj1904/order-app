import Link from "next/link"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function OrderConfirmation() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Order Confirmation</h1>
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col items-center justify-center py-12">
            <div className="rounded-full bg-green-100 p-3 mb-4">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-semibold mb-2">Thank you for your order!</h2>
            <p className="text-muted-foreground mb-6 text-center max-w-md">
              Your order has been confirmed. You will receive a confirmation email shortly.
            </p>
            <Link href="/">
              <Button>Return to Home</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

