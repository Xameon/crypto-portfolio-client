import { Box, styled } from '@mui/material';

export const AuthForm = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  boxShadow: '0 1px 5px 3px rgba(0.1, 0.1, 0.1, 0.1)',
  width: '25rem',
  marginTop: '5rem',
  padding: '2rem',
  borderRadius: '9px',
});

export const InputAuthFormBox = styled(Box)({
  display: 'flex',
  alignItems: 'flex-end',
  gap: '0.5rem',
});
