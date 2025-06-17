'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { Box, Grid2 as Grid, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import WeProduceBlock from './WeProduceBlock/WeProduceBlock';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
// import Car from '@/app/assets/car.json';
// import Car from '@/components/SvgIcons/Car';
// import CommercialCar from '@/components/SvgIcons/CommercialCar';
// import SpecialCar from '@/components/SvgIcons/SpecialCar';
// import IndustryIcon from '@/components/SvgIcons/IndustryIcon';
// import AntiFreezeIcon from '@/components/SvgIcons/AntiFreezeIcon';
import Auto from '@/app/assets/auto2.jpg';
import Snowbike from '@/app/assets/snowbike.jpg';
import Truck from '@/app/assets/truck2.jpg';
import Transmission from '@/app/assets/transmission2.jpg';
import Indust from '@/app/assets/indust.jpg';
import Antifreeze from '@/app/assets/antifreeze.webp';
import OilsIcon from '@/components/SvgIcons/OilsIcon';
import {
  WeProduceBlockWrapper,
  Image,
  WeProduceBlockTitle,
  WeProduceBlockSubTitle,
  WeProduceBlockText
} from './WeProduceBlock/styles';
// import Tractor from '@/app/assets/tractor.json';
// import Factory from '@/app/assets/factory.json';
import Tara4 from '@/app/assets/ekoil-tara4.png';

export default function About() {
  const weProduceItems = [
    {
      title: 'Для легкового транспорта',
      // description: 'Passenger Vehicle Lubricants – масла для легкового транспорта',
      icon: Auto
    },
    {
      title: 'Для коммерческого транспорта',
      // description: 'Commercial Vehicle Lubricants – масла для коммерческого транспорта',
      icon: Truck
    },
    {
      title: 'Для специальной техники',
      // description:
      //   'Industrial Lubricants – масла, предназначенные для применения в различном промышленном оборудовании',
      icon: Snowbike
    },
    {
      title: 'Трансмиссионные масла',
      // description:
      //   'Industrial Lubricants – масла, предназначенные для применения в различном промышленном оборудовании',
      icon: Transmission
    },
    {
      title: 'Для индустрии',
      // description:
      //   'Industrial Lubricants – масла, предназначенные для применения в различном промышленном оборудовании',
      icon: Indust
    },
    {
      title: 'Антифризы',
      // description:
      //   'Industrial Lubricants – масла, предназначенные для применения в различном промышленном оборудовании',
      icon: Antifreeze
    }
  ];

  const renderWeProduceBlocks = () => {
    return weProduceItems.map((item) => {
      return (
        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.title}>
          <WeProduceBlock item={item} />
        </Grid>
      );
    });
  };

  return (
    <>
      <SectionTitle text="Продукция" />

      <Grid container spacing={2}>
        {renderWeProduceBlocks()}
      </Grid>

      {/* <Box>
        <Grid
          container
          spacing={4}
          sx={{
            mt: {
              sm: 0,
              md: -3
            }
          }}
        >
          {renderWeProduceBlocks()} */}

      {/* <Grid item xs={12} sm={4}>
            <Link href="/products">
              <WeProduceBlockWrapper>
                <Image className="image-wrapper">
                  <OilsIcon color="#000" width="68" height="68" />
                </Image>

                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mt: 2 }}>
                  <WeProduceBlockTitle variant="h6">Перейти в каталог</WeProduceBlockTitle>
                  <ArrowForwardIcon
                    sx={{
                      position: 'relative',

                      '&:after': {
                        position: 'absolute',
                        width: '20px',
                        height: '20px',
                        left: 0,
                        top: 0,
                        backgroundColor: '#ccc'
                      }
                    }}
                  />
                </Box>
              </WeProduceBlockWrapper>
            </Link>
          </Grid>
        </Grid> */}

      {/* <Link href="/products">
          <Button variant="outlined" fontSize="large" endIcon={<ArrowForwardIcon />} sx={{ mt: 4, py: 2, px: 4 }}>
            Перейти в каталог
          </Button>
        </Link> */}
      {/* </Box> */}
    </>
  );
}
