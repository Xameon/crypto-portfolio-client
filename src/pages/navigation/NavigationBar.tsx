import { Box, Button, Link, styled, useTheme } from '@mui/material';
import { Outlet, useLinkClickHandler } from 'react-router-dom';

const NavigationBarBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  maxWidth: '1200px',
  margin: 'auto',
  padding: '1rem 0',
  color: '#EEE',
}));

export const NavigationBar = () => {
  const navigateToLoginPage = useLinkClickHandler('/login');
  const navigateToRegisterPage = useLinkClickHandler('/register');
  const navigateToMainPage = useLinkClickHandler('/');

  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          width: '100%',
          backgroundColor: theme.palette.grey[900],
          padding: '0 1rem',
        }}
      >
        <NavigationBarBox theme={theme}>
          <Link
            onClick={navigateToMainPage}
            variant='h4'
            underline='none'
            sx={{ cursor: 'pointer', userSelect: 'none', color: '#EEE' }}
          >
            <b>Crypto</b> Portfolio
          </Link>
          <Box sx={{ display: 'flex', gap: '1rem' }}>
            <Button
              variant='contained'
              onClick={navigateToLoginPage}
              href='/login'
            >
              Увійти
            </Button>
            <Button
              variant='outlined'
              onClick={navigateToRegisterPage}
              href='/register'
            >
              Реєстрація
            </Button>
          </Box>
        </NavigationBarBox>
      </Box>
      <Outlet />
    </>
  );
};
