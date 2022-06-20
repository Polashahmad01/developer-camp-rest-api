const express = require("express");
const router = express.Router();
const {
  getBootcamps,
  getBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
} = require("../controllers/bootcamps");

// Get all bootcamps & also create new bootcamp
router.route("/").get(getBootcamps).post(createBootcamp);

// Get single bootcamp & Update a bootcamp & also delete a bootcamp
router
  .route("/:id")
  .get(getBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);

module.exports = router;
