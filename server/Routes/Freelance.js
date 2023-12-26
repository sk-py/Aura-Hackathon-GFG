const express = require("express");
const {
  addFreelanceJob,
  getAllFreelancePosts,
  getSpecificData,
  getDetails,
  getRecommendedData,
  updateStatus,
} = require("../Controllers/Freelance");
const getUserFromToken = require("../Controllers/Validator");
const router = express.Router();

//Route to create Freelance Jobs
router.post("/add", getUserFromToken, addFreelanceJob);
router.get("/getFreelanceJobs/:contentLoaded", getAllFreelancePosts);
router.get("/getFreelancePosts", getUserFromToken, getSpecificData);
router.get("/getFreelanceDetails/:Id", getDetails);
//Route to display recommended freelance posts -- for candidates
router.get("/recommended", getUserFromToken, getRecommendedData);

//Route to update status of application
router.put("/status", getUserFromToken, updateStatus);

module.exports = router;
