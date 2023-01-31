import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box } from '@mui/material';
import { PhoneBookEditor } from 'components/PhoneBookEditor/PhoneBookEditor';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { selectIsRefreshing } from 'redux/auth/selectors';
import { fetchContacts } from 'redux/contacts/operations';

const Contacts = () => {
  const dispatch = useDispatch();
  const isRefresh = useSelector(selectIsRefreshing);

  useEffect(() => {
    if (isRefresh) {
      dispatch(fetchContacts());
    }
  }, [dispatch, isRefresh]);

  return (
    <Box as="main" py={3}>
      <PhoneBookEditor />
      <Filter />
      <ContactsList />
    </Box>
  );
};

export default Contacts;
