import * as React from 'react';
import LockRounded from '@mui/icons-material/LockRounded';
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
import axios from 'axios';
import Swal from 'sweetalert2';
import { redirect } from 'next/dist/server/api-utils';

const defaultTheme = createTheme();

export default function SignIn() {

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (!data.get('username')) {
      Swal.fire({
        icon: "warning",
        title: "You have an error",
        text: "Your username is empty",
      });
    }
    else if (!data.get('password')) {
      Swal.fire({
        icon: "warning",
        title: "You have an error",
        text: "Your password is empty",
      });
    }
    else {
      try {
        const response = await axios.post('http://localhost:3000/api/signin', {
          data:{
            "username": data.get('username'),
            "password": data.get('password')
          }
        });
        const accessToken = response.data.accessToken;
        if (accessToken) {
          localStorage.setItem('accesstoken', accessToken);
      
          Swal.fire({
            title: "Login Success",
            text: "You want to go to Homepage?",
            icon: "success",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Confirm"
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.href = 'http://localhost:3000/adminpage';
            }
          });
        } else{
            Swal.fire({
              title:"You have an error",
              icon:"error",
              text: "You want to go to Homepage?",
            })
        }
      } catch (error) {
          Swal.fire({
            title:"You have an error",
            icon:"error",
            text: "Your username or password incorrect",
          })
      }
    }

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
          <LockRounded sx={{ m: 1, fontSize: 50 }}>
          </LockRounded>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, textAlign: 'center', width: '80%' }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
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
            <Grid container>
              <Grid item>
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  sx={{ float: 'left', textAlign: 'left' }} // Set to left
                  label="Remember me"
                />
              </Grid>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Link href="/signup" variant="body2">
                {"Sign Up"}
              </Link>
              <Link href="#" variant="body2">
                {"Forgot password?"}
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
