import React from 'react';
import { Box, Typography } from '@mui/material';
import NewspaperIcon from '@mui/icons-material/Newspaper';

export default function NewsItem(props) {
  const { data } = props;

  return (
    <Box
      sx={{
        cursor: 'pointer',
        '&:hover': {
          '.news-icon': {
            fontSize: '48px'
          }
        }
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '200px',
          borderRadius: '8px',
          mb: 2,
          backgroundColor: '#e2e2e2'
        }}
      >
        <NewspaperIcon className="news-icon" fontSize="large" sx={{ color: '#666', transition: 'font-size .25s' }} />
      </Box>

      <Typography
        variant="h6"
        fontWeight="700"
        color="initial"
        sx={{ mb: 2, textTransform: 'uppercase', lineHeight: '1.5' }}
      >
        {data.title}
      </Typography>
      <Typography variant="body" sx={{ color: '#666' }}>
        {data.data}
      </Typography>
    </Box>
  );
}
