import express from 'express';
import cors from 'cors';
import { getProducts } from './controllers/product-controller';

const app = express();

app.use(cors());
app.use(
  express.json(),
  cors({
    origin: 'http://localhost:5173',
  }),
);

app.get('/', (req, res) => {
  res.send('API is running');
});
app.use('/api/products', getProducts);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
