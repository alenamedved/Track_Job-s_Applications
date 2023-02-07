import React, { useState, useEffect } from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Logo } from '../../components';

import { useAuth } from '../../components/context/authUserContext';
import { useNavigate } from 'react-router-dom';
import Loader from '../../components/Loader';

function Layout() {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const { authUser, logout, loading } = useAuth();

  useEffect(() => {
    if (loading) return;
    if (!authUser) return navigate('/login');

    setName(authUser.name);
  }, [authUser, loading]);

  if (!authUser) return <Loader />;

  return (
    <Grid container sx={{ p: 4, justifyContent: 'center' }}>
      <Grid container justifyContent="space-between">
        <Logo />
        {name && <Typography>{`How was your day, ${name}?`}</Typography>}
        <Button onClick={logout}>Log out</Button>
      </Grid>
      <Outlet />
    </Grid>
  );
}

export default Layout;
