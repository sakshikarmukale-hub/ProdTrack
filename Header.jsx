import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'
import Badge from '@mui/material/Badge'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'

import SearchIcon from '@mui/icons-material/Search'
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded'
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded'

export default function Header({
  userName = 'Priya Sharma',
  role = 'Indexer',
}) {
  const initials = userName
    .split(' ')
    .map((n) => n[0])
    .join('')

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        bgcolor: 'navy.main',
        height: 68,
        justifyContent: 'center',
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          minHeight: '68px !important',
          px: 3,
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >

        {/* ================= LEFT ================= */}

        <Box>
          <Typography
            sx={{
              color: '#fff',
              fontWeight: 600,
              fontSize: 15,
              lineHeight: 1.3,
            }}
          >
            Welcome, {userName}
          </Typography>

          <Typography
            sx={{
              color: 'grey.500',
              fontSize: 12,
              lineHeight: 1.4,
              mt: 0.25,
            }}
          >
            {role}
          </Typography>
        </Box>


        {/* ================= RIGHT ================= */}

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1.5,
          }}
        >

          {/* SEARCH */}

          <Box
            sx={{
              height: 38,
              display: 'flex',
              alignItems: 'center',
              bgcolor: 'navy.light',
              borderRadius: 2,
              px: 1.5,
              width: 288,
              boxSizing: 'border-box',

              '&:hover': {
                bgcolor: 'navy.lightHover',
              },
            }}
          >
            <SearchIcon
              sx={{
                color: 'grey.500',
                fontSize: 18,
                mr: 1,
              }}
            />

            <InputBase
              placeholder="Search projects, entries, users…"
              sx={{
                color: 'grey.200',
                fontSize: 14,
                width: '100%',
                py: 0,

                '& input::placeholder': {
                  color: 'grey.500',
                  opacity: 1,
                },
              }}
            />
          </Box>


          {/* NOTIFICATION */}

          <IconButton
            sx={{
              bgcolor: 'navy.light',
              borderRadius: 2,
              width: 38,
              height: 38,

              '&:hover': {
                bgcolor: 'navy.lightHover',
              },
            }}
          >
            <Badge
              badgeContent={3}
              color="error"
              sx={{
                '& .MuiBadge-badge': {
                  fontSize: 10,
                  fontWeight: 700,
                  minWidth: 16,
                  height: 16,
                },
              }}
            >
              <NotificationsRoundedIcon
                sx={{
                  color: 'warning.main',
                  fontSize: 19,
                }}
              />
            </Badge>
          </IconButton>


          {/* HELP */}

          <IconButton
            sx={{
              bgcolor: 'navy.light',
              borderRadius: 2,
              width: 38,
              height: 38,

              '&:hover': {
                bgcolor: 'navy.lightHover',
              },
            }}
          >
            <HelpOutlineRoundedIcon
              sx={{
                color: 'grey.300',
                fontSize: 19,
              }}
            />
          </IconButton>


          {/* AVATAR */}

          <Avatar
            sx={{
              bgcolor: '#6366f1',
              width: 38,
              height: 38,
              fontSize: 13,
              fontWeight: 700,
            }}
          >
            {initials}
          </Avatar>


          {/* LOGOUT */}

          <Button
            sx={{
              height: 38,
              bgcolor: 'navy.light',
              color: 'grey.200',
              px: 2,
              borderRadius: 2,
              fontSize: 13,
              textTransform: 'none',

              '&:hover': {
                bgcolor: 'navy.lightHover',
              },
            }}
          >
            Logout
          </Button>

        </Box>

      </Toolbar>
    </AppBar>
  )
}