// File: routes/userRoutes.js

import express from "express";
import {
  getAllUsers,
  createUser,
  getUser,
  patchUser,
  updateUser,
  softDeleteUser,
  hardDeleteUser,
} from "../controllers/userControllers.js";

const router = express.Router();

// Define routes for user (student) management
router.get("/all", getAllUsers); // Get all users

router.post("/new", createUser); // Create a new user

router.get("/:id/user", getUser); // Get a specific user by ID

router.patch("/patch/:id", patchUser); // Partially update a user

router.put("/update/:id", updateUser); // Fully update a user

router.delete("/soft-delete/:id", softDeleteUser); // Soft delete a user

router.delete("/hard-delete/:id", hardDeleteUser); // Hard delete a user

export default router;
