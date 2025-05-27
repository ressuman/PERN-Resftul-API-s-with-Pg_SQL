// File: connection/config/config.js

import dotenv from "dotenv";
import assert from "assert";

dotenv.config();

const {
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
  DB_CONNECTION_LIMIT,
  DB_IDLE_TIMEOUT,
  DB_ENABLE_KEEP_ALIVE,
  DB_KEEP_ALIVE_INITIAL_DELAY,
} = process.env;

// Validate required environment variables
assert(DB_HOST, "DB_HOST is required");
assert(DB_PORT, "DB_PORT is required");
assert(DB_NAME, "DB_NAME is required");
assert(DB_USER, "DB_USER is required");
assert(DB_PASSWORD, "DB_PASSWORD is required");

const config = {
  host: DB_HOST,
  port: parseInt(DB_PORT, 10),
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,

  // Pool-specific settings for pg
  max: parseInt(DB_CONNECTION_LIMIT || "10", 10), // Max connections
  idleTimeoutMillis: parseInt(DB_IDLE_TIMEOUT || "10000", 10), // Idle timeout (ms)
  connectionTimeoutMillis: parseInt(DB_KEEP_ALIVE_INITIAL_DELAY || "0", 10), // Time to wait for a connection (ms)

  // pg doesn't have these directly, so keep for reference if custom pooling logic is added
  allowExitOnIdle: false,
  keepAlive: DB_ENABLE_KEEP_ALIVE === "true",
};

export default config;
