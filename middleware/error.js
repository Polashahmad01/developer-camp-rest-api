const ErrorResponse = require("../utils/errorResponse");

const errorHandler = (error, req, res, next) => {
  let errorCopy = { ...error };

  errorCopy.message = error.message;

  // Log to console for dev
  console.log(error.stack.red);

  // Log error name on console
  if (process.env.NODE_ENV === "development") {
    console.log(error.name);
  }

  // Mongoose invalid object id
  if (error.name === "CastError") {
    const message = `Resource not found`;
    errorCopy = new ErrorResponse(message, 400);
  }

  // Mongoose duplicate key
  if (error.code === 11000) {
    const message = `Duplicate field value entered`;
    errorCopy = new ErrorResponse(message, 400);
  }

  // Mongoose validation error
  if (error.name === "ValidationError") {
    const message = Object.values(error.errors).map((val) => val.message);
    errorCopy = new ErrorResponse(message, 400);
  }

  res
    .status(errorCopy.statusCode || 500)
    .json({ success: false, error: errorCopy.message || "Server Error" });
};

module.exports = errorHandler;
