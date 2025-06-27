import { Box, createTheme, CssBaseline, Paper, Snackbar, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import AuthForm from './AuthForm.jsx';
import BackgroundSection from './BackgroundSection.jsx';

const theme = createTheme();

export default function Authentication() {
  const [formState, setFormState] = useState(0);
  const [message, setMessage] = useState('');
  const [open, setOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', height: '100vh' }}>
        <BackgroundSection />
        <Box component={Paper} elevation={6} sx={{ flex: 5,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        pt: 4,
        }}>
          <AuthForm
            formState={formState}
            setFormState={setFormState}
            setMessage={setMessage}
            setOpen={setOpen}
          />
        </Box>
      </Box>
      <Snackbar open={open} autoHideDuration={4000} message={message} onClose={() => setOpen(false)} />
    </ThemeProvider>
  );
}
