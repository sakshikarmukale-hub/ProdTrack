import { useState } from 'react';
import { Alert, Box, Button, Chip, Paper, Snackbar, Typography } from '@mui/material';
import CorePageShell, { CoreFormDialog, CoreTable } from '../../components/CorePageShell.jsx';

const rows = [
  ['ABC Medical v2.3', 'ABC Medical Imaging', '20 May 2026', '50 / 50', 'ACTIVE'],
  ['Ortho Kids v1.1', 'Ortho Kids', '14 Apr 2026', '9 / 9', 'ACTIVE'],
  ['Spine Guide v3.0', 'Spine Indexing', '02 Mar 2026', '11 / 12', 'ACTIVE'],
  ['Cardio v1.0', 'Cardio Records', '10 Jan 2026', '7 / 7', 'ACTIVE'],
  ['Neuro Guide v2.0', 'Neuro Scan', '01 Jun 2025', '5 / 5', 'INACTIVE'],
];

const fields = [
  { name: 'title', label: 'Guide title', placeholder: 'e.g. ABC Medical v2.4' },
  { name: 'project', label: 'Project', placeholder: 'Select project', options: ['ABC Medical Imaging', 'Ortho Kids', 'Spine Indexing', 'Cardio Records', 'Neuro Scan'] },
  { name: 'version', label: 'Version', placeholder: 'e.g. 2.4' },
  { name: 'status', label: 'Status', placeholder: 'Active', options: ['Active', 'Inactive'] },
];

export default function GuideManager() {
  const [open, setOpen] = useState(false);
  const [saved, setSaved] = useState(false);

  return (
    <>
      <CorePageShell
        breadcrumb="Administrator"
        title="Guide Manager"
        description="Manage guide versions and acknowledgement rules."
        actionLabel="Upload guide"
        actionHandler={() => setOpen(true)}
      >
        {/* ── COMPLIANCE SUMMARY ── */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' }, gap: 2, mb: 2 }}>
          {[
            ['Total guides', '5', '#3475ee'],
            ['Fully acknowledged', '4', '#20a36f'],
            ['Pending acknowledgement', '1', '#e09a22'],
          ].map(([label, value, color]) => (
            <Paper key={label} elevation={0} sx={{ p: 2, border: '1px solid #dbe3ec', borderRadius: 1.5, bgcolor: '#fff', display: 'flex', alignItems: 'center', gap: 2 }}>
              <Typography sx={{ fontSize: 28, fontWeight: 800, color }}>{value}</Typography>
              <Typography sx={{ fontSize: 13, color: '#526581' }}>{label}</Typography>
            </Paper>
          ))}
        </Box>

        <Box sx={{ width: '100%', overflowX: 'auto' }}>
          <CoreTable
            columns={['GUIDE', 'PROJECT', 'UPLOADED', 'ACKNOWLEDGED', 'STATUS']}
            rows={rows}
            actionLabel="View"
            actionVariant="text"
            onAction={() => { }}
          />
        </Box>
      </CorePageShell>

      <CoreFormDialog
        open={open}
        onClose={() => { setOpen(false); setSaved(true); }}
        title="Upload guide"
        fields={fields}
        submitLabel="Upload"
      />

      <Snackbar
        open={saved}
        autoHideDuration={2500}
        onClose={() => setSaved(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert severity="success" variant="filled" onClose={() => setSaved(false)}>
          Guide uploaded successfully
        </Alert>
      </Snackbar>
    </>
  );
}
