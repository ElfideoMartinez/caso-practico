"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const product_controller_1 = require("./controllers/product-controller");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json(), (0, cors_1.default)({
    origin: 'http://localhost:5173',
}));
app.get('/', (req, res) => {
    res.send('API is running');
});
app.use('/api/products', product_controller_1.getProducts);
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
//# sourceMappingURL=index.js.map