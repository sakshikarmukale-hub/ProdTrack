import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import PanelCard from "./PanelCard.jsx";

// Font family — matches body { font-family: "Inter", ... } in reference
const FONT =
  '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';

export default function Announcements({
  announcements = [],
}) {
  return (
    <PanelCard title="Announcements" onViewAll={() => {}}>
      {announcements.map((item, i) => (
        // .rowitem { padding:13px 16px; border-bottom:1px solid var(--line-2);
        //            display:flex; gap:12px; align-items:flex-start }
        <Box
          key={item.title}
          sx={{
            px: 2,
            py: 1.625,                            // 13px

            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",

            gap: 1.5,

            borderBottom:
              i < announcements.length - 1
                ? "1px solid #e8ecf3"             // --line-2
                : "none",
          }}
        >
          {/* LEFT SIDE */}

          <Box sx={{ flex: 1, minWidth: 0 }}>
            {/* .rowitem .ri-t { font-weight:700; font-size:13.5px;
                                display:flex; align-items:center; gap:8px } */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                mb: "3px",
              }}
            >
              {item.icon}

              <Typography
                sx={{
                  fontFamily: FONT,
                  fontWeight: 700,
                  fontSize: 13.5,
                  color: "#1a2434",
                }}
              >
                {item.title}
              </Typography>
            </Box>

            {/* .rowitem .ri-s { color:var(--muted):#6a7585; font-size:12.5px; margin-top:3px } */}
            <Typography
              sx={{
                fontFamily: FONT,
                color: "#6a7585",
                fontSize: 12.5,
                mt: "3px",
              }}
            >
              {item.description}
            </Typography>
          </Box>

          {/* DATE — .rowitem .ri-meta { text-align:right; font-size:12px;
                                         color:var(--muted); white-space:nowrap } */}
          <Typography
            sx={{
              fontFamily: FONT,
              color: "#6a7585",
              fontSize: 12,
              whiteSpace: "nowrap",
              pt: "2px",
            }}
          >
            {item.date}
          </Typography>
        </Box>
      ))}
    </PanelCard>
  );
}
