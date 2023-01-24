import { LandingPage, Dashboard, LoginPage } from './pages';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { customTheme as theme } from './theme/customTheme';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <ErrorPage /> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
