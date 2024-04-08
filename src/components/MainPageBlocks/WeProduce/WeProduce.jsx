'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { Box, Grid, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import WeProduceBlock from './WeProduceBlock/WeProduceBlock';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
// import Car from '@/app/assets/car.json';
import Car from '@/components/SvgIcons/Car';
import CommercialCar from '@/components/SvgIcons/CommercialCar';
import SpecialCar from '@/components/SvgIcons/SpecialCar';
import IndustryIcon from '@/components/SvgIcons/IndustryIcon';
import AntiFreezeIcon from '@/components/SvgIcons/AntiFreezeIcon';
import OilsIcon from '@/components/SvgIcons/OilsIcon';
import {
  WeProduceBlockWrapper,
  Image,
  WeProduceBlockTitle,
  WeProduceBlockSubTitle,
  WeProduceBlockText
} from './WeProduceBlock/styles';
import Tractor from '@/app/assets/tractor.json';
import Factory from '@/app/assets/factory.json';

export default function About() {
  const lottieRef = useRef(null);

  useEffect(() => {
    lottieRef?.current?.setSpeed(0.75);
  }, []);

  const weProduceItems = [
    {
      title: 'Для легкового транспорта',
      // description: 'Passenger Vehicle Lubricants – масла для легкового транспорта',
      icon: Car
    },
    {
      title: 'Для коммерческого транспорта',
      // description: 'Commercial Vehicle Lubricants – масла для коммерческого транспорта',
      icon: CommercialCar
    },
    {
      title: 'Для специальной техники',
      // description:
      //   'Industrial Lubricants – масла, предназначенные для применения в различном промышленном оборудовании',
      icon: SpecialCar
    },
    {
      title: 'Для индустрии',
      // description:
      //   'Industrial Lubricants – масла, предназначенные для применения в различном промышленном оборудовании',
      icon: IndustryIcon
    },
    {
      title: 'Антифризы',
      // description:
      //   'Industrial Lubricants – масла, предназначенные для применения в различном промышленном оборудовании',
      icon: AntiFreezeIcon
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
              md: -3
            }
          }}
        >
          {renderWeProduceBlocks()}

          <Grid item xs={12} sm={4}>
            <Link href="/products">
              <WeProduceBlockWrapper>
                <Image className="image-wrapper">
                  <OilsIcon color="#000" width="68" height="68" />
                  {/* <Lottie lottieRef={lottieRef} style={{ height: '150px' }} animationData={item.icon} loop={false} /> */}
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
        </Grid>

        {/* <Link href="/products">
          <Button variant="outlined" fontSize="large" endIcon={<ArrowForwardIcon />} sx={{ mt: 4, py: 2, px: 4 }}>
            Перейти в каталог
          </Button>
        </Link> */}
      </Box>
    </>
  );
}
