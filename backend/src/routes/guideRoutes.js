const express = require("express");

// ======================================================
// PURPOSE:
// authenticate checks the JWT token.
//
// It makes sure the request is coming from a logged-in
// user.
// ======================================================

const authenticate = require("../middleware/authMiddleware");

// ======================================================
// PURPOSE:
// allowRoles controls which role can access an API.
//
// For these guide acknowledgement APIs we currently allow
// Indexer only because this specific popup belongs to
// Indexer.
// ======================================================

const allowRoles = require("../middleware/roleMiddleware");

// ======================================================
// Import controller functions
// ======================================================

const {
  getLatestGuide,
  acknowledgeGuide,
} = require("../controllers/guideController");

const router = express.Router();

// ======================================================
// GET LATEST GUIDE
//
// URL:
// GET /api/guides/latest
//
// PURPOSE:
// Frontend calls this after Indexer login.
//
// It returns:
// - latest guide information
// - acknowledged = true / false
//
// Example:
//
// {
//   "success": true,
//   "guide": {
//      "id": 1,
//      "version": "2.3",
//      "acknowledged": 0
//   }
// }
//
// acknowledged = 0
// → show popup
//
// acknowledged = 1
// → don't show popup
// ======================================================

router.get(
  "/latest",

  // User must be logged in
  authenticate,

  // Only Indexer can access this particular endpoint
  allowRoles("indexer"),

  // Run controller
  getLatestGuide
);

// ======================================================
// ACKNOWLEDGE GUIDE
//
// URL:
// POST /api/guides/:id/acknowledge
//
// Example:
// POST /api/guides/1/acknowledge
//
// PURPOSE:
// Called when Indexer clicks:
//
// "Acknowledge & continue"
//
// It saves acknowledgement into:
// guide_acknowledgements
// ======================================================

router.post(
  "/:id/acknowledge",

  // JWT authentication
  authenticate,

  // Indexer only
  allowRoles("indexer"),

  // Save acknowledgement
  acknowledgeGuide
);

// ======================================================
// Export router so server.js can use it
// ======================================================

module.exports = router;