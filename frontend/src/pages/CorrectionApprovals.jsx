import { useState } from 'react';
import { Avatar, Box, Button, Chip, Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';

const initialRows = [
	{ project: 'ABC Medical Imaging', date: '19 May', field: 'Implant Name', change: 'ABC Screw 5.0 → ABC Screw 5.5', requester: 'Priya Sharma', initials: 'PS', status: 'PENDING' },
	{ project: 'Ortho Kids', date: '18 May', field: 'Lot Number', change: 'LT-441 → LT-4471', requester: 'Aditya Rao', initials: 'AR', status: 'PENDING' },
	{ project: 'Spine Indexing', date: '17 May', field: 'Page Type', change: 'Op → OP Note', requester: 'Sneha Iyer', initials: 'SI', status: 'APPROVED' },
	{ project: 'Cardio Records', date: '16 May', field: 'Manufacturer', change: 'ABC → ABC Medical', requester: 'Divya Menon', initials: 'DM', status: 'REJECTED' },
];

const statusColor = { PENDING: 'warning', APPROVED: 'success', REJECTED: 'error' };

export default function CorrectionApprovals() {
	const [rows, setRows] = useState(initialRows);
	const updateStatus = (index, status) => setRows(current => current.map((row, rowIndex) => rowIndex === index ? { ...row, status } : row));

	return <Box sx={{ width: '100%' }}>
		<Typography sx={{ color: '#667085', fontSize: 12 }}>ProdTrack · Team Lead</Typography>
		<Typography sx={{ fontSize: 24, fontWeight: 800, mt: .7 }}>Corrections</Typography>
		<Typography sx={{ color: '#667085', fontSize: 13, mt: .4 }}>Review and approve correction requests raised on locked entries.</Typography>

		<Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 2, mb: 2, flexWrap: 'wrap' }}>
			{['Indexer submits', 'Lead / Core review', 'Approve / Reject', 'Audit log update'].map((step, index) => <Box key={step} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
				<Paper elevation={0} sx={{ px: 1.8, py: 1.1, border: '1px solid #dbe3ec', borderRadius: 1.5, bgcolor: index === 1 ? '#2f6df0' : '#fff', color: index === 1 ? '#fff' : '#10233d', fontSize: 12, fontWeight: 700 }}>{step}</Paper>
				{index < 3 && <Typography sx={{ color: '#94a3b8', fontSize: 18 }}>→</Typography>}
			</Box>)}
		</Box>

		<Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(150px, 1fr))', gap: 2, mb: 2, '@media (max-width: 800px)': { gridTemplateColumns: 'repeat(2, minmax(140px, 1fr))' }, '@media (max-width: 480px)': { gridTemplateColumns: '1fr' } }}>
			{[['◷', 'Awaiting review', '6', '#fff3dc'], ['✓', 'Approved (mo.)', '41', '#e2f6ec'], ['×', 'Rejected (mo.)', '5', '#fde8e8'], ['◴', 'Avg. turnaround', '4h', '#eaf1ff']].map(([icon, label, value, color]) => <Paper key={label} elevation={0} sx={{ display: 'flex', alignItems: 'center', gap: 1.3, p: 1.6, border: '1px solid #dbe3ec', borderRadius: 1.5, boxShadow: '0 2px 5px rgba(16,35,61,.08)' }}><Box sx={{ width: 45, height: 45, borderRadius: 1.3, bgcolor: color, display: 'grid', placeItems: 'center', fontSize: 25, color: '#65708a' }}>{icon}</Box><Box><Typography sx={{ color: '#667085', fontSize: 12 }}>{label}</Typography><Typography sx={{ fontSize: 25, lineHeight: 1.1, fontWeight: 800 }}>{value}</Typography></Box></Paper>)}
		</Box>

		<Paper elevation={0} sx={{ border: '1px solid #dbe3ec', borderRadius: 1.5, overflow: 'auto' }}><Table size="small" sx={{ minWidth: 900 }}><TableHead><TableRow sx={{ bgcolor: '#f8fafc' }}>{['PROJECT', 'PROD. DATE', 'FIELD', 'OLD → NEW', 'REQUESTED BY', 'STATUS', ''].map(header => <TableCell key={header} sx={{ fontWeight: 800, fontSize: 11, color: '#526581', py: 1.4 }}>{header}</TableCell>)}</TableRow></TableHead><TableBody>{rows.map((row, index) => <TableRow key={row.project} hover><TableCell>{row.project}</TableCell><TableCell>{row.date}</TableCell><TableCell>{row.field}</TableCell><TableCell sx={{ color: '#526581' }}>{row.change}</TableCell><TableCell><Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><Avatar sx={{ width: 27, height: 27, bgcolor: '#5b5ce2', fontSize: 11, fontWeight: 700 }}>{row.initials}</Avatar>{row.requester}</Box></TableCell><TableCell><Chip size="small" label={row.status} color={statusColor[row.status]} sx={{ fontSize: 10, fontWeight: 800 }} /></TableCell><TableCell>{row.status === 'PENDING' && <Box sx={{ display: 'flex', gap: .5 }}><Button size="small" variant="contained" onClick={() => updateStatus(index, 'APPROVED')}>Approve</Button><Button size="small" variant="outlined" onClick={() => updateStatus(index, 'REJECTED')}>Reject</Button></Box>}</TableCell></TableRow>)}</TableBody></Table></Paper>
	</Box>;
}
