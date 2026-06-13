import { Request, Response } from 'express';
import { getAllProducts } from '../services/product-service';

export async function getProducts(req: Request, res: Response): Promise<void> {
  try {
    const products = await getAllProducts();

    res.status(200).json({
      success: true,
      data: products,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: 'Failed to fetch products',
    });
  }
}
