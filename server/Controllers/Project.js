const UserModel = require("../Models/User");
const ProjectModel = require("../Models/Projects");

const addNewProjects = async (req, res) => {
  const { projectName, description, link, userId } = req.body;
  console.log(req.body);
  if (!projectName || !description || !link || !userId) {
    res.status(400).json({ err: "Invalid request body" });
  }

  const ProjectObj = {
    projectName,
    description,
    link,
    userId,
  };

  const NewProject = await ProjectModel.create(ProjectObj);

  const User = await UserModel.findOne({ userId: UserModel._id });

  User.projects.push(NewProject._id);
  await User.save();
  res.status(201).json({ success: "Project added succesfully" });

  // axios.get(`http://localhost:9000/api/projects/get-all-projects/${userId}`);
 
};  



const getProjects = async (req, res) => {
  
  const userId=req.prams.userId;
  const projects = await UserModel.find({ userId:userId });

  res.status(200).json({ userId, token, projects: projects });
};


module.exports = { addNewProjects ,getProjects };