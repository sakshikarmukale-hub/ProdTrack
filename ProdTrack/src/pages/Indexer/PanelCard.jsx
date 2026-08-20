import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export default function PanelCard({
  title,
  subtitle,
  children,
  onViewAll,
}) {
  return (
    <Card
      sx={{
        borderRadius: 3,
        height: "100%",
      }}
    >
      {/* HEADER */}

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 2.5,
          py: 2,
          borderBottom: "1px solid",
          borderColor: "grey.100",
        }}
      >
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: 15,
            color: "text.primary",
          }}
        >
          {title}{" "}
          {subtitle && (
            <Typography
              component="span"
              sx={{
                color: "text.secondary",
                fontWeight: 400,
                fontSize: 14,
              }}
            >
              {subtitle}
            </Typography>
          )}
        </Typography>

        <Link
          component="button"
          type="button"
          onClick={onViewAll}
          underline="none"
          sx={{
            color: "primary.main",
            fontWeight: 600,
            fontSize: 14,
            border: 0,
            bgcolor: "transparent",
            cursor: "pointer",
            p: 0,
          }}
        >
          View all
        </Link>
      </Box>

      {/* BODY */}

      {children}
    </Card>
  );
}
