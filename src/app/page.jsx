'use client';

import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HomePageSlider from '@/components/HomePageSlider/HomePageSlider';
import About from '@/components/MainPageBlocks/About/About';
import WeProduce from '@/components/MainPageBlocks/WeProduce/WeProduce';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import DigitsCounter from '@/components/DigitsCounter/DigitsCounter';
import { SectionWrapper, Map } from './mainPageStyles';
import Lottie from 'lottie-react';
import Assembly from '@/app/assets/assembly-line.json';
import { VectorMap } from '@react-jvectormap/core';
import { worldMerc } from '@react-jvectormap/world';
import FactoryIcon from '@mui/icons-material/Factory';

export default function Home() {
  return (
    <main>
      <Box sx={{ mb: 5 }}>
        <About />
      </Box>

      <SectionTitle text="Производство" />

      <Box sx={{ mb: 5 }}>
        <SectionWrapper>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              gap: 2,
              mt: -12
            }}
          >
            <Typography
              color="initial"
              sx={{
                display: 'flex',
                gap: 2,
                alignItems: 'flex-end',
                fontSize: '18px',
                fontWeight: 'bold',
                '& span': {
                  fontSize: '130px',
                  fontWeight: 'bold',
                  color: '#01a4e4'
                },
                '& p': {
                  mb: 6
                }
              }}
            >
              <DigitsCounter val={150} time={7} />
              {/* <span>150</span> */}
              <p>
                наименований <br /> продукции
              </p>
            </Typography>

            {/* <DigitsCounter val={666} time={1} /> */}

            <Typography
              color="initial"
              sx={{
                display: 'flex',
                gap: 2,
                alignItems: 'flex-end',
                fontSize: '18px',
                fontWeight: 'bold',
                '& span': {
                  fontSize: '130px',
                  fontWeight: 'bold',
                  color: '#01a4e4'
                },
                '& p': {
                  mb: 6
                }
              }}
            >
              <DigitsCounter val={100} time={7} />
              {/* <span>100</span> */}
              <p>
                тысяч тонн <br /> продукции в год
              </p>
            </Typography>
          </Box>
          <Grid container spacing={8}>
            <Grid item md={12}>
              <Typography color="initial">
                Масла под брендом EKOIL Lubricants производятся на производственной площадке в Уфе (Республика
                Башкортостан). Система менеджмента Компании и ее производственных активов соответствует требованиям
                международных стандартов ISO 9001.
              </Typography>

              <Typography color="initial">Собственная аккредитованная лаборатория.</Typography>

              <Typography color="initial">
                Многообразие фасовок (1,5,10,30,100,216,5 л) и форм отгрузки (авто и железнодорожным транспортом)
                позволяет выбрать наиболее подходящий и удобный для Вас вариант.
              </Typography>
            </Grid>

            {/* <Grid item md={4}>
        <Lottie style={{ height: '150px' }} animationData={Assembly} loop={false} />
      </Grid> */}
          </Grid>

          <Button variant="outlined" fontSize="large" endIcon={<ArrowForwardIcon />} sx={{ mt: 4 }}>
            Узнать подробнее
          </Button>
        </SectionWrapper>
      </Box>

      <Box sx={{ mb: 5 }}>
        <WeProduce />
      </Box>

      <Box sx={{ mb: 5 }}>
        <HomePageSlider />
      </Box>

      <SectionTitle text="Новости компании" />

      <Box sx={{ mb: 5 }}>
        <SectionWrapper></SectionWrapper>
      </Box>

      <SectionTitle text="Связаться" />

      <Box sx={{ mb: 5 }}>
        <SectionWrapper></SectionWrapper>
      </Box>
    </main>
  );
}
