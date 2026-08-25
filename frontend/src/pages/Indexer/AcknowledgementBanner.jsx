import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

import CampaignRoundedIcon from "@mui/icons-material/CampaignRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

export default function AcknowledgementBanner({
  title,
  message,
  onReview,
}) {
  return (
    <Box
      sx={{
        bgcolor: "navy.main",
        borderRadius: 3,
        px: 2.5,
        py: 2,
        mb: 3,

        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",

        gap: 2,
      }}
    >
      {/* LEFT SIDE */}

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1.5,
          flexWrap: "wrap",
        }}
      >
        <CampaignRoundedIcon
          sx={{
            color: "error.main",
            fontSize: 20,
          }}
        />

        <Typography
          sx={{
            color: "#fff",
            fontWeight: 600,
            fontSize: 14,
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            color: "grey.500",
            fontSize: 14,
          }}
        >
          {message}
        </Typography>
      </Box>

      {/* REVIEW BUTTON */}

      <Link
        component="button"
        type="button"
        onClick={onReview}
        underline="none"
        sx={{
          color: "#60a5fa",
          fontWeight: 600,
          fontSize: 14,

          display: "flex",
          alignItems: "center",

          gap: 0.5,
          whiteSpace: "nowrap",

          border: 0,
          bgcolor: "transparent",
          cursor: "pointer",

          "&:hover": {
            color: "#93c5fd",
          },
        }}
      >
        Review now

        <ArrowForwardRoundedIcon
          sx={{
            fontSize: 16,
          }}
        />
      </Link>
    </Box>
  );
}