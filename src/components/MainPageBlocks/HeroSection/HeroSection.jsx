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
// import AboutTabs from './AboutTabs/AboutTabs';
import Engine from '@/app/assets/engine.json';
import GroupIcon from '@mui/icons-material/Group';
import DescriptionIcon from '@mui/icons-material/Description';
import CommuteIcon from '@mui/icons-material/Commute';
import SettingsIcon from '@mui/icons-material/Settings';

// import Background from './Background';

import { styled } from '@mui/system';

import { Swiper as SwiperModule, SwiperSlide as SwiperSlideModule } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

// import Group from '@/app/assets/Group.png';
// import gaz from '@/app/assets/gaz.png';
import ekoilBarrel from '@/app/assets/ekoil-barrel.png';
import ekoil from '@/app/assets/ekoil-bckg.jpg';
import {
  AboutWithBackground,
  AboutWithBackgroundText,
  AboutLayer,
  IconWrapper,
  AboutLayerTitle,
  AboutLayerSubTitle
} from './styles';
import SectionTitle from '@/components/SectionTitle/SectionTitle';

export const Swiper = styled(SwiperModule)(({ theme }) => ({
  width: '70%',
  height: '100px',
  // backgroundColor: '#fff',
  margin: 0,
  marginTop: '64px',
  padding: '16px',
  borderRadius: '8px',
  background: 'rgb(132 132 132 / 34%)',
  backdropFilter: 'blur(10px)',
  marginBottom: '30px'
}));
export const SwiperSlide = styled(SwiperSlideModule)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  color: '#fff',
  fontSize: '24px'
}));

export default function HeroSection() {
  return (
    <AboutWithBackground>
      <Background />
      <Box
        sx={{
          position: 'absolute',
          top: '40%',
          left: '50%',
          width: '100%',
          height: '100%',
          transform: 'translate(-50%, -50%)',
          backgroundImage: `url('${ekoilBarrel.src}')`,
          // backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2)), url('${Group.src}')`,
          // backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2)), url(https://haynes.com/en-gb/sites/default/files/styles/unaltered_webp/public/Engine%20oil%20guide.jpg?itok=bzBvsWaD&timestamp=1644232820)`,
          backgroundSize: '35%',
          backgroundPosition: '100% 70%',
          backgroundRepeat: 'no-repeat',
          maskImage: 'radial-gradient(rgba(0,0,0,1) 0%, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%)'
        }}
      ></Box>
      <Box
        sx={{
          position: 'relative',
          zIndex: 10
        }}
      >
        <OnlyTextLogo color="red" width="300" height="90" />

        <AboutWithBackgroundText color="#fff" variant="h3" fontWeight="900">
          Высококачественные <br /> смазочные материалы
        </AboutWithBackgroundText>

        <Typography
          sx={{
            position: 'relative',
            color: '#fff',
            mt: 2,
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: '24px'
          }}
        >
          Для надежной работы вашей техники
        </Typography>

        <Button
          variant="contained"
          disableElevation
          size="large"
          endIcon={<ArrowForwardIcon />}
          sx={{ mt: 8, backgroundColor: '#0068ff', py: 3, px: 4 }}
        >
          Узнайте больше
        </Button>
      </Box>

      <Box>
        {/* <Typography
          sx={{
            position: 'relative',
            color: '#fff',
            mb: 4,
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: '32px'
          }}
        >
          Подобрать масло:
        </Typography> */}

        <Box
          sx={{
            display: 'flex',
            gap: 6
          }}
        >
          {/* <ActionButton orientation="horizontal" href="/search" icon={SearchIcon} title="Поиск" text="По требованиям" /> */}
          {/* <ActionButton orientation="horizontal" href="/products" icon={OilsIcon} title="Масла" text="Каталог" /> */}

          {/* <Box
          sx={{
            display: 'flex',
            gap: 6
          }}
        >
          <ActionButton orientation="vertical" href="/products" icon={OilsIcon} text="Каталог" />
          <ActionButton orientation="vertical" href="/sertificates" icon={SertificateIcon} text="Сертификаты" />
        </Box> */}
        </Box>
      </Box>
    </AboutWithBackground>
  );
}
