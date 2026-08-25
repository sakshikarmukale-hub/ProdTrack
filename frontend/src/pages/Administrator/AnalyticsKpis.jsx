import { Box, Paper, Typography } from "@mui/material";
import CorePageShell, {
  CoreMetricCards,
  SectionCard,
} from "../../components/CorePageShell.jsx";

const weeklyBars = [
  { day: "Mon", received: 142, completed: 128 },
  { day: "Tue", received: 165, completed: 154 },
  { day: "Wed", received: 120, completed: 98 },
  { day: "Thu", received: 188, completed: 175 },
  { day: "Fri", received: 174, completed: 162 },
  { day: "Sat", received: 95, completed: 88 },
];

const projectKpis = [
  ["ABC Medical Imaging", "87%", 87, "4,320", "3,760", "#20a36f"],
  ["Ortho Kids", "94%", 94, "2,100", "1,974", "#3475ee"],
  ["Spine Indexing", "81%", 81, "1,860", "1,505", "#e09a22"],
  ["Cardio Records", "95%", 95, "1,440", "1,368", "#20a36f"],
  ["Neuro Scan", "78%", 78, "760", "593", "#e05a22"],
];

const maxReceived = Math.max(...weeklyBars.map((b) => b.received));

function WeeklyChart() {
  return (
    <Box sx={{ px: { xs: 1, sm: 3 }, pt: 2, pb: 1 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-around",
          height: { xs: 120, sm: 160 },
          gap: { xs: 0.5, sm: 1.5 },
        }}
      >
        {weeklyBars.map((bar) => (
          <Box
            key={bar.day}
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-end",
              height: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-end",
                gap: "3px",
                width: "100%",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  width: { xs: 10, sm: 16 },
                  height: `${(bar.received / maxReceived) * 100}%`,
                  minHeight: 10,
                  borderRadius: "4px 4px 0 0",
                  bgcolor: "#cfdeff",
                }}
              />
              <Box
                sx={{
                  width: { xs: 10, sm: 16 },
                  height: `${(bar.completed / maxReceived) * 100}%`,
                  minHeight: 10,
                  borderRadius: "4px 4px 0 0",
                  background: "linear-gradient(180deg,#4f82ef,#2f6df6)",
                }}
              />
            </Box>
            <Typography
              sx={{ fontSize: { xs: 8, sm: 10 }, color: "#61718a", mt: 0.5 }}
            >
              {bar.day}
            </Typography>
          </Box>
        ))}
      </Box>

      <Box sx={{ display: "flex", gap: 2, pt: 1, flexWrap: "wrap" }}>
        {[
          ["#cfdeff", "Received"],
          ["#2f6df6", "Completed"],
        ].map(([color, label]) => (
          <Box
            key={label}
            sx={{ display: "flex", alignItems: "center", gap: 0.7 }}
          >
            <Box
              sx={{
                width: 10,
                height: 10,
                borderRadius: "2px",
                bgcolor: color,
              }}
            />
            <Typography sx={{ fontSize: 11, color: "#526581" }}>
              {label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default function AnalyticsKpis() {
  return (
    <CorePageShell
      breadcrumb="Administrator"
      title="Analytics & KPIs"
      description="Monitor organisation-wide KPIs and operational trends."
    >
      {/* ── METRIC CARDS ── */}
      <CoreMetricCards
        items={[
          ["Org Productivity", "89%", "▲ 2.1% MoM"],
          ["Avg Turnaround", "1.4 days", "▼ 0.2 days"],
          ["Correction Rate", "3.2%", "▼ 0.5%"],
          ["Guide Compliance", "91%", "▲ 4%"],
        ]}
      />

      {/* ── CHART + PRODUCTIVITY BARS ── */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", lg: "1.5fr 1fr" },
          gap: 2,
          mb: 2,
        }}
      >
        <SectionCard title="Weekly received vs completed">
          <WeeklyChart />
        </SectionCard>

        <SectionCard title="Productivity by project">
          {projectKpis.map(([name, pct, raw, , , color]) => (
            <Box
              key={name}
              sx={{ px: 2, py: 0.9, borderTop: "1px solid #e7ebf0" }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mb: 0.4,
                }}
              >
                <Typography
                  sx={{
                    fontSize: 12,
                    color: "#243b5a",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    maxWidth: "75%",
                  }}
                >
                  {name}
                </Typography>
                <Typography sx={{ fontSize: 12, fontWeight: 800, color }}>
                  {pct}
                </Typography>
              </Box>
              <Box
                sx={{
                  height: 5,
                  bgcolor: "#edf1f6",
                  borderRadius: 4,
                  overflow: "hidden",
                }}
              >
                <Box
                  sx={{
                    width: `${raw}%`,
                    height: "100%",
                    bgcolor: color,
                    borderRadius: 4,
                  }}
                />
              </Box>
            </Box>
          ))}
        </SectionCard>
      </Box>

      {/* ── SUMMARY TABLE ── */}
      <Paper
        elevation={0}
        sx={{
          border: "1px solid #dbe3ec",
          borderRadius: 1.5,
          overflow: "hidden",
          bgcolor: "#fff",
        }}
      >
        <Box sx={{ px: 2, py: 1.5, borderBottom: "1px solid #e3e8ef" }}>
          <Typography sx={{ fontWeight: 800, fontSize: 13 }}>
            Project-wise production summary
          </Typography>
        </Box>

        {/* Table header */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "2fr 1fr 1fr", sm: "2fr 1fr 1fr 1fr" },
            px: 2,
            py: 1,
            bgcolor: "#f8fafc",
            borderBottom: "1px solid #e3e8ef",
          }}
        >
          {["PROJECT", "PRODUCTIVITY", "RECEIVED", "COMPLETED"].map((h, i) => (
            <Typography
              key={h}
              sx={{
                fontSize: 10,
                fontWeight: 800,
                color: "#526581",
                display: i === 3 ? { xs: "none", sm: "block" } : "block",
              }}
            >
              {h}
            </Typography>
          ))}
        </Box>

        {/* Table rows */}
        {projectKpis.map(([name, pct, , received, completed, color]) => (
          <Box
            key={name}
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "2fr 1fr 1fr", sm: "2fr 1fr 1fr 1fr" },
              px: 2,
              py: 1.2,
              alignItems: "center",
              borderTop: "1px solid #e7ebf0",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: 11, sm: 13 },
                color: "#243b5a",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {name}
            </Typography>
            <Typography sx={{ fontSize: 13, fontWeight: 800, color }}>
              {pct}
            </Typography>
            <Typography sx={{ fontSize: 13, color: "#526581" }}>
              {received}
            </Typography>
            <Typography
              sx={{
                fontSize: 13,
                color: "#526581",
                display: { xs: "none", sm: "block" },
              }}
            >
              {completed}
            </Typography>
          </Box>
        ))}
      </Paper>
    </CorePageShell>
  );
}
