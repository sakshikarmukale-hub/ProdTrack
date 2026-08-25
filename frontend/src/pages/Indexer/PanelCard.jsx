import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

// Font family — matches body { font-family: "Inter", ... } in reference
const FONT =
  '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';

export default function PanelCard({
  title,
  subtitle,
  children,
  onViewAll,
}) {
  return (
    <Card
      elevation={0}
      sx={{
        border: "1px solid #dfe4ec",         // --line
        borderRadius: "12px",                 // --radius
        // .kpi / .card box-shadow: var(--shadow)
        boxShadow:
          "0 1px 2px rgba(16,30,54,.06), 0 4px 16px rgba(16,30,54,.05)",
        backgroundColor: "#ffffff",           // --card
        height: "100%",
        overflow: "hidden",
      }}
    >
      {/* HEADER — .card .ch { padding:14px 16px; border-bottom:1px solid var(--line-2) } */}

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 2,
          py: 1.75,                           // 14px top/bottom
          borderBottom: "1px solid #e8ecf3",  // --line-2
        }}
      >
        {/* .card .ch h3 { font-size:14px; font-weight:700 } */}
        <Typography
          sx={{
            fontFamily: FONT,
            fontWeight: 700,
            fontSize: 14,
            color: "#1a2434",
          }}
        >
          {title}{" "}
          {subtitle && (
            <Typography
              component="span"
              sx={{
                fontFamily: FONT,
                color: "#6a7585",       // --muted
                fontWeight: 600,
                fontSize: 12,           // matches .muted secondary
              }}
            >
              {subtitle}
            </Typography>
          )}
        </Typography>

        {/* .card .ch .link { font-size:12.5px; color:var(--brand):#2f6df0; font-weight:600 } */}
        {onViewAll && (
          <Link
            component="button"
            type="button"
            onClick={onViewAll}
            underline="none"
            sx={{
              fontFamily: FONT,
              color: "#2f6df0",
              fontWeight: 600,
              fontSize: 12.5,
              border: 0,
              bgcolor: "transparent",
              cursor: "pointer",
              p: 0,
              "&:hover": {
                color: "#1f57c9",
              },
            }}
          >
            View all
          </Link>
        )}
      </Box>

      {/* BODY */}

      {children}
    </Card>
  );
}
