// File: utils/response.js

export const handleResponse = (
  res,
  { status = 200, message = "Success", data = null }
) => {
  return res.status(status).json({
    success: status >= 200 && status < 300,
    status,
    message,
    data,
  });
};

export const handleError = (
  res,
  { status = 500, message = "Internal Server Error", error = null }
) => {
  return res.status(status).json({
    success: false,
    status,
    message,
    error,
  });
};
