import { Box, Divider, ToggleButton, ToggleButtonGroup } from '@mui/material';

import GridViewIcon from '@mui/icons-material/GridView';
import ReorderIcon from '@mui/icons-material/Reorder';
import CalendarViewWeekIcon from '@mui/icons-material/CalendarViewWeek';
import ViewWeekOutlinedIcon from '@mui/icons-material/ViewWeekOutlined';
import React from 'react';

export default function ViewModeButtons(props) {
  const { viewMode, gridViewMode, onGridViewModeChange, onViewModeChange } = props;

  return (
    <Box
      sx={{
        display: 'flex',
        gap: '24px'
      }}
    >
      {viewMode === 'grid' && (
        <ToggleButtonGroup
          color="primary"
          size="small"
          value={gridViewMode}
          onChange={onGridViewModeChange}
          exclusive={true}
          sx={{
            height: '34px'
          }}
        >
          <ToggleButton color="error" value="grid-three-line" sx={{ paddingInline: '14px' }}>
            <ViewWeekOutlinedIcon sx={{ fontSize: '18px' }} />
          </ToggleButton>
          <ToggleButton color="error" value="grid-four-line" sx={{ paddingInline: '14px' }}>
            <CalendarViewWeekIcon sx={{ fontSize: '18px' }} />
          </ToggleButton>
        </ToggleButtonGroup>
      )}

      {viewMode === 'grid' && <Divider orientation="vertical" flexItem />}

      <ToggleButtonGroup
        color="primary"
        size="small"
        value={viewMode}
        onChange={onViewModeChange}
        exclusive={true}
        sx={{
          height: '34px'
        }}
      >
        <ToggleButton color="error" value="grid" sx={{ paddingInline: '14px' }}>
          <GridViewIcon sx={{ fontSize: '18px' }} />
        </ToggleButton>
        <ToggleButton color="error" value="line" sx={{ paddingInline: '14px' }}>
          <ReorderIcon sx={{ fontSize: '18px' }} />
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
}
