import {
	Alert,
	Box,
	Button,
	Chip,
	Paper,
	Typography,
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const profileByRole = {
	indexer: {
		employeeId: "EMP-1042",
		email: "priyaindexer@company.com",
		department: "Indexing Ops",
		designation: "Indexer",
		teamLead: "Rohan Mehta",
	},
	teamLead: {
		employeeId: "EMP-1007",
		email: "rohanlead@company.com",
		department: "Indexing Operations",
		designation: "Team Lead",
		teamLead: "Meera Iyer",
	},
	coreTeam: {
		employeeId: "EMP-1003",
		email: "meera.core@company.com",
		department: "Core Operations",
		designation: "Core Team",
		teamLead: "Admin User",
	},
	administrator: {
		employeeId: "ADM-0001",
		email: "admin@company.com",
		department: "Administration",
		designation: "Administrator",
		teamLead: "System Administration",
	},
};

const assignedProjects = [
	{ name: "ABC Medical Imaging", color: "#e2f6ec", text: "#087443" },
	{ name: "Ortho Kids", color: "#fff3dc", text: "#ad6900" },
	{ name: "Spine Indexing", color: "#f0e9ff", text: "#6d28d9" },
];

function ProfileField({ label, value }) {
	return (
		<Box>
			<Typography sx={{ color: "#10233d", fontSize: 13, mb: 0.7 }}>
				{label}
			</Typography>
			<Box
				sx={{
					minHeight: 44,
					display: "flex",
					alignItems: "center",
					px: 1.5,
					border: "1px solid #dbe3ec",
					borderRadius: "8px",
					bgcolor: "#f6f8fb",
					color: "#7183a0",
					fontSize: 14,
				}}
			>
				{value}
			</Box>
		</Box>
	);
}

export default function MyProfile({ user }) {
	const profile = profileByRole[user?.roleKey] || profileByRole.indexer;
	const displayName = user?.name || "User";
	const roleName = user?.role || profile.designation;

	return (
		<Box sx={{ maxWidth: 1100 }}>
			<Typography sx={{ color: "#667085", fontSize: 13 }}>
				ProdTrack · {roleName}
			</Typography>

			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "flex-end",
					gap: 2,
					mt: 0.7,
					mb: 2.2,
					"@media (max-width: 600px)": {
						flexDirection: "column",
						alignItems: "stretch",
					},
				}}
			>
				<Box>
					<Typography sx={{ color: "#0f172a", fontSize: 26, fontWeight: 800 }}>
						My profile
					</Typography>
					<Typography sx={{ color: "#667085", fontSize: 14, mt: 0.4 }}>
						Your account details and assigned projects.
					</Typography>
				</Box>

				<Button
					variant="outlined"
					sx={{
						alignSelf: { xs: "stretch", sm: "flex-end" },
						borderColor: "#dbe3ec",
						bgcolor: "#fff",
						color: "#17345c",
						fontSize: 13,
						px: 2,
						height: 40,
					}}
				>
					Reset password
				</Button>
			</Box>

			<Box
				sx={{
					display: "grid",
					gridTemplateColumns: { xs: "1fr", md: "1.05fr 0.95fr" },
					gap: 2,
				}}
			>
				<Paper
					elevation={0}
					sx={{
						border: "1px solid #dbe3ec",
						borderRadius: "12px",
						overflow: "hidden",
						boxShadow: "0 2px 8px rgba(16,35,61,0.06)",
					}}
				>
					<Typography sx={{ px: 2.2, py: 1.8, fontSize: 16, fontWeight: 800 }}>
						Account
					</Typography>
					<Box sx={{ borderTop: "1px solid #dbe3ec", p: 2.2 }}>
						<Box
							sx={{
								display: "grid",
								gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
								gap: 2,
							}}
						>
							<ProfileField label="Employee ID" value={profile.employeeId} />
							<ProfileField label="Full name" value={displayName} />
							<ProfileField label="Email" value={profile.email} />
							<ProfileField label="Department" value={profile.department} />
							<ProfileField label="Designation / Role" value={profile.designation} />
							<ProfileField label="Team lead" value={profile.teamLead} />
						</Box>
					</Box>
				</Paper>

				<Paper
					elevation={0}
					sx={{
						border: "1px solid #dbe3ec",
						borderRadius: "12px",
						overflow: "hidden",
						boxShadow: "0 2px 8px rgba(16,35,61,0.06)",
					}}
				>
					<Typography sx={{ px: 2.2, py: 1.8, fontSize: 16, fontWeight: 800 }}>
						Assigned projects
					</Typography>
					<Box sx={{ borderTop: "1px solid #dbe3ec", p: 2.2 }}>
						<Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2.2 }}>
							{assignedProjects.map((project) => (
								<Chip
									key={project.name}
									label={project.name}
									sx={{
										height: 30,
										bgcolor: project.color,
										color: project.text,
										fontSize: 13,
										fontWeight: 500,
									}}
								/>
							))}
						</Box>
						<Alert
							icon={<InfoOutlinedIcon sx={{ fontSize: 18 }} />}
							severity="info"
							sx={{
								bgcolor: "#edf4ff",
								border: "1px solid #c7dcff",
								color: "#315a9b",
								fontSize: 13,
								lineHeight: 1.7,
								alignItems: "flex-start",
								"& .MuiAlert-icon": { color: "#3980e8", mt: 0.25 },
							}}
						>
							You only see updates and entries for projects assigned to you.
							<br />
							Contact your admin to change assignments.
						</Alert>
					</Box>
				</Paper>
			</Box>
		</Box>
	);
}
