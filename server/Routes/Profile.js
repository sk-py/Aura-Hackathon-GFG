const express = require("express");
const getUserFromToken = require("../Controllers/Validator");
const { getUserData, updateSummary } = require("../Controllers/Profile");
const router = express.Router();

router.get("/displayprofile", getUserFromToken, getUserData);

router.put("/summary/update", getUserFromToken, updateSummary);

module.exports = router;
