const express = require("express");

const authenticate = require("../middleware/authMiddleware");
const allowRoles = require("../middleware/roleMiddleware");

const {
  getTeamLeadDashboard,
  getTeamProductivity,
  getCompletionSplit,
  getDashboardTeamMembers,
} = require("../TeamleadControllers/dashboardController");

const router = express.Router();

router.get(
  "/dashboard/productivity",
  authenticate,
  allowRoles("teamLead"),
  getTeamProductivity
);

// Gets completed vs pending production split
router.get(
  "/dashboard/completion-split",
  authenticate,
  allowRoles("teamLead"),
  getCompletionSplit
);

router.get(
  "/dashboard/team-members",
  authenticate,
  allowRoles("teamLead"),
  getDashboardTeamMembers
);
module.exports = router;