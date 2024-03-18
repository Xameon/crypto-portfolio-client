import { Box, Button, TextField, Typography, styled } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';
import LockResetIcon from '@mui/icons-material/LockReset';
import { useLinkClickHandler } from 'react-router-dom';
import { AuthForm } from '../../components/styledComponents';

const InputAuthFormBox = styled(Box)({
  display: 'flex',
  alignItems: 'flex-end',
  gap: '0.5rem',
});

export const RegisterPage = () => {
  const navigateToLoginPage = useLinkClickHandler('/login');

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <AuthForm>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <InputAuthFormBox>
            <PersonIcon />
            <TextField label="Ім'я" type='name' variant='standard' fullWidth />
          </InputAuthFormBox>
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
          <InputAuthFormBox>
            <LockResetIcon />
            <TextField
              label='Підтвердіть пароль'
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
          Зареєструватися
        </Button>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <Typography>Вже є акаунт?</Typography>
          <Button
            type='button'
            variant='outlined'
            size='small'
            sx={{ textTransform: 'none' }}
            href='/login'
            onClick={navigateToLoginPage}
          >
            Увійти
          </Button>
        </Box>
      </AuthForm>
    </Box>
  );
};
