import { styled } from '@mui/system';
import { Box, Typography } from '@mui/material';

export const AboutWithBackground = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '24px',
  // paddingTop: '64px',
  backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2)), url(https://haynes.com/en-gb/sites/default/files/styles/unaltered_webp/public/Engine%20oil%20guide.jpg?itok=bzBvsWaD&timestamp=1644232820)`,
  backgroundSize: 'cover',
  backgroundPosition: '50%',
  borderRadius: '6px',
  height: '590px',
  overflow: 'hidden',
  display: 'flex',
  // justifyContent: 'center',
  // alignItems: 'center',
  padding: '24px',

  [theme.breakpoints.down('md')]: {
    height: '260px',
    display: 'none'
  }
}));

export const AboutWithBackgroundText = styled(Typography)(({ theme }) => ({
  marginTop: '16px',
  textTransform: 'uppercase',
  fontStyle: 'italic',
  fontWeight: 'bold',
  // textAlign: 'center',

  [theme.breakpoints.down('md')]: {
    fontSize: '22px'
  }
}));

export const AboutLayer = styled(Box)(({ theme }) => ({
  position: 'relative',
  background: theme.palette.background.paper,
  marginTop: '-80px',
  marginInline: '40px',
  padding: '24px',
  paddingTop: '48px',
  borderRadius: '6px',
  boxShadow: 'rgba(0, 0, 0, 0.07) 0rem 1.25rem 1.6875rem 0rem',

  [theme.breakpoints.down('md')]: {
    marginTop: '48px',
    marginInline: '0px'
  }
}));

export const IconWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  transform: 'translate(50%, -25%)',
  width: '64px',
  height: '64px',
  top: 0,
  left: 0,
  padding: '24px',
  borderRadius: '6px',
  background: 'linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))',
  boxShadow: 'rgba(0, 0, 0, 0.14) 0rem 0.25rem 1.25rem 0rem, rgba(0, 187, 212, 0.4) 0rem 0.4375rem 0.625rem -0.3125rem',
  color: '#fff'
});

export const AboutLayerTitle = styled(Typography)({
  textTransform: 'uppercase',
  color: '#2b2b2b',
  background: 'linear-gradient(#a0c3e6, #2b2b2b)',
  fontWeight: '400',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  marginBottom: '24px'
});

export const AboutLayerSubTitle = styled(Typography)(({ theme }) => ({
  marginBlock: '16px',
  fontSize: '22px',
  fontWeight: 'bold',
  lineHeight: '1.3',
  flex: '0 1 50%',
  color: theme.palette.text.primary
}));
