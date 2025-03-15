import React from 'react';
import { Button, useTheme, alpha } from '@mui/material';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BackToHome = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Button
      variant="outlined"
      startIcon={<ArrowLeft size={20} />}
      onClick={() => navigate('/home')}
      sx={{
        position: 'absolute',
        top: 24,
        left: 24,
        height: 48,
        borderRadius: 2,
        fontFamily: 'Inter',
        borderColor: alpha(theme.palette.primary.main, 0.3),
        color: theme.palette.primary.main,
        '&:hover': {
          borderColor: theme.palette.primary.main,
          bgcolor: alpha(theme.palette.primary.main, 0.05),
        },
      }}
    >
      Back to Home
    </Button>
  );
};

export default BackToHome;
