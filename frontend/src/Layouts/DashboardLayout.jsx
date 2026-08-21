import Box from "@mui/material/Box";

import Header from "../components/Header.jsx";
import Sidebar from "../components/Sidebar.jsx";

export default function DashboardLayout({
  user,
  currentPage,
  onNavigate,
  onLogout,
  children,
}) {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        bgcolor: "#eef2f7",
      }}
    >
      {/* SIDEBAR */}
      <Sidebar
        roleKey={user.roleKey}
        currentPage={currentPage}
        onNavigate={onNavigate}
        onSignOut={onLogout}
      />

      {/* RIGHT SIDE */}
      <Box
        sx={{
          flex: 1,
          minWidth: 0,
          height: "100vh",

          display: "flex",
          flexDirection: "column",

          overflow: "hidden",
        }}
      >
        {/* HEADER - DOES NOT SCROLL */}
        <Box
          sx={{
            flex: "0 0 auto",
            width: "100%",
          }}
        >
          <Header
            userName={user.name}
            role={user.role}
            onLogout={onLogout}
            onNotifications={() => onNavigate("notifications")}
          />
        </Box>

        {/* WHITE AREA WRAPPER */}
        <Box
          sx={{
            flex: "1 1 auto",
            minHeight: 0,
            minWidth: 0,

            position: "relative",

            bgcolor: "#eef2f7",

            overflow: "hidden",
          }}
        >
          {/* ACTUAL SCROLL AREA */}
          <Box
            component="main"
            sx={{
              position: "absolute",

              top: 0,
              left: 0,
              right: 0,
              bottom: 0,

              p: 3,

              overflowY: "auto",
              overflowX: "hidden",

              bgcolor: "#eef2f7",

              scrollbarGutter: "stable",
            }}
          >
            {children}

            {/* bottom space so last card can scroll fully */}
            <Box sx={{ height: 24 }} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}