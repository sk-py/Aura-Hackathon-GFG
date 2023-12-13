const mongoose = require("mongoose");

const recruiterSchema = mongoose.Schema({
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
  companyName:{
    type:String,
    require:true
  }
});

const Recruiter = mongoose.model("recruiter", recruiterSchema);
module.exports = Recruiter;