const express = require("express");
const {
  getBootcamps,
  getBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
  getBootcampsInRadius,
  bootcampPhotoUpload,
} = require("../controllers/bootcamps");

// Include other resource router
const courseRouter = require('./courses');

const router = express.Router();

// Re route into other resource router
router.use("/:bootcampId/courses", courseRouter);

// Get bootcamps by radius or zipcode
router.route("/radius/:zipcode/:distance").get(getBootcampsInRadius);

// Upload photo for bootcamp
router.route("/:id/photo").put(bootcampPhotoUpload);

// Get all bootcamps & also create new bootcamp
router.route("/").get(getBootcamps).post(createBootcamp);

// Get single bootcamp & Update a bootcamp & also delete a bootcamp
router
  .route("/:id")
  .get(getBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);

module.exports = router;
