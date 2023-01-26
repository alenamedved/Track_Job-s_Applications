import { LandingPage, Dashboard, LoginPage, ErrorPage } from './pages';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { customTheme as theme } from './theme/customTheme';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Logo } from './components';
import RegisterPage from './pages/RegisterPage';
// import { Box } from '@mui/system';
// import logo from './sources/undraw_job_hunt.svg';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Logo />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="rightplacetoland" element={<LandingPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
