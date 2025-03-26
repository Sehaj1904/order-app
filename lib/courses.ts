export interface Course {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  price: number;
  image: string;
  learningPoints: string[];
  featured: boolean;
}

const courses: Course[] = [
  {
    id: "1",
    title: "Introduction to Web Development",
    description:
      "Learn the fundamentals of web development with HTML, CSS, and JavaScript.",
    fullDescription:
      "This comprehensive course covers everything you need to know to get started with web development. From the basics of HTML and CSS to interactive JavaScript, you'll build a solid foundation for creating modern websites.",
    price: 49.99,
    image: "/c",
    learningPoints: [
      "Understand HTML structure and semantics",
      "Style web pages with CSS",
      "Add interactivity with JavaScript",
      "Build responsive layouts",
      "Deploy your first website",
    ],
    featured: true,
  },
  {
    id: "2",
    title: "React for Beginners",
    description:
      "Master React.js and build modern, interactive user interfaces.",
    fullDescription:
      "React is one of the most popular JavaScript libraries for building user interfaces. In this course, you'll learn how to create reusable components, manage state, and build single-page applications with React.",
    price: 69.99,
    image: "/placeholder.jpeg",
    learningPoints: [
      "Understand React components and props",
      "Manage state and lifecycle methods",
      "Work with hooks and functional components",
      "Implement routing with React Router",
      "Connect to APIs and handle data",
    ],
    featured: true,
  },
  {
    id: "3",
    title: "Advanced JavaScript Patterns",
    description:
      "Take your JavaScript skills to the next level with advanced patterns and techniques.",
    fullDescription:
      "This advanced course dives deep into JavaScript patterns, performance optimization, and modern ES6+ features. You'll learn how to write cleaner, more efficient code and solve complex programming challenges.",
    price: 89.99,
    image: "/placeholder.jpeg",
    learningPoints: [
      "Master closures and scope",
      "Implement design patterns in JavaScript",
      "Optimize performance with memoization",
      "Work with asynchronous JavaScript",
      "Build modular, maintainable code",
    ],
    featured: false,
  },
  {
    id: "4",
    title: "Full-Stack Development with Next.js",
    description:
      "Build complete web applications with Next.js, React, and Node.js.",
    fullDescription:
      "Next.js is the React framework for production. In this course, you'll learn how to build full-stack applications with Next.js, including server-side rendering, API routes, and database integration.",
    price: 99.99,
    image: "/placeholder.jpeg",
    learningPoints: [
      "Set up a Next.js project",
      "Implement server-side rendering",
      "Create API routes",
      "Connect to databases",
      "Deploy Next.js applications",
    ],
    featured: true,
  },
  {
    id: "5",
    title: "UI/UX Design Fundamentals",
    description:
      "Learn the principles of user interface and user experience design.",
    fullDescription:
      "Good design is essential for creating successful digital products. This course covers the fundamentals of UI/UX design, from wireframing and prototyping to user research and testing.",
    price: 59.99,
    image: "/placeholder.jpeg",
    learningPoints: [
      "Understand design principles",
      "Create wireframes and prototypes",
      "Conduct user research",
      "Design accessible interfaces",
      "Test and iterate on designs",
    ],
    featured: false,
  },
  {
    id: "6",
    title: "TypeScript Masterclass",
    description:
      "Add static typing to your JavaScript projects with TypeScript.",
    fullDescription:
      "TypeScript enhances JavaScript by adding static types, making your code more robust and maintainable. This course teaches you how to use TypeScript effectively in your projects, from basic types to advanced features.",
    price: 79.99,
    image: "/placeholder.jpeg",
    learningPoints: [
      "Understand TypeScript basics",
      "Work with interfaces and types",
      "Implement generics",
      "Use decorators and advanced features",
      "Integrate TypeScript with React",
    ],
    featured: false,
  },
];

export async function getAllCourses(): Promise<Course[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));
  return courses;
}

export async function getCourseById(id: string): Promise<Course | undefined> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));
  return courses.find((course) => course.id === id);
}

export async function getFeaturedCourses(): Promise<Course[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));
  return courses.filter((course) => course.featured);
}
