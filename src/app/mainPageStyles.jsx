import { styled } from '@mui/system';
import { Box, Typography } from '@mui/material';

export const SectionWrapper = styled(Box)(({ theme }) => ({
  padding: '16px',
  borderRadius: '6px',
  backgroundColor: theme.palette.background.paper,
  boxShadow: 'rgba(0, 0, 0, 0.07) 0rem 1.25rem 1.6875rem 0rem'
}));
