import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {
  Avatar, Box, Button, TextField
} from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext.jsx';

export default function AuthForm({ formState, setFormState, setMessage, setOpen }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const { handleLogin, handleRegister } = useContext(AuthContext);

  useEffect(() => {
    setUsername('');
    setPassword('');
    setName('');
    setError('');
  }, [formState, setError]);

  const handleAuth = async () => {
    try {
      if (formState === 0) {
        await handleLogin(username, password);
      } else {
        const result = await handleRegister(name, username, password);
        setUsername('');
        setPassword('');
        setMessage(result);
        setError('');
        setOpen(true);
        setFormState(0);
      }
    } catch (err) {
      const msg = err?.response?.data?.message || 'Something went wrong';
      setError(msg);

      setUsername('');
      setPassword('');
      setName('');
    }
  };

  return (
    <Box sx={{ width: '80%', maxWidth: 380, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Avatar sx={{ m: 3, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>

      <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
        <Button variant={formState === 0 ? 'contained' : ''} onClick={() => setFormState(0)}>Sign In</Button>
        <Button variant={formState === 1 ? 'contained' : ''} onClick={() => setFormState(1)}>Sign Up</Button>
      </Box>

      <Box component="form" noValidate sx={{ mt: 1 }}>
        {formState === 1 && (
          <TextField 
            fullWidth 
            required 
            margin="normal" 
            id='fullname'
            label="Full Name"
            name='fullname' 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
        )}
        <TextField 
          fullWidth 
          required 
          margin="normal" 
          id='username'
          label="Username"
          name='username' 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        />
        <TextField 
          fullWidth 
          required 
          margin="normal" 
          id='password'
          label="Password"
          name='password' 
          type="password" 
          value={password} onChange={(e) => setPassword(e.target.value)} 
        />

        <p style={{color: "red"}}>{error}</p>

        <Button 
          fullWidth 
          variant="contained" 
          sx={{ mt: 3, mb: 2 }} 
          onClick={handleAuth}
        >
          {formState === 0 ? 'Login' : 'Register'}
        </Button>
      </Box>
    </Box>
  );
}
