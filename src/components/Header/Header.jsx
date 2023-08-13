'use client';

import React, { useEffect, useState } from 'react';
import { styled } from '@mui/system';
import Link from 'next/link';
import { Box, Typography, Button } from '@mui/material';
import TextLogo from '@/components/SvgIcons/TextLogo';
import OilsIcon from '@/components/SvgIcons/OilsIcon';
import SertificateIcon from '@/components/SvgIcons/SertificateIcon';
import SearchIcon from '@/components/SvgIcons/SearchIcon';
import HomeIcon from '@mui/icons-material/Home';
import CallIcon from '@mui/icons-material/Call';

const Header = styled('header', {
  shouldForwardProp: (prop) => prop !== 'isSticky'
})(({ isSticky }) => ({
  position: 'sticky',
  top: '16px',
  zIndex: 10,
  display: 'flex',
  justifyContent: 'space-between',
  transition: 'all .25s',
  backdropFilter: isSticky ? 'blur(1.875rem)' : 'initial',
  alignItems: 'center',
  flex: '0 0 auto',
  background: isSticky ? 'rgba(255, 255, 255, 0.8)' : 'initial',
  boxShadow: isSticky ? 'rgba(0, 0, 0, 0.07) 0rem 1.25rem 1.6875rem 0rem' : 'initial',
  py: 1,
  px: 3,
  borderRadius: '6px'
  // boxShadow: 'rgba(0, 0, 0, 0.07) 0rem 1.25rem 1.6875rem 0rem'
}));

export default function () {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    document.body.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onScroll = () => {
    if (document.body.scrollTop > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  return (
    <Header isSticky={isSticky}>
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
    </Header>
  );
}
