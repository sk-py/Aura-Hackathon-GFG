const express = require("express");
const router = express.Router();
const { addNewProjects } = require("../Controllers/Project");
router.post("/add", addNewProjects);
module.exports = router;
