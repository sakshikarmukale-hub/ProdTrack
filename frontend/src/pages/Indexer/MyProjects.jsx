import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";

export default function MyProjects() {
  return (
    <Card
      elevation={0}
      sx={{
        border: "1px solid #dce2eb",
        borderRadius: "14px",
        height: "100%",
        overflow: "hidden",
      }}
    >
      {/* ================= HEADER ================= */}

      <Box
        sx={{
          px: 2.2,
          py: 1.8,
        }}
      >
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 700,
            color: "#10213a",
          }}
        >
          My Projects
        </Typography>
      </Box>

      <Divider />

      {/* ================= PROJECTS ================= */}

      <Box
        sx={{
          px: 2.2,
          py: 2.2,
          display: "flex",
          gap: 1,
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        {/* ABC MEDICAL IMAGING */}

        <Chip
          label="ABC Medical Imaging"
          sx={{
            backgroundColor: "#e2f6ef",
            color: "#16805c",
            fontWeight: 500,
            borderRadius: "20px",
          }}
        />

        {/* ORTHO KIDS */}

        <Chip
          label="Ortho Kids"
          sx={{
            backgroundColor: "#fff2d8",
            color: "#b57913",
            fontWeight: 500,
            borderRadius: "20px",
          }}
        />

        {/* SPINE INDEXING */}

        <Chip
          label="Spine Indexing"
          sx={{
            backgroundColor: "#eee5ff",
            color: "#7044c7",
            fontWeight: 500,
            borderRadius: "20px",
          }}
        />
      </Box>
    </Card>
  );
}