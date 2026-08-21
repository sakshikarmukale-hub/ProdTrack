const db = require("../../config/db");

// ======================================================
// PURPOSE:
// Get the latest active guide assigned to the logged-in
// Indexer and also check whether that Indexer has already
// acknowledged that guide.
// ======================================================

const getLatestGuide = async (req, res) => {
  try {
    // req.user.id comes from JWT authentication middleware.
    // This is the currently logged-in user's database ID.
    const userId = req.user.id;

    // --------------------------------------------------
    // Get latest active guide for a project assigned
    // to this user.
    //
    // LEFT JOIN guide_acknowledgements allows us to know
    // whether the user has acknowledged this guide.
    // --------------------------------------------------

    const [guides] = await db.query(
      `
      SELECT
        g.id,
        g.project_id,
        g.title,
        g.version,
        g.description,
        g.updated_date,
        g.effective_date,
        g.file_url,
        g.status,

        p.project_name,

        CASE
          WHEN ga.id IS NULL THEN FALSE
          ELSE TRUE
        END AS acknowledged

      FROM guides g

      -- Get project information for the guide
      JOIN projects p
        ON p.id = g.project_id

      -- Check acknowledgement for the logged-in user
      LEFT JOIN guide_acknowledgements ga
        ON ga.guide_id = g.id
        AND ga.user_id = ?

      -- Make sure this guide belongs to a project
      -- assigned to this user
      JOIN user_project_assignments upa
        ON upa.project_id = g.project_id
        AND upa.user_id = ?

      -- Only return currently active guides
      WHERE g.status = 'active'

      -- Latest created guide first
      ORDER BY g.created_at DESC

      -- We only need the newest one
      LIMIT 1
      `,
      [userId, userId]
    );

    // --------------------------------------------------
    // No guide found for this user
    // --------------------------------------------------

    if (guides.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No active guide found",
      });
    }

    // --------------------------------------------------
    // Return latest guide and acknowledgement status
    // --------------------------------------------------

    return res.status(200).json({
      success: true,
      guide: guides[0],
    });
  } catch (error) {
    console.error("Get Guide Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to load guide",
      error: error.message,
    });
  }
};

// ======================================================
// PURPOSE:
// Save acknowledgement when the logged-in Indexer clicks
// "Acknowledge & continue" in the frontend popup.
// ======================================================

const acknowledgeGuide = async (req, res) => {
  try {
    // Logged-in user's ID from JWT
    const userId = req.user.id;

    // Guide ID will come from URL.
    //
    // Example:
    // POST /api/guides/1/acknowledge
    //
    // Here guideId will be 1.
    const guideId = req.params.id;

    // --------------------------------------------------
    // SECURITY CHECK:
    //
    // Make sure:
    // 1. Guide exists.
    // 2. Guide is active.
    // 3. Guide belongs to a project assigned to this user.
    // --------------------------------------------------

    const [guides] = await db.query(
      `
      SELECT
        g.id

      FROM guides g

      JOIN user_project_assignments upa
        ON upa.project_id = g.project_id

      WHERE g.id = ?
        AND upa.user_id = ?
        AND g.status = 'active'

      LIMIT 1
      `,
      [guideId, userId]
    );

    // User is trying to acknowledge a guide
    // that is not assigned to them.
    if (guides.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Guide not found or not assigned to you",
      });
    }

    // --------------------------------------------------
    // Insert acknowledgement into MySQL.
    //
    // UNIQUE KEY on:
    // guide_id + user_id
    //
    // prevents duplicate acknowledgement rows.
    // --------------------------------------------------

    await db.query(
      `
      INSERT INTO guide_acknowledgements
      (
        guide_id,
        user_id
      )
      VALUES (?, ?)

      ON DUPLICATE KEY UPDATE
        acknowledged_at = acknowledged_at
      `,
      [guideId, userId]
    );

    // --------------------------------------------------
    // Success response
    // --------------------------------------------------

    return res.status(200).json({
      success: true,
      message: "Guide acknowledged successfully",
    });
  } catch (error) {
    console.error("Acknowledge Guide Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to acknowledge guide",
      error: error.message,
    });
  }
};

// ======================================================
// EXPORT FUNCTIONS
//
// These functions will be used inside guideRoutes.js
// ======================================================

module.exports = {
  getLatestGuide,
  acknowledgeGuide,
};