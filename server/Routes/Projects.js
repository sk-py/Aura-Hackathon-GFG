const express = require("express");
const router = express.Router();
const { addNewProjects, getProjects } = require("../Controllers/Project");


router.post("/add", addNewProjects);
router.get("/get-all-projects/:userId",getProjects);


module.exports = router;
