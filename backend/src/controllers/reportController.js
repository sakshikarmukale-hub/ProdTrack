const db = require("../config/db");

// Gets report summary for the logged-in user
const getMyReportSummary = async (req, res) => {
  try {
    const userId = req.user.id;

    const [summaryRows] = await db.query(
      `
      SELECT
        COALESCE(SUM(documents_received), 0) AS total_received,
        COALESCE(SUM(documents_completed), 0) AS total_completed,
        COALESCE(
          SUM(documents_received - documents_completed),
          0
        ) AS total_pending
      FROM daily_entries
      WHERE user_id = ?
      `,
      [userId]
    );

    const summary = summaryRows[0];

    const received = Number(summary.total_received);
    const completed = Number(summary.total_completed);

    const completionRate =
      received > 0
        ? Math.round((completed / received) * 100)
        : 0;

    return res.status(200).json({
      success: true,
      summary: {
        totalReceived: received,
        totalCompleted: completed,
        totalPending: Number(summary.total_pending),
        completionRate,
      },
    });
  } catch (error) {
    console.error("Report Summary Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to load report summary",
      error: error.message,
    });
  }
};

// Gets production grouped by date for the logged-in user
const getMyDailyProduction = async (req, res) => {
  try {
    const userId = req.user.id;

    const [rows] = await db.query(
      `
      SELECT
        production_date,
        SUM(documents_received) AS received,
        SUM(documents_completed) AS completed,
        SUM(
          documents_received - documents_completed
        ) AS pending
      FROM daily_entries
      WHERE user_id = ?
      GROUP BY production_date
      ORDER BY production_date ASC
      `,
      [userId]
    );

    return res.status(200).json({
      success: true,
      count: rows.length,
      production: rows,
    });
  } catch (error) {
    console.error("Daily Production Report Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to load daily production report",
      error: error.message,
    });
  }
};

module.exports = {
  getMyReportSummary,
  getMyDailyProduction,
};