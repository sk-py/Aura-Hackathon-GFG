const skillModel = require("../Models/Skills");
const UserModel = require("../Models/User");

const addNewSkills = async (req, res) => {
  // console.log(req.body);
  const { skills, userId } = req.body;
  console.log("thisi i s skill", skills);

  const newSkill = await skillModel.create({
    skillsName: skills,
    userId,
  });

  if (!newSkill) {
    res.status(500).json({ err: "Unexpexted error occurred please try again" });
  }
  const User = await UserModel.findOne({ _id: userId });
  console.log(newSkill._id);
  const k = newSkill._id;
  const a = await User.skills.push(k);
  console.log(a);
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
