import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";

import PanelCard from "./PanelCard.jsx";

const badgeColor = {
  NEW: "error",
  UPDATED: "warning",
};

export default function ProjectUpdates({
  updates = [],
  unreadCount = 0,
}) {
  return (
    <PanelCard
      title="Project updates"
      subtitle={`(Unread: ${unreadCount})`}
    >
      {updates.map((update, i) => (
        <Box
          key={update.title}
          sx={{
            px: 2.5,
            py: 2,

            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",

            gap: 2,

            borderBottom:
              i < updates.length - 1
                ? "1px solid"
                : "none",

            borderColor: "grey.100",
          }}
        >
          {/* LEFT SIDE */}

          <Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                mb: 0.5,
              }}
            >
              <Chip
                label={update.badge}
                color={badgeColor[update.badge] || "default"}
                size="small"
                sx={{
                  height: 18,
                  fontSize: 10,
                  color: "#fff",

                  "& .MuiChip-label": {
                    px: 0.75,
                  },
                }}
              />

              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: 14,
                  color: "text.primary",
                }}
              >
                {update.title}
              </Typography>
            </Box>

            <Typography
              sx={{
                color: "text.secondary",
                fontSize: 14,
              }}
            >
              {update.description}
            </Typography>
          </Box>

          {/* EFFECTIVE DATE */}

          <Typography
            sx={{
              color: "grey.500",
              fontSize: 12,
              textAlign: "right",
              whiteSpace: "nowrap",
              pt: 0.25,
            }}
          >
            Effective
            <br />
            {update.effectiveDate}
          </Typography>
        </Box>
      ))}
    </PanelCard>
  );
}