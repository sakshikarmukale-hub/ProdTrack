import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import Alert from "@mui/material/Alert";

export default function IndexerMyProfile() {
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      {/* =====================================================
          BREADCRUMB
      ===================================================== */}

      <Typography
        sx={{
          fontSize: 12,
          color: "#64748b",
          mb: 0.5,
        }}
      >
        ProdTrack · Indexer
      </Typography>

      {/* =====================================================
          PAGE HEADER
      ===================================================== */}

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          mb: 2.5,
          gap: 2,
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: 25,
              lineHeight: 1.2,
              fontWeight: 700,
              color: "#10243e",
              mb: 0.8,
            }}
          >
            My profile
          </Typography>

          <Typography
            sx={{
              fontSize: 14,
              color: "#64748b",
            }}
          >
            Your account details and assigned projects.
          </Typography>
        </Box>

        <Button
          variant="outlined"
          sx={{
            textTransform: "none",

            fontSize: 14,
            fontWeight: 600,

            color: "#17365d",

            borderColor: "#d7dee8",

            backgroundColor: "#ffffff",

            borderRadius: 1.5,

            px: 2,
            py: 1,

            minWidth: 140,

            flexShrink: 0,

            "&:hover": {
              borderColor: "#b8c4d4",
              backgroundColor: "#ffffff",
            },
          }}
        >
          Reset password
        </Button>
      </Box>

      {/* =====================================================
          MAIN CARDS
      ===================================================== */}

      <Grid
        container
        spacing={2.5}
        alignItems="stretch"
      >
        {/* =================================================
            ACCOUNT CARD
        ================================================= */}

        <Grid
          size={{
            xs: 12,
            md: 7,
          }}
        >
          <Card
            elevation={0}
            sx={{
              height: "100%",

              minHeight: 355,

              border: "1px solid #dce3ec",

              borderRadius: 2,

              backgroundColor: "#ffffff",

              boxShadow:
                "0 3px 12px rgba(15, 23, 42, 0.06)",

              overflow: "hidden",
            }}
          >
            {/* CARD HEADER */}

            <Box
              sx={{
                px: 2.5,
                py: 2,

                borderBottom:
                  "1px solid #e1e7ef",
              }}
            >
              <Typography
                sx={{
                  fontSize: 16,
                  fontWeight: 700,
                  color: "#172b46",
                }}
              >
                Account
              </Typography>
            </Box>

            {/* ACCOUNT FIELDS */}

            <Box
              sx={{
                p: 2.5,
              }}
            >
              <Grid
                container
                spacing={2}
              >
                {/* EMPLOYEE ID */}

                <Grid
                  size={{
                    xs: 12,
                    sm: 6,
                  }}
                >
                  <ProfileField
                    label="Employee ID"
                    value="EMP-1042"
                  />
                </Grid>

                {/* FULL NAME */}

                <Grid
                  size={{
                    xs: 12,
                    sm: 6,
                  }}
                >
                  <ProfileField
                    label="Full name"
                    value="Priya Sharma"
                  />
                </Grid>

                {/* EMAIL */}

                <Grid
                  size={{
                    xs: 12,
                    sm: 6,
                  }}
                >
                  <ProfileField
                    label="Email"
                    value="priyaindexer@company.com"
                  />
                </Grid>

                {/* DEPARTMENT */}

                <Grid
                  size={{
                    xs: 12,
                    sm: 6,
                  }}
                >
                  <ProfileField
                    label="Department"
                    value="Indexing Ops"
                  />
                </Grid>

                {/* DESIGNATION */}

                <Grid
                  size={{
                    xs: 12,
                    sm: 6,
                  }}
                >
                  <ProfileField
                    label="Designation / Role"
                    value="Indexer"
                  />
                </Grid>

                {/* TEAM LEAD */}

                <Grid
                  size={{
                    xs: 12,
                    sm: 6,
                  }}
                >
                  <ProfileField
                    label="Team lead"
                    value="Rohan Mehta"
                  />
                </Grid>
              </Grid>
            </Box>
          </Card>
        </Grid>

        {/* =================================================
            ASSIGNED PROJECTS CARD
        ================================================= */}

        <Grid
          size={{
            xs: 12,
            md: 5,
          }}
        >
          <Card
            elevation={0}
            sx={{
              height: "100%",

              minHeight: 355,

              border: "1px solid #dce3ec",

              borderRadius: 2,

              backgroundColor: "#ffffff",

              boxShadow:
                "0 3px 12px rgba(15, 23, 42, 0.06)",

              overflow: "hidden",
            }}
          >
            {/* CARD HEADER */}

            <Box
              sx={{
                px: 2.5,
                py: 2,

                borderBottom:
                  "1px solid #e1e7ef",
              }}
            >
              <Typography
                sx={{
                  fontSize: 16,
                  fontWeight: 700,
                  color: "#172b46",
                }}
              >
                Assigned projects
              </Typography>
            </Box>

            {/* PROJECT CONTENT */}

            <Box
              sx={{
                p: 2.5,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 1,
                  mb: 3,
                }}
              >
                {/* ABC MEDICAL */}

                <Chip
                  label="ABC Medical Imaging"
                  size="small"
                  sx={{
                    height: 30,

                    backgroundColor: "#e4f6ef",

                    color: "#16845e",

                    fontSize: 12,

                    fontWeight: 500,

                    borderRadius: 2,

                    "& .MuiChip-label": {
                      px: 1.5,
                    },
                  }}
                />

                {/* ORTHO KIDS */}

                <Chip
                  label="Ortho Kids"
                  size="small"
                  sx={{
                    height: 30,

                    backgroundColor: "#fff3df",

                    color: "#c78316",

                    fontSize: 12,

                    fontWeight: 500,

                    borderRadius: 2,

                    "& .MuiChip-label": {
                      px: 1.5,
                    },
                  }}
                />

                {/* SPINE INDEXING */}

                <Chip
                  label="Spine Indexing"
                  size="small"
                  sx={{
                    height: 30,

                    backgroundColor: "#f0e9ff",

                    color: "#7c45c7",

                    fontSize: 12,

                    fontWeight: 500,

                    borderRadius: 2,

                    "& .MuiChip-label": {
                      px: 1.5,
                    },
                  }}
                />
              </Box>

              {/* INFORMATION ALERT */}

              <Alert
                severity="info"
                icon={
                  <Box
                    component="span"
                    sx={{
                      fontSize: 16,
                      fontWeight: 700,
                      lineHeight: 1,
                    }}
                  >
                    ℹ
                  </Box>
                }
                sx={{
                  border:
                    "1px solid #c7dbff",

                  backgroundColor:
                    "#edf4ff",

                  color: "#315a92",

                  borderRadius: 1.5,

                  alignItems: "flex-start",

                  py: 1.2,

                  "& .MuiAlert-icon": {
                    color: "#3182ce",

                    mt: "2px",

                    mr: 1.2,
                  },

                  "& .MuiAlert-message": {
                    fontSize: 13,

                    lineHeight: 1.6,

                    padding: 0,
                  },
                }}
              >
                You only see updates and entries for projects assigned to you.
                Contact your admin to change assignments.
              </Alert>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

/* =========================================================
   REUSABLE PROFILE FIELD
========================================================= */

function ProfileField({ label, value }) {
  return (
    <Box>
      <Typography
        sx={{
          fontSize: 13,

          fontWeight: 500,

          color: "#17365d",

          mb: 0.8,
        }}
      >
        {label}
      </Typography>

      <Box
        sx={{
          height: 48,

          display: "flex",

          alignItems: "center",

          px: 1.5,

          border:
            "1px solid #d9e0e8",

          borderRadius: 1.5,

          backgroundColor:
            "#f4f6f9",
        }}
      >
        <Typography
          sx={{
            fontSize: 14,

            color: "#71819a",

            fontWeight: 400,
          }}
        >
          {value}
        </Typography>
      </Box>
    </Box>
  );
}