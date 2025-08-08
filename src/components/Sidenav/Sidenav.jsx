'use client';

import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Link from 'next/link';
import { Divider, Box, Button } from '@mui/material';
import Logo from '@/components/SvgIcons/Logo';
import SidenavList from './SidenavList';
import TextLogo from '@/components/SvgIcons/TextLogo';
import CallIcon from '@mui/icons-material/Call';
import { useStore } from '@/store';
import { SidenavWrapper, Backdrop, OnlyTextLogoWrapper, SidenavTop } from './styles';

export default function Sidenav(props) {
  const { onToggle, isOpen } = props;

  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const { openContactModal } = useStore();

  const onContactUsClick = () => {
    onToggle();
    openContactModal();
  };

  return (
    <>
      <Backdrop open={isOpen} onClick={onToggle} />

      <SidenavWrapper isOpen={isOpen}>
        <SidenavTop>
          <Link href="/" onClick={onToggle}>
            <Box sx={{ textAlign: 'center' }}>
              <Logo color={theme.palette.common.mode} />
            </Box>

            <OnlyTextLogoWrapper isOpen={isOpen}>
              <TextLogo width="140" height="40" />
            </OnlyTextLogoWrapper>
          </Link>

          <Divider
            sx={{
              my: 2,
              width: '100%'
            }}
          />

          <SidenavList isOpen={isOpen} onClick={onToggle} />
        </SidenavTop>

        <Button
          sx={{
            textTransform: 'initial',
            backgroundColor: '#1E284B',
            color: '#fff',
            borderRadius: '8px',
            border: '1px solid #1E284B',
            px: 2,
            py: 1,
            width: '100%'
          }}
          variant="outlined"
          size="small"
          startIcon={<CallIcon sx={{ mr: 1 }} />}
          onClick={onContactUsClick}
        >
          Свяжитесь с нами!
        </Button>
      </SidenavWrapper>
    </>
  );
}
