import { Grid } from '@mui/material';
import React from 'react';
import Application from './Application';

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
  return (
    <Grid container spacing={4} sx={{ mt: 4 }}>
      {applications.map((application, ind) => (
        <Application key={ind} data={application} />
      ))}
    </Grid>
  );
}

export default Jobs;
