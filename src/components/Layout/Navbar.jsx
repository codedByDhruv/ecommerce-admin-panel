import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Menu,
  MenuItem,
  Avatar,
  Badge,
  Typography,
  useTheme,
} from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import LogoutIcon from '@mui/icons-material/Logout';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Navbar = ({ toggleTheme, mode, open, setOpen }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    window.location.href = '/';
  };

  const handleToggleDrawer = () => {
    setOpen(!open);
  };

  const handleNotificationClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleNotificationClose = () => {
    setAnchorEl(null);
  };

  const notifications = [
    'New user registered!',
    'Server backup completed.',
    'New order received.',
  ];

  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: theme.zIndex.drawer + 1,
        width: `calc(100% - ${open ? 240 : 60}px)`,
        ml: `${open ? 240 : 60}px`,
        transition: 'all 0.3s',
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Left: Toggle Sidebar */}
        <IconButton color="inherit" onClick={handleToggleDrawer} edge="start">
          {open ? <ChevronLeftIcon /> : <MenuIcon />}
        </IconButton>

        {/* Right: Notification + Theme + Profile + Logout */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {/* Notification */}
          <IconButton color="inherit" onClick={handleNotificationClick}>
            <Badge badgeContent={notifications.length} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleNotificationClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            {notifications.length > 0 ? (
              notifications.map((note, index) => (
                <MenuItem key={index}>{note}</MenuItem>
              ))
            ) : (
              <MenuItem>No new notifications</MenuItem>
            )}
          </Menu>

          {/* Theme Switch */}
          <IconButton color="inherit" onClick={toggleTheme}>
            {mode === 'dark' ? (
              <Brightness7Icon
                sx={{
                  transition: 'transform 0.5s',
                  transform: mode === 'dark' ? 'rotate(360deg)' : 'rotate(0deg)',
                }}
              />
            ) : (
              <Brightness4Icon
                sx={{
                  transition: 'transform 0.5s',
                  transform: mode === 'light' ? 'rotate(360deg)' : 'rotate(0deg)',
                }}
              />
            )}
          </IconButton>

          {/* Profile Avatar */}
          <IconButton color="inherit">
            <Avatar
              alt="Profile"
              src="https://i.pravatar.cc/300" // Static profile pic - you can replace this URL
              sx={{ width: 32, height: 32 }}
            />
          </IconButton>

          {/* Logout */}
          <IconButton color="inherit" onClick={handleLogout}>
            <LogoutIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
