'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Link from 'next/link';
import { Box, Button } from '@mui/material';
import TextLogo from '@/components/SvgIcons/TextLogo';
import OilsIcon from '@/components/SvgIcons/OilsIcon';
import OilBarrelIcon from '@mui/icons-material/OilBarrel';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import SertificateIcon from '@/components/SvgIcons/SertificateIcon';
// import SearchIcon from '@/components/SvgIcons/SearchIcon';
import CallIcon from '@mui/icons-material/Call';
import { Header, HeaderNav } from './styles';

export default function (props) {
  const { onToggleSidenav } = props;
  const [isSticky, setIsSticky] = useState(false);
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
      {isTablet ? (
        <IconButton aria-label="delete" onClick={onToggleSidenav}>
          <MenuOpenIcon />
        </IconButton>
      ) : (
        <Button sx={{ textTransform: 'initial' }} color="success" startIcon={<CallIcon sx={{ mr: 1 }} />}>
          Свяжитесь с нами!
        </Button>
      )}
      {/* <Button sx={{ textTransform: 'initial' }} color="success" startIcon={<CallIcon sx={{ mr: 1 }} />}>
        Свяжитесь с нами!
      </Button> */}

      <HeaderNav>
        <Link href="/search">
          <Button sx={{ textTransform: 'initial' }} variant="text" startIcon={<SearchIcon />}>
            Подобрать масло
          </Button>
        </Link>

        {/* <Link href="/sertificates">
          <Button startIcon={<SertificateIcon sx={{ mr: 1 }} />}>
            Сертификаты
          </Button>
        </Link> */}

        <Link href="/products">
          <Button sx={{ textTransform: 'initial' }} variant="text" startIcon={<OilBarrelIcon />}>
            Каталог
          </Button>
        </Link>

        {!isMobile && (
          <Link href="/search">
            <TextLogo color={theme.palette.common.mode} />
          </Link>
        )}
      </HeaderNav>
    </Header>
  );
}
