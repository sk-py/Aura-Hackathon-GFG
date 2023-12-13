const express = require("express");
const router = express.Router();
const { createJobPosts, getRecommendedJobs } = require("../Controllers/Jobs");

//Route for adding jobs
router.post("/add", createJobPosts);

//Route for displaying recommended jobs
router.get("/getRecommendedJobs/:userId", getRecommendedJobs);

module.exports = router;
