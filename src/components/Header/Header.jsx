'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Link from 'next/link';
import { Box, Button, InputAdornment, Menu, MenuItem, TextField } from '@mui/material';
import TextLogo from '@/components/SvgIcons/TextLogo';
import OilsIcon from '@/components/SvgIcons/OilsIcon';
import OilBarrelIcon from '@mui/icons-material/OilBarrel';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import SertificateIcon from '@/components/SvgIcons/SertificateIcon';
import { Header, HeaderNav } from './styles';
import CallIcon from '@mui/icons-material/Call';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import EmailIcon from '@mui/icons-material/Email';
import { useStore } from '@/store';

export default function (props) {
  const { openContactModal } = useStore();
  const { onToggleSidenav } = props;
  const [isSticky, setIsSticky] = useState(false);
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    document.body.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onScroll = () => {
    if (document.body.scrollTop > 120) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  const onContactUsClick = () => {
    openContactModal();
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          pl: 0,
          pr: 4
          // gap: 2,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 3,
            mx: 3,
            py: 1,
            flex: 1,
            borderBottom: '1px solid #ccc'
          }}
        >
          <Link href="/company">
            <Button
              sx={{ textTransform: 'initial', color: '#000', fontSize: '16px', fontWeight: '700' }}
              variant="text"
            >
              О компании
            </Button>
          </Link>

          <Link href="/location">
            <Button
              sx={{ textTransform: 'initial', color: '#000', fontSize: '16px', fontWeight: '700' }}
              variant="text"
            >
              Точки продаж
            </Button>
          </Link>
        </Box>

        {!isMobile && (
          <Link href="/search">
            <TextLogo color={theme.palette.common.mode} />
          </Link>
        )}
      </Box>

      <Header isSticky={isSticky}>
        {isTablet ? (
          <IconButton aria-label="delete" onClick={onToggleSidenav}>
            <MenuOpenIcon />
          </IconButton>
        ) : (
          <Button
            sx={{ textTransform: 'initial' }}
            variant="outlined"
            color="success"
            startIcon={<CallIcon sx={{ mr: 1 }} />}
            onClick={onContactUsClick}
          >
            Свяжитесь с нами!
          </Button>
        )}
        {/* <Button sx={{ textTransform: 'initial' }} color="success" startIcon={<CallIcon sx={{ mr: 1 }} />}>
        Свяжитесь с нами!
      </Button> */}

        <HeaderNav>
          {/* <Link href="/search">
            <Button sx={{ textTransform: 'initial' }} variant="outlined" startIcon={<SearchIcon />}>
              Подобрать масло
            </Button>
          </Link> */}

          <TextField
            label="Поиск"
            color="primary"
            id="outlined-start-adornment"
            sx={{ m: 0 }}
            variant="outlined"
            size="small"
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              )
            }}
          />

          {/* <Link href="/sertificates">
          <Button startIcon={<SertificateIcon sx={{ mr: 1 }} />}>
            Сертификаты
          </Button>
        </Link> */}

          {/* <Link href="/products">
          </Link> */}
          <Button
            onClick={handleClick}
            id="basic-button"
            sx={{ textTransform: 'initial', p: '6px 16px', pt: '7px' }}
            variant="outlined"
            startIcon={<OilBarrelIcon />}
          >
            Каталог
            {open ? <ArrowDropUpIcon sx={{ ml: 1 }} /> : <ArrowDropDownIcon sx={{ ml: 1 }} />}
          </Button>

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            disableScrollLock
            sx={{ ul: { p: 0 } }}
            MenuListProps={{
              'aria-labelledby': 'basic-button'
            }}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
          >
            <Link href="/catalog">
              <MenuItem
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  p: 2
                }}
                onClick={handleClose}
              >
                <ArrowOutwardIcon color="primary" />
                Перейти в каталог
              </MenuItem>
            </Link>

            <MenuItem
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                p: 2
              }}
              onClick={handleClose}
            >
              <FileDownloadIcon color="primary" />
              Скачать каталог
            </MenuItem>

            <MenuItem
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                p: 2
              }}
              onClick={handleClose}
            >
              <EmailIcon color="primary" />
              Отправить каталог на почту
            </MenuItem>
          </Menu>

          {/* {!isMobile && (
          <Link href="/search">
            <TextLogo color={theme.palette.common.mode} />
          </Link>
        )} */}
        </HeaderNav>
      </Header>
    </>
  );
}
