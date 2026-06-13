"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllProducts = getAllProducts;
const prisma_1 = require("../prisma/prisma");
async function getAllProducts() {
    return prisma_1.prisma.product.findMany({
        include: {
            category: true,
        },
        orderBy: {
            id: 'asc',
        },
    });
}
//# sourceMappingURL=product-service.js.map