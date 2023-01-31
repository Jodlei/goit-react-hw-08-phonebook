import { Container, Typography } from '@mui/material';

function HomePage() {
  return (
    <>
      <Container
        sx={{
          marginTop: '64px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography
          variant="h1"
          component="h1"
          sx={{
            textAlign: 'center',
            flexGrow: 1,
          }}
        >
          Phonebook
        </Typography>
      </Container>
    </>
  );
}

export default HomePage;
