'use client';

import Image from 'next/image';
import { Box, Grid, Container, Typography, Button } from '@mui/material';
import Link from 'next/link';
import OnlyTextLogo from '@/components/SvgIcons/OnlyTextLogo';
import OilBarrelIcon from '@mui/icons-material/OilBarrel';
import Lottie from 'lottie-react';
import Engine from '@/app/assets/engine.json';
import styles from './styles/page.module.css';

export default function Home() {
  return (
    <main>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          // justifyContent: 'center',
          // alignItems: 'center',
          p: 3,
          pt: 8,
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2)), url(https://haynes.com/en-gb/sites/default/files/styles/unaltered_webp/public/Engine%20oil%20guide.jpg?itok=bzBvsWaD&timestamp=1644232820)`,
          // background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8))',
          backgroundSize: 'cover',
          backgroundPosition: '50%',
          borderRadius: '6px',
          height: '350px',
          overflow: 'hidden'
        }}
      >
        <OnlyTextLogo color="red" width="200" height="55" />
        <Typography
          color="#ccc"
          variant="h4"
          sx={{
            mt: 2,
            textTransform: 'uppercase',
            fontStyle: 'italic',
            fontWeight: 'bold'
          }}
        >
          Высококачественные смазочные материалы
        </Typography>
      </Box>

      <Box
        sx={{
          position: 'relative',
          background: '#fff',
          mt: -10,
          mx: 5,
          p: 3,
          borderRadius: '6px',
          boxShadow: 'rgba(0, 0, 0, 0.07) 0rem 1.25rem 1.6875rem 0rem'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            transform: 'translate(50%, -25%)',
            width: '64px',
            height: '64px',
            top: 0,
            left: 0,
            p: 3,
            borderRadius: '6px',
            background: 'linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))',
            boxShadow:
              'rgba(0, 0, 0, 0.14) 0rem 0.25rem 1.25rem 0rem, rgba(0, 187, 212, 0.4) 0rem 0.4375rem 0.625rem -0.3125rem',
            color: '#fff'
          }}
        >
          <OilBarrelIcon color="#fff" fontSize="large" />
        </Box>

        <Grid container spacing={2} alignItems="center">
          <Grid item xs={8}>
            <Typography
              variant="h3"
              sx={{
                textTransform: 'uppercase',
                color: '#2b2b2b',
                background: 'linear-gradient(#a0c3e6, #2b2b2b)',
                fontWeight: '400',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                // ml: 13
                mb: 3
              }}
            >
              Масла Ekoil Более 20 лет
            </Typography>
            <Typography
              sx={{
                fontSize: '24px',
                fontWeight: 'bold',
                lineHeight: '1.3',
                flex: '0 1 50%',
                color: '#4c4c4c'
              }}
            >
              Обеспечивают эффективное функционирование Вашего автопарка техники, в любых климатических и
              эксплуатационных условиях.
            </Typography>

            <Link href="/about">
              <Button variant="contained" fontSize="large" sx={{ mt: 4 }}>
                Узнайте больше
              </Button>
            </Link>

            {/* <Typography
              sx={{
                mt: 2
              }}
            >
              Наша компания специализируется на производстве и оптовой реализации высококачественных смазочных
              материалов под торговой маркой EKOIL. Многолетний опыт и сотрудничество с ведущими предприятиями отрасли
              позволили зарекомендовать себя как надёжного партнёра и завоевать доверие многих клиентов.
            </Typography> */}
          </Grid>

          <Grid item xs={4}>
            <Lottie style={{ height: '300px' }} animationData={Engine} />
          </Grid>
        </Grid>
      </Box>
    </main>
  );
}
