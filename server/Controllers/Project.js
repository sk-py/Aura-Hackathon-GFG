const Projects = require("../Models/Projects");
const UserModel = require("../Models/User");

const addNewProjects = async (req, res) => {
  const { projectName, description, link, userId } = req.body;
  if (!projectName || !projectName || !link || !userId) {
    res.status(400).json({ err: "Invalid request body" });
  }

  const ProjectObj = {
    projectName,
    description,
    link,
    userId,
  };

  const NewProject = await Experience.create(ProjectObj);

  const User = await UserModel.findOne({ userId: UserModel._id });

  User.projects.push(NewProject._id);
  await User.save();
  res.status(201).json({ success: "Project added succesfully" });
};

module.exports = { addNewProjects };
