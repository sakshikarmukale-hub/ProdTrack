import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

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
        px: 2.5,
        py: 2,
        borderRadius: "14px",

        display: "flex",
        alignItems: "center",
        gap: 2,

        backgroundColor: "#ffffff",
        border: "1px solid #dbe3ec",

        boxShadow: "0 3px 10px rgba(15, 23, 42, 0.06)",

        "&:hover": {
          boxShadow: "0 5px 14px rgba(15, 23, 42, 0.09)",
        },
      }}
    >
      {/* ICON */}

      <Box
        sx={{
          width: 54,
          height: 54,
          minWidth: 54,
          borderRadius: "12px",

          backgroundColor: iconBg,

          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          color: iconColor,
          flexShrink: 0,

          "& svg": {
            fontSize: 27,
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
        <Typography
          sx={{
            color: "#64748b",
            fontSize: 14,
            fontWeight: 400,
            lineHeight: 1.2,
            mb: 0.5,
            whiteSpace: "nowrap",
          }}
        >
          {label}
        </Typography>

        <Typography
          sx={{
            color: "#0f172a",
            fontSize: 30,
            fontWeight: 800,
            lineHeight: 1,
            letterSpacing: "-0.5px",
            whiteSpace: "nowrap",
          }}
        >
          {value}
        </Typography>

        {trend && (
          <Typography
            sx={{
              color: trendColor,
              fontSize: 12,
              fontWeight: 600,
              lineHeight: 1.2,
              mt: 0.7,
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
      spacing={2.5}
      sx={{
        mb: 2.5,
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