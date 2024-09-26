import React from 'react';
import { Box, Card, Typography } from '@mui/material';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import PublicIcon from '@mui/icons-material/Public';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const ITEMS = [
  {
    title: 'В интернет магазине',
    icon: ShoppingCartIcon
  },
  {
    title: 'У оффициального дистрибьютора',
    icon: PublicIcon
  }
];

export default function Location() {
  return (
    <main>
      <Box>
        <Card sx={{ p: 3 }} elevation={3}>
          <SectionTitle text="Где нас найти" />

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 8,
              mb: 4
            }}
          >
            {ITEMS.map(({ icon: Icon, title }) => {
              return (
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 4,
                    maxWidth: '270px',
                    borderRadius: '8px',
                    // border: '1px solid #666',
                    // backgroundColor: '#ccc',
                    boxShadow: '0px 2px 7px 1px rgba(34, 60, 80, 0.2)',
                    background: 'linear-gradient(195deg, rgb(237 237 237), rgb(219 224 235))',
                    p: 4,
                    cursor: 'pointer'
                  }}
                >
                  <Icon color="primary" fontSize="large" />

                  <Typography variant="h6" color="primary" align="center">
                    {title}
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </Card>
      </Box>
    </main>
  );
}
