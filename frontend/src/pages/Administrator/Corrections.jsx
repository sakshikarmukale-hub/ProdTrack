import { useState } from "react";
import { Alert, Box, Button, Chip, Snackbar } from "@mui/material";
import CorePageShell, { CoreTable } from "../../components/CorePageShell.jsx";

const rows = [
  [
    "ABC-2024-0511",
    "Priya Sharma",
    "Implant Name",
    "Typo in device label",
    "20 May 09:12",
    "PENDING",
  ],
  [
    "ORT-2024-0320",
    "Aditya Rao",
    "Procedure Code",
    "Wrong CPT code entered",
    "19 May 14:35",
    "PENDING",
  ],
  [
    "SPI-2024-0198",
    "Karan Patel",
    "Patient DOB",
    "Date format mismatch",
    "18 May 11:00",
    "PENDING",
  ],
  [
    "ABC-2024-0489",
    "Priya Sharma",
    "Surgeon Name",
    "Spelling correction",
    "17 May 16:20",
    "APPROVED",
  ],
  [
    "CAR-2024-0077",
    "Sneha Iyer",
    "Report Date",
    "Incorrect month",
    "16 May 08:55",
    "REJECTED",
  ],
];

const fields = [
  { name: "entry", label: "Entry ID", placeholder: "e.g. ABC-2024-0511" },
  { name: "employee", label: "Employee", placeholder: "Employee name" },
  { name: "field", label: "Field changed", placeholder: "e.g. Implant Name" },
  { name: "reason", label: "Reason", placeholder: "Brief description" },
  {
    name: "status",
    label: "Status",
    placeholder: "Pending",
    options: ["Pending", "Approved", "Rejected"],
  },
];

export default function Corrections() {
  const [notice, setNotice] = useState("");

  function handleAction(row) {
    setNotice(`Correction for ${row[0]} updated`);
  }

  return (
    <>
      <CorePageShell
        breadcrumb="Administrator"
        title="Corrections"
        description="Manage correction approval workflow and audit status."
        actionLabel={null}
      >
        {/* ── FILTER TABS ── */}
        <Box sx={{ display: "flex", gap: 1, mb: 2, flexWrap: "wrap" }}>
          {["All", "Pending", "Approved", "Rejected"].map((tab) => (
            <Chip
              key={tab}
              label={tab}
              clickable
              variant={tab === "All" ? "filled" : "outlined"}
              color={tab === "All" ? "primary" : "default"}
              size="small"
              sx={{ fontWeight: 600, fontSize: 11 }}
            />
          ))}
        </Box>

        <Box sx={{ width: "100%", overflowX: "auto" }}>
          <CoreTable
            columns={[
              "ENTRY ID",
              "EMPLOYEE",
              "FIELD",
              "REASON",
              "SUBMITTED",
              "STATUS",
            ]}
            rows={rows}
            actionLabel="Review"
            actionVariant="text"
            onAction={handleAction}
          />
        </Box>
      </CorePageShell>

      <Snackbar
        open={Boolean(notice)}
        autoHideDuration={2500}
        onClose={() => setNotice("")}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          severity="success"
          variant="filled"
          onClose={() => setNotice("")}
        >
          {notice}
        </Alert>
      </Snackbar>
    </>
  );
}
