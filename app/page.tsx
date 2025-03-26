import type { Metadata } from "next";
import HeroBanner from "@/components/home/HeroBanner";
import FeaturedCourses from "@/components/home/FeaturedCourses";
import FeaturedProducts from "@/components/home/FeaturedProducts";

export const metadata: Metadata = {
  title: "The Soul System - Home",
  description:
    "Discover courses and products to enhance your skills and knowledge",
};

export default function Home() {
  return (
    <div className="flex flex-col gap-12 pb-8">
      <HeroBanner />
      <FeaturedCourses />
      <FeaturedProducts />
    </div>
  );
}
