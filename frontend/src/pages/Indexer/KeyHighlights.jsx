import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

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
        backgroundColor: "#fff",
        border: "1px solid #dbe2ea",
        borderRadius: 3,
        overflow: "hidden",
        minHeight: 220,
        boxShadow: "0 2px 8px rgba(15, 23, 42, 0.06)",
      }}
    >
      {/* ================= HEADER ================= */}

      <Box
        sx={{
          px: 2.5,
          py: 1.8,
          borderBottom: "1px solid #e1e6ed",
        }}
      >
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: 16,
            color: "#0f172a",
          }}
        >
          Key highlights
        </Typography>
      </Box>

      {/* ================= HIGHLIGHTS ================= */}

      <Box
        component="ul"
        sx={{
          m: 0,
          px: 5.2,
          py: 2,
          color: "#475569",
        }}
      >
        {highlights.map((highlight) => (
          <Box
            component="li"
            key={highlight}
            sx={{
              mb: 1,
              pl: 0.3,
              fontSize: 14,
              lineHeight: 1.6,
            }}
          >
            {highlight}
          </Box>
        ))}
      </Box>
    </Box>
  );
}