import React from 'react';
import { Box } from '@mui/material';
import logo from '../sources/undraw_job_hunt.svg';

function Logo() {
  return (
    <Box
      component="img"
      alt="logo"
      src={logo}
      sx={{
        width: '100px',
        // height: '300px',
      }}
    ></Box>
  );
}

export default Logo;
