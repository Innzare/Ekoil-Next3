import React from 'react';
import { Box, Button, Grid } from '@mui/material';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import NewsItem from './NewsItem';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Link from 'next/link';

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

      <Grid container spacing={4}>
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
