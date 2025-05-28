// File: routes/userRoutes.js

import express from "express";
import {
  createUser,
  getAllUsers,
  getUser,
  hardDeleteUser,
  patchUser,
  patchUserByEmployerId,
  softDeleteUser,
  updateUser,
} from "../controllers/userControllers.js";

const router = express.Router();

// Define routes for user management
router.get("/all", getAllUsers); // Get all users

router.post("/new", createUser); // Create a new user

router.get("/:id/user", getUser); // Get a specific user by ID

router.patch("/patch/:id", patchUser); // Partially update a user

router.patch("/employer/:employerId", patchUserByEmployerId);

router.put("/update/:id", updateUser); // Fully update a user

router.delete("/soft-delete/:id", softDeleteUser); // Soft delete a user

router.delete("/hard-delete/:id", hardDeleteUser); // Hard delete a user

export default router;
