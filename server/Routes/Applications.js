const express = require("express");
const router = express.Router();
const Applications = require("../Models/Applications");

//Route for applying on a specefic job post --- for candidate
router.post("/apply", async (req, res) => {
  const { userId, jobId } = req.body;
  try {
    const newApplication = await Applications.create({
      userId,
      jobId,
    });
    res.status(200).json("Application created succesfully");
  } catch (error) {
    res.status(500).json(`Error: ${error.message}`);
  }
});

//Route for updating status of candidate's application --- for recruiter
router.put("/status", async (req, res) => {
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

module.exports = router;
