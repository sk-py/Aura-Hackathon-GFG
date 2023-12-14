const express = require("express");
const { addFreelanceJob } = require("../Controllers/Freelance");
const router = express.Router();

//Route to create Freelance Jobs
router.post("/add", addFreelanceJob);
router.get("/getFreelanceJobs");

module.exports = router;
