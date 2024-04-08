'use client';

import React from 'react';
import { Box } from '@mui/material';
import HomePageSlider from '@/components/HomePageSlider/HomePageSlider';
import About from '@/components/MainPageBlocks/About/About';
import HeroSection from '@/components/MainPageBlocks/HeroSection/HeroSection';
import Production from '@/components/MainPageBlocks/Production/Production';
import WeProduce from '@/components/MainPageBlocks/WeProduce/WeProduce';
import Advantages from '@/components/MainPageBlocks/Advantages/Advantages';
import News from '@/components/MainPageBlocks/News/News';
import Contacts from '@/components/MainPageBlocks/Contacts/Contacts';
import FeedbackBlock from '@/components/FeedbackBlock/FeedbackBlock';
import { SectionWrapper } from './mainPageStyles';

export default function Home() {
  return (
    <main>
      {/* <Box
        sx={{
          height: '500px'
        }}
      >
        <MapLoader />
      </Box> */}
      <Box sx={{ mb: 5 }}>
        <HeroSection />
      </Box>

      <Box sx={{ mb: 5 }}>
        <HomePageSlider />
      </Box>

      <SectionWrapper>
        <Box sx={{ mb: 8 }}>
          <About />
        </Box>

        <Box sx={{ mb: 8, position: 'relative' }}>
          <Advantages />
          <Box
            sx={{
              position: 'absolute',
              left: '-32px',
              bottom: '-100%',
              width: '100%',
              height: '100%',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundImage: `url('https://gazpromneft-oil.ru/static/default/img/bg-m.jpg')`
            }}
          ></Box>
        </Box>

        <Box sx={{ mb: 8 }}>
          <Production />
        </Box>

        <Box sx={{ mb: 8 }}>
          <WeProduce />
        </Box>

        <Box sx={{ mb: 8 }}>
          <News />
        </Box>

        <Box sx={{ mb: 8 }}>
          <Contacts />
        </Box>

        <FeedbackBlock />
      </SectionWrapper>
    </main>
  );
}
