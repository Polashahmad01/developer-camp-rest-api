const express = require("express");
const router = express.Router();

// Show all bootcamps
router.get("/", (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Show all Bootcamps`,
  });
});

// Show single bootcamps
router.get("/:id", (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Showing single bootcamp with id ${req.params.id}`,
  });
});

// Create new bootcamps
router.post("/", (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Create new bootcamp`,
  });
});

// Update a bootcamps
router.put("/:id", (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Bootcamp has been updated with the id ${req.params.id}`,
  });
});

// Delete a bootcamps
router.delete("/:id", (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Bootcamp has been deleted with id ${req.params.id}`,
  });
});

module.exports = router;
