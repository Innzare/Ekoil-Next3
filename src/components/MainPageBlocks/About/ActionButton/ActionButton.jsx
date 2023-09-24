import React from 'react';
import Link from 'next/link';
import { Box, Typography } from '@mui/material';

export default function ActionButton(props) {
  const { orientation = 'vertical', text = '', icon: Icon, href } = props;

  return (
    <Link href={href}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: orientation === 'vertical' ? 'column' : 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: orientation === 'vertical' ? 1 : 4,
          position: 'relative',
          width: orientation === 'vertical' ? '200px' : '400px',
          height: '200px',
          borderRadius: '12px',
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
        <Icon />
        <Typography color="#fff" variant="h6">
          {text}
        </Typography>
      </Box>
    </Link>
  );
}
