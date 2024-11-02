import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useStore } from '@/store';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import LogoBackground from '@/components/SvgIcons/LogoBackground';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export default function FeedbackBlock() {
  const { openContactModal } = useStore();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        gap: 6,
        // justifyContent: 'space-between',
        // alignItems: 'center',
        px: 6,
        py: 6,
        borderRadius: '50px',
        background: '#000428',
        background: '-webkit-linear-gradient(to right, #004e92, #000428)',
        background: 'linear-gradient(to right, #004e92, #000428)',
        overflow: 'hidden'
      }}
    >
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          gap: 4
          // justifyContent: 'space-between',
          // alignItems: 'center'
        }}
      >
        <Typography variant="h5" fontWeight="700" color="#fff">
          У вас есть что спросить? <br /> Наши специалисты ответят!
        </Typography>

        <Box>
          <LogoBackground />
        </Box>
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
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <MailOutlineIcon sx={{ color: '#fff' }} />
            <Typography variant="span" fontWeight="700" sx={{ fontSize: '21px', color: '#fff' }}>
              oil@td-ekoil.ru
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <LocalPhoneOutlinedIcon sx={{ color: '#fff' }} />
            <Typography variant="span" fontWeight="700" sx={{ fontSize: '21px', color: '#fff' }}>
              (347) 248-50-53
            </Typography>
          </Box>
        </Box>

        <Button
          variant="contained"
          disableElevation
          size="large"
          sx={{ backgroundColor: '#0068ff', py: 3, px: 8, fontSize: '18px', fontWeight: '700' }}
          onClick={openContactModal}
        >
          Связаться
        </Button>
      </Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <SmsOutlinedIcon sx={{ fontSize: '120px', color: '#fff' }} />
      </Box>
    </Box>
  );
}
