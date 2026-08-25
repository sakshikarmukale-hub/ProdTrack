import { useState } from "react";
import SignIn from "./components/SignIn.jsx";
import GuideUpdateModal from "./components/GuideUpdateModal.jsx";
import DashboardLayout from "./Layouts/DashboardLayout.jsx";
import IDashboard from "./pages/Indexer/Dashboard.jsx";
import IDaily from "./pages/Indexer/DailyEntry.jsx";
import IProjects from "./pages/Indexer/Projects.jsx";
import IGuide from "./pages/Indexer/IndexingGuide.jsx";
import IAttendance from "./pages/Indexer/Attendance.jsx";
import TDashboard from "./pages/TeamLead/Dashboard.jsx";
import TDaily from "./pages/TeamLead/DailyEntry.jsx";
import TProjects from "./pages/TeamLead/Projects.jsx";
import TGuide from "./pages/TeamLead/IndexingGuide.jsx";
import TAttendance from "./pages/TeamLead/Attendance.jsx";
import TMyTeam from "./pages/TeamLead/MyTeam.jsx";
import CDashboard from "./pages/CoreTeam/Dashboard.jsx";
import CAnalytics from "./pages/CoreTeam/AnalyticsKpis.jsx";
import CProject from "./pages/CoreTeam/ProjectMaster.jsx";
import CUsers from "./pages/CoreTeam/UserMaster.jsx";
import CAssign from "./pages/CoreTeam/AssignmentMatrix.jsx";
import CGuide from "./pages/CoreTeam/GuideManager.jsx";
import CCorrections from "./pages/CoreTeam/Corrections.jsx";
import CCompliance from "./pages/CoreTeam/Compliance.jsx";
import ADashboard from "./pages/Administrator/Dashboard.jsx";
import AUsers from "./pages/Administrator/UserMaster.jsx";
import AProject from "./pages/Administrator/ProjectMaster.jsx";
import AAssign from "./pages/Administrator/AssignmentMatrix.jsx";
import AGuide from "./pages/Administrator/GuideManager.jsx";
import AAnalytics from "./pages/Administrator/AnalyticsKpis.jsx";
import ALocking from "./pages/Administrator/LockingRules.jsx";
import ACorrections from "./pages/Administrator/Corrections.jsx";
import AAudit from "./pages/Administrator/AuditLog.jsx";
import ASettings from "./pages/Administrator/Settings.jsx";
import MyProfile from "./pages/MyProfile.jsx";
import CorrectionApprovals from "./pages/CorrectionApprovals.jsx";
import Reports from "./pages/Reports.jsx";
import Notifications from "./pages/Notifications.jsx";
export default function App() {
  const [user, setUser] = useState(null);
  const [page, setPage] = useState("dashboard");
  const [guide, setGuide] = useState(false);
  const login = (u) => {
    setUser(u);
    setPage("dashboard");
    setGuide(u?.roleKey === "indexer");
  };
  const logout = () => {
    setUser(null);
    setPage("dashboard");
    setGuide(false);
  };
  if (!user) return <SignIn onLogin={login} />;
  const common = {
    "my-profile": <MyProfile user={user} />,
    corrections: <CorrectionApprovals />,
    reports: <Reports roleKey={user.roleKey} />,
    notifications: <Notifications />,
  };
  const role = {
    indexer: {
      dashboard: <IDashboard onNavigate={setPage} />,
      "daily-entry": <IDaily onNavigate={setPage} />,
      projects: <IProjects onNavigate={setPage} />,
      "indexing-guide": <IGuide onNavigate={setPage} />,
      attendance: <IAttendance onNavigate={setPage} />,
    },
    teamLead: {
      dashboard: <TDashboard onNavigate={setPage} />,
      "daily-entry": <TDaily onNavigate={setPage} />,
      projects: <TProjects onNavigate={setPage} />,
      "indexing-guide": <TGuide onNavigate={setPage} />,
      attendance: <TAttendance onNavigate={setPage} />,
      "my-team": <TMyTeam onNavigate={setPage} />,
    },
    coreTeam: {
      dashboard: <CDashboard onNavigate={setPage} />,
      "analytics-kpis": <CAnalytics />,
      "project-master": <CProject />,
      users: <CUsers />,
      "assignment-matrix": <CAssign />,
      "guide-manager": <CGuide />,
      corrections: <CCorrections />,
      compliance: <CCompliance />,
    },
    administrator: {
      dashboard: <ADashboard onNavigate={setPage} />,
      "project-master": <AProject />,
      users: <AUsers />,
      "assignment-matrix": <AAssign />,
      "guide-manager": <AGuide />,
      "locking-rules": <ALocking />,
      corrections: <ACorrections />,
      "analytics-kpis": <AAnalytics />,
      "audit-log": <AAudit />,
      settings: <ASettings />,
    },
  };
  const content =
    common[page] || role[user.roleKey]?.[page] || role[user.roleKey]?.dashboard;
  return (
    <>
      <DashboardLayout
        user={user}
        currentPage={page}
        onNavigate={setPage}
        onLogout={logout}
      >
        {content}
      </DashboardLayout>
      {user.roleKey === "indexer" && (
        <GuideUpdateModal open={guide} onClose={() => setGuide(false)} />
      )}
    </>
  );
}
