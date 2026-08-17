import React from "react";
import {
  Box,
  Toolbar,
  Typography,
  InputBase,
  IconButton,
  Badge,
  Avatar,
  Button,
  Stack,
} from "@mui/material";

// Inline icons — no @mui/icons-material dependency needed
function SearchIcon({ sx }) {
  return (
    <Box component="svg" viewBox="0 0 24 24" sx={{ width: 20, height: 20, fill: "none", ...sx }}>
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </Box>
  );
}

function NotificationsNoneIcon({ sx }) {
  return (
    <Box component="svg" viewBox="0 0 24 24" sx={{ width: 20, height: 20, fill: "none", ...sx }}>
      <path
        d="M12 3a5 5 0 00-5 5v3.2c0 .6-.2 1.2-.6 1.7L5 15.5c-.6.8 0 1.9 1 1.9h12c1 0 1.6-1.1 1-1.9l-1.4-2.6c-.4-.5-.6-1.1-.6-1.7V8a5 5 0 00-5-5z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M9.5 20a2.5 2.5 0 005 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </Box>
  );
}

function HelpOutlineIcon({ sx }) {
  return (
    <Box component="svg" viewBox="0 0 24 24" sx={{ width: 20, height: 20, fill: "none", ...sx }}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M9.5 9.2a2.5 2.5 0 114 2c-.7.6-1.5 1.1-1.5 2.1"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="17" r="1" fill="currentColor" />
    </Box>
  );
}

export default function Topbar() {
  return (
    <Toolbar
      sx={{
        bgcolor: "#0f1b30",
        minHeight: { xs: 64, md: 68 },
        px: { xs: 2, sm: 3, lg: 4 },
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      {/* LEFT: Logo + Welcome */}
      <Stack direction="row" alignItems="center" spacing={{ xs: 2, md: 4 }} sx={{ minWidth: 0 }}>
        {/* Logo */}
       <Stack direction="row" alignItems="center" spacing={1.5}>
                 <Box
         sx={{
           width: { xs: 34, sm: 38 },
           height: { xs: 34, sm: 38 },
           borderRadius: "10px",
           background: "linear-gradient(135deg, #3f7bff, #7a51d6)",
           color: "White",
           display: "grid",
           placeItems: "center",
           fontSize: { xs: "18px", sm: "20px" },
           flexShrink: 0,
         }}
       >
                   ▚
                 </Box>
                 <Typography sx={{ color: "#fff", fontSize: 18, fontWeight: 700, letterSpacing: "-0.01em" }}>
                   ProdTrack
                 </Typography>
               </Stack>

        {/* Welcome text */}
        <Box sx={{ minWidth: 0, display: { xs: "none", md: "block" } }}>
          <Typography
            sx={{
              color: "#fff",
              fontSize: 14,
              fontWeight: 700,
              lineHeight: 1.3,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              ml:10,
            }}
          >
            Welcome, Priya Sharma
          </Typography>
          <Typography
            sx={{
              color: "#8b93a7",
              fontSize: 12.5,
              lineHeight: 1.3,
              ml:10,
            }}
          >
            Indexer
          </Typography>
        </Box>
      </Stack>

      {/* RIGHT: Search + icons + avatar + logout */}
      <Stack direction="row" alignItems="center" spacing={{ xs: 1, sm: 1.5, md: 2 }} sx={{ flexShrink: 0 }}>
        {/* Search */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            bgcolor: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "8px",
            px: 1.5,
            py: 0.75,
            width: { md: 240, lg: 300 },
          }}
        >
          <SearchIcon sx={{ width: 18, height: 18, color: "#8b93a7", mr: 1, flexShrink: 0 }} />
          <InputBase
            placeholder="Search projects, entries, users…"
            sx={{
              color: "#e2e6ee",
              fontSize: 13.5,
              width: "100%",
              "& input::placeholder": { color: "#8b93a7", opacity: 1 },
            }}
          />
        </Box>

        {/* Search icon only, for small screens */}
        <IconButton
          sx={{
            display: { xs: "flex", md: "none" },
            color: "#c9cedb",
            bgcolor: "rgba(255,255,255,0.06)",
          }}
        >
          <SearchIcon sx={{ width: 20, height: 20 }} />
        </IconButton>

        {/* Notification bell */}
        <IconButton sx={{ color: "#c9cedb" }}>
          <Badge
            badgeContent={3}
            sx={{
              "& .MuiBadge-badge": {
                bgcolor: "#ef4444",
                color: "#fff",
                fontSize: 10,
                fontWeight: 700,
                minWidth: 16,
                height: 16,
              },
            }}
          >
            <NotificationsNoneIcon sx={{ width: 21, height: 21 }} />
          </Badge>
        </IconButton>

        {/* Help */}
        <IconButton sx={{ color: "#c9cedb", display: { xs: "none", sm: "flex" } }}>
          <HelpOutlineIcon sx={{ width: 20, height: 20 }} />
        </IconButton>

        {/* Avatar */}
        <Avatar
          sx={{
            width: 32,
            height: 32,
            fontSize: 13,
            fontWeight: 700,
            bgcolor: "#7c3aed",
            color: "#fff",
          }}
        >
          PS
        </Avatar>

        {/* Logout */}
        <Button
          sx={{
            display: { xs: "none", sm: "inline-flex" },
            color: "#e2e6ee",
            bgcolor: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "6px",
            textTransform: "none",
            fontSize: 13,
            fontWeight: 600,
            px: 1.75,
            py: 0.6,
            minWidth: 0,
            "&:hover": { bgcolor: "rgba(255,255,255,0.1)" },
          }}
        >
          Logout
        </Button>
      </Stack>
    </Toolbar>
  );
}