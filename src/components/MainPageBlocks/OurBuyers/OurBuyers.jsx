import React, { useRef, useState } from 'react';
import { Box, styled } from '@mui/system';
import { IconButton } from '@mui/material';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Swiper as SwiperMUI, SwiperSlide as SwiperSlideMUI } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
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
  width: '500px',
  height: '150px',
  flex: '1',

  [theme.breakpoints.down('sm')]: {
    height: '300px'
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
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [_, setInit] = useState();

  return (
    <Box>
      <SectionTitle text="Наши покупатели" />

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          backgroundColor: '#f5f5f5',
          borderRadius: '50px',
          p: '40px 8px'
        }}
      >
        <IconButton ref={prevRef}>
          <ArrowBackIcon />
        </IconButton>

        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current
          }}
          loop={true}
          modules={[Navigation]}
          onInit={() => setInit(true)}
          className="mySwiper"
        >
          {SLIDES.map((slide) => {
            return (
              <SwiperSlide>
                <img src={slide} alt="Buyer logo" />
              </SwiperSlide>
            );
          })}
        </Swiper>

        <IconButton ref={nextRef}>
          <ArrowForwardIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
