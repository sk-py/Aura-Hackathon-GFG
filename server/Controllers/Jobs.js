const Jobs = require("../Models/Jobs");
const UserModel = require("../Models/User");

//Function for creating Job Posts
const createJobPosts = async (req, res) => {
  const {
    companyName,
    role,
    description,
    package,
    type,
    requiredSkills,
    postedBy,
    status,
  } = req.body;

  if (
    !companyName ||
    !role ||
    !description ||
    !package ||
    !type ||
    !requiredSkills ||
    !postedBy ||
    !status
  ) {
    res.status(400).json({ err: "Invalid request body" });
  }
  try {
    const currentDate = new Date();
    const newJob = await Jobs.create({
      companyName,
      role,
      description,
      package,
      type,
      requiredSkills,
      postedBy,
      status,
      datePosted: currentDate.toJSON(),
    });

    !newJob
      ? res.status(400).json({
          err: "There was an error uploading the job post please try again",
        })
      : res.status(201).json({
          msg: "Job posted successfully",
        });
  } catch (error) {
    res.status(500).json({
      err: "Internal Server Error, please try again",
    });
    // console.log("Error :", error.message);
  }
};

//Function for sending recommended jobs on the basis of skills of users
const getRecommendedJobs = async (req, res) => {
  try {
    const id = req.body.userId;
    console.log("id", id);
    const user = await UserModel.findOne({ _id: id });
    if (!user) {
      res.status(404).json("User not found");
    }
    const userSkills = user.skills;
    if (userSkills.length === 0) {
      res.json({ err: "Add skills to get job recommendations" });
    }
    const matchedJobs = await Jobs.find({
      requiredSkills: { $in: userSkills },
    }).limit(8);
    res.json(matchedJobs);
  } catch (error) {
    console.log("Error", error.message);
  }
};

//Function for deleteing the job Post
const deleteJobPost = async (req, res) => {
  try {
    const jobId = req.body;
    const result = await Jobs.deleteOne({ _id: jobId });
    if (result.deletedCount === 0) {
      return res.status(404).json({ error: "Job does not exist" });
    }
  } catch (error) {
    console.error("Error deleting Job:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//Function to get Jobs as per the content Loaded on fron-end to implement infinite scroll
const limit = 10;
const getAllJobs = async (req, res) => {
  const contentLoaded = req.params.rows; ///Initially it will be zero, after the first request it will become 12 and multiply so on each request (will be from the client)
  try {
    const allJobs = await Jobs.find()
      .skip(contentLoaded)
      .limit(limit); /*.skip(contentLoaded).limit(limit);*/
    if (!allJobs) {
      res.status(204).json("No jobs available till now");
    }
    res.status(200).json(allJobs);
  } catch (error) {
    res.status(500).json("An error occurred, please try again");
    console.log("Error :", error.message);
  }
};

//Function to get data of specefic job using JobId
const getSpeceficJob = async (req, res) => {
  const Id = req.params.Id;

  try {
    const JobData = await Jobs.findOne({ _id: Id });
    res.json(JobData);
  } catch (error) {
    res.status(500).json("An error occurred, please try again");
    console.log("Error :", error.message);
  }
};

//Function to apply filter on response data
const filterFunctionality = async (req, res) => {
  try {
    const { workLocation, jobType, level } = req.body;
    const filter = {};
    if (workLocation && workLocation.length > 0) {
      filter["type.workLocation"] = { $in: workLocation };
    }

    if (jobType && jobType.length > 0) {
      filter["type.jobType"] = { $in: jobType };
    }

    if (level && level.length > 0) {
      filter["type.level"] = { $in: level };
    }
    console.log("filter", filter);
    const filteredData = await Jobs.find(filter);
    if (!filteredData) {
      res.send(204).json("No jobs matched with the specified filter");
    }
    res.status(200).json(filteredData);
  } catch (err) {
    res.status(500).json("An error occurred, please try again");
    console.log("err", err.message);
  }
};

module.exports = {
  createJobPosts,
  getRecommendedJobs,
  deleteJobPost,
  getAllJobs,
  getSpeceficJob,
  filterFunctionality,
};
