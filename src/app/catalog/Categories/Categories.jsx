import React from 'react';
import { ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';

export default function Categories(props) {
  const { value, change, list } = props;

  return (
    <>
      <h4>Категории:</h4>

      <ToggleButtonGroup sx={{ mt: 1, width: '100%' }} size="small" value={value} onChange={change} exclusive={true}>
        {list.map((item) => {
          const Icon = item.icon;

          return (
            <ToggleButton
              value={item.id}
              key={item.value}
              color="error"
              sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '8px 12px',

                '&.Mui-selected': {
                  svg: {
                    fill: 'red'
                  }
                }
              }}
            >
              <Icon width={item.iconWidth} height={item.iconHeight} />
              <Typography
                sx={{
                  whiteSpace: 'nowrap',
                  fontSize: '12px',
                  fontWeight: '700',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
                }}
              >
                {item.title}
              </Typography>
            </ToggleButton>
          );
        })}
      </ToggleButtonGroup>
    </>
  );
}
