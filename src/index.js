// File: index.js

import fs from "fs";
import path from "path";
import express from "express";
import cors from "cors";
import colors from "colors";
import morgan from "morgan";
import dotenv from "dotenv";
//import { connectDB, testConnection } from "./connection/db/database.js";
//import studentRoutes from "./routes/studentRoutes.js";
import { fileURLToPath } from "url";

// Setup environment
dotenv.config();

// ES Module equivalent of __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Morgan Logging (colored)
if (process.env.NODE_ENV === "development") {
  app.use(
    morgan((tokens, req, res) => {
      return [
        colors.cyan(tokens.method(req, res)),
        colors.yellow(tokens.url(req, res)),
        colors.green(tokens.status(req, res)),
        colors.magenta(`${tokens["response-time"](req, res)}ms`),
      ].join(" ");
    })
  );
} else {
  const accessLogStream = fs.createWriteStream(
    path.join(__dirname, "access.log"),
    { flags: "a" }
  );
  app.use(morgan("combined", { stream: accessLogStream }));
}

// Routes
//app.use("/api/v1/students", studentRoutes);

// Root endpoint
app.get("/", (req, res) => {
  res.status(200).send(`
    <html>
      <head><title>Student Management API</title></head>
      <body style="font-family: sans-serif">
        <h1 style="color: darkblue">Welcome to the Student Management API</h1>
        <p>This API allows you to manage student records efficiently.</p>
        <p><strong>Message:</strong> Student Management API</p>
        <p><strong>Version:</strong> 1.0.0</p>
        <ul>
          <li>API Base: <code>/api/v1</code></li>
          <li>Students Endpoint: <code>/api/v1/students</code></li>
        </ul>
      </body>
    </html>
  `);
});

// Initialize Application
const initializeApp = async () => {
  try {
    console.log("🚀 Starting Student Management API...".cyan.bold);
    console.log(`🌍 Environment: ${process.env.NODE_ENV}`.blue);
    console.log(`🖥️  Server: ${process.env.HOST}:${process.env.PORT}`.yellow);

    // const pool = await connectDB();
    // if (!pool) throw new Error("Database connection failed");

    // const dbConnected = await testConnection();
    // if (!dbConnected) throw new Error("Test connection failed");

    app.listen(process.env.PORT, process.env.HOST, () => {
      console.log(`🎉 Server running at ${process.env.HOST_URL}`.rainbow);
      console.log(
        `📡 API endpoint: ${process.env.HOST_URL}/api/v1/students`.bgMagenta
          .italic.underline
      );
      console.log("✨ Ready to accept connections!".bold.green);
    });
  } catch (error) {
    console.error(
      "💥 Failed to start application:".red.bold,
      error.message.red
    );
    console.error("Stack trace:".gray, error.stack);
    process.exit(1);
  }
};

// Error Handling Middleware

// Global Error Handlers
process.on("uncaughtException", (error) => {
  console.error("💥 Uncaught Exception:".bgRed.white, error.message);
  console.error("Stack trace:".gray, error.stack);
  process.exit(1);
});

process.on("unhandledRejection", (reason, promise) => {
  console.error("💥 Unhandled Rejection at:".bgRed.white, promise);
  console.error("Reason:".gray, reason);
  process.exit(1);
});

// Start App
initializeApp();

export default app;
