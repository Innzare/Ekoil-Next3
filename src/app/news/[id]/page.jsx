'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { Box, Grid2 as Grid, Button, Card, Tooltip, Typography, Divider, Stack, Skeleton } from '@mui/material';

import FeedbackBlock from '@/components/FeedbackBlock/FeedbackBlock';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HeaderSection from '@/components/HeaderSection';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import axios from 'axios';

export default function page() {
  const [isLoading, setIsLoading] = useState(false);
  const [news, setNews] = useState(null);
  const params = useParams();
  const router = useRouter();

  useEffect(() => {
    loadNews();
  }, []);

  const loadNews = async () => {
    setIsLoading(true);

    try {
      const { data } = await axios.get(`/api/blog/news/${params.id}`);

      setNews(data);
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

      <FeedbackBlock />
    </main>
  );
}
