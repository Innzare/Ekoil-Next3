import React from 'react';
import { Box, Grid } from '@mui/material';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import NewsItem from '@/components/MainPageBlocks/News/NewsItem';

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
  }
];

export default function NewsTab() {
  return (
    <Box>
      <SectionTitle text="Новости" />

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
  );
}
