const express = require("express");
const router = express.Router();
const Applications = require("../Models/Applications");
const UserModel = require("../Models/User");
const getUserFromToken = require("../Controllers/Validator");

//Route for applying on a specefic job post --- for candidate
router.post("/apply", getUserFromToken, async (req, res) => {
  const {
    userId,
    jobId,
    companyName,
    role,
    appliedDate,
    projectName,
    postedBy,
    indicator,
    userName,
  } = req.body;
  console.log(postedBy, indicator);

  if (projectName) {
    try {
      const alreadyApplied = await Applications.findOne({
        userId: userId,
        jobId: jobId,
      });

      if (alreadyApplied) {
        res.status(409).json("Already applied for this post.");
      } else {
        const newApplication = await Applications.create({
          userId,
          jobId,
          projectName: projectName,
          postedBy: postedBy[1],
          appliedDate: appliedDate,
          applicantName: userName,
        });
        res.json("Application created succesfully");
      }
    } catch (error) {
      res.json(`Error: ${error.message}`);
      console.log("error", error.message);
    }
  }
  try {
    const alreadyApplied = await Applications.findOne({
      userId: userId,
      jobId: jobId,
    });

    if (alreadyApplied) {
      res.status(409).json("Already applied for this post.");
    } else {
      const newApplication = await Applications.create({
        userId,
        jobId,
        companyName: companyName,
        role: role,
        appliedDate: appliedDate,
      });
      res.json("Application created succesfully");
    }
  } catch (error) {
    // res.json(`Error: ${error.message}`);
    console.log("error", error.message);
  }
});

//Route for updating status of candidate's application --- for recruiter
router.put("/status", getUserFromToken, async (req, res) => {
  const { status, jobId, userId } = req.body;
  try {
    const job = await Applications.findOneAndUpdate(
      {
        jobId: jobId,
        userId: userId,
      },
      { $set: { status: status } }
    );
    // job.status = status;
    // await Applications.save();
    res.status(201).json(job);
  } catch (error) {
    res.status(500).json(`Error: ${error.message}`);
  }
});

//Route for displaying all the applications for a specific job --- for Recruiter and Candidate
router.get("/view/:jobId", async (req, res) => {
  const jobId = req.params.jobId;
  try {
    const allApplications = await Applications.find({ jobId: jobId });
    res.json(allApplications);
  } catch (err) {
    res.status(500).json(`Error: ${err.message}`);
  }
});

//Route to display all the created applications of user -- for candidates
router.get("/getApplications", getUserFromToken, async (req, res) => {
  const userId = req.body;
  try {
    const allApplications = await Applications.find({ userId: userId.userId });
    if (!allApplications) {
      res.status(203).json("Not applied on any openings yet.");
    }
    res.status(200).json(allApplications);
  } catch (error) {
    res.status(500).json(`Error: ${error.message}`);
  }
});

module.exports = router;
