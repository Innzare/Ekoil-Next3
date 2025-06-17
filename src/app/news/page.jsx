'use client';

import React from 'react';
import { Box, Card, Grid } from '@mui/material';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import FeedbackBlock from '@/components/FeedbackBlock/FeedbackBlock';

import NewsItem from '@/components/MainPageBlocks/News/NewsItem';
import HeaderSection from '@/components/HeaderSection';

const news = [
  {
    image: '',
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    data: '09.03.2024'
  },
  {
    image: '',
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    data: '09.03.2024'
  },
  {
    image: '',
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    data: '09.03.2024'
  },
  {
    image: '',
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    data: '09.03.2024'
  },
  {
    image: '',
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    data: '09.03.2024'
  },
  {
    image: '',
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    data: '09.03.2024'
  },
  {
    image: '',
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    data: '09.03.2024'
  },
  {
    image: '',
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    data: '09.03.2024'
  },
  {
    image: '',
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    data: '09.03.2024'
  }
];

export default function page() {
  return (
    <main>
      <HeaderSection title="Новости" />

      <Box sx={{ p: 3 }}>
        <Box sx={{ mb: 8 }}>
          <Grid container spacing={4}>
            {news.map((item) => {
              return (
                <Grid item cols="12" xs="4">
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
