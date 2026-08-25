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

// =========================================================
// DASHBOARD DATA
// =========================================================

const stats = [
  {
    label: "Total Received",
    value: "1,250",
    icon: <MoveToInboxRoundedIcon />,
    iconBg: "#e5efff",
    iconColor: "#2563eb",
  },

  {
    label: "Total Completed",
    value: "980",
    icon: <CheckCircleRoundedIcon />,
    iconBg: "#e2f6ec",
    iconColor: "#22a06b",
    trend: "▲ 6.4% vs last week",
    trendColor: "#15966a",
  },

  {
    label: "Total Pending",
    value: "270",
    icon: <AccessTimeRoundedIcon />,
    iconBg: "#fff3dc",
    iconColor: "#d97706",
    trend: "▲ 12 today",
    trendColor: "#ef4444",
  },

  {
    label: "Today's Productivity",
    value: "45",
    icon: <BoltRoundedIcon />,
    iconBg: "#f0e9ff",
    iconColor: "#7c3aed",
    trend: "▲ on target",
    trendColor: "#15966a",
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
          color: "text.secondary",
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
          color: "success.main",
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
      {/* BREADCRUMB */}

      <Typography
        sx={{
          color: "text.secondary",
          fontSize: 12,
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
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: 24,
            color: "text.primary",
          }}
        >
          Dashboard
        </Typography>

        <Button
          variant="contained"
          startIcon={<AddRoundedIcon />}
          onClick={() => onNavigate("daily-entry")}
          sx={{
            px: 2,
            py: 1.25,
            borderRadius: 2,
            whiteSpace: "nowrap",
          }}
        >
          New daily entry
        </Button>
      </Box>

      {/* DESCRIPTION */}

      <Typography
        sx={{
          color: "text.secondary",
          fontSize: 14,
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
        spacing={2.5}
        sx={{
          mb: 2.5,
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
          <Box
            sx={{
              width: "100%",
            }}
          >
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
          <Box
            sx={{
              width: "100%",
            }}
          >
            <Announcements announcements={announcements} />
          </Box>
        </Grid>
      </Grid>

      {/* =====================================================
          INDEXING GUIDE + ACKNOWLEDGEMENTS
      ===================================================== */}

      <Grid
        container
        spacing={2.5}
        sx={{
          mb: 2.5,
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
          <Box
            sx={{
              width: "100%",
            }}
          >
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
          <Box
            sx={{
              width: "100%",
            }}
          >
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
        spacing={2.5}
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
          <Box
            sx={{
              width: "100%",
            }}
          >
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
          <Box
            sx={{
              width: "100%",
            }}
          >
            <KeyHighlights />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}