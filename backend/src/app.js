import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import productRoutes from './routes/productRoutes.js';
import inventoryRoutes from './routes/inventoryRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import reportRoutes from './routes/reportRoutes.js';
import errorHandler from './middleware/errorHandler.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/products', productRoutes);
app.use('/inventory', inventoryRoutes);
app.use('/orders', orderRoutes);
app.use('/reports', reportRoutes);

app.use(errorHandler);

export default app;
