const experienceModel = require("../Models/Experience");
const FreelanceJobs = require("../Models/FreelanceJob");
const UserModel = require("../Models/User");
// const FreelanceFreelanceJobs = require("../Models/FreelanceJob");

const addFreelanceJob = async (req, res) => {
  const {
    projectName,
    payment,
    duration,
    description,
    requiredSkills,
    userId,
    userName,
  } = req.body;

  // if (
  //   !projectName ||
  //   !payment ||
  //   !duration ||
  //   !description ||
  //   !requiredSkills
  // ) {
  //   res.status(400).json({ err: "Invalid request body" });
  // }
  try {
    const newFreelanceJob = await FreelanceJobs.create({
      projectName,
      payment,
      duration,
      description,
      requiredSkills,
      status: "Active",
      postedBy: [userId, userName],
    });

    const User = await UserModel.findOneAndUpdate(
      { _id: userId },
      { $push: { postedFreelanceJobs: newFreelanceJob._id } }
    );
    console.log("User", User);
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

//*Route to get all freelance posts created
const getAllFreelancePosts = async (req, res) => {
  const contentLoaded = req.params.contentLoaded;
  try {
    const data = await FreelanceJobs.find().skip(contentLoaded).limit(10);
    if (!data) {
      res.status(204).json("No data available");
    }
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ err: "Internal Server Error, please try again" });
  }
};

//*Route to get posted freelance of a specific user
const getSpecificData = async (req, res) => {
  const userId = req.body;
  try {
    const data = await FreelanceJobs.find({ postedBy: { $in: userId } });
    if (!data) {
      res.status(204).json("You don't have any Freelance post posted");
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ err: "Internal Server Error, please try again" });
  }
};

//*Route to fetch freelance details
const getDetails = async (req, res) => {
  const Id = req.params.Id;
  try {
    const data = await FreelanceJobs.findOne({ _id: Id });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ err: "Internal Server Error, please try again" });
  }
};
//*Route to get recommended freelance jobs data
const getRecommendedData = async (req, res) => {
  const userID = req.body.userId;
  try {
    const user = await UserModel.findOne({ _id: userID });
    const userSkills = user.skills;
    if (!userSkills) {
      res.status(204).json({ msg: "Please add skills to get recommendations" });
    }
    const matchedData = await FreelanceJobs.find({
      requiredSkills: { $in: userSkills },
    });
    res.json(matchedData);
    // console.log("matchedData", matchedData);
  } catch (error) {}
};

module.exports = {
  addFreelanceJob,
  getAllFreelancePosts,
  getSpecificData,
  getDetails,
  getRecommendedData,
};
