import { createTheme } from '@mui/material';

export const customTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#03071e',
      light: '#370617',
      dark: '#6a040f'
    },
    background: {
      paper: '#151515',
      default: '#0d1b2a'
    }
  },
  typography: {
    fontFamily: ['Oswald', 'sans-serif'].join(',')
  }
});
