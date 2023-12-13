const FreelanceJobs = require("../Models/FreelanceJob");
// const FreelanceFreelanceJobs = require("../Models/FreelanceJob");

const addFreelanceJob = async (req, res) => {
  const {
    projectName,
    description,
    payment,
    duration,
    responsibilities,
    strequiredSkillsatus,
    postedBy,
  } = req.body;

  if (
    !projectName ||
    !description ||
    !payment ||
    !duration ||
    !requiredSkills ||
    !postedBy
  ) {
    res.status(400).json({ err: "Invalid request body" });
  }
  try {
    const newFreelanceJob = await FreelanceJobs.create({
      projectName,
      description,
      payment,
      duration,
      responsibilities,
      strequiredSkillsatus,
      postedBy,
    });

    !newFreelanceJob
      ? res.status(400).json({
          err: "There was an error uploading the job post please try again",
        })
      : res.status(201).json({
          msg: " Freelance Job posted successfully",
        });
  } catch (error) {
    res.status(500).json({
      err: "Internal Server Error, please try again",
    });
    console.log("Error :", error.message);
  }
};

module.exports = { addFreelanceJob };
