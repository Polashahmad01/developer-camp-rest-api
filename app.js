const express = require("express");
const dotenv = require("dotenv");

// Load env vars
dotenv.config({ path: "./config/config.env" });

const app = express();

// Routes
app.get("/api/v1/bootcamps", (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Show all Bootcamps`,
  });
});

app.get("/api/v1/bootcamps/:id", (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Showing single bootcamp with id ${req.params.id}`,
  });
});

app.post("/api/v1/bootcamps", (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Create new bootcamp`,
  });
});

app.put("/api/v1/bootcamps/:id", (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Bootcamp has been updated with the id ${req.params.id}`,
  });
});

app.delete("/api/v1/bootcamps/:id", (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Bootcamp has been deleted with id ${req.params.id}`,
  });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
