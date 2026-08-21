const express = require("express");

const authenticate = require("../middleware/authMiddleware");
const allowRoles = require("../middleware/roleMiddleware");

const {
  createEntry,
  getMyEntries,
} = require("../controllers/dailyEntryController");

const router = express.Router();

router.get(
  "/my",
  authenticate,
  allowRoles("indexer"),
  getMyEntries
);

router.post(
  "/",
  authenticate,
  allowRoles("indexer"),
  createEntry
);

module.exports = router;