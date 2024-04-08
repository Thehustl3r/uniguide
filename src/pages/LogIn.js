import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { setLoginStatus } from '../redux/authReducer/authSlice';
import LoadingIndicator from '../components/loading_indicator';
import { login } from '../redux/userReducer/loginSlice';

const defaultTheme = createTheme();

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginFail, setLoginFailed] = useState(false);
  const loginState = useSelector(state => state.login);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    try {
      const loginResult = await dispatch(login({
        email: data.get('email'),
        password: data.get('password'),
      }));

      dispatch(setLoginStatus({
        islogedIn: true,
        name: `${loginResult['payload']?.user?.first_name[0] ?? 'P'}${loginResult['payload']?.user?.last_name[0] ?? 'M'}`,
        token: loginResult['payload']?.token ?? '',
      }));
      console.log(`login succed`);

      navigate('/');

    } catch (error) {
      console.error('Login error:', error);
      setLoginFailed(true);
      return;
      // Handle login error (e.g., display error message to user)
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'rgba(119, 130, 145, 1)',
            padding: '20px',
            width: '600px',
          }}
        >
          <img src="/ulogo.png" alt="" style={{ width: '200px', height: '200px' }} />
          <Typography component="h1" variant="h5">
            Log in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            {loginFail && <p style={{ color: 'red' }}>Incorrect password or userName</p>}
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            {
              loginState?.isloading ?
                <div>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{
                      mt: 3,
                      mb: 2,
                      backgroundColor: 'rgba(227, 117, 118, 1)',
                    }}
                  >
                    Log In
                  </Button>
                  < LoadingIndicator />

                </div>
                :
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 3,
                    mb: 2,
                    backgroundColor: 'rgba(227, 117, 118, 1)',
                  }}
                >
                  Log In
                </Button>
            }
            <Grid container>
              <Grid item xs>
                <RouterLink to="#" variant="body2">
                  Forgot password?
                </RouterLink>
              </Grid>
              <Grid item>
                <RouterLink to="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </RouterLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Login;
