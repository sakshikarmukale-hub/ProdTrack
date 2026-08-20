import { useState } from "react";

import Box from "@mui/material/Box";

import SignIn from "./components/SignIn.jsx";
import GuideUpdateModal from "./components/GuideUpdateModal.jsx";

import DashboardLayout from "./layouts/DashboardLayout.jsx";

// ======================================================
// INDEXER PAGES
// ======================================================

import IndexerDashboard from "./pages/Indexer/IndexerDashboard.jsx";
import IndexerDailyEntry from "./pages/Indexer/IndexerDailyEntry.jsx";
import IndexerProjects from "./pages/Indexer/IndexerProjects.jsx";
import IndexerIndexingGuide from "./pages/Indexer/IndexerIndexingGuide.jsx";
import IndexerCorrectionRequests from "./pages/Indexer/IndexerCorrectionRequests.jsx";
import IndexerAttendance from "./pages/Indexer/IndexerAttendance.jsx";
import IndexerNotifications from "./pages/Indexer/IndexerNotifications.jsx";
import IndexerMyProfile from "./pages/Indexer/IndexerMyProfile.jsx";

// ======================================================
// COMMON PAGE
// ======================================================

import Reports from "./pages/Reports.jsx";

export default function App() {
  // ======================================================
  // STATE
  // ======================================================

  const [user, setUser] = useState(null);

  const [currentPage, setCurrentPage] =
    useState("dashboard");

  const [showGuideModal, setShowGuideModal] =
    useState(false);

  // ======================================================
  // LOGIN
  // ======================================================

  const handleLogin = (loggedInUser) => {
    setUser(loggedInUser);

    setCurrentPage("dashboard");

    // Guide popup only for Indexer
    if (loggedInUser?.roleKey === "indexer") {
      setShowGuideModal(true);
    } else {
      setShowGuideModal(false);
    }
  };

  // ======================================================
  // LOGOUT
  // ======================================================

  const handleLogout = () => {
    setUser(null);

    setCurrentPage("dashboard");

    setShowGuideModal(false);
  };

  // ======================================================
  // NAVIGATION
  // ======================================================

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  // ======================================================
  // SIGN IN PAGE
  // ======================================================

  if (!user) {
    return (
      <SignIn
        onLogin={handleLogin}
      />
    );
  }

  // ======================================================
  // INDEXER PAGE RENDERING
  // ======================================================

  const renderIndexerPage = () => {
    switch (currentPage) {
      // --------------------------------------------------
      // DASHBOARD
      // --------------------------------------------------

      case "dashboard":
        return (
          <IndexerDashboard
            onNavigate={handleNavigate}
          />
        );

      // --------------------------------------------------
      // DAILY ENTRY
      // --------------------------------------------------

      case "daily-entry":
        return (
          <IndexerDailyEntry
            onNavigate={handleNavigate}
          />
        );

      // --------------------------------------------------
      // PROJECTS
      // --------------------------------------------------

      case "projects":
        return (
          <IndexerProjects
            onNavigate={handleNavigate}
          />
        );

      // --------------------------------------------------
      // INDEXING GUIDE
      // --------------------------------------------------

      case "indexing-guide":
        return (
          <IndexerIndexingGuide
            onNavigate={handleNavigate}
          />
        );

      // --------------------------------------------------
      // CORRECTION REQUESTS
      // --------------------------------------------------

      case "correction-requests":
        return (
          <IndexerCorrectionRequests
            onNavigate={handleNavigate}
          />
        );

      // --------------------------------------------------
      // REPORTS
      // --------------------------------------------------

      case "reports":
        return (
          <Reports
            user={user}
            roleKey={user.roleKey}
            onNavigate={handleNavigate}
          />
        );

      // --------------------------------------------------
      // ATTENDANCE
      // --------------------------------------------------

      case "attendance":
        return (
          <IndexerAttendance
            onNavigate={handleNavigate}
          />
        );

      // --------------------------------------------------
      // NOTIFICATIONS
      // --------------------------------------------------

      case "notifications":
        return (
          <IndexerNotifications
            onNavigate={handleNavigate}
          />
        );

      // --------------------------------------------------
      // MY PROFILE
      // --------------------------------------------------

      case "my-profile":
        return (
          <IndexerMyProfile
            user={user}
            onNavigate={handleNavigate}
          />
        );

      // --------------------------------------------------
      // DEFAULT
      // --------------------------------------------------

      default:
        return (
          <IndexerDashboard
            onNavigate={handleNavigate}
          />
        );
    }
  };

  // ======================================================
  // ROLE PAGE RENDERING
  // ======================================================

  const renderPage = () => {
    // ====================================================
    // INDEXER
    // ====================================================

    if (user.roleKey === "indexer") {
      return renderIndexerPage();
    }

    // ====================================================
    // TEAM LEAD
    // ====================================================

    if (user.roleKey === "teamLead") {
      if (currentPage === "reports") {
        return (
          <Reports
            user={user}
            roleKey={user.roleKey}
            onNavigate={handleNavigate}
          />
        );
      }

      return (
        <Box
          sx={{
            bgcolor: "#ffffff",

            borderRadius: 2,

            p: 3,
          }}
        >
          Team Lead pages will be connected next.
        </Box>
      );
    }

    // ====================================================
    // CORE TEAM
    // ====================================================

    if (user.roleKey === "coreTeam") {
      if (currentPage === "reports") {
        return (
          <Reports
            user={user}
            roleKey={user.roleKey}
            onNavigate={handleNavigate}
          />
        );
      }

      return (
        <Box
          sx={{
            bgcolor: "#ffffff",

            borderRadius: 2,

            p: 3,
          }}
        >
          Core Team pages will be connected next.
        </Box>
      );
    }

    // ====================================================
    // ADMINISTRATOR
    // ====================================================

    if (user.roleKey === "administrator") {
      if (currentPage === "reports") {
        return (
          <Reports
            user={user}
            roleKey={user.roleKey}
            onNavigate={handleNavigate}
          />
        );
      }

      return (
        <Box
          sx={{
            bgcolor: "#ffffff",

            borderRadius: 2,

            p: 3,
          }}
        >
          Administrator pages will be connected next.
        </Box>
      );
    }

    // ====================================================
    // UNKNOWN ROLE
    // ====================================================

    return (
      <Box
        sx={{
          bgcolor: "#ffffff",

          borderRadius: 2,

          p: 3,
        }}
      >
        User role not found.
      </Box>
    );
  };

  // ======================================================
  // MAIN APPLICATION
  // ======================================================

  return (
    <>
      {/* ==================================================
          MAIN DASHBOARD
      ================================================== */}

      <DashboardLayout
        user={user}
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onLogout={handleLogout}
      >
        {renderPage()}
      </DashboardLayout>

      {/* ==================================================
          INDEXER GUIDE UPDATE POPUP

          This will ONLY render for Indexer.
      ================================================== */}

      {user?.roleKey === "indexer" && (
        <GuideUpdateModal
          open={showGuideModal}
          onClose={() =>
            setShowGuideModal(false)
          }
        />
      )}
    </>
  );
}