const skillModel = require("../Models/Skills");
const UserModel = require("../Models/User");

const addNewSkills = async (req, res) => {
  // console.log(req.body);
  const { skills, userId } = req.body;

  if (!skills || !userId) {
    res.status(400).json({ err: "Field Can;t be empty" });
  }
  console.log(skills);

  const alreadyExists = await UserModel.findOne({
    _id: userId,
    skills: { $in: skills },
  });

  if (alreadyExists) {
    res.status(409).json("Entered Skill Already Exists");
  } else {
    const newSkill = await skillModel.create({
      skillsName: skills,
      userId,
    });
    if (!newSkill) {
      res
        .status(500)
        .json({ err: "Unexpexted error occurred please try again" });
    }
    const User = await UserModel.findOne({ _id: userId });
    // console.log(newSkill._id);
    const k = newSkill.skillsName;
    const a = await User.skills.push(k);
    // console.log(a);
    await User.save();
    res.status(201).json({ skills: User.save });
  }

  // res.status(200).json(newSkill.skillName);
};

const displaySkills = async (req, res) => {
  const { userId } = req.body;
  const userSkills = await skillModel.find({ userId: userId });
  res.status(200).json(userSkills);
  // res.json({msg:"Error"})
};

const deleteSkill = async (req, res) => {
  try {
    const { userId, skill } = req.body;

    const updatedUser = await UserModel.findOneAndUpdate(
      { _id: userId },
      {
        $pull: { skills: skill },
      },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({
      message: "Skill deleted successfully",
      user: updatedUser.skills,
    });
  } catch (error) {
    console.error("Error while deleting skill:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { addNewSkills, displaySkills, deleteSkill };
