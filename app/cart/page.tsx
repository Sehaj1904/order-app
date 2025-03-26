import type { Metadata } from "next";
import CartContent from "@/components/cart/CartContent";

export const metadata: Metadata = {
  title: "Shopping Cart | The Soul System",
  description: "View and manage your shopping cart",
};

export default function CartPage() {
  return <CartContent />;
}
