import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// Font family — matches body { font-family: "Inter", ... } in reference
const FONT =
  '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';

const highlights = [
  "Updates shown for assigned projects only",
  "Unread updates highlighted on login",
  "Quick access to the latest guide",
  "Acknowledgement status always visible",
];

export default function KeyHighlights() {
  return (
    <Box
      sx={{
        backgroundColor: "#ffffff",          // --card
        border: "1px solid #dfe4ec",         // --line
        borderRadius: "12px",                // --radius
        overflow: "hidden",
        height: "100%",
        boxShadow:
          "0 1px 2px rgba(16,30,54,.06), 0 4px 16px rgba(16,30,54,.05)",
      }}
    >
      {/* HEADER — .card .ch { padding:14px 16px; border-bottom:1px solid var(--line-2) } */}

      <Box
        sx={{
          px: 2,
          py: 1.75,
          borderBottom: "1px solid #e8ecf3",  // --line-2
        }}
      >
        {/* .card .ch h3 { font-size:14px; font-weight:700 } */}
        <Typography
          sx={{
            fontFamily: FONT,
            fontWeight: 700,
            fontSize: 14,
            color: "#1a2434",
          }}
        >
          Key highlights
        </Typography>
      </Box>

      {/* BODY — .card .cb { padding:16px }
          .hlbox ul { color:#4a5568; padding-left:18px; margin:0; font-size:13px } */}

      <Box
        component="ul"
        sx={{
          fontFamily: FONT,
          m: 0,
          px: "34px",                         // 18px left-padding matches reference pl:18px
          py: 2,
          color: "#4a5568",
        }}
      >
        {highlights.map((highlight) => (
          <Box
            component="li"
            key={highlight}
            sx={{
              fontFamily: FONT,
              fontSize: 13,
              lineHeight: 1.5,
              mb: "6px",                      // .hlbox li { margin-bottom:6px }
              "&:last-child": { mb: 0 },
            }}
          >
            {highlight}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
