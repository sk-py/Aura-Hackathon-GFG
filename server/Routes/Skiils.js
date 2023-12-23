const express = require("express");
const router = express.Router();
const {
  addNewSkills,
  displaySkills,
  deleteSkill,
} = require("../Controllers/Skills");
const getUserFromToken = require("../Controllers/Validator");

//Router to add New Experience
router.post("/add", addNewSkills);

//Router to update existing Experience Data
// router.put("/update",)

router.get("/display", displaySkills);

router.delete("/delete", deleteSkill);

module.exports = router;
