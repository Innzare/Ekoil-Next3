import { styled } from '@mui/system';
import { Typography } from '@mui/material';

export const SectionTitleRoot = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  position: 'relative',
  zIndex: 1,
  marginBottom: '32px',
  fontWeight: '900',
  fontSize: '32px',

  [theme.breakpoints.down('sm')]: {
    marginBottom: '16px'
  }
}));
