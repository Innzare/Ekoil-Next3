import React, { useState } from 'react';
import { Box, Button, Checkbox, Divider, FormControlLabel, FormGroup } from '@mui/material';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

const FILTERS = [
  {
    name: 'Назначение',
    field: 'purpose',
    options: [
      {
        name: 'Моторное'
      },
      {
        name: 'Трансмиссионное'
      },
      {
        name: 'Гидравлическое'
      }
    ]
  },
  {
    name: 'Вид масла',
    field: 'kind',
    options: [
      {
        name: 'Синтетическое'
      },
      {
        name: 'Полусинтетическое'
      },
      {
        name: 'Минеральное'
      }
    ]
  },
  {
    name: 'Вязкость по SAE',
    field: 'viscocity-sae',
    options: [
      {
        name: '5W-30'
      },
      {
        name: '5W-40'
      },
      {
        name: '10W-40'
      },
      {
        name: '10W-30'
      },
      {
        name: 'ATF'
      },
      {
        name: '75W-90'
      },
      {
        name: '80W-90'
      }
    ]
  },
  {
    name: 'Классификация по API',
    field: 'classification-api',
    options: [
      {
        name: 'SN/RC'
      },
      {
        name: 'SN'
      },
      {
        name: 'SN/CF'
      },
      {
        name: 'SL/CF'
      },
      {
        name: 'SG/CD'
      },
      {
        name: 'SF/CC'
      },
      {
        name: 'Dexron III'
      },
      {
        name: 'Dexron II D'
      },
      {
        name: 'GL-4'
      },
      {
        name: 'GL-5'
      }
    ]
  }
];

const FilterFields = (props) => {
  const { options = [] } = props;

  const [isFullSize, setIsFullSize] = useState(false);

  const isLargeSize = options.length > 3;

  const optionsFormatted = isLargeSize && !isFullSize ? options.slice(0, 3) : options;

  return (
    <FormGroup sx={{ mt: 1 }}>
      {optionsFormatted.map((option) => {
        return (
          <FormControlLabel
            sx={{ fonrSize: '12px' }}
            control={<Checkbox size="small" color="error" />}
            label={option.name}
          />
        );
      })}

      {isLargeSize && (
        <Button
          sx={{ textTransform: 'initial', textAlign: 'left' }}
          size="small"
          onClick={() => setIsFullSize(!isFullSize)}
        >
          {isFullSize ? 'Скрыть' : 'Показать еще'}
          {isFullSize ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        </Button>
      )}
    </FormGroup>
  );
};

export default function Filters() {
  return (
    <Box
      sx={{
        width: '250px',
        minWidth: '250px',
        borderRadius: '6px',

        padding: '16px 20px',
        backgroundColor: '#f5f5f5'
        // border: '1px solid #d6d6d6'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#0052cc12',
          p: 1,
          borderRadius: '4px',
          color: '#0052cc'
        }}
      >
        <h4>Фильтры:</h4>

        <FilterAltIcon />
      </Box>

      <Box sx={{ mt: 3 }}>
        {FILTERS.map((filter, index) => {
          return (
            <>
              <h3 style={{ color: '#0052cc' }}>{filter.name}</h3>

              <FilterFields options={filter.options} />

              {/* <FormGroup sx={{ mt: 1 }}>
                {filter.options.map((option) => {
                  return (
                    <FormControlLabel
                      sx={{ fonrSize: '12px' }}
                      control={<Checkbox size="small" color="error" />}
                      label={option.name}
                    />
                  );
                })}
              </FormGroup> */}

              {index < FILTERS.length - 1 && <Divider sx={{ my: 4 }} />}
            </>
          );
        })}
      </Box>
    </Box>
  );
}
