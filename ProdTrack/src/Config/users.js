export const USERS = {
  "priya.indexer": {
    username: "priya.indexer",
    password: "demo123",

    name: "Priya Sharma",
    role: "Indexer",
    roleKey: "indexer",

    dashboardPath: "/indexer/dashboard",
  },

  "rohan.lead": {
    username: "rohan.lead",
    password: "demo123",

    name: "Rohan Mehta",
    role: "Team Lead",
    roleKey: "teamLead",

    dashboardPath: "/team-lead/dashboard",
  },

  "meera.core": {
    username: "meera.core",
    password: "demo123",

    name: "Meera Iyer",
    role: "Core Team",
    roleKey: "coreTeam",

    dashboardPath: "/core-team/dashboard",
  },

  admin: {
    username: "admin",
    password: "demo123",

    name: "Admin User",
    role: "Administrator",
    roleKey: "administrator",

    dashboardPath: "/administrator/dashboard",
  },
};


// Used by SignIn.jsx to show the demo accounts
export const DEMO_ACCOUNTS = Object.values(USERS);


// Login helper
export const authenticateUser = (username, password) => {
  const cleanUsername = username.trim();

  const user = USERS[cleanUsername];

  if (!user) {
    return null;
  }

  if (user.password !== password) {
    return null;
  }

  return user;
};