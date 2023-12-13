const mongoose = require("mongoose");
const job = {
  companyName: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  package: [
    {
      type: String, //Array of two  - minimum
      required: true,
    },
  ],
  type: {
    workLocation: {
      type: String,
      enum: ["Remote", "Onsite", "Hybrid"],
      required: true,
    },
    jobType: {
      type: String,
      enum: ["Full-Time", "Part-Time", "Freelance", "Internship"],
      required: true,
    },
    level: {
      type: String,
      enum: ["Experienced", "Fresher"],
    },
  },
  requiredSkills: [
    {
      type: String,
    },
  ],
  postedBy: {
    type: String,
  },
  status: {
    type: String,
    enum: ["Open", "Closed"],
  },
};

const JobSchema = mongoose.Schema(job);
const Jobs = mongoose.model("Jobs", JobSchema);

module.exports = Jobs;
