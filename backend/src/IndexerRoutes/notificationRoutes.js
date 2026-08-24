const express = require("express");

const authenticate = require("../middleware/authMiddleware");
const allowRoles = require("../middleware/roleMiddleware");

const {
  getMyNotifications,
  markAsRead,
  markAllAsRead,
} = require("../IndexerControllers/notificationController");

const router = express.Router();

// Gets notifications for the logged-in user
router.get(
  "/my",
  authenticate,
  allowRoles("indexer"),
  getMyNotifications
);

// Marks all notifications as read
router.patch(
  "/read-all",
  authenticate,
  allowRoles("indexer"),
  markAllAsRead
);

// Marks one notification as read
router.patch(
  "/:id/read",
  authenticate,
  allowRoles("indexer"),
  markAsRead
);

module.exports = router;