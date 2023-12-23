const mongoose = require("mongoose");
const user = {
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  skills: [
    {
      type: String,
    },
  ],
  projects: [
    {
      type: String,
    },
  ],
  experiences: [
    {
      type: String,
    },
  ],
  postedFreelanceJobs: [
    {
      type: String, /// Ids of freelance jobs created by this user
    },
  ],
  summary: {
    type: String,
  },
};
const UserSchema = mongoose.Schema(user);

const UserModel = mongoose.model("user", UserSchema);
module.exports = UserModel;
