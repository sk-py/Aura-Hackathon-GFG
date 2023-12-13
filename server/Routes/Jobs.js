const express = require("express");
const router = express.Router();
const { createJobPosts } = require("../Controllers/Jobs");

router.post("/add", createJobPosts);

module.exports = router;
