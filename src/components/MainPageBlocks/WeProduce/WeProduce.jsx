'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { Box, Grid, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import WeProduceBlock from './WeProduceBlock/WeProduceBlock';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import Car from '@/app/assets/car.json';
import Tractor from '@/app/assets/tractor.json';
import Factory from '@/app/assets/factory.json';

export default function About() {
  const lottieRef = useRef(null);

  useEffect(() => {
    lottieRef?.current?.setSpeed(0.75);
  }, []);

  const weProduceItems = [
    {
      title: 'PVL-Потребительские масла',
      description: 'Passenger Vehicle Lubricants – масла для легкового транспорта',
      icon: Car
    },
    {
      title: 'CVL-Коммерческие масла',
      description: 'Commercial Vehicle Lubricants – масла для коммерческого транспорта',
      icon: Tractor
    },
    {
      title: 'IND-Индустриальные масла',
      description:
        'Industrial Lubricants – масла, предназначенные для применения в различном промышленном оборудовании',
      icon: Factory
    }
  ];

  const renderWeProduceBlocks = () => {
    return weProduceItems.map((item) => {
      return (
        <Grid item xs={12} sm={4} key={item.title}>
          <WeProduceBlock item={item} />
        </Grid>
      );
    });
  };

  return (
    <>
      <SectionTitle text="Наша продукция" />

      <Box>
        <Grid
          container
          spacing={4}
          sx={{
            mt: {
              sm: 0,
              md: 5
            }
          }}
        >
          {renderWeProduceBlocks()}
        </Grid>

        <Link href="/products">
          <Button variant="contained" fontSize="large" endIcon={<ArrowForwardIcon />} sx={{ mt: 4 }}>
            Перейти в каталог
          </Button>
        </Link>
      </Box>
    </>
  );
}
