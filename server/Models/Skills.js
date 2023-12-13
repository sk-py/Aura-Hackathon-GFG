const mongoose = require("mongoose");
const skill = {
  skillsName: {
    type: String,
    required: flase,
  },
};

const SkillSchema = mongoose.Schema(skill);
const skillModel = mongoose.model("skill", SkillSchema);

module.exports = skillModel;
