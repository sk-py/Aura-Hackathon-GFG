const mongoose = require("mongoose");

const freelanceJob = {
  projectName: {
    type: String,
    required: true,
  },
  payment: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  requiredSkills: [
    {
      type: String,
    },
  ],
  status: {
    type: String,
    enum: ["Active", "Closed"],
  },
  postedBy: [
    {
      type: String,
      require: true,
    },
  ],
};

const FreelanceJobSchema = mongoose.Schema(freelanceJob);
const FreelanceJobs = mongoose.model("FreelanceJobs", FreelanceJobSchema);

module.exports = FreelanceJobs;
