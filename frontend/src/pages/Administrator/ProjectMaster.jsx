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
  { name: "code", label: "Project code", placeholder: "e.g. ABC" },
  {
    name: "name",
    label: "Project name",
    placeholder: "e.g. ABC Medical Imaging",
  },
  { name: "client", label: "Client name", placeholder: "Client name" },
  {
    name: "category",
    label: "Reporting category",
    placeholder: "Reporting category",
    options: ["Implant Indexing", "Ortho / Imaging", "Cardiology", "Neurology / Imaging"],
  },
  {
    name: "autoLock",
    label: "Auto-lock timing",
    placeholder: "18:00",
    type: "time",
  },
  {
    name: "team",
    label: "Assigned team",
    placeholder: "Assigned team",
    options: ["Rohan's Team", "Meera's Team"],
  },
  {
    name: "startDate",
    label: "Start date",
    placeholder: "dd-mm-yyyy",
    type: "date",
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
  const [editingProject, setEditingProject] = useState(null);

  const openAddDialog = () => {
    setEditingProject(null);
    setOpen(true);
  };

  const openEditDialog = (row) => {
    setEditingProject({
      code: row[0].slice(0, 3),
      name: row[0],
      category: row[1],
      team: row[3] === "Rohan Mehta" ? "Rohan's Team" : "Meera's Team",
      status: row[4] === "ACTIVE" ? "Active" : "Inactive",
    });
    setOpen(true);
  };

  return (
    <>
      <CorePageShell
        breadcrumb="Administrator"
        title="Project Master"
        description="Maintain project definitions, categories and team assignments."
        actionLabel="Add project"
        actionHandler={openAddDialog}
      >
        <Box sx={{ width: "100%", overflowX: "auto" }}>
          <CoreTable
            columns={["PROJECT", "CATEGORY", "INDEXERS", "TEAM LEAD", "STATUS"]}
            rows={rows}
            onAction={openEditDialog}
          />
        </Box>
      </CorePageShell>

      <CoreFormDialog
        key={editingProject ? editingProject.name : "new-project"}
        open={open}
        onClose={() => setOpen(false)}
        title="Project details"
        fields={fields}
        submitLabel="Save project"
        variant="project"
        initialValues={editingProject || {}}
        onSubmit={() => setSaved(true)}
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
