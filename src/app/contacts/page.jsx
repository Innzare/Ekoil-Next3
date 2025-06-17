'use client';

import React from 'react';
import { Box, Card, Grid, Typography } from '@mui/material';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import MapLoader from '@/components/MapLoader/MapLoader';
import FeedbackBlock from '@/components/FeedbackBlock/FeedbackBlock';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import HeaderSection from '@/components/HeaderSection';

export default function Contacts() {
  return (
    <main>
      <HeaderSection title="Контакты" />

      <Box sx={{ display: 'flex', justifyContent: 'center', position: 'relative', zIndex: 1, px: 8, mt: 6, mb: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs="6" sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Typography variant="h6" fontWeight="700" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <LocationOnOutlinedIcon color="primary" />
              Адрес
            </Typography>
            <Typography variant="body" sx={{ color: '#666' }}>
              г. Уфа, 450071, ул. Менделеева, д. 197/2
            </Typography>
          </Grid>

          <Grid item xs="6" sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Typography variant="h6" fontWeight="700" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <AccessTimeOutlinedIcon color="primary" />
              Время работы
            </Typography>

            <Typography variant="body" sx={{ color: '#666' }}>
              9:00 - 18:00
            </Typography>
          </Grid>

          <Grid item xs="6" sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Typography variant="h6" fontWeight="700" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <LocalPhoneOutlinedIcon color="primary" />
              Номер телефона
            </Typography>

            <Typography variant="body" sx={{ color: '#666' }}>
              (347) 248-50-53
            </Typography>
          </Grid>

          <Grid item xs="6" sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Typography variant="h6" fontWeight="700" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <MailOutlineIcon color="primary" />
              Почта
            </Typography>

            <Typography variant="body" sx={{ color: '#666' }}>
              oil@td-ekoil.ru
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box>
        <Box
          sx={{
            position: 'relative',
            height: '600px',
            mb: 4
          }}
        >
          <MapLoader />

          <Box
            sx={{
              position: 'absolute',
              width: '100%',
              height: '100px',
              bottom: 0,
              background:
                'linear-gradient(to top,#fff 0,rgba(255,255,255,.8) 70%,rgba(255,255,255,.4) 85%,rgba(255,255,255,0) 100%)'
            }}
          >
            {/* <Box sx={{ p: 4 }}>
              </Box> */}
          </Box>
        </Box>
      </Box>
      <FeedbackBlock />
    </main>
  );
}
