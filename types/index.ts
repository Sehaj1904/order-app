export interface CartItem {
  id: string
  name: string
  price: number
  image?: string
  type: "course" | "product"
}

export interface Course {
  id: string
  title: string
  description: string
  fullDescription: string
  price: number
  image: string
  learningPoints: string[]
  featured: boolean
}

export interface Product {
  id: string
  name: string
  description: string
  fullDescription: string
  price: number
  image: string
  features: string[]
  featured: boolean
}

