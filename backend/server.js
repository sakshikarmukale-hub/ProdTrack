const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const db = require("./src/config/db");
const authRoutes = require("./src/commonRoutes/authRoutes");

const app = express();
const dashboardRoutes = require("./src/IndexerRoutes/dashboardRoutes");
// Imports Project routes 
const projectRoutes = require("./src/commonRoutes/projectRoutes");
// Imports dailyEntry routes 
const dailyEntryRoutes = require("./src/commonRoutes/dailyEntryRoutes");
// Imports guideRoutes routes
const guideRoutes = require("./src/commonRoutes/guideRoutes");
// Imports correction request routes
const correctionRoutes = require("./src/IndexerRoutes/correctionRoutes");
// Imports attendance routes
const attendanceRoutes = require("./src/commonRoutes/attendanceRoutes");
// Imports notification routes
const notificationRoutes = require("./src/commonRoutes/notificationRoutes");
// Imports profile routes
const profileRoutes = require("./src/commonRoutes/profileRoutes");
// Imports report routes
const reportRoutes = require("./src/commonRoutes/reportRoutes");
// Imports Team Lead team routes
const teamRoutes = require("./src/TeamleadRoutes/teamRoutes");
//handle teamlead dashbaords 
const teamLeadDashboardRoutes = require("./src/TeamleadRoutes/dashboardRoutes");
//
const teamLeadApprovalRoutes = require("./src/TeamleadRoutes/approvalRoutes");
//Imports leave routes 
const leaveRoutes = require("./src/commonRoutes/leaveRoutes");
//password reset routes
const passwordRoutes = require("./src/commonRoutes/passwordRoutes");
// Imports the Team Lead leave approval routes.
const teamLeadLeaveRoutes = require("./src/TeamleadRoutes/leaveApprovalRoutes");


// ============================================
// MIDDLEWARE
// ============================================

app.use(cors());

app.use(express.json());

// ============================================
// BASIC TEST ROUTE
// ============================================

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "ProdTrack Backend API is running",
  });
});

// ============================================
// MYSQL TEST ROUTE
// ============================================

app.get("/api/test-db", async (req, res) => {
  try {
    const [rows] = await db.query(
      "SELECT 1 + 1 AS result"
    );

    res.json({
      success: true,
      message: "MySQL connected successfully",
      result: rows[0].result,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Database connection failed",
      error: error.message,
    });
  }
});

// ============================================
// API ROUTES
// ============================================
// Authentication
app.use("/api/auth", authRoutes);
// Projects
app.use("/api/projects", projectRoutes);
// Daily production entries
app.use("/api/daily-entries", dailyEntryRoutes);
// Guides and acknowledgement
app.use("/api/guides", guideRoutes);
// Handles correction request APIs
app.use("/api/corrections", correctionRoutes);
// Handles attendance APIs
app.use("/api/attendance", attendanceRoutes);
// Handles notification APIs
app.use("/api/notifications", notificationRoutes);
// Handles profile APIs
app.use("/api/profile", profileRoutes);
// Handles report APIs
app.use("/api/reports", reportRoutes);
// Handles dashboard APIs
app.use("/api/dashboard", dashboardRoutes);
// Handles Team Lead team APIs
app.use("/api/team-lead", teamRoutes);
// Handles Team Lead Dashboards APIs
app.use( "/api/team-lead",teamLeadDashboardRoutes);
// Handles team lead Approvals 
app.use("/api/team-lead", teamLeadApprovalRoutes);
// Handles leave request APIs
app.use("/api/leave-requests", leaveRoutes);
// Handles resetpassword APIs
app.use("/api/profile", passwordRoutes);
// Registers all Team Lead leave approval APIs under /api/team-lead.
app.use("/api/team-lead", teamLeadLeaveRoutes);


// ============================================
// SERVER
// ============================================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `ProdTrack Backend API running on http://localhost:${PORT}`
  );
});

