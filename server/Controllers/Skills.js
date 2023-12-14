const skillModel = require("../Models/Skills");
const UserModel = require("../Models/User");

const addNewSkills = async (req, res) => {
  const { skill, userId } = req.body;

  const newSkill = await skillModel.create({
    skillName,
    userId,
  });

  if (!newSkill) {
    res.status(500).json({ err: "Unexpexted error occurred please try again" });
  }
  const User = await UserModel.findOne({ userId: UserModel._id });

  await User.skills.push(newSkill._id);
  await User.save();
  res.status(201).json({ success: "Project added succesfully" });

  res.status(200).json(newSkill.skillName);
};

const displaySkills = async (req, res) => {
  const userId = req.params.userId;

  const userSkills = await skillModel.find({ userId: userId });
  res.status(200).json(userSkills.skillName);
};

// const deleteSkill = async (req, res) => {
//     const skillName = skillModel.deleteOne({})
// }

module.exports = { addNewSkills, displaySkills };
