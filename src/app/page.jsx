'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';
import HomePageSlider from '@/components/HomePageSlider/HomePageSlider';
import About from '@/components/MainPageBlocks/About/About';
import WeProduce from '@/components/MainPageBlocks/WeProduce/WeProduce';
import News from '@/components/MainPageBlocks/News/News';
import Contacts from '@/components/MainPageBlocks/Contacts/Contacts';
import OurBuyers from '@/components/MainPageBlocks/OurBuyers/OurBuyers';
import FeedbackBlock from '@/components/FeedbackBlock/FeedbackBlock';
import ScrollableSlider from '@/components/ScrollableSlider/ScrollableSlider';
import { SectionWrapper } from './mainPageStyles';

export default function Home() {
  return (
    <main>
      <HomePageSlider />

      <SectionWrapper>
        <Box
          sx={(theme) => ({
            mb: 8,
            background: 'rgba(244, 246, 248, 1)',
            paddingBlock: '60px',

            [theme.breakpoints.down('sm')]: {
              paddingBlock: '16px',
              mb: 4
            }
          })}
        >
          <Box sx={{ mb: 5 }}>
            <Box
              sx={(theme) => ({
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: 3,
                paddingInline: '120px',
                mb: 2,
                gap: 1,

                [theme.breakpoints.down('sm')]: {
                  paddingInline: '24px',
                  gap: 2
                }
              })}
            >
              <Typography variant="h6" fontWeight={800}>
                Соответствует требованиям автопроизводителей
              </Typography>

              <Box sx={{ maxWidth: '620px' }}>
                Моторные масла Экойл имеют допуски многих автопроизводителей, что даёт возможность их рекомендовать
                для использования при эксплуатации большинства моделей современных машин и техники
              </Box>
            </Box>
          </Box>

          <ScrollableSlider />
        </Box>

        <Box
          sx={(theme) => ({
            mb: 8,

            [theme.breakpoints.down('sm')]: {
              mb: 4
            }
          })}
        >
          <About />
        </Box>

        <Box
          sx={(theme) => ({
            mb: 8,

            [theme.breakpoints.down('sm')]: {
              mb: 4
            }
          })}
        >
          <WeProduce />
        </Box>

        <Box
          sx={(theme) => ({
            mb: 8,

            [theme.breakpoints.down('sm')]: {
              mb: 4
            }
          })}
        >
          <OurBuyers />
        </Box>

        <Box
          sx={(theme) => ({
            mb: 8,

            [theme.breakpoints.down('sm')]: {
              mb: 4
            }
          })}
        >
          <News />
        </Box>

        <Box
          sx={(theme) => ({
            mb: 8,

            [theme.breakpoints.down('sm')]: {
              mb: 4
            }
          })}
        >
          <Contacts />
        </Box>

        <FeedbackBlock />
      </SectionWrapper>
    </main>
  );
}
