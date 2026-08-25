import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

// Font family — matches body { font-family: "Inter", ... } in reference
const FONT =
  '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';

// .chip styles from reference:
// .chip { font-size:11.5px; font-weight:600; padding:5px 11px; border-radius:20px }
// .chip.b { background:var(--green-bg):#e4f6ee; color:#177a53 }
// .chip.o { background:var(--amber-bg):#fbf1dc; color:#a9741a }
// .chip.p { background:var(--violet-bg):#efe9fb; color:#603bb3 }
const CHIP_COLORS = [
  { backgroundColor: "#e4f6ee", color: "#177a53" },  // .chip.b (green)
  { backgroundColor: "#fbf1dc", color: "#a9741a" },  // .chip.o (amber)
  { backgroundColor: "#efe9fb", color: "#603bb3" },  // .chip.p (violet)
];

const projects = ["ABC Medical Imaging", "Ortho Kids", "Spine Indexing"];

export default function MyProjects() {
  return (
    <Card
      elevation={0}
      sx={{
        border: "1px solid #dfe4ec",         // --line
        borderRadius: "12px",                 // --radius
        boxShadow:
          "0 1px 2px rgba(16,30,54,.06), 0 4px 16px rgba(16,30,54,.05)",
        backgroundColor: "#ffffff",
        height: "100%",
        overflow: "hidden",
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
            fontSize: 14,
            fontWeight: 700,
            color: "#1a2434",
          }}
        >
          My projects
        </Typography>
      </Box>

      {/* BODY — .card .cb { padding:16px } */}

      <Box
        sx={{
          px: 2,
          py: 2,
          display: "flex",
          gap: "6px 6px",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        {projects.map((name, i) => (
          // .chip { font-size:11.5px; font-weight:600; padding:5px 11px; border-radius:20px }
          <Box
            key={name}
            sx={{
              fontFamily: FONT,
              fontSize: 11.5,
              fontWeight: 600,
              px: "11px",
              py: "5px",
              borderRadius: "20px",
              ...CHIP_COLORS[i % CHIP_COLORS.length],
            }}
          >
            {name}
          </Box>
        ))}
      </Box>
    </Card>
  );
}
