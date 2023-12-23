const experienceModel = require("../Models/Experience");
const ProjectModel = require("../Models/Projects");
const UserModel = require("../Models/User");

const getUserData = async (req, res) => {
  const userId = req.body;
  const user = await UserModel.findOne({ _id: userId.userId });
  const projects = await ProjectModel.find({ userId: userId.userId });
  const experience = await experienceModel.find({ userId: userId.userId });
  const data = {
    userDetail: {
      userName: user.firstName + " " + user.lastName,
      userEmail: user.email,
      summary: user.summary,
    },
    skills: user.skills,
    projects,
    experience,
  };
  res.json(data);
};

const updateSummary = async (req, res) => {
  const userId = req.body;
  const summary = req.body;
  console.log(userId, summary);
  try {
    const updatedUser = await UserModel.findOneAndUpdate(
      { _id: userId.userId },
      { summary: summary.summary },
      { new: true }
    );
    if (!updatedUser) {
      res.status(500).json({
        err: "Internal Server Error, please try again",
      });
    }
    res.status(200).json(updatedUser.summary);
  } catch (error) {
    console.log("Error", error.message);
  }
};

module.exports = { getUserData, updateSummary };
