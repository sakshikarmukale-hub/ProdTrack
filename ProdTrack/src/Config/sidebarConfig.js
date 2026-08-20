// src/config/sidebarConfig.js

export const sidebarConfig = {
  // =========================================================
  // INDEXER
  // =========================================================

  indexer: [
    {
      label: "Dashboard",
      icon: "🏠",
      page: "dashboard",
    },
    {
      label: "Daily Entry",
      icon: "📝",
      page: "daily-entry",
    },
    {
      label: "Projects",
      icon: "📁",
      page: "projects",
    },
    {
      label: "Indexing Guide",
      icon: "📘",
      page: "indexing-guide",
      badge: {
        text: "NEW",
        color: "success",
      },
    },
    {
      label: "Correction Requests",
      icon: "🖍️",
      page: "correction-requests",
    },
    {
      label: "Reports",
      icon: "📊",
      page: "reports",
    },
    {
      label: "Attendance",
      icon: "🗓️",
      page: "attendance",
    },
    {
      label: "Notifications",
      icon: "🔔",
      page: "notifications",
      badge: {
        text: "2",
        color: "error",
        dot: true,
      },
    },
    {
      label: "My Profile",
      icon: "👤",
      page: "my-profile",
    },
  ],

  // =========================================================
  // TEAM LEAD
  // =========================================================

  teamLead: [
    {
      label: "Dashboard",
      icon: "🏠",
      page: "dashboard",
    },
    {
      label: "Daily Entry",
      icon: "📝",
      page: "daily-entry",
    },
    {
      label: "My Team",
      icon: "👥",
      page: "my-team",
    },
    {
      label: "Projects",
      icon: "📁",
      page: "projects",
    },
    {
      label: "Indexing Guide",
      icon: "📘",
      page: "indexing-guide",
      badge: {
        text: "NEW",
        color: "success",
      },
    },
    {
      label: "Approvals",
      icon: "✅",
      page: "approvals",
      badge: {
        text: "4",
        color: "error",
        dot: true,
      },
    },
    {
      label: "Reports",
      icon: "📊",
      page: "reports",
    },
    {
      label: "Attendance",
      icon: "🗓️",
      page: "attendance",
    },
    {
      label: "Notifications",
      icon: "🔔",
      page: "notifications",
      badge: {
        text: "3",
        color: "error",
        dot: true,
      },
    },
    {
      label: "My Profile",
      icon: "👤",
      page: "my-profile",
    },
  ],

  // =========================================================
  // CORE TEAM
  // =========================================================

  coreTeam: [
    {
      label: "Dashboard",
      icon: "🏠",
      page: "dashboard",
    },
    {
      label: "Analytics & KPIs",
      icon: "📈",
      page: "analytics-kpis",
    },
    {
      label: "Project Master",
      icon: "📁",
      page: "project-master",
    },
    {
      label: "Users",
      icon: "👥",
      page: "users",
    },
    {
      label: "Assignment Matrix",
      icon: "🔗",
      page: "assignment-matrix",
    },
    {
      label: "Guide Manager",
      icon: "📘",
      page: "guide-manager",
    },
    {
      label: "Corrections",
      icon: "✅",
      page: "corrections",
      badge: {
        text: "6",
        color: "error",
        dot: true,
      },
    },
    {
      label: "Reports",
      icon: "📊",
      page: "reports",
    },
    {
      label: "Compliance",
      icon: "🛡️",
      page: "compliance",
    },
    {
      label: "Notifications",
      icon: "🔔",
      page: "notifications",
    },
  ],

  // =========================================================
  // ADMINISTRATOR
  // =========================================================

  administrator: [
    {
      label: "Dashboard",
      icon: "🏠",
      page: "dashboard",
    },
    {
      label: "User Master",
      icon: "👥",
      page: "user-master",
    },
    {
      label: "Project Master",
      icon: "📁",
      page: "project-master",
    },
    {
      label: "Assignment Matrix",
      icon: "🔗",
      page: "assignment-matrix",
    },
    {
      label: "Guide Manager",
      icon: "📘",
      page: "guide-manager",
    },
    {
      label: "Locking Rules",
      icon: "🔒",
      page: "locking-rules",
    },
    {
      label: "Corrections",
      icon: "✅",
      page: "corrections",
    },
    {
      label: "Analytics & KPIs",
      icon: "📈",
      page: "analytics-kpis",
    },
    {
      label: "Reports",
      icon: "📊",
      page: "reports",
    },
    {
      label: "Audit Log",
      icon: "📜",
      page: "audit-log",
    },
    {
      label: "Settings",
      icon: "⚙️",
      page: "settings",
    },
  ],
};

export default sidebarConfig;