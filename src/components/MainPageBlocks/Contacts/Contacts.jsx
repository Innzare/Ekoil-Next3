import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MapLoader from '@/components/MapLoader/MapLoader';
import Link from 'next/link';

export default function Contacts() {
  return (
    <Box>
      <SectionTitle text="Контакты" />

      <Grid container>
        <Grid item xs="6">
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

          <Link href="/contacts">
            <Button variant="outlined" fontSize="large" endIcon={<ArrowForwardIcon />} sx={{ mt: 6, py: 2, px: 4 }}>
              Перейти в контакты
            </Button>
          </Link>
        </Grid>

        <Grid item xs="6">
          <Box
            sx={{
              height: '400px'
            }}
          >
            <MapLoader />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
