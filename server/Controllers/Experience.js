const Experience = require("../Models/Experience");
const UserModel = require("../Models/User");

//Function for adding new experiences
const addNewExperience = async (req, res) => {
  const { companyName, position, duration, description, userId } = req.body;
  console.log("req.body", req.body);
  if (!companyName || !position || !duration || !userId) {
    return res.status(400).json({ err: "Invalid request body" });
  }

  const ExperienceObj = {
    companyName,
    position,
    duration,
    description,
    userId,
  };

  const NewExperience = await Experience.create(ExperienceObj);

  const User = await UserModel.findOneAndUpdate(
    { _id: userId },
    {
      $push: { experiences: NewExperience._id },
    }
  );

  await User.save();
  return res.status(201).json({ success: "Experience added succesfully" });
};

//Function for updating experiences

const updateExperience = async (req, res) => {
  const { companyName, position, duration, description, experienceId } =
    req.body;
  const updatedExperience = await Experience.findOneAndUpdate({
    _id: experienceId,
  });
  if (!updatedExperience) {
    res.status(500).json({ err: "Unexpexted error occurred please try again" });
  }
  res.status(200).json(updatedExperience);
};

//Function for fetching experiences of user

const getExperience = async (req, res) => {
  const userId = req.params;

  const Experiences = await Experience.find({ userId: userId });

  if (!Experiences) {
    res.status(203).json({ msg: "No Experience Added yet" });
  }
  res.status(200).json(Experiences);
};

//Function for deleting experience
const deleteExperience = async (req, res) => {
  const { userId, experienceId } = req.body;
  console.log(`UserId : ${userId}, ExperienceId : ${experienceId}`);
  try {
    const result = await Experience.deleteOne({
      userId: userId,
      _id: experienceId,
    });
    const deleteFromUser = await UserModel.findOneAndUpdate(
      { _id: userId },
      {
        $pull: { experiences: experienceId },
      }
    );
    if (!deleteFromUser || !result) {
      res
        .status(500)
        .json({ err: "Unexpexted error occurred please try again" });
    }
    res.status(200).json({ success: "Deleted Successfully" });
  } catch (error) {
    console.log("Error : ", error.message);
  }
};

module.exports = {
  addNewExperience,
  getExperience,
  updateExperience,
  deleteExperience,
};
