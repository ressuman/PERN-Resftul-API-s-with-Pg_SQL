// File: controllers/userControllers.js

import {
  createUserService,
  getAllUsersService,
  getUserService,
  hardDeleteUserService,
  patchUserService,
  softDeleteUserService,
  updateUserService,
} from "../models/userModel.js";
import { handleResponse } from "../utils/response.js";

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await getAllUsersService();
    if (!users.length) {
      return handleResponse(res, {
        status: 404,
        message: "No users found",
      });
    }
    return handleResponse(res, {
      status: 200,
      message: "Users retrieved successfully",
      data: users,
    });
  } catch (err) {
    next(err);
  }
};

export const createUser = async (req, res, next) => {
  try {
    const user = await createUserService(req.body);
    return handleResponse(res, {
      status: 201,
      message: "User created successfully",
      data: user,
    });
  } catch (err) {
    next(err);
  }
};

export const getUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await getUserService(id);
    if (!user) {
      return handleResponse(res, {
        status: 404,
        message: "User not found",
      });
    }
    return handleResponse(res, {
      status: 200,
      message: "User retrieved successfully",
      data: user,
    });
  } catch (err) {
    next(err);
  }
};

export const patchUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedUser = await patchUserService(id, req.body);
    if (!updatedUser) {
      return handleResponse(res, {
        status: 404,
        message: "User not found or no fields to update",
      });
    }
    return handleResponse(res, {
      status: 200,
      message: "User updated successfully",
      data: updatedUser,
    });
  } catch (err) {
    next(err);
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedUser = await updateUserService(id, req.body);
    if (!updatedUser) {
      return handleResponse(res, {
        status: 404,
        message: "User not found",
      });
    }
    return handleResponse(res, {
      status: 200,
      message: "User updated successfully",
      data: updatedUser,
    });
  } catch (err) {
    next(err);
  }
};

export const softDeleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedUser = await softDeleteUserService(id);
    if (!deletedUser) {
      return handleResponse(res, {
        status: 404,
        message: "User not found",
      });
    }
    return handleResponse(res, {
      status: 200,
      message: "User soft deleted successfully",
      data: deletedUser,
    });
  } catch (err) {
    next(err);
  }
};

export const hardDeleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedUser = await hardDeleteUserService(id);
    if (!deletedUser) {
      return handleResponse(res, {
        status: 404,
        message: "User not found",
      });
    }
    return handleResponse(res, {
      status: 200,
      message: "User permanently deleted",
      data: deletedUser,
    });
  } catch (err) {
    next(err);
  }
};
