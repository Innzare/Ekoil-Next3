import { styled } from '@mui/system';
import { Box, Typography } from '@mui/material';
import Group from '@/app/assets/Group.png';

export const AboutWithBackground = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '56px',
  paddingTop: '48px',
  // paddingTop: '64px',
  // backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2)), url('${Group.src}')`,
  background: 'linear-gradient(168deg, rgba(4,3,3,93%) 40%, rgba(9,45,106,1) 85%, rgba(11,32,149,95%) 100%)',
  backgroundSize: 'cover',
  backgroundPosition: '50%',
  borderRadius: '8px',
  // borderBottomRightRadius: '30%',
  // height: '720px',
  overflow: 'hidden',
  display: 'flex',
  zIndex: '10',
  // justifyContent: 'center',
  // alignItems: 'center',

  [theme.breakpoints.down('md')]: {
    height: '260px',
    display: 'none'
  }
}));

export const AboutWithBackgroundText = styled(Typography)(({ theme }) => ({
  position: 'relative',
  marginTop: '16px',
  textTransform: 'uppercase',
  // fontStyle: 'italic',
  fontWeight: 'bold',
  // textAlign: 'center',
  // fontSize: '36px',

  [theme.breakpoints.down('md')]: {
    // fontSize: '22px'
  }
}));
