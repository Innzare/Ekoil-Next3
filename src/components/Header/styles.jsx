import { styled } from '@mui/system';
import { Box } from '@mui/material';

export const Header = styled('header', {
  shouldForwardProp: (prop) => prop !== 'isSticky'
})(({ theme, isSticky }) => ({
  position: 'sticky',
  top: '16px',
  zIndex: 10,
  display: 'flex',
  justifyContent: 'space-between',
  transition: 'all .25s',
  // backdropFilter: isSticky ? 'blur(1.875rem)' : 'initial',
  alignItems: 'center',
  flex: '0 0 auto',
  // background: isSticky ? theme.palette.background.paperAlpha : 'initial',
  background: isSticky ? '#fff' : 'initial',
  boxShadow: isSticky ? theme.shadows[2] : 'initial',
  padding: '24px',
  borderRadius: '6px',

  // [theme.breakpoints.down('sm')]: {
  //   padding: '16px 0px'
  // },

  [theme.breakpoints.down('sm')]: {
    padding: '16px 0px',
    top: '8px'
  }
}));

export const HeaderNav = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '16px'
});
