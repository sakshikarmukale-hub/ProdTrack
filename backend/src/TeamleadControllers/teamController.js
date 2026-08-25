const db = require("../config/db");

// Gets all team members reporting to the logged-in Team Lead
const getMyTeam = async (req, res) => {
  try {
    const teamLeadId = req.user.id;

    const [members] = await db.query(
      `
      SELECT
        u.id,
        u.employee_id,
        u.name,
        u.email,

        GROUP_CONCAT(
          DISTINCT p.project_name
          ORDER BY p.project_name
          SEPARATOR ', '
        ) AS projects,

        COALESCE(
          SUM(
            CASE
              WHEN de.production_date = CURDATE()
              THEN de.documents_completed
              ELSE 0
            END
          ),
          0
        ) AS today_completed,

        CASE
          WHEN COUNT(
            DISTINCT CASE
              WHEN g.status = 'active'
              AND ga.id IS NULL
              THEN g.id
            END
          ) > 0
          THEN 'PENDING'
          ELSE 'DONE'
        END AS guide_acknowledgement,

        COALESCE(
          MAX(
            CASE
              WHEN a.attendance_date = CURDATE()
              THEN a.status
            END
          ),
          'NOT MARKED'
        ) AS attendance_status

      FROM team_members tm

      JOIN users u
        ON u.id = tm.member_id

      LEFT JOIN user_project_assignments upa
        ON upa.user_id = u.id

      LEFT JOIN projects p
        ON p.id = upa.project_id

      LEFT JOIN daily_entries de
        ON de.user_id = u.id

      LEFT JOIN guides g
        ON g.project_id = upa.project_id
        AND g.status = 'active'

      LEFT JOIN guide_acknowledgements ga
        ON ga.guide_id = g.id
        AND ga.user_id = u.id

      LEFT JOIN attendance a
        ON a.user_id = u.id

      WHERE tm.team_lead_id = ?

      GROUP BY
        u.id,
        u.employee_id,
        u.name,
        u.email

      ORDER BY u.name ASC
      `,
      [teamLeadId]
    );

    return res.status(200).json({
      success: true,
      count: members.length,
      members,
    });
  } catch (error) {
    console.error("Get My Team Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to load team members",
      error: error.message,
    });
  }
};

module.exports = {
  getMyTeam,
};