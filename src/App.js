import { LandingPage, LoginPage, ErrorPage } from './pages';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { customTheme as theme } from './theme/customTheme';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { Logo } from './components';
import { Dashboard, AddJobForm, Layout } from './pages/dashboard';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <Logo /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="addjob" element={<AddJobForm />} />
          </Route>

          {/* <Route path="/" element={<Dashboard />} /> */}
          <Route path="login" element={<LoginPage />} />
          <Route path="letstrack" element={<LandingPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
