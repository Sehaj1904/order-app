import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroBanner() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Welcome to Our The Soul System
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Discover courses and products to enhance your skills and
              knowledge.
            </p>
          </div>
          <div className="space-x-4">
            <Link href="/courses">
              <Button>Browse Courses</Button>
            </Link>
            <Link href="/products">
              <Button variant="outline">Shop Products</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
