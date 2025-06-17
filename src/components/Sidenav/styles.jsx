import { styled } from '@mui/system';
import { Box, IconButton as IconButtonMUI, Backdrop as BackdropMUI } from '@mui/material';

export const Backdrop = styled(BackdropMUI)({
  position: 'fixed',
  zIndex: 998,
  top: 0,
  left: 0,
  width: '100%',
  height: '100%'
});

export const SidenavWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isOpen'
})(({ theme, isOpen }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'fixed',
  zIndex: 999,
  top: '50%',
  transform: 'translateY(-50%)',
  // left: '16px',
  transition: '.25s ease',
  // width: isOpen ? '250px' : '70px',
  height: 'calc(100vh - 2rem)',
  padding: '16px',
  borderRadius: '6px',
  background: theme.palette.background.paper,
  boxShadow: 'rgba(0, 0, 0, 0.07) 0rem 1.25rem 1.6875rem 0rem',

  right: isOpen ? '16px' : '-100%',
  width: '250px'
  // [theme.breakpoints.down('md')]: {
  // }
}));

export const SidenavTop = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isOpen'
})(({ theme, isOpen }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%'
}));

export const OnlyTextLogoWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isOpen'
})(({ isOpen }) => ({
  marginTop: '8px',
  opacity: isOpen ? 1 : 0,
  visibility: isOpen ? 'visible' : 'hidden',
  transform: isOpen ? 'scale(1)' : 'scale(0)',
  transition: 'all .25s ease-in-out'
}));

export const IconButton = styled(IconButtonMUI)(({ theme }) => ({
  position: 'absolute',
  top: '62px',
  right: 0,
  transform: 'translateX(50%)',
  zIndex: 1,
  background: theme.palette.background.primary,
  padding: '2px',
  color: theme.palette.icon.default,

  '&:hover': {
    background: theme.palette.background.primary,
    opacity: '0.9'
  }
}));
