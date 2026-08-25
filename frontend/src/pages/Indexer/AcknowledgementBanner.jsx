import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

import CampaignRoundedIcon from "@mui/icons-material/CampaignRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

// Font family — matches body { font-family: "Inter", ... } in reference
const FONT =
  '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';

export default function AcknowledgementBanner({
  title,
  message,
  onReview,
}) {
  return (
    // .notice-strip { background: linear-gradient(90deg,#132338,#1b3050);
    //   color:#dce6f7; border-radius:10px; padding:12px 16px;
    //   font-size:13px; display:flex; gap:10px; align-items:center }
    <Box
      sx={{
        background: "linear-gradient(90deg, #132338, #1b3050)",
        borderRadius: "10px",
        px: 2,
        py: 1.5,
        mb: 2.5,

        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",

        gap: 1.25,
      }}
    >
      {/* LEFT SIDE */}

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1.25,
          flexWrap: "wrap",
        }}
      >
        <CampaignRoundedIcon
          sx={{
            color: "#d64545",   // --red
            fontSize: 18,
          }}
        />

        {/* .notice-strip { font-size:13px } — title portion bold */}
        <Typography
          sx={{
            fontFamily: FONT,
            color: "#dce6f7",
            fontWeight: 700,
            fontSize: 13,
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            fontFamily: FONT,
            color: "#93a4c2",
            fontSize: 13,
          }}
        >
          {message}
        </Typography>
      </Box>

      {/* REVIEW BUTTON — .notice-strip a { color:#7fb0ff; font-weight:700 } */}

      <Link
        component="button"
        type="button"
        onClick={onReview}
        underline="none"
        sx={{
          fontFamily: FONT,
          color: "#7fb0ff",
          fontWeight: 700,
          fontSize: 13,

          display: "flex",
          alignItems: "center",

          gap: 0.5,
          whiteSpace: "nowrap",

          border: 0,
          bgcolor: "transparent",
          cursor: "pointer",
          ml: "auto",

          "&:hover": {
            color: "#a8c8ff",
          },
        }}
      >
        Review now →

        <ArrowForwardRoundedIcon sx={{ fontSize: 15 }} />
      </Link>
    </Box>
  );
}
