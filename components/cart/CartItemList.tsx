"use client";

import Image from "next/image";
import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

export default function CartItemList() {
  const { items, removeItem } = useCart();

  return (
    <div className="flex flex-col gap-4">
      {items.map((item) => (
        <div key={`${item.type}-${item.id}`} className="flex gap-4">
          <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md">
            <Image
              src={item.image || "/placeholder.jpeg"}
              alt={item.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-1 flex-col">
            <div className="flex justify-between">
              <div>
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.type === "course" ? "Course" : "Product"}
                </p>
              </div>
              <p className="font-medium">${item.price.toFixed(2)}</p>
            </div>
            <div className="mt-auto flex justify-end">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeItem(`${item.type}-${item.id}`)}
                className="h-8 text-red-500 hover:text-red-600 hover:bg-red-50 px-2"
              >
                <Trash2 className="h-4 w-4 mr-1" />
                Remove
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
