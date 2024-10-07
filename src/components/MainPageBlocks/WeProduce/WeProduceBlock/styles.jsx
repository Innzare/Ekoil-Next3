import { styled } from '@mui/system';
import { Box, Typography, IconButton as IconButtonMUI, Backdrop as BackdropMUI } from '@mui/material';

export const WeProduceBlockWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'image'
})(({ theme, image }) => ({
  position: 'relative',
  padding: '16px',
  height: '300px',
  overflow: 'hidden',
  borderRadius: '6px',
  backgroundColor: theme.palette.background.paper,
  boxShadow: '0px 2px 7px 1px rgba(34, 60, 80, 0.2)',
  cursor: 'pointer',
  backgroundImage: `url(${image.src})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',

  '&:hover': {
    '&:before': {
      backgroundColor: 'rgba(0,0,0,0)'
    }
  },

  '&:before': {
    content: '""',
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.55)',
    transition: '.25s',
    zIndex: 1
  }
}));

// export const Image = styled(Box)(({ theme }) => ({
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   width: '100%',
//   padding: '16px',
//   height: '180px',
//   margin: '0 auto',
//   transition: 'background 0.3s',
//   // background: '#8e9eab',
//   // background: '-webkit-linear-gradient(to right, #eef2f3, #8e9eab)',
//   // background: 'linear-gradient(to right, #eef2f3, #8e9eab)',

//   background:
//     theme.mode === 'dark'
//       ? 'linear-gradient(195deg, rgb(50, 58, 84), rgb(26, 32, 53))'
//       : 'linear-gradient(195deg, rgb(237 237 237), rgb(219 224 235))',
//   // transform: 'translateY(-50px)',
//   borderRadius: '6px',

//   '&:hover': {
//     // background: theme.mode === 'dark' ? 'linear-gradient(195deg, rgb(50, 58, 84), rgb(26, 32, 53))' : 'red'
//   },

//   [theme.breakpoints.down('sm')]: {
//     transform: 'translateY(0)'
//   }
// }));

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
  zIndex: 10
}));

export const WeProduceBlockSubTitle = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  color: '#999'
}));
