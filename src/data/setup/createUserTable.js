// File: data/createUserTable.js

import pool from "../../connection/db/db.js";

const createUserTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      email VARCHAR(150) UNIQUE NOT NULL,
      age INT CHECK (age >= 0),
      profile TEXT,
      phone VARCHAR(20),
      "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      "deletedAt" TIMESTAMP
    );
  `;

  try {
    const client = await pool.connect();
    await client.query(query);
    console.log("✅ User table created successfully.");
    client.release();
  } catch (error) {
    console.error("❌ Error creating user table:", error.message);
  }
};

//createUserTable(); // Automatically run when the file is executed

export default createUserTable;
