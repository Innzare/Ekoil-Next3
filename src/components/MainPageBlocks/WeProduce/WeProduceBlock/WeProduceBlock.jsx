import React, { useEffect, useRef } from 'react';
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

  return (
    <WeProduceBlockWrapper image={Icon}>
      <WeProduceBlockTitle variant="h6">{item.title}</WeProduceBlockTitle>

      <Box
        sx={{
          position: 'absolute',
          bottom: '-20%',
          right: '-10%',
          width: '75%'
        }}
      >
        <img src={Icon.src} alt="ekoil-product" width="100%" />
      </Box>
    </WeProduceBlockWrapper>
  );
}
