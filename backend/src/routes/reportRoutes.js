const express = require("express");

const authenticate = require("../middleware/authMiddleware");
const allowRoles = require("../middleware/roleMiddleware");

const {
  getMyReportSummary,
  getMyDailyProduction,
} = require("../controllers/reportController");

const router = express.Router();

// Gets production summary for the logged-in Indexer
router.get(
  "/my-summary",
  authenticate,
  allowRoles("indexer"),
  getMyReportSummary
);

// Gets daily production report for the logged-in Indexer
router.get(
  "/my-daily-production",
  authenticate,
  allowRoles("indexer"),
  getMyDailyProduction
);

module.exports = router;