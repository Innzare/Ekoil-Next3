import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper as SwiperMUI, SwiperSlide as SwiperSlideMUI } from 'swiper/react';
import { styled } from '@mui/system';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const Swiper = styled(SwiperMUI)(({ theme }) => ({
  width: '100%',
  height: '500px',

  [theme.breakpoints.down('sm')]: {
    height: '300px'
  }
}));

export const SwiperSlide = styled(SwiperSlideMUI)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#ccc',
  borderRadius: '8px'
}));

export default function HomePageSlider() {
  return (
    <>
      <Swiper
        navigation={true}
        loop={true}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true
        }}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
