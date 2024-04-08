'use client';

import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Link from 'next/link';
import { Divider } from '@mui/material';
import Logo from '@/components/SvgIcons/Logo';
import OnlyTextLogo from '@/components/SvgIcons/OnlyTextLogo';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import SidenavList from './SidenavList';
import ThemeModeSwitch from '@/components/ThemeModeSwitch/ThemeModeSwitch';
import { IconButton, SidenavWrapper, Backdrop, OnlyTextLogoWrapper, SidenavTop } from './styles';

export default function Sidenav(props) {
  const { onToggle, isOpen } = props;

  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <Backdrop open={isOpen} onClick={onToggle} />

      <SidenavWrapper isOpen={isOpen}>
        <SidenavTop>
          <Link href="/">
            <Logo color={theme.palette.common.mode} />
          </Link>

          <OnlyTextLogoWrapper isOpen={isOpen}>
            <OnlyTextLogo color={theme.palette.common.mode} />
          </OnlyTextLogoWrapper>

          <Divider
            sx={{
              my: 2,
              width: '100%'
            }}
          />

          <IconButton size="small" variant="outlined" onClick={onToggle}>
            {isOpen ? <KeyboardArrowLeftIcon /> : <KeyboardArrowRightIcon />}
          </IconButton>

          <SidenavList isOpen={isOpen} />
        </SidenavTop>

        {/* <ThemeModeSwitch /> */}
      </SidenavWrapper>
    </>
  );
}
