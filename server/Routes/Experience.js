const express = require("express");
const router = express.Router();
const { addNewExperience } = require("../Controllers/Experience");

//Router to add New Experience
router.post("/add", addNewExperience);

//Router to update existing Experience Data
// router.put("/update",)

module.exports = router;
