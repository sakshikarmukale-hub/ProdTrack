import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import PanelCard from "./PanelCard.jsx";

// Font family — matches body { font-family: "Inter", ... } in reference
const FONT =
  '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';

export default function PendingAcknowledgements({
  items = [],
}) {
  return (
    <PanelCard title="Pending acknowledgements" onViewAll={() => {}}>
      {items.map((item, i) => (
        // .rowitem { padding:13px 16px; border-bottom:1px solid var(--line-2);
        //            display:flex; gap:12px; align-items:flex-start }
        <Box
          key={item.name}
          sx={{
            px: 2,
            py: 1.625,                            // 13px

            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",

            gap: 2,

            borderBottom:
              i < items.length - 1
                ? "1px solid #e8ecf3"             // --line-2
                : "none",
          }}
        >
          {/* LEFT SIDE */}

          <Box sx={{ flex: 1, minWidth: 0 }}>
            {/* .rowitem .ri-t { font-weight:700; font-size:13.5px } */}
            <Typography
              sx={{
                fontFamily: FONT,
                fontWeight: 700,
                fontSize: 13.5,
                color: "#1a2434",
                mb: "3px",
              }}
            >
              {item.name}
            </Typography>

            {/* .rowitem .ri-s { color:var(--muted):#6a7585; font-size:12.5px; margin-top:3px } */}
            {item.updatedDate && (
              <Typography
                sx={{
                  fontFamily: FONT,
                  color: "#6a7585",
                  fontSize: 12.5,
                }}
              >
                Updated {item.updatedDate}
              </Typography>
            )}
          </Box>

          {/* STATUS — .pill.p-pend { background:var(--amber-bg):#fbf1dc;
              color:#a9741a; border:1px solid #ecd6a3;
              font-size:10.5px; font-weight:800; border-radius:20px } */}
          <Box
            sx={{
              fontFamily: FONT,
              fontSize: 10.5,
              fontWeight: 800,
              px: 1,
              py: "3px",
              borderRadius: "20px",
              letterSpacing: "0.3px",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
              backgroundColor: "#fbf1dc",
              color: "#a9741a",
              border: "1px solid #ecd6a3",
              lineHeight: 1.4,
              alignSelf: "flex-start",
            }}
          >
            {item.status}
          </Box>
        </Box>
      ))}
    </PanelCard>
  );
}
