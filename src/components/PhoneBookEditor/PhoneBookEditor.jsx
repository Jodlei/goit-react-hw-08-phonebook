import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { getContacts } from 'redux/contacts/selectors';
import { Button, TextField, Typography, Container } from '@mui/material';
import styled from 'styled-components';

const Form = styled.form`
  width: 320px;
`;

export const PhoneBookEditor = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.name.value;
    const number = form.elements.phone.value;

    if (
      contacts.map(item => item.name.toLowerCase()).includes(name.toLowerCase())
    ) {
      alert(name + 'is already in contacts!');
    } else {
      dispatch(addContact({ name, number }));
    }
    form.reset();
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
        Your contacts
      </Typography>

      <Form onSubmit={handleSubmit} autoComplete="off">
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="name"
          label="Name"
          name="name"
          autoComplete="name"
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          name="Number"
          label="Number"
          type="tel"
          id="phone"
          autoComplete="current-password"
        />

        <Button type="submit" fullWidth variant="contained" color="primary">
          Add contact
        </Button>
      </Form>
    </Container>
  );
};
