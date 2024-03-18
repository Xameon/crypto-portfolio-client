import { Box, Button, TextField, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';
import { useLinkClickHandler } from 'react-router-dom';
import { AuthForm, InputAuthFormBox } from '../../components/styledComponents';

export const LoginPage = () => {
  const navigateToRegisterPage = useLinkClickHandler('/register');

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <AuthForm>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <InputAuthFormBox>
            <EmailIcon />
            <TextField
              label='Email'
              type='email'
              variant='standard'
              fullWidth
            />
          </InputAuthFormBox>
          <InputAuthFormBox>
            <PasswordIcon />
            <TextField
              label='Пароль'
              type='password'
              variant='standard'
              fullWidth
            />
          </InputAuthFormBox>
        </Box>
        <Button
          type='submit'
          variant='contained'
          size='small'
          sx={{ textTransform: 'none' }}
        >
          Увійти
        </Button>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <Typography>Ще немає акаунта?</Typography>
          <Button
            type='button'
            variant='outlined'
            size='small'
            sx={{ textTransform: 'none' }}
            href='/register'
            onClick={navigateToRegisterPage}
          >
            Зареєструватися
          </Button>
        </Box>
      </AuthForm>
    </Box>
  );
};
