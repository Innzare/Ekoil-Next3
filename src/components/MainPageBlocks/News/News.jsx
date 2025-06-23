import React from 'react';
import { Box, Button, Grid } from '@mui/material';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import NewsItem from './NewsItem';
import Link from 'next/link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const news = [
  {
    image: '',
    title: 'Lorem 2 ipsum dolor sit amet consectetur adipisicing elit.',
    data: '09.03.2024'
  },
  {
    image: '',
    title: 'Lorem 3 ipsum dolor sit amet consectetur adipisicing elit.',
    data: '09.03.2024'
  },
  {
    image: '',
    title: 'Lorem 1 ipsum dolor sit amet consectetur adipisicing elit.',
    data: '09.03.2024'
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
      <SectionTitle text="Новости компании" />

      <Grid container spacing={4}>
        {news.map((item) => {
          return (
            <Grid item cols="12" xs={4} key={item.title}>
              <NewsItem data={item} />
            </Grid>
          );
        })}
      </Grid>

      <Link href="/news">
        <Button
          variant="outlined"
          disableElevation
          size="large"
          endIcon={<ArrowForwardIcon />}
          sx={{ mt: 4, py: 2, px: 4 }}
        >
          Все новости
        </Button>
      </Link>
    </Box>
  );
}
