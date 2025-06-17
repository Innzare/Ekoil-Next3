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
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        gap: 6,
        px: 10,
        py: 13,
        // justifyContent: 'space-between',
        // alignItems: 'center',
        // borderRadius: '50px',
        background: `url(${FeedbackBackground.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        // background: 'linear-gradient(to right, #004e92, #000428)',
        // background: '#000428',
        // background: '-webkit-linear-gradient(to right, #004e92, #000428)',
        overflow: 'hidden'
      }}
    >
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column'
          // justifyContent: 'space-between',
          // alignItems: 'center'
        }}
      >
        <Typography variant="h4" fontWeight="700" color="#fff" sx={{ mb: 1 }}>
          У вас есть что спросить?
        </Typography>

        <Typography variant="body1" fontWeight="600" color="#fff" sx={{ maxWidth: '660px', fontSize: '18px' }}>
          Оставьте свой номер телефона или напишите сообщение и наши специалисты ответят Вам в ближайшее время!
        </Typography>

        <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
          <Button
            variant="contained"
            size="large"
            startIcon={<CallIcon />}
            sx={{ backgroundColor: '#CC2828', fontSize: '16px', fontWeight: '700', textTransform: 'initial' }}
            onClick={openContactModal}
          >
            Заказать обратный звонок
          </Button>

          <Button
            variant="contained"
            size="large"
            startIcon={<EmailIcon sx={{ color: '#000' }} />}
            sx={{ backgroundColor: '#fff', fontSize: '16px', fontWeight: '700', textTransform: 'initial' }}
            onClick={openContactModal}
          >
            <Typography variant="span" fontWeight="700" color="#000">
              Написать на почту
            </Typography>
          </Button>
        </Box>

        {/* <Box>
          <LogoBackground />
        </Box> */}
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          justifyContent: 'space-between'
          // alignItems: 'center'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2
          }}
        >
          <HeaderLogo light width={340} height={100} />

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

      {/* <Box
        sx={{
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <SmsOutlinedIcon sx={{ fontSize: '120px', color: '#fff' }} />
      </Box> */}
    </Box>
  );
}
