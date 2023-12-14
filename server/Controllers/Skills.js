const skillModel = require("../Models/Skills");
const UserModel = require("../Models/User");

const addNewSkills = async (req, res) => {
  // console.log(req.body);
  const { skills, userId } = req.body;

  if (!skills || !userId) {
    res.status(400).json({ err: "Field Can;t be empty" });
  }
  const newSkill = await skillModel.create({
    skillsName: skills,
    userId,
  });

  if (!newSkill) {
    res.status(500).json({ err: "Unexpexted error occurred please try again" });
  }
  const User = await UserModel.findOne({ _id: userId });
  // console.log(newSkill._id);
  const k = newSkill._id;
  const a = await User.skills.push(k);
  // console.log(a);
  await User.save();
  res.status(201).json({ success: "Project added succesfully" });

  // res.status(200).json(newSkill.skillName);
};

const displaySkills = async (req, res) => {
  const {userId} = req.body;
  const userSkills = await skillModel.find({ userId: userId });
  res.status(200).json(userSkills);
  // res.json({msg:"Error"})
};

// const deleteSkill = async (req, res) => {
//     const skillName = skillModel.deleteOne({})
// }

module.exports = { addNewSkills, displaySkills };
