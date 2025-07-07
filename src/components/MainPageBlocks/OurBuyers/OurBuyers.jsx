import React, { useRef, useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Box, styled } from '@mui/system';
import { IconButton, Typography } from '@mui/material';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Swiper as SwiperMUI, SwiperSlide as SwiperSlideMUI } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import Nefaz from '@/app/assets/Buyers/nefaz.png';
import Kamaz from '@/app/assets/Buyers/kamaz.svg';
import Bashkiravtodvor from '@/app/assets/Buyers/bashkiravtodvor.png';
import Bashavtotrans from '@/app/assets/Buyers/bashavtotrans.jpg';
import Metalinvest from '@/app/assets/Buyers/metalinvest.png';
import Surgutneftegaz from '@/app/assets/Buyers/surgutneftegaz.png';
import Rzhd from '@/app/assets/Buyers/rzhd.png';
import RusskayaMehanika from '@/app/assets/Buyers/russkaya-mehanika.png';

const SLIDES = [
  Nefaz.src,
  Kamaz.src,
  Metalinvest.src,
  Rzhd.src,
  Surgutneftegaz.src,
  Bashkiravtodvor.src,
  Bashavtotrans.src,
  RusskayaMehanika.src
];

export const Swiper = styled(SwiperMUI)(({ theme }) => ({
  width: '100%',
  height: '150px',
  flex: '1',

  [theme.breakpoints.down('sm')]: {
    height: '200px'
  }
}));

export const SwiperSlide = styled(SwiperSlideMUI)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  // backgroundColor: '#ccc',
  borderRadius: '8px',
  overflow: 'hidden',

  img: {
    width: '100%',
    height: '100%',
    objectFit: 'contain'
  }
}));

export default function OurBuyers() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [_, setInit] = useState();

  return (
    <Box
      sx={(theme) => ({
        backgroundColor: '#f5f5f5',
        p: 7,

        [theme.breakpoints.down('md')]: {
          px: 4
        },

        [theme.breakpoints.down('sm')]: {
          px: 2,
          py: 4
        }
      })}
    >
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 5 }}>
        <SectionTitle text="Наши покупатели" />

        {/* <Typography variant="body1" sx={{ maxWidth: '670px' }}>
          Мы поставляем масла и смазочные материалы ведущим компаниям, выбирающим качество и надежность нашей продукции
        </Typography> */}
      </Box>

      <Box
        sx={
          {
            // display: 'flex',
            // alignItems: 'center',
            // justifyContent: 'space-between',
            // gap: '16px'
          }
        }
      >
        <Swiper
          freeMode
          slidesPerView={isMobile ? 1 : 4}
          spaceBetween={10}
          autoplay={{
            delay: 1500,
            disableOnInteraction: true
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current
          }}
          loop={true}
          modules={[Navigation, Autoplay]}
          onInit={() => setInit(true)}
          className="mySwiper"
        >
          {SLIDES.map((slide) => {
            return (
              <SwiperSlide key={slide}>
                <img src={slide} alt="Buyer logo" />
              </SwiperSlide>
            );
          })}
        </Swiper>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, justifyContent: 'center', mt: 5 }}>
          <IconButton ref={prevRef}>
            <ArrowBackIcon />
          </IconButton>

          <IconButton ref={nextRef}>
            <ArrowForwardIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
