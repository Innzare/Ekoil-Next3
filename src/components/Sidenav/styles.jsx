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
})(({ isOpen }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'fixed',
  zIndex: 999,
  top: '50%',
  transform: 'translateY(-50%)',
  left: '16px',
  transition: 'width .25s ease',
  width: isOpen ? '250px' : '70px',
  height: 'calc(100vh - 2rem)',
  padding: '16px',
  borderRadius: '6px',
  background: '#fff',
  boxShadow: 'rgba(0, 0, 0, 0.07) 0rem 1.25rem 1.6875rem 0rem'
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

export const IconButton = styled(IconButtonMUI)({
  position: 'absolute',
  top: '62px',
  right: 0,
  transform: 'translateX(50%)',
  zIndex: 1,
  background: '#cae3fb',
  padding: '2px',

  '&:hover': {
    background: '#d7e9fa'
  }
});
