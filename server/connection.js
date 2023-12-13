const mongoose = require("mongoose");
require("dotenv").config();
const originalPassword = "Aura#123";
const encodedPassword = encodeURIComponent(originalPassword);
const url = `mongodb+srv://peers_admin:admin123@cluster0.kkvhsnv.mongodb.net/jboard?retryWrites=true&w=majority`;

const dbConnect = async () => {
  try {
    await mongoose.connect(url);
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error", error);
  }
};
module.exports = dbConnect;
