import Image from "next/image";
import AddToCartButton from "@/components/cart/AddToCartButton";
import type { Course } from "@/types";

interface CourseDetailsProps {
  course: Course;
}

export default function CourseDetails({ course }: CourseDetailsProps) {
  return (
    <div className="container py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative aspect-video overflow-hidden rounded-lg">
          <Image
            src={course.image || "/placeholder.jpeg"}
            alt={course.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">{course.title}</h1>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold">
              ${course.price.toFixed(2)}
            </span>
          </div>
          <p className="text-muted-foreground">{course.description}</p>
          <div className="mt-4">
            <AddToCartButton
              item={{
                id: course.id,
                name: course.title,
                price: course.price,
                image: course.image,
                type: "course",
              }}
            />
          </div>
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Course Details</h2>
        <div className="prose max-w-none">
          <p>{course.fullDescription}</p>
          <h3>What You'll Learn</h3>
          <ul>
            {course.learningPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
