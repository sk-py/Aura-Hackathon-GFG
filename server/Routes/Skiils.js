const express = require("express");
const router = express.Router();
const { addNewSkills, displaySkills } = require("../Controllers/Skills");
const getUserFromToken = require("../controllers/Validator");

//Router to add New Experience
router.post("/add", addNewSkills);

//Router to update existing Experience Data
// router.put("/update",)

router.get("/display",getUserFromToken, displaySkills);

module.exports = router;
