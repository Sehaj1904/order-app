import type { Metadata } from "next";
import CourseList from "@/components/courses/CourseList";

export const metadata: Metadata = {
  title: "Courses | The Soul System",
  description: "Browse our collection of courses to enhance your skills",
};

export default function CoursesPage() {
  return (
    <div className="container py-8">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold">All Courses</h1>
          <p className="text-muted-foreground mt-2">
            Browse our collection of courses to enhance your skills
          </p>
        </div>
        <CourseList />
      </div>
    </div>
  );
}
