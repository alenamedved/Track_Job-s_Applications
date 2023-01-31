import { createTheme } from '@mui/material';

export const customTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#118ab2',
      light: 'rgba(168,85,247,.65)',
      dark: 'rgba(168,85,247,.28)',
    },
    background: {
      paper: '#151515',
      default: 'rgba(0,0,0,.92)',
    },
  },
  typography: {
    fontFamily: ['Oswald', 'sans-serif'].join(','),
    button: {
      fontFamily: '"Oswald", sans-serif',
      fontWeight: 700,
    },
  },
});
