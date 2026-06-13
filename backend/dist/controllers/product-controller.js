"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProducts = getProducts;
const product_service_1 = require("../services/product-service");
async function getProducts(req, res) {
    try {
        const products = await (0, product_service_1.getAllProducts)();
        res.status(200).json({
            success: true,
            data: products,
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch products',
        });
    }
}
//# sourceMappingURL=product-controller.js.map