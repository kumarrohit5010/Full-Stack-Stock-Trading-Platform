const express = require("express");
const {
  currentUser,
  login,
  logout,
  sendSignupOtp,
  signup,
  verifySignupOtp,
} = require("../Controllers/AuthController");

const router = express.Router();

// ================= AUTH =================

// Get current logged-in user
router.post("/", currentUser);
router.get("/", currentUser);
router.get("/me", currentUser);

// Login user
router.post("/login", login);

// Logout user
router.post("/logout", logout);

// ================= SIGNUP + OTP FLOW =================

// Step 1: send OTP
router.post("/signup/send-otp", sendSignupOtp);

// Step 2: verify OTP
router.post("/signup/verify-otp", verifySignupOtp);

// Step 3: create account
router.post("/signup", signup);

module.exports = router;