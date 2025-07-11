import React, { useRef, useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';

import { Swiper as SwiperMUI, SwiperSlide as SwiperSlideMUI } from 'swiper/react';
import { Box, styled } from '@mui/system';
import { Autoplay } from 'swiper/modules';
import Link from 'next/link';

import moto from '@/app/assets/moto.jpg';
import transmission from '@/app/assets/transmission.jpg';
import truck from '@/app/assets/truck.jpg';
import auto from '@/app/assets/auto.jpg';
import autoMobile1 from '@/app/assets/auto_mobile1.jpg';
import autoMobile2 from '@/app/assets/auto_mobile2.jpg';
import autoMobile3 from '@/app/assets/auto_mobile3.jpg';
import autoMobile4 from '@/app/assets/auto_mobile4.jpg';

import SubjectOutlinedIcon from '@mui/icons-material/SubjectOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Typography from '@mui/material/Typography';
import { Button, IconButton } from '@mui/material';
import { grey } from '@mui/material/colors';

export const Swiper = styled(SwiperMUI)(({ theme }) => ({
  width: '100%',
  height: '100dvh'

  // [theme.breakpoints.down('sm')]: {
  //   height: '300px'
  // }
}));

export const SwiperSlide = styled(SwiperSlideMUI)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#ccc',
  // borderRadius: '8px',
  overflow: 'hidden'
}));

const slides = [
  {
    image: auto.src,
    imageMobile: autoMobile1.src,
    title: 'Моторные масла',
    subtitle: 'Для легковой техники',
    description:
      'Ekoil Lubricants разработал полный ассортимент смазочных материалов, которые соответствуют и превосходят уровни производительности по API и ACEA'
  },
  {
    image: moto.src,
    imageMobile: autoMobile2.src,
    title: 'Моторные масла',
    subtitle: 'Для малоразмерной техники',
    description:
      'Высококачественные моторные масла для использования в двухтактных и четырехтактных бензиновых двигателях мотоциклов, мопедов, скутеров, снегоходов, квадроциклов, гидроциклов и другой техники'
  },
  {
    image: truck.src,
    imageMobile: autoMobile3.src,
    title: 'Моторные масла',
    subtitle: 'Для грузовых автомобилей и спецтехники',
    description:
      'Масла, разработанные специально для современных высоконагруженных двигателей грузовых автомобилей, автобусов и тягачей, оснащенных системами EGR, SCR и DPF'
  },
  {
    image: transmission.src,
    imageMobile: autoMobile4.src,
    title: 'Трансмиссионные масла',
    subtitle: 'Для автоматических и механических коробок передач',
    description:
      'Высокоэффективные трансмиссионные масла Ekoil Lubricants для автоматических и механических коробок передач'
  }
];

export default function HomePageSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const isMinWidth1024 = useMediaQuery('(min-width:1024px)');

  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        userSelect: 'none'
      }}
    >
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        loop={true}
        spaceBetween={50}
        activeindex={activeIndex}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex);
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {slides.map((slide) => {
          return (
            <SwiperSlide key={slide.description}>
              <Box
                sx={(theme) => ({
                  width: '100%',
                  height: '100%',
                  background: `linear-gradient(45deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url(${slide.image})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',

                  [theme.breakpoints.down('sm')]: {
                    background: `linear-gradient(45deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url(${slide.imageMobile})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'
                  }
                })}
              ></Box>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <Box
        sx={(theme) => ({
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          position: 'absolute',
          left: '5%',
          right: '5%',
          bottom: '10%',
          zIndex: 10,
          backdropFilter: 'blur(16px)',
          backgroundColor: '#dfe3e83d',
          p: 4,
          borderRadius: '16px',
          maxWidth: '800px',
          width: isMinWidth1024 ? '100% ' : 'auto',
          minHeight: '400px',

          [theme.breakpoints.down('sm')]: {
            p: '16px',
            bottom: '2.5%',
            minHeight: '350px'
          }
        })}
      >
        {slides.map((item, index) => {
          return (
            <Box
              key={item.description}
              sx={{
                position: activeIndex === index ? 'static' : 'absolute',
                left: -9999,
                opacity: activeIndex === index ? 1 : 0,
                height: activeIndex === index ? 'auto' : 0,
                transform: activeIndex === index ? 'translateY(0px)' : 'translateY(20px)',
                transition: '0.5s ease'
              }}
            >
              <Typography
                variant="h3"
                color="#fff"
                fontWeight={700}
                sx={(theme) => ({
                  mb: 1,
                  lineHeight: '48px',

                  [theme.breakpoints.down('sm')]: {
                    lineHeight: '31px',
                    fontSize: '31px',
                    fontWeight: '900'
                  }
                })}
              >
                {item.title}
              </Typography>

              {item.subtitle && (
                <Typography
                  variant="h6"
                  color="#fff"
                  fontWeight={700}
                  sx={(theme) => ({
                    [theme.breakpoints.down('sm')]: {
                      lineHeight: '26px',
                      fontSize: '16px',
                      lineHeight: '21px'
                    }
                  })}
                >
                  {item.subtitle}
                </Typography>
              )}

              <Typography
                color="#fff"
                sx={(theme) => ({
                  maxWidth: '500px',
                  fontSize: '18px',
                  mt: 3,

                  [theme.breakpoints.down('sm')]: {
                    fontSize: '14px',
                    mt: 2
                  }
                })}
              >
                {item.description}
              </Typography>
            </Box>
          );
        })}

        <Box
          sx={(theme) => ({
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
            mt: 3,

            [theme.breakpoints.down('sm')]: {
              flexDirection: 'column',
              alignItems: 'stretch',
              gap: 3,
              mt: 1
            }
          })}
        >
          <Box
            sx={(theme) => ({
              display: 'flex',
              gap: '8px',
              alignItems: 'center',

              [theme.breakpoints.down('sm')]: {
                order: '1',
                justifyContent: 'center'
              }
            })}
          >
            {slides.map((item, index) => {
              return (
                <Box
                  key={item.description}
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '12px',
                    height: '12px',
                    padding: '6px',
                    borderRadius: '100%',
                    border: index === activeIndex ? '1px solid red' : 0
                  }}
                >
                  <Box
                    onClick={() => {
                      setActiveIndex(index);
                      swiperRef.current?.slideTo(index);
                    }}
                    sx={{
                      minWidth: '8px',
                      minHeight: '8px',
                      borderRadius: '100%',
                      backgroundColor: index === activeIndex ? 'red' : '#fff',
                      cursor: 'pointer'
                    }}
                  ></Box>
                </Box>
              );
            })}
          </Box>

          <Link href="/catalog">
            <Button
              endIcon={<ArrowOutwardIcon />}
              sx={(theme) => ({
                backgroundColor: '#CC2828',
                color: '#fff',
                borderRadius: '16px',
                padding: '16px 24px',
                fontWeight: '800',

                [theme.breakpoints.down('sm')]: {
                  width: '100%',
                  padding: '8px 24px'
                }
              })}
            >
              Открыть каталог
            </Button>
          </Link>
          {/* <Button
            startIcon={<SubjectOutlinedIcon />}
            sx={{ backgroundColor: '#fff', color: '#000' }}
            variant="contained"
          >
            Подробнее
          </Button>
          <Button
            startIcon={<DescriptionOutlinedIcon />}
            sx={{ backgroundColor: '#fff', color: '#000' }}
            variant="contained"
          >
            Скачать каталог
          </Button> */}
        </Box>
      </Box>

      {isMinWidth1024 && (
        <Box
          sx={{
            display: 'flex',
            gap: '16px',
            position: 'absolute',
            right: '5%',
            bottom: '10%',
            zIndex: 10
          }}
        >
          <IconButton
            onClick={() => {
              // setActiveIndex((prev) => {
              //   if (prev - 1 < 0) {
              //     return slides.length - 1;
              //   }

              //   return prev - 1;
              // });

              swiperRef.current?.slidePrev();
            }}
            variant="outlined"
            size="large"
            sx={{
              backgroundColor: '#dfe3e83d',
              backdropFilter: 'blur(16px)',
              '&:hover': {
                backgroundColor: '#dfe3e83d'
              }
            }}
          >
            <ArrowBackIosNewIcon sx={{ fill: '#fff' }} />
          </IconButton>

          <IconButton
            onClick={() => {
              // setActiveIndex((prev) => {
              //   if (prev + 1 > slides.length - 1) {
              //     return 0;
              //   }

              //   return prev + 1;
              // });

              swiperRef.current?.slideNext();
            }}
            variant="outlined"
            size="large"
            sx={{
              backgroundColor: '#dfe3e83d',
              backdropFilter: 'blur(16px)',
              '&:hover': {
                backgroundColor: '#dfe3e83d'
              }
            }}
          >
            <ArrowForwardIosIcon sx={{ fill: '#fff' }} />
          </IconButton>
        </Box>
      )}
    </Box>
  );
}
