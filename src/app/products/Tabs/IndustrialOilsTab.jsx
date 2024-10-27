import React from 'react';
import { Box, List, ListItemButton, ListItemText, ListSubheader } from '@mui/material';

const data = [
  {
    title: 'Гидравлические масла',
    purposeList: [
      {
        title: 'Вид масла',
        types: ['Синтетическое', 'Полусинтетическое', 'Минеральное']
      },
      {
        title: 'Вязкость по SAE',
        types: ['HVLP', 'HLP', 'Standart', 'ВМГЗ']
      }
    ]
  },

  {
    title: 'Турбинные масла',
    purposeList: []
  },

  {
    title: 'Компрессорные масла',
    purposeList: []
  },

  {
    title: 'Редукторные масла',
    purposeList: [
      {
        title: 'Вид масла',
        types: ['Синтетическое', 'Полусинтетическое', 'Минеральное']
      }
    ]
  }
];

export default function MotorOilsTab() {
  return (
    <Box>
      {data.map((item) => {
        return (
          <Box sx={{ mb: 3 }}>
            <h3>{item.title}</h3>

            <Box
              sx={{
                display: 'flex',
                gap: 6
              }}
            >
              {item.purposeList.map((purpose) => {
                return (
                  <List
                    component="nav"
                    dense
                    subheader={
                      <ListSubheader component="div" id="nested-list-subheader">
                        {purpose.title}
                      </ListSubheader>
                    }
                  >
                    {purpose.types.map((type) => {
                      return (
                        <ListItemButton>
                          <ListItemText primary={type} />
                        </ListItemButton>
                      );
                    })}
                  </List>
                );
              })}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}
