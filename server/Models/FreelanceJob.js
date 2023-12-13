const mongoose = require("mongoose");

const freelanceJob = {
  projectName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  payment: {
    type: String,
    required: true,
  },
  responsibilities: {
    type: String,
    required: false,
  },
  requiredSkills: [
    {
      type: String,
    },
  ],
  postedBy: {
    type: String,
    require: true,
  },
};
