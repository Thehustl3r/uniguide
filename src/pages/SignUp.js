import * as React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import{addUser} from '../redux/userReducer/registerUserSlice'
import { login } from '../redux/userReducer/loginSlice';

const defaultTheme = createTheme();

export default function SignUp() {
  const navigate = useNavigate();
  const dispatch =  useDispatch();
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [passwordError, setPasswordError] = React.useState('');

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
      };
    
      const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
      };
    
      const handleSubmit = async(event) => {
        event.preventDefault();
        console.log(event)
    
        // Check if passwords match
        if (password !== confirmPassword) {
          setPasswordError('Passwords do not match');
          return;
        }
        const userData = {
          first_name: event.target.first_name.value,
          middle_name: event.target.middle_name.value,
          last_name: event.target.last_name.value,
          email: event.target.email.value,
          password: password,
        };
        const signedUp = await dispatch(addUser(userData));
        console.log(signedUp);
        // const loginn = await dispatch(login({
        //   email: event.target.email.value,
        //   password: password,
        // }))
        // console.log(loginn);

    
        // Passwords match, continue with your form submission logic
        console.log({
          first_name: event.target.first_name.value,
          middle_name: event.target.middle_name.value,
          last_name: event.target.last_name.value,
          email: event.target.email.value,
          password: password,
        });

        navigate('/')
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'rgba(119, 130, 145, 1)',
            padding: '20px',
            width:'600px',
          }}
        >
          <img src="/ulogo.png" alt="" style={{ width: '200px', height: '200px' }}/>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="first_name"
                  required
                  fullWidth
                  id="first_name"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="middle_name"
                  required
                  fullWidth
                  id="middle_name"
                  label="Middle Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="last_name"
                  label="Last Name"
                  name="last_name"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={handlePasswordChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirmPassword"
                  label="confirmPassword"
                  type="password"
                  id="confirmPassword"
                  autoComplete="new-password"
                  onChange={handleConfirmPasswordChange}
                  error={passwordError !== ''}
                  helperText={passwordError}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="By clicking Register, I confirm that I have read and agree to the UniGuide Privacy policy and  Terms of Use."
                />
              </Grid>
            </Grid>
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
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}