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

const Bootcamp = require("../model/Bootcamp");
const advancedResults = require("../middleware/advancedResults");

// Include other resource router
const courseRouter = require('./courses');

const router = express.Router();

const { protect } = require("../middleware/auth");

// Re route into other resource router
router.use("/:bootcampId/courses", courseRouter);

// Get bootcamps by radius or zipcode
router.route("/radius/:zipcode/:distance").get(getBootcampsInRadius);

// Upload photo for bootcamp
router.route("/:id/photo").put(protect, bootcampPhotoUpload);

// Get all bootcamps & also create new bootcamp
router.route("/").get(advancedResults(Bootcamp, 'courses'), getBootcamps).post(protect, createBootcamp);

// Get single bootcamp & Update a bootcamp & also delete a bootcamp
router
  .route("/:id")
  .get(getBootcamp)
  .put(protect, updateBootcamp)
  .delete(protect, deleteBootcamp);

module.exports = router;
