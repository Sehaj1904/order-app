import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CourseDetails from "@/components/courses/CourseDetails";
import { getCourseById, getAllCourses } from "@/lib/Courses";

interface CoursePageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({
  params,
}: CoursePageProps): Promise<Metadata> {
  const course = await getCourseById(params.id);

  if (!course) {
    return {
      title: "Course Not Found",
    };
  }

  return {
    title: `${course.title} | The Soul System`,
    description: course.description,
  };
}

export async function generateStaticParams() {
  const courses = await getAllCourses();

  return courses.map((course) => ({
    id: course.id,
  }));
}

export default async function CoursePage({ params }: CoursePageProps) {
  const course = await getCourseById(params.id);

  if (!course) {
    notFound();
  }

  return <CourseDetails course={course} />;
}
