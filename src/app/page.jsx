'use client';

import React from 'react';
import { Box } from '@mui/material';
import HomePageSlider from '@/components/HomePageSlider/HomePageSlider';
import About from '@/components/MainPageBlocks/About/About';
import WeProduce from '@/components/MainPageBlocks/WeProduce/WeProduce';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import { SectionWrapper } from './mainPageStyles';

export default function Home() {
  return (
    <main>
      <Box sx={{ mb: 5 }}>
        <HomePageSlider />
      </Box>

      <Box sx={{ mb: 5 }}>
        <About />
      </Box>

      <Box sx={{ mb: 5 }}>
        <WeProduce />
      </Box>

      {/* <SectionTitle text="Почему мы гарантии качества, сколько лет на рынке, ключевые партнеры" />

      <SectionWrapper></SectionWrapper> */}

      {/* <SectionTitle text="Наше производство Количество наименований. продукции" />

      <SectionWrapper></SectionWrapper> */}

      <SectionTitle text="Производство" />

      <Box sx={{ mb: 5 }}>
        <SectionWrapper></SectionWrapper>
      </Box>

      <SectionTitle text="Партнеры" />

      <Box sx={{ mb: 5 }}>
        <SectionWrapper></SectionWrapper>
      </Box>

      <SectionTitle text="Новости компании" />

      <Box sx={{ mb: 5 }}>
        <SectionWrapper></SectionWrapper>
      </Box>

      <SectionTitle text="Связаться" />

      <Box sx={{ mb: 5 }}>
        <SectionWrapper></SectionWrapper>
      </Box>
    </main>
  );
}
