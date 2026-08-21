const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const db = require("./src/config/db");
const authRoutes = require("./src/routes/authRoutes");

const app = express();
const dashboardRoutes = require("./src/routes/Indexer/dashboardRoutes");
// Imports Project routes 
const projectRoutes = require("./src/routes/Indexer/projectRoutes");
// Imports dailyEntry routes 
const dailyEntryRoutes = require("./src/routes/Indexer/dailyEntryRoutes");
// Imports guideRoutes routes
const guideRoutes = require("./src/routes/Indexer/guideRoutes");
// Imports correction request routes
const correctionRoutes = require("./src/routes/Indexer/correctionRoutes");
// Imports attendance routes
const attendanceRoutes = require("./src/routes/Indexer/attendanceRoutes");
// Imports notification routes
const notificationRoutes = require("./src/routes/Indexer/notificationRoutes");
// Imports profile routes
const profileRoutes = require("./src/routes/Indexer/profileRoutes");
// Imports report routes
const reportRoutes = require("./src/routes/reportRoutes");

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


// ============================================
// SERVER
// ============================================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `ProdTrack Backend API running on http://localhost:${PORT}`
  );
});

