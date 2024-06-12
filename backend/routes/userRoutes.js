// backend/routes/productRoutes.js
import express from 'express';
const router = express.Router();
import User from '../models/userModel.js';
import {
  updateUser,
  deleteUser,
  getUserByID,
  getAllUsers,
  getUserProfile,
  updateUserProfile,
  logoutUser,
  registerUser,
  authUser,
} from '../controllers/userControllers.js';

router.route('/').post(registerUser).get(getAllUsers);
router.route('/:id').get(getUserByID).delete(deleteUser).put(updateUser);
router.route('/profile').get(getUserProfile).put(updateUserProfile);
router.post('/login', authUser);
router.post('/logout', logoutUser);

export default router;
