import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { initialUser } from '../constants/user';
import InputField from './InputField';
import { registerInputFields } from '../constants/inputs';
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { useAuthState } from 'react-firebase-hooks/auth';

import {
  auth,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from '../firebase';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/">
        Track Your Jobs
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function LoginPage() {
  const [userData, setUserData] = useState(initialUser);
  const [user, loading, error] = useAuthState(auth);

  console.log(user, loading, error);
  const navigate = useNavigate();

  const signinPage = userData.isRegistered;
  const linkMessage = signinPage ? 'Dont have an account? Register' : 'Have an account? Log in';

  useEffect(() => {
    // if (loading) {
    //   return;
    // }
    if (user) navigate('/');
  }, [user, loading]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(userData, 'user');
    console.log({
      name: data.get('name'),
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  const register = () => {
    const { name, email, password } = userData;
    if (!name) {
      toast.error('Please, provide a name');
      return;
    }
    registerWithEmailAndPassword(name, email, password);
  };

  return (
    <Container component="main" maxWidth="xs">
      <ToastContainer />
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
                value={userData[input.name]}
                onChange={handleInputChange}
              />
            );
          })}

          <Button
            type="submit"
            onClick={
              signinPage
                ? () => logInWithEmailAndPassword(userData.email, userData.password)
                : register
            }
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {signinPage ? 'Sign In' : 'Register'}
          </Button>
          <Button
            type="submit"
            onClick={signInWithGoogle}
            fullWidth
            variant="contained"
            sx={{ mt: 1, mb: 2 }}
          >
            {signinPage ? 'Sign In With Google' : 'Register with Google'}
          </Button>
          <Grid container>
            <Grid item xs>
              {/* <Button
                sx={{ textTransform: 'none' }}
                variant="text"
                aria-label="forgot password"
                size="small"
              >
                Forgot password?
              </Button> */}
            </Grid>
            <Grid item>
              <Button
                onClick={() => setUserData({ ...userData, isRegistered: !userData.isRegistered })}
                sx={{ textTransform: 'none' }}
                variant="text"
                aria-label="forgot password"
                size="small"
              >
                {linkMessage}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}
