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
    </WeProduceBlockWrapper>
  );
}
