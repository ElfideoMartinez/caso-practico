export interface Product {
  id: number;
  name: string;
  description: string | null;
  price: number;
  stock: number;
}

interface ProductResponse {
  success: boolean;
  data: Product[];
}

export async function getProducts(): Promise<Product[]> {
  const response = await fetch('http://localhost:3000/api/products');

  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }

  const result: ProductResponse = await response.json();

  return result.data;
}
