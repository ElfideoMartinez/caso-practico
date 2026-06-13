import { prisma } from '../prisma/prisma';

export async function getAllProducts() {
  return prisma.product.findMany({
    include: {
      category: true,
    },
    orderBy: {
      id: 'asc',
    },
  });
}
