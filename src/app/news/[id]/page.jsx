'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { Box, Grid2 as Grid, Button, Card, Tooltip, Typography, Divider, Stack, Skeleton } from '@mui/material';

import FeedbackBlock from '@/components/FeedbackBlock/FeedbackBlock';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HeaderSection from '@/components/HeaderSection';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import NewsItem from '@/components/MainPageBlocks/News/NewsItem';
import axios from 'axios';
import Link from 'next/link';

export default function page() {
  const [isLoading, setIsLoading] = useState(false);
  const [news, setNews] = useState(null);
  const [allNews, setAllNews] = useState([]);
  const params = useParams();
  const router = useRouter();

  useEffect(() => {
    loadNews();
  }, []);

  const loadNews = async () => {
    setIsLoading(true);

    try {
      const { data } = await axios.get(`/api/blog/news/${params.id}`);
      const allNewsResponse = await axios.get(`/api/blog/news`);

      const allNewsFiltered = allNewsResponse.data.filter((item) => item.id !== params.id);

      setNews(data);
      setAllNews(allNewsFiltered);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const onGoBackClick = () => {
    router.push('/news');
  };

  return (
    <main>
      <HeaderSection title="Новости" dynamicRouteTitle={news?.title} />

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
        {isLoading ? (
          <Box sx={{ width: '100%', maxWidth: '1100px', margin: '0 auto' }}>
            <Stack spacing={1}>
              <Skeleton
                animation="wave"
                variant="rounded"
                width="100%"
                height={600}
                sx={{
                  position: 'relative',
                  backgroundColor: 'rgb(238, 243, 250)',
                  p: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <Box sx={{ mb: 2 }}>
                  <Skeleton variant="text" sx={{ visibility: 'visible', fontSize: '1rem' }} />
                  <Skeleton variant="text" width="60%" sx={{ visibility: 'visible', fontSize: '1rem' }} />
                </Box>

                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#fff',
                    borderRadius: '6px',
                    visibility: 'visible !important',
                    height: '400px',
                    mb: 2
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
              </Skeleton>
            </Stack>
          </Box>
        ) : (
          <Box sx={{ width: '100%', maxWidth: '1100px', margin: '0 auto' }}>
            <Tooltip title="Назад">
              <Button
                sx={{ mb: 4, backgroundColor: '#1E284B', borderRadius: '8px' }}
                onClick={onGoBackClick}
                variant="contained"
                disableElevation
                size="small"
                color="primary"
              >
                <ArrowBackIcon />
              </Button>
            </Tooltip>

            <Typography
              variant="h4"
              fontWeight={800}
              sx={(theme) => ({
                [theme.breakpoints.down('md')]: {
                  fontSize: '21px'
                }
              })}
            >
              {news?.title}
            </Typography>

            <Divider sx={{ my: 4 }}></Divider>

            {news?.image && (
              <Box
                sx={(theme) => ({
                  display: 'flex',
                  justifyContent: 'center',
                  width: '100%',
                  height: '400px',
                  mb: 3,
                  img: { height: '100%' },

                  [theme.breakpoints.down('md')]: {
                    height: '200px'
                  }
                })}
              >
                <img src={news?.image} alt="" />
              </Box>
            )}

            <Box dangerouslySetInnerHTML={{ __html: news?.text }}></Box>
          </Box>
        )}
      </Box>

      <Box
        sx={(theme) => ({
          p: 10,
          mt: 6,
          backgroundColor: '#F4F6F8',

          [theme.breakpoints.down('md')]: {
            p: 5
          },

          [theme.breakpoints.down('sm')]: {
            p: 3
          }
        })}
      >
        {!isLoading && (
          <Typography variant="h5" fontWeight={800} sx={{ mb: 3 }}>
            Другие новости
          </Typography>
        )}

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
            {allNews.slice(0, 3).map((item) => {
              return (
                <Grid size={{ xs: 12, sm: 4 }} key={item.title}>
                  <NewsItem data={item} />
                </Grid>
              );
            })}
          </Grid>
        )}

        {!isLoading && (
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
                mt: 8,
                fontSize: '16px'
              }}
            >
              Все новости
            </Button>
          </Link>
        )}
      </Box>

      <FeedbackBlock />
    </main>
  );
}
