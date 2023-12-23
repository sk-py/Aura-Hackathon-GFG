const express = require("express");
const router = express.Router();
const {
  addNewProjects,
  getProjects,
  deleteProject,
} = require("../Controllers/Project");

router.post("/add", addNewProjects);
router.get("/get-all-projects/:userId", getProjects);

router.delete("/delete", deleteProject);
module.exports = router;
