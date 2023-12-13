const Experience = require("../Models/Experience");
const UserModel = require("../Models/User");

const addNewExperience = async (req, res) => {
  const { companyName, position, duration, description, userId } = req.body;
  if (!companyName || !position || !duration || !userId) {
    res.status(400).json({ err: "Invalid request body" });
  }

  const ExperienceObj = {
    companyName,
    position,
    duration,
    description,
    userId,
  };

  const NewExperience = await Experience.create(ExperienceObj);

  const User = await UserModel.findOne({ userId: UserModel._id });

  User.experiences.push(NewExperience._id);
  await User.save();
  res.status(201).json({ success: "Experience added succesfully" });
};

const updateExperience = (req, res) => {
  const { companyName, position, duration, description, userId } = req.body;
};

module.exports = { addNewExperience };
