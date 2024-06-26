import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/usersRoutes.js';
const port = process.env.PORT || 5000;

const app = express();
connectDB();
app.get('/', (req, res) => {
  res.send('API is running');
});

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use(notFound);
app.use(errorHandler);
app.listen(port, () => console.log(`server is running on the server ${port}`));
