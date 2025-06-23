import { styled } from '@mui/system';
import { Box } from '@mui/material';

export const Header = styled('header', {
  shouldForwardProp: (prop) => prop !== 'isSticky'
})(({ theme }) => ({
  position: 'fixed',
  top: '16px',
  left: '50%',
  transform: 'translateX(-50%)',
  width: '96%',
  zIndex: 100,
  display: 'flex',
  justifyContent: 'space-between',
  transition: 'all .25s',
  // backdropFilter: isSticky ? 'blur(1.875rem)' : 'initial',
  alignItems: 'center',
  flex: '0 0 auto',
  // background: isSticky ? theme.palette.background.paperAlpha : 'initial',
  // background: isSticky ? '#fff' : 'initial',
  background: '#fff',
  boxShadow: theme.shadows[3],
  padding: '18px',
  paddingLeft: '14px',
  borderRadius: '10px',

  // [theme.breakpoints.down('sm')]: {
  //   padding: '16px 0px'
  // },

  [theme.breakpoints.down('sm')]: {
    padding: '16px',
    top: '8px'
  }
}));

export const HeaderNav = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '16px'
});
