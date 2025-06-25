import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MapLoader from '@/components/MapLoader/MapLoader';
import Link from 'next/link';

const contacts = [
  {
    title: 'Адрес',
    text: 'г. Уфа, 450071, ул. Менделеева, д. 197/2',
    icon: LocationOnOutlinedIcon
  },
  {
    title: 'Телефон',
    text: '(347) 248-50-53',
    icon: LocalPhoneOutlinedIcon
  },
  {
    title: 'Почта',
    text: 'oil@td-ekoil.ru',
    icon: MailOutlineIcon
  },
  {
    title: 'Время работы',
    text: '9:00 - 18:00',
    icon: AccessTimeOutlinedIcon
  }
];

export default function Contacts() {
  return (
    <Box
      sx={(theme) => ({
        px: 10,

        [theme.breakpoints.down('md')]: {
          px: 4
        },

        [theme.breakpoints.down('sm')]: {
          px: 2
        }
      })}
    >
      <Box
        sx={{
          mb: 4
        }}
      >
        <SectionTitle text="Контакты" />
      </Box>

      <Grid container spacing={{ xs: 3, sm: 6 }}>
        <Grid item xs={12} md={6}>
          <Grid container spacing={{ xs: 2, sm: 6 }}>
            {contacts.map((contact) => {
              const Icon = contact.icon;

              return (
                <Grid
                  key={contact.title}
                  item
                  xs={6}
                  sm={6}
                  sx={(theme) => ({
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,

                    [theme.breakpoints.down('sm')]: {
                      gap: 1
                    }
                  })}
                >
                  <Typography
                    variant="h6"
                    fontWeight="700"
                    sx={(theme) => ({
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 1,
                      backgroundColor: '#E8EEF4',
                      p: 2,
                      borderRadius: '50px',
                      textAlign: 'center',

                      [theme.breakpoints.down('sm')]: {
                        fontSize: '16px'
                      }
                    })}
                  >
                    <Icon color="primary" />

                    {contact.title}
                  </Typography>

                  <Typography
                    variant="body"
                    sx={(theme) => ({
                      color: '#666',
                      textAlign: 'center',
                      px: 6,
                      fontSize: '16px',
                      fontWeight: '700',

                      [theme.breakpoints.down('sm')]: {
                        px: 0,
                        fontSize: '14px'
                      }
                    })}
                  >
                    {contact.text}
                  </Typography>
                </Grid>
              );
            })}
          </Grid>

          <Link href="/location">
            <Button
              fontSize="large"
              endIcon={<ArrowOutwardIcon />}
              sx={{
                textTransform: 'initial',
                backgroundColor: '#1E284B',
                color: '#fff',
                fontWeight: '700',
                borderRadius: '8px',
                mt: 6,
                px: 3,
                py: 2,
                fontSize: '16px'
              }}
            >
              Где купить
            </Button>
          </Link>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            sx={(theme) => ({
              width: '100%',
              height: '400px',

              [theme.breakpoints.down('sm')]: {
                height: '250px'
              }
            })}
          >
            <MapLoader />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
