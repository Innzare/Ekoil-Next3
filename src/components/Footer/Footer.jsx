import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box
      sx={{
        flex: '0 0 auto',
        p: 1,
        borderRadius: '6px'
      }}
    >
      <Typography align="right" color="#999" sx={{ fontSize: '14px' }}>
        © 2023, made by innzare.
      </Typography>
    </Box>
  );
}
