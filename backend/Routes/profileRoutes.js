const express = require("express");

const authenticate = require("../middleware/authMiddleware");

const {
  getMyProfile,
} = require("./Controller/profileController");

const router = express.Router();

// Gets the logged-in user's profile
router.get(
  "/me",
  authenticate,
  getMyProfile
);

module.exports = router;