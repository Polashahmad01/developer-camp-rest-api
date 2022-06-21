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
    const message = `Resource not found with id of ${error.value}`;
    errorCopy = new ErrorResponse(message, 400);
  }

  res
    .status(errorCopy.statusCode || 500)
    .json({ success: false, error: errorCopy.message || "Server Error" });
};

module.exports = errorHandler;
