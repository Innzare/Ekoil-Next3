import { styled } from '@mui/system';
import { Box, Typography, IconButton as IconButtonMUI, Backdrop as BackdropMUI } from '@mui/material';
import FeedbackBackground from '@/app/assets/FeedbackBackground.jpg';

export const WeProduceBlockWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'image'
})(({ theme, image }) => ({
  position: 'relative',
  padding: '24px',
  height: '300px',
  overflow: 'hidden',
  borderRadius: '32px',
  // backgroundColor: theme.palette.background.paper,
  boxShadow: '0px 2px 7px 1px rgba(34, 60, 80, 0.2)',
  cursor: 'pointer',
  background: `linear-gradient(45deg, #1e284b75, rgba(0, 0, 0, 0.45)), url(${FeedbackBackground.src})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',

  [theme.breakpoints.down('sm')]: {
    height: '180px',
    borderRadius: '16px',
    padding: '16px'
  }

  // '&:hover': {
  //   '&:before': {
  //     backgroundColor: 'rgba(0,0,0,0)'
  //   }
  // },

  // '&:before': {
  //   content: '""',
  //   position: 'absolute',
  //   left: 0,
  //   top: 0,
  //   width: '100%',
  //   height: '100%',
  //   backgroundColor: 'rgba(0,0,0,0.55)',
  //   transition: '.25s',
  //   zIndex: 1
  // }
}));

export const WeProduceBlockText = styled(Box)(({ theme }) => ({
  marginTop: '16px',

  [theme.breakpoints.down('sm')]: {
    marginTop: '16px'
  }
}));

export const WeProduceBlockTitle = styled(Typography)(({ theme }) => ({
  // textAlign: 'center',
  fontWeight: 'bold',
  marginBottom: '8px',
  color: '#fff',
  position: 'relative',
  zIndex: 10,

  [theme.breakpoints.down('sm')]: {
    fontSize: '14px'
  }
}));

export const WeProduceBlockSubTitle = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  color: '#999'
}));
