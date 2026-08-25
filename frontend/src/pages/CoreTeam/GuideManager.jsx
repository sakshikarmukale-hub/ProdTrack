import { useState } from 'react';
import { Alert, Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, IconButton, Snackbar, TextField, Typography } from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import CorePageShell, { CoreTable, UploadAction } from '../../components/CorePageShell.jsx';

const guides = [['ABC Medical Imaging', 'Indexing Guide', 'v2.3', '16 May 2025', 72, 'ACTIVE'], ['Ortho Kids', 'Field Mapping', 'v1.7', '14 May 2025', 65, 'ACTIVE'], ['Spine Indexing', 'Indexing Guide', 'v3.1', '02 May 2025', 98, 'ACTIVE'], ['Cardio Records', 'QC Guide', 'v1.2', '28 Apr 2025', 100, 'ACTIVE']];

function Acknowledgement({ value }) {
  return <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, minWidth: 145 }}><Box sx={{ width: 105, height: 8, bgcolor: '#edf1f6', borderRadius: 4, overflow: 'hidden' }}><Box sx={{ width: `${value}%`, height: '100%', bgcolor: '#7251d6', borderRadius: 4 }} /></Box><Typography sx={{ fontSize: 12 }}>{value}%</Typography></Box>;
}

export default function GuideManager() {
  const [uploadOpen, setUploadOpen] = useState(false);
  const [notice, setNotice] = useState(false);
  const rows = guides.map(([project, guide, version, updated, ack, status]) => [project, guide, <strong key={version}>{version}</strong>, updated, <Acknowledgement key={`${project}-ack`} value={ack} />, status]);
  const upload = () => { setUploadOpen(false); setNotice(true); };

  return <><CorePageShell title="Guide manager" description="Upload guide versions, track acknowledgements and send updates to assigned indexers." actionLabel="Upload new version" actionIcon={<UploadAction />} actionHandler={() => setUploadOpen(true)}>
    <Typography sx={{ fontSize: 14, fontWeight: 800, mb: 1.2 }}>Mandatory acknowledgement workflow</Typography>
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2, flexWrap: 'wrap' }}>{['Upload guide', 'Notify indexers', 'Shown on login', 'Read & acknowledge', 'System records'].map((step, index) => <Box key={step} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><Button variant={index === 4 ? 'contained' : 'outlined'} size="small" sx={{ minHeight: 38, px: 1.7 }}>{step}</Button>{index < 4 && <Typography sx={{ color: '#94a3b8', fontSize: 18 }}>→</Typography>}</Box>)}</Box>
    <Box sx={{ border: '1px solid #dbe3ec', borderRadius: 1.5, overflow: 'hidden', bgcolor: '#fff' }}><Typography sx={{ px: 2, py: 1.5, fontWeight: 800, borderBottom: '1px solid #e3e8ef' }}>Guides</Typography><CoreTable columns={['PROJECT', 'GUIDE', 'VERSION', 'UPDATED', 'ACK. %', 'STATUS']} rows={rows} actionLabel="Compliance" actionVariant="text" /></Box>
  </CorePageShell>
  <Dialog open={uploadOpen} onClose={() => setUploadOpen(false)} fullWidth maxWidth="sm" PaperProps={{ sx: { borderRadius: 2 } }}><DialogTitle sx={{ fontWeight: 800, display: 'flex', justifyContent: 'space-between' }}>Upload guide<IconButton size="small" onClick={() => setUploadOpen(false)}><CloseRoundedIcon fontSize="small" /></IconButton></DialogTitle><Divider /><DialogContent sx={{ display: 'grid', gap: 2, pt: 2 }}><TextField label="Guide name" placeholder="e.g. Indexing Guide" fullWidth /><Button component="label" variant="outlined" sx={{ justifyContent: 'flex-start', py: 1.5 }}>Choose guide file<input hidden type="file" /></Button><TextField label="Version" placeholder="e.g. v2.4" fullWidth /></DialogContent><Divider /><DialogActions sx={{ p: 2, bgcolor: '#f8fafc' }}><Button onClick={() => setUploadOpen(false)}>Cancel</Button><Button variant="contained" onClick={upload}>Upload guide</Button></DialogActions></Dialog>
  <Snackbar open={notice} autoHideDuration={2800} onClose={() => setNotice(false)} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}><Alert severity="success" variant="filled" onClose={() => setNotice(false)}>Upload dialog successfully completed</Alert></Snackbar></>;
}
