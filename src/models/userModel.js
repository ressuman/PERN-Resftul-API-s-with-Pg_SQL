// File:models/userModel.js

import pool from "../connection/db/db.js";

// Fetch all users (excluding soft-deleted)
export const getAllUsersService = async () => {
  const query = `
    SELECT * FROM users
    WHERE "deletedAt" IS NULL
    ORDER BY "createdAt" DESC
  `;
  const { rows } = await pool.query(query);
  return rows;
};

// Create a new user
export const createUserService = async (userData) => {
  const { name, email, age, profile, phone } = userData;
  const query = `
    INSERT INTO users (name, email, age, profile, phone, "createdAt", "updatedAt")
    VALUES ($1, $2, $3, $4, $5, NOW(), NOW())
    RETURNING *
  `;
  const values = [name, email, age, profile, phone];
  const { rows } = await pool.query(query, values);
  return rows[0];
};

// Get user by ID
export const getUserService = async (id) => {
  const query = `
    SELECT * FROM users
    WHERE id = $1 AND "deletedAt" IS NULL
  `;
  const { rows } = await pool.query(query, [id]);
  return rows[0];
};

// Patch (partial update)
export const patchUserService = async (id, updates) => {
  const fields = Object.keys(updates);
  const values = Object.values(updates);

  if (fields.length === 0) return null;

  const setClause = fields
    .map((field, index) => `"${field}" = $${index + 1}`)
    .join(", ");

  const query = `
    UPDATE users
    SET ${setClause}, "updatedAt" = NOW()
    WHERE id = $${fields.length + 1} AND "deletedAt" IS NULL
    RETURNING *
  `;
  values.push(id);

  const { rows } = await pool.query(query, values);
  return rows[0];
};

// Full update
export const updateUserService = async (id, userData) => {
  const { name, email, age, profile, phone } = userData;
  const query = `
    UPDATE users
    SET name = $1,
        email = $2,
        age = $3,
        profile = $4,
        phone = $5,
        "updatedAt" = NOW()
    WHERE id = $6 AND "deletedAt" IS NULL
    RETURNING *
  `;
  const values = [name, email, age, profile, phone, id];
  const { rows } = await pool.query(query, values);
  return rows[0];
};

// Soft delete
export const softDeleteUserService = async (id) => {
  const query = `
    UPDATE users
    SET "deletedAt" = NOW()
    WHERE id = $1
    RETURNING *
  `;
  const { rows } = await pool.query(query, [id]);
  return rows[0];
};

// Hard delete
export const hardDeleteUserService = async (id) => {
  const query = `
    DELETE FROM users
    WHERE id = $1
    RETURNING *
  `;
  const { rows } = await pool.query(query, [id]);
  return rows[0];
};
