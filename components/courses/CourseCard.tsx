import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import type { Course } from "@/types"

interface CourseCardProps {
  course: Course
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video relative">
        <Image
          src={course.image || "/placeholder.jpeg"}
          alt={course.title}
          fill
          className="object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle>{course.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{course.description}</p>
        <p className="font-bold mt-2">${course.price.toFixed(2)}</p>
      </CardContent>
      <CardFooter>
        <Link href={`/courses/${course.id}`} className="w-full">
          <Button className="w-full">View Course</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

