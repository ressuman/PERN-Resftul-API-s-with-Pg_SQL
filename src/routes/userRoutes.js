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
import inputValidator from "../middlewares/inputValidator.js";

const router = express.Router();

// Define routes for user management
router.get("/all", getAllUsers); // Get all users

router.post("/new", inputValidator, createUser); // Create a new user

router.get("/:id/user", getUser); // Get a specific user by ID

router.patch("/patch/:id", inputValidator, patchUser); // Partially update a user

router.put("/update/:id", inputValidator, updateUser); // Fully update a user

router.delete("/soft-delete/:id", softDeleteUser); // Soft delete a user

router.delete("/hard-delete/:id", hardDeleteUser); // Hard delete a user

export default router;
