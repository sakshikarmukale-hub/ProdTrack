import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";

import PanelCard from "./PanelCard.jsx";

export default function PendingAcknowledgements({
  items = [],
}) {
  return (
    <PanelCard title="Pending acknowledgements">
      {items.map((item, i) => (
        <Box
          key={item.name}
          sx={{
            px: 2.5,
            py: 2,

            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",

            gap: 2,

            borderBottom:
              i < items.length - 1
                ? "1px solid"
                : "none",

            borderColor: "grey.100",
          }}
        >
          {/* LEFT SIDE */}

          <Box>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: 14,
                color: "text.primary",
                mb: 0.5,
              }}
            >
              {item.name}
            </Typography>

            {item.updatedDate && (
              <Typography
                sx={{
                  color: "text.secondary",
                  fontSize: 14,
                }}
              >
                Updated {item.updatedDate}
              </Typography>
            )}
          </Box>

          {/* STATUS */}

          <Chip
            label={item.status}
            size="small"
            sx={{
              bgcolor: "warning.light",
              color: "warning.main",
              fontWeight: 700,
              fontSize: 11,
              whiteSpace: "nowrap",
            }}
          />
        </Box>
      ))}
    </PanelCard>
  );
}