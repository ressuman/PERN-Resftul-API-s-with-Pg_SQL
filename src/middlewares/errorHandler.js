// File:middlewares/errorHandler.js

// Centralized error handling

const errorHandler = (err, req, res, next) => {
  console.error("❌ Error occurred:", err.stack || err.message);

  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  res.status(statusCode).json({
    success: false,
    status: statusCode,
    message,
    error: message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

export default errorHandler;
