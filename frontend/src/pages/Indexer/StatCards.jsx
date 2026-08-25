import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// Font family — matches body { font-family: "Inter", ... } in reference
const FONT =
  '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';

function StatCard({
  icon,
  iconBg,
  iconColor,
  label,
  value,
  trend,
  trendColor,
}) {
  return (
    <Card
      elevation={0}
      sx={{
        width: "100%",
        height: 118,
        boxSizing: "border-box",
        px: 2,
        py: 2,
        borderRadius: "12px",               // --radius: 12px

        display: "flex",
        alignItems: "center",
        gap: 1.625,                          // matches .kpi { gap:13px }

        backgroundColor: "#ffffff",          // --card
        border: "1px solid #dfe4ec",         // --line

        // .kpi { box-shadow: var(--shadow) }
        boxShadow:
          "0 1px 2px rgba(16,30,54,.06), 0 4px 16px rgba(16,30,54,.05)",

        "&:hover": {
          boxShadow:
            "0 2px 4px rgba(16,30,54,.08), 0 6px 20px rgba(16,30,54,.08)",
        },
      }}
    >
      {/* ICON — .kpi .kic { width:46px; height:46px; border-radius:11px } */}

      <Box
        sx={{
          width: 46,
          height: 46,
          minWidth: 46,
          borderRadius: "11px",

          backgroundColor: iconBg,

          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          color: iconColor,
          flexShrink: 0,

          "& svg": {
            fontSize: 20,   // .kpi .kic { font-size:20px }
          },
        }}
      >
        {icon}
      </Box>

      {/* CONTENT */}

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          minWidth: 0,
        }}
      >
        {/* .kpi .kt { font-size:12.5px; color:var(--muted):#6a7585; font-weight:600 } */}
        <Typography
          sx={{
            fontFamily: FONT,
            color: "#6a7585",
            fontSize: 12.5,
            fontWeight: 600,
            lineHeight: 1.2,
            mb: 0.25,
            whiteSpace: "nowrap",
          }}
        >
          {label}
        </Typography>

        {/* .kpi .kv { font-size:26px; font-weight:800; letter-spacing:-.6px; line-height:1.05 } */}
        <Typography
          sx={{
            fontFamily: FONT,
            color: "#1a2434",
            fontSize: 26,
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-0.6px",
            whiteSpace: "nowrap",
          }}
        >
          {value}
        </Typography>

        {/* .kpi .kd { font-size:11.5px; font-weight:600; margin-top:3px } */}
        {trend && (
          <Typography
            sx={{
              fontFamily: FONT,
              color: trendColor,
              fontSize: 11.5,
              fontWeight: 600,
              lineHeight: 1.2,
              mt: "3px",
              whiteSpace: "nowrap",
            }}
          >
            {trend}
          </Typography>
        )}
      </Box>
    </Card>
  );
}

export default function StatCards({ stats = [] }) {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        mb: 2,
        width: "100%",
      }}
    >
      {stats.map((stat) => (
        <Grid
          key={stat.label}
          size={{
            xs: 12,
            sm: 6,
            md: 3,
          }}
          sx={{
            display: "flex",
          }}
        >
          <StatCard {...stat} />
        </Grid>
      ))}
    </Grid>
  );
}
