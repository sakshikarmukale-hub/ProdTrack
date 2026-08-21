const db = require("../../config/db");

// Gets profile details for the logged-in user
const getMyProfile = async (req, res) => {
  try {
    const userId = req.user.id;

    const [users] = await db.query(
      `
      SELECT
        id,
        employee_id,
        name,
        email,
        role,
        department,
        status
      FROM users
      WHERE id = ?
      LIMIT 1
      `,
      [userId]
    );

    if (users.length === 0) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const [projects] = await db.query(
      `
      SELECT
        p.id,
        p.project_code,
        p.project_name,
        p.client_name,
        p.reporting_category,
        p.status
      FROM user_project_assignments upa
      JOIN projects p
        ON p.id = upa.project_id
      WHERE upa.user_id = ?
      ORDER BY p.project_name ASC
      `,
      [userId]
    );

    return res.status(200).json({
      success: true,
      profile: users[0],
      assignedProjects: projects,
    });
  } catch (error) {
    console.error("Get Profile Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to load profile",
      error: error.message,
    });
  }
};

module.exports = {
  getMyProfile,
};