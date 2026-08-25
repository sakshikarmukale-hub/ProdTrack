import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import AddRoundedIcon from "@mui/icons-material/AddRounded";
import MoveToInboxRoundedIcon from "@mui/icons-material/MoveToInboxRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import BoltRoundedIcon from "@mui/icons-material/BoltRounded";
import BuildRoundedIcon from "@mui/icons-material/BuildRounded";
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";

import AcknowledgementBanner from "./AcknowledgementBanner.jsx";
import StatCards from "./StatCards.jsx";
import ProjectUpdates from "./ProjectUpdates.jsx";
import Announcements from "./Announcements.jsx";
import IndexingGuide from "./IndexingGuide.jsx";
import PendingAcknowledgements from "./PendingAcknowledgements.jsx";
import MyProjects from "./MyProjects.jsx";
import KeyHighlights from "./KeyHighlights.jsx";

// Font family — "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif
const FONT =
  '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';

// =========================================================
// DASHBOARD DATA
// =========================================================

const stats = [
  {
    label: "Total Received",
    value: "1,250",
    icon: <MoveToInboxRoundedIcon />,
    iconBg: "#e5eefe",
    iconColor: "#2f6df0",
  },

  {
    label: "Total Completed",
    value: "980",
    icon: <CheckCircleRoundedIcon />,
    iconBg: "#e4f6ee",
    iconColor: "#1f9d6b",
    trend: "▲ 6.4% vs last week",
    trendColor: "#1f9d6b",
  },

  {
    label: "Total Pending",
    value: "270",
    icon: <AccessTimeRoundedIcon />,
    iconBg: "#fbf1dc",
    iconColor: "#d9962b",
    trend: "▲ 12 today",
    trendColor: "#d64545",
  },

  {
    label: "Today's Productivity",
    value: "45",
    icon: <BoltRoundedIcon />,
    iconBg: "#efe9fb",
    iconColor: "#7a51d6",
    trend: "▲ on target",
    trendColor: "#1f9d6b",
  },
];

const projectUpdates = [
  {
    badge: "NEW",
    title: "ABC Medical Imaging — Process update",
    description:
      "Updated 16 May 2025 · Changes in implant indexing process. Please review the updated guide.",
    effectiveDate: "17 May 2025",
  },

  {
    badge: "UPDATED",
    title: "Ortho Kids — Field mapping update",
    description:
      "Updated 14 May 2025 · Field mapping changes on pages 3 & 4. Refer to the updated guide.",
    effectiveDate: "15 May 2025",
  },
];

const announcements = [
  {
    icon: (
      <BuildRoundedIcon
        sx={{
          fontSize: 15,
          color: "#6a7585",
        }}
      />
    ),

    title: "System maintenance",
    description: "System down 25 May, 10:00 PM–12:00 AM.",
    date: "20 May",
  },

  {
    icon: (
      <FiberManualRecordRoundedIcon
        sx={{
          fontSize: 12,
          color: "#1f9d6b",
        }}
      />
    ),

    title: "Monthly meeting",
    description: "Team meeting 22 May at 4:00 PM.",
    date: "18 May",
  },
];

const latestGuide = {
  name: "ABC Medical Imaging Indexing Guide v2.3",
  version: "2.3",
  updatedDate: "16 May 2025",
};

const pendingAcknowledgements = [
  {
    name: "ABC Medical Imaging Guide v2.3",
    updatedDate: "16 May 2025",
    status: "PENDING",
  },

  {
    name: "Ortho Kids Guide v1.7",
    status: "PENDING",
  },
];

// =========================================================
// INDEXER DASHBOARD
// =========================================================

export default function IndexerDashboard({ onNavigate }) {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "100%",
        boxSizing: "border-box",
      }}
    >
      {/* BREADCRUMB — .page-head .crumb { font-size:12.5px; color:var(--muted):#6a7585 } */}

      <Typography
        sx={{
          fontFamily: FONT,
          fontSize: 12.5,
          color: "#6a7585",
          mb: 0.5,
        }}
      >
        ProdTrack · Indexer
      </Typography>

      {/* TITLE ROW */}

      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: 2,
          mb: 0.5,
        }}
      >
        {/* .page-head h1 { font-size:22px; font-weight:800; letter-spacing:-.4px } */}
        <Typography
          sx={{
            fontFamily: FONT,
            fontWeight: 800,
            fontSize: 22,
            letterSpacing: "-0.4px",
            color: "#1a2434",
          }}
        >
          Dashboard
        </Typography>

        {/* .btn.blue { font-size:13px; font-weight:600 (btn base); border-radius:8px } */}
        <Button
          variant="contained"
          startIcon={<AddRoundedIcon />}
          onClick={() => onNavigate("daily-entry")}
          sx={{
            fontFamily: FONT,
            fontSize: 13,
            fontWeight: 600,
            px: 1.75,
            py: 1.125,
            borderRadius: "8px",
            textTransform: "none",
            whiteSpace: "nowrap",
            backgroundColor: "#2f6df0",
            color: "#fff",
            boxShadow: "none",
            "&:hover": {
              backgroundColor: "#1f57c9",
              boxShadow: "none",
            },
          }}
        >
          New daily entry
        </Button>
      </Box>

      {/* DESCRIPTION — .page-head .desc { font-size:13.5px; color:var(--muted):#6a7585 } */}

      <Typography
        sx={{
          fontFamily: FONT,
          fontSize: 13.5,
          color: "#6a7585",
          mb: 2.5,
        }}
      >
        Your assigned projects, latest guide and pending acknowledgements.
      </Typography>

      {/* ACKNOWLEDGEMENT */}

      <AcknowledgementBanner
        title="ABC Medical Imaging Indexing Guide v2.3"
        message="needs your acknowledgement before you can submit entries."
        onReview={() => onNavigate("indexing-guide")}
      />

      {/* STAT CARDS */}

      <StatCards stats={stats} />

      {/* =====================================================
          PROJECT UPDATES + ANNOUNCEMENTS
      ===================================================== */}

      <Grid
        container
        spacing={2}
        sx={{
          mb: 2,
          width: "100%",
        }}
      >
        <Grid
          size={{
            xs: 12,
            md: 7,
          }}
          sx={{
            display: "flex",
          }}
        >
          <Box sx={{ width: "100%" }}>
            <ProjectUpdates
              updates={projectUpdates}
              unreadCount={2}
            />
          </Box>
        </Grid>

        <Grid
          size={{
            xs: 12,
            md: 5,
          }}
          sx={{
            display: "flex",
          }}
        >
          <Box sx={{ width: "100%" }}>
            <Announcements announcements={announcements} />
          </Box>
        </Grid>
      </Grid>

      {/* =====================================================
          INDEXING GUIDE + ACKNOWLEDGEMENTS
      ===================================================== */}

      <Grid
        container
        spacing={2}
        sx={{
          mb: 2,
          width: "100%",
        }}
      >
        <Grid
          size={{
            xs: 12,
            md: 7,
          }}
          sx={{
            display: "flex",
          }}
        >
          <Box sx={{ width: "100%" }}>
            <IndexingGuide
              guide={latestGuide}
              onViewGuide={() => onNavigate("indexing-guide")}
            />
          </Box>
        </Grid>

        <Grid
          size={{
            xs: 12,
            md: 5,
          }}
          sx={{
            display: "flex",
          }}
        >
          <Box sx={{ width: "100%" }}>
            <PendingAcknowledgements
              items={pendingAcknowledgements}
            />
          </Box>
        </Grid>
      </Grid>

      {/* =====================================================
          MY PROJECTS + KEY HIGHLIGHTS
      ===================================================== */}

      <Grid
        container
        spacing={2}
        sx={{
          width: "100%",
        }}
      >
        <Grid
          size={{
            xs: 12,
            md: 7,
          }}
          sx={{
            display: "flex",
          }}
        >
          <Box sx={{ width: "100%" }}>
            <MyProjects />
          </Box>
        </Grid>

        <Grid
          size={{
            xs: 12,
            md: 5,
          }}
          sx={{
            display: "flex",
          }}
        >
          <Box sx={{ width: "100%" }}>
            <KeyHighlights />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
