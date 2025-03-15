import React from 'react';
import { Card as MuiCard, useTheme, alpha } from '@mui/material';
import { motion } from 'framer-motion';

const Card = ({ children, ...props }) => {
  const theme = useTheme();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <MuiCard
        {...props}
        sx={{
          borderRadius: 4,
          background: theme.palette.background.paper,
          boxShadow: `0 4px 20px ${alpha(theme.palette.primary.main, 0.15)}`,
          border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            borderColor: theme.palette.primary.main,
            boxShadow: `0 8px 24px ${alpha(theme.palette.primary.main, 0.2)}`,
            transform: 'translateY(-4px)',
          },
          ...props.sx
        }}
      >
        {children}
      </MuiCard>
    </motion.div>
  );
};

export default Card;
