'use client';

import { Container, Paper, useTheme } from '@mui/material';
import AuthForm from './AuthForm';

export default function Auth() {
  const theme = useTheme();

  return (
    <Container
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: theme.palette.primary.main,
        height: '100vh',
      }}
    >
      <Paper sx={{ padding: 5, borderRadius: 5, width: '50%' }}>
        <AuthForm />
      </Paper>
    </Container>
  );
}
