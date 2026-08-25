import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import PanelCard from "./PanelCard.jsx";

export default function Announcements({
  announcements = [],
}) {
  return (
    <PanelCard title="Announcements">
      {announcements.map((item, i) => (
        <Box
          key={item.title}
          sx={{
            px: 2.5,
            py: 2,

            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",

            gap: 2,

            borderBottom:
              i < announcements.length - 1
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
              {/* ANNOUNCEMENT ICON */}

              {item.icon}

              {/* TITLE */}

              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: 14,
                  color: "text.primary",
                }}
              >
                {item.title}
              </Typography>
            </Box>

            {/* DESCRIPTION */}

            <Typography
              sx={{
                color: "text.secondary",
                fontSize: 14,
              }}
            >
              {item.description}
            </Typography>
          </Box>

          {/* DATE */}

          <Typography
            sx={{
              color: "grey.500",
              fontSize: 12,
              whiteSpace: "nowrap",
              pt: 0.25,
            }}
          >
            {item.date}
          </Typography>
        </Box>
      ))}
    </PanelCard>
  );
}