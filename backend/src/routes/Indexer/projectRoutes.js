const express = require("express");

const authenticate = require("../../middleware/authMiddleware");
const allowRoles = require("../../middleware/roleMiddleware");

const {
  getMyProjects,
} = require("../../controllers/Indexer/projectController");

const router = express.Router();

router.get(
  "/my",
  authenticate,
  allowRoles(
    "indexer",
    "teamLead",
    "coreTeam",
    "administrator"
  ),
  getMyProjects
);

module.exports = router;