const express = require("express");
const router = express.Router();
const {
  handleRecruiterSignUp,
  handleLogin,
  handleUserSignUp,
  sendOtp,
} = require("../controllers/Auth");

// Create Account for Normal user
// EndPoint http://localhost:9000/api/auth/user/signup
router.post("/user/signup", handleUserSignUp);

router.post("/user/sent-otp",sendOtp)

// Create Account for Recruiter
// EndPoint http://localhost:9000/api/auth/recruiter/signup
router.post("/recruiter/signup", handleRecruiterSignUp);

// Login for both
// EndPoint http://localhost:9000/api/auth/login
router.post("/login", handleLogin);

module.exports = router;
