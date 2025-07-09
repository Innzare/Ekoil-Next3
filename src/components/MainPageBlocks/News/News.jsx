'use client';

import React, { useEffect, useState } from 'react';
import { Box, Button, Grid2 as Grid, Skeleton, Stack } from '@mui/material';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import NewsItem from './NewsItem';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Link from 'next/link';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import axios from 'axios';

export default function News() {
  const [isLoading, setIsLoading] = useState(false);
  const [news, setNews] = useState([]);

  useEffect(() => {
    loadNews();
  }, []);

  const loadNews = async () => {
    setIsLoading(true);

    try {
      const news = await axios.get('api/blog/news?limit=3');

      setNews(news.data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

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

      {isLoading ? (
        <Grid container spacing={{ xs: 3, sm: 6 }}>
          {Array(3)
            .fill(null)
            .map((item, index) => {
              return (
                <Grid key={index} size={{ xs: 12, sm: 4 }}>
                  <Stack spacing={1}>
                    <Skeleton
                      animation="wave"
                      variant="rounded"
                      width="100%"
                      height={320}
                      sx={{
                        position: 'relative',
                        backgroundColor: '#F9FAFB',
                        p: 3,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          backgroundColor: '#fff',
                          borderRadius: '6px',
                          visibility: 'visible !important',
                          height: '200px'
                        }}
                      >
                        <ImageOutlinedIcon
                          color="#ccc"
                          sx={{ visibility: 'visible !important', fontSize: 64, color: '#ccc' }}
                        />
                      </Box>

                      <Box>
                        <Skeleton variant="text" sx={{ visibility: 'visible', fontSize: '1rem' }} />
                        <Skeleton variant="text" width="60%" sx={{ visibility: 'visible', fontSize: '1rem' }} />
                      </Box>

                      <Box sx={{ display: 'flex', gap: 2 }}>
                        <Skeleton variant="rounded" height={40} sx={{ visibility: 'visible', width: '100%' }} />
                        <Skeleton variant="rounded" height={40} sx={{ visibility: 'visible', width: '100%' }} />
                      </Box>
                    </Skeleton>
                  </Stack>
                </Grid>
              );
            })}
        </Grid>
      ) : (
        <Grid container spacing={{ xs: 4, sm: 6 }}>
          {news.slice(0, 3).map((item) => {
            return (
              <Grid size={{ xs: 12, sm: 4 }} key={item.title}>
                <NewsItem data={item} />
              </Grid>
            );
          })}
        </Grid>
      )}

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
