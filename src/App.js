import LandingPage from './pages/LandingPage';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { customTheme as theme } from './theme/customTheme';
console.log(theme);
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LandingPage />
    </ThemeProvider>
  );
}

export default App;
