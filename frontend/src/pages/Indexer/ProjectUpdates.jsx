import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import PanelCard from "./PanelCard.jsx";

// Font family — matches body { font-family: "Inter", ... } in reference
const FONT =
  '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';

// .pill styles from reference:
// .pill { font-size:10.5px; font-weight:800; padding:3px 8px; border-radius:20px;
//         letter-spacing:.3px; text-transform:uppercase }
// .p-new { background:var(--red):#d64545; color:#fff }
// .p-upd { background:var(--amber):#d9962b; color:#fff }
const badgeStyle = {
  NEW: {
    backgroundColor: "#d64545",
    color: "#fff",
  },
  UPDATED: {
    backgroundColor: "#d9962b",
    color: "#fff",
  },
};

function Badge({ label }) {
  const style = badgeStyle[label] ?? { backgroundColor: "#dfe4ec", color: "#1a2434" };
  return (
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
        display: "inline-block",
        lineHeight: 1.4,
        ...style,
      }}
    >
      {label}
    </Box>
  );
}

export default function ProjectUpdates({
  updates = [],
  unreadCount = 0,
}) {
  return (
    <PanelCard
      title="Project updates"
      subtitle={`(Unread: ${unreadCount})`}
      onViewAll={() => {}}
    >
      {updates.map((update, i) => (
        // .rowitem { padding:13px 16px; border-bottom:1px solid var(--line-2);
        //            display:flex; gap:12px; align-items:flex-start }
        <Box
          key={update.title}
          sx={{
            px: 2,
            py: 1.625,                            // 13px

            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",

            gap: 1.5,

            borderBottom:
              i < updates.length - 1
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
              <Badge label={update.badge} />

              <Typography
                sx={{
                  fontFamily: FONT,
                  fontWeight: 700,
                  fontSize: 13.5,
                  color: "#1a2434",
                }}
              >
                {update.title}
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
              {update.description}
            </Typography>
          </Box>

          {/* EFFECTIVE DATE — .rowitem .ri-meta { text-align:right; font-size:12px;
                                                   color:var(--muted); white-space:nowrap } */}
          <Typography
            sx={{
              fontFamily: FONT,
              color: "#6a7585",
              fontSize: 12,
              textAlign: "right",
              whiteSpace: "nowrap",
              pt: "2px",
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
