'use client';

import React, { useState, useEffect } from 'react';
import { Box, Button, Checkbox, Divider, FormControlLabel, FormGroup, Typography } from '@mui/material';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';
import styled from '@emotion/styled';

const BpIcon = styled('span')(({ theme }) => ({
  borderRadius: 3,
  width: 20,
  height: 20,
  boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
  backgroundColor: '#f5f8fa',
  backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
  '.Mui-focusVisible &': {
    outline: '2px auto rgba(19,124,189,.6)',
    outlineOffset: 2
  },
  'input:hover ~ &': {
    backgroundColor: '#ebf1f5',
    ...theme.applyStyles('dark', {
      backgroundColor: '#30404d'
    })
  },
  'input:disabled ~ &': {
    boxShadow: 'none',
    background: 'rgba(206,217,224,.5)',
    ...theme.applyStyles('dark', {
      background: 'rgba(57,75,89,.5)'
    })
  },
  ...theme.applyStyles('dark', {
    boxShadow: '0 0 0 1px rgb(16 22 26 / 40%)',
    backgroundColor: '#394b59',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'
  })
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: 'red',
  backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
  '&::before': {
    display: 'block',
    width: 20,
    height: 20,
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
      " fillRule='evenodd' clipRule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
      "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
    content: '""'
  },
  'input:hover ~ &': {
    backgroundColor: 'red'
  }
});

const FilterFields = (props) => {
  const { options = [], fieldValue, filtersState, onFilterChangeEmit, isLoading = false } = props;

  const value = filtersState?.[fieldValue];

  const [optionsFormatted, setOptionsFormatted] = useState([]);

  const [isFullSize, setIsFullSize] = useState(false);
  const isLargeSize = options.length > 3;

  const onFilterChange = (event, data) => {
    const res = event.target.checked ? [...value, data.id] : value.filter((id) => id !== data.id);

    onFilterChangeEmit(fieldValue, res);
  };

  useEffect(() => {
    const optionsSortedById = [...options].sort((a, b) => {
      if (a.id < b.id) return -1;
      if (a.id > b.id) return 1;
      return 0;
    });

    const optionsSortedByAvailbale = [...optionsSortedById].sort((a, b) => {
      if (a.available && !b.available) return -1;
      if (!a.available && b.available) return 1;
      return 0;
    });

    const optionsSortedByChecked = [...optionsSortedByAvailbale].sort((a, b) => {
      if (value?.includes(a.id) && !value?.includes(b.id)) return -1;
      if (!value?.includes(a.id) && value?.includes(b.id)) return 1;
      return 0;
    });

    setOptionsFormatted(isLargeSize && !isFullSize ? optionsSortedByChecked.slice(0, 3) : [...optionsSortedByChecked]);
  }, [options, isFullSize]);

  return (
    <FormGroup>
      {optionsFormatted.map((option) => {
        return (
          <FormControlLabel
            key={`${option.id}-${option.name}`}
            title={option.name}
            sx={{
              '& span': {
                fontSize: '16px',
                color: '#1D2939',
                lineHeight: '18px'
              }
            }}
            control={
              <Checkbox
                size="small"
                color="error"
                checked={value?.includes(option.id)}
                onChange={(event) => onFilterChange(event, option)}
                icon={<BpIcon />}
                disabled={!option.available || isLoading}
                checkedIcon={<BpCheckedIcon />}
                sx={{
                  mr: 1
                }}
              />
            }
            label={option.field_name || option.name}
          />
        );
      })}

      {isLargeSize && (
        <Button
          sx={{ textTransform: 'initial', textAlign: 'left' }}
          size="small"
          onClick={() => setIsFullSize((prev) => !prev)}
        >
          {isFullSize ? 'Скрыть' : 'Показать еще'}
          {isFullSize ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        </Button>
      )}
    </FormGroup>
  );
};

export default function Filters(props) {
  const { isCategoriesLoading, isOilsLoading, onFiltersChangeEmit, onClearFiltersClick, filters, filtersState } = props;
  const isFiltersEmpty = filtersState && Object.values(filtersState).every((value) => value.length === 0);

  const onFilterChange = (field, value) => {
    onFiltersChangeEmit({ [field]: value });
  };

  const onFilterClearClick = () => {
    if (isFiltersEmpty) return;

    onClearFiltersClick();
  };

  return (
    <Box
      sx={(theme) => ({
        width: '320px',
        minWidth: '320px',
        borderRadius: '6px',
        padding: '18px',
        border: '1px solid #d6d6d6',

        [theme.breakpoints.down('md')]: {
          width: '100%'
        }
      })}
    >
      {isCategoriesLoading ? (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100px'
          }}
        >
          <CircularProgress size={34} />
        </Box>
      ) : (
        <>
          {filters.map((filter, index, arr) => {
            return filter.options.length > 0 ? (
              <Box key={filter?.field_name}>
                <Box>
                  <Typography
                    variant="body1"
                    fontWeight="800"
                    sx={{ mb: 1, color: '#454F5B', textTransform: 'uppercase' }}
                  >
                    {filter?.field_name}
                  </Typography>

                  <FilterFields
                    isLoading={isOilsLoading}
                    options={filter.options || []}
                    filtersState={filtersState}
                    fieldValue={filter?.field_value}
                    onFilterChangeEmit={onFilterChange}
                  />
                </Box>

                {index + 1 < arr.length && <Divider sx={{ my: 5, mx: '-8px', backgroundColor: '#d6d6d6' }}></Divider>}
              </Box>
            ) : null;
          })}

          {!isFiltersEmpty && (
            <Button
              variant="outlined"
              sx={{
                position: 'sticky',
                bottom: '20px',
                mt: 2,
                background: '#0000001c',
                borderColor: '#CD2828',
                height: '48px',
                width: '100%',
                backdropFilter: 'blur(8px)',
                fontWeight: '600',
                color: '#CD2828'
              }}
              onClick={onFilterClearClick}
            >
              Сбросить
            </Button>
          )}
        </>
      )}
    </Box>
  );
}
