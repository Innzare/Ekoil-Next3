'use client';

import React, { useState } from 'react';
import { Divider } from '@mui/material';
import Logo from '@/components/SvgIcons/Logo';
import OnlyTextLogo from '@/components/SvgIcons/OnlyTextLogo';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SidenavList from './SidenavList';
import { IconButton, SidenavWrapper, Backdrop, OnlyTextLogoWrapper } from './styles';

export default function Sidenav() {
  const [isOpen, setIsOpen] = useState(false);

  const onToggleSidenav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Backdrop open={isOpen} onClick={onToggleSidenav} />
      <SidenavWrapper isOpen={isOpen}>
        <Logo />

        <OnlyTextLogoWrapper isOpen={isOpen}>
          <OnlyTextLogo />
        </OnlyTextLogoWrapper>

        <Divider
          sx={{
            my: 2,
            width: '100%'
          }}
        />

        <IconButton size="small" variant="outlined" color="primary" onClick={onToggleSidenav}>
          {isOpen ? <KeyboardArrowLeftIcon /> : <KeyboardArrowRightIcon />}
        </IconButton>

        <SidenavList isOpen={isOpen} />
      </SidenavWrapper>
    </>
  );
}
