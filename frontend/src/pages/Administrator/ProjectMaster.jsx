import { useState } from "react";
import { Alert, Box, Snackbar } from "@mui/material";
import CorePageShell, {
  CoreFormDialog,
  CoreTable,
} from "../../components/CorePageShell.jsx";

const rows = [
  ["ABC Medical Imaging", "Ortho / Imaging", "18", "Rohan Mehta", "ACTIVE"],
  ["Ortho Kids", "Ortho / Paediatric", "9", "Rohan Mehta", "ACTIVE"],
  ["Spine Indexing", "Spine / Neurology", "12", "Meera Nair", "ACTIVE"],
  ["Cardio Records", "Cardiology", "7", "Meera Nair", "ACTIVE"],
  ["Neuro Scan", "Neurology / Imaging", "5", "Rohan Mehta", "ACTIVE"],
];

const fields = [
  {
    name: "name",
    label: "Project name",
    placeholder: "e.g. ABC Medical Imaging",
  },
  { name: "category", label: "Category", placeholder: "e.g. Ortho / Imaging" },
  {
    name: "lead",
    label: "Team lead",
    placeholder: "Rohan Mehta",
    options: ["Rohan Mehta", "Meera Nair"],
  },
  {
    name: "indexers",
    label: "No. of indexers",
    placeholder: "10",
    type: "number",
  },
  {
    name: "status",
    label: "Status",
    placeholder: "Active",
    options: ["Active", "Inactive"],
  },
];

export default function ProjectMaster() {
  const [open, setOpen] = useState(false);
  const [saved, setSaved] = useState(false);

  return (
    <>
      <CorePageShell
        breadcrumb="Administrator"
        title="Project Master"
        description="Maintain project definitions, categories and team assignments."
        actionLabel="Add project"
        actionHandler={() => setOpen(true)}
      >
        <Box sx={{ width: "100%", overflowX: "auto" }}>
          <CoreTable
            columns={["PROJECT", "CATEGORY", "INDEXERS", "TEAM LEAD", "STATUS"]}
            rows={rows}
            onAction={() => setOpen(true)}
          />
        </Box>
      </CorePageShell>

      <CoreFormDialog
        open={open}
        onClose={() => {
          setOpen(false);
          setSaved(true);
        }}
        title="Project details"
        fields={fields}
        submitLabel="Save project"
      />

      <Snackbar
        open={saved}
        autoHideDuration={2500}
        onClose={() => setSaved(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          severity="success"
          variant="filled"
          onClose={() => setSaved(false)}
        >
          Project saved successfully
        </Alert>
      </Snackbar>
    </>
  );
}
