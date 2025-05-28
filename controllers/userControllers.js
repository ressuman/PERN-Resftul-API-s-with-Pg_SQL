// File: controllers/userControllers.js

import db from "../models/index.js";
const { User } = db;

// Get all users (excluding soft-deleted)
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();

    if (users.length === 0)
      return res.status(404).json({
        success: false,
        error: "No users found",
      });

    res.status(200).json({
      success: true,
      message: "Users fetched successfully",
      count: users.length,
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Failed to fetch users",
      details: error.message,
    });
  }
};

// Get a single user by ID
export const getUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findByPk(id);
    if (!user)
      return res.status(404).json({
        error: "User not found",
      });

    res.status(200).json({
      success: true,
      message: "User fetched successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Failed to fetch user",
      details: error.message,
    });
  }
};

// Create a new user
export const createUser = async (req, res) => {
  try {
    const { name, email, age, profile, phone, designation, employerId } =
      req.body;

    // Check for required fields only
    if (!name || !email || !age || !designation || !employerId) {
      return res.status(400).json({
        success: false,
        error: "Missing required fields",
      });
    }

    // Check for unique email
    const existingEmail = await User.findOne({ where: { email } });
    if (existingEmail) {
      return res.status(400).json({
        success: false,
        error: "User with this email already exists",
      });
    }

    // Check for unique employerId
    const existingEmployerId = await User.findOne({ where: { employerId } });
    if (existingEmployerId) {
      return res.status(400).json({
        success: false,
        error: "This employerId is already assigned to another user",
      });
    }

    // Create the user
    const user = await User.create({
      name,
      email,
      age,
      profile,
      phone,
      designation,
      employerId,
    });

    return res.status(201).json({
      success: true,
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Failed to create user",
      details: error.message,
    });
  }
};

// Update part of a user (PATCH)
export const patchUser = async (req, res) => {
  try {
    const { id } = req.params;

    const [updated] = await User.update(req.body, {
      where: { id },
    });
    if (!updated)
      return res.status(404).json({
        success: false,
        error: "User not found or no changes",
      });

    const updatedUser = await User.findByPk(id);

    res.status(200).json({
      success: true,
      message: "User partially updated successfully",
      data: updatedUser,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: "Failed to patch user",
      details: error.message,
    });
  }
};

// Update part of a user (PATCH)
export const patchUserByEmployerId = async (req, res) => {
  try {
    const { employerId } = req.params;
    const updateData = req.body;

    // Check if user with the given employerId exists
    const user = await User.findOne({ where: { employerId } });

    if (!user) {
      return res.status(404).json({
        success: false,
        error: "User with this employerId not found",
      });
    }

    // Update the user
    await user.update(updateData);

    return res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Failed to update user",
      details: error.message,
    });
  }
};

// Replace full user (PUT)
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;

    const existingUser = await User.findByPk(id);
    if (!existingUser)
      return res.status(404).json({
        success: false,
        error: "User not found",
      });

    await existingUser.update(req.body);

    res.status(200).json({
      success: true,
      message: "User replaced and updated successfully",
      data: existingUser,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: "Failed to replace user",
      details: error.message,
    });
  }
};

// Soft delete user
export const softDeleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findByPk(id);
    if (!user)
      return res.status(404).json({
        success: false,
        error: "User not found",
      });

    await user.destroy(); // This sets `deletedAt` because of `paranoid: true`

    res.status(200).json({
      success: true,
      message: "User soft deleted",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Failed to delete user",
      details: error.message,
    });
  }
};

// Hard delete user
export const hardDeleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await User.destroy({
      where: { id },
      force: true,
    });
    if (!deleted)
      return res.status(404).json({
        success: false,
        error: "User not found",
      });

    res.status(200).json({
      success: true,
      message: "User permanently deleted",
      //data: deleted,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Failed to hard delete user",
      details: error.message,
    });
  }
};
