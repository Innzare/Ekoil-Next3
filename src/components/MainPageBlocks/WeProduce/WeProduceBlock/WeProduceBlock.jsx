import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-react';
import { Box, Typography, Button } from '@mui/material';
import {
  WeProduceBlockWrapper,
  Image,
  WeProduceBlockTitle,
  WeProduceBlockSubTitle,
  WeProduceBlockText
} from './styles';

export default function WeProduceBlock({ item }) {
  const { icon: Icon } = item;
  // const lottieRef = useRef(null);

  // useEffect(() => {
  //   lottieRef?.current?.setSpeed(0.75);
  // }, []);

  return (
    <WeProduceBlockWrapper
      image={Icon}
      // onMouseEnter={() => {
      //   lottieRef.current.stop();
      //   lottieRef.current.play();
      // }}
    >
      {/* <Image className="image-wrapper">
        <Icon color="red" />
      </Image> */}

      <WeProduceBlockTitle variant="h6">{item.title}</WeProduceBlockTitle>

      {/* <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: '170px',
          height: '170px',
          zIndex: 1,

          '& img': {
            width: '100%'
          }
        }}
      >
        <img src={item.img.src} alt="" />
      </Box> */}
      {/* <WeProduceBlockText>
        <WeProduceBlockSubTitle>{item.description}</WeProduceBlockSubTitle>
      </WeProduceBlockText> */}
    </WeProduceBlockWrapper>
  );
}
