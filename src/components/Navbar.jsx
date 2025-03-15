import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Container,
  Badge,
  Menu,
  MenuItem,
  useTheme,
  alpha,
  Tooltip,
} from '@mui/material';
import { motion } from 'framer-motion';
import {
  Home,
  Calendar,
  ShoppingBag,
  Users,
  Briefcase,
  Bell,
  MapPin,
  User,
  Moon,
  Sun,
} from 'lucide-react';
import { useTheme as useCustomTheme } from '../contexts/ThemeContext';

const Navbar = () => {
  const theme = useTheme();
  const { mode, toggleColorMode } = useCustomTheme();
  const location = useLocation();
  const [notificationAnchor, setNotificationAnchor] = useState(null);
  const [locationAnchor, setLocationAnchor] = useState(null);
  const isDarkMode = mode === 'dark';

  const links = [
    { path: '/', icon: <Home size={20} />, label: 'For You' },
    { path: '/events', icon: <Calendar size={20} />, label: 'Events' },
    { path: '/marketplace', icon: <ShoppingBag size={20} />, label: 'Marketplace' },
    { path: '/study-groups', icon: <Users size={20} />, label: 'Study Groups' },
    { path: '/jobs', icon: <Briefcase size={20} />, label: 'Jobs' },
  ];

  const handleNotificationClick = (event) => {
    setNotificationAnchor(event.currentTarget);
  };

  const handleLocationClick = (event) => {
    setLocationAnchor(event.currentTarget);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        background: theme.palette.background.paper,
        borderBottom: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
      }}
      elevation={0}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Box
            component={Link}
            to="/"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              textDecoration: 'none',
            }}
          >
            <motion.img
              src="/images/peernet-logo.jpg"
              alt="PeerNet Logo"
              style={{ width: 40, height: 40, objectFit: 'contain' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            />
            <Typography
              variant="h6"
              component={motion.div}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              sx={{
                fontFamily: 'Poppins',
                fontWeight: 600,
                background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              PeerNet
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', gap: 1 }}>
            {links.map(({ path, icon, label }) => (
              <Button
                key={path}
                component={Link}
                to={path}
                startIcon={icon}
                color={location.pathname === path ? 'primary' : 'inherit'}
                sx={{
                  borderRadius: 2,
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: alpha(theme.palette.primary.main, 0.1),
                  },
                }}
              >
                {label}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Tooltip title="Toggle dark mode">
              <IconButton onClick={toggleColorMode} color="inherit">
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </IconButton>
            </Tooltip>
            <IconButton 
              onClick={handleLocationClick} 
              color="inherit"
              sx={{ '&:hover': { backgroundColor: alpha(theme.palette.primary.main, 0.1) } }}
            >
              <MapPin size={20} />
            </IconButton>
            <Menu
              anchorEl={locationAnchor}
              open={Boolean(locationAnchor)}
              onClose={() => setLocationAnchor(null)}
              PaperProps={{
                sx: {
                  backgroundColor: theme.palette.background.paper,
                  borderRadius: 2,
                  boxShadow: `0px 0px 10px ${alpha(theme.palette.primary.main, 0.2)}`,
                }
              }}
            >
              <MenuItem>Current Location</MenuItem>
              <MenuItem>Change Location</MenuItem>
            </Menu>

            <IconButton 
              onClick={handleNotificationClick} 
              color="inherit"
              sx={{ '&:hover': { backgroundColor: alpha(theme.palette.primary.main, 0.1) } }}
            >
              <Badge badgeContent={3} color="primary">
                <Bell size={20} />
              </Badge>
            </IconButton>
            <Menu
              anchorEl={notificationAnchor}
              open={Boolean(notificationAnchor)}
              onClose={() => setNotificationAnchor(null)}
              PaperProps={{
                sx: {
                  backgroundColor: theme.palette.background.paper,
                  borderRadius: 2,
                  boxShadow: `0px 0px 10px ${alpha(theme.palette.primary.main, 0.2)}`,
                }
              }}
            >
              <MenuItem>New Event Nearby</MenuItem>
              <MenuItem>New Message</MenuItem>
              <MenuItem>Item Price Drop</MenuItem>
            </Menu>

            <IconButton
              component={Link}
              to="/profile"
              color={location.pathname === '/profile' ? 'primary' : 'inherit'}
              sx={{ '&:hover': { backgroundColor: alpha(theme.palette.primary.main, 0.1) } }}
            >
              <User size={20} />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
