import Link from "next/link"
import { ArrowRight } from "lucide-react"
import CourseCard from "@/components/courses/CourseCard"
import { getFeaturedCourses } from "@/lib/Courses"

export default async function FeaturedCourses() {
  const featuredCourses = await getFeaturedCourses()

  return (
    <section className="container px-4 md:px-6">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight">Featured Courses</h2>
          <Link href="/courses" className="flex items-center gap-1 text-sm font-medium text-primary">
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {featuredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  )
}

