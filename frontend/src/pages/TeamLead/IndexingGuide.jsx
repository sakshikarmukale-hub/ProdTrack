import { useState } from "react";

import {
  Box,
  Typography,
  Button,
  Card,
  Chip,
  Divider,
  Alert,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";

import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";

const sections = [
  "1. Overview",
  "2. General guidelines",
  "3. Indexing rules",
  "4. Field mapping",
  "5. Examples",
  "6. Appendices",
];

export default function TeamLeadIndexingGuide() {
  const [selected, setSelected] = useState(2);

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
          alignItems: "flex-end",
          mb: 2.3,
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
            ProdTrack · Team Lead
          </Typography>

          <Typography
            sx={{
              fontSize: 25,
              fontWeight: 800,
              color: "#17233a",
            }}
          >
            Indexing guide
          </Typography>

          <Typography
            sx={{
              mt: 0.7,
              color: "#718096",
              fontSize: 14,
            }}
          >
            ABC Medical Imaging Indexing Guide — the latest approved version.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: 1,
            flexShrink: 0,
          }}
        >
          <Button
            variant="outlined"
            sx={{
              height: 36,
              borderRadius: "8px",
              textTransform: "none",
              color: "#19345b",
              borderColor: "#d6dee9",
              backgroundColor: "#fff",
            }}
          >
            Version history
          </Button>

          <Button
            variant="contained"
            startIcon={<DownloadRoundedIcon />}
            sx={{
              height: 36,
              borderRadius: "8px",
              textTransform: "none",
              fontWeight: 700,
              boxShadow: "none",
              backgroundColor: "#2f6df6",

              "&:hover": {
                backgroundColor: "#2458cf",
                boxShadow: "none",
              },
            }}
          >
            Download
          </Button>
        </Box>
      </Box>

      {/* =================================================
          ACKNOWLEDGEMENT
      ================================================= */}

      <Alert
        icon={<WarningAmberRoundedIcon fontSize="small" />}
        sx={{
          mb: 2,
          border: "1px solid #f1d28a",
          borderRadius: "9px",
          backgroundColor: "#fff7df",
          color: "#805b14",

          "& .MuiAlert-icon": {
            color: "#dc9b20",
          },
        }}
      >
        <Typography
          component="span"
          sx={{
            fontSize: 13,
          }}
        >
          <strong>Acknowledgement pending.</strong> You must acknowledge v2.3
          before submitting entries for ABC Medical Imaging.{" "}
          <strong
            style={{
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Acknowledge now
          </strong>
        </Typography>
      </Alert>

      {/* =================================================
          GUIDE CARD
      ================================================= */}

      <Card
        elevation={0}
        sx={{
          border: "1px solid #dce3ec",
          borderRadius: "12px",
          boxShadow: "0 4px 14px rgba(15,23,42,.05)",
          overflow: "hidden",
          backgroundColor: "#fff",
        }}
      >
        {/* GUIDE TOP */}

        <Box
          sx={{
            minHeight: 46,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 1.75,
            gap: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.25,
            }}
          >
            <Typography
              sx={{
                fontSize: 14,
                fontWeight: 800,
                color: "#17233a",
              }}
            >
              ABC Medical Imaging Indexing Guide v2.3
            </Typography>

            <Chip
              label="LATEST"
              size="small"
              sx={{
                height: 23,
                backgroundColor: "#e3f7ed",
                color: "#17865d",
                border: "1px solid #b9e5d0",
                fontSize: 10,
                fontWeight: 800,
              }}
            />
          </Box>

          <Typography
            sx={{
              color: "#607087",
              fontSize: 12,
              whiteSpace: "nowrap",
            }}
          >
            Page 3 / 20
          </Typography>
        </Box>

        <Divider />

        {/* =================================================
            GUIDE BODY
        ================================================= */}

        <Box
          sx={{
            display: "flex",
            minHeight: 460,
          }}
        >
          {/* LEFT MENU */}

          <Box
            sx={{
              width: 205,
              borderRight: "1px solid #e2e7ee",
              p: 1.5,
              flexShrink: 0,
            }}
          >
            {sections.map((section, index) => (
              <Box
                key={section}
                onClick={() => setSelected(index)}
                sx={{
                  px: 1.25,
                  py: 1,
                  mb: 0.5,
                  borderRadius: "7px",
                  cursor: "pointer",

                  backgroundColor:
                    selected === index ? "#e6efff" : "transparent",

                  color:
                    selected === index ? "#2563eb" : "#27405f",

                  fontWeight:
                    selected === index ? 700 : 500,

                  fontSize: 13,
                }}
              >
                {section}
              </Box>
            ))}
          </Box>

          {/* CONTENT */}

          <Box
            sx={{
              flex: 1,
              px: 2.75,
              py: 2.5,
              minWidth: 0,
            }}
          >
            <Typography
              sx={{
                fontSize: 19,
                fontWeight: 800,
                color: "#17233a",
                mb: 2,
              }}
            >
              3. Indexing rules
            </Typography>

            <Typography
              sx={{
                fontSize: 14,
                fontWeight: 800,
                color: "#17233a",
                mb: 0.7,
              }}
            >
              3.1 Implant indexing
            </Typography>

            <Box
              component="ul"
              sx={{
                mt: 0,
                pl: 2.2,
                color: "#344054",
                fontSize: 13,
                lineHeight: 1.9,
              }}
            >
              <li>Check the implant name and manufacturer.</li>
              <li>Index as per the latest field mapping.</li>
              <li>Ensure all mandatory fields are captured.</li>
            </Box>

            <Typography
              sx={{
                fontSize: 14,
                fontWeight: 800,
                color: "#17233a",
                mb: 0.7,
                mt: 2,
              }}
            >
              3.2 Page identification
            </Typography>

            <Box
              component="ul"
              sx={{
                mt: 0,
                pl: 2.2,
                color: "#344054",
                fontSize: 13,
                lineHeight: 1.9,
              }}
            >
              <li>Identify the page type correctly.</li>
              <li>Follow the rules mentioned in section 4.</li>
            </Box>

            <Typography
              sx={{
                mt: 2.5,
                mb: 1,
                fontSize: 14,
                fontWeight: 800,
                color: "#17233a",
              }}
            >
              Example
            </Typography>

            <Table
              size="small"
              sx={{
                border: "1px solid #e2e8f0",

                "& th": {
                  backgroundColor: "#f8fafc",
                  fontSize: 11,
                  fontWeight: 700,
                  color: "#64748b",
                  textTransform: "uppercase",
                },

                "& td": {
                  fontSize: 12,
                  color: "#243b5a",
                  borderColor: "#e6ebf1",
                },
              }}
            >
              <TableHead>
                <TableRow>
                  <TableCell>Field name</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Example</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                <TableRow>
                  <TableCell>Implant Name</TableCell>
                  <TableCell>Name of the implant</TableCell>
                  <TableCell>ABC Screw 5.0mm</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Manufacturer</TableCell>
                  <TableCell>Maker of the implant</TableCell>
                  <TableCell>ABC Medical</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Lot Number</TableCell>
                  <TableCell>Batch/lot identifier</TableCell>
                  <TableCell>LT-4471</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>
        </Box>
      </Card>
    </Box>
  );
}