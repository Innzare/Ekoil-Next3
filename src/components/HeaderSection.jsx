import React from 'react';

import { Box, Typography } from '@mui/material';
import HeaderLogoBackground from '@/components/SvgIcons/HeaderLogoBackground';
import HeaderSectionBackground from '@/app/assets/header-section-background.png';

export default function HeaderSection({ title }) {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        alignItems: 'flex-end',
        backgroundImage: `url(${HeaderSectionBackground.src})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'left',
        height: '500px',
        p: 5
      }}
    >
      <Typography variant="h1" sx={{ fontSize: '64px', color: '#fff', fontWeight: 800 }}>
        {title}
      </Typography>

      <Box
        sx={{
          position: 'absolute',
          right: 0,
          bottom: 0
        }}
      >
        <HeaderLogoBackground></HeaderLogoBackground>
      </Box>
    </Box>
  );
}
