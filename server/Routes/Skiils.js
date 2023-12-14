const express = require("express");
const router = express.Router();
const { addNewSkills, displaySkills } = require("../Controllers/Skills");

//Router to add New Experience
router.post("/add", addNewSkills);

//Router to update existing Experience Data
// router.put("/update",)

router.get("/display", displaySkills);

module.exports = router;
