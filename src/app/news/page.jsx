'use client';

import React, { useEffect, useState } from 'react';

import { Box, Grid2 as Grid, Skeleton, Stack, Typography } from '@mui/material';
import FeedbackBlock from '@/components/FeedbackBlock/FeedbackBlock';

import NewsItem from '@/components/MainPageBlocks/News/NewsItem';
import HeaderSection from '@/components/HeaderSection';
import axios from 'axios';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import NewspaperIcon from '@mui/icons-material/Newspaper';

export default function page() {
  const [isLoading, setIsLoading] = useState(false);
  const [news, setNews] = useState([]);
  const [lastNews, setLastNews] = useState(null);

  useEffect(() => {
    loadNews();
  }, []);

  const loadNews = async () => {
    setIsLoading(true);

    try {
      const news = await axios.get('api/blog/news?limit=3');

      const lastNews = await axios.get(`/api/blog/news/${news.data[0].id}`);

      setNews(news.data);
      setLastNews(lastNews.data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
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
            p: 3
          }
        })}
      >
        <Box sx={{ mb: 10 }}>
          {lastNews && (
            <Grid container spacing={{ xs: 3, sm: 6 }} sx={{ mb: 6, alignItems: 'stretch' }}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <Box
                  sx={(theme) => ({
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    height: '400px',
                    borderRadius: '12px',
                    backgroundColor: '#F9FAFB',
                    backgroundImage: `url(${lastNews?.image})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',

                    [theme.breakpoints.down('sm')]: {
                      height: '300px'
                    }
                  })}
                >
                  {!lastNews?.image && <NewspaperIcon fontSize="large" sx={{ color: '#666' }} />}
                </Box>
              </Grid>

              <Grid size={{ xs: 12, sm: 6 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                  <Box>
                    <Typography
                      variant="h4"
                      fontWeight={800}
                      sx={(theme) => ({
                        mb: 2,
                        [theme.breakpoints.down('sm')]: {
                          fontSize: '21px'
                        }
                      })}
                    >
                      {lastNews?.title}
                    </Typography>
                    <Box dangerouslySetInnerHTML={{ __html: lastNews?.text }}></Box>
                  </Box>

                  <Typography variant="body1" sx={{ color: '#637381' }}>
                    {lastNews?.published_at}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          )}

          {isLoading ? (
            <Grid container spacing={{ xs: 3, sm: 6 }}>
              {Array(10)
                .fill(null)
                .map((item, index) => {
                  return (
                    <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
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
            <Grid container spacing={{ xs: 3, sm: 6 }}>
              {news.map((item) => {
                return (
                  <Grid key={item.id} size={{ xs: 12, sm: 6, md: 4 }}>
                    <NewsItem data={item} />
                  </Grid>
                );
              })}
            </Grid>
          )}
        </Box>
      </Box>

      <FeedbackBlock />
    </main>
  );
}
