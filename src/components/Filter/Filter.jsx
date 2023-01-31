import { TextField, Typography, Container } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setFilterContacts } from 'redux/contacts/fileterSlice';
import styled from 'styled-components';

const Form = styled.form`
  width: 320px;
`;

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilter = event => {
    dispatch(setFilterContacts(event.target.value));
  };
  return (
    <Container
      component="section"
      maxWidth="xs"
      sx={{
        marginTop: '64px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography component="h5" variant="h5">
        Find contacts by name
      </Typography>

      <Form autoComplete="off">
        <TextField
          onChange={handleFilter}
          variant="outlined"
          margin="normal"
          fullWidth
          id="email"
          label="Filter contacts"
          name="email"
          autoComplete="email"
          autoFocus
        />
      </Form>
    </Container>
  );
};
