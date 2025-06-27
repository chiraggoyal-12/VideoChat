import { Box } from '@mui/material';

export default function BackgroundSection() {
  return (
    <Box
      sx={{
        flex: 7,
        backgroundImage: 'url("/auth-background.png")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: { xs: 'none', md: 'block' },
      }}
    />
  );
}
