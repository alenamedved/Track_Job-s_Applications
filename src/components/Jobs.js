import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Application from './Application';
import { useAuth } from './context/authUserContext';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';

const applications = [
  {
    position: 'Software engineer',
    company: 'Google',
    date: new Date().toDateString(),
    status: 'applied',
    notes: 'any note',
    response: 'no',
    location: 'remote',
  },
  {
    position: 'b',
    company: 'b',
    date: new Date().toDateString(),
    status: 'b',
    notes: 'b',
    response: 'b',
    location: 'b',
  },
  {
    position: 'c',
    company: 'c',
    date: new Date().toDateString(),
    status: 'c',
    notes: 'c',
    response: 'c',
    location: 'c',
  },
];
function Jobs() {
  const { authUser } = useAuth();
  const [applications, setApplications] = useState([]);
  const [isDataLoading, setIsDataLoading] = useState(false);

  useEffect(() => {
    setIsDataLoading(true);
    const unsubscribe = onSnapshot(collection(db, authUser.uid), (snapshot) => {
      const snapshotDocs = [];
      snapshot.forEach((doc) => {
        snapshotDocs.push({ ...doc.data(), id: doc.id });
      });
      setIsDataLoading(false);
      setApplications(snapshotDocs);
    });
    return () => {
      //Used to remove the snapshot listener when the component is unmounted/unsubscribed
      unsubscribe();
    };
  }, [authUser]);
  return (
    <Grid container spacing={6} sx={{ p: 6 }}>
      {!isDataLoading &&
        applications.map((application, ind) => <Application key={ind} data={application} />)}
    </Grid>
  );
}

export default Jobs;
