import { useDispatch } from 'react-redux';
import { Button, Box } from '@mui/material';

import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';

export function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box
      sx={{
        display: 'inline',
        alignItems: 'center',
      }}
    >
      <Box
        component="p"
        sx={{
          display: 'inline-block',
          fontWeight: '700',
          marginRight: '10px',
        }}
      >
        Weclome, {user.name}
      </Box>
      <Button
        color="inherit"
        onClick={() => {
          dispatch(logOut());
        }}
      >
        Logout
      </Button>
    </Box>
  );
}
