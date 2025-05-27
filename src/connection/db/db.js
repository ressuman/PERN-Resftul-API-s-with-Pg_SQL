// File: connection/db/db.js

import pkg from "pg";
const { Pool } = pkg;
import config from "../config/config.js";

const pool = new Pool(config); // ✅ Creates a connection pool

export default pool; // ⬅️ Makes it available to other modules
