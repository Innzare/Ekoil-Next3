import React from 'react';
import { Box, List, ListItemButton, ListItemText, ListSubheader } from '@mui/material';

const data = [
  {
    title: 'Для легковых автомобилей',
    purposeList: [
      {
        title: 'Вид масла',
        types: ['Синтетическое', 'Полусинтетическое', 'На основе синтетических технологий', 'Минеральное']
      },
      {
        title: 'Вязкость по SAE',
        types: ['0W-20', '5W-30', '5W-40', '10W-40', '15W-40']
      },
      {
        title: 'Вид двигателя',
        types: ['Бензин', 'Дизель']
      }
    ]
  },

  {
    title: 'Для коммерческого транспорта',
    purposeList: [
      {
        title: 'Вид масла',
        types: ['Синтетическое', 'Полусинтетическое', 'На основе синтетических технологий', 'Минеральное']
      },
      {
        title: 'Вязкость по SAE',
        types: ['0W-20', '5W-30', '5W-40', '10W-40', '15W-40']
      },
      {
        title: 'Вид двигателя',
        types: ['Бензин', 'Дизель']
      }
    ]
  },

  {
    title: 'Для малоразменой техники',
    purposeList: [
      {
        title: 'Вид масла',
        types: ['Синтетическое', 'Полусинтетическое', 'Минеральное']
      },
      {
        title: 'Вязкость по SAE',
        types: ['0W-40', '10W-40']
      },
      {
        title: 'Тип двигателя',
        types: ['2-тактный', '4-тактный']
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
