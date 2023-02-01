import React, { useState, useEffect } from 'react';

import Stats from '../components/Stats';
import Jobs from '../components/Jobs';
import { Button } from '@mui/material';
import { auth, logout, db } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { query, collection, getDocs, where } from 'firebase/firestore';

function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState('');
  const navigate = useNavigate();
  console.log(error);
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, 'users'), where('uid', '==', user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert('An error occured while fetching user data');
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate('/login');
    fetchUserName();
  }, [user, loading]);
  return (
    <>
      <div>{`Hello, ${name}`}</div>
      <Button onClick={logout}>Log out</Button>
      <Stats />
      <Jobs />
    </>
  );
}

export default Dashboard;
