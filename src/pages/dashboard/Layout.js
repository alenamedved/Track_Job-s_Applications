import React, { useState, useEffect } from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Logo } from '../../components';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../../components/context/authUserContext';
import { useNavigate } from 'react-router-dom';
import Loader from '../../components/Loader';

function Layout() {
  const [name, setName] = useState('');
  const [button, setButton] = useState({});
  const navigate = useNavigate();
  const location = useLocation();

  const { authUser, logout, loading } = useAuth();

  useEffect(() => {
    if (loading) return;
    if (!authUser) return navigate('/login');
    console.log('useEffect');
    setName(authUser.name);
    if (location.pathname === '/addjob') {
      setButton({ name: 'Dashboard', destination: '/' });
    } else if (location.pathname === '/') {
      setButton({ name: 'Add new Application', destination: '/addjob' });
    }
  }, [authUser, loading, location.pathname]);

  if (!authUser) return <Loader />;

  return (
    <Grid container sx={{ p: 4, justifyContent: 'center' }}>
      <Grid container justifyContent="space-between">
        <Logo />
        <Grid item alignSelf="center" sx={{ textAlign: 'center' }}>
          {name && <Typography>{`How was your day, ${name}?`}</Typography>}

          <Button onClick={() => navigate(button.destination)}>{button.name}</Button>
        </Grid>

        <Button onClick={logout}>Log out</Button>
      </Grid>
      <Outlet />
    </Grid>
  );
}

export default Layout;
