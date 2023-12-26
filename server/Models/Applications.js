const mongoose = require("mongoose");
const ApplicationSchema = mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  jobId: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
  },
  projectName: {
    type: String,
  },
  postedBy: {
    type: String,
  },
  role: {
    type: String,
  },
  appliedDate: {
    type: String,
  },
  status: {
    type: String,
  },
  applicantName: {
    type: String,
  },
});
const AppliedJobs = mongoose.model("JobApplications", ApplicationSchema);
module.exports = AppliedJobs;
