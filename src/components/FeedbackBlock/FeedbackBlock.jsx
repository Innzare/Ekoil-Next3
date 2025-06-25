import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useStore } from '@/store';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import LogoBackground from '@/components/SvgIcons/LogoBackground';
import FeedbackBackground from '@/app/assets/FeedbackBackground.jpg';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import HeaderLogo from '@/components/SvgIcons/HeaderLogo';

export default function FeedbackBlock() {
  const { openContactModal } = useStore();

  return (
    <Box
      sx={(theme) => ({
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 2,
        px: 10,
        py: 13,
        background: `linear-gradient(45deg, #1e284b75, rgba(0, 0, 0, 0.45)), url(${FeedbackBackground.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        overflow: 'hidden',

        [theme.breakpoints.down('md')]: {
          flexDirection: 'column',
          px: 5,
          py: 7
        },

        [theme.breakpoints.down('sm')]: {
          flexDirection: 'column',
          px: 2,
          py: 4
        }
      })}
    >
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Typography
          variant="h4"
          fontWeight="700"
          color="#fff"
          sx={(theme) => ({
            mb: 1,
            [theme.breakpoints.down('sm')]: {
              fontSize: '21px'
            }
          })}
        >
          У вас есть что спросить?
        </Typography>

        <Typography
          variant="body1"
          fontWeight="600"
          color="#fff"
          sx={(theme) => ({
            maxWidth: '660px',
            fontSize: '18px',

            [theme.breakpoints.down('sm')]: {
              fontSize: '21px',
              fontSize: '14px'
            }
          })}
        >
          Оставьте свой номер телефона или напишите сообщение и наши специалисты ответят Вам в ближайшее время!
        </Typography>

        <Box
          sx={(theme) => ({
            display: 'flex',
            gap: 2,
            mt: 4,
            [theme.breakpoints.down('sm')]: {
              flexDirection: 'column'
            }
          })}
        >
          <Button
            variant="contained"
            size="large"
            startIcon={<CallIcon />}
            sx={{
              backgroundColor: '#CC2828',
              fontSize: '16px',
              fontWeight: '700',
              textTransform: 'initial',
              borderRadius: '12px'
            }}
            onClick={openContactModal}
          >
            Заказать обратный звонок
          </Button>

          <Button
            variant="contained"
            size="large"
            startIcon={<EmailIcon sx={{ color: '#000' }} />}
            sx={{
              backgroundColor: '#fff',
              fontSize: '16px',
              fontWeight: '700',
              textTransform: 'initial',
              borderRadius: '12px'
            }}
            onClick={openContactModal}
          >
            <Typography variant="span" fontWeight="700" color="#000">
              Написать на почту
            </Typography>
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          justifyContent: 'space-between'
        }}
      >
        <Box
          sx={(theme) => ({
            display: 'flex',
            flexDirection: 'column',
            gap: 2,

            [theme.breakpoints.down('sm')]: {
              gap: 1,
              mt: 2
            }
          })}
        >
          <Box
            sx={(theme) => ({
              [theme.breakpoints.down('sm')]: {
                display: 'none'
              }
            })}
          >
            <HeaderLogo light width={340} height={100} />
          </Box>

          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <MailOutlineIcon sx={{ color: 'red' }} />

            <Typography variant="span" fontWeight="700" sx={{ fontSize: '21px', color: '#fff' }}>
              oil@td-ekoil.ru
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <LocalPhoneOutlinedIcon sx={{ color: 'red' }} />

            <Typography variant="span" fontWeight="700" sx={{ fontSize: '21px', color: '#fff' }}>
              (347) 248-50-53
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
