import * as React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { initialUser } from '../constants/user';
import InputField from './InputField';
import { registerInputFields } from '../constants/inputs';
import Button from '@mui/material/Button';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Track Your Jobs
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function LoginPage() {
  const [user, setUser] = useState(initialUser);
  console.log(user);
  const signinPage = user.isRegistered;
  const linkMessage = signinPage ? 'Dont have an account? Register' : 'Have an account? Log in';
  useEffect(() => {
    setUser(initialUser);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(user, 'user');
    console.log({
      name: data.get('name'),
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const handleInputChange = (e) => {
    console.log(e.target);
    switch (e.target.name) {
      case 'name':
        setUser({ ...user, name: e.target.value });
        break;
      case 'email':
        setUser({ ...user, email: e.target.value });
        break;
      case 'password':
        setUser({ ...user, password: e.target.value });
        break;
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          {signinPage ? 'Sign In' : 'Register'}
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          {registerInputFields.map((input) => {
            if (input.name === 'name' && signinPage) {
              return;
            }

            return (
              <InputField
                key={input.name}
                name={input.name}
                label={input.label}
                value={user[input.name]}
                onChange={handleInputChange}
              />
            );
          })}

          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            {signinPage ? 'Sign In' : 'Register'}
          </Button>
          <Grid container>
            <Grid item xs></Grid>
            <Grid item>
              <Link to="/login">{linkMessage}</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}
