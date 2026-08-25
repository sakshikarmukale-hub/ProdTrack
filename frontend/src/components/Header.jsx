import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

import SearchIcon from "@mui/icons-material/Search";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";

export default function Header({
  userName = "Priya Sharma",
  role = "Indexer",
  notificationCount = 3,
  onLogout,
  onNotifications,
  onHelp,
}) {
  const initials = userName
    .split(" ")
    .filter(Boolean)
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        bgcolor: "navy.main",
        height: 64,
        justifyContent: "center",
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          minHeight: "64px !important",

          // SAME START POSITION AS MAIN CONTENT
          px: 0,

          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* ================= LEFT ================= */}

        <Box
          sx={{
            pl: 0.5,
          }}
        >
          <Typography
            sx={{
              color: "#fff",
              fontWeight: 700,
              fontSize: 16,
              lineHeight: 1.15,
            }}
          >
            Welcome, {userName}
          </Typography>

          <Typography
            sx={{
              color: "#94a3b8",
              fontSize: 12,
              lineHeight: 1.2,
              mt: 0.2,
            }}
          >
            {role}
          </Typography>
        </Box>

        {/* ================= RIGHT ================= */}

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.2,
            pr: 2.5,
          }}
        >
          {/* SEARCH */}

          <Box
            sx={{
              width: 294,
              height: 40,

              display: "flex",
              alignItems: "center",

              bgcolor: "#24364f",

              border: "1px solid #3b4d65",

              borderRadius: "10px",

              px: 1.4,

              boxSizing: "border-box",

              "&:hover": {
                bgcolor: "#293c55",
              },
            }}
          >
            <SearchIcon
              sx={{
                color: "#94a3b8",
                fontSize: 18,
                mr: 1,
              }}
            />

            <InputBase
              placeholder="Search projects, entries, users..."
              sx={{
                width: "100%",

                color: "#e2e8f0",

                fontSize: 14,

                "& input::placeholder": {
                  color: "#a6b4c7",
                  opacity: 1,
                },
              }}
            />
          </Box>

          {/* NOTIFICATIONS */}

          <IconButton
            onClick={onNotifications}
            sx={{
              width: 42,
              height: 42,

              bgcolor: "#1e3149",

              borderRadius: "9px",

              "&:hover": {
                bgcolor: "#293d57",
              },
            }}
          >
            <Badge
              badgeContent={notificationCount}
              color="error"
              sx={{
                "& .MuiBadge-badge": {
                  fontSize: 10,
                  fontWeight: 700,
                  minWidth: 17,
                  height: 17,
                },
              }}
            >
              <NotificationsRoundedIcon
                sx={{
                  color: "#fbbf24",
                  fontSize: 19,
                }}
              />
            </Badge>
          </IconButton>

          {/* HELP */}

          <IconButton
            onClick={onHelp}
            sx={{
              width: 42,
              height: 42,

              bgcolor: "#1e3149",

              borderRadius: "9px",

              "&:hover": {
                bgcolor: "#293d57",
              },
            }}
          >
            <HelpOutlineRoundedIcon
              sx={{
                color: "#e2e8f0",
                fontSize: 19,
              }}
            />
          </IconButton>

          {/* AVATAR */}

          <Avatar
            sx={{
              width: 42,
              height: 42,

              bgcolor: "#6366f1",

              fontSize: 13,
              fontWeight: 700,
            }}
          >
            {initials}
          </Avatar>

          {/* LOGOUT */}

          <Button
            onClick={onLogout}
            variant="outlined"
            sx={{
              height: 40,

              px: 1.8,

              minWidth: "auto",

              color: "#dbeafe",

              borderColor: "#40516a",

              borderRadius: "8px",

              fontSize: 13,

              fontWeight: 400,

              textTransform: "none",

              bgcolor: "transparent",

              "&:hover": {
                bgcolor: "#1e3149",
                borderColor: "#536985",
              },
            }}
          >
            Logout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}