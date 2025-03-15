import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Box, Container, CssBaseline } from '@mui/material';
import { SnackbarProvider } from 'notistack';
import { useTheme } from './contexts/ThemeContext';

// Fonts
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';

// Components
import Navbar from './components/Navbar';

// Page imports
import Login from './pages/Login';
import Home from './pages/Home';
import Events from './pages/Events';
import Marketplace from './pages/Marketplace';
import Profile from './pages/Profile';
import StudyGroups from './pages/StudyGroups';
import Jobs from './pages/Jobs';
import EventDetails from './pages/EventDetails';

// List of public routes that don't require authentication
const publicRoutes = ['/login', '/signup'];

function App() {
  const location = useLocation();
  const { mode } = useTheme();
  const isPublicRoute = publicRoutes.includes(location.pathname);
  
  // Temporary auth state for development
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  // Protected Route wrapper
  const ProtectedRoute = ({ children }) => {
    if (!isAuthenticated) {
      return <Navigate to="/login" replace />;
    }
    return children;
  };

  return (
    <>
      <CssBaseline />
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        autoHideDuration={3000}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            bgcolor: 'background.default',
          }}
        >
          {!isPublicRoute && isAuthenticated && <Navbar />}
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              ...(isPublicRoute ? {} : {
                py: 3,
                px: { xs: 2, sm: 3 },
              }),
            }}
          >
            <Routes>
              {/* Public Routes */}
              <Route 
                path="/login" 
                element={
                  isAuthenticated ? 
                    <Navigate to="/home" replace /> : 
                    <Login onLogin={() => setIsAuthenticated(true)} />
                } 
              />
              
              {/* Protected Routes */}
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/events"
                element={
                  <ProtectedRoute>
                    <Events />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/events/:id"
                element={
                  <ProtectedRoute>
                    <EventDetails />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/marketplace"
                element={
                  <ProtectedRoute>
                    <Marketplace />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/study-groups"
                element={
                  <ProtectedRoute>
                    <StudyGroups />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/jobs"
                element={
                  <ProtectedRoute>
                    <Jobs />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/profile/:id"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />

              {/* Redirect root to login if not authenticated, otherwise to home */}
              <Route
                path="/"
                element={
                  isAuthenticated ? 
                    <Navigate to="/home" replace /> : 
                    <Navigate to="/login" replace />
                }
              />
            </Routes>
          </Box>
        </Box>
      </SnackbarProvider>
    </>
  );
}

export default App;
