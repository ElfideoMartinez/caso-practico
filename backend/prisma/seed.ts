import { PrismaClient, UserRole, OrderStatus } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Categories
  const electronics = await prisma.category.create({
    data: {
      name: 'Electronics',
    },
  });

  const office = await prisma.category.create({
    data: {
      name: 'Office Supplies',
    },
  });

  // Products
  const laptop = await prisma.product.create({
    data: {
      name: 'Dell XPS 15',
      description: '15-inch laptop',
      price: 34999.99,
      stock: 10,
      categoryId: electronics.id,
    },
  });

  const mouse = await prisma.product.create({
    data: {
      name: 'Logitech MX Master 3S',
      description: 'Wireless mouse',
      price: 2499.99,
      stock: 50,
      categoryId: electronics.id,
    },
  });

  const notebook = await prisma.product.create({
    data: {
      name: 'Spiral Notebook',
      description: '200 pages',
      price: 79.99,
      stock: 100,
      categoryId: office.id,
    },
  });

  // User
  const customer = await prisma.user.create({
    data: {
      fullName: 'John Doe',
      email: 'john@example.com',
      password: 'password123',
      role: UserRole.CUSTOMER,
    },
  });

  // Order
  await prisma.order.create({
    data: {
      userId: customer.id,
      total: 37499.98,
      status: OrderStatus.PENDING,
      items: {
        create: [
          {
            productId: laptop.id,
            quantity: 1,
          },
          {
            productId: mouse.id,
            quantity: 1,
          },
        ],
      },
    },
  });
}

main()
  .then(async () => {
    console.log('Seed completed.');
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
