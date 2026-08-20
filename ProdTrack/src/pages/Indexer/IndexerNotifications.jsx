import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";

import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import LockRoundedIcon from "@mui/icons-material/LockRounded";

const notifications = [
  {
    icon: <ErrorOutlineRoundedIcon />,
    iconBg: "#fee2e2",
    iconColor: "#dc2626",
    title: "Missing daily entry",
    description:
      "You haven't submitted an entry for Spine Indexing today.",
    time: "2h ago",
  },

  {
    icon: <MenuBookRoundedIcon />,
    iconBg: "#dbeafe",
    iconColor: "#2563eb",
    title: "Guide update",
    description:
      "ABC Medical Imaging Guide v2.3 needs acknowledgement.",
    time: "5h ago",
  },

  {
    icon: <CheckCircleRoundedIcon />,
    iconBg: "#dcfce7",
    iconColor: "#16a34a",
    title: "Correction approved",
    description:
      "Your correction on ABC-…-11 was approved by Rohan Mehta.",
    time: "1d ago",
  },

  {
    icon: <TrendingUpRoundedIcon />,
    iconBg: "#fef3c7",
    iconColor: "#d97706",
    title: "Backlog alert",
    description:
      "Pending volume for Ortho Kids increased by 12%.",
    time: "1d ago",
  },

  {
    icon: <LockRoundedIcon />,
    iconBg: "#f3e8ff",
    iconColor: "#7c3aed",
    title: "Entry lock reminder",
    description:
      "Entries for 18 May lock at 6:00 PM today.",
    time: "2d ago",
  },
];

function NotificationItem({ notification }) {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,

        px: 3,
        py: 2.25,

        "&:hover": {
          bgcolor: "#f8fafc",
        },
      }}
    >
      {/* ICON */}

      <Box
        sx={{
          width: 42,
          height: 42,
          minWidth: 42,

          borderRadius: 2,

          bgcolor: notification.iconBg,
          color: notification.iconColor,

          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          "& svg": {
            fontSize: 21,
          },
        }}
      >
        {notification.icon}
      </Box>

      {/* CONTENT */}

      <Box
        sx={{
          flex: 1,
          minWidth: 0,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: 2,
          }}
        >
          <Typography
            sx={{
              fontSize: 14,
              fontWeight: 700,
              color: "#172033",
            }}
          >
            {notification.title}
          </Typography>

          <Typography
            sx={{
              fontSize: 12,
              color: "#94a3b8",
              whiteSpace: "nowrap",
            }}
          >
            {notification.time}
          </Typography>
        </Box>

        <Typography
          sx={{
            mt: 0.5,

            fontSize: 13,
            lineHeight: 1.5,

            color: "#64748b",
          }}
        >
          {notification.description}
        </Typography>
      </Box>
    </Box>
  );
}

export default function IndexerNotifications() {
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      {/* =================================================
          BREADCRUMB
      ================================================= */}

      <Typography
        sx={{
          color: "text.secondary",
          fontSize: 12,
          mb: 0.5,
        }}
      >
        ProdTrack · Indexer
      </Typography>

      {/* =================================================
          PAGE HEADER
      ================================================= */}

      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",

          mb: 0.5,

          gap: 2,
        }}
      >
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: 24,
            color: "text.primary",
          }}
        >
          Notifications
        </Typography>

        <Button
          variant="outlined"
          sx={{
            px: 2,
            py: 1,

            borderRadius: 2,

            textTransform: "none",

            fontSize: 13,

            flexShrink: 0,
          }}
        >
          Mark all as read
        </Button>
      </Box>

      {/* =================================================
          DESCRIPTION
      ================================================= */}

      <Typography
        sx={{
          color: "text.secondary",

          fontSize: 14,

          mb: 2.5,
        }}
      >
        Email and system alerts. Reminders for entries, corrections and guide
        updates.
      </Typography>

      {/* =================================================
          NOTIFICATION CARD
      ================================================= */}

      <Card
        elevation={0}
        sx={{
          borderRadius: 1.5,

          border: "1px solid #e5e7eb",

          overflow: "hidden",

          bgcolor: "#fff",
        }}
      >
        {/* CARD HEADER */}

        <Box
          sx={{
            px: 3,
            py: 2,

            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",

            gap: 2,
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: 16,
                fontWeight: 700,
                color: "#172033",
              }}
            >
              All notifications
            </Typography>

            <Typography
              sx={{
                fontSize: 12,

                color: "#94a3b8",

                mt: 0.25,
              }}
            >
              Latest alerts and updates
            </Typography>
          </Box>

          <Chip
            label="5 notifications"
            size="small"
            sx={{
              bgcolor: "#f1f5f9",

              color: "#475569",

              fontSize: 11,

              fontWeight: 600,
            }}
          />
        </Box>

        <Divider />

        {/* =================================================
            NOTIFICATION ITEMS
        ================================================= */}

        {notifications.map((notification, index) => (
          <Box key={notification.title}>
            <NotificationItem
              notification={notification}
            />

            {index < notifications.length - 1 && (
              <Divider />
            )}
          </Box>
        ))}
      </Card>
    </Box>
  );
}