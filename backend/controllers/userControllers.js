import asyncHandler from '../middleware/asyncHandler.js';
import User from '../models/userModel.js';

// @desc Auth and get the tocken
// @route POST /api/users/login
// @access Public
const authUser = asyncHandler(async (req, res) => {
  res.json('auth user');
});

// @desc Register user
// @route POST /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  res.json('register User');
});

// @desc Logout user
// @route POST /api/users/logout
// @access Private
const logoutUser = asyncHandler(async (req, res) => {
  res.json('logout User');
});
// @desc Update user
// @route PUT /api/users/profile
// @access Private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.json('update User');
});

// @desc Get user profile
// @route GET /api/users/profile
// @access Private
const getUserProfile = asyncHandler(async (req, res) => {
  res.json('Get user profile');
});
// @desc Get all users
// @route GET /api/users
// @access Private/admin
const getAllUsers = asyncHandler(async (req, res) => {
  res.json('Get all users');
});

// @desc Get user by ID
// @route GET /api/users/:id
// @access Private/admin
const getUserByID = asyncHandler(async (req, res) => {
  res.json('Get user by Id');
});

// @desc Delete user
// @route DELETE /api/users/:id
// @access Private/admin
const deleteUser = asyncHandler(async (req, res) => {
  res.json('Delete user');
});
// @desc Update user
// @route PUT /api/users/:id
// @access Private/admin
const updateUser = asyncHandler(async (req, res) => {
  res.json('Update user');
});

export {
  updateUser,
  deleteUser,
  getUserByID,
  getAllUsers,
  getUserProfile,
  updateUserProfile,
  logoutUser,
  registerUser,
  authUser,
};
