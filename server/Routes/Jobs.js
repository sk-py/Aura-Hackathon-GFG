const express = require("express");
const router = express.Router();
const {
  createJobPosts,
  getRecommendedJobs,
  deleteJobPost,
} = require("../Controllers/Jobs");

//Route for adding jobs
router.post("/add", createJobPosts);

//Route for displaying recommended jobs
router.get("/getRecommendedJobs/:userId", getRecommendedJobs);

//Route to delete a job Post
router.delete("/delete", deleteJobPost);
module.exports = router;
