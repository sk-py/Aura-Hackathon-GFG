const express = require("express");
const router = express.Router();
const {
  addNewExperience,
  getExperience,
  updateExperience,
  deleteExperience,
} = require("../Controllers/Experience");
const { route } = require("./Auth");
const getUserFromToken = require("../controllers/Validator");

//Router to add New Experience
router.post("/add", getUserFromToken, addNewExperience);

//Router to update existing Experience Data
router.put("/update", updateExperience);

//Router to display user's Experience if added
router.get("/getExperience/:userId", getExperience);

//Route to delete user's Experience
router.delete("/delete", deleteExperience);

module.exports = router;
