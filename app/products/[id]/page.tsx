import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductDetails from "@/components/products/ProductDetails";
import { getProductById, getAllProducts } from "@/lib/products";

interface ProductPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const product = await getProductById(params.id);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.name} | The Soul System`,
    description: product.description,
  };
}

export async function generateStaticParams() {
  const products = await getAllProducts();

  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProductById(params.id);

  if (!product) {
    notFound();
  }

  return <ProductDetails product={product} />;
}
