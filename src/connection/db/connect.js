// File: connection/db/connect.js

import pool from "./db.js"; // Import the connection pool
import colors from "colors";

const connectDB = async () => {
  try {
    // Test initial connection
    const client = await pool.connect();
    console.log(
      "✅".green +
        ` Connected to PostgreSQL database: `.bold +
        `${client.database || process.env.DB_NAME}`.cyan
    );
    client.release(); // release back to pool
    return pool;
  } catch (error) {
    console.error(
      "❌".red + ` Database connection failed:`.bold,
      error.message.yellow
    );
    process.exit(1);
  }
};

const testConnection = async () => {
  try {
    console.log("🔍".blue + " Testing database connection...".italic);
    const client = await pool.connect();
    await client.query("SELECT 1"); // simple test query
    client.release();
    console.log("✅".green + " Database test successful.".bold);
    return true;
  } catch (err) {
    console.error(
      "❌".red + " Test connection failed:".bold,
      err.message.yellow
    );
    return false;
  }
};

const getPool = () => pool;

pool.on("connect", () => {
  console.log("🔗".blue + " New client connected to the pool.".italic);
});
pool.on("remove", (client) => {
  console.log(
    "🔌".yellow +
      ` Client disconnected from the pool: ${client.database}`.italic
  );
});
pool.on("error", (err, client) => {
  console.error(
    "❗".red + " Pool error:".bold,
    err.message.yellow,
    "\nClient info:".gray,
    client ? client.database : "N/A"
  );
});

export { connectDB, testConnection, getPool };
export default pool;
