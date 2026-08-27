// Imports Express so Core Team user-management routes can be created.
const express = require("express");

// Imports JWT authentication middleware to verify the logged-in user.
const authenticate = require("../middleware/authMiddleware");

// Imports role middleware to restrict management APIs to Core Team.
const allowRoles = require("../middleware/roleMiddleware");

// Imports all Core Team user-management controller functions.
const {
  getAllUsers,
  getUserTeamLeads,
  getUserProjects,
  createUser,
  updateUser,
} = require("../CoreteamControllers/userManagementController");

// Creates an Express router for Core Team Users APIs.
const router = express.Router();


// Gets all users displayed on the Core Team Users screen.
router.get(
  "/users",
  authenticate,
  allowRoles("coreTeam"),
  getAllUsers
);


// Gets active Team Leads for the User Details dropdown.
router.get(
  "/users/team-leads",
  authenticate,
  allowRoles("coreTeam"),
  getUserTeamLeads
);


// Gets active projects for the Assigned Projects dropdown.
router.get(
  "/users/projects",
  authenticate,
  allowRoles("coreTeam"),
  getUserProjects
);


// Creates a new user from the Add User popup.
router.post(
  "/users",
  authenticate,
  allowRoles("coreTeam"),
  createUser
);


// Updates an existing employee from the Edit User popup.
router.patch(
  "/users/:id",
  authenticate,
  allowRoles("coreTeam"),
  updateUser
);


// Exports the Core Team Users router so server.js can use it.
module.exports = router;