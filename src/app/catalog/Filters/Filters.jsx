'use client';

import React, { useState, useEffect } from 'react';
import { Box, Button, Checkbox, Divider, FormControlLabel, FormGroup, Typography } from '@mui/material';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';
import styled from '@emotion/styled';

const FilterFields = (props) => {
  const { options = [], filtersState, fieldValue, onFilterChangeEmit, isFirstStep = false } = props;

  const [optionsFormatted, setOptionsFormatted] = useState([]);

  const [isFullSize, setIsFullSize] = useState(false);
  const [isFirstStepChecked, setIsFirstStepChecked] = useState(false);

  const isLargeSize = options.length > 3;

  // let optionsFormatted = isLargeSize && !isFullSize ? options.slice(0, 3) : [...options];

  const onFilterChange = (event, data) => {
    if (isFirstStep && event.target.checked) {
      setIsFirstStepChecked(true);

      setOptionsFormatted((prev) => {
        return prev.filter((item) => item.id === data.id);
      });
    } else if (isFirstStep && !event.target.checked) {
      setIsFirstStepChecked(false);

      setOptionsFormatted(isLargeSize && !isFullSize ? options.slice(0, 3) : [...options]);
    }

    onFilterChangeEmit(fieldValue, event.target.checked ? data : null);
  };

  useEffect(() => {
    setOptionsFormatted(isLargeSize && !isFullSize ? options.slice(0, 3) : [...options]);
  }, [options, isFullSize]);

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

  return (
    <FormGroup>
      {optionsFormatted.map((option) => {
        return (
          <FormControlLabel
            key={`${option.id}-${option.field_name}`}
            title={option.field_name || option.name}
            sx={{
              '& span': {
                fontSize: '16px',
                color: '#1D2939',
                lineHeight: '18px'
                // whiteSpace: 'nowrap',
                // overflow: 'hidden',
                // textOverflow: 'ellipsis',
                // maxWidth: '180px',
              }
            }}
            control={
              <Checkbox
                size="small"
                color="error"
                checked={filtersState[fieldValue] === option.id}
                onChange={(event) => onFilterChange(event, option)}
                icon={<BpIcon />}
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

      {isLargeSize && !isFirstStepChecked && (
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
  const { category = '', isLoading, onFiltersChangeEmit } = props;

  const [filters, setFilters] = useState(null);
  const [filtersState, setFiltersState] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState(null);
  const [secondStepFilters, setSecondStepFilters] = useState([]);

  useEffect(() => {
    setSelectedFilters(null);
    loadFilters();
  }, [category]);

  const loadFilters = async () => {
    const { data } = await axios.get('api/products/filters');

    // setSelectedFilters(null);
    setFilters(data);

    const categoryStringFormatted = category.split('-').join('_');
    const selectedFiltersValue = data !== null ? data[categoryStringFormatted] : [];

    setSelectedFilters(selectedFiltersValue);
    setSecondStepFilters([]);

    setFiltersState({
      [selectedFiltersValue?.field_value]: null
    });
  };

  const onFilterChange = (field, data, isFirstStep) => {
    setFiltersState((prev) => {
      let res;

      if (isFirstStep && data === null) {
        res = {
          [field]: null
        };
      } else {
        res = {
          ...prev,
          [field]: data?.id
        };
      }

      if (data?.filters) {
        data.filters.forEach((item) => {
          res[item.field_value] = null;
        });
      }

      onFiltersChangeEmit(res);
      return res;
    });

    if (isFirstStep) {
      setSecondStepFilters(data ? data.filters : []);
    }
  };

  return (
    <Box
      sx={(theme) => ({
        width: '320px',
        minWidth: '320px',
        borderRadius: '6px',

        padding: '16px 20px',
        backgroundColor: '#eef3fa',

        [theme.breakpoints.down('md')]: {
          width: '100%'
        }
        // border: '1px solid #d6d6d6'
      })}
    >
      {!selectedFilters ? (
        <Box sx={{ textAlign: 'center', py: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <Box>
            <Typography variant="body1" fontWeight="800" sx={{ mb: 1, color: '#454F5B', textTransform: 'uppercase' }}>
              {selectedFilters?.field_name}
            </Typography>

            {filtersState !== null && selectedFilters !== null && (
              <FilterFields
                isFirstStep
                options={selectedFilters.options || []}
                filtersState={filtersState}
                fieldValue={selectedFilters?.field_value}
                onFilterChangeEmit={(field, data) => onFilterChange(field, data, true)}
              />
            )}
          </Box>

          {secondStepFilters.length > 0 && <Divider></Divider>}

          {secondStepFilters.length > 0 &&
            secondStepFilters.map((filter, index, arr) => {
              return (
                <Box key={filter?.field_name}>
                  <Box sx={{ mb: index + 1 < arr.length ? 3 : 0 }}>
                    <Typography
                      variant="body1"
                      fontWeight="800"
                      sx={{ mb: 1, color: '#454F5B', textTransform: 'uppercase' }}
                    >
                      {filter?.field_name}
                    </Typography>

                    <FilterFields
                      options={filter.options || []}
                      filtersState={filtersState}
                      fieldValue={filter?.field_value}
                      onFilterChangeEmit={onFilterChange}
                    />
                  </Box>

                  {index + 1 < arr.length && <Divider></Divider>}
                </Box>
              );
            })}
        </Box>
      )}
    </Box>
  );
}
