import React from 'react';
import { Box, Button, IconButton, Tooltip, Typography } from '@mui/material';
import FullLogoIcon from '@/components/SvgIcons/FullLogoIcon';
import MapIcon from '@mui/icons-material/Map';

export default function RepresentativeItem(props) {
  const { showOnMapClick } = props;
  const { name, type, address, coords, site, email } = props.data;

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        borderRadius: '8px',
        p: 3
      }}
    >
      <Box sx={{ display: 'flex', gap: 6 }}>
        <Box>
          <FullLogoIcon />
        </Box>

        <Box sx={{ maxWidth: '400px' }}>
          <Typography variant="h6" fontWeight="bold" color="initial" sx={{ mb: 2 }}>
            {name}
          </Typography>

          <Typography variant="body1" color="initial" sx={{ mb: 1 }}>
            {address}
          </Typography>

          <Typography variant="body2" color="initial">
            {type}
          </Typography>
        </Box>

        <Box></Box>
      </Box>

      <Button size="large" color="primary" variant="outlined" onClick={() => showOnMapClick(coords)}>
        <MapIcon />

        <Typography variant="body1" color="primary" sx={{ textTransform: 'initial', ml: 2 }}>
          Показать на карте
        </Typography>
      </Button>
    </Box>
  );
}
