const express = require("express");

const authenticate = require("../middleware/authMiddleware");
const allowRoles = require("../middleware/roleMiddleware");

const {
  getMyTeam,
} = require("../TeamleadControllers/teamController");

const router = express.Router();

// Gets team members for the logged-in Team Lead
router.get(
  "/my-team",
  authenticate,
  allowRoles("teamLead"),
  getMyTeam
);

module.exports = router;