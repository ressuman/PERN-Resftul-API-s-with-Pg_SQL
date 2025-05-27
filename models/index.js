// File: models/index.js

import { DataTypes } from "sequelize";
import createUserModel from "./userModel.js";
import sequelize from "../connection/database/sequelize.js";

// Instantiate models
const User = createUserModel(sequelize, DataTypes);

// Export models in an object
const db = {
  sequelize,
  User,
};

export default db;
