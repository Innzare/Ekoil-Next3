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
          <VectorMap
            map={worldMerc}
            zoomOnScroll={false}
            zoomButtons={false}
            markersSelectable
            backgroundColor="transparent"
            selectedMarkers={['1', '3']}
            markers={[
              {
                name: 'USA',
                latLng: [40.71296415909766, -74.00437720027804]
              },
              {
                name: 'Germany',
                latLng: [51.17661451970939, 10.97947735117339]
              },
              {
                name: 'Brazil',
                latLng: [-7.596735421549542, -54.781694323779185]
              },
              {
                name: 'Russia',
                latLng: [62.318222797104276, 89.81564777631716]
              },
              {
                name: 'China',
                latLng: [22.320178999475512, 114.17161225541399]
              }
            ]}
            regionStyle={{
              initial: {
                fill: '#dee2e7',
                'fill-opacity': 1,
                stroke: 'none',
                'stroke-width': 0,
                'stroke-opacity': 0
              }
            }}
            markerStyle={{
              initial: {
                fill: '#e91e63',
                stroke: '#ffffff',
                'stroke-width': 5,
                'stroke-opacity': 0.5,
                r: 7
              },
              hover: {
                fill: 'E91E63',
                stroke: '#ffffff',
                'stroke-width': 5,
                'stroke-opacity': 0.5
              },
              selected: {
                fill: 'E91E63',
                stroke: '#ffffff',
                'stroke-width': 5,
                'stroke-opacity': 0.5
              }
            }}
            onRegionTipShow={() => false}
            onMarkerTipShow={() => false}
          />
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
              <p>наименований продукции</p>
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
              <p>тысяч тонн продукции в год</p>
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
