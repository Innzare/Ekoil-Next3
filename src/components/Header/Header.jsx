import React from 'react';
import Link from 'next/link';
import { Box, Typography, Button } from '@mui/material';
import TextLogo from '@/components/SvgIcons/TextLogo';
import OilsIcon from '@/components/SvgIcons/OilsIcon';
import SertificateIcon from '@/components/SvgIcons/SertificateIcon';
import SearchIcon from '@/components/SvgIcons/SearchIcon';
import HomeIcon from '@mui/icons-material/Home';
import CallIcon from '@mui/icons-material/Call';

export default function () {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: '0 0 auto',
        // background: '#fff',
        py: 1,
        px: 3,
        borderRadius: '6px'
        // boxShadow: 'rgba(0, 0, 0, 0.07) 0rem 1.25rem 1.6875rem 0rem'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2
        }}
      >
        {/* <Box
          sx={{
            display: 'flex',
            // flexDirection: 'column',
            gap: 2,
            justifyContent: 'center',
            alignItems: 'center',
            p: 1.5,
            borderRadius: '6px',
            backgroundColor: '#c8e6ff',
            boxShadow: '0px 2px 3px 0px rgba(0,0,0,0.2)'
          }}
        >
          <CallIcon />
          <Typography>Свяжитесь с нами!</Typography>
        </Box> */}

        <Button
          color="success"
          sx={{
            display: 'flex',
            gap: 2
          }}
        >
          <CallIcon />
          Свяжитесь с нами!
        </Button>

        {/* <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2
          }}
        >
          <CallIcon /> +7(987)-123-45-67
        </Box> */}
      </Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 6
        }}
      >
        <Link href="/search">
          <Button
            size="small"
            sx={{
              display: 'flex',
              gap: 2
            }}
          >
            <SearchIcon />
            Подобрать масло
          </Button>
        </Link>

        <Link href="/sertificates">
          <Button
            size="small"
            sx={{
              display: 'flex',
              gap: 2
            }}
          >
            <SertificateIcon />
            Сертификаты
          </Button>
        </Link>

        <Link href="/products">
          <Button
            size="small"
            sx={{
              display: 'flex',
              gap: 2
            }}
          >
            <OilsIcon />
            Каталог
          </Button>
        </Link>

        <TextLogo />
      </Box>
    </Box>
  );
}
