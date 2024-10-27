import React from 'react';
import { Box, List, ListItemButton, ListItemText, ListSubheader } from '@mui/material';

const data = [
  {
    title: 'Для легковых автомобилей',
    purposeList: [
      {
        title: 'Вид масла',
        types: ['Синтетическое', 'Полусинтетическое', 'Минеральное']
      },
      {
        title: 'Линейка',
        types: ['ATF', 'CVT', 'ТМ-4', 'ТМ-5']
      },
      {
        title: 'Коробка передач',
        types: ['Автоматическая', 'Механическая', 'Вариатор']
      },
      {
        title: 'Классификация по API',
        types: ['GL-4', 'GL-5', 'GL-4/GL-5']
      }
    ]
  },

  {
    title: 'Для коммерческого транспорта',
    purposeList: [
      {
        title: 'Вид масла',
        types: ['Синтетическое', 'Полусинтетическое', 'Минеральное']
      },
      {
        title: 'Линейка',
        types: ['ATF', 'ТМ-4', 'ТМ-5']
      },
      {
        title: 'Коробка передач',
        types: ['Автоматическая', 'Механическая']
      },
      {
        title: 'Классификация по API',
        types: ['GL-4', 'GL-5', 'GL-4/GL-5']
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
        title: 'Линейка',
        types: ['ATF', 'ТМ-4', 'ТМ-5']
      },
      {
        title: 'Коробка передач',
        types: ['Автоматическая', 'Механическая']
      }
    ]
  },

  {
    title: 'Охлаждающие жидкости',
    purposeList: [
      {
        title: 'Линейка',
        types: ['G11', 'G12']
      },
      {
        title: 'Цвет',
        types: ['Зеленый', 'Крансый']
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
