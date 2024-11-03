import React from 'react';
import { Box } from '@mui/material';
import ozon from '@/app/assets/ozon.png';
import wildberries from '@/app/assets/wildberries.jpg';

const ITEMS = [
  {
    title: 'Ozon',
    logo: ozon.src
  },
  {
    title: 'Wildberries',
    logo: wildberries.src
  }
];

export default function Marketplace() {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 2,
        mt: 4
      }}
    >
      {ITEMS.map((item) => {
        return (
          <Box
            sx={{
              width: '200px',
              height: '100px',
              borderRadius: '8px',
              overflow: 'hidden',
              cursor: 'pointer',

              img: {
                width: '100%',
                height: '100%'
              }
            }}
          >
            <img src={item.logo} alt={item.title} />
          </Box>
        );
      })}
    </Box>
  );
}
