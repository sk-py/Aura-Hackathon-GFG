const mongoose = require("mongoose");
const ProjectSchema = mongoose.Schema({
  projectName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  link: {
    type: String,
  },
});

const ProjectModel = mongoose.model("Projects", ProjectSchema);
module.exports = ProjectModel;
