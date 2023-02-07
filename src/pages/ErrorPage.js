import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Container, Typography } from '@mui/material';
import src from '../sources/main.png';
function ErrorPage() {
  return (
    <Container sx={{ position: 'relative', textAlign: 'center', padding: '0px' }}>
      <Box
        component="img"
        alt="app main image"
        src={src}
        sx={{
          width: '100%',
          height: 'auto',
          opacity: 0.4,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Typography variant="h4">404</Typography>
        <Typography variant="body" component="div" sx={{ fontSize: { md: 22, sm: 20, xs: 15 } }}>
          Sorry, the page is not found
        </Typography>
        <Button variant="contained" color="info" component={Link} to="/">
          <Link to="/land">Back home</Link>
        </Button>
      </Box>
    </Container>
  );
}

export default ErrorPage;
