import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import src from '../sources/main.png';
function ErrorPage() {
  return (
    <>
      <Box
        component="img"
        alt="app main image"
        src={src}
        sx={{
          position: 'absolute',
          top: '0px',
          left: '20%',
          height: '100vh',
          opacity: 0.4,
        }}
      />
      <Box
        sx={{
          textAlign: 'center',
        }}
      >
        <h1>404</h1>
        <div>Sorry, the page is not found</div>
        <Button variant="contained" color="info" component={Link} to="/">
          <Link to="/">Back home</Link>
        </Button>
      </Box>
    </>
  );
}

export default ErrorPage;
