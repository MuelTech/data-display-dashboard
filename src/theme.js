import { createTheme } from '@mui/material/styles';

/**
 * Custom Material-UI Theme Configuration
 * Defines custom primary and secondary colors for the application
 * Enhanced with responsive breakpoints for better large screen support
 */
const theme = createTheme({
  palette: {
    primary: {
      main: '#2563eb', // Modern blue
      light: '#60a5fa',
      dark: '#1e40af',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#8b5cf6', // Purple accent
      light: '#a78bfa',
      dark: '#6d28d9',
      contrastText: '#ffffff',
    },
    background: {
      default: '#f8fafc',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          width: '100%',
          // Better spacing for large screens
          '@media (min-width: 1200px)': {
            paddingLeft: '24px',
            paddingRight: '24px',
          },
          '@media (min-width: 1536px)': {
            paddingLeft: '32px',
            paddingRight: '32px',
          },
          '@media (min-width: 1920px)': {
            paddingLeft: '48px',
            paddingRight: '48px',
          },
        },
      },
    },
  },
});

export default theme;

