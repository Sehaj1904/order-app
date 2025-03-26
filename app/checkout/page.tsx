import type { Metadata } from "next";
import CheckoutForm from "@/components/checkout/CheckoutForm";

export const metadata: Metadata = {
  title: "Checkout | The Soul System",
  description: "Complete your purchase",
};

export default function CheckoutPage() {
  return <CheckoutForm />;
}
