const express = require("express");

const authenticate = require("../middleware/authMiddleware");
const allowRoles = require("../middleware/roleMiddleware");

const {
  createEntry,
  getMyEntries,
} = require("../commonControllers/dailyEntryController");

const router = express.Router();

router.get(
  "/my",
  authenticate,
  allowRoles("indexer","teamLead"),
  getMyEntries
);

router.post(
  "/",
  authenticate,
  allowRoles("indexer","teamLead"),
  createEntry
);

module.exports = router;