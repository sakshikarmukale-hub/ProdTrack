import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

// =========================================================
// TODAY'S ENTRIES
// =========================================================

const entries = [
  {
    date: "20 May",
    project: "ABC Medical Imaging",
    batch: "ABC-__-13",
    received: "60",
    completed: "45",
    status: "DRAFT",
  },
  {
    date: "20 May",
    project: "Ortho Kids",
    batch: "ORT-__-08",
    received: "40",
    completed: "40",
    status: "SUBMITTED",
  },
  {
    date: "19 May",
    project: "Spine Indexing",
    batch: "SPN-__-22",
    received: "55",
    completed: "55",
    status: "REVIEWED",
  },
  {
    date: "19 May",
    project: "ABC Medical Imaging",
    batch: "ABC-__-11",
    received: "50",
    completed: "50",
    status: "LOCKED",
  },
];

// =========================================================
// STATUS CHIP
// =========================================================

function StatusChip({ status }) {
  const styles = {
    DRAFT: {
      bgcolor: "#eef2ff",
      color: "#315fd4",
      borderColor: "#c7d2fe",
    },

    SUBMITTED: {
      bgcolor: "#eaf2ff",
      color: "#2563eb",
      borderColor: "#bfdbfe",
    },

    REVIEWED: {
      bgcolor: "#e0f7fa",
      color: "#00838f",
      borderColor: "#b2ebf2",
    },

    LOCKED: {
      bgcolor: "#f0e9ff",
      color: "#6d28d9",
      borderColor: "#ddd6fe",
    },
  };

  return (
    <Chip
      label={status}
      size="small"
      variant="outlined"
      sx={{
        height: 18,
        borderRadius: "5px",
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: 0.3,
        ...styles[status],
      }}
    />
  );
}

// =========================================================
// FIELD STYLE
// =========================================================

const fieldSx = {
  "& .MuiOutlinedInput-root": {
    height: 40,
    borderRadius: "6px",
    bgcolor: "#fff",
    fontSize: 13,
  },

  "& .MuiInputLabel-root": {
    fontSize: 14,
  },
};

// =========================================================
// INDEXER DAILY ENTRY
// =========================================================

export default function IndexerDailyEntry() {
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      {/* =================================================
          TOP SECTION
      ================================================= */}

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          mb: 1.5,
        }}
      >
        <Box>
          <Typography
            sx={{
              color: "#64748b",
              fontSize: 12.5,
              mb: 0.5,
            }}
          >
            ProdTrack · Indexer
          </Typography>

          <Typography
            sx={{
              color: "#0f172a",
              fontSize: 24,
              fontWeight: 800,
              lineHeight: 1.2,
            }}
          >
            Daily production entry
          </Typography>

          <Typography
            sx={{
              color: "#64748b",
              fontSize: 13,
              mt: 0.5,
            }}
          >
            Log today&apos;s production. Draft → Submitted → Reviewed → Locked.
          </Typography>
        </Box>

        {/* ACTION BUTTONS */}

        <Box
          sx={{
            display: "flex",
            gap: 1,
            mt: 2,
          }}
        >
          <Button
            variant="outlined"
            size="small"
            sx={{
              bgcolor: "#fff",
              color: "#64748b",
              borderColor: "#dbe3ec",

              textTransform: "none",

              fontSize: 11,

              borderRadius: "6px",

              px: 1.5,
            }}
          >
            Save draft
          </Button>

          <Button
            variant="contained"
            size="small"
            sx={{
              bgcolor: "#3169e8",

              textTransform: "none",

              fontSize: 11,

              borderRadius: "6px",

              px: 1.5,

              boxShadow: "none",

              "&:hover": {
                bgcolor: "#2458cf",
                boxShadow: "none",
              },
            }}
          >
            Submit entry
          </Button>
        </Box>
      </Box>

      {/* =================================================
          STATUS STEPS
      ================================================= */}

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 0.75,
          mb: 1.5,
        }}
      >
        <Chip
          label="Draft"
          size="small"
          sx={{
            bgcolor: "#3169e8",
            color: "#fff",

            fontSize: 12,
            fontWeight: 700,

            height: 25,

            borderRadius: "6px",
          }}
        />

        <Typography
          sx={{
            color: "#94a3b8",
            fontSize: 11,
          }}
        >
          →
        </Typography>

        <Chip
          label="Submitted"
          size="small"
          variant="outlined"
          sx={{
            bgcolor: "#fff",
            borderColor: "#dbe3ec",

            fontSize: 12,
            fontWeight: 600,

            height: 25,

            borderRadius: "6px",
          }}
        />

        <Typography
          sx={{
            color: "#94a3b8",
            fontSize: 11,
          }}
        >
          →
        </Typography>

        <Chip
          label="Reviewed"
          size="small"
          variant="outlined"
          sx={{
            bgcolor: "#fff",
            borderColor: "#dbe3ec",

            fontSize: 12,
            fontWeight: 600,

            height: 25,

            borderRadius: "6px",
          }}
        />

        <Typography
          sx={{
            color: "#94a3b8",
            fontSize: 11,
          }}
        >
          →
        </Typography>

        <Chip
          label="Locked"
          size="small"
          variant="outlined"
          sx={{
            bgcolor: "#fff",
            borderColor: "#dbe3ec",

            fontSize: 12,
            fontWeight: 600,

            height: 25,

            borderRadius: "6px",
          }}
        />

        <Box sx={{ flex: 1 }} />

        <Typography
          sx={{
            fontSize: 9,
            fontWeight: 700,

            color: "#64748b",

            border: "1px solid #dbe3ec",

            bgcolor: "#fff",

            borderRadius: 1,

            px: 1,
            py: 0.5,
          }}
        >
          EDITABLE — DRAFT
        </Typography>
      </Box>

      {/* =================================================
          ENTRY FORM
      ================================================= */}

      <Card
        elevation={0}
        sx={{
          borderRadius: "8px",

          border: "1px solid #dbe3ec",

          bgcolor: "#fff",

          p: 1.5,

          mb: 1.75,

          boxShadow: "0 2px 8px rgba(15,23,42,0.05)",
        }}
      >
        <Box
          sx={{
            display: "grid",

            gridTemplateColumns: {
              xs: "1fr",
              md: "1fr 1fr",
            },

            columnGap: 1.5,
            rowGap: 1.25,
          }}
        >
          {/* Production Date */}

          <TextField
            label="Production date"
            type="date"
            defaultValue="2025-05-20"
            fullWidth
            size="small"
            InputLabelProps={{
              shrink: true,
            }}
            sx={fieldSx}
          />

          {/* Project */}

          <TextField
            select
            label="Project"
            defaultValue="ABC Medical Imaging"
            fullWidth
            size="small"
            sx={fieldSx}
          >
            <MenuItem value="ABC Medical Imaging">
              ABC Medical Imaging
            </MenuItem>

            <MenuItem value="Ortho Kids">
              Ortho Kids
            </MenuItem>

            <MenuItem value="Spine Indexing">
              Spine Indexing
            </MenuItem>
          </TextField>

          {/* Batch / Job ID */}

          <TextField
            label="Batch / Job ID"
            placeholder="e.g. ABC-2025-0520-14"
            fullWidth
            size="small"
            sx={fieldSx}
          />

          {/* Reporting Category */}

          <TextField
            select
            label="Reporting category"
            defaultValue="Implant Indexing"
            fullWidth
            size="small"
            sx={fieldSx}
          >
            <MenuItem value="Implant Indexing">
              Implant Indexing
            </MenuItem>

            <MenuItem value="General Indexing">
              General Indexing
            </MenuItem>

            <MenuItem value="Review">
              Review
            </MenuItem>
          </TextField>

          {/* Documents Received */}

          <TextField
            label="Documents received"
            defaultValue="60"
            fullWidth
            size="small"
            sx={fieldSx}
          />

          {/* Documents Completed */}

          <TextField
            label="Documents completed"
            defaultValue="45"
            fullWidth
            size="small"
            sx={fieldSx}
          />

          {/* Batches Processed */}

          <TextField
            label="Batches processed"
            defaultValue="4"
            fullWidth
            size="small"
            sx={fieldSx}
          />

          {/* Errors Flagged */}

          <TextField
            label="Errors flagged"
            defaultValue="1"
            fullWidth
            size="small"
            sx={fieldSx}
          />

          {/* Notes */}

          <TextField
            label="Notes / remarks"
            placeholder="Optional — anything the reviewer should know"
            multiline
            rows={2}
            fullWidth
            size="small"
            sx={{
              ...fieldSx,

              gridColumn: {
                xs: "auto",
                md: "1 / -1",
              },

              "& .MuiOutlinedInput-root": {
                minHeight: 64,

                borderRadius: "6px",

                bgcolor: "#fff",

                fontSize: 12,

                alignItems: "flex-start",
              },
            }}
          />
        </Box>
      </Card>

      {/* =================================================
          TODAY'S ENTRIES TITLE
      ================================================= */}

      <Typography
        sx={{
          color: "#0f172a",

          fontSize: 13,
          fontWeight: 700,

          mb: 0.75,
        }}
      >
        Today&apos;s entries
      </Typography>

      {/* =================================================
          TODAY'S ENTRIES TABLE
      ================================================= */}

      <TableContainer
        component={Card}
        elevation={0}
        sx={{
          borderRadius: "7px",

          border: "1px solid #dbe3ec",

          overflow: "hidden",

          boxShadow: "0 2px 8px rgba(15,23,42,0.05)",
        }}
      >
        <Table size="small">
          <TableHead>
            <TableRow
              sx={{
                bgcolor: "#f8fafc",
              }}
            >
              {[
                "DATE",
                "PROJECT",
                "BATCH",
                "RECEIVED",
                "COMPLETED",
                "STATUS",
                "",
              ].map((heading, index) => (
                <TableCell
                  key={`${heading}-${index}`}
                  sx={{
                    color: "#64748b",

                    fontSize: 11,
                    fontWeight: 700,

                    py: 1,

                    borderBottom: "1px solid #e2e8f0",
                  }}
                >
                  {heading}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {entries.map((entry, index) => (
              <TableRow key={index}>
                <TableCell
                  sx={{
                    fontSize: 13,
                    color: "#475569",
                    py: 0.8,
                  }}
                >
                  {entry.date}
                </TableCell>

                <TableCell
                  sx={{
                    fontSize: 13,
                    color: "#334155",
                    py: 0.8,
                  }}
                >
                  {entry.project}
                </TableCell>

                <TableCell
                  sx={{
                    fontSize: 13,
                    color: "#64748b",
                    py: 0.8,
                  }}
                >
                  {entry.batch}
                </TableCell>

                <TableCell
                  sx={{
                    fontSize: 13,
                    color: "#334155",
                    py: 0.8,
                  }}
                >
                  {entry.received}
                </TableCell>

                <TableCell
                  sx={{
                    fontSize: 13,
                    color: "#334155",
                    py: 0.8,
                  }}
                >
                  {entry.completed}
                </TableCell>

                <TableCell
                  sx={{
                    py: 0.8,
                  }}
                >
                  <StatusChip status={entry.status} />
                </TableCell>

                <TableCell
                  sx={{
                    py: 0.8,
                  }}
                >
                  {entry.status === "DRAFT" && (
                    <Button
                      size="small"
                      variant="outlined"
                      sx={{
                        minWidth: 28,
                        height: 20,

                        p: 0,

                        fontSize: 11,

                        textTransform: "none",

                        borderColor: "#e2e8f0",

                        color: "#475569",
                      }}
                    >
                      Edit
                    </Button>
                  )}

                  {entry.status === "LOCKED" && (
                    <Typography
                      sx={{
                        fontSize: 11,
                        color: "#64748b",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Request correction
                    </Typography>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
