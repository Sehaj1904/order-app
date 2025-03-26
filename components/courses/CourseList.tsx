import { getAllCourses } from "@/lib/Courses"
import CourseCard from "@/components/courses/CourseCard"

export default async function CourseList() {
  const courses = await getAllCourses()

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  )
}

