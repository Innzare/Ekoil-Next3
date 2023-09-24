import { styled } from '@mui/system';
import { Typography } from '@mui/material';

export const SectionTitleRoot = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  marginBottom: '32px',
  fontWeight: 'bold',
  fontSize: '32px',

  [theme.breakpoints.down('sm')]: {
    marginBottom: '16px'
  }
}));
