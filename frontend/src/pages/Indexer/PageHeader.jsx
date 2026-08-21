import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function PageHeader({ title, subtitle }) {
  return (
    <Box sx={{ mb: 2.5 }}>
      <Typography
        sx={{
          color: "#64748b",
          fontSize: 11,
          mb: 0.8,
        }}
      >
        ProdTrack · Indexer
      </Typography>

      <Typography
        sx={{
          color: "#0f172a",
          fontSize: 22,
          fontWeight: 800,
          lineHeight: 1.2,
        }}
      >
        {title}
      </Typography>

      <Typography
        sx={{
          color: "#64748b",
          fontSize: 12,
          mt: 0.7,
        }}
      >
        {subtitle}
      </Typography>
    </Box>
  );
}