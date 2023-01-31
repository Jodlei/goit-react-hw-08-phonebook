import { useDispatch } from 'react-redux';
import { Button, TextField, Typography, Container } from '@mui/material';

import { logIn } from 'redux/auth/operations';

import styled from 'styled-components';

const Form = styled.form`
  width: 320px;
`;

function LoginPage() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        marginTop: '64px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography component="h1" variant="h5">
        Login
      </Typography>

      <Form onSubmit={handleSubmit} autoComplete="off">
        <TextField
          variant="outlined"
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
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />

        <Button type="submit" fullWidth variant="contained" color="primary">
          Sign In
        </Button>
      </Form>
    </Container>
  );
}

export default LoginPage;
