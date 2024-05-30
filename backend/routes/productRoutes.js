// backend/routes/productRoutes.js
import express from 'express';
const router = express.Router();
import asyncHandler from '../middleware/asyncHandler.js'; // Ensure this path is correct
import Product from '../models/productModel.js';
import {
  getProducts,
  getProductById,
} from '../controllers/productControllers.js';

router.route('/').get(getProducts);
router.route('/:id').get(getProductById);

export default router;
