export interface Product {
  id: string;
  name: string;
  description: string;
  fullDescription: string;
  price: number;
  image: string;
  features: string[];
  featured: boolean;
}

const products: Product[] = [
  {
    id: "1",
    name: "Web Development Handbook",
    description: "A comprehensive guide to modern web development.",
    fullDescription:
      "This handbook covers all aspects of modern web development, from HTML and CSS to advanced JavaScript frameworks and backend technologies. It's an essential reference for both beginners and experienced developers.",
    price: 29.99,
    image: "/placeholder.jpeg",
    features: [
      "500+ pages of in-depth content",
      "Code examples and exercises",
      "Digital and print versions included",
      "Regular updates with new content",
      "Access to online community",
    ],
    featured: true,
  },
  {
    id: "2",
    name: "Developer Productivity Bundle",
    description:
      "Boost your productivity with this curated set of tools and resources.",
    fullDescription:
      "This bundle includes a collection of tools, templates, and resources designed to help developers work more efficiently. From code snippets to project management templates, it has everything you need to streamline your workflow.",
    price: 49.99,
    image: "/placeholder.jpeg",
    features: [
      "100+ code snippets and templates",
      "Project management tools",
      "VS Code extensions pack",
      "Git workflow guides",
      "Performance optimization toolkit",
    ],
    featured: true,
  },
  {
    id: "3",
    name: "Premium Code Editor Theme",
    description: "A carefully crafted theme for your favorite code editor.",
    fullDescription:
      "This premium theme is designed to reduce eye strain and improve code readability. It features carefully selected colors and contrasts, optimized for long coding sessions. Compatible with VS Code, Sublime Text, and other popular editors.",
    price: 9.99,
    image: "/placeholder.jpeg",
    features: [
      "Optimized for readability",
      "Dark and light variants",
      "Syntax highlighting for 20+ languages",
      "Custom icons included",
      "Regular updates and improvements",
    ],
    featured: false,
  },
  {
    id: "4",
    name: "Mechanical Keyboard for Developers",
    description: "A high-quality mechanical keyboard designed for programmers.",
    fullDescription:
      "This mechanical keyboard is specifically designed for developers, with programmable keys, customizable backlighting, and a durable build. The tactile feedback and ergonomic design make it perfect for long coding sessions.",
    price: 129.99,
    image: "/placeholder.jpeg",
    features: [
      "Mechanical switches with tactile feedback",
      "Programmable macro keys",
      "RGB backlighting with coding-specific presets",
      "Ergonomic design with wrist rest",
      "USB-C connection with cable management",
    ],
    featured: true,
  },
  {
    id: "5",
    name: "Algorithm Mastery Course Bundle",
    description:
      "Master algorithms and data structures with this comprehensive bundle.",
    fullDescription:
      "This bundle includes books, courses, and practice problems to help you master algorithms and data structures. Perfect for interview preparation or improving your problem-solving skills.",
    price: 79.99,
    image: "/placeholder.jpeg",
    features: [
      "3 ebooks on algorithms and data structures",
      "200+ practice problems with solutions",
      "Video explanations of complex algorithms",
      "Big O notation cheat sheets",
      "Interview preparation guides",
    ],
    featured: false,
  },
  {
    id: "6",
    name: "Developer Conference Ticket",
    description:
      "Access to our annual developer conference with workshops and networking.",
    fullDescription:
      "Join us for our annual developer conference featuring workshops, talks from industry experts, and networking opportunities. The ticket includes access to all sessions, workshops, and the conference afterparty.",
    price: 199.99,
    image: "/placeholder.jpeg",
    features: [
      "Access to all conference sessions",
      "Hands-on workshops",
      "Networking events",
      "Conference swag bag",
      "1-year access to session recordings",
    ],
    featured: true,
  },
  {
    id: "7",
    name: "Ergonomic Developer Desk Setup",
    description: "A complete ergonomic desk setup for developers.",
    fullDescription:
      "This ergonomic desk setup includes an adjustable monitor stand, ergonomic mouse, keyboard wrist rest, and cable management solutions. Designed to improve comfort and reduce strain during long coding sessions.",
    price: 149.99,
    image: "/placeholder.jpeg",
    features: [
      "Adjustable monitor stand",
      "Ergonomic mouse with customizable buttons",
      "Keyboard wrist rest with memory foam",
      "Cable management system",
      "Anti-fatigue desk mat",
    ],
    featured: false,
  },
  {
    id: "8",
    name: "Code Review Checklist Templates",
    description: "Comprehensive templates for effective code reviews.",
    fullDescription:
      "These templates provide structured checklists for conducting thorough code reviews. They cover various aspects including performance, security, maintainability, and best practices for different programming languages.",
    price: 19.99,
    image: "/placeholder.jpeg",
    features: [
      "Language-specific checklists",
      "Security-focused review templates",
      "Performance optimization guides",
      "Integration with GitHub and GitLab",
      "Customizable templates for team standards",
    ],
    featured: false,
  },
];

export async function getAllProducts(): Promise<Product[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));
  return products;
}

export async function getProductById(id: string): Promise<Product | undefined> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));
  return products.find((product) => product.id === id);
}

export async function getFeaturedProducts(): Promise<Product[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));
  return products.filter((product) => product.featured).slice(0, 4);
}
