import { createTheme, alpha } from '@mui/material/styles';

const colors = {
  // Brand Colors from Design System
  white: '#FFFFFF',
  lightGrey: '#F7F7F7',
  accentBlue: '#4A90E2',
  purple: '#9B59B6',
  teal: '#1ABC9C',
  
  // Dark Theme Colors
  black: '#121212',
  darkBg: '#1A1A1A',
  darkPaper: '#242424',
  
  // Accent Colors
  success: '#2ECC71',
  error: '#E74C3C',
  warning: '#F39C12',
  info: '#3498DB',
};

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      main: colors.accentBlue,
      light: alpha(colors.accentBlue, 0.8),
      dark: '#2171C7',
    },
    secondary: {
      main: colors.teal,
      light: '#48D1B6',
      dark: '#16A085',
    },
    background: {
      default: mode === 'dark' ? colors.darkBg : colors.lightGrey,
      paper: mode === 'dark' ? colors.darkPaper : colors.white,
    },
    text: {
      primary: mode === 'dark' ? colors.white : colors.black,
      secondary: mode === 'dark' ? alpha(colors.white, 0.7) : alpha(colors.black, 0.7),
    },
    error: {
      main: colors.error,
    },
    warning: {
      main: colors.warning,
    },
    info: {
      main: colors.info,
    },
    success: {
      main: colors.success,
    },
    divider: mode === 'dark' ? alpha(colors.white, 0.1) : alpha(colors.black, 0.1),
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    h1: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 600,
    },
    h2: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 600,
    },
    h3: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 600,
    },
    h4: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 600,
    },
    h5: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 600,
    },
    h6: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          height: 48,
          borderRadius: 16,
          textTransform: 'none',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 500,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          backdropFilter: 'blur(8px)',
          background: mode === 'dark' 
            ? alpha(colors.darkPaper, 0.8)
            : colors.white,
          boxShadow: mode === 'dark' 
            ? `0 8px 32px ${alpha(colors.black, 0.5)}`
            : `0 4px 12px ${alpha(colors.black, 0.05)}`,
          border: `1px solid ${mode === 'dark' ? alpha(colors.white, 0.1) : alpha(colors.black, 0.1)}`,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          backdropFilter: 'blur(8px)',
          background: mode === 'dark' 
            ? alpha(colors.darkPaper, 0.8)
            : colors.white,
        },
      },
    },
  },
});

const theme = createTheme(getDesignTokens('dark'));

export { theme, getDesignTokens };
