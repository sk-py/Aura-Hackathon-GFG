const Jobs = require("../Models/Jobs");

//Function for creating Job Posts
const createJobPosts = async (req, res) => {
  const {
    companyName,
    role,
    description,
    package,
    type,
    requiredSkills,
    postedBy,
    status,
  } = req.body;

  if (
    !companyName ||
    !role ||
    !description ||
    !package ||
    !type ||
    !requiredSkills ||
    !postedBy ||
    !status
  ) {
    res.status(400).json({ err: "Invalid request body" });
  }
  try {
    const newJob = await Jobs.create({
      companyName,
      role,
      description,
      package,
      type,
      requiredSkills,
      postedBy,
      status,
    });

    !newJob
      ? res.status(400).json({
          err: "There was an error uploading the job post please try again",
        })
      : res.status(201).json({
          msg: "Job posted successfully",
        });
  } catch (error) {
    res.status(500).json({
      err: "Internal Server Error, please try again",
    });
    console.log("Error :", error.message);
  }
};

module.exports = { createJobPosts };
