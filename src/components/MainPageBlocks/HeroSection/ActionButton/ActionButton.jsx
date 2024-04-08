import React from 'react';
import Link from 'next/link';
import { Box, Typography, IconButton } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function ActionButton(props) {
  const { orientation = 'vertical', title = '', text = '', icon: Icon, href } = props;

  return (
    <Link href={href}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: orientation === 'vertical' ? 'column' : 'row',
          justifyContent: 'space-between',
          // alignItems: 'center',
          gap: orientation === 'vertical' ? 1 : 4,
          p: 4,
          position: 'relative',
          width: orientation === 'vertical' ? '200px' : '400px',
          // height: '200px',
          // backgroundSize: 'cover',
          // backgroundPosition: 'center',
          backgroundImage: `url('https://gazpromneft-oil.ru/static/default/img/promo-search-bg-2.png')`,
          borderRadius: '6px',
          background: '#1021863d',
          backdropFilter: 'blur(15px)',
          overflow: 'hidden',
          transition: '.15s ease',
          cursor: 'pointer',

          '&:hover': {
            boxShadow: '0px 0px 0px 2px rgb(48 54 106) inset'
          },

          '&:before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: '#494a6da3',
            opacity: 0.4,
            borderBottomRightRadius: '100%'
          }
        }}
      >
        <Box>
          <Typography color="#eee" variant="h6" sx={{ textTransform: 'uppercase', mb: 2 }}>
            {title}
          </Typography>
          <Typography color="#fff" fontWeight="900" variant="h6" sx={{ textTransform: 'uppercase' }}>
            {text}
          </Typography>

          {/* <ArrowForwardIcon fontSize="32" color="secondary" /> */}
          {/* <IconButton aria-label="delete" size="large" color="#fff">
            <ArrowForwardIcon fontSize="inherit" />
          </IconButton> */}
        </Box>

        <Icon />
      </Box>
    </Link>
  );
}
