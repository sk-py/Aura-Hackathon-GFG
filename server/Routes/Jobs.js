const express = require("express");
const router = express.Router();
const {
  createJobPosts,
  getRecommendedJobs,
  deleteJobPost,
  getAllJobs,
  getSpeceficJob,
  filterFunctionality,
} = require("../Controllers/Jobs");
const getUserFromToken = require("../Controllers/Validator");

//Route for adding jobs
router.post("/add", createJobPosts);

//Route for displaying recommended jobs
router.get("/getRecommendedJobs", getUserFromToken, getRecommendedJobs);

//Route to delete a job Post
router.delete("/delete", deleteJobPost);

//Route to get all jobs available in limits
router.get("/getjobs/:rows", getAllJobs);

//Route to get specific job data using JobId
router.get("/jobdetails/:Id", getSpeceficJob);

//Route for applying fiters on result
router.post("/filter", filterFunctionality);

module.exports = router;
