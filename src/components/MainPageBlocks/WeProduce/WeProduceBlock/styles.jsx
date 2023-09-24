import { styled } from '@mui/system';
import { Box, Typography, IconButton as IconButtonMUI, Backdrop as BackdropMUI } from '@mui/material';

export const WeProduceBlockWrapper = styled(Box)(({ theme }) => ({
  padding: '16px',
  height: '100%',
  borderRadius: '6px',
  backgroundColor: theme.palette.background.paper,
  boxShadow: '0px 2px 7px 1px rgba(34, 60, 80, 0.2)'
}));

export const Image = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '85%',
  height: '180px',
  margin: '0 auto',
  background:
    theme.mode === 'dark'
      ? 'linear-gradient(195deg, rgb(50, 58, 84), rgb(26, 32, 53))'
      : 'linear-gradient(195deg, rgb(237 237 237), rgb(219 224 235))',
  transform: 'translateY(-50px)',
  borderRadius: '6px',

  [theme.breakpoints.down('sm')]: {
    transform: 'translateY(0)'
  }
}));

export const WeProduceBlockText = styled(Box)(({ theme }) => ({
  marginTop: '-32px',

  [theme.breakpoints.down('sm')]: {
    marginTop: '16px'
  }
}));

export const WeProduceBlockTitle = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  fontWeight: 'bold',
  marginBottom: '16px',
  color: theme.palette.text.primary
}));

export const WeProduceBlockSubTitle = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  color: '#999'
}));
