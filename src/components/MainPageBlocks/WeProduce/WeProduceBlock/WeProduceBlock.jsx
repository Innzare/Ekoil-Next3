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
      {/* <WeProduceBlockText>
        <WeProduceBlockSubTitle>{item.description}</WeProduceBlockSubTitle>
      </WeProduceBlockText> */}
    </WeProduceBlockWrapper>
  );
}
