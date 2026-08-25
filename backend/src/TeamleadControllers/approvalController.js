const db = require("../config/db");

// Get pending correction requests from Team Lead's team
const getPendingApprovals = async (req, res) => {
  try {
    const teamLeadId = req.user.id;

    const [requests] = await db.query(
      `
      SELECT
        cr.id,
        cr.production_date,
        cr.field_name,
        cr.old_value,
        cr.new_value,
        cr.reason,
        cr.status,
        cr.review_comment,
        cr.created_at,

        u.id AS employee_id,
        u.employee_id AS employee_code,
        u.name AS employee_name,

        p.id AS project_id,
        p.project_name

      FROM correction_requests cr

      JOIN team_members tm
        ON tm.member_id = cr.user_id

      JOIN users u
        ON u.id = cr.user_id

      JOIN projects p
        ON p.id = cr.project_id

      WHERE tm.team_lead_id = ?
        AND cr.status = 'PENDING'

      ORDER BY cr.created_at DESC
      `,
      [teamLeadId]
    );

    return res.status(200).json({
      success: true,
      count: requests.length,
      requests,
    });

  } catch (error) {
    console.error("Get Pending Approvals Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to load pending approvals",
      error: error.message,
    });
  }
};

// Approve a correction request
const approveCorrectionRequest = async (req, res) => {
  try {
    const teamLeadId = req.user.id;
    const requestId = req.params.id;
    const { reviewComment } = req.body;

    // Make sure this request belongs to a member of this Team Lead's team
    const [requests] = await db.query(
      `
      SELECT cr.id, cr.status
      FROM correction_requests cr
      JOIN team_members tm
        ON tm.member_id = cr.user_id
      WHERE cr.id = ?
        AND tm.team_lead_id = ?
      `,
      [requestId, teamLeadId]
    );

    if (requests.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Correction request not found",
      });
    }

    if (requests[0].status !== "PENDING") {
      return res.status(400).json({
        success: false,
        message: "Correction request has already been reviewed",
      });
    }

    await db.query(
      `
      UPDATE correction_requests
      SET
        status = 'APPROVED',
        review_comment = ?
      WHERE id = ?
      `,
      [reviewComment || null, requestId]
    );

    return res.status(200).json({
      success: true,
      message: "Correction request approved successfully",
    });
  } catch (error) {
    console.error("Approve Correction Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to approve correction request",
      error: error.message,
    });
  }
};


// Reject a correction request
const rejectCorrectionRequest = async (req, res) => {
  try {
    const teamLeadId = req.user.id;
    const requestId = req.params.id;
    const { reviewComment } = req.body;

    const [requests] = await db.query(
      `
      SELECT cr.id, cr.status
      FROM correction_requests cr
      JOIN team_members tm
        ON tm.member_id = cr.user_id
      WHERE cr.id = ?
        AND tm.team_lead_id = ?
      `,
      [requestId, teamLeadId]
    );

    if (requests.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Correction request not found",
      });
    }

    if (requests[0].status !== "PENDING") {
      return res.status(400).json({
        success: false,
        message: "Correction request has already been reviewed",
      });
    }

    await db.query(
      `
      UPDATE correction_requests
      SET
        status = 'REJECTED',
        review_comment = ?
      WHERE id = ?
      `,
      [reviewComment || null, requestId]
    );

    return res.status(200).json({
      success: true,
      message: "Correction request rejected successfully",
    });
  } catch (error) {
    console.error("Reject Correction Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to reject correction request",
      error: error.message,
    });
  }
};

module.exports = {
  getPendingApprovals,
  approveCorrectionRequest,
  rejectCorrectionRequest,

};