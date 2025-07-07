import React from 'react';
import { Box, Button, Grid } from '@mui/material';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import NewsItem from './NewsItem';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Link from 'next/link';

import oilTara from '@/app/assets/AboutPage/oil-tara.jpg';
import slider1 from '@/app/assets/AboutPage/slider1.png';
import slider2 from '@/app/assets/AboutPage/slider2.jpg';

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
  }
];

export default function News() {
  return (
    <Box
      sx={(theme) => ({
        px: 10,

        [theme.breakpoints.down('md')]: {
          px: 4
        },

        [theme.breakpoints.down('sm')]: {
          px: 2
        }
      })}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 2,
          mb: 4
        }}
      >
        <SectionTitle text="Новости компании" />
      </Box>

      <Grid container spacing={{ xs: 4, sm: 6 }}>
        {news.map((item) => {
          return (
            <Grid item cols="12" xs={12} sm={4} key={item.title}>
              <NewsItem data={item} />
            </Grid>
          );
        })}
      </Grid>

      <Link href="/news">
        <Button
          fontSize="large"
          endIcon={<ArrowOutwardIcon />}
          sx={{
            textTransform: 'initial',
            backgroundColor: '#1E284B',
            color: '#fff',
            fontWeight: '700',
            borderRadius: '8px',
            px: 3,
            py: 2,
            mt: 4,
            fontSize: '16px'
          }}
        >
          Все новости
        </Button>
      </Link>
    </Box>
  );
}
