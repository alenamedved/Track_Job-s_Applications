import React, { useState, useEffect } from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { logout } from '../../firebase';
import { Outlet } from 'react-router-dom';
import { Logo } from '../../components';

import { auth, db } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { query, collection, getDocs, where } from 'firebase/firestore';

function Layout() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState('');
  const navigate = useNavigate();
  console.log(error);

  const fetchUserName = async () => {
    try {
      console.log(user, 'user');
      const q = query(collection(db, 'users'), where('uid', '==', user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data?.name);
      console.log(data);
    } catch (err) {
      console.error(err);
      alert('An error occured while fetching user data');
    }
  };

  useEffect(() => {
    // if (loading) return;
    if (!user) return navigate('/login');
    fetchUserName();
  }, [user, loading]);

  return (
    <Grid container sx={{ p: 4 }}>
      <Grid container justifyContent="space-between">
        <Logo />
        <Typography>{`Hello, ${name}`}</Typography>
        <Button onClick={logout}>Log out</Button>
      </Grid>
      <Outlet />
    </Grid>
  );
}

export default Layout;
