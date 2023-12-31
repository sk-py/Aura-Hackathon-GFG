const mongoose = require("mongoose");
const experience = {
  companyName: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  userId: {
    type: String,
  },
};

const ExperienceSchema = mongoose.Schema(experience);
const experienceModel = mongoose.model("experiences", ExperienceSchema);
module.exports = experienceModel;
