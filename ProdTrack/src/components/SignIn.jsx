import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Link,
  Paper,
  Stack,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

const demoAccounts = [
  { user: "priya.indexer", role: "Indexer" },
  { user: "rohan.lead", role: "Team Lead" },
  { user: "meera.core", role: "Core Team" },
  { user: "admin", role: "Administrator" },
];

const features = [
  "Role-based dashboards — see only what's assigned to you",
  "Daily entry with Draft → Submit → Review → Lock workflow",
  "Mandatory indexing-guide acknowledgement on login",
  "Live KPIs, correction requests and audit trail",
];

export default function SignIn() {
  const [username, setUsername] = useState("priya.indexer");
  const [password, setPassword] = useState("demo123");
  const [keepSignedIn, setKeepSignedIn] = useState(true);

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: { xs: "column", lg: "row" },
        bgcolor: "#EEF1F6",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        overflow: "hidden",
      }}
    >
      {/* LEFT PANEL */}
      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          overflow: "hidden",
          px: { xs: 4, sm: 7, lg: 7 },
          py: { xs: 5, lg: 7 },
          height: { xs: 420, lg: "100vh" },
          width: { lg: "50%" },
          flexShrink: 0,
          background:
            "radial-gradient(900px 500px at 15% 10%, rgba(47, 109, 240, .35), transparent 60%), radial-gradient(700px 500px at 85% 90%, rgba(122, 81, 214, .30), transparent 60%), linear-gradient(160deg, #0d1a2e, #12253f 55%, #0c1728)",
        }}
      >
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

        {/* Middle content */}
        <Box sx={{ mt: { xs: 8, lg: 0 } }}>
          <Typography
            sx={{
              color: "#fff",
              fontSize: { xs: 34, sm: 40 },
              lineHeight: 1.15,
              fontWeight: 800,
              letterSpacing: "-0.01em",
              mb: 2.5,
            }}
          >
            Daily Production
            <br />
            Tracking Application
          </Typography>

          <Typography
            sx={{
              color: "rgba(203, 213, 225, 0.8)",
              fontSize: 15,
              lineHeight: 1.6,
              maxWidth: 420,
              mb: 3.5,
            }}
          >
            One place for indexers, team leads and the core team to log daily
            production, track backlogs, acknowledge guide updates, and stay
            on top of KPIs.
          </Typography>

          <Stack spacing={1.75}>
            {features.map((f) => (
              <Stack key={f} direction="row" alignItems="flex-start" spacing={1.5}>
                <Box
                  sx={{
                    mt: 0.25,
                    width: 20,
                    height: 20,
                    borderRadius: "5px",
                    bgcolor: "rgba(16, 185, 129, 0.2)",
                    border: "1px solid rgba(52, 211, 153, 0.4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <CheckIcon sx={{ fontSize: 13, color: "#34d399" }} />
                </Box>
                <Typography sx={{ color: "#e2e8f0", fontSize: 14.5, lineHeight: 1.4 }}>
                  {f}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Box>

        {/* Footer */}
        <Typography
          sx={{
            display: { xs: "none", lg: "block" },
            color: "#64748b",
            fontSize: 12,
            mt: 7,
          }}
        >
          DPTA Initiative · Internal build · v0.9 prototype
        </Typography>
      </Box>

      {/* RIGHT PANEL */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: { xs: 2.5, sm: 5, lg: 7 },
          py: { xs: 6, lg: 7 },
          bgcolor: "#EEF1F6",
          height: "100%",
          overflow: "hidden",
        }}
      >
        <Box sx={{ width: "100%", maxWidth: 400 }}>
          <Typography sx={{ fontSize: 26, fontWeight: 800, color: "#0f172a", mb: 0.75 }}>
            Sign in
          </Typography>
          <Typography sx={{ color: "#64748b", fontSize: 14.5, mb: 3 }}>
            Use your work account or a demo login below.
          </Typography>

          <Typography sx={{ fontSize: 13, fontWeight: 700, color: "#1e293b", mb: 0.75 }}>
            Username
          </Typography>
          <TextField
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            sx={{
              mb: 2,
              "& .MuiOutlinedInput-root": {
                borderRadius: "8px",
                bgcolor: "#fff",
                fontSize: 15,
                "& fieldset": { borderColor: "#d6dbe3" },
                "&:hover fieldset": { borderColor: "#94a3b8" },
                "&.Mui-focused fieldset": { borderColor: "#6a5ef0", borderWidth: "1.5px" },
              },
              "& .MuiOutlinedInput-input": { py: 1.1 },
            }}
          />

          <Typography sx={{ fontSize: 13, fontWeight: 700, color: "#1e293b", mb: 0.75 }}>
            Password
          </Typography>
          <TextField
            fullWidth
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{
              mb: 2,
              "& .MuiOutlinedInput-root": {
                borderRadius: "8px",
                bgcolor: "#fff",
                fontSize: 15,
                "& fieldset": { borderColor: "#d6dbe3" },
                "&:hover fieldset": { borderColor: "#94a3b8" },
                "&.Mui-focused fieldset": { borderColor: "#6a5ef0", borderWidth: "1.5px" },
              },
              "& .MuiOutlinedInput-input": { py: 1.1 },
            }}
          />

          <Stack direction="row" alignItems="center" justifyContent="flex-start" spacing={1.5} sx={{ mb: 2.5 }}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={keepSignedIn}
                  onChange={() => setKeepSignedIn((v) => !v)}
                  sx={{
                    color: "#cbd5e1",
                    p: 0,
                    mr: 1,
                    borderRadius: "4px",
                    "&.Mui-checked": { color: "#4f46e5" },
                  }}
                />
              }
              label={
                <Typography sx={{ fontSize: 13.5, color: "#334155" }}>
                  Keep me signed in
                </Typography>
              }
              sx={{ ml: 0 }}
            />
            <Link
              href="#"
              underline="none"
              sx={{
                fontSize: 13.5,
                fontWeight: 600,
                color: "#4f46e5",
                "&:hover": { color: "#4338ca" },
              }}
            >
              Forgot password?
            </Link>
          </Stack>

          <Button
            fullWidth
            variant="contained"
            disableElevation
            sx={{
              borderRadius: "8px",
              py: 1.4,
              fontSize: 15,
              fontWeight: 600,
              textTransform: "none",
              bgcolor: "#5b4fe0",
              boxShadow: "0 1px 2px rgba(0,0,0,0.08)",
              mb: 2.5,
              "&:hover": { bgcolor: "#4c40d4", boxShadow: "0 1px 2px rgba(0,0,0,0.08)" },
            }}
          >
            Sign in
          </Button>

          {/* Info box */}
          <Stack
            direction="row"
            spacing={1.25}
            alignItems="flex-start"
            sx={{
              bgcolor: "#eef2ff",
              border: "1px solid #e0e7ff",
              borderRadius: "8px",
              px: 1.75,
              py: 1.5,
              mb: 2.5,
            }}
          >
            <Box
              sx={{
                width: 18,
                height: 18,
                borderRadius: "4px",
                bgcolor: "#5eb1a3",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                mt: 0.25,
              }}
            >
              <Typography sx={{ color: "#fff", fontSize: 11, fontWeight: 800, lineHeight: 1 }}>
                i
              </Typography>
            </Box>
            <Typography sx={{ fontSize: 13, lineHeight: 1.5, color: "#475569" }}>
              SSO via Microsoft Entra ID is the preferred method in
              production. Username &amp; password shown here for the
              prototype.
            </Typography>
          </Stack>

          {/* Demo accounts */}
          <Paper
            variant="outlined"
            sx={{ borderRadius: "8px", borderColor: "#e2e8f0", overflow: "hidden" }}
          >
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "auto 1fr auto",
                alignItems: "center",
                columnGap: 2,
                px: 2,
                py: 1.25,
                borderBottom: "1px solid #e2e8f0",
                bgcolor: "#f8fafc",
              }}
            >
              <Typography sx={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.03em", color: "#64748b" }}>
                DEMO ACCOUNTS
              </Typography>
              <Box />
              <Typography sx={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.03em", color: "#64748b", justifySelf: "end" }}>
                PASSWORD: DEMO123
              </Typography>
            </Box>

            {demoAccounts.map((acc, i) => (
              <Box
                key={acc.user}
                sx={{
                  display: "grid",
                  gridTemplateColumns: "auto 1fr auto",
                  alignItems: "center",
                  columnGap: 2,
                  px: 2,
                  py: 1.25,
                  borderBottom: i !== demoAccounts.length - 1 ? "1px solid #f1f5f9" : "none",
                }}
              >
                <Typography
                  sx={{
                    fontSize: 13.5,
                    fontWeight: 700,
                    color: "#1e293b",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {acc.user}
                </Typography>
                <Typography
                  sx={{
                    fontSize: 12.5,
                    color: "#94a3b8",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    textAlign: "center",
                    justifySelf: "center",
                    minWidth: 0,
                    width: "100%",
                  }}
                >
                  {acc.role}
                </Typography>
                <Button
                  onClick={() => setUsername(acc.user)}
                  sx={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#4f46e5",
                    textTransform: "none",
                    minWidth: 0,
                    p: 0,
                    justifySelf: "end",
                    "&:hover": { color: "#4338ca", bgcolor: "transparent" },
                  }}
                >
                  Use →
                </Button>
              </Box>
            ))}
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}