'use client';

import React from 'react';
import Link from 'next/link';
import { Box, Grid, Container, Typography, Button } from '@mui/material';
import OnlyTextLogo from '@/components/SvgIcons/OnlyTextLogo';
import OilBarrelIcon from '@mui/icons-material/OilBarrel';
import SearchIcon from '@/components/SvgIcons/SearchIcon';
import OilsIcon from '@/components/SvgIcons/OilsIcon';
import SertificateIcon from '@/components/SvgIcons/SertificateIcon';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ActionButton from './ActionButton/ActionButton';
import AboutTabs from './AboutTabs/AboutTabs';
import {
  AboutWithBackground,
  AboutWithBackgroundText,
  AboutLayer,
  IconWrapper,
  AboutLayerTitle,
  AboutLayerSubTitle
} from './styles';

export default function About() {
  return (
    <>
      <AboutWithBackground>
        <Box
          sx={{
            mb: '100px'
          }}
        >
          <OnlyTextLogo color="red" width="200" height="55" />

          <AboutWithBackgroundText color="#ccc" variant="h4">
            Высококачественные смазочные материалы
          </AboutWithBackgroundText>
        </Box>

        <Box
          sx={{
            display: 'flex',
            gap: 6,
            justifyContent: 'space-between'
          }}
        >
          <ActionButton orientation="horizontal" href="/search" icon={SearchIcon} text="Подобрать масло" />

          <Box
            sx={{
              display: 'flex',
              gap: 6
            }}
          >
            <ActionButton orientation="vertical" href="/products" icon={OilsIcon} text="Каталог" />
            <ActionButton orientation="vertical" href="/sertificates" icon={SertificateIcon} text="Сертификаты" />
          </Box>
        </Box>
      </AboutWithBackground>

      <AboutLayer>
        <IconWrapper>
          <OilBarrelIcon color="#fff" fontSize="large" />
        </IconWrapper>

        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12}>
            <AboutLayerSubTitle>Коротко о главном:</AboutLayerSubTitle>

            <AboutTabs />

            <Link href="/about">
              <Button variant="outlined" fontSize="large" endIcon={<ArrowForwardIcon />} sx={{ mt: 4 }}>
                Подробнее
              </Button>
            </Link>
          </Grid>
        </Grid>
      </AboutLayer>
    </>
  );
}
