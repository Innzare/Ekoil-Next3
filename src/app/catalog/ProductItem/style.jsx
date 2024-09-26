import { styled } from '@mui/system';
import { Box, Typography, IconButton } from '@mui/material';

export const Product = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderRadius: '6px',
  padding: '16px',
  width: '100%',
  backgroundColor: 'rgb(238, 243, 250)',
  cursor: 'pointer',

  '&:hover': {
    '.preview-button': {
      opacity: '1'
    }
  },

  [theme.breakpoints.down('sm')]: {}
}));

export const ProductImg = styled('img')({
  width: '50%',
  // height: '170px',
  position: 'relative',
  // top: '-60px',
  // marginBottom: '-32px',
  marginBottom: '32px'
  // filter: 'drop-shadow(0px 10px 8px rgba(0,0,0,0.5))'
});

export const PreviewButton = styled(IconButton)({
  opacity: '0',
  transition: '.25s',
  position: 'absolute',
  top: '16px',
  right: '16px',
  width: '40px',
  height: '40px'
});

export const ProductTitle = styled(Typography)({
  fontSize: '21px',
  fontWeight: 'bold',
  marginBottom: '8px'
});

export const ProductSubTitle = styled(Typography)({
  fontSize: '14px',
  color: '#545454',
  marginBottom: '32px'
});

export const HeaderNav = styled(Box)({});
