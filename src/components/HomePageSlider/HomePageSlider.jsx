import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper as SwiperMUI, SwiperSlide as SwiperSlideMUI } from 'swiper/react';
import { Box, styled } from '@mui/system';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import moto from '@/app/assets/moto.jpg';
import transmission from '@/app/assets/transmission.png';
import truck from '@/app/assets/truck.jpg';
import auto from '@/app/assets/auto.jpg';

import SubjectOutlinedIcon from '@mui/icons-material/SubjectOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { grey } from '@mui/material/colors';

export const Swiper = styled(SwiperMUI)(({ theme }) => ({
  width: '100%',
  height: '750px',

  [theme.breakpoints.down('sm')]: {
    height: '300px'
  }
}));

export const SwiperSlide = styled(SwiperSlideMUI)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#ccc',
  // borderRadius: '8px',
  overflow: 'hidden'
}));

export default function HomePageSlider() {
  return (
    <Box
      sx={{
        pb: 3,
        // borderRadius: '8px',
        overflow: 'hidden'
      }}
    >
      <Swiper
        navigation={true}
        loop={true}
        spaceBetween={30}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true
        }}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper"
        sx={{
          overflow: 'visible',
          '&:hover': {
            '.swiper-button-prev, .swiper-button-next': {
              opacity: 1
            }
          },
          '.swiper-pagination': {
            bottom: '-30px'
          },
          '.swiper-button-prev, .swiper-button-next': {
            opacity: 0,
            height: '100%',
            // background: 'rgba(0,0,0,0.5)',
            // backdropFilter: 'blur(5px)',
            transition: '.25s',
            px: 3,
            top: 0,
            margin: 0
          },
          '.swiper-button-prev': { left: 0 },
          '.swiper-button-next': { right: 0 }
        }}
      >
        <SwiperSlide>
          <Box
            sx={{
              width: '100%',
              height: '100%',
              background: `linear-gradient(45deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url(${auto.src})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              pl: 14
            }}
          >
            <Typography variant="h3" color="#fff" fontWeight={700} lineHeight="48px" sx={{ mb: 3 }}>
              Моторные масла <br />
              для легковой техники
            </Typography>

            <Typography color="#fff" sx={{ maxWidth: '500px', fontSize: '18px' }}>
              Ваш двигатель, наша забота <br />
              Ekoil Lubricants разработал полный ассортимент смазочных материалов, которые соответствуют и превосходят
              уровни производительности по API и ACEA
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
              <Button
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
              </Button>
            </Box>
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Box
            sx={{
              width: '100%',
              height: '100%',
              background: `linear-gradient(45deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url(${moto.src})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              pl: 14
            }}
          >
            <Typography variant="h3" color="#fff" fontWeight={700} lineHeight="48px" sx={{ mb: 3 }}>
              Моторные масла <br />
              для малоразмерной техники
            </Typography>

            <Typography color="#fff" sx={{ maxWidth: '500px', fontSize: '18px' }}>
              Высококачественные моторные масла для использования в двухтактных и четырехтактных бензиновых двигателях
              мотоциклов, мопедов, скутеров, снегоходов, квадроциклов, гидроциклов и другой техники.
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
              <Button
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
              </Button>
            </Box>
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Box
            sx={{
              width: '100%',
              height: '100%',
              background: `linear-gradient(45deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url(${truck.src})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              pl: 14
            }}
          >
            <Typography variant="h3" color="#fff" fontWeight={700} lineHeight="48px" sx={{ mb: 3 }}>
              Моторные масла для <br />
              грузовых автомобилей и спецтехники
            </Typography>

            <Typography color="#fff" sx={{ maxWidth: '500px', fontSize: '18px' }}>
              Масла, разработанные специально для современных высоконагруженных двигателей грузовых автомобилей,
              автобусов и тягачей, оснащенных системами EGR, SCR и DPF.
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
              <Button
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
              </Button>
            </Box>
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Box
            sx={{
              width: '100%',
              height: '100%',
              background: `linear-gradient(45deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url(${transmission.src})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              pl: 14
            }}
          >
            <Typography variant="h3" color="#fff" fontWeight={700} lineHeight="48px" sx={{ mb: 3 }}>
              Трансмиссионные масла
            </Typography>

            <Typography color="#fff" sx={{ maxWidth: '500px', fontSize: '18px' }}>
              Высокоэффективные трансмиссионные масла Ekoil Lubricants для автоматических и механических коробок передач
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
              <Button
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
              </Button>
            </Box>
          </Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
