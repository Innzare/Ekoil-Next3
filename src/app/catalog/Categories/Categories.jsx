import React from 'react';
import { ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';

export default function Categories(props) {
  const { value, change, list } = props;

  return (
    <>
      <h4>Категории:</h4>

      <ToggleButtonGroup
        sx={(theme) => ({
          mt: 1,
          width: '100%',
          flexWrap: 'wrap',

          [theme.breakpoints.down('md')]: {
            gap: 1
          }
        })}
        size="small"
        value={value}
        onChange={change}
        exclusive={true}
      >
        {list.map((item) => {
          const Icon = item.icon;

          return (
            <ToggleButton
              value={item.id}
              key={item.value}
              color="error"
              sx={(theme) => ({
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '8px 12px',

                [theme.breakpoints.down('md')]: {
                  flex: '1 0 calc(50% - 8px)',
                  border: '1px solid #ccc !important',
                  borderRadius: '6px !important',
                  gap: 1
                },

                '&.Mui-selected': {
                  svg: {
                    fill: 'red'
                  },
                  path: {
                    fill: 'red'
                  }
                }
              })}
            >
              <Icon width={item.iconWidth} height={item.iconHeight} />
              <Typography
                sx={(theme) => ({
                  whiteSpace: 'nowrap',
                  fontSize: '12px',
                  fontWeight: '700',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',

                  [theme.breakpoints.down('sm')]: {
                    whiteSpace: 'wrap',
                    fontSize: '10px'
                  }
                })}
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
