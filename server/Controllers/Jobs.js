const Jobs = require("../Models/Jobs");
const UserModel = require("../Models/User");

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
    // console.log("Error :", error.message);
  }
};

//Function for sending recommended jobs on the basis of skills of users
const getRecommendedJobs = async (req, res) => {
  const id = req.params.userId;
  const user = await UserModel.findOne({ _id: id });
  if (!user) {
    res.status(404).json("User not found");
  }
  const userSkills = user.skills;
  if (userSkills.length === 0) {
    res.status(204).json({ err: "Add skills to get job recommendations" });
  }
  const matchedJobs = await Jobs.find({
    requiredSkills: { $in: userSkills },
  });
  res.status(200).json(matchedJobs);
};

//Function for deleteing the job Post
const deleteJobPost = async (req, res) => {
  try {
    const jobId = req.body;
    const result = await Jobs.deleteOne({ _id: jobId });
    if (result.deletedCount === 0) {
      return res.status(404).json({ error: "Job does not exist" });
    }
  } catch (error) {
    console.error("Error deleting Job:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { createJobPosts, getRecommendedJobs, deleteJobPost };
