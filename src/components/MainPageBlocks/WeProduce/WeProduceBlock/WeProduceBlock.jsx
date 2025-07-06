import React, { useEffect, useRef } from 'react';
import { Box, Typography, Button } from '@mui/material';
import Link from 'next/link';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
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
      <Link href="/catalog">
        <Button
          rounded
          endIcon={<ArrowOutwardIcon />}
          sx={(theme) => ({
            display: 'flex',
            minWidth: '50px',
            maxWidth: '50px',
            minHeight: '50px',
            maxHeight: '50px',
            flexDirection: 'column-reverse',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            bottom: '16px',
            left: '16px',
            backgroundColor: '#CC2828',
            color: '#fff',
            borderRadius: '100%',
            padding: '0',
            fontWeight: '800',

            '& .MuiButton-endIcon': {
              m: 0
            },

            [theme.breakpoints.down('md')]: {
              minWidth: '35px',
              maxWidth: '35px',
              minHeight: '35px',
              maxHeight: '35px'
            }
          })}
        >
          {/* Каталог */}
        </Button>
      </Link>
    </WeProduceBlockWrapper>
  );
}
