import { useEffect, useState } from 'react';
import {
  getProducts,
  type Product,
} from '../services/prduct-services/GetAllProducts.ts/GetAllProducts';

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Products</h1>

      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>

          <p>Price: ${product.price}</p>

          <p>Stock: {product.stock}</p>

          <hr />
        </div>
      ))}
    </div>
  );
}
