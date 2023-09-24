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
  const lottieRef = useRef(null);

  useEffect(() => {
    lottieRef?.current?.setSpeed(0.75);
  }, []);

  return (
    <WeProduceBlockWrapper
      onMouseEnter={() => {
        lottieRef.current.stop();
        lottieRef.current.play();
      }}
    >
      <Image>
        <Lottie lottieRef={lottieRef} style={{ height: '150px' }} animationData={item.icon} loop={false} />
      </Image>

      <WeProduceBlockText>
        <WeProduceBlockTitle variant="h6">{item.title}</WeProduceBlockTitle>
        <WeProduceBlockSubTitle>{item.description}</WeProduceBlockSubTitle>
      </WeProduceBlockText>
    </WeProduceBlockWrapper>
  );
}
