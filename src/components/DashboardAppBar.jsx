import { AppBar, Toolbar, Typography, Box, Avatar, Badge, IconButton, Tooltip } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

/**
 * DashboardAppBar Component
 * Top navigation bar with dashboard title and user avatar
 * Displays user avatar with badge in the top-right corner
 * Standard layout pattern for modern web applications
 */
function DashboardAppBar() {
  return (
    <AppBar 
      position="sticky" 
      elevation={2}
      sx={{ 
        backgroundColor: 'white',
        color: 'text.primary',
        borderBottom: '1px solid #e0e0e0',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
        {/* Left side: Dashboard Title */}
        <Box display="flex" alignItems="center" gap={2}>
          <IconButton
            edge="start"
            color="primary"
            aria-label="menu"
            sx={{ display: { xs: 'block', sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography 
            variant="h5" 
            component="div" 
            fontWeight="bold"
            color="primary"
            sx={{ display: { xs: 'none', sm: 'block' },
                  fontSize: { xs: '1.25rem', sm: '1.5rem', lg: '1.75rem' } 
                }}
          >
            📊 Data Display Dashboard
          </Typography>
          <Typography 
            variant="h6" 
            component="div" 
            fontWeight="bold"
            color="primary"
            sx={{ display: { xs: 'block', sm: 'none' } }}
          >
            📊 Dashboard
          </Typography>
        </Box>

        {/* Right side: User Avatar with Badge */}
        <Box display="flex" alignItems="center" gap={2}>
          {/* User Avatar with Badge */}
          <Tooltip title="John Lemuel Teano - 12 unread messages">
            <Badge 
              badgeContent={12} 
              color="error"
              overlap="circular"
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              sx={{
                cursor: 'pointer',
                '& .MuiBadge-badge': {
                  fontSize: '0.7rem',
                  height: '22px',
                  minWidth: '22px',
                  borderRadius: '11px',
                  border: '2px solid white',
                }
              }}
            >
              <Avatar
                src="https://scontent.fmnl44-1.fna.fbcdn.net/v/t39.30808-6/557750260_4242583505976570_3615779150810766418_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHUNaxgsJpCuJbuBDQycd89IcG0dId8vU8hwbR0h3y9T5p55DnAMluaa8JI5MPckbMxRBphRAdGzwFfK5gzTfP0&_nc_ohc=T7C2FO4eRhQQ7kNvwHVsxjf&_nc_oc=Adk5H5JL7ah1kd0G8gj7HTBEDfdWmC4pczAZjrMLxZhBb8QQ3GSks0Yh2fsyqFilmEY&_nc_zt=23&_nc_ht=scontent.fmnl44-1.fna&_nc_gid=NRnY-qxtrwIojKSmqvpgUg&oh=00_AffEe2OhO0WemFqTf1fCEEDPmClUTD4XXa3gpjZ3fa2DBg&oe=68EB43FD"
                alt="John Lemuel Teano"
                sx={{
                  width: 45,
                  height: 45,
                  border: '2px solid white',
                }}
              />
            </Badge>
          </Tooltip>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default DashboardAppBar;

