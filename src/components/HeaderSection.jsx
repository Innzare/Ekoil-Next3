import React from 'react';

import { Box, Typography } from '@mui/material';
import HeaderLogoBackground from '@/components/SvgIcons/HeaderLogoBackground';
import HeaderSectionBackground from '@/app/assets/header-section-background.png';

export default function HeaderSection({ title }) {
  return (
    <Box
      sx={(theme) => ({
        position: 'relative',
        display: 'flex',
        alignItems: 'flex-end',
        backgroundImage: `url(${HeaderSectionBackground.src})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'left',
        height: '350px',
        p: 5,

        [theme.breakpoints.down('md')]: {
          height: '300px',
          p: 3
        }
      })}
    >
      <Typography
        variant="h1"
        sx={(theme) => ({
          fontSize: '48px',
          color: '#fff',
          fontWeight: 800,

          [theme.breakpoints.down('md')]: {
            fontSize: '32px'
          }
        })}
      >
        {title}
      </Typography>

      <Box
        sx={(theme) => ({
          position: 'absolute',
          right: 0,
          bottom: 0,
          width: '439px',
          height: '500px',

          [theme.breakpoints.down('md')]: {
            width: '180px',
            height: '200px',
            fontSize: '32px'
          }
        })}
      >
        <HeaderLogoBackground></HeaderLogoBackground>
      </Box>
    </Box>
  );
}
