const express = require("express");

const authenticate = require("../middleware/authMiddleware");
const allowRoles = require("../middleware/roleMiddleware");

const {
  getLatestGuide,
  acknowledgeGuide,
  getGuideHistory,
} = require("../commonControllers/guideController");

const router = express.Router();

// Gets the latest active guide for Indexer or Team Lead
router.get(
  "/latest",
  authenticate,
  allowRoles("indexer", "teamLead"),
  getLatestGuide
);

// Saves guide acknowledgement for Indexer or Team Lead
router.post(
  "/:id/acknowledge",
  authenticate,
  allowRoles("indexer", "teamLead"),
  acknowledgeGuide
);

// Gets guide version history for an allowed project
router.get(
  "/:projectId/history",
  authenticate,
  allowRoles("indexer", "teamLead"),
  getGuideHistory
);

module.exports = router;