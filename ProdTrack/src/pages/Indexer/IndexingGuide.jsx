import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import FileDownloadRoundedIcon from "@mui/icons-material/FileDownloadRounded";

import PanelCard from "./PanelCard.jsx";

export default function IndexingGuide({
  guide,
  onViewGuide,
}) {
  if (!guide) {
    return null;
  }

  return (
    <PanelCard title="Indexing guide (latest)">
      <Box
        sx={{
          px: 2.5,
          py: 2,

          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",

          gap: 2,
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
            {guide.name}
          </Typography>

          <Typography
            sx={{
              color: "text.secondary",
              fontSize: 14,
            }}
          >
            Version {guide.version} · Updated {guide.updatedDate}
          </Typography>
        </Box>

        {/* VIEW / DOWNLOAD BUTTON */}

        <Button
          variant="contained"
          startIcon={<FileDownloadRoundedIcon />}
          onClick={onViewGuide}
          sx={{
            whiteSpace: "nowrap",
            px: 2.5,
            py: 1.25,
            borderRadius: 2,
          }}
        >
          View / Download
        </Button>
      </Box>
    </PanelCard>
  );
}