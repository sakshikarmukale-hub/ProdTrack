const db = require("../config/db");

const getTeamLeadDashboard = async (req, res) => {
  try {
    const teamLeadId = req.user.id;

    // 1. Total team members
    const [teamResult] = await db.query(
      `
      SELECT COUNT(*) AS teamSize
      FROM team_members
      WHERE team_lead_id = ?
      `,
      [teamLeadId]
    );

    // 2. Today's team production
    const [productionResult] = await db.query(
      `
      SELECT
        COALESCE(SUM(de.documents_received), 0) AS receivedToday,
        COALESCE(SUM(de.documents_completed), 0) AS completedToday
      FROM team_members tm
      LEFT JOIN daily_entries de
        ON de.user_id = tm.member_id
        AND de.production_date = CURDATE()
      WHERE tm.team_lead_id = ?
      `,
      [teamLeadId]
    );

    // 3. Pending correction approvals
    const [approvalResult] = await db.query(
      `
      SELECT COUNT(*) AS pendingApprovals
      FROM correction_requests cr
      JOIN team_members tm
        ON tm.member_id = cr.user_id
      WHERE tm.team_lead_id = ?
        AND cr.status = 'PENDING'
      `,
      [teamLeadId]
    );

    // 4. Today's attendance
    const [attendanceResult] = await db.query(
      `
      SELECT
        COUNT(DISTINCT CASE
          WHEN a.status = 'Present' THEN tm.member_id
        END) AS presentToday,

        COUNT(DISTINCT CASE
          WHEN a.status = 'Training' THEN tm.member_id
        END) AS trainingToday,

        COUNT(DISTINCT CASE
          WHEN a.status IN ('Leave', 'Planned Leave')
          THEN tm.member_id
        END) AS onLeaveToday

      FROM team_members tm
      LEFT JOIN attendance a
        ON a.user_id = tm.member_id
        AND a.attendance_date = CURDATE()

      WHERE tm.team_lead_id = ?
      `,
      [teamLeadId]
    );

    // 5. Guide acknowledgement
    const [guideResult] = await db.query(
      `
      SELECT
        COUNT(DISTINCT tm.member_id) AS totalMembers,

        COUNT(
          DISTINCT CASE
            WHEN ga.id IS NOT NULL THEN tm.member_id
          END
        ) AS acknowledgedMembers

      FROM team_members tm

      LEFT JOIN user_project_assignments upa
        ON upa.user_id = tm.member_id

      LEFT JOIN guides g
        ON g.project_id = upa.project_id
        AND g.status = 'active'

      LEFT JOIN guide_acknowledgements ga
        ON ga.guide_id = g.id
        AND ga.user_id = tm.member_id

      WHERE tm.team_lead_id = ?
      `,
      [teamLeadId]
    );

    const teamSize = Number(teamResult[0].teamSize);

    const receivedToday =
      Number(productionResult[0].receivedToday);

    const completedToday =
      Number(productionResult[0].completedToday);

    const pendingApprovals =
      Number(approvalResult[0].pendingApprovals);

    const acknowledgedMembers =
      Number(guideResult[0].acknowledgedMembers);

    const acknowledgementRate =
      teamSize > 0
        ? Math.round(
            (acknowledgedMembers / teamSize) * 100
          )
        : 0;

    return res.status(200).json({
      success: true,

      dashboard: {
        teamSize,

        receivedToday,
        completedToday,

        pendingToday: Math.max(
          receivedToday - completedToday,
          0
        ),

        completionRate:
          receivedToday > 0
            ? Math.round(
                (completedToday / receivedToday) * 100
              )
            : 0,

        pendingApprovals,

        attendance: {
          present: Number(
            attendanceResult[0].presentToday
          ),
          training: Number(
            attendanceResult[0].trainingToday
          ),
          onLeave: Number(
            attendanceResult[0].onLeaveToday
          ),
        },

        guideAcknowledgement: {
          acknowledged: acknowledgedMembers,
          total: teamSize,
          rate: acknowledgementRate,
        },
      },
    });
  } catch (error) {
    console.error(
      "Team Lead Dashboard Error:",
      error
    );

    return res.status(500).json({
      success: false,
      message: "Failed to load Team Lead dashboard",
      error: error.message,
    });
  }
};

const getTeamProductivity = async (req, res) => {
  try {
    const teamLeadId = req.user.id;

    const [productivity] = await db.query(
      `
      SELECT
        DATE(de.production_date) AS production_date,
        DAYNAME(de.production_date) AS day_name,
        COALESCE(SUM(de.documents_received), 0) AS received,
        COALESCE(SUM(de.documents_completed), 0) AS completed
      FROM team_members tm

      JOIN daily_entries de
        ON de.user_id = tm.member_id

      WHERE tm.team_lead_id = ?
        AND de.production_date >= DATE_SUB(CURDATE(), INTERVAL 6 DAY)
        AND de.production_date <= CURDATE()

      GROUP BY
        DATE(de.production_date),
        DAYNAME(de.production_date)

      ORDER BY DATE(de.production_date) ASC
      `,
      [teamLeadId]
    );

    return res.status(200).json({
      success: true,
      count: productivity.length,
      productivity,
    });
  } catch (error) {
    console.error("Team Productivity Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to load team productivity",
      error: error.message,
    });
  }
};

// Gets completed and pending production split for the Team Lead's team
const getCompletionSplit = async (req, res) => {
  try {
    const teamLeadId = req.user.id;

    const [rows] = await db.query(
      `
      SELECT
        COALESCE(SUM(de.documents_received), 0) AS received,
        COALESCE(SUM(de.documents_completed), 0) AS completed
      FROM team_members tm

      JOIN daily_entries de
        ON de.user_id = tm.member_id

      WHERE tm.team_lead_id = ?
      `,
      [teamLeadId]
    );

    const received = Number(rows[0].received);
    const completed = Number(rows[0].completed);

    const pending = Math.max(
      received - completed,
      0
    );

    const completionPercentage =
      received > 0
        ? Math.round(
            (completed / received) * 100
          )
        : 0;

    const pendingPercentage =
      received > 0
        ? Math.round(
            (pending / received) * 100
          )
        : 0;

    return res.status(200).json({
      success: true,

      completionSplit: {
        received,
        completed,
        pending,

        completionPercentage,
        pendingPercentage,
      },
    });
  } catch (error) {
    console.error(
      "Completion Split Error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Failed to load completion split",
      error: error.message,
    });
  }
};

const getDashboardTeamMembers = async (req, res) => {
  try {
    const teamLeadId = req.user.id;

    const [members] = await db.query(
      `
      SELECT
        u.id,
        u.employee_id,
        u.name,

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
        ) AS completed_today,

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

      LEFT JOIN attendance a
        ON a.user_id = u.id

      WHERE tm.team_lead_id = ?

      GROUP BY
        u.id,
        u.employee_id,
        u.name

      ORDER BY completed_today DESC
      `,
      [teamLeadId]
    );

    return res.status(200).json({
      success: true,
      count: members.length,
      members,
    });

  } catch (error) {
    console.error(
      "Dashboard Team Members Error:",
      error
    );

    return res.status(500).json({
      success: false,
      message: "Failed to load dashboard team members",
      error: error.message,
    });
  }
};
module.exports = {
  getTeamLeadDashboard,
  getTeamProductivity,
  getCompletionSplit,
  getDashboardTeamMembers,
};