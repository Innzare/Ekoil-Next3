import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';

export default function FeedbackBlock() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        px: 4,
        py: 8,
        borderRadius: '8px',
        background: '#000428',
        background: '-webkit-linear-gradient(to right, #004e92, #000428)',
        background: 'linear-gradient(to right, #004e92, #000428)'
      }}
    >
      <Typography variant="h5" fontWeight="700" color="#fff">
        У вас есть что спросить? <br /> Наши специалисты ответят!
      </Typography>

      <Button
        variant="contained"
        disableElevation
        size="large"
        sx={{ backgroundColor: '#0068ff', py: 3, px: 8, fontSize: '18px', fontWeight: '700' }}
      >
        Связаться
      </Button>

      <SmsOutlinedIcon sx={{ fontSize: '84px', color: '#fff' }} />
    </Box>
  );
}
