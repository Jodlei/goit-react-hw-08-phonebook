import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { deleteContact, fetchContacts } from 'redux/contacts/operations';
import {
  getContacts,
  getIsLoading,
  getContactsFilter,
} from 'redux/contacts/selectors';
import { Typography, Button, Container } from '@mui/material';
import { Loader } from 'components/Loader/Loader';

import {
  ContactList,
  ContactItem,
  NameValue,
  PhoneValue,
} from './ContactsList.styled';

export const ContactsList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getContactsFilter);
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getVisibleContacts = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filterValue.toLowerCase())
    );
  };

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  const visibleContacts = getVisibleContacts();

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <ContactList>
          {visibleContacts.map(({ id, name, number }) => {
            return (
              <ContactItem key={id}>
                <NameValue>{name}</NameValue>
                <PhoneValue>{number}</PhoneValue>
                <Button
                  type="button"
                  fullWidth
                  variant="contained"
                  color="primary"
                  sx={{
                    marginLeft: '10px',
                    width: '200px',
                  }}
                  onClick={() => handleDelete(id)}
                >
                  Delete contact
                </Button>
              </ContactItem>
            );
          })}
        </ContactList>
      )}
    </>
  );
};
