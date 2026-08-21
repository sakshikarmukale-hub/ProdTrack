import {
  Box,
  Typography,
  Button,
  Card,
  Chip,
  Avatar,
} from "@mui/material";

import AddRoundedIcon from "@mui/icons-material/AddRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

const requests = [
  {
    project: "ABC Medical Imaging",
    date: "19 May",
    field: "Implant Name",
    change: "ABC Screw 5.0 → ABC Screw 5.5",
  },
  {
    project: "ABC Medical Imaging",
    date: "19 May",
    field: "Implant Name",
    change: "ABC Screw 5.0 → ABC Screw 5.5",
  },
];

export default function IndexerCorrectionRequests() {
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      {/* =================================================
          HEADER
      ================================================= */}

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          mb: 2.2,
          gap: 2,
        }}
      >
        <Box>
          <Typography
            sx={{
              color: "#6b7b91",
              fontSize: 13,
              mb: 0.7,
            }}
          >
            ProdTrack · Indexer
          </Typography>

          <Typography
            sx={{
              fontSize: 25,
              fontWeight: 800,
              color: "#17233a",
            }}
          >
            My correction requests
          </Typography>

          <Typography
            sx={{
              mt: 0.7,
              color: "#718096",
              fontSize: 14,
            }}
          >
            Request changes to locked entries. Each request is reviewed before
            the audit log updates.
          </Typography>
        </Box>

        <Button
          variant="contained"
          startIcon={<AddRoundedIcon />}
          sx={{
            mt: 1,

            height: 38,

            px: 1.8,

            borderRadius: "8px",

            textTransform: "none",

            fontWeight: 700,

            boxShadow: "none",

            backgroundColor: "#2f6df6",

            flexShrink: 0,

            "&:hover": {
              backgroundColor: "#2458cf",
              boxShadow: "none",
            },
          }}
        >
          New request
        </Button>
      </Box>

      {/* =================================================
          WORKFLOW
      ================================================= */}

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 0.8,
          mb: 2.2,
          flexWrap: "wrap",
        }}
      >
        {[
          "Indexer submits",
          "Lead / Core review",
          "Approve / Reject",
          "Audit log update",
        ].map((item, index) => (
          <Box
            key={item}
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                px: 1.6,
                py: 1,

                borderRadius: "8px",

                border: "1px solid #d7e0eb",

                backgroundColor:
                  index === 0 ? "#2f6df6" : "#fff",

                color:
                  index === 0 ? "#fff" : "#263b59",

                fontSize: 12,

                fontWeight: 700,
              }}
            >
              {item}
            </Box>

            {index !== 3 && (
              <ArrowForwardRoundedIcon
                sx={{
                  mx: 0.4,
                  color: "#8190a5",
                  fontSize: 17,
                }}
              />
            )}
          </Box>
        ))}
      </Box>

      {/* =================================================
          REQUEST TABLE
      ================================================= */}

      <Card
        elevation={0}
        sx={{
          border: "1px solid #dce3ec",

          borderRadius: "10px",

          boxShadow: "0 4px 12px rgba(15,23,42,.05)",

          overflow: "hidden",

          backgroundColor: "#fff",
        }}
      >
        {/* ================= TABLE HEADER ================= */}

        <Box
          sx={{
            display: "grid",

            gridTemplateColumns:
              "1.5fr .75fr 1fr 2fr 1.35fr .8fr",

            px: 1.6,
            py: 1.2,

            backgroundColor: "#f8fafc",

            borderBottom: "1px solid #dce3ec",

            columnGap: 1,
          }}
        >
          {[
            "PROJECT",
            "PROD. DATE",
            "FIELD",
            "OLD → NEW",
            "REQUESTED BY",
            "STATUS",
          ].map((header) => (
            <Typography
              key={header}
              sx={{
                fontSize: 10,

                fontWeight: 700,

                color: "#64748b",
              }}
            >
              {header}
            </Typography>
          ))}
        </Box>

        {/* ================= TABLE ROWS ================= */}

        {requests.map((request, index) => (
          <Box
            key={index}
            sx={{
              display: "grid",

              gridTemplateColumns:
                "1.5fr .75fr 1fr 2fr 1.35fr .8fr",

              px: 1.6,
              py: 1.4,

              columnGap: 1,

              alignItems: "center",

              borderBottom:
                index !== requests.length - 1
                  ? "1px solid #e6ebf1"
                  : "none",
            }}
          >
            {/* PROJECT */}

            <Typography
              sx={{
                fontSize: 12,
                color: "#243b5a",
              }}
            >
              {request.project}
            </Typography>

            {/* DATE */}

            <Typography
              sx={{
                fontSize: 12,
                color: "#243b5a",
              }}
            >
              {request.date}
            </Typography>

            {/* FIELD */}

            <Typography
              sx={{
                fontSize: 12,
                color: "#243b5a",
              }}
            >
              {request.field}
            </Typography>

            {/* OLD → NEW */}

            <Typography
              sx={{
                fontSize: 12,
                color: "#66768c",
              }}
            >
              {request.change}
            </Typography>

            {/* REQUESTED BY */}

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.8,
              }}
            >
              <Avatar
                sx={{
                  width: 24,
                  height: 24,

                  fontSize: 10,

                  fontWeight: 700,

                  backgroundColor: "#6366df",
                }}
              >
                PS
              </Avatar>

              <Typography
                sx={{
                  fontSize: 12,
                  color: "#243b5a",
                }}
              >
                Priya Sharma
              </Typography>
            </Box>

            {/* STATUS */}

            <Chip
              label="PENDING"
              size="small"
              sx={{
                width: "fit-content",

                height: 22,

                backgroundColor: "#fff4db",

                color: "#c27a12",

                border: "1px solid #f2d39b",

                fontSize: 9,

                fontWeight: 800,
              }}
            />
          </Box>
        ))}
      </Card>
    </Box>
  );
}