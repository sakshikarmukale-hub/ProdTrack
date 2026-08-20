import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import PowerSettingsNewOutlinedIcon from '@mui/icons-material/PowerSettingsNewOutlined'

export const DRAWER_WIDTH = 200

// =========================
// SIDEBAR MENU ITEMS
// =========================

const menuItems = [
  {
    label: 'Dashboard',
    icon: '🏠',
    page: 'dashboard',
  },
  {
    label: 'Daily Entry',
    icon: '📝',
    page: 'daily-entry',
  },
  {
    label: 'Projects',
    icon: '📁',
    page: 'projects',
  },
  {
    label: 'Indexing Guide',
    icon: '📘',
    page: 'indexing-guide',
    badge: {
      text: 'NEW',
      color: 'success',
    },
  },
  {
    label: 'Correction Requests',
    icon: '🖍️',
    page: 'correction-requests',
  },
  {
    label: 'Reports',
    icon: '📊',
    page: 'reports',
  },
  {
    label: 'Attendance',
    icon: '🗓️',
    page: 'attendance',
  },
  {
    label: 'Notifications',
    icon: '🔔',
    page: 'notifications',
    badge: {
      text: '2',
      color: 'error',
      dot: true,
    },
  },
  {
  label: "My Profile",
  icon: "👤",
  page: "my-profile",
},
]

// =========================
// NAVIGATION ITEM
// =========================

function NavItem({ item, currentPage, onNavigate }) {
  const isActive = currentPage === item.page

  return (
    <ListItemButton
      selected={isActive}
      onClick={() => onNavigate(item.page)}
      sx={{
        borderRadius: 20,
        mx: 1.5,
        mb: 0.5,
        py: 1,
        color: 'grey.400',

        '&.Mui-selected': {
          backgroundColor: 'primary.main',
          color: '#fff',

          '&:hover': {
            backgroundColor: 'primary.dark',
          },
        },

        '&:not(.Mui-selected):hover': {
          backgroundColor: 'navy.light',
        },
      }}
    >
      {/* Icon */}
      <ListItemIcon
        sx={{
          minWidth: 34,
          color: 'inherit',
          fontSize: 18,
        }}
      >
        {item.icon}
      </ListItemIcon>

      {/* Menu text */}
      <ListItemText
        primary={item.label}
        primaryTypographyProps={{
          fontSize: 14,
          fontWeight: 500,
        }}
      />

      {/* NEW badge */}
      {item.badge && !item.badge.dot && (
        <Chip
          label={item.badge.text}
          size="small"
          color={item.badge.color}
          sx={{
            height: 18,
            fontSize: 10,
            fontWeight: 700,
            color: '#fff',

            '& .MuiChip-label': {
              px: 0.75,
            },
          }}
        />
      )}

      {/* Notification count */}
      {item.badge && item.badge.dot && (
        <Box
          sx={{
            width: 20,
            height: 20,
            borderRadius: '50%',
            bgcolor: 'error.main',
            color: '#fff',
            fontSize: 11,
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {item.badge.text}
        </Box>
      )}
    </ListItemButton>
  )
}

// =========================
// SIDEBAR
// =========================

export default function Sidebar({ currentPage, onNavigate }) {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: DRAWER_WIDTH,
        flexShrink: 0,

        '& .MuiDrawer-paper': {
          width: DRAWER_WIDTH,
          boxSizing: 'border-box',
          bgcolor: 'navy.main',
          border: 'none',
        },
      }}
    >

      {/* ========================= */}
      {/* PRODTRACK LOGO */}
      {/* ========================= */}

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1.25,
          px: 2.5,
          py: 1.5,
        }}
      >

        {/* Logo */}
        <Box
          sx={{
            width: 36,
            height: 36,
            borderRadius: '10px',
            background:
              'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            flexShrink: 0,
          }}
        >
          <Box
            sx={{
              width: 21,
              height: 21,
              backgroundColor: '#fff',

              clipPath:
                'polygon(0 0, 55% 0, 55% 45%, 100% 45%, 100% 100%, 45% 100%, 45% 55%, 0 55%)',
            }}
          />
        </Box>

        {/* ProdTrack text */}
        <Typography
          sx={{
            color: '#fff',
            fontWeight: 800,
            fontSize: 18,
            letterSpacing: '-0.02em',
          }}
        >
          ProdTrack
        </Typography>
      </Box>

      {/* ========================= */}
      {/* MENU TITLE */}
      {/* ========================= */}

      <Box
        sx={{
          px: 1.5,
          mt: 2,
        }}
      >
        <Typography
          sx={{
            color: 'grey.600',
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: 1,
            px: 1.5,
            mb: 1,
          }}
        >
          MENU
        </Typography>
      </Box>

      {/* ========================= */}
      {/* MENU ITEMS */}
      {/* ========================= */}

      <List sx={{ py: 0 }}>
        {menuItems.map((item) => (
          <NavItem
            key={item.label}
            item={item}
            currentPage={currentPage}
            onNavigate={onNavigate}
          />
        ))}
      </List>

      {/* ========================= */}
      {/* ACCOUNT */}
      {/* ========================= */}

      <Box
        sx={{
          px: 1.5,
          mt: 1,
        }}
      >
        <Typography
          sx={{
            color: 'grey.600',
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: 1,
            px: 1.5,
            mb: 1,
          }}
        >
          ACCOUNT
        </Typography>
      </Box>

      {/* ========================= */}
      {/* SIGN OUT */}
      {/* ========================= */}

      <List sx={{ py: 0 }}>
        <ListItemButton
          sx={{
            borderRadius: 2,
            mx: 1.5,
            py: 1,
            color: 'grey.400',

            '&:hover': {
              backgroundColor: 'navy.light',
            },
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 34,
              color: 'inherit',
            }}
          >
            <PowerSettingsNewOutlinedIcon fontSize="small" />
          </ListItemIcon>

          <ListItemText
            primary="Sign out"
            primaryTypographyProps={{
              fontSize: 14,
              fontWeight: 500,
            }}
          />
        </ListItemButton>
      </List>

    </Drawer>
  )
}