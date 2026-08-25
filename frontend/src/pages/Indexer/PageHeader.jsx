import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// Font family — matches body { font-family: "Inter", ... } in reference
const FONT =
  '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';

export default function PageHeader({ title, subtitle }) {
  return (
    <Box sx={{ mb: 2.5 }}>
      {/* .page-head .crumb { font-size:12.5px; color:var(--muted):#6a7585 } */}
      <Typography
        sx={{
          fontFamily: FONT,
          color: "#6a7585",
          fontSize: 12.5,
          mb: 0.5,
        }}
      >
        ProdTrack · Indexer
      </Typography>

      {/* .page-head h1 { font-size:22px; font-weight:800; letter-spacing:-.4px } */}
      <Typography
        sx={{
          fontFamily: FONT,
          color: "#1a2434",
          fontSize: 22,
          fontWeight: 800,
          letterSpacing: "-0.4px",
          lineHeight: 1.2,
        }}
      >
        {title}
      </Typography>

      {/* .page-head .desc { font-size:13.5px; color:var(--muted):#6a7585 } */}
      {subtitle && (
        <Typography
          sx={{
            fontFamily: FONT,
            color: "#6a7585",
            fontSize: 13.5,
            mt: "5px",
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}
