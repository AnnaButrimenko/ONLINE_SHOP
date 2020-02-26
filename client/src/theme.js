import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 320,
      sm: 480,
      md: 768,
      lg: 996,
      xl: 1280,
    },
  },
  palette: {
    primary: {
      main: '#71b430',
      dark: '#588c25',
      contrastText: '#fff',
    },
    secondary: {
      main: '#333',
      dark: '#666',
      contrastText: '#fff',
    },
    error: {
      main: '#F9B700',
      dark: '#e00000',
      contrastText: '#fff',
    },
    text: {
      primary: '#1a1a1a',
      secondary: '#e00000',
    },
    background: {
      default: '#fff',
      primary: '#e2e2e2',
      secondary: '#f1f2f3',
      carousel: 'rgba(255, 255, 255, .6)',
      dark: '#000'
    },
  },
  typography: {
    a: {
      textDecoration: 'none',
    },
  },
});

export default theme;
