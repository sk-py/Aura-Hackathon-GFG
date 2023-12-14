const experienceModel = require("../Models/Experience");
const FreelanceJobs = require("../Models/FreelanceJob");
// const FreelanceFreelanceJobs = require("../Models/FreelanceJob");

const addFreelanceJob = async (req, res) => {
  const {
    projectName,
    description,
    payment,
    duration,
    responsibilities,
    requiredSkills,
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
      requiredSkills,
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
    // console.log("Error :", error.message);
  }
};

const deleteFreelanceJob = async (req, res) => {
  const { userId, experienceId } = req.body;
  const result = await experienceModel.deleteOne({
    userId: userId,
    _id: experienceId,
  });

  if (!result) {
    res.status(500).json({
      err: "Internal Server Error, please try again",
    });
  }
  res.status(201).json({
    msg: " Freelance Job deleted successfully",
  });
};

module.exports = { addFreelanceJob };
