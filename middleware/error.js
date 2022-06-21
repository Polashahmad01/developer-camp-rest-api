const errorHandler = (error, req, res, next) => {
  // Log to console for dev
  console.log(error.stack.red);

  res
    .status(error.statusCode || 500)
    .json({ success: false, error: error.message || "Server Error" });
};

module.exports = errorHandler;
