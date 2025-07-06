'use client';

import React from 'react';

import { Box, Card, Grid2 as Grid } from '@mui/material';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import FeedbackBlock from '@/components/FeedbackBlock/FeedbackBlock';

import NewsItem from '@/components/MainPageBlocks/News/NewsItem';
import HeaderSection from '@/components/HeaderSection';
import oilTara from '@/app/assets/AboutPage/oil-tara.jpg';
import slider1 from '@/app/assets/AboutPage/slider1.png';
import slider2 from '@/app/assets/AboutPage/slider2.jpg';
import slider3 from '@/app/assets/AboutPage/slider3.jpg';

const news = [
  {
    image: oilTara.src,
    title: 'ASURA 5W-30 GF-5 - энергосберегающее моторное масло',
    data: '21.02.2025',
    id: 1
  },
  {
    image: slider1.src,
    title: 'Ekoil 2T Aqua Premium Стандарт TC-W3 Продление лицензии NMMA',
    data: '21.02.2025',
    id: 2
  },
  {
    image: slider2.src,
    title: 'Лицензия NMMA TC-W3 2017',
    data: '21.02.2025',
    id: 3
  },
  {
    image: slider3.src,
    title: 'ASURA 5W-30 GF-5 - энергосберегающее моторное масло',
    data: '21.02.2025',
    id: 4
  },
  {
    image: oilTara.src,
    title: 'Ekoil 2T Aqua Premium Стандарт TC-W3 Продление лицензии NMMA',
    data: '21.02.2025',
    id: 5
  },
  {
    image: slider1.src,
    title: 'Лицензия NMMA TC-W3 2017',
    data: '21.02.2025',
    id: 6
  },
  {
    image: slider2.src,
    title: 'ASURA 5W-30 GF-5 - энергосберегающее моторное масло',
    data: '21.02.2025',
    id: 7
  },
  {
    image: slider3.src,
    title: 'Ekoil 2T Aqua Premium Стандарт TC-W3 Продление лицензии NMMA',
    data: '21.02.2025',
    id: 8
  },
  {
    image: oilTara.src,
    title: 'Лицензия NMMA TC-W3 2017',
    data: '21.02.2025',
    id: 9
  }
];

export default function page() {
  return (
    <main>
      <HeaderSection title="Новости" />

      <Box
        sx={(theme) => ({
          p: 10,

          [theme.breakpoints.down('md')]: {
            p: 5
          },

          [theme.breakpoints.down('sm')]: {
            p: 3
          }
        })}
      >
        <Box sx={{ mb: 8 }}>
          <Grid container spacing={{ xs: 3, sm: 6 }}>
            {news.map((item) => {
              return (
                <Grid key={item.id} size={{ xs: 12, sm: 6, md: 4 }}>
                  <NewsItem data={item} />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Box>

      <FeedbackBlock />
    </main>
  );
}
