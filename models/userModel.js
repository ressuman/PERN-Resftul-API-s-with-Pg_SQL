// File: models/userModel.js

const createUserModel = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(150),
        allowNull: false,
        isLowercase: true,
        unique: true,
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      profile: {
        type: DataTypes.TEXT,
      },
      phone: {
        type: DataTypes.STRING(20),
      },
      designation: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      employerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
      },
    },
    {
      timestamps: true,
      paranoid: true, // enables soft delete with deletedAt
    }
  );

  return User;
};

export default createUserModel;
