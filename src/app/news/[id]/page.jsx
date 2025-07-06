'use client';

import React from 'react';
import { Box, Grid2 as Grid, Button, Card, Tooltip, Typography } from '@mui/material';

import SectionTitle from '@/components/SectionTitle/SectionTitle';
import FeedbackBlock from '@/components/FeedbackBlock/FeedbackBlock';
import { useRouter, useParams, useSearchParams } from 'next/navigation';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import oilTara from '@/app/assets/AboutPage/oil-tara.jpg';
import slider1 from '@/app/assets/AboutPage/slider1.png';
import slider2 from '@/app/assets/AboutPage/slider2.jpg';
import slider3 from '@/app/assets/AboutPage/slider3.jpg';

import NewsItem from '@/components/MainPageBlocks/News/NewsItem';
import HeaderSection from '@/components/HeaderSection';

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
  const params = useParams();
  const router = useRouter();

  const currentNews = news.find((item) => item.id === parseInt(params.id));

  const onGoBackClick = () => {
    router.push('/news');
  };

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
            p: 2
          }
        })}
      >
        <Tooltip title="Назад">
          <Button
            sx={{ mb: 4 }}
            onClick={onGoBackClick}
            variant="contained"
            disableElevation
            size="small"
            color="primary"
          >
            <ArrowBackIcon />
          </Button>
        </Tooltip>

        <Typography variant="h4" fontWeight={800}>
          {currentNews?.title}
        </Typography>
      </Box>

      <FeedbackBlock />
    </main>
  );
}
