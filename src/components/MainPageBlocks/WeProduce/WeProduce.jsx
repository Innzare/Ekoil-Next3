'use client';

import React, { useRef, useEffect } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import Link from 'next/link';
import { useTheme } from '@mui/material/styles';
import { Box, Grid2 as Grid, Button, Typography, Chip } from '@mui/material';
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
import Tara from '@/app/assets/ekoil-tara.png';
import Tara2 from '@/app/assets/ekoil-tara2.png';
import Tara3 from '@/app/assets/ekoil-tara3.png';
import Tara4 from '@/app/assets/ekoil-tara4.png';
import Antifreeze from '@/app/assets/antifreeze.webp';
import OilsIcon from '@/components/SvgIcons/OilsIcon';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import FeedbackBackground from '@/app/assets/FeedbackBackground.jpg';
import HeaderLogo from '@/components/SvgIcons/HeaderLogo';
import {
  WeProduceBlockWrapper,
  Image,
  WeProduceBlockTitle,
  WeProduceBlockSubTitle,
  WeProduceBlockText
} from './WeProduceBlock/styles';
// import Tractor from '@/app/assets/tractor.json';
// import Factory from '@/app/assets/factory.json';
// import Tara4 from '@/app/assets/ekoil-tara4.png';

const weProduceItems = [
  {
    title: 'Моторные масла',
    icon: Tara
  },
  {
    title: 'Трансмиссионные масла',
    icon: Tara2
  },
  {
    title: 'Индустриальные масла',
    icon: Tara3
  },
  {
    title: 'Антифризы',
    icon: Tara4
  }
];

const chips = [
  'Моторные',
  'Трансмиссионные',
  'Гидравлические',
  'Промывочные',
  'Промышленные и индустриальные',
  'Смазочные материалы',
  'Антифризы'
];

const products = [
  {
    badge: 'Passenger Vehicle Lubricant',
    title: 'Масла для легкового транспорта',
    list: [
      'Для бензиновых и дизельных двигателей легковых автомобилей, микроавтобусов и лёгких грузовиков',
      'Для двухтактных бензиновых двигателей',
      'Для разных типов трансмиссий: механические, автоматические и вариаторные КПП',
      'Для сервисного обслуживания'
    ],
    img: ''
  },
  {
    badge: 'Commercial Vehicle',
    title: 'Масла для коммерческого транспорта',
    list: [
      'Для дизельных двигателей тяжёлых грузовиков, шоссейной и внедорожной техники',
      'Для использования в механических и автоматических трансмиссиях грузовых автомобилей и другой мобильной техники',
      'Для использования в гидравлических системах'
    ],
    img: ''
  },
  {
    badge: 'Small-sized Vehicle Lubricants',
    title: 'Индустриальные масла',
    list: [
      'Для применения в различном промышленном оборудовании — гидравлических системах, станках, редукторах, прессах, прокатных станах и т.д.'
    ],
    img: ''
  },
  {
    badge: 'Industrial Lubricants',
    title: 'Масла для легкового транспорта',
    list: [
      'Для бензиновых и дизельных двигателей легковых автомобилей, микроавтобусов и лёгких грузовиков',
      'Для двухтактных бензиновых двигателей',
      'Для разных типов трансмиссий: механические, автоматические и вариаторные КПП',
      'Для сервисного обслуживания'
    ],
    img: ''
  }
];

export default function About() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const renderWeProduceBlocks = () => {
    return weProduceItems.map((item) => {
      return (
        <Grid size={{ xs: 6, sm: 6, md: 3 }} key={item.title}>
          <WeProduceBlock item={item} />
        </Grid>
      );
    });
  };

  return (
    <>
      <Box
        sx={(theme) => ({
          px: 10,

          [theme.breakpoints.down('md')]: {
            px: 4
          },

          [theme.breakpoints.down('sm')]: {
            px: 2
          },

          mb: 10
        })}
      >
        <Typography
          variant="h6"
          fontWeight="900"
          sx={(theme) => ({
            mb: 4,
            textTransform: 'uppercase',
            position: 'relative',
            display: 'inline-block',
            color: '#CC2828',

            '&:after': {
              content: '""',
              position: 'absolute',
              right: '-80%',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '80px',
              height: '1px',
              backgroundColor: '#000'
            },

            [theme.breakpoints.down('sm')]: {
              fontSize: '21px'
            }
          })}
        >
          Продукция
        </Typography>

        <Typography
          variant="body1"
          sx={(theme) => ({
            mb: 4,
            fontSize: '32px',
            fontWeight: '700',

            [theme.breakpoints.down('sm')]: {
              lineHeight: '32px',
              fontSize: '24px'
            }
          })}
        >
          Мы производим и реализуем
        </Typography>

        <Grid container spacing={isMobile ? 2 : 4}>
          {renderWeProduceBlocks()}
        </Grid>
      </Box>

      <Box
        sx={(theme) => ({
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          p: 10,
          background: `linear-gradient(45deg, #1e284b75, rgba(0, 0, 0, 0.45)), url(${FeedbackBackground.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',

          [theme.breakpoints.down('sm')]: {
            p: 3
          }
        })}
      >
        <Box
          sx={(theme) => ({
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',

            [theme.breakpoints.down('sm')]: {
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              gap: 2
            }
          })}
        >
          <Typography
            variant="body2"
            color="#fff"
            sx={(theme) => ({
              fontWeight: '700',
              fontSize: '24px',
              maxWidth: '300px',
              lineHeight: '28px',

              [theme.breakpoints.down('sm')]: {
                order: 1,
                maxWidth: '400px'
              }
            })}
          >
            Высококачественные смазочные материалы
          </Typography>

          <HeaderLogo light />
        </Box>

        <Box
          sx={(theme) => ({
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 3,

            [theme.breakpoints.down('sm')]: {
              flexDirection: 'column',
              alignItems: 'stretch'
            }
          })}
        >
          <Link href="/catalog">
            <Button
              endIcon={<ArrowOutwardIcon />}
              sx={(theme) => ({
                backgroundColor: '#CC2828',
                color: '#fff',
                borderRadius: '16px',
                padding: '16px 24px',
                fontWeight: '800',
                whiteSpace: 'nowrap',

                [theme.breakpoints.down('sm')]: {
                  width: '100%'
                }
              })}
            >
              Открыть каталог
            </Button>
          </Link>

          <Box
            sx={(theme) => ({
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 2,
              maxWidth: '1000px',

              [theme.breakpoints.down('sm')]: {
                order: -1,
                justifyContent: 'flex-start',
                gap: 1
              }
            })}
          >
            {chips.map((chip) => (
              <Chip
                label={chip}
                variant="outlined"
                sx={(theme) => ({
                  color: '#fff',
                  fontSize: '16px',
                  background: 'rgba(255, 255, 255, 0.10)'
                })}
              />
            ))}
          </Box>
        </Box>
      </Box>

      {/* <Box
        sx={(theme) => ({
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
          px: 10,
          mt: 12,

          [theme.breakpoints.down('md')]: {
            px: 4
          },

          [theme.breakpoints.down('sm')]: {
            px: 2
          },

          mb: 10
        })}
      >
        {products.map((product, index) => (
          <Box
            sx={{
              display: 'flex',
              gap: 1,
              backgroundColor: '#F4F6F8',
              borderRadius: '32px',
              p: 6
            }}
          >
            <Box sx={{ flex: '1 1 50%', order: index % 2 === 0 ? 0 : 1 }}>
              <Chip
                label={product.badge}
                variant="filled"
                sx={(theme) => ({
                  backgroundColor: '#1E284B',
                  color: '#fff',
                  fontSize: '16px',
                  mb: 3
                })}
              />

              <Typography variant="h5" color="initial" sx={{ mb: 3, fontWeight: '700' }}>
                {product.title}
              </Typography>

              <Box component="ul" sx={{ pl: '18px', display: 'flex', flexDirection: 'column', gap: 1 }}>
                {product.list.map((item) => (
                  <li>{item}</li>
                ))}
              </Box>
            </Box>

            <Box
              sx={{
                flex: '1 1 50%'
              }}
            ></Box>
          </Box>
        ))}
      </Box> */}
    </>
  );
}
