'use client';

import React from 'react';
import Link from 'next/link';
import { Product, ProductImg, ProductTitle, ProductSubTitle, PreviewButton } from './style';
import { Box, Button, IconButton, Card, Grid, Typography, Tooltip } from '@mui/material';
import SubjectOutlinedIcon from '@mui/icons-material/SubjectOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import { useRouter } from 'next/navigation';

export default function ProductItem(props) {
  const { data, onProductPreviewClick } = props;

  const router = useRouter();

  const handleNavigate = () => {
    router.push(`/catalog/${data.product_number}`);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        gap: '16px',
        borderRadius: '6px',
        padding: '24px',
        backgroundColor: 'rgb(238, 243, 250)'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '42px'
        }}
      >
        <img width="100" height="100" src={data.img} srcSet={data.img} alt={data.name} loading="lazy" />

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '16px'
          }}
        >
          <Typography variant="h5" fontWeight={700}>
            {data.name}
          </Typography>
          <Typography variant="body">{data.subtitle}</Typography>

          <Button sx={{ textTransform: 'initial' }} variant="outlined">
            Скачать TDS
            <DescriptionOutlinedIcon sx={{ ml: 2 }} />
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          justifyContent: 'space-between'
        }}
      >
        <Tooltip title="Предпросмотр">
          <IconButton color="primary" onClick={() => onProductPreviewClick(data)}>
            <VisibilityOutlinedIcon />
          </IconButton>
        </Tooltip>

        <Button
          sx={{ textTransform: 'initial' }}
          variant="outlined"
          startIcon={<SubjectOutlinedIcon />}
          onClick={handleNavigate}
        >
          Подробнее
        </Button>
      </Box>
    </Box>
  );
}
