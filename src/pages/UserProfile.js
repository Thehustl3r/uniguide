import * as React from 'react';
import Button from '@mui/material/Button';
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
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';

const defaultTheme = createTheme();

export default function UserProfile() {
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [openDialog, setOpenDialog] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
      phoneNumber: data.get('phoneNumber')
    });
  };

  const handlePhoneNumberChange = (event) => {
    const input = event.target.value.replace(/\D/g, '');
    setPhoneNumber(input);
  };

  const handleSaveProfile = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img src="/ulogo.png" alt="" style={{ width: '200px', height: '200px' }}/>  
          <Typography component="h1" variant="h5">
            Save Profile
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="middleName"
                  label="Middle Name"
                  name="middleName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
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
                  id="phoneNumber"
                  label="Phone Number"
                  name="phoneNumber"
                  autoComplete="home number"
                  onChange={handlePhoneNumberChange}
                  value={phoneNumber}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="nationality"
                  label="Nationality"
                  name="nationality"
                  autoComplete="place"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="maritalStatus"
                  label="Marital Status"
                  name="maritalStatus"
                  autoComplete="status"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="dateOfBirth"
                  label="Date Of Birth"
                  name="dateOfBirth"
                  autoComplete="date"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="diploma"
                  label="Diploma"
                  name="diploma"
                  autoComplete="certificate"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="trancsript"
                  label="Transcript"
                  name="transcript"
                  autoComplete="bulletins"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="motivationLetter"
                  label="Motivation Letter"
                  name="motivationLetter"
                  autoComplete="letter"
                />
                <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="expirationDate"
                  label="Insert Expiration Date"
                  name="lastName"
                  autoComplete="expired date"
                />
              </Grid>
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="By clicking Save Profile, I confirm that I have read and agree to the UniGuide Privacy policy and  Terms of Use."
                />
              </Grid>
            </Grid>
            <Button
              onClick={handleSaveProfile}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Save Profile
            </Button>
            <Dialog open={openDialog} onClose={handleCloseDialog}>
                <DialogTitle>Invalid Input</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please insert numbers only in the phone number field.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog}>OK</Button>
                </DialogActions>
            </Dialog>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}