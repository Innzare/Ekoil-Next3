import React from 'react';
import { Box, Button, IconButton, Tooltip, Typography } from '@mui/material';
import FullLogoIcon from '@/components/SvgIcons/FullLogoIcon';
import MapIcon from '@mui/icons-material/Map';
import PlaceIcon from '@mui/icons-material/Place';
import PublicIcon from '@mui/icons-material/Public';

export default function RepresentativeItem(props) {
  const { showOnMapClick } = props;
  const { name, type, address_line, latitude, longitude, site, email } = props.data;

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: '8px'
      }}
    >
      <Box sx={{ display: 'flex', width: '100%' }}>
        {/* <Box>
          <FullLogoIcon />
        </Box> */}

        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h6"
            fontWeight={800}
            color="initial"
            sx={{ mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}
          >
            {type.id === 1 ? <PlaceIcon sx={{ fill: '#CC2828' }} /> : <PublicIcon sx={{ fill: '#CC2828' }} />}

            {name}
          </Typography>

          <Typography variant="body1" color="initial" sx={{ mb: 2 }}>
            {address_line}
          </Typography>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 1,
              flex: 1
            }}
          >
            <Typography variant="body1" color="initial" sx={{ color: '#637381' }}>
              {type.name}
            </Typography>

            <Button size="small" color="primary" variant="text" onClick={() => showOnMapClick([latitude, longitude])}>
              <MapIcon sx={{ fontSize: '18px' }} />

              <Typography variant="body2" color="primary" sx={{ textTransform: 'initial', ml: 1 }}>
                Показать на карте
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
