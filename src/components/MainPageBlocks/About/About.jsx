'use client';

import React from 'react';
import Link from 'next/link';
import { Box, Grid, Typography, Button } from '@mui/material';
import OnlyTextLogo from '@/components/SvgIcons/OnlyTextLogo';
import OilBarrelIcon from '@mui/icons-material/OilBarrel';
import SearchIcon from '@/components/SvgIcons/SearchIcon';
import OilsIcon from '@/components/SvgIcons/OilsIcon';
import SertificateIcon from '@/components/SvgIcons/SertificateIcon';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ActionButton from '../HeroSection/ActionButton/ActionButton';
import AboutTabs from './AboutTabs/AboutTabs';
import Lottie from 'lottie-react';
import Engine from '@/app/assets/engine.json';
import GroupIcon from '@mui/icons-material/Group';
import DescriptionIcon from '@mui/icons-material/Description';
import CommuteIcon from '@mui/icons-material/Commute';
import BoltIcon from '@mui/icons-material/Bolt';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SettingsIcon from '@mui/icons-material/Settings';
import PeopleIcon from '@mui/icons-material/People';
import EngineeringIcon from '@mui/icons-material/Engineering';
import Logo from '@/components/SvgIcons/Logo';

import { styled } from '@mui/system';

// import { Swiper as SwiperModule, SwiperSlide as SwiperSlideModule } from 'swiper/react';

// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/effect-fade';

// // import required modules
// import { Autoplay, Navigation, Pagination } from 'swiper/modules';

// const FEATURES = [
//   {
//     icon: BoltIcon,
//     title: 'Lorem ipsum dolar',
//     text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
//   },
//   {
//     icon: CheckCircleOutlineIcon,
//     title: 'Lorem ipsum dolar',
//     text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
//   },
//   {
//     icon: AccessTimeIcon,
//     title: 'Lorem ipsum dolar',
//     text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
//   },
//   {
//     icon: SettingsIcon,
//     title: 'Lorem ipsum dolar',
//     text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
//   },
//   {
//     icon: PeopleIcon,
//     title: 'Lorem ipsum dolar',
//     text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
//   },
//   {
//     icon: EngineeringIcon,
//     title: 'Lorem ipsum dolar',
//     text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
//   }
// ];

// // import Group from '@/app/assets/Group.png';
// import gaz from '@/app/assets/gaz.png';
// import ekoil from '@/app/assets/ekoil-bckg.jpg';
// import {
//   AboutWithBackground,
//   AboutWithBackgroundText,
//   AboutLayer,
//   IconWrapper,
//   AboutLayerTitle,
//   AboutLayerSubTitle
// } from './styles';
// import SectionTitle from '@/components/SectionTitle/SectionTitle';

// export const Swiper = styled(SwiperModule)(({ theme }) => ({
//   width: '70%',
//   height: '100px',
//   // backgroundColor: '#fff',
//   margin: 0,
//   marginTop: '64px',
//   padding: '16px',
//   borderRadius: '8px',
//   background: 'rgb(132 132 132 / 34%)',
//   backdropFilter: 'blur(10px)',
//   marginBottom: '30px'
// }));
// export const SwiperSlide = styled(SwiperSlideModule)(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   color: '#fff',
//   fontSize: '24px'
// }));

export default function About() {
  return (
    <Box
      sx={
        {
          // backgroundSize: 'cover',
          // backgroundPosition: 'center',
          // backgroundImage: `url('https://gazpromneft-oil.ru/static/default/img/map.png')`
        }
      }
    >
      <Box
        sx={{
          display: 'flex',
          gap: '32px'
        }}
      >
        <Box
          sx={{
            minWidth: '500px',
            height: 'auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#e9e9e9',
            borderRadius: '8px',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url('https://img.freepik.com/free-photo/factory-workshop-interior-machines-glass-industry-background-process-production_645730-553.jpg?t=st=1711538215~exp=1711541815~hmac=3b5a4b9e8cad993716e3fd06f613c7836851b0614e92735771501d20e5e24324&w=2000')`
          }}
        ></Box>

        <Box>
          <Typography variant="h3" color="initial" fontWeight="700" sx={{ mb: 2, lineHeight: 1 }}>
            Lorem ipsum dolor
          </Typography>

          <Typography variant="h6" color="#6c6c6c" fontWeight="500" sx={{ lineHeight: 1.5 }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam consequuntur velit nam eum in,
            doloremque aspernatur ab nisi consectetur doloribus accusamus et iure magni fugit modi dolorem odit
            architecto adipisci.
          </Typography>

          <Grid container spacing={2} sx={{ mt: 3 }}>
            <Grid item xs={6} sx={{ p: 4 }}>
              <GroupIcon color="primary" fontSize="large" sx={{ mb: 1 }} />
              <Typography variant="h6" color="initial" fontWeight="700" sx={{ mb: 2, lineHeight: 1 }}>
                Lorem ipsum dolor
              </Typography>
              <Typography variant="body" color="#6c6c6c" fontWeight="400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit
              </Typography>
            </Grid>

            <Grid item xs={6} sx={{ p: 4 }}>
              <DescriptionIcon color="primary" fontSize="large" sx={{ mb: 1 }} />
              <Typography variant="h6" color="initial" fontWeight="700" sx={{ mb: 2, lineHeight: 1 }}>
                Lorem ipsum dolor
              </Typography>
              <Typography variant="body" color="#6c6c6c" fontWeight="400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit
              </Typography>
            </Grid>

            <Grid item xs={6} sx={{ p: 4 }}>
              <CommuteIcon color="primary" fontSize="large" sx={{ mb: 1 }} />
              <Typography variant="h6" color="initial" fontWeight="700" sx={{ mb: 2, lineHeight: 1 }}>
                Lorem ipsum dolor
              </Typography>
              <Typography variant="body" color="#6c6c6c" fontWeight="400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit
              </Typography>
            </Grid>

            <Grid item xs={6} sx={{ p: 4 }}>
              <SettingsIcon color="primary" fontSize="large" sx={{ mb: 1 }} />
              <Typography variant="h6" color="initial" fontWeight="700" sx={{ mb: 2, lineHeight: 1 }}>
                Lorem ipsum dolor
              </Typography>
              <Typography variant="body" color="#6c6c6c" fontWeight="400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Link href="/about">
        <Button
          variant="outlined"
          disableElevation
          size="large"
          endIcon={<ArrowForwardIcon />}
          sx={{ mt: 4, py: 2, px: 4 }}
        >
          О компании
        </Button>
      </Link>
    </Box>
  );
}
